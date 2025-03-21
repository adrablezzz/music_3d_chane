/*
 * @Date: 2025-03-13 17:30:27
 * @LastEditTime: 2025-03-21 15:36:35
 */

import { useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css'
import * as THREE from 'three';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";


gsap.registerPlugin(ScrollTrigger);

function App() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio('/src/assets/audio/诺言_陈洁丽.mp3'));

  const onAudioClick = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };
  //

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setPlaying(false);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  function initSense() {
    interface MathUtils {
      normalize: ($value: number, $min: number, $max: number) => number;
      interpolate: ($normValue: number, $min: number, $max: number) => number;
      map: ($value: number, $min1: number, $max1: number, $min2: number, $max2: number) => number;
    }

    const Mathutils: MathUtils = {
      normalize: function ($value: number, $min: number, $max: number): number {
        return ($value - $min) / ($max - $min);
      },
      interpolate: function ($normValue: number, $min: number, $max: number): number {
        return $min + ($max - $min) * $normValue;
      },
      map: function ($value: number, $min1: number, $max1: number, $min2: number, $max2: number): number {
        if ($value < $min1) {
          $value = $min1;
        }
        if ($value > $max1) {
          $value = $max1;
        }
        const res = this.interpolate(this.normalize($value, $min1, $max1), $min2, $max2);
        return res;
      }
    };
    // Removed unused 'markers' variable


    //Get window size
    const ww: number = window.innerWidth,
      wh: number = window.innerHeight;

    let composer: EffectComposer, params = {
      exposure: 1.3,
      bloomStrength: .9,
      bloomThreshold: 0,
      bloomRadius: 0
    };

    //Create a WebGL renderer
    let renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("canvas"),
      antialias: true,
      shadowMapEnabled: true,
      shadowMapType: THREE.PCFSoftShadowMap
    });
    renderer.setSize(ww, wh);

    //Create an empty scene
    let scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x194794, 0, 100);

    //Create a perpsective camera
    let cameraRotationProxyX = 3.14159;
    let cameraRotationProxyY = 0;

    let camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
    camera.rotation.y = cameraRotationProxyX;
    camera.rotation.z = cameraRotationProxyY;

    //camera.position.z = 400;
    let c = new THREE.Group();
    c.position.z = 400;

    c.add(camera);
    scene.add(c);


    //set up render pass
    let renderScene = new RenderPass(scene, camera);
    let bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.renderToScreen = true;
    bloomPass.threshold = params.bloomThreshold;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;
    composer = new EffectComposer(renderer);
    composer.setSize(window.innerWidth, window.innerHeight);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);


    //Array of points
    const points = [
      [10, 89, 0],
      [50, 88, 10],
      [76, 139, 20],
      [126, 141, 12],
      [150, 112, 8],
      [157, 73, 0],
      [180, 44, 5],
      [207, 35, 10],
      [232, 36, 0],
      
      //延长path长度
      [260, 50, -10],
      [290, 70, 0],
      [320, 100, 15],
      [350, 120, 5],
      [380, 90, -5],
      [410, 60, 0],
      [440, 40, 10],
      [470, 30, 0],
    ];

    let p1, p2;

    //Convert the array of points into vertices
    for (let i = 0; i < points.length; i++) {
      let x = points[i][0];
      let y = points[i][2];
      let z = points[i][1];
      points[i] = new THREE.Vector3(x, y, z);
    }
    //Create a path from the points
    let path = new THREE.CatmullRomCurve3(points);
    //path.curveType = 'catmullrom';
    path.tension = .5;

    //Create a new geometry with a different radius
    const geometry = new THREE.TubeGeometry(path, 300, 4, 32, false);

    // 创建加载管理器
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      console.log('所有资源加载完成');
    };
    loadingManager.onProgress = (url, loaded, total) => {
      console.log(`正在加载: ${url}, 进度: ${(loaded / total) * 100}%`);
    };
    loadingManager.onError = (url) => {
      console.error('加载出错:', url);
    };

    const textureLoader = new THREE.TextureLoader(loadingManager);

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // 修改材质创建方式
    const material = new THREE.MeshPhongMaterial({
      side: THREE.BackSide,
      map: textureLoader.load('/textures/3d_space_5.jpg', (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(15, 2);
        material.needsUpdate = true;
      }),
      bumpMap: textureLoader.load('/textures/waveform-bump3.jpg', (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(15, 2);
        material.needsUpdate = true;
      }),
      shininess: 20,
      bumpScale: -0.03,
      specular: 0x0b2349
    });

    // 调整渲染器设置
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    // 创建管道
    const tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    //inner tube.=========================================

    //Create a new geometry with a different radius
    var geometry1 = new THREE.TubeGeometry(path, 150, 3.4, 32, false);
    let geo = new THREE.EdgesGeometry(geometry1);
    //THREE.EdgesGeometry( geometry );

    let mat = new THREE.LineBasicMaterial({
      linewidth: 2,
      opacity: .2,
      transparent: 1
    });

    let wireframe = new THREE.LineSegments(geo, mat);
    scene.add(wireframe);

    //-------------------------


    //Create a point light in our scene
    let light = new THREE.PointLight(0xffffff, .35, 4, 0);
    light.castShadow = true;
    scene.add(light);


    function updateCameraPercentage(percentage) {
      p1 = path.getPointAt(percentage);
      p2 = path.getPointAt(percentage + 0.03);

      c.position.set(p1.x, p1.y, p1.z);
      c.lookAt(p2);
      light.position.set(p2.x, p2.y, p2.z);
    }


    let cameraTargetPercentage = 0;
    let currentCameraPercentage = 0;



    gsap.defaultEase = Linear.easeNone;

    let tubePerc = {
      percent: 0
    }

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollTarget",
        start: "top top",
        end: "bottom 100%",
        scrub: 5,
        // markers: { color: "white" }
      }
    })
    tl.to(tubePerc, {
      percent: .96,
      ease: Linear.easeNone,
      duration: 10,
      onUpdate: function () {
        cameraTargetPercentage = tubePerc.percent;
      }
    });


    function render() {
      //texture.offset.x+=.004
      //texture2.needsUpdate = true;
      currentCameraPercentage = cameraTargetPercentage

      camera.rotation.y += (cameraRotationProxyX - camera.rotation.y) / 15;
      camera.rotation.x += (cameraRotationProxyY - camera.rotation.x) / 15;

      updateCameraPercentage(currentCameraPercentage);
      updatePlaneProps()

      //animate texture

      particleSystem1.rotation.y += 0.00002;
      particleSystem2.rotation.x += 0.00005;
      particleSystem3.rotation.z += 0.00001;

      //Render the scene
      //renderer.render(scene, camera);
      composer.render();

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // document.querySelector('canvas')?.click(function () {
    //   console.clear();
    //   markers.push(p1);
    //   console.log(JSON.stringify(markers));
    // });

    window.addEventListener('resize', function () {

      let width = window.innerWidth;
      let height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      composer.setSize(width, height);

    }, false);



    let lastPlace = 0;
    let newPlace = 0;



    //particle system
    // create the particle letiables
    //
    let spikeyTexture = textureLoader.load('/textures/spikey.png');  // 改为使用public目录下的路径


    let particleCount = 6800,
      particles1 = new THREE.BufferGeometry(),
      particles2 = new THREE.BufferGeometry(),
      particles3 = new THREE.BufferGeometry(),
      pMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: .5,
        map: spikeyTexture,
        transparent: true,
        blending: THREE.AdditiveBlending
      });

    const positions1 = [];
    const positions2 = [];
    const positions3 = [];

    for (let p = 0; p < particleCount; p++) {
      // 创建随机粒子位置
      positions1.push(Math.random() * 500 - 250, Math.random() * 50 - 25, Math.random() * 500 - 250);
      positions2.push(Math.random() * 500, Math.random() * 10 - 5, Math.random() * 500);
      positions3.push(Math.random() * 500, Math.random() * 10 - 5, Math.random() * 500);
    }

    particles1.setAttribute('position', new THREE.Float32BufferAttribute(positions1, 3));
    particles2.setAttribute('position', new THREE.Float32BufferAttribute(positions2, 3));
    particles3.setAttribute('position', new THREE.Float32BufferAttribute(positions3, 3));

    // create the particle system
    let particleSystem1 = new THREE.Points(
      particles1,
      pMaterial);

    let particleSystem2 = new THREE.Points(
      particles2,
      pMaterial);

    let particleSystem3 = new THREE.Points(
      particles3,
      pMaterial);

    // add it to the scene
    scene.add(particleSystem1);
    scene.add(particleSystem2);
    scene.add(particleSystem3);


    document.addEventListener('mousemove', function (evt) {
      cameraRotationProxyX = Mathutils.map(evt.clientX, 0, window.innerWidth, 3.24, 3.04);
      cameraRotationProxyY = Mathutils.map(evt.clientY, 0, window.innerHeight, -0.1, 0.1);
    });


    const setPlaneItem = (item: any) => {
      const { text='test', position=1 } = item || {};
      // 创建文字纹理
      const canvas = document.createElement('canvas');
      const SIZE = 1;
      canvas.width = 512 / SIZE;
      canvas.height = 256 / SIZE;
      const context = canvas.getContext('2d');

      // 设置画布样式
      context.fillStyle = 'rgba(0, 0, 0, 0.7)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // 设置文字样式
      context.font = '28px Arial';
      context.textAlign = 'center';
      context.fillStyle = 'white';
      // 换行加上文字
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      // 创建纹理
      const texture = new THREE.CanvasTexture(canvas);

      // 创建平面
      const planeGeometry = new THREE.PlaneGeometry(20, 10);
      const planeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });

      const plane = new THREE.Mesh(planeGeometry, planeMaterial);

      // 获取路径终点位置
      const endPoint = path.getPointAt(position);
      plane.position.set(endPoint.x, endPoint.y, endPoint.z);

      scene.add(plane);
      return plane
    }

    const updatePlaneProps = () => {
      textPlaneList.forEach(plane => {
        plane.lookAt(c.position)
      })
    }

    const wordString = `晴天，雨天，落幕又在上演，留恋，昨夜，流星划过云烟。
    总在梦里穿越，灿烂星光点点，醒来浮显眼前，是尘封的诺言。
    波浪翻过大海，倾听风的思念，我穿越人世间，才想起你的脸。
    抬头，看见，漫天风花雪月，回眸，发现，你就在我身边。`

    let textPlaneList = wordString
    .split(/，|。|\n/)
    .filter(i => i)

    textPlaneList = textPlaneList
      .map((item,index) => ({ text: item, position: Number(1 / textPlaneList.length * (index+1)).toFixed(2)*1 }))

    
    textPlaneList = textPlaneList.map((item) => setPlaneItem(item))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    initSense()
  }, []);

  

  return (
    <>
      <canvas className="experience"></canvas>
      <div className="scrollTarget"></div>
      <div className="vignette-radial"></div>
      <div className={`audio ${playing ? 'play' : 'pause'}`} onClick={onAudioClick}></div>
    </>
  );
}

export default App;