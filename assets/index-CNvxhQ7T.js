(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var uy={exports:{}},Uh={},cy={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu=Symbol.for("react.element"),LE=Symbol.for("react.portal"),UE=Symbol.for("react.fragment"),IE=Symbol.for("react.strict_mode"),NE=Symbol.for("react.profiler"),FE=Symbol.for("react.provider"),OE=Symbol.for("react.context"),kE=Symbol.for("react.forward_ref"),zE=Symbol.for("react.suspense"),BE=Symbol.for("react.memo"),VE=Symbol.for("react.lazy"),f0=Symbol.iterator;function HE(n){return n===null||typeof n!="object"?null:(n=f0&&n[f0]||n["@@iterator"],typeof n=="function"?n:null)}var fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hy=Object.assign,dy={};function ml(n,e,t){this.props=n,this.context=e,this.refs=dy,this.updater=t||fy}ml.prototype.isReactComponent={};ml.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ml.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function py(){}py.prototype=ml.prototype;function Dg(n,e,t){this.props=n,this.context=e,this.refs=dy,this.updater=t||fy}var Lg=Dg.prototype=new py;Lg.constructor=Dg;hy(Lg,ml.prototype);Lg.isPureReactComponent=!0;var h0=Array.isArray,my=Object.prototype.hasOwnProperty,Ug={current:null},gy={key:!0,ref:!0,__self:!0,__source:!0};function _y(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)my.call(e,i)&&!gy.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Zu,type:n,key:s,ref:o,props:r,_owner:Ug.current}}function GE(n,e){return{$$typeof:Zu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ig(n){return typeof n=="object"&&n!==null&&n.$$typeof===Zu}function WE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var d0=/\/+/g;function id(n,e){return typeof n=="object"&&n!==null&&n.key!=null?WE(""+n.key):e.toString(36)}function gf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Zu:case LE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+id(o,0):i,h0(r)?(t="",n!=null&&(t=n.replace(d0,"$&/")+"/"),gf(r,e,t,"",function(u){return u})):r!=null&&(Ig(r)&&(r=GE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(d0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",h0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+id(s,a);o+=gf(s,e,t,l,r)}else if(l=HE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+id(s,a++),o+=gf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cc(n,e,t){if(n==null)return n;var i=[],r=0;return gf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function XE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Qn={current:null},_f={transition:null},YE={ReactCurrentDispatcher:Qn,ReactCurrentBatchConfig:_f,ReactCurrentOwner:Ug};function vy(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:cc,forEach:function(n,e,t){cc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return cc(n,function(){e++}),e},toArray:function(n){return cc(n,function(e){return e})||[]},only:function(n){if(!Ig(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=ml;at.Fragment=UE;at.Profiler=NE;at.PureComponent=Dg;at.StrictMode=IE;at.Suspense=zE;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE;at.act=vy;at.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=hy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ug.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)my.call(e,l)&&!gy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Zu,type:n.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(n){return n={$$typeof:OE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:FE,_context:n},n.Consumer=n};at.createElement=_y;at.createFactory=function(n){var e=_y.bind(null,n);return e.type=n,e};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:kE,render:n}};at.isValidElement=Ig;at.lazy=function(n){return{$$typeof:VE,_payload:{_status:-1,_result:n},_init:XE}};at.memo=function(n,e){return{$$typeof:BE,type:n,compare:e===void 0?null:e}};at.startTransition=function(n){var e=_f.transition;_f.transition={};try{n()}finally{_f.transition=e}};at.unstable_act=vy;at.useCallback=function(n,e){return Qn.current.useCallback(n,e)};at.useContext=function(n){return Qn.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return Qn.current.useDeferredValue(n)};at.useEffect=function(n,e){return Qn.current.useEffect(n,e)};at.useId=function(){return Qn.current.useId()};at.useImperativeHandle=function(n,e,t){return Qn.current.useImperativeHandle(n,e,t)};at.useInsertionEffect=function(n,e){return Qn.current.useInsertionEffect(n,e)};at.useLayoutEffect=function(n,e){return Qn.current.useLayoutEffect(n,e)};at.useMemo=function(n,e){return Qn.current.useMemo(n,e)};at.useReducer=function(n,e,t){return Qn.current.useReducer(n,e,t)};at.useRef=function(n){return Qn.current.useRef(n)};at.useState=function(n){return Qn.current.useState(n)};at.useSyncExternalStore=function(n,e,t){return Qn.current.useSyncExternalStore(n,e,t)};at.useTransition=function(){return Qn.current.useTransition()};at.version="18.3.1";cy.exports=at;var Vr=cy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qE=Vr,$E=Symbol.for("react.element"),jE=Symbol.for("react.fragment"),KE=Object.prototype.hasOwnProperty,ZE=qE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QE={key:!0,ref:!0,__self:!0,__source:!0};function xy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)KE.call(e,i)&&!QE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$E,type:n,key:s,ref:o,props:r,_owner:ZE.current}}Uh.Fragment=jE;Uh.jsx=xy;Uh.jsxs=xy;uy.exports=Uh;var vs=uy.exports,yy={exports:{}},Ui={},Sy={exports:{}},My={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,$){var P=U.length;U.push($);e:for(;0<P;){var te=P-1>>>1,_e=U[te];if(0<r(_e,$))U[te]=$,U[P]=_e,P=te;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var $=U[0],P=U.pop();if(P!==$){U[0]=P;e:for(var te=0,_e=U.length,Ye=_e>>>1;te<Ye;){var Y=2*(te+1)-1,ne=U[Y],ae=Y+1,re=U[ae];if(0>r(ne,P))ae<_e&&0>r(re,ne)?(U[te]=re,U[ae]=P,te=ae):(U[te]=ne,U[Y]=P,te=Y);else if(ae<_e&&0>r(re,P))U[te]=re,U[ae]=P,te=ae;else break e}}return $}function r(U,$){var P=U.sortIndex-$.sortIndex;return P!==0?P:U.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,d=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=U)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function y(U){if(_=!1,x(U),!g)if(t(l)!==null)g=!0,G(A);else{var $=t(u);$!==null&&X(y,$.startTime-U)}}function A(U,$){g=!1,_&&(_=!1,p(b),b=-1),d=!0;var P=h;try{for(x($),f=t(l);f!==null&&(!(f.expirationTime>$)||U&&!D());){var te=f.callback;if(typeof te=="function"){f.callback=null,h=f.priorityLevel;var _e=te(f.expirationTime<=$);$=n.unstable_now(),typeof _e=="function"?f.callback=_e:f===t(l)&&i(l),x($)}else i(l);f=t(l)}if(f!==null)var Ye=!0;else{var Y=t(u);Y!==null&&X(y,Y.startTime-$),Ye=!1}return Ye}finally{f=null,h=P,d=!1}}var w=!1,E=null,b=-1,M=5,S=-1;function D(){return!(n.unstable_now()-S<M)}function F(){if(E!==null){var U=n.unstable_now();S=U;var $=!0;try{$=E(!0,U)}finally{$?z():(w=!1,E=null)}}else w=!1}var z;if(typeof v=="function")z=function(){v(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,j=q.port2;q.port1.onmessage=F,z=function(){j.postMessage(null)}}else z=function(){m(F,0)};function G(U){E=U,w||(w=!0,z())}function X(U,$){b=m(function(){U(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){g||d||(g=!0,G(A))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var P=h;h=$;try{return U()}finally{h=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var P=h;h=U;try{return $()}finally{h=P}},n.unstable_scheduleCallback=function(U,$,P){var te=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,U){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=P+_e,U={id:c++,callback:$,priorityLevel:U,startTime:P,expirationTime:_e,sortIndex:-1},P>te?(U.sortIndex=P,e(u,U),t(l)===null&&U===t(u)&&(_?(p(b),b=-1):_=!0,X(y,P-te))):(U.sortIndex=_e,e(l,U),g||d||(g=!0,G(A))),U},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(U){var $=h;return function(){var P=h;h=$;try{return U.apply(this,arguments)}finally{h=P}}}})(My);Sy.exports=My;var JE=Sy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eT=Vr,Pi=JE;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ey=new Set,Mu={};function Xo(n,e){qa(n,e),qa(n+"Capture",e)}function qa(n,e){for(Mu[n]=e,n=0;n<e.length;n++)Ey.add(e[n])}var ts=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cp=Object.prototype.hasOwnProperty,tT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p0={},m0={};function nT(n){return Cp.call(m0,n)?!0:Cp.call(p0,n)?!1:tT.test(n)?m0[n]=!0:(p0[n]=!0,!1)}function iT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function rT(n,e,t,i){if(e===null||typeof e>"u"||iT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var En={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){En[n]=new Jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];En[e]=new Jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){En[n]=new Jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){En[n]=new Jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){En[n]=new Jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){En[n]=new Jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){En[n]=new Jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){En[n]=new Jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){En[n]=new Jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ng=/[\-:]([a-z])/g;function Fg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ng,Fg);En[e]=new Jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ng,Fg);En[e]=new Jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ng,Fg);En[e]=new Jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){En[n]=new Jn(n,1,!1,n.toLowerCase(),null,!1,!1)});En.xlinkHref=new Jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){En[n]=new Jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Og(n,e,t,i){var r=En.hasOwnProperty(e)?En[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rT(e,t,r,i)&&(t=null),i||r===null?nT(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ls=eT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fc=Symbol.for("react.element"),ga=Symbol.for("react.portal"),_a=Symbol.for("react.fragment"),kg=Symbol.for("react.strict_mode"),Rp=Symbol.for("react.profiler"),Ty=Symbol.for("react.provider"),wy=Symbol.for("react.context"),zg=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),Pp=Symbol.for("react.suspense_list"),Bg=Symbol.for("react.memo"),xs=Symbol.for("react.lazy"),Ay=Symbol.for("react.offscreen"),g0=Symbol.iterator;function Sl(n){return n===null||typeof n!="object"?null:(n=g0&&n[g0]||n["@@iterator"],typeof n=="function"?n:null)}var Bt=Object.assign,rd;function zl(n){if(rd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);rd=e&&e[1]||""}return`
`+rd+n}var sd=!1;function od(n,e){if(!n||sd)return"";sd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{sd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?zl(n):""}function sT(n){switch(n.tag){case 5:return zl(n.type);case 16:return zl("Lazy");case 13:return zl("Suspense");case 19:return zl("SuspenseList");case 0:case 2:case 15:return n=od(n.type,!1),n;case 11:return n=od(n.type.render,!1),n;case 1:return n=od(n.type,!0),n;default:return""}}function Dp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _a:return"Fragment";case ga:return"Portal";case Rp:return"Profiler";case kg:return"StrictMode";case bp:return"Suspense";case Pp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case wy:return(n.displayName||"Context")+".Consumer";case Ty:return(n._context.displayName||"Context")+".Provider";case zg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Bg:return e=n.displayName||null,e!==null?e:Dp(n.type)||"Memo";case xs:e=n._payload,n=n._init;try{return Dp(n(e))}catch{}}return null}function oT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dp(e);case 8:return e===kg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Cy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aT(n){var e=Cy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function hc(n){n._valueTracker||(n._valueTracker=aT(n))}function Ry(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Cy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Wf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Lp(n,e){var t=e.checked;return Bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function _0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Gs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function by(n,e){e=e.checked,e!=null&&Og(n,"checked",e,!1)}function Up(n,e){by(n,e);var t=Gs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ip(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ip(n,e.type,Gs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function v0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ip(n,e,t){(e!=="number"||Wf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Bl=Array.isArray;function La(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Gs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Np(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Bt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function x0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(Bl(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Gs(t)}}function Py(n,e){var t=Gs(e.value),i=Gs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function y0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Dy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Dy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var dc,Ly=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(dc=dc||document.createElement("div"),dc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Eu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ql={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lT=["Webkit","ms","Moz","O"];Object.keys(Ql).forEach(function(n){lT.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ql[e]=Ql[n]})});function Uy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ql.hasOwnProperty(n)&&Ql[n]?(""+e).trim():e+"px"}function Iy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Uy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var uT=Bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Op(n,e){if(e){if(uT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function kp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zp=null;function Vg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Bp=null,Ua=null,Ia=null;function S0(n){if(n=ec(n)){if(typeof Bp!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=kh(e),Bp(n.stateNode,n.type,e))}}function Ny(n){Ua?Ia?Ia.push(n):Ia=[n]:Ua=n}function Fy(){if(Ua){var n=Ua,e=Ia;if(Ia=Ua=null,S0(n),e)for(n=0;n<e.length;n++)S0(e[n])}}function Oy(n,e){return n(e)}function ky(){}var ad=!1;function zy(n,e,t){if(ad)return n(e,t);ad=!0;try{return Oy(n,e,t)}finally{ad=!1,(Ua!==null||Ia!==null)&&(ky(),Fy())}}function Tu(n,e){var t=n.stateNode;if(t===null)return null;var i=kh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var Vp=!1;if(ts)try{var Ml={};Object.defineProperty(Ml,"passive",{get:function(){Vp=!0}}),window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{Vp=!1}function cT(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Jl=!1,Xf=null,Yf=!1,Hp=null,fT={onError:function(n){Jl=!0,Xf=n}};function hT(n,e,t,i,r,s,o,a,l){Jl=!1,Xf=null,cT.apply(fT,arguments)}function dT(n,e,t,i,r,s,o,a,l){if(hT.apply(this,arguments),Jl){if(Jl){var u=Xf;Jl=!1,Xf=null}else throw Error(oe(198));Yf||(Yf=!0,Hp=u)}}function Yo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function By(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function M0(n){if(Yo(n)!==n)throw Error(oe(188))}function pT(n){var e=n.alternate;if(!e){if(e=Yo(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return M0(r),n;if(s===i)return M0(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function Vy(n){return n=pT(n),n!==null?Hy(n):null}function Hy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Hy(n);if(e!==null)return e;n=n.sibling}return null}var Gy=Pi.unstable_scheduleCallback,E0=Pi.unstable_cancelCallback,mT=Pi.unstable_shouldYield,gT=Pi.unstable_requestPaint,qt=Pi.unstable_now,_T=Pi.unstable_getCurrentPriorityLevel,Hg=Pi.unstable_ImmediatePriority,Wy=Pi.unstable_UserBlockingPriority,qf=Pi.unstable_NormalPriority,vT=Pi.unstable_LowPriority,Xy=Pi.unstable_IdlePriority,Ih=null,wr=null;function xT(n){if(wr&&typeof wr.onCommitFiberRoot=="function")try{wr.onCommitFiberRoot(Ih,n,void 0,(n.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:MT,yT=Math.log,ST=Math.LN2;function MT(n){return n>>>=0,n===0?32:31-(yT(n)/ST|0)|0}var pc=64,mc=4194304;function Vl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $f(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Vl(a):(s&=o,s!==0&&(i=Vl(s)))}else o=t&~r,o!==0?i=Vl(o):s!==0&&(i=Vl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ur(e),r=1<<t,i|=n[t],e&=~r;return i}function ET(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ur(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=ET(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Gp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Yy(){var n=pc;return pc<<=1,!(pc&4194240)&&(pc=64),n}function ld(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Qu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ur(e),n[e]=t}function wT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ur(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Gg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ur(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var yt=0;function qy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var $y,Wg,jy,Ky,Zy,Wp=!1,gc=[],Ds=null,Ls=null,Us=null,wu=new Map,Au=new Map,Ss=[],AT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function T0(n,e){switch(n){case"focusin":case"focusout":Ds=null;break;case"dragenter":case"dragleave":Ls=null;break;case"mouseover":case"mouseout":Us=null;break;case"pointerover":case"pointerout":wu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Au.delete(e.pointerId)}}function El(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ec(e),e!==null&&Wg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function CT(n,e,t,i,r){switch(e){case"focusin":return Ds=El(Ds,n,e,t,i,r),!0;case"dragenter":return Ls=El(Ls,n,e,t,i,r),!0;case"mouseover":return Us=El(Us,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return wu.set(s,El(wu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Au.set(s,El(Au.get(s)||null,n,e,t,i,r)),!0}return!1}function Qy(n){var e=xo(n.target);if(e!==null){var t=Yo(e);if(t!==null){if(e=t.tag,e===13){if(e=By(t),e!==null){n.blockedOn=e,Zy(n.priority,function(){jy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Xp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);zp=i,t.target.dispatchEvent(i),zp=null}else return e=ec(t),e!==null&&Wg(e),n.blockedOn=t,!1;e.shift()}return!0}function w0(n,e,t){vf(n)&&t.delete(e)}function RT(){Wp=!1,Ds!==null&&vf(Ds)&&(Ds=null),Ls!==null&&vf(Ls)&&(Ls=null),Us!==null&&vf(Us)&&(Us=null),wu.forEach(w0),Au.forEach(w0)}function Tl(n,e){n.blockedOn===e&&(n.blockedOn=null,Wp||(Wp=!0,Pi.unstable_scheduleCallback(Pi.unstable_NormalPriority,RT)))}function Cu(n){function e(r){return Tl(r,n)}if(0<gc.length){Tl(gc[0],n);for(var t=1;t<gc.length;t++){var i=gc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ds!==null&&Tl(Ds,n),Ls!==null&&Tl(Ls,n),Us!==null&&Tl(Us,n),wu.forEach(e),Au.forEach(e),t=0;t<Ss.length;t++)i=Ss[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ss.length&&(t=Ss[0],t.blockedOn===null);)Qy(t),t.blockedOn===null&&Ss.shift()}var Na=ls.ReactCurrentBatchConfig,jf=!0;function bT(n,e,t,i){var r=yt,s=Na.transition;Na.transition=null;try{yt=1,Xg(n,e,t,i)}finally{yt=r,Na.transition=s}}function PT(n,e,t,i){var r=yt,s=Na.transition;Na.transition=null;try{yt=4,Xg(n,e,t,i)}finally{yt=r,Na.transition=s}}function Xg(n,e,t,i){if(jf){var r=Xp(n,e,t,i);if(r===null)vd(n,e,i,Kf,t),T0(n,i);else if(CT(r,n,e,t,i))i.stopPropagation();else if(T0(n,i),e&4&&-1<AT.indexOf(n)){for(;r!==null;){var s=ec(r);if(s!==null&&$y(s),s=Xp(n,e,t,i),s===null&&vd(n,e,i,Kf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else vd(n,e,i,null,t)}}var Kf=null;function Xp(n,e,t,i){if(Kf=null,n=Vg(i),n=xo(n),n!==null)if(e=Yo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=By(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Kf=n,null}function Jy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_T()){case Hg:return 1;case Wy:return 4;case qf:case vT:return 16;case Xy:return 536870912;default:return 16}default:return 16}}var Ts=null,Yg=null,xf=null;function eS(){if(xf)return xf;var n,e=Yg,t=e.length,i,r="value"in Ts?Ts.value:Ts.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return xf=r.slice(n,1<i?1-i:void 0)}function yf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function _c(){return!0}function A0(){return!1}function Ii(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_c:A0,this.isPropagationStopped=A0,this}return Bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_c)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_c)},persist:function(){},isPersistent:_c}),e}var gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qg=Ii(gl),Ju=Bt({},gl,{view:0,detail:0}),DT=Ii(Ju),ud,cd,wl,Nh=Bt({},Ju,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$g,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wl&&(wl&&n.type==="mousemove"?(ud=n.screenX-wl.screenX,cd=n.screenY-wl.screenY):cd=ud=0,wl=n),ud)},movementY:function(n){return"movementY"in n?n.movementY:cd}}),C0=Ii(Nh),LT=Bt({},Nh,{dataTransfer:0}),UT=Ii(LT),IT=Bt({},Ju,{relatedTarget:0}),fd=Ii(IT),NT=Bt({},gl,{animationName:0,elapsedTime:0,pseudoElement:0}),FT=Ii(NT),OT=Bt({},gl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kT=Ii(OT),zT=Bt({},gl,{data:0}),R0=Ii(zT),BT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=HT[n])?!!e[n]:!1}function $g(){return GT}var WT=Bt({},Ju,{key:function(n){if(n.key){var e=BT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=yf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?VT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$g,charCode:function(n){return n.type==="keypress"?yf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),XT=Ii(WT),YT=Bt({},Nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b0=Ii(YT),qT=Bt({},Ju,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$g}),$T=Ii(qT),jT=Bt({},gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),KT=Ii(jT),ZT=Bt({},Nh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),QT=Ii(ZT),JT=[9,13,27,32],jg=ts&&"CompositionEvent"in window,eu=null;ts&&"documentMode"in document&&(eu=document.documentMode);var ew=ts&&"TextEvent"in window&&!eu,tS=ts&&(!jg||eu&&8<eu&&11>=eu),P0=" ",D0=!1;function nS(n,e){switch(n){case"keyup":return JT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var va=!1;function tw(n,e){switch(n){case"compositionend":return iS(e);case"keypress":return e.which!==32?null:(D0=!0,P0);case"textInput":return n=e.data,n===P0&&D0?null:n;default:return null}}function nw(n,e){if(va)return n==="compositionend"||!jg&&nS(n,e)?(n=eS(),xf=Yg=Ts=null,va=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tS&&e.locale!=="ko"?null:e.data;default:return null}}var iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!iw[n.type]:e==="textarea"}function rS(n,e,t,i){Ny(i),e=Zf(e,"onChange"),0<e.length&&(t=new qg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var tu=null,Ru=null;function rw(n){mS(n,0)}function Fh(n){var e=Sa(n);if(Ry(e))return n}function sw(n,e){if(n==="change")return e}var sS=!1;if(ts){var hd;if(ts){var dd="oninput"in document;if(!dd){var U0=document.createElement("div");U0.setAttribute("oninput","return;"),dd=typeof U0.oninput=="function"}hd=dd}else hd=!1;sS=hd&&(!document.documentMode||9<document.documentMode)}function I0(){tu&&(tu.detachEvent("onpropertychange",oS),Ru=tu=null)}function oS(n){if(n.propertyName==="value"&&Fh(Ru)){var e=[];rS(e,Ru,n,Vg(n)),zy(rw,e)}}function ow(n,e,t){n==="focusin"?(I0(),tu=e,Ru=t,tu.attachEvent("onpropertychange",oS)):n==="focusout"&&I0()}function aw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fh(Ru)}function lw(n,e){if(n==="click")return Fh(e)}function uw(n,e){if(n==="input"||n==="change")return Fh(e)}function cw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var dr=typeof Object.is=="function"?Object.is:cw;function bu(n,e){if(dr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Cp.call(e,r)||!dr(n[r],e[r]))return!1}return!0}function N0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function F0(n,e){var t=N0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=N0(t)}}function aS(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?aS(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function lS(){for(var n=window,e=Wf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Wf(n.document)}return e}function Kg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function fw(n){var e=lS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&aS(t.ownerDocument.documentElement,t)){if(i!==null&&Kg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=F0(t,s);var o=F0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hw=ts&&"documentMode"in document&&11>=document.documentMode,xa=null,Yp=null,nu=null,qp=!1;function O0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;qp||xa==null||xa!==Wf(i)||(i=xa,"selectionStart"in i&&Kg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nu&&bu(nu,i)||(nu=i,i=Zf(Yp,"onSelect"),0<i.length&&(e=new qg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=xa)))}function vc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ya={animationend:vc("Animation","AnimationEnd"),animationiteration:vc("Animation","AnimationIteration"),animationstart:vc("Animation","AnimationStart"),transitionend:vc("Transition","TransitionEnd")},pd={},uS={};ts&&(uS=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Oh(n){if(pd[n])return pd[n];if(!ya[n])return n;var e=ya[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in uS)return pd[n]=e[t];return n}var cS=Oh("animationend"),fS=Oh("animationiteration"),hS=Oh("animationstart"),dS=Oh("transitionend"),pS=new Map,k0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function js(n,e){pS.set(n,e),Xo(e,[n])}for(var md=0;md<k0.length;md++){var gd=k0[md],dw=gd.toLowerCase(),pw=gd[0].toUpperCase()+gd.slice(1);js(dw,"on"+pw)}js(cS,"onAnimationEnd");js(fS,"onAnimationIteration");js(hS,"onAnimationStart");js("dblclick","onDoubleClick");js("focusin","onFocus");js("focusout","onBlur");js(dS,"onTransitionEnd");qa("onMouseEnter",["mouseout","mouseover"]);qa("onMouseLeave",["mouseout","mouseover"]);qa("onPointerEnter",["pointerout","pointerover"]);qa("onPointerLeave",["pointerout","pointerover"]);Xo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hl));function z0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,dT(i,e,void 0,n),n.currentTarget=null}function mS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;z0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;z0(r,a,u),s=l}}}if(Yf)throw n=Hp,Yf=!1,Hp=null,n}function Dt(n,e){var t=e[Qp];t===void 0&&(t=e[Qp]=new Set);var i=n+"__bubble";t.has(i)||(gS(e,n,2,!1),t.add(i))}function _d(n,e,t){var i=0;e&&(i|=4),gS(t,n,i,e)}var xc="_reactListening"+Math.random().toString(36).slice(2);function Pu(n){if(!n[xc]){n[xc]=!0,Ey.forEach(function(t){t!=="selectionchange"&&(mw.has(t)||_d(t,!1,n),_d(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[xc]||(e[xc]=!0,_d("selectionchange",!1,e))}}function gS(n,e,t,i){switch(Jy(e)){case 1:var r=bT;break;case 4:r=PT;break;default:r=Xg}t=r.bind(null,e,t,n),r=void 0,!Vp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function vd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}zy(function(){var u=s,c=Vg(t),f=[];e:{var h=pS.get(n);if(h!==void 0){var d=qg,g=n;switch(n){case"keypress":if(yf(t)===0)break e;case"keydown":case"keyup":d=XT;break;case"focusin":g="focus",d=fd;break;case"focusout":g="blur",d=fd;break;case"beforeblur":case"afterblur":d=fd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=C0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=UT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=$T;break;case cS:case fS:case hS:d=FT;break;case dS:d=KT;break;case"scroll":d=DT;break;case"wheel":d=QT;break;case"copy":case"cut":case"paste":d=kT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=b0}var _=(e&4)!==0,m=!_&&n==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,p!==null&&(y=Tu(v,p),y!=null&&_.push(Du(v,y,x)))),m)break;v=v.return}0<_.length&&(h=new d(h,g,null,t,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",h&&t!==zp&&(g=t.relatedTarget||t.fromElement)&&(xo(g)||g[ns]))break e;if((d||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,d?(g=t.relatedTarget||t.toElement,d=u,g=g?xo(g):null,g!==null&&(m=Yo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=u),d!==g)){if(_=C0,y="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=b0,y="onPointerLeave",p="onPointerEnter",v="pointer"),m=d==null?h:Sa(d),x=g==null?h:Sa(g),h=new _(y,v+"leave",d,t,c),h.target=m,h.relatedTarget=x,y=null,xo(c)===u&&(_=new _(p,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,d&&g)t:{for(_=d,p=g,v=0,x=_;x;x=Ko(x))v++;for(x=0,y=p;y;y=Ko(y))x++;for(;0<v-x;)_=Ko(_),v--;for(;0<x-v;)p=Ko(p),x--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=Ko(_),p=Ko(p)}_=null}else _=null;d!==null&&B0(f,h,d,_,!1),g!==null&&m!==null&&B0(f,m,g,_,!0)}}e:{if(h=u?Sa(u):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var A=sw;else if(L0(h))if(sS)A=uw;else{A=aw;var w=ow}else(d=h.nodeName)&&d.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=lw);if(A&&(A=A(n,u))){rS(f,A,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Ip(h,"number",h.value)}switch(w=u?Sa(u):window,n){case"focusin":(L0(w)||w.contentEditable==="true")&&(xa=w,Yp=u,nu=null);break;case"focusout":nu=Yp=xa=null;break;case"mousedown":qp=!0;break;case"contextmenu":case"mouseup":case"dragend":qp=!1,O0(f,t,c);break;case"selectionchange":if(hw)break;case"keydown":case"keyup":O0(f,t,c)}var E;if(jg)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else va?nS(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(tS&&t.locale!=="ko"&&(va||b!=="onCompositionStart"?b==="onCompositionEnd"&&va&&(E=eS()):(Ts=c,Yg="value"in Ts?Ts.value:Ts.textContent,va=!0)),w=Zf(u,b),0<w.length&&(b=new R0(b,n,null,t,c),f.push({event:b,listeners:w}),E?b.data=E:(E=iS(t),E!==null&&(b.data=E)))),(E=ew?tw(n,t):nw(n,t))&&(u=Zf(u,"onBeforeInput"),0<u.length&&(c=new R0("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=E))}mS(f,e)})}function Du(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Zf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Tu(n,t),s!=null&&i.unshift(Du(n,s,r)),s=Tu(n,e),s!=null&&i.push(Du(n,s,r))),n=n.return}return i}function Ko(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function B0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Tu(t,s),l!=null&&o.unshift(Du(t,l,a))):r||(l=Tu(t,s),l!=null&&o.push(Du(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var gw=/\r\n?/g,_w=/\u0000|\uFFFD/g;function V0(n){return(typeof n=="string"?n:""+n).replace(gw,`
`).replace(_w,"")}function yc(n,e,t){if(e=V0(e),V0(n)!==e&&t)throw Error(oe(425))}function Qf(){}var $p=null,jp=null;function Kp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zp=typeof setTimeout=="function"?setTimeout:void 0,vw=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(n){return H0.resolve(null).then(n).catch(yw)}:Zp;function yw(n){setTimeout(function(){throw n})}function xd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Cu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Cu(e)}function Is(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function G0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var _l=Math.random().toString(36).slice(2),xr="__reactFiber$"+_l,Lu="__reactProps$"+_l,ns="__reactContainer$"+_l,Qp="__reactEvents$"+_l,Sw="__reactListeners$"+_l,Mw="__reactHandles$"+_l;function xo(n){var e=n[xr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ns]||t[xr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=G0(n);n!==null;){if(t=n[xr])return t;n=G0(n)}return e}n=t,t=n.parentNode}return null}function ec(n){return n=n[xr]||n[ns],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Sa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function kh(n){return n[Lu]||null}var Jp=[],Ma=-1;function Ks(n){return{current:n}}function Lt(n){0>Ma||(n.current=Jp[Ma],Jp[Ma]=null,Ma--)}function Rt(n,e){Ma++,Jp[Ma]=n.current,n.current=e}var Ws={},On=Ks(Ws),oi=Ks(!1),No=Ws;function $a(n,e){var t=n.type.contextTypes;if(!t)return Ws;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ai(n){return n=n.childContextTypes,n!=null}function Jf(){Lt(oi),Lt(On)}function W0(n,e,t){if(On.current!==Ws)throw Error(oe(168));Rt(On,e),Rt(oi,t)}function _S(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,oT(n)||"Unknown",r));return Bt({},t,i)}function eh(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ws,No=On.current,Rt(On,n),Rt(oi,oi.current),!0}function X0(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=_S(n,e,No),i.__reactInternalMemoizedMergedChildContext=n,Lt(oi),Lt(On),Rt(On,n)):Lt(oi),Rt(oi,t)}var Hr=null,zh=!1,yd=!1;function vS(n){Hr===null?Hr=[n]:Hr.push(n)}function Ew(n){zh=!0,vS(n)}function Zs(){if(!yd&&Hr!==null){yd=!0;var n=0,e=yt;try{var t=Hr;for(yt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Hr=null,zh=!1}catch(r){throw Hr!==null&&(Hr=Hr.slice(n+1)),Gy(Hg,Zs),r}finally{yt=e,yd=!1}}return null}var Ea=[],Ta=0,th=null,nh=0,Vi=[],Hi=0,Fo=null,Xr=1,Yr="";function lo(n,e){Ea[Ta++]=nh,Ea[Ta++]=th,th=n,nh=e}function xS(n,e,t){Vi[Hi++]=Xr,Vi[Hi++]=Yr,Vi[Hi++]=Fo,Fo=n;var i=Xr;n=Yr;var r=32-ur(i)-1;i&=~(1<<r),t+=1;var s=32-ur(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Xr=1<<32-ur(e)+r|t<<r|i,Yr=s+n}else Xr=1<<s|t<<r|i,Yr=n}function Zg(n){n.return!==null&&(lo(n,1),xS(n,1,0))}function Qg(n){for(;n===th;)th=Ea[--Ta],Ea[Ta]=null,nh=Ea[--Ta],Ea[Ta]=null;for(;n===Fo;)Fo=Vi[--Hi],Vi[Hi]=null,Yr=Vi[--Hi],Vi[Hi]=null,Xr=Vi[--Hi],Vi[Hi]=null}var Ri=null,Ai=null,It=!1,ar=null;function yS(n,e){var t=Yi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Y0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ri=n,Ai=Is(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ri=n,Ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Fo!==null?{id:Xr,overflow:Yr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Yi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ri=n,Ai=null,!0):!1;default:return!1}}function em(n){return(n.mode&1)!==0&&(n.flags&128)===0}function tm(n){if(It){var e=Ai;if(e){var t=e;if(!Y0(n,e)){if(em(n))throw Error(oe(418));e=Is(t.nextSibling);var i=Ri;e&&Y0(n,e)?yS(i,t):(n.flags=n.flags&-4097|2,It=!1,Ri=n)}}else{if(em(n))throw Error(oe(418));n.flags=n.flags&-4097|2,It=!1,Ri=n}}}function q0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ri=n}function Sc(n){if(n!==Ri)return!1;if(!It)return q0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Kp(n.type,n.memoizedProps)),e&&(e=Ai)){if(em(n))throw SS(),Error(oe(418));for(;e;)yS(n,e),e=Is(e.nextSibling)}if(q0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ai=Is(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ai=null}}else Ai=Ri?Is(n.stateNode.nextSibling):null;return!0}function SS(){for(var n=Ai;n;)n=Is(n.nextSibling)}function ja(){Ai=Ri=null,It=!1}function Jg(n){ar===null?ar=[n]:ar.push(n)}var Tw=ls.ReactCurrentBatchConfig;function Al(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function Mc(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function $0(n){var e=n._init;return e(n._payload)}function MS(n){function e(p,v){if(n){var x=p.deletions;x===null?(p.deletions=[v],p.flags|=16):x.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=ks(p,v),p.index=0,p.sibling=null,p}function s(p,v,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<v?(p.flags|=2,v):x):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,x,y){return v===null||v.tag!==6?(v=Cd(x,p.mode,y),v.return=p,v):(v=r(v,x),v.return=p,v)}function l(p,v,x,y){var A=x.type;return A===_a?c(p,v,x.props.children,y,x.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===xs&&$0(A)===v.type)?(y=r(v,x.props),y.ref=Al(p,v,x),y.return=p,y):(y=Cf(x.type,x.key,x.props,null,p.mode,y),y.ref=Al(p,v,x),y.return=p,y)}function u(p,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Rd(x,p.mode,y),v.return=p,v):(v=r(v,x.children||[]),v.return=p,v)}function c(p,v,x,y,A){return v===null||v.tag!==7?(v=Co(x,p.mode,y,A),v.return=p,v):(v=r(v,x),v.return=p,v)}function f(p,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Cd(""+v,p.mode,x),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fc:return x=Cf(v.type,v.key,v.props,null,p.mode,x),x.ref=Al(p,null,v),x.return=p,x;case ga:return v=Rd(v,p.mode,x),v.return=p,v;case xs:var y=v._init;return f(p,y(v._payload),x)}if(Bl(v)||Sl(v))return v=Co(v,p.mode,x,null),v.return=p,v;Mc(p,v)}return null}function h(p,v,x,y){var A=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(p,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fc:return x.key===A?l(p,v,x,y):null;case ga:return x.key===A?u(p,v,x,y):null;case xs:return A=x._init,h(p,v,A(x._payload),y)}if(Bl(x)||Sl(x))return A!==null?null:c(p,v,x,y,null);Mc(p,x)}return null}function d(p,v,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(x)||null,a(v,p,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fc:return p=p.get(y.key===null?x:y.key)||null,l(v,p,y,A);case ga:return p=p.get(y.key===null?x:y.key)||null,u(v,p,y,A);case xs:var w=y._init;return d(p,v,x,w(y._payload),A)}if(Bl(y)||Sl(y))return p=p.get(x)||null,c(v,p,y,A,null);Mc(v,y)}return null}function g(p,v,x,y){for(var A=null,w=null,E=v,b=v=0,M=null;E!==null&&b<x.length;b++){E.index>b?(M=E,E=null):M=E.sibling;var S=h(p,E,x[b],y);if(S===null){E===null&&(E=M);break}n&&E&&S.alternate===null&&e(p,E),v=s(S,v,b),w===null?A=S:w.sibling=S,w=S,E=M}if(b===x.length)return t(p,E),It&&lo(p,b),A;if(E===null){for(;b<x.length;b++)E=f(p,x[b],y),E!==null&&(v=s(E,v,b),w===null?A=E:w.sibling=E,w=E);return It&&lo(p,b),A}for(E=i(p,E);b<x.length;b++)M=d(E,p,b,x[b],y),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?b:M.key),v=s(M,v,b),w===null?A=M:w.sibling=M,w=M);return n&&E.forEach(function(D){return e(p,D)}),It&&lo(p,b),A}function _(p,v,x,y){var A=Sl(x);if(typeof A!="function")throw Error(oe(150));if(x=A.call(x),x==null)throw Error(oe(151));for(var w=A=null,E=v,b=v=0,M=null,S=x.next();E!==null&&!S.done;b++,S=x.next()){E.index>b?(M=E,E=null):M=E.sibling;var D=h(p,E,S.value,y);if(D===null){E===null&&(E=M);break}n&&E&&D.alternate===null&&e(p,E),v=s(D,v,b),w===null?A=D:w.sibling=D,w=D,E=M}if(S.done)return t(p,E),It&&lo(p,b),A;if(E===null){for(;!S.done;b++,S=x.next())S=f(p,S.value,y),S!==null&&(v=s(S,v,b),w===null?A=S:w.sibling=S,w=S);return It&&lo(p,b),A}for(E=i(p,E);!S.done;b++,S=x.next())S=d(E,p,b,S.value,y),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?b:S.key),v=s(S,v,b),w===null?A=S:w.sibling=S,w=S);return n&&E.forEach(function(F){return e(p,F)}),It&&lo(p,b),A}function m(p,v,x,y){if(typeof x=="object"&&x!==null&&x.type===_a&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case fc:e:{for(var A=x.key,w=v;w!==null;){if(w.key===A){if(A=x.type,A===_a){if(w.tag===7){t(p,w.sibling),v=r(w,x.props.children),v.return=p,p=v;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===xs&&$0(A)===w.type){t(p,w.sibling),v=r(w,x.props),v.ref=Al(p,w,x),v.return=p,p=v;break e}t(p,w);break}else e(p,w);w=w.sibling}x.type===_a?(v=Co(x.props.children,p.mode,y,x.key),v.return=p,p=v):(y=Cf(x.type,x.key,x.props,null,p.mode,y),y.ref=Al(p,v,x),y.return=p,p=y)}return o(p);case ga:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(p,v.sibling),v=r(v,x.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=Rd(x,p.mode,y),v.return=p,p=v}return o(p);case xs:return w=x._init,m(p,v,w(x._payload),y)}if(Bl(x))return g(p,v,x,y);if(Sl(x))return _(p,v,x,y);Mc(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,x),v.return=p,p=v):(t(p,v),v=Cd(x,p.mode,y),v.return=p,p=v),o(p)):t(p,v)}return m}var Ka=MS(!0),ES=MS(!1),ih=Ks(null),rh=null,wa=null,e_=null;function t_(){e_=wa=rh=null}function n_(n){var e=ih.current;Lt(ih),n._currentValue=e}function nm(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Fa(n,e){rh=n,e_=wa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ri=!0),n.firstContext=null)}function Zi(n){var e=n._currentValue;if(e_!==n)if(n={context:n,memoizedValue:e,next:null},wa===null){if(rh===null)throw Error(oe(308));wa=n,rh.dependencies={lanes:0,firstContext:n}}else wa=wa.next=n;return e}var yo=null;function i_(n){yo===null?yo=[n]:yo.push(n)}function TS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,i_(e)):(t.next=r.next,r.next=t),e.interleaved=t,is(n,i)}function is(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ys=!1;function r_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Kr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ns(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,is(n,t)}return r=i.interleaved,r===null?(e.next=e,i_(i)):(e.next=r.next,r.next=e),i.interleaved=e,is(n,t)}function Sf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Gg(n,t)}}function j0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function sh(n,e,t,i){var r=n.updateQueue;ys=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,d=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(h=e,d=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(d,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(d,f,h):g,h==null)break e;f=Bt({},f,h);break e;case 2:ys=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else d={eventTime:d,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=f):c=c.next=d,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ko|=o,n.lanes=o,n.memoizedState=f}}function K0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var tc={},Ar=Ks(tc),Uu=Ks(tc),Iu=Ks(tc);function So(n){if(n===tc)throw Error(oe(174));return n}function s_(n,e){switch(Rt(Iu,e),Rt(Uu,n),Rt(Ar,tc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Fp(e,n)}Lt(Ar),Rt(Ar,e)}function Za(){Lt(Ar),Lt(Uu),Lt(Iu)}function AS(n){So(Iu.current);var e=So(Ar.current),t=Fp(e,n.type);e!==t&&(Rt(Uu,n),Rt(Ar,t))}function o_(n){Uu.current===n&&(Lt(Ar),Lt(Uu))}var Ft=Ks(0);function oh(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sd=[];function a_(){for(var n=0;n<Sd.length;n++)Sd[n]._workInProgressVersionPrimary=null;Sd.length=0}var Mf=ls.ReactCurrentDispatcher,Md=ls.ReactCurrentBatchConfig,Oo=0,zt=null,on=null,pn=null,ah=!1,iu=!1,Nu=0,ww=0;function Tn(){throw Error(oe(321))}function l_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!dr(n[t],e[t]))return!1;return!0}function u_(n,e,t,i,r,s){if(Oo=s,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mf.current=n===null||n.memoizedState===null?bw:Pw,n=t(i,r),iu){s=0;do{if(iu=!1,Nu=0,25<=s)throw Error(oe(301));s+=1,pn=on=null,e.updateQueue=null,Mf.current=Dw,n=t(i,r)}while(iu)}if(Mf.current=lh,e=on!==null&&on.next!==null,Oo=0,pn=on=zt=null,ah=!1,e)throw Error(oe(300));return n}function c_(){var n=Nu!==0;return Nu=0,n}function mr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?zt.memoizedState=pn=n:pn=pn.next=n,pn}function Qi(){if(on===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var e=pn===null?zt.memoizedState:pn.next;if(e!==null)pn=e,on=n;else{if(n===null)throw Error(oe(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},pn===null?zt.memoizedState=pn=n:pn=pn.next=n}return pn}function Fu(n,e){return typeof e=="function"?e(n):e}function Ed(n){var e=Qi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=on,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Oo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,zt.lanes|=c,ko|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,dr(i,e.memoizedState)||(ri=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,zt.lanes|=s,ko|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Td(n){var e=Qi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);dr(s,e.memoizedState)||(ri=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function CS(){}function RS(n,e){var t=zt,i=Qi(),r=e(),s=!dr(i.memoizedState,r);if(s&&(i.memoizedState=r,ri=!0),i=i.queue,f_(DS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||pn!==null&&pn.memoizedState.tag&1){if(t.flags|=2048,Ou(9,PS.bind(null,t,i,r,e),void 0,null),mn===null)throw Error(oe(349));Oo&30||bS(t,e,r)}return r}function bS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function PS(n,e,t,i){e.value=t,e.getSnapshot=i,LS(e)&&US(n)}function DS(n,e,t){return t(function(){LS(e)&&US(n)})}function LS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!dr(n,t)}catch{return!0}}function US(n){var e=is(n,1);e!==null&&cr(e,n,1,-1)}function Z0(n){var e=mr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fu,lastRenderedState:n},e.queue=n,n=n.dispatch=Rw.bind(null,zt,n),[e.memoizedState,n]}function Ou(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function IS(){return Qi().memoizedState}function Ef(n,e,t,i){var r=mr();zt.flags|=n,r.memoizedState=Ou(1|e,t,void 0,i===void 0?null:i)}function Bh(n,e,t,i){var r=Qi();i=i===void 0?null:i;var s=void 0;if(on!==null){var o=on.memoizedState;if(s=o.destroy,i!==null&&l_(i,o.deps)){r.memoizedState=Ou(e,t,s,i);return}}zt.flags|=n,r.memoizedState=Ou(1|e,t,s,i)}function Q0(n,e){return Ef(8390656,8,n,e)}function f_(n,e){return Bh(2048,8,n,e)}function NS(n,e){return Bh(4,2,n,e)}function FS(n,e){return Bh(4,4,n,e)}function OS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function kS(n,e,t){return t=t!=null?t.concat([n]):null,Bh(4,4,OS.bind(null,e,n),t)}function h_(){}function zS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&l_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function BS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&l_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function VS(n,e,t){return Oo&21?(dr(t,e)||(t=Yy(),zt.lanes|=t,ko|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=t)}function Aw(n,e){var t=yt;yt=t!==0&&4>t?t:4,n(!0);var i=Md.transition;Md.transition={};try{n(!1),e()}finally{yt=t,Md.transition=i}}function HS(){return Qi().memoizedState}function Cw(n,e,t){var i=Os(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},GS(n))WS(e,t);else if(t=TS(n,e,t,i),t!==null){var r=jn();cr(t,n,i,r),XS(t,e,i)}}function Rw(n,e,t){var i=Os(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(GS(n))WS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,dr(a,o)){var l=e.interleaved;l===null?(r.next=r,i_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=TS(n,e,r,i),t!==null&&(r=jn(),cr(t,n,i,r),XS(t,e,i))}}function GS(n){var e=n.alternate;return n===zt||e!==null&&e===zt}function WS(n,e){iu=ah=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function XS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Gg(n,t)}}var lh={readContext:Zi,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},bw={readContext:Zi,useCallback:function(n,e){return mr().memoizedState=[n,e===void 0?null:e],n},useContext:Zi,useEffect:Q0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ef(4194308,4,OS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ef(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ef(4,2,n,e)},useMemo:function(n,e){var t=mr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=mr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Cw.bind(null,zt,n),[i.memoizedState,n]},useRef:function(n){var e=mr();return n={current:n},e.memoizedState=n},useState:Z0,useDebugValue:h_,useDeferredValue:function(n){return mr().memoizedState=n},useTransition:function(){var n=Z0(!1),e=n[0];return n=Aw.bind(null,n[1]),mr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=zt,r=mr();if(It){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),mn===null)throw Error(oe(349));Oo&30||bS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Q0(DS.bind(null,i,s,n),[n]),i.flags|=2048,Ou(9,PS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=mr(),e=mn.identifierPrefix;if(It){var t=Yr,i=Xr;t=(i&~(1<<32-ur(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Nu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ww++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Pw={readContext:Zi,useCallback:zS,useContext:Zi,useEffect:f_,useImperativeHandle:kS,useInsertionEffect:NS,useLayoutEffect:FS,useMemo:BS,useReducer:Ed,useRef:IS,useState:function(){return Ed(Fu)},useDebugValue:h_,useDeferredValue:function(n){var e=Qi();return VS(e,on.memoizedState,n)},useTransition:function(){var n=Ed(Fu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:CS,useSyncExternalStore:RS,useId:HS,unstable_isNewReconciler:!1},Dw={readContext:Zi,useCallback:zS,useContext:Zi,useEffect:f_,useImperativeHandle:kS,useInsertionEffect:NS,useLayoutEffect:FS,useMemo:BS,useReducer:Td,useRef:IS,useState:function(){return Td(Fu)},useDebugValue:h_,useDeferredValue:function(n){var e=Qi();return on===null?e.memoizedState=n:VS(e,on.memoizedState,n)},useTransition:function(){var n=Td(Fu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:CS,useSyncExternalStore:RS,useId:HS,unstable_isNewReconciler:!1};function sr(n,e){if(n&&n.defaultProps){e=Bt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function im(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Bt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Vh={isMounted:function(n){return(n=n._reactInternals)?Yo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=jn(),r=Os(n),s=Kr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ns(n,s,r),e!==null&&(cr(e,n,r,i),Sf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=jn(),r=Os(n),s=Kr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ns(n,s,r),e!==null&&(cr(e,n,r,i),Sf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=jn(),i=Os(n),r=Kr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ns(n,r,i),e!==null&&(cr(e,n,i,t),Sf(e,n,i))}};function J0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bu(t,i)||!bu(r,s):!0}function YS(n,e,t){var i=!1,r=Ws,s=e.contextType;return typeof s=="object"&&s!==null?s=Zi(s):(r=ai(e)?No:On.current,i=e.contextTypes,s=(i=i!=null)?$a(n,r):Ws),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function ev(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Vh.enqueueReplaceState(e,e.state,null)}function rm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},r_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zi(s):(s=ai(e)?No:On.current,r.context=$a(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(im(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vh.enqueueReplaceState(r,r.state,null),sh(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Qa(n,e){try{var t="",i=e;do t+=sT(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function wd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function sm(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Lw=typeof WeakMap=="function"?WeakMap:Map;function qS(n,e,t){t=Kr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ch||(ch=!0,mm=i),sm(n,e)},t}function $S(n,e,t){t=Kr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){sm(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){sm(n,e),typeof i!="function"&&(Fs===null?Fs=new Set([this]):Fs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function tv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Lw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Yw.bind(null,n,e,t),e.then(n,n))}function nv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function iv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Kr(-1,1),e.tag=2,Ns(t,e,1))),t.lanes|=1),n)}var Uw=ls.ReactCurrentOwner,ri=!1;function Wn(n,e,t,i){e.child=n===null?ES(e,null,t,i):Ka(e,n.child,t,i)}function rv(n,e,t,i,r){t=t.render;var s=e.ref;return Fa(e,r),i=u_(n,e,t,i,s,r),t=c_(),n!==null&&!ri?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,rs(n,e,r)):(It&&t&&Zg(e),e.flags|=1,Wn(n,e,i,r),e.child)}function sv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!y_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,jS(n,e,s,i,r)):(n=Cf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:bu,t(o,i)&&n.ref===e.ref)return rs(n,e,r)}return e.flags|=1,n=ks(s,i),n.ref=e.ref,n.return=e,e.child=n}function jS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(bu(s,i)&&n.ref===e.ref)if(ri=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ri=!0);else return e.lanes=n.lanes,rs(n,e,r)}return om(n,e,t,i,r)}function KS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Ca,xi),xi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Rt(Ca,xi),xi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Rt(Ca,xi),xi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Rt(Ca,xi),xi|=i;return Wn(n,e,r,t),e.child}function ZS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function om(n,e,t,i,r){var s=ai(t)?No:On.current;return s=$a(e,s),Fa(e,r),t=u_(n,e,t,i,s,r),i=c_(),n!==null&&!ri?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,rs(n,e,r)):(It&&i&&Zg(e),e.flags|=1,Wn(n,e,t,r),e.child)}function ov(n,e,t,i,r){if(ai(t)){var s=!0;eh(e)}else s=!1;if(Fa(e,r),e.stateNode===null)Tf(n,e),YS(e,t,i),rm(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zi(u):(u=ai(t)?No:On.current,u=$a(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ev(e,o,i,u),ys=!1;var h=e.memoizedState;o.state=h,sh(e,i,o,r),l=e.memoizedState,a!==i||h!==l||oi.current||ys?(typeof c=="function"&&(im(e,t,c,i),l=e.memoizedState),(a=ys||J0(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,wS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:sr(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zi(l):(l=ai(t)?No:On.current,l=$a(e,l));var d=t.getDerivedStateFromProps;(c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&ev(e,o,i,l),ys=!1,h=e.memoizedState,o.state=h,sh(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||oi.current||ys?(typeof d=="function"&&(im(e,t,d,i),g=e.memoizedState),(u=ys||J0(e,t,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return am(n,e,t,i,s,r)}function am(n,e,t,i,r,s){ZS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&X0(e,t,!1),rs(n,e,s);i=e.stateNode,Uw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ka(e,n.child,null,s),e.child=Ka(e,null,a,s)):Wn(n,e,a,s),e.memoizedState=i.state,r&&X0(e,t,!0),e.child}function QS(n){var e=n.stateNode;e.pendingContext?W0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&W0(n,e.context,!1),s_(n,e.containerInfo)}function av(n,e,t,i,r){return ja(),Jg(r),e.flags|=256,Wn(n,e,t,i),e.child}var lm={dehydrated:null,treeContext:null,retryLane:0};function um(n){return{baseLanes:n,cachePool:null,transitions:null}}function JS(n,e,t){var i=e.pendingProps,r=Ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Rt(Ft,r&1),n===null)return tm(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wh(o,i,0,null),n=Co(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=um(t),e.memoizedState=lm,n):d_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Iw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ks(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ks(a,s):(s=Co(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?um(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=lm,i}return s=n.child,n=s.sibling,i=ks(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function d_(n,e){return e=Wh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ec(n,e,t,i){return i!==null&&Jg(i),Ka(e,n.child,null,t),n=d_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Iw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=wd(Error(oe(422))),Ec(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wh({mode:"visible",children:i.children},r,0,null),s=Co(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ka(e,n.child,null,o),e.child.memoizedState=um(o),e.memoizedState=lm,s);if(!(e.mode&1))return Ec(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=wd(s,i,void 0),Ec(n,e,o,i)}if(a=(o&n.childLanes)!==0,ri||a){if(i=mn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,is(n,r),cr(i,n,r,-1))}return x_(),i=wd(Error(oe(421))),Ec(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=qw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ai=Is(r.nextSibling),Ri=e,It=!0,ar=null,n!==null&&(Vi[Hi++]=Xr,Vi[Hi++]=Yr,Vi[Hi++]=Fo,Xr=n.id,Yr=n.overflow,Fo=e),e=d_(e,i.children),e.flags|=4096,e)}function lv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),nm(n.return,e,t)}function Ad(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function eM(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wn(n,e,i.children,t),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lv(n,t,e);else if(n.tag===19)lv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Rt(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&oh(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Ad(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&oh(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Ad(e,!0,t,null,s);break;case"together":Ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function rs(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ko|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=ks(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ks(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Nw(n,e,t){switch(e.tag){case 3:QS(e),ja();break;case 5:AS(e);break;case 1:ai(e.type)&&eh(e);break;case 4:s_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(ih,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(Ft,Ft.current&1),e.flags|=128,null):t&e.child.childLanes?JS(n,e,t):(Rt(Ft,Ft.current&1),n=rs(n,e,t),n!==null?n.sibling:null);Rt(Ft,Ft.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return eM(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,KS(n,e,t)}return rs(n,e,t)}var tM,cm,nM,iM;tM=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};cm=function(){};nM=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,So(Ar.current);var s=null;switch(t){case"input":r=Lp(n,r),i=Lp(n,i),s=[];break;case"select":r=Bt({},r,{value:void 0}),i=Bt({},i,{value:void 0}),s=[];break;case"textarea":r=Np(n,r),i=Np(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Qf)}Op(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Dt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};iM=function(n,e,t,i){t!==i&&(e.flags|=4)};function Cl(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function wn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Fw(n,e,t){var i=e.pendingProps;switch(Qg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(e),null;case 1:return ai(e.type)&&Jf(),wn(e),null;case 3:return i=e.stateNode,Za(),Lt(oi),Lt(On),a_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Sc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ar!==null&&(vm(ar),ar=null))),cm(n,e),wn(e),null;case 5:o_(e);var r=So(Iu.current);if(t=e.type,n!==null&&e.stateNode!=null)nM(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return wn(e),null}if(n=So(Ar.current),Sc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[xr]=e,i[Lu]=s,n=(e.mode&1)!==0,t){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(r=0;r<Hl.length;r++)Dt(Hl[r],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":_0(i,s),Dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Dt("invalid",i);break;case"textarea":x0(i,s),Dt("invalid",i)}Op(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&yc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yc(i.textContent,a,n),r=["children",""+a]):Mu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Dt("scroll",i)}switch(t){case"input":hc(i),v0(i,s,!0);break;case"textarea":hc(i),y0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Qf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Dy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[xr]=e,n[Lu]=i,tM(n,e,!1,!1),e.stateNode=n;e:{switch(o=kp(t,i),t){case"dialog":Dt("cancel",n),Dt("close",n),r=i;break;case"iframe":case"object":case"embed":Dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Hl.length;r++)Dt(Hl[r],n);r=i;break;case"source":Dt("error",n),r=i;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),r=i;break;case"details":Dt("toggle",n),r=i;break;case"input":_0(n,i),r=Lp(n,i),Dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Bt({},i,{value:void 0}),Dt("invalid",n);break;case"textarea":x0(n,i),r=Np(n,i),Dt("invalid",n);break;default:r=i}Op(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Iy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ly(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Eu(n,l):typeof l=="number"&&Eu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Dt("scroll",n):l!=null&&Og(n,s,l,o))}switch(t){case"input":hc(n),v0(n,i,!1);break;case"textarea":hc(n),y0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Gs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?La(n,!!i.multiple,s,!1):i.defaultValue!=null&&La(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Qf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wn(e),null;case 6:if(n&&e.stateNode!=null)iM(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=So(Iu.current),So(Ar.current),Sc(e)){if(i=e.stateNode,t=e.memoizedProps,i[xr]=e,(s=i.nodeValue!==t)&&(n=Ri,n!==null))switch(n.tag){case 3:yc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&yc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[xr]=e,e.stateNode=i}return wn(e),null;case 13:if(Lt(Ft),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&Ai!==null&&e.mode&1&&!(e.flags&128))SS(),ja(),e.flags|=98560,s=!1;else if(s=Sc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[xr]=e}else ja(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wn(e),s=!1}else ar!==null&&(vm(ar),ar=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ft.current&1?ln===0&&(ln=3):x_())),e.updateQueue!==null&&(e.flags|=4),wn(e),null);case 4:return Za(),cm(n,e),n===null&&Pu(e.stateNode.containerInfo),wn(e),null;case 10:return n_(e.type._context),wn(e),null;case 17:return ai(e.type)&&Jf(),wn(e),null;case 19:if(Lt(Ft),s=e.memoizedState,s===null)return wn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Cl(s,!1);else{if(ln!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=oh(n),o!==null){for(e.flags|=128,Cl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Rt(Ft,Ft.current&1|2),e.child}n=n.sibling}s.tail!==null&&qt()>Ja&&(e.flags|=128,i=!0,Cl(s,!1),e.lanes=4194304)}else{if(!i)if(n=oh(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Cl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return wn(e),null}else 2*qt()-s.renderingStartTime>Ja&&t!==1073741824&&(e.flags|=128,i=!0,Cl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qt(),e.sibling=null,t=Ft.current,Rt(Ft,i?t&1|2:t&1),e):(wn(e),null);case 22:case 23:return v_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xi&1073741824&&(wn(e),e.subtreeFlags&6&&(e.flags|=8192)):wn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Ow(n,e){switch(Qg(e),e.tag){case 1:return ai(e.type)&&Jf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Za(),Lt(oi),Lt(On),a_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return o_(e),null;case 13:if(Lt(Ft),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));ja()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Lt(Ft),null;case 4:return Za(),null;case 10:return n_(e.type._context),null;case 22:case 23:return v_(),null;case 24:return null;default:return null}}var Tc=!1,Pn=!1,kw=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Aa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Gt(n,e,i)}else t.current=null}function fm(n,e,t){try{t()}catch(i){Gt(n,e,i)}}var uv=!1;function zw(n,e){if($p=jf,n=lS(),Kg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var d;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(d=f.firstChild)!==null;)h=f,f=d;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(d=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=d}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(jp={focusedElem:n,selectionRange:t},jf=!1,Ce=e;Ce!==null;)if(e=Ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ce=n;else for(;Ce!==null;){e=Ce;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:sr(e.type,_),m);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){Gt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}return g=uv,uv=!1,g}function ru(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&fm(e,t,s)}r=r.next}while(r!==i)}}function Hh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function hm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function rM(n){var e=n.alternate;e!==null&&(n.alternate=null,rM(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[xr],delete e[Lu],delete e[Qp],delete e[Sw],delete e[Mw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sM(n){return n.tag===5||n.tag===3||n.tag===4}function cv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sM(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Qf));else if(i!==4&&(n=n.child,n!==null))for(dm(n,e,t),n=n.sibling;n!==null;)dm(n,e,t),n=n.sibling}function pm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(pm(n,e,t),n=n.sibling;n!==null;)pm(n,e,t),n=n.sibling}var xn=null,or=!1;function cs(n,e,t){for(t=t.child;t!==null;)oM(n,e,t),t=t.sibling}function oM(n,e,t){if(wr&&typeof wr.onCommitFiberUnmount=="function")try{wr.onCommitFiberUnmount(Ih,t)}catch{}switch(t.tag){case 5:Pn||Aa(t,e);case 6:var i=xn,r=or;xn=null,cs(n,e,t),xn=i,or=r,xn!==null&&(or?(n=xn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):xn.removeChild(t.stateNode));break;case 18:xn!==null&&(or?(n=xn,t=t.stateNode,n.nodeType===8?xd(n.parentNode,t):n.nodeType===1&&xd(n,t),Cu(n)):xd(xn,t.stateNode));break;case 4:i=xn,r=or,xn=t.stateNode.containerInfo,or=!0,cs(n,e,t),xn=i,or=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fm(t,e,o),r=r.next}while(r!==i)}cs(n,e,t);break;case 1:if(!Pn&&(Aa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Gt(t,e,a)}cs(n,e,t);break;case 21:cs(n,e,t);break;case 22:t.mode&1?(Pn=(i=Pn)||t.memoizedState!==null,cs(n,e,t),Pn=i):cs(n,e,t);break;default:cs(n,e,t)}}function fv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new kw),e.forEach(function(i){var r=$w.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function er(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xn=a.stateNode,or=!1;break e;case 3:xn=a.stateNode.containerInfo,or=!0;break e;case 4:xn=a.stateNode.containerInfo,or=!0;break e}a=a.return}if(xn===null)throw Error(oe(160));oM(s,o,r),xn=null,or=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aM(e,n),e=e.sibling}function aM(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(er(e,n),pr(n),i&4){try{ru(3,n,n.return),Hh(3,n)}catch(_){Gt(n,n.return,_)}try{ru(5,n,n.return)}catch(_){Gt(n,n.return,_)}}break;case 1:er(e,n),pr(n),i&512&&t!==null&&Aa(t,t.return);break;case 5:if(er(e,n),pr(n),i&512&&t!==null&&Aa(t,t.return),n.flags&32){var r=n.stateNode;try{Eu(r,"")}catch(_){Gt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&by(r,s),kp(a,o);var u=kp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Iy(r,f):c==="dangerouslySetInnerHTML"?Ly(r,f):c==="children"?Eu(r,f):Og(r,c,f,u)}switch(a){case"input":Up(r,s);break;case"textarea":Py(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?La(r,!!s.multiple,d,!1):h!==!!s.multiple&&(s.defaultValue!=null?La(r,!!s.multiple,s.defaultValue,!0):La(r,!!s.multiple,s.multiple?[]:"",!1))}r[Lu]=s}catch(_){Gt(n,n.return,_)}}break;case 6:if(er(e,n),pr(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Gt(n,n.return,_)}}break;case 3:if(er(e,n),pr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Cu(e.containerInfo)}catch(_){Gt(n,n.return,_)}break;case 4:er(e,n),pr(n);break;case 13:er(e,n),pr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(g_=qt())),i&4&&fv(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Pn=(u=Pn)||c,er(e,n),Pn=u):er(e,n),pr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ce=n,c=n.child;c!==null;){for(f=Ce=c;Ce!==null;){switch(h=Ce,d=h.child,h.tag){case 0:case 11:case 14:case 15:ru(4,h,h.return);break;case 1:Aa(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Gt(i,t,_)}}break;case 5:Aa(h,h.return);break;case 22:if(h.memoizedState!==null){dv(f);continue}}d!==null?(d.return=h,Ce=d):dv(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Uy("display",o))}catch(_){Gt(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Gt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:er(e,n),pr(n),i&4&&fv(n);break;case 21:break;default:er(e,n),pr(n)}}function pr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(sM(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Eu(r,""),i.flags&=-33);var s=cv(n);pm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cv(n);dm(n,a,o);break;default:throw Error(oe(161))}}catch(l){Gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Bw(n,e,t){Ce=n,lM(n)}function lM(n,e,t){for(var i=(n.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Tc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pn;a=Tc;var u=Pn;if(Tc=o,(Pn=l)&&!u)for(Ce=r;Ce!==null;)o=Ce,l=o.child,o.tag===22&&o.memoizedState!==null?pv(r):l!==null?(l.return=o,Ce=l):pv(r);for(;s!==null;)Ce=s,lM(s),s=s.sibling;Ce=r,Tc=a,Pn=u}hv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):hv(n)}}function hv(n){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||Hh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:sr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&K0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}K0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Cu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Pn||e.flags&512&&hm(e)}catch(h){Gt(e,e.return,h)}}if(e===n){Ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function dv(n){for(;Ce!==null;){var e=Ce;if(e===n){Ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function pv(n){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Hh(4,e)}catch(l){Gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{hm(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{hm(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===n){Ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ce=a;break}Ce=e.return}}var Vw=Math.ceil,uh=ls.ReactCurrentDispatcher,p_=ls.ReactCurrentOwner,ji=ls.ReactCurrentBatchConfig,ft=0,mn=null,en=null,Sn=0,xi=0,Ca=Ks(0),ln=0,ku=null,ko=0,Gh=0,m_=0,su=null,ii=null,g_=0,Ja=1/0,zr=null,ch=!1,mm=null,Fs=null,wc=!1,ws=null,fh=0,ou=0,gm=null,wf=-1,Af=0;function jn(){return ft&6?qt():wf!==-1?wf:wf=qt()}function Os(n){return n.mode&1?ft&2&&Sn!==0?Sn&-Sn:Tw.transition!==null?(Af===0&&(Af=Yy()),Af):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Jy(n.type)),n):1}function cr(n,e,t,i){if(50<ou)throw ou=0,gm=null,Error(oe(185));Qu(n,t,i),(!(ft&2)||n!==mn)&&(n===mn&&(!(ft&2)&&(Gh|=t),ln===4&&Ms(n,Sn)),li(n,i),t===1&&ft===0&&!(e.mode&1)&&(Ja=qt()+500,zh&&Zs()))}function li(n,e){var t=n.callbackNode;TT(n,e);var i=$f(n,n===mn?Sn:0);if(i===0)t!==null&&E0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&E0(t),e===1)n.tag===0?Ew(mv.bind(null,n)):vS(mv.bind(null,n)),xw(function(){!(ft&6)&&Zs()}),t=null;else{switch(qy(i)){case 1:t=Hg;break;case 4:t=Wy;break;case 16:t=qf;break;case 536870912:t=Xy;break;default:t=qf}t=gM(t,uM.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function uM(n,e){if(wf=-1,Af=0,ft&6)throw Error(oe(327));var t=n.callbackNode;if(Oa()&&n.callbackNode!==t)return null;var i=$f(n,n===mn?Sn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=hh(n,i);else{e=i;var r=ft;ft|=2;var s=fM();(mn!==n||Sn!==e)&&(zr=null,Ja=qt()+500,Ao(n,e));do try{Ww();break}catch(a){cM(n,a)}while(!0);t_(),uh.current=s,ft=r,en!==null?e=0:(mn=null,Sn=0,e=ln)}if(e!==0){if(e===2&&(r=Gp(n),r!==0&&(i=r,e=_m(n,r))),e===1)throw t=ku,Ao(n,0),Ms(n,i),li(n,qt()),t;if(e===6)Ms(n,i);else{if(r=n.current.alternate,!(i&30)&&!Hw(r)&&(e=hh(n,i),e===2&&(s=Gp(n),s!==0&&(i=s,e=_m(n,s))),e===1))throw t=ku,Ao(n,0),Ms(n,i),li(n,qt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:uo(n,ii,zr);break;case 3:if(Ms(n,i),(i&130023424)===i&&(e=g_+500-qt(),10<e)){if($f(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){jn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Zp(uo.bind(null,n,ii,zr),e);break}uo(n,ii,zr);break;case 4:if(Ms(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ur(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Vw(i/1960))-i,10<i){n.timeoutHandle=Zp(uo.bind(null,n,ii,zr),i);break}uo(n,ii,zr);break;case 5:uo(n,ii,zr);break;default:throw Error(oe(329))}}}return li(n,qt()),n.callbackNode===t?uM.bind(null,n):null}function _m(n,e){var t=su;return n.current.memoizedState.isDehydrated&&(Ao(n,e).flags|=256),n=hh(n,e),n!==2&&(e=ii,ii=t,e!==null&&vm(e)),n}function vm(n){ii===null?ii=n:ii.push.apply(ii,n)}function Hw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!dr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ms(n,e){for(e&=~m_,e&=~Gh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ur(e),i=1<<t;n[t]=-1,e&=~i}}function mv(n){if(ft&6)throw Error(oe(327));Oa();var e=$f(n,0);if(!(e&1))return li(n,qt()),null;var t=hh(n,e);if(n.tag!==0&&t===2){var i=Gp(n);i!==0&&(e=i,t=_m(n,i))}if(t===1)throw t=ku,Ao(n,0),Ms(n,e),li(n,qt()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,uo(n,ii,zr),li(n,qt()),null}function __(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Ja=qt()+500,zh&&Zs())}}function zo(n){ws!==null&&ws.tag===0&&!(ft&6)&&Oa();var e=ft;ft|=1;var t=ji.transition,i=yt;try{if(ji.transition=null,yt=1,n)return n()}finally{yt=i,ji.transition=t,ft=e,!(ft&6)&&Zs()}}function v_(){xi=Ca.current,Lt(Ca)}function Ao(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,vw(t)),en!==null)for(t=en.return;t!==null;){var i=t;switch(Qg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jf();break;case 3:Za(),Lt(oi),Lt(On),a_();break;case 5:o_(i);break;case 4:Za();break;case 13:Lt(Ft);break;case 19:Lt(Ft);break;case 10:n_(i.type._context);break;case 22:case 23:v_()}t=t.return}if(mn=n,en=n=ks(n.current,null),Sn=xi=e,ln=0,ku=null,m_=Gh=ko=0,ii=su=null,yo!==null){for(e=0;e<yo.length;e++)if(t=yo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}yo=null}return n}function cM(n,e){do{var t=en;try{if(t_(),Mf.current=lh,ah){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ah=!1}if(Oo=0,pn=on=zt=null,iu=!1,Nu=0,p_.current=null,t===null||t.return===null){ln=1,ku=e,en=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Sn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=nv(o);if(d!==null){d.flags&=-257,iv(d,o,a,s,e),d.mode&1&&tv(s,u,e),e=d,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){tv(s,u,e),x_();break e}l=Error(oe(426))}}else if(It&&a.mode&1){var m=nv(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),iv(m,o,a,s,e),Jg(Qa(l,a));break e}}s=l=Qa(l,a),ln!==4&&(ln=2),su===null?su=[s]:su.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=qS(s,l,e);j0(s,p);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Fs===null||!Fs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=$S(s,a,e);j0(s,y);break e}}s=s.return}while(s!==null)}dM(t)}catch(A){e=A,en===t&&t!==null&&(en=t=t.return);continue}break}while(!0)}function fM(){var n=uh.current;return uh.current=lh,n===null?lh:n}function x_(){(ln===0||ln===3||ln===2)&&(ln=4),mn===null||!(ko&268435455)&&!(Gh&268435455)||Ms(mn,Sn)}function hh(n,e){var t=ft;ft|=2;var i=fM();(mn!==n||Sn!==e)&&(zr=null,Ao(n,e));do try{Gw();break}catch(r){cM(n,r)}while(!0);if(t_(),ft=t,uh.current=i,en!==null)throw Error(oe(261));return mn=null,Sn=0,ln}function Gw(){for(;en!==null;)hM(en)}function Ww(){for(;en!==null&&!mT();)hM(en)}function hM(n){var e=mM(n.alternate,n,xi);n.memoizedProps=n.pendingProps,e===null?dM(n):en=e,p_.current=null}function dM(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Ow(t,e),t!==null){t.flags&=32767,en=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,en=null;return}}else if(t=Fw(t,e,xi),t!==null){en=t;return}if(e=e.sibling,e!==null){en=e;return}en=e=n}while(e!==null);ln===0&&(ln=5)}function uo(n,e,t){var i=yt,r=ji.transition;try{ji.transition=null,yt=1,Xw(n,e,t,i)}finally{ji.transition=r,yt=i}return null}function Xw(n,e,t,i){do Oa();while(ws!==null);if(ft&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(wT(n,s),n===mn&&(en=mn=null,Sn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wc||(wc=!0,gM(qf,function(){return Oa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ji.transition,ji.transition=null;var o=yt;yt=1;var a=ft;ft|=4,p_.current=null,zw(n,t),aM(t,n),fw(jp),jf=!!$p,jp=$p=null,n.current=t,Bw(t),gT(),ft=a,yt=o,ji.transition=s}else n.current=t;if(wc&&(wc=!1,ws=n,fh=r),s=n.pendingLanes,s===0&&(Fs=null),xT(t.stateNode),li(n,qt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ch)throw ch=!1,n=mm,mm=null,n;return fh&1&&n.tag!==0&&Oa(),s=n.pendingLanes,s&1?n===gm?ou++:(ou=0,gm=n):ou=0,Zs(),null}function Oa(){if(ws!==null){var n=qy(fh),e=ji.transition,t=yt;try{if(ji.transition=null,yt=16>n?16:n,ws===null)var i=!1;else{if(n=ws,ws=null,fh=0,ft&6)throw Error(oe(331));var r=ft;for(ft|=4,Ce=n.current;Ce!==null;){var s=Ce,o=s.child;if(Ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ce=u;Ce!==null;){var c=Ce;switch(c.tag){case 0:case 11:case 15:ru(8,c,s)}var f=c.child;if(f!==null)f.return=c,Ce=f;else for(;Ce!==null;){c=Ce;var h=c.sibling,d=c.return;if(rM(c),c===u){Ce=null;break}if(h!==null){h.return=d,Ce=h;break}Ce=d}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ce=o;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ru(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ce=p;break e}Ce=s.return}}var v=n.current;for(Ce=v;Ce!==null;){o=Ce;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ce=x;else e:for(o=v;Ce!==null;){if(a=Ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hh(9,a)}}catch(A){Gt(a,a.return,A)}if(a===o){Ce=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ce=y;break e}Ce=a.return}}if(ft=r,Zs(),wr&&typeof wr.onPostCommitFiberRoot=="function")try{wr.onPostCommitFiberRoot(Ih,n)}catch{}i=!0}return i}finally{yt=t,ji.transition=e}}return!1}function gv(n,e,t){e=Qa(t,e),e=qS(n,e,1),n=Ns(n,e,1),e=jn(),n!==null&&(Qu(n,1,e),li(n,e))}function Gt(n,e,t){if(n.tag===3)gv(n,n,t);else for(;e!==null;){if(e.tag===3){gv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fs===null||!Fs.has(i))){n=Qa(t,n),n=$S(e,n,1),e=Ns(e,n,1),n=jn(),e!==null&&(Qu(e,1,n),li(e,n));break}}e=e.return}}function Yw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=jn(),n.pingedLanes|=n.suspendedLanes&t,mn===n&&(Sn&t)===t&&(ln===4||ln===3&&(Sn&130023424)===Sn&&500>qt()-g_?Ao(n,0):m_|=t),li(n,e)}function pM(n,e){e===0&&(n.mode&1?(e=mc,mc<<=1,!(mc&130023424)&&(mc=4194304)):e=1);var t=jn();n=is(n,e),n!==null&&(Qu(n,e,t),li(n,t))}function qw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),pM(n,t)}function $w(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),pM(n,t)}var mM;mM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||oi.current)ri=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ri=!1,Nw(n,e,t);ri=!!(n.flags&131072)}else ri=!1,It&&e.flags&1048576&&xS(e,nh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Tf(n,e),n=e.pendingProps;var r=$a(e,On.current);Fa(e,t),r=u_(null,e,i,n,r,t);var s=c_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ai(i)?(s=!0,eh(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r_(e),r.updater=Vh,e.stateNode=r,r._reactInternals=e,rm(e,i,n,t),e=am(null,e,i,!0,s,t)):(e.tag=0,It&&s&&Zg(e),Wn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Tf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Kw(i),n=sr(i,n),r){case 0:e=om(null,e,i,n,t);break e;case 1:e=ov(null,e,i,n,t);break e;case 11:e=rv(null,e,i,n,t);break e;case 14:e=sv(null,e,i,sr(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),om(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),ov(n,e,i,r,t);case 3:e:{if(QS(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,wS(n,e),sh(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qa(Error(oe(423)),e),e=av(n,e,i,t,r);break e}else if(i!==r){r=Qa(Error(oe(424)),e),e=av(n,e,i,t,r);break e}else for(Ai=Is(e.stateNode.containerInfo.firstChild),Ri=e,It=!0,ar=null,t=ES(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ja(),i===r){e=rs(n,e,t);break e}Wn(n,e,i,t)}e=e.child}return e;case 5:return AS(e),n===null&&tm(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Kp(i,r)?o=null:s!==null&&Kp(i,s)&&(e.flags|=32),ZS(n,e),Wn(n,e,o,t),e.child;case 6:return n===null&&tm(e),null;case 13:return JS(n,e,t);case 4:return s_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ka(e,null,i,t):Wn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),rv(n,e,i,r,t);case 7:return Wn(n,e,e.pendingProps,t),e.child;case 8:return Wn(n,e,e.pendingProps.children,t),e.child;case 12:return Wn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Rt(ih,i._currentValue),i._currentValue=o,s!==null)if(dr(s.value,o)){if(s.children===r.children&&!oi.current){e=rs(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Kr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),nm(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),nm(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fa(e,t),r=Zi(r),i=i(r),e.flags|=1,Wn(n,e,i,t),e.child;case 14:return i=e.type,r=sr(i,e.pendingProps),r=sr(i.type,r),sv(n,e,i,r,t);case 15:return jS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),Tf(n,e),e.tag=1,ai(i)?(n=!0,eh(e)):n=!1,Fa(e,t),YS(e,i,r),rm(e,i,r,t),am(null,e,i,!0,n,t);case 19:return eM(n,e,t);case 22:return KS(n,e,t)}throw Error(oe(156,e.tag))};function gM(n,e){return Gy(n,e)}function jw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yi(n,e,t,i){return new jw(n,e,t,i)}function y_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kw(n){if(typeof n=="function")return y_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===zg)return 11;if(n===Bg)return 14}return 2}function ks(n,e){var t=n.alternate;return t===null?(t=Yi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Cf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")y_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case _a:return Co(t.children,r,s,e);case kg:o=8,r|=8;break;case Rp:return n=Yi(12,t,e,r|2),n.elementType=Rp,n.lanes=s,n;case bp:return n=Yi(13,t,e,r),n.elementType=bp,n.lanes=s,n;case Pp:return n=Yi(19,t,e,r),n.elementType=Pp,n.lanes=s,n;case Ay:return Wh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ty:o=10;break e;case wy:o=9;break e;case zg:o=11;break e;case Bg:o=14;break e;case xs:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=Yi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Co(n,e,t,i){return n=Yi(7,n,i,e),n.lanes=t,n}function Wh(n,e,t,i){return n=Yi(22,n,i,e),n.elementType=Ay,n.lanes=t,n.stateNode={isHidden:!1},n}function Cd(n,e,t){return n=Yi(6,n,null,e),n.lanes=t,n}function Rd(n,e,t){return e=Yi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Zw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ld(0),this.expirationTimes=ld(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ld(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function S_(n,e,t,i,r,s,o,a,l){return n=new Zw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},r_(s),n}function Qw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ga,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function _M(n){if(!n)return Ws;n=n._reactInternals;e:{if(Yo(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ai(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(ai(t))return _S(n,t,e)}return e}function vM(n,e,t,i,r,s,o,a,l){return n=S_(t,i,!0,n,r,s,o,a,l),n.context=_M(null),t=n.current,i=jn(),r=Os(t),s=Kr(i,r),s.callback=e??null,Ns(t,s,r),n.current.lanes=r,Qu(n,r,i),li(n,i),n}function Xh(n,e,t,i){var r=e.current,s=jn(),o=Os(r);return t=_M(t),e.context===null?e.context=t:e.pendingContext=t,e=Kr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ns(r,e,o),n!==null&&(cr(n,r,o,s),Sf(n,r,o)),o}function dh(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _v(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function M_(n,e){_v(n,e),(n=n.alternate)&&_v(n,e)}function Jw(){return null}var xM=typeof reportError=="function"?reportError:function(n){console.error(n)};function E_(n){this._internalRoot=n}Yh.prototype.render=E_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));Xh(n,e,null,null)};Yh.prototype.unmount=E_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;zo(function(){Xh(null,n,null,null)}),e[ns]=null}};function Yh(n){this._internalRoot=n}Yh.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ky();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ss.length&&e!==0&&e<Ss[t].priority;t++);Ss.splice(t,0,n),t===0&&Qy(n)}};function T_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function qh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vv(){}function eA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=dh(o);s.call(u)}}var o=vM(e,i,n,0,null,!1,!1,"",vv);return n._reactRootContainer=o,n[ns]=o.current,Pu(n.nodeType===8?n.parentNode:n),zo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=dh(l);a.call(u)}}var l=S_(n,0,!1,null,null,!1,!1,"",vv);return n._reactRootContainer=l,n[ns]=l.current,Pu(n.nodeType===8?n.parentNode:n),zo(function(){Xh(e,l,t,i)}),l}function $h(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=dh(o);a.call(l)}}Xh(e,o,n,r)}else o=eA(t,e,n,r,i);return dh(o)}$y=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Vl(e.pendingLanes);t!==0&&(Gg(e,t|1),li(e,qt()),!(ft&6)&&(Ja=qt()+500,Zs()))}break;case 13:zo(function(){var i=is(n,1);if(i!==null){var r=jn();cr(i,n,1,r)}}),M_(n,1)}};Wg=function(n){if(n.tag===13){var e=is(n,134217728);if(e!==null){var t=jn();cr(e,n,134217728,t)}M_(n,134217728)}};jy=function(n){if(n.tag===13){var e=Os(n),t=is(n,e);if(t!==null){var i=jn();cr(t,n,e,i)}M_(n,e)}};Ky=function(){return yt};Zy=function(n,e){var t=yt;try{return yt=n,e()}finally{yt=t}};Bp=function(n,e,t){switch(e){case"input":if(Up(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=kh(i);if(!r)throw Error(oe(90));Ry(i),Up(i,r)}}}break;case"textarea":Py(n,t);break;case"select":e=t.value,e!=null&&La(n,!!t.multiple,e,!1)}};Oy=__;ky=zo;var tA={usingClientEntryPoint:!1,Events:[ec,Sa,kh,Ny,Fy,__]},Rl={findFiberByHostInstance:xo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nA={bundleType:Rl.bundleType,version:Rl.version,rendererPackageName:Rl.rendererPackageName,rendererConfig:Rl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ls.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vy(n),n===null?null:n.stateNode},findFiberByHostInstance:Rl.findFiberByHostInstance||Jw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Ih=Ac.inject(nA),wr=Ac}catch{}}Ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tA;Ui.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T_(e))throw Error(oe(200));return Qw(n,e,null,t)};Ui.createRoot=function(n,e){if(!T_(n))throw Error(oe(299));var t=!1,i="",r=xM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=S_(n,1,!1,null,null,t,!1,i,r),n[ns]=e.current,Pu(n.nodeType===8?n.parentNode:n),new E_(e)};Ui.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=Vy(e),n=n===null?null:n.stateNode,n};Ui.flushSync=function(n){return zo(n)};Ui.hydrate=function(n,e,t){if(!qh(e))throw Error(oe(200));return $h(null,n,e,!0,t)};Ui.hydrateRoot=function(n,e,t){if(!T_(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=xM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=vM(e,null,n,1,t??null,r,!1,s,o),n[ns]=e.current,Pu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Yh(e)};Ui.render=function(n,e,t){if(!qh(e))throw Error(oe(200));return $h(null,n,e,!1,t)};Ui.unmountComponentAtNode=function(n){if(!qh(n))throw Error(oe(40));return n._reactRootContainer?(zo(function(){$h(null,null,n,!1,function(){n._reactRootContainer=null,n[ns]=null})}),!0):!1};Ui.unstable_batchedUpdates=__;Ui.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!qh(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return $h(n,e,t,!1,i)};Ui.version="18.3.1-next-f1338f8080-20240426";function yM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yM)}catch(n){console.error(n)}}yM(),yy.exports=Ui;var iA=yy.exports,SM,xv=iA;SM=xv.createRoot,xv.hydrateRoot;function Br(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function MM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},el={duration:.5,overwrite:!1,delay:0},w_,Mn,Nt,Cr=1e8,Un=1/Cr,xm=Math.PI*2,rA=xm/4,sA=0,EM=Math.sqrt,oA=Math.cos,aA=Math.sin,_n=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},ss=function(e){return typeof e=="number"},A_=function(e){return typeof e>"u"},Dr=function(e){return typeof e=="object"},ui=function(e){return e!==!1},C_=function(){return typeof window<"u"},Cc=function(e){return Wt(e)||_n(e)},TM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,ym=/(?:-?\.?\d|\.)+/gi,wM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ra=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,AM=/[+-]=-?[.\d]+/,CM=/[^,'"\[\]\s]+/gi,lA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,gr,Sm,R_,Di={},ph={},RM,bM=function(e){return(ph=tl(e,Di))&&di},b_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},zu=function(e,t){return!t&&console.warn(e)},PM=function(e,t){return e&&(Di[e]=t)&&ph&&(ph[e]=t)||Di},Bu=function(){return 0},uA={suppressEvents:!0,isStart:!0,kill:!1},Rf={suppressEvents:!0,kill:!1},cA={suppressEvents:!0},P_={},zs=[],Mm={},DM,Si={},Pd={},yv=30,bf=[],D_="",L_=function(e){var t=e[0],i,r;if(Dr(t)||Wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=bf.length;r--&&!bf[r].targetTest(t););i=bf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new t1(e[r],i)))||e.splice(r,1);return e},Ro=function(e){return e._gsap||L_(qi(e))[0]._gsap},LM=function(e,t,i){return(i=e[t])&&Wt(i)?e[t]():A_(i)&&e.getAttribute&&e.getAttribute(t)||i},ci=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},ka=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},fA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},mh=function(){var e=zs.length,t=zs.slice(0),i,r;for(Mm={},zs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},UM=function(e,t,i,r){zs.length&&!Mn&&mh(),e.render(t,i,Mn&&t<0&&(e._initted||e._startAt)),zs.length&&!Mn&&mh()},IM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(CM).length<2?t:_n(e)?e.trim():e},NM=function(e){return e},Li=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},hA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},tl=function(e,t){for(var i in t)e[i]=t[i];return e},Sv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Dr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},gh=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},au=function(e){var t=e.parent||Ot,i=e.keyframes?hA(In(e.keyframes)):Li;if(ui(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},dA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},FM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},jh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Xs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},bo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},pA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Em=function(e,t,i,r){return e._startAt&&(Mn?e._startAt.revert(Rf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},mA=function n(e){return!e||e._ts&&n(e.parent)},Mv=function(e){return e._repeat?nl(e._tTime,e=e.duration()+e._rDelay)*e:0},nl=function(e,t){var i=Math.floor(e=Jt(e/t));return e&&i===e?i-1:i},_h=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kh=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Un)||0))},Zh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kh(e),i._dirty||bo(i,e)),e},OM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=_h(e.rawTime(),t),(!t._dur||nc(0,t.totalDuration(),i)-t._tTime>Un)&&t.render(i,!0)),bo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},yr=function(e,t,i,r){return t.parent&&Xs(t),t._start=Jt((ss(i)?i:i||e!==Ot?zi(e,i,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),FM(e,t,"_first","_last",e._sort?"_start":0),Tm(t)||(e._recent=t),r||OM(e,t),e._ts<0&&Zh(e,e._tTime),e},kM=function(e,t){return(Di.ScrollTrigger||b_("scrollTrigger",t))&&Di.ScrollTrigger.create(t,e)},zM=function(e,t,i,r,s){if(I_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&DM!==Ti.frame)return zs.push(e),e._lazy=[s,r],1},gA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Tm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_A=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&gA(e)&&!(!e._initted&&Tm(e))||(e._ts<0||e._dp._ts<0)&&!Tm(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=nc(0,e._tDur,t),c=nl(l,a),e._yoyo&&c&1&&(o=1-o),c!==nl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mn||r||e._zTime===Un||!t&&e._zTime){if(!e._initted&&zM(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Un:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Em(e,t,i,!0),e._onUpdate&&!i&&Ci(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Xs(e,1),!i&&!Mn&&(Ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},vA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},il=function(e,t,i,r){var s=e._repeat,o=Jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Zh(e,e._tTime=e._tDur*a),e.parent&&Kh(e),i||bo(e.parent,e),e},Ev=function(e){return e instanceof qn?bo(e):il(e,e._dur)},xA={_start:0,endTime:Bu,totalDuration:Bu},zi=function n(e,t,i){var r=e.labels,s=e._recent||xA,o=e.duration()>=Cr?s.endTime(!1):e._dur,a,l,u;return _n(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(In(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},lu=function(e,t,i){var r=ss(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ui(l.vars.inherit)&&l.parent;o.immediateRender=ui(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},Qs=function(e,t){return e||e===0?t(e):t},nc=function(e,t,i){return i<e?e:i>t?t:i},Dn=function(e,t){return!_n(e)||!(t=lA.exec(e))?"":t[1]},yA=function(e,t,i){return Qs(i,function(r){return nc(e,t,r)})},wm=[].slice,BM=function(e,t){return e&&Dr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Dr(e[0]))&&!e.nodeType&&e!==gr},SA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return _n(r)&&!t||BM(r,1)?(s=i).push.apply(s,qi(r)):i.push(r)})||i},qi=function(e,t,i){return Nt&&!t&&Nt.selector?Nt.selector(e):_n(e)&&!i&&(Sm||!rl())?wm.call((t||R_).querySelectorAll(e),0):In(e)?SA(e,i):BM(e)?wm.call(e,0):e?[e]:[]},Am=function(e){return e=qi(e)[0]||zu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return qi(t,i.querySelectorAll?i:i===e?zu("Invalid scope")||R_.createElement("div"):e)}},VM=function(e){return e.sort(function(){return .5-Math.random()})},HM=function(e){if(Wt(e))return e;var t=Dr(e)?e:{each:e},i=Po(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return _n(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,v,x,y,A,w,E,b,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Cr])[1],!M){for(E=-1e8;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*c-.5:r%M,v=M===Cr?0:l?_*f/M-.5:r/M|0,E=0,b=Cr,w=0;w<_;w++)x=w%M-p,y=v-(w/M|0),m[w]=A=u?Math.abs(u==="y"?y:x):EM(x*x+y*y),A>E&&(E=A),A<b&&(b=A);r==="random"&&VM(m),m.max=E-b,m.min=b,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:u?u==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Dn(t.amount||t.each)||0,i=i&&_<0?QM(i):i}return _=(m[h]-m.min)/m.max||0,Jt(m.b+(i?i(_):_)*m.v)+m.u}},Cm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Jt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ss(i)?0:Dn(i))}},GM=function(e,t){var i=In(e),r,s;return!i&&Dr(e)&&(r=i=e.radius||Cr,e.values?(e=qi(e.values),(s=!ss(e[0]))&&(r*=r)):e=Cm(e.increment)),Qs(t,i?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Cr,c=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||ss(o)?c:c+Dn(o)}:Cm(e))},WM=function(e,t,i,r){return Qs(In(e)?!t:i===!0?!!(i=0):!r,function(){return In(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},MA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},EA=function(e,t){return function(i){return e(parseFloat(i))+(t||Dn(i))}},TA=function(e,t,i){return YM(e,t,0,1,i)},XM=function(e,t,i){return Qs(i,function(r){return e[~~t(r)]})},wA=function n(e,t,i){var r=t-e;return In(e)?XM(e,n(0,e.length),t):Qs(i,function(s){return(r+(s-e)%r)%r+e})},AA=function n(e,t,i){var r=t-e,s=r*2;return In(e)?XM(e,n(0,e.length-1),t):Qs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Vu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?CM:ym),i+=e.substr(t,r-t)+WM(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},YM=function(e,t,i,r,s){var o=t-e,a=r-i;return Qs(s,function(l){return i+((l-e)/o*a||0)})},CA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=_n(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=t}else r||(e=tl(In(e)?[]:{},e));if(!c){for(l in t)U_.call(a,e,l,"get",t[l]);s=function(g){return O_(g,a)||(o?e.p:e)}}}return Qs(i,s)},Tv=function(e,t,i){var r=e.labels,s=Cr,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ci=function(e,t,i){var r=e.vars,s=r[t],o=Nt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&zs.length&&mh(),a&&(Nt=a),c=l?s.apply(u,l):s.call(u),Nt=o,c},Gl=function(e){return Xs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&Ci(e,"onInterrupt"),e},ba,qM=[],$M=function(e){if(e)if(e=!e.name&&e.default||e,C_()||e.headless){var t=e.name,i=Wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Bu,render:O_,add:U_,kill:GA,modifier:HA,rawVars:0},o={targetTest:0,get:0,getSetter:F_,aliases:{},register:0};if(rl(),e!==r){if(Si[t])return;Li(r,Li(gh(e,s),o)),tl(r.prototype,tl(s,gh(e,o))),Si[r.prop=t]=r,e.targetTest&&(bf.push(r),P_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}PM(t,r),e.register&&e.register(di,r,fi)}else qM.push(e)},wt=255,Wl={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},Dd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},jM=function(e,t,i){var r=e?ss(e)?[e>>16,e>>8&wt,e&wt]:0:Wl.black,s,o,a,l,u,c,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Wl[e])r=Wl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&wt,r&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(ym),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Dd(l+1/3,s,o),r[1]=Dd(l,s,o),r[2]=Dd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(wM),i&&r.length<4&&(r[3]=1),r}else r=e.match(ym)||Wl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/wt,o=r[1]/wt,a=r[2]/wt,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(d=f-h,u=c>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},KM=function(e){var t=[],i=[],r=-1;return e.split(Bs).forEach(function(s){var o=s.match(Ra)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},wv=function(e,t,i){var r="",s=(e+r).match(Bs),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=jM(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=KM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Bs,"1").split(Ra),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Bs),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Bs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Wl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),RA=/hsl[a]?\(/,ZM=function(e){var t=e.join(" "),i;if(Bs.lastIndex=0,Bs.test(t))return i=RA.test(t),e[1]=wv(e[1],i),e[0]=wv(e[0],i,KM(e[1])),!0},Hu,Ti=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,d,g=function _(m){var p=n()-r,v=m===!0,x,y,A,w;if((p>e||p<0)&&(i+=p-t),r+=p,A=r-i,x=A-o,(x>0||v)&&(w=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(d=0;d<a.length;d++)a[d](A,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){RM&&(!Sm&&C_()&&(gr=Sm=window,R_=gr.document||{},Di.gsap=di,(gr.gsapVersions||(gr.gsapVersions=[])).push(di.version),bM(ph||gr.GreenSockGlobals||!gr.gsap&&gr||{}),qM.forEach($M)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Hu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Hu=0,u=Bu},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,v){var x=p?function(y,A,w,E){m(y,A,w,E),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),rl(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),rl=function(){return!Hu&&Ti.wake()},ut={},bA=/^[\d.\-M][\d.\-,\s]/,PA=/["']/g,DA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(PA,"").trim():+u,r=l.substr(a+1).trim();return t},LA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},UA=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[DA(t[1])]:LA(e).split(",").map(IM)):ut._CE&&bA.test(e)?ut._CE("",e):i},QM=function(e){return function(t){return 1-e(1-t)}},JM=function n(e,t){for(var i=e._first,r;i;)i instanceof qn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Po=function(e,t){return e&&(Wt(e)?e:ut[e]||UA(e))||t},qo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ci(e,function(a){ut[a]=Di[a]=s,ut[o=a.toLowerCase()]=i;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},e1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ld=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/xm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*aA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:e1(a);return s=xm/s,l.config=function(u,c){return n(e,u,c)},l},Ud=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:e1(i);return r.config=function(s){return n(e,s)},r};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;qo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;qo("Elastic",Ld("in"),Ld("out"),Ld());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};qo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);qo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});qo("Circ",function(n){return-(EM(1-n*n)-1)});qo("Sine",function(n){return n===1?1:-oA(n*rA)+1});qo("Back",Ud("in"),Ud("out"),Ud());ut.SteppedEase=ut.steps=Di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Un;return function(a){return((r*nc(0,o,a)|0)+s)*i}}};el.ease=ut["quad.out"];ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return D_+=n+","+n+"Params,"});var t1=function(e,t){this.id=sA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:LM,this.set=t?t.getSetter:F_},Gu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,il(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Hu||Ti.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,il(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(rl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Zh(this,i),!s._dp||s.parent||OM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&yr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Un||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),UM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Mv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Mv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?nl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?_h(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(nc(-Math.abs(this._delay),this._tDur,s),r!==!1),Kh(this),pA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Un&&(this._tTime-=Un)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&yr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ui(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_h(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=cA);var r=Mn;return Mn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Mn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ev(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Ev(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(zi(this,i),ui(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ui(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Un)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Wt(i)?i:NM,a=function(){var u=r.then;r.then=null,Wt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Gl(this)},n}();Li(Gu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var qn=function(n){MM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ui(i.sortChildren),Ot&&yr(i.parent||Ot,Br(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&kM(Br(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return lu(0,arguments,this),this},t.from=function(r,s,o){return lu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return lu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,au(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(r,s,zi(this,o),1),this},t.call=function(r,s,o){return yr(this,Qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Qt(r,o,zi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,au(o).immediateRender=ui(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,au(a).immediateRender=ui(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Jt(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,d,g,_,m,p,v,x,y,A,w,E;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,p=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Jt(c%m),c===l?(_=this._repeat,h=u):(A=Jt(c/m),_=~~A,_&&_===A&&(h=u,_--),h>u&&(h=u)),A=nl(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(h=u-h,E=1),_!==A&&!this._lock){var b=w&&A&1,M=b===(w&&_&1);if(_<A&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(E?0:Jt(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;JM(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=vA(this,Jt(a),Jt(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(Ci(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var S=r<0?r:h;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||Mn&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=S?-1e-8:Un);break}}d=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-1e-8)._zTime=h>=a?1:-1,this._ts))return this._start=y,Kh(this),this.render(r,s,o);this._onUpdate&&!s&&Ci(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Xs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ci(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ss(s)||(s=zi(this,s,r)),!(r instanceof Gu)){if(In(r))return r.forEach(function(a){return o.add(a,s)}),this;if(_n(r))return this.addLabel(r,s);if(Wt(r))r=Qt.delayedCall(0,r);else return this}return this!==r?yr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return _n(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(r.parent===this&&jh(this,r),r===this._recent&&(this._recent=this._last),bo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(Ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=zi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Qt.delayedCall(0,s||Bu,o);return a.data="isPause",this._hasPause=1,yr(this,a,zi(this,r))},t.removePause=function(r){var s=this._first;for(r=zi(this,r);s;)s._start===r&&s.data==="isPause"&&Xs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)As!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=qi(r),l=this._first,u=ss(s),c;l;)l instanceof Qt?fA(l._targets,a)&&(u?(!As||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=zi(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Qt.to(o,Li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Un,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&il(g,m,0,1).render(g._time,!0,!0),d=1}c&&c.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Li({startAt:{time:zi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Tv(this,zi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Tv(this,zi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Un)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return bo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),bo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Cr,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,yr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;il(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(UM(Ot,_h(r,Ot)),DM=Ti.frame),Ti.frame>=yv){yv+=bi.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&bi.autoSleep&&Ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ti.sleep()}}},e}(Gu);Li(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var IA=function(e,t,i,r,s,o,a){var l=new fi(this._pt,e,t,0,1,a1,null,s),u=0,c=0,f,h,d,g,_,m,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Vu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(bd)||[];f=bd.exec(r);)g=f[0],_=r.substring(u,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?ka(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},u=bd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(AM.test(r)||p)&&(l.e=0),this._pt=l,l},U_=function(e,t,i,r,s,o,a,l,u,c){Wt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Wt(f)?u?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,d=Wt(f)?u?zA:s1:N_,g;if(_n(r)&&(~r.indexOf("random(")&&(r=Vu(r)),r.charAt(1)==="="&&(g=ka(h,r)+(Dn(h)||0),(g||g===0)&&(r=g))),!c||h!==r||Rm)return!isNaN(h*r)&&r!==""?(g=new fi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?VA:o1,0,d),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&b_(t,r),IA.call(this,e,t,h,r,d,l||bi.stringFilter,u))},NA=function(e,t,i,r,s){if(Wt(e)&&(e=uu(e,s,t,i,r)),!Dr(e)||e.style&&e.nodeType||In(e)||TM(e))return _n(e)?uu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=uu(e[a],s,t,i,r);return o},n1=function(e,t,i,r,s,o){var a,l,u,c;if(Si[e]&&(a=new Si[e]).init(s,a.rawVars?t[e]:NA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new fi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ba))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},As,Rm,I_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!w_,y=e.timeline,A,w,E,b,M,S,D,F,z,q,j,G,X;if(y&&(!h||!s)&&(s="none"),e._ease=Po(s,el.ease),e._yEase=f?QM(Po(f===!0?s:f,el.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(F=m[0]?Ro(m[0]).harness:0,G=F&&r[F.prop],A=gh(r,P_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!d?_.render(-1,!0):_.revert(c&&g?Rf:uA),_._lazy=0),o){if(Xs(e._startAt=Qt.set(m,Li({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ui(l),startAt:null,delay:0,onUpdate:u&&function(){return Ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!d)&&e._startAt.revert(Rf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),E=Li({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ui(l),immediateRender:a,stagger:0,parent:p},A),G&&(E[F.prop]=G),Xs(e._startAt=Qt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(Rf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Un,Un);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ui(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],D=M._gsap||L_(m)[w]._gsap,e._ptLookup[w]=q={},Mm[D.id]&&zs.length&&mh(),j=v===m?w:v.indexOf(M),F&&(z=new F).init(M,G||A,e,j,v)!==!1&&(e._pt=b=new fi(e._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(U){q[U]=b}),z.priority&&(S=1)),!F||G)for(E in A)Si[E]&&(z=n1(E,A,e,j,M,v))?z.priority&&(S=1):q[E]=b=U_.call(e,M,E,"get",A[E],j,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),x&&e._pt&&(As=e,Ot.killTweensOf(M,q,e.globalTime(t)),X=!e.parent,As=0),e._pt&&l&&(Mm[D.id]=1)}S&&l1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!X,h&&t<=0&&y.render(Cr,!0,!0)},FA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,d;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Rm=1,e.vars[t]="+=0",I_(e,a),Rm=0,l?zu(t+" not eligible for reset"):1;u.push(c)}for(d=u.length;d--;)f=u[d],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Yt(i)+Dn(f.e)),f.b&&(f.b=c.s+Dn(f.b))},OA=function(e,t){var i=e[0]?Ro(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=tl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},kA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(In(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},uu=function(e,t,i,r,s){return Wt(e)?e.call(t,i,r,s):_n(e)&&~e.indexOf("random(")?Vu(e):e},i1=D_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",r1={};ci(i1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return r1[n]=1});var Qt=function(n){MM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:au(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=r.parent||Ot,x=(In(i)||TM(i)?ss(i[0]):"length"in r)?[i]:qi(i),y,A,w,E,b,M,S,D;if(a._targets=x.length?L_(x):zu("GSAP target "+i+" not found. https://gsap.com",!bi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Cc(u)||Cc(c)){if(r=a.vars,y=a.timeline=new qn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Br(a),y._start=0,h||Cc(u)||Cc(c)){if(E=x.length,S=h&&HM(h),Dr(h))for(b in h)~i1.indexOf(b)&&(D||(D={}),D[b]=h[b]);for(A=0;A<E;A++)w=gh(r,r1),w.stagger=0,p&&(w.yoyoEase=p),D&&tl(w,D),M=x[A],w.duration=+uu(u,Br(a),A,M,x),w.delay=(+uu(c,Br(a),A,M,x)||0)-a._delay,!h&&E===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(M,w,S?S(A,M,x):0),y._ease=ut.none;y.duration()?u=c=0:a.timeline=0}else if(g){au(Li(y.vars.defaults,{ease:"none"})),y._ease=Po(g.ease||r.ease||"none");var F=0,z,q,j;if(In(g))g.forEach(function(G){return y.to(x,G,">")}),y.duration();else{w={};for(b in g)b==="ease"||b==="easeEach"||kA(b,g[b],w,g.easeEach);for(b in w)for(z=w[b].sort(function(G,X){return G.t-X.t}),F=0,A=0;A<z.length;A++)q=z[A],j={ease:q.e,duration:(q.t-(A?z[A-1].t:0))/100*u},j[b]=q.v,y.to(x,j,F),F+=j.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return d===!0&&!w_&&(As=Br(a),Ot.killTweensOf(x),As=0),yr(v,Br(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===Jt(v._time)&&ui(f)&&mA(Br(a))&&v.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-c)||0)),m&&kM(Br(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Un&&!c?l:r<Un?0:r,h,d,g,_,m,p,v,x,y;if(!u)_A(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=Jt(f%_),f===l?(g=this._repeat,h=u):(m=Jt(f/_),g=~~m,g&&g===m?(h=u,g--):h>u&&(h=u)),p=this._yoyo&&g&1,p&&(y=this._yEase,h=u-h),m=nl(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(x&&this._yEase&&JM(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Jt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(zM(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/u),this._from&&(this.ratio=v=1-v),h&&!a&&!s&&!g&&(Ci(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Em(this,r,s,o),Ci(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ci(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Em(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Xs(this,1),!s&&!(c&&!a)&&(f||a||p)&&(Ci(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Hu||Ti.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||I_(this,u),c=this._ease(u/this._dur),FA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Zh(this,0),this.parent||FM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,As&&As.vars.overwrite!==!0)._first||Gl(this),this.parent&&o!==this.timeline.totalDuration()&&il(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?qi(r):a,u=this._ptLookup,c=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&dA(a,l))return s==="all"&&(this._pt=0),Gl(this);for(f=this._op=this._op||[],s!=="all"&&(_n(s)&&(_={},ci(s,function(v){return _[v]=1}),s=_),s=OA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=u[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&jh(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&c&&Gl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return lu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return lu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Gu);Li(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ci("staggerTo,staggerFrom,staggerFromTo",function(n){Qt[n]=function(){var e=new qn,t=wm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var N_=function(e,t,i){return e[t]=i},s1=function(e,t,i){return e[t](i)},zA=function(e,t,i,r){return e[t](r.fp,i)},BA=function(e,t,i){return e.setAttribute(t,i)},F_=function(e,t){return Wt(e[t])?s1:A_(e[t])&&e.setAttribute?BA:N_},o1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},VA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},a1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},O_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},HA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},GA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?jh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},WA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},l1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},fi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||o1,this.d=l||this,this.set=u||N_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=WA,this.m=i,this.mt=s,this.tween=r},n}();ci(D_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return P_[n]=1});Di.TweenMax=Di.TweenLite=Qt;Di.TimelineLite=Di.TimelineMax=qn;Ot=new qn({sortChildren:!1,defaults:el,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bi.stringFilter=ZM;var Do=[],Pf={},XA=[],Av=0,YA=0,Id=function(e){return(Pf[e]||XA).map(function(t){return t()})},bm=function(){var e=Date.now(),t=[];e-Av>2&&(Id("matchMediaInit"),Do.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=gr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Id("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Av=e,Id("matchMedia"))},u1=function(){function n(t,i){this.selector=i&&Am(i),this.data=[],this._r=[],this.isReverted=!1,this.id=YA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Wt(i)&&(s=r,r=i,i=Wt);var o=this,a=function(){var u=Nt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Am(s)),Nt=o,f=r.apply(o,arguments),Wt(f)&&o._r.push(f),Nt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Nt;Nt=null,i(this),Nt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof qn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Do.length;o--;)Do[o].id===this.id&&Do.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),qA=function(){function n(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Dr(i)||(i={matches:i});var o=new u1(0,s||this.scope),a=o.conditions={},l,u,c;Nt&&!o.selector&&(o.selector=Nt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=gr.matchMedia(i[u]),l&&(Do.indexOf(o)<0&&Do.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(bm):l.addEventListener("change",bm)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),vh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return $M(r)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){_n(e)&&(e=qi(e)[0]);var s=Ro(e||{}).get,o=i?NM:IM;return i==="native"&&(i=""),e&&(t?o((Si[t]&&Si[t].get||s)(e,t,i,r)):function(a,l,u){return o((Si[a]&&Si[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=qi(e),e.length>1){var r=e.map(function(c){return di.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Si[t],a=Ro(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;ba._pt=0,f.init(e,i?c+i:c,ba,0,[e]),f.render(1,f),ba._pt&&O_(1,ba)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=di.to(e,Li((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Po(e.ease,el.ease)),Sv(el,e||{})},config:function(e){return Sv(bi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Si[a]&&!Di[a]&&zu(t+" effect requires "+a+" plugin.")}),Pd[t]=function(a,l,u){return i(qi(a),Li(l||{},s),u)},o&&(qn.prototype[t]=function(a,l,u){return this.add(Pd[t](a,Dr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ut[e]=Po(t)},parseEase:function(e,t){return arguments.length?Po(e,t):ut},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new qn(e),r,s;for(i.smoothChildTiming=ui(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Qt&&r.vars.onComplete===r._targets[0]))&&yr(i,r,r._start-r._delay),r=s;return yr(Ot,i,0),i},context:function(e,t){return e?new u1(e,t):Nt},matchMedia:function(e){return new qA(e)},matchMediaRefresh:function(){return Do.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||bm()},addEventListener:function(e,t){var i=Pf[e]||(Pf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Pf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:wA,wrapYoyo:AA,distribute:HM,random:WM,snap:GM,normalize:TA,getUnit:Dn,clamp:yA,splitColor:jM,toArray:qi,selector:Am,mapRange:YM,pipe:MA,unitize:EA,interpolate:CA,shuffle:VM},install:bM,effects:Pd,ticker:Ti,updateRoot:qn.updateRoot,plugins:Si,globalTimeline:Ot,core:{PropTween:fi,globals:PM,Tween:Qt,Timeline:qn,Animation:Gu,getCache:Ro,_removeLinkedListItem:jh,reverting:function(){return Mn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return w_=e}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return vh[n]=Qt[n]});Ti.add(qn.updateRoot);ba=vh.to({},{duration:0});var $A=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},jA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=$A(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Nd=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(_n(s)&&(l={},ci(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}jA(a,s)}}}},di=vh.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Mn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Nd("roundProps",Cm),Nd("modifiers"),Nd("snap",GM))||vh;Qt.version=qn.version=di.version="3.12.7";RM=1;C_()&&rl();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;var Cv=ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rv,Cs,za,k_,Mo,bv,z_,KA=function(){return typeof window<"u"},os={},co=180/Math.PI,Ba=Math.PI/180,Zo=Math.atan2,Pv=1e8,B_=/([A-Z])/g,ZA=/(left|right|width|margin|padding|x)/i,QA=/[\s,\(]\S/,Mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},c1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},f1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},nC=function(e,t,i){return e.style[t]=i},iC=function(e,t,i){return e.style.setProperty(t,i)},rC=function(e,t,i){return e._gsap[t]=i},sC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},oC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},aC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},kt="transform",hi=kt+"Origin",lC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in os&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Gr(r,a)}):this.tfm[e]=o.x?o[e]:Gr(r,e),e===hi&&(this.tfm.zOrigin=o.zOrigin);else return Mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},h1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},uC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(B_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=z_(),(!s||!s.isStart)&&!i[kt]&&(h1(i),r.zOrigin&&i[hi]&&(i[hi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},d1=function(e,t){var i={target:e,props:[],revert:uC,save:lC};return e._gsap||di.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},p1,Dm=function(e,t){var i=Cs.createElementNS?Cs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cs.createElement(e);return i&&i.style?i:Cs.createElement(e)},Rr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(B_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,sl(t)||t,1)||""},Dv="O,Moz,ms,Ms,Webkit".split(","),sl=function(e,t,i){var r=t||Mo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Dv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Dv[o]:"")+e},Lm=function(){KA()&&window.document&&(Rv=window,Cs=Rv.document,za=Cs.documentElement,Mo=Dm("div")||{style:{}},Dm("div"),kt=sl(kt),hi=kt+"Origin",Mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",p1=!!sl("perspective"),z_=di.core.reverting,k_=1)},Lv=function(e){var t=e.ownerSVGElement,i=Dm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),za.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),za.removeChild(i),s},Uv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},m1=function(e){var t,i;try{t=e.getBBox()}catch{t=Lv(e),i=1}return t&&(t.width||t.height)||i||(t=Lv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Uv(e,["x","cx","x1"])||0,y:+Uv(e,["y","cy","y1"])||0,width:0,height:0}:t},g1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&m1(e))},Bo=function(e,t){if(t){var i=e.style,r;t in os&&t!==hi&&(t=kt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(B_,"-$1").toLowerCase())):i.removeAttribute(t)}},Rs=function(e,t,i,r,s,o){var a=new fi(e._pt,t,i,0,1,o?f1:c1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Iv={deg:1,rad:1,turn:1},cC={grid:1,flex:1},Ys=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Mo.style,l=ZA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Iv[r]||Iv[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&g1(e),(d||o==="%")&&(os[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[c],Yt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Cs||!_.appendChild)&&(_=Cs.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Ti.time&&!m.uncache)return Yt(s/m.width*f);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,g=e[c],v?e.style[t]=v:Bo(e,t)}else(d||o==="%")&&!cC[Rr(_,"display")]&&(a.position=Rr(e,"position")),_===e&&(a.position="static"),_.appendChild(Mo),g=Mo[c],_.removeChild(Mo),a.position="absolute";return l&&d&&(m=Ro(_),m.time=Ti.time,m.width=_[c]),Yt(h?g*s/f:g&&s?f/g*s:0)},Gr=function(e,t,i,r){var s;return k_||Lm(),t in Mr&&t!=="transform"&&(t=Mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),os[t]&&t!=="transform"?(s=Xu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yh(Rr(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=xh[t]&&xh[t](e,t,i)||Rr(e,t)||LM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ys(e,t,s,i)+i:s},fC=function(e,t,i,r){if(!i||i==="none"){var s=sl(t,e,1),o=s&&Rr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Rr(e,"borderTopColor"))}var a=new fi(this._pt,e.style,t,0,1,a1),l=0,u=0,c,f,h,d,g,_,m,p,v,x,y,A;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Rr(e,t)||r,_?e.style[t]=_:Bo(e,t)),c=[i,r],ZM(c),i=c[0],r=c[1],h=i.match(Ra)||[],A=r.match(Ra)||[],A.length){for(;f=Ra.exec(r);)m=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=ka(d,m)+y),p=parseFloat(m),x=m.substr((p+"").length),l=Ra.lastIndex-x.length,x||(x=x||bi.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(d=Ys(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?f1:c1;return AM.test(r)&&(a.e=0),this._pt=a,a},Nv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Nv[i]||i,t[1]=Nv[r]||r,t.join(" ")},dC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],os[a]&&(l=1,a=a==="transformOrigin"?hi:kt),Bo(i,a);l&&(Bo(i,kt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Xu(i,1),o.uncache=1,h1(r)))}},xh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new fi(e._pt,t,i,0,0,dC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Wu=[1,0,0,1,0,0],_1={},v1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fv=function(e){var t=Rr(e,kt);return v1(t)?Wu:t.substr(7).match(wM).map(Yt)},V_=function(e,t){var i=e._gsap||Ro(e),r=e.style,s=Fv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Wu:s):(s===Wu&&!e.offsetParent&&e!==za&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,za.appendChild(e)),s=Fv(e),l?r.display=l:Bo(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):za.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Um=function(e,t,i,r,s,o){var a=e._gsap,l=s||V_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,E,b,M;i?l!==Wu&&(E=d*m-g*_)&&(b=y*(m/E)+A*(-_/E)+(_*v-m*p)/E,M=y*(-g/E)+A*(d/E)-(d*v-g*p)/E,y=b,A=M):(w=m1(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),r||r!==!1&&a.smooth?(p=y-u,v=A-c,a.xOffset=f+(p*d+v*_)-p,a.yOffset=h+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[hi]="0px 0px",o&&(Rs(o,a,"xOrigin",u,y),Rs(o,a,"yOrigin",c,A),Rs(o,a,"xOffset",f,a.xOffset),Rs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},Xu=function(e,t){var i=e._gsap||new t1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Rr(e,hi)||"0",c,f,h,d,g,_,m,p,v,x,y,A,w,E,b,M,S,D,F,z,q,j,G,X,U,$,P,te,_e,Ye,Y,ne;return c=f=h=_=m=p=v=x=y=0,d=g=1,i.svg=!!(e.getCTM&&g1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),r.scale=r.rotate=r.translate="none"),E=V_(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Um(e,X||u,!!X||i.originIsAbsolute,i.smooth!==!1,E)),A=i.xOrigin||0,w=i.yOrigin||0,E!==Wu&&(D=E[0],F=E[1],z=E[2],q=E[3],c=j=E[4],f=G=E[5],E.length===6?(d=Math.sqrt(D*D+F*F),g=Math.sqrt(q*q+z*z),_=D||F?Zo(F,D)*co:0,v=z||q?Zo(z,q)*co+_:0,v&&(g*=Math.abs(Math.cos(v*Ba))),i.svg&&(c-=A-(A*D+w*z),f-=w-(A*F+w*q))):(ne=E[6],Ye=E[7],P=E[8],te=E[9],_e=E[10],Y=E[11],c=E[12],f=E[13],h=E[14],b=Zo(ne,_e),m=b*co,b&&(M=Math.cos(-b),S=Math.sin(-b),X=j*M+P*S,U=G*M+te*S,$=ne*M+_e*S,P=j*-S+P*M,te=G*-S+te*M,_e=ne*-S+_e*M,Y=Ye*-S+Y*M,j=X,G=U,ne=$),b=Zo(-z,_e),p=b*co,b&&(M=Math.cos(-b),S=Math.sin(-b),X=D*M-P*S,U=F*M-te*S,$=z*M-_e*S,Y=q*S+Y*M,D=X,F=U,z=$),b=Zo(F,D),_=b*co,b&&(M=Math.cos(b),S=Math.sin(b),X=D*M+F*S,U=j*M+G*S,F=F*M-D*S,G=G*M-j*S,D=X,j=U),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Yt(Math.sqrt(D*D+F*F+z*z)),g=Yt(Math.sqrt(G*G+ne*ne)),b=Zo(j,G),v=Math.abs(b)>2e-4?b*co:0,y=Y?1/(Y<0?-Y:Y):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!v1(Rr(e,kt)),X&&e.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Yt(d),i.scaleY=Yt(g),i.rotation=Yt(_)+a,i.rotationX=Yt(m)+a,i.rotationY=Yt(p)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[hi]=yh(u)),i.xOffset=i.yOffset=0,i.force3D=bi.force3D,i.renderTransform=i.svg?mC:p1?x1:pC,i.uncache=0,i},yh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fd=function(e,t,i){var r=Dn(t);return Yt(parseFloat(t)+parseFloat(Ys(e,"x",i+"px",r)))+r},pC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,x1(e,t)},eo="0deg",bl="0px",to=") ",x1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,v=i.target,x=i.zOrigin,y="",A=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==eo||c!==eo)){var w=parseFloat(c)*Ba,E=Math.sin(w),b=Math.cos(w),M;w=parseFloat(f)*Ba,M=Math.cos(w),o=Fd(v,o,E*M*-x),a=Fd(v,a,-Math.sin(w)*-x),l=Fd(v,l,b*M*-x+x)}m!==bl&&(y+="perspective("+m+to),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(A||o!==bl||a!==bl||l!==bl)&&(y+=l!==bl||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+to),u!==eo&&(y+="rotate("+u+to),c!==eo&&(y+="rotateY("+c+to),f!==eo&&(y+="rotateX("+f+to),(h!==eo||d!==eo)&&(y+="skew("+h+", "+d+to),(g!==1||_!==1)&&(y+="scale("+g+", "+_+to),v.style[kt]=y||"translate(0, 0)"},mC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),A,w,E,b,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ba,u*=Ba,A=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-u)*-h,b=Math.cos(l-u)*h,u&&(c*=Ba,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,b*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=Yt(A),w=Yt(w),E=Yt(E),b=Yt(b)):(A=f,b=h,w=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Ys(d,"x",o,"px"),y=Ys(d,"y",a,"px")),(g||_||m||p)&&(x=Yt(x+g-(g*A+_*E)+m),y=Yt(y+_-(g*w+_*b)+p)),(r||s)&&(M=d.getBBox(),x=Yt(x+r/100*M.width),y=Yt(y+s/100*M.height)),M="matrix("+A+","+w+","+E+","+b+","+x+","+y+")",d.setAttribute("transform",M),v&&(d.style[kt]=M)},gC=function(e,t,i,r,s){var o=360,a=_n(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?co:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-360)),f==="cw"&&u<0?u=(u+o*Pv)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Pv)%o-~~(u/o)*o)),e._pt=h=new fi(e._pt,t,i,r,u,JA),h.e=c,h.u="deg",e._props.push(i),h},Ov=function(e,t){for(var i in t)e[i]=t[i];return e},_C=function(e,t,i){var r=Ov({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,d,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[kt]=t,a=Xu(i,1),Bo(i,kt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[kt],o[kt]=t,a=Xu(i,1),o[kt]=u);for(l in os)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(d=Dn(u),g=Dn(c),f=d!==g?Ys(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new fi(e._pt,a,l,f,h-f,Pm),e._pt.u=g||0,e._props.push(l));Ov(a,r)};ci("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});xh[e>1?"border"+n:n]=function(a,l,u,c,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Gr(a,g,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(c+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var y1={name:"css",register:Lm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,d,g,_,m,p,v,x,y,A,w,E,b;k_||Lm(),this.styles=this.styles||d1(e),b=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Si[_]&&n1(_,t,i,r,e,s)))){if(d=typeof c,g=xh[_],d==="function"&&(c=c.call(i,r,e,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Vu(c)),g)g(this,e,_,c,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Bs.lastIndex=0,Bs.test(u)||(m=Dn(u),p=Dn(c)),p?m!==p&&(u=Ys(e,_,u,p)+p):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],_n(u)&&~u.indexOf("random(")&&(u=Vu(u)),Dn(u+"")||u==="auto"||(u+=bi.units[_]||Dn(Gr(e,_))||""),(u+"").charAt(1)==="="&&(u=Gr(e,_))):u=Gr(e,_),h=parseFloat(u),v=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),_ in Mr&&(_==="autoAlpha"&&(h===1&&Gr(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),Rs(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Mr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in os,x){if(this.styles.save(_),y||(A=e._gsap,A.renderTransform&&!t.parseTransform||Xu(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new fi(this._pt,a,kt,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new fi(this._pt,A,"scaleY",A.scaleY,(v?ka(A.scaleY,v+f):f)-A.scaleY||0,Pm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(hi,0,a[hi]),c=hC(c),A.svg?Um(e,c,0,w,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==A.zOrigin&&Rs(this,A,"zOrigin",A.zOrigin,p),Rs(this,a,_,yh(u),yh(c)));continue}else if(_==="svgOrigin"){Um(e,c,1,w,0,this);continue}else if(_ in _1){gC(this,A,_,h,v?ka(h,v+c):c);continue}else if(_==="smoothOrigin"){Rs(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){_C(this,c,e);continue}}else _ in a||(_=sl(_)||_);if(x||(f||f===0)&&(h||h===0)&&!QA.test(c)&&_ in a)m=(u+"").substr((h+"").length),f||(f=0),p=Dn(c)||(_ in bi.units?bi.units[_]:m),m!==p&&(h=Ys(e,_,u,p)),this._pt=new fi(this._pt,x?A:a,_,h,(v?ka(h,v+f):f)-h,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?tC:Pm),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=eC);else if(_ in a)fC.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){b_(_,c);continue}x||(_ in a?b.push(_,0,a[_]):typeof e[_]=="function"?b.push(_,2,e[_]()):b.push(_,1,u||e[_])),o.push(_)}}E&&l1(this)},render:function(e,t){if(t.tween._time||!z_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Gr,aliases:Mr,getSetter:function(e,t,i){var r=Mr[t];return r&&r.indexOf(",")<0&&(t=r),t in os&&t!==hi&&(e._gsap.x||Gr(e,"x"))?i&&bv===i?t==="scale"?sC:rC:(bv=i||{})&&(t==="scale"?oC:aC):e.style&&!A_(e.style[t])?nC:~t.indexOf("-")?iC:F_(e,t)},core:{_removeProperty:Bo,_getMatrix:V_}};di.utils.checkPrefix=sl;di.core.getStyleSaver=d1;(function(n,e,t,i){var r=ci(n+","+e+","+t,function(s){os[s]=1});ci(e,function(s){bi.units[s]="deg",_1[s]=1}),Mr[r[13]]=n+","+e,ci(i,function(s){var o=s.split(":");Mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){bi.units[n]="px"});di.registerPlugin(y1);var cu=di.registerPlugin(y1)||di;cu.core.Tween;function vC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function xC(n,e,t){return e&&vC(n.prototype,e),n}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yn,Df,wi,bs,Ps,Va,S1,fo,fu,M1,qr,rr,E1,T1=function(){return yn||typeof window<"u"&&(yn=window.gsap)&&yn.registerPlugin&&yn},w1=1,Pa=[],rt=[],br=[],hu=Date.now,Im=function(e,t){return t},yC=function(){var e=fu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,br),rt=i,br=r,Im=function(o,a){return t[o](a)}},Vs=function(e,t){return~br.indexOf(e)&&br[br.indexOf(e)+1][t]},du=function(e){return!!~M1.indexOf(e)},Vn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Bn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Rc="scrollLeft",bc="scrollTop",Nm=function(){return qr&&qr.isPressed||rt.cache++},Sh=function(e,t){var i=function r(s){if(s||s===0){w1&&(wi.history.scrollRestoration="manual");var o=qr&&qr.isPressed;s=r.v=Math.round(s)||(qr&&qr.iOS?1:0),e(s),r.cacheID=rt.cache,o&&Im("ss",s)}else(t||rt.cache!==r.cacheID||Im("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},$n={s:Rc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sh(function(n){return arguments.length?wi.scrollTo(n,an.sc()):wi.pageXOffset||bs[Rc]||Ps[Rc]||Va[Rc]||0})},an={s:bc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$n,sc:Sh(function(n){return arguments.length?wi.scrollTo($n.sc(),n):wi.pageYOffset||bs[bc]||Ps[bc]||Va[bc]||0})},ni=function(e,t){return(t&&t._ctx&&t._ctx.selector||yn.utils.toArray)(e)[0]||(typeof e=="string"&&yn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},qs=function(e,t){var i=t.s,r=t.sc;du(e)&&(e=bs.scrollingElement||Ps);var s=rt.indexOf(e),o=r===an.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Vn(e,"scroll",Nm);var a=rt[s+o],l=a||(rt[s+o]=Sh(Vs(e,i),!0)||(du(e)?r:Sh(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=yn.getProperty(e,"scrollBehavior")==="smooth"),l},Fm=function(e,t,i){var r=e,s=e,o=hu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=hu();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},h=function(g){var _=a,m=s,p=hu();return(g||g===0)&&g!==r&&c(g),o===a||p-a>u?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:c,reset:f,getVelocity:h}},Pl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},A1=function(){fu=yn.core.globals().ScrollTrigger,fu&&fu.core&&yC()},C1=function(e){return yn=e||T1(),!Df&&yn&&typeof document<"u"&&document.body&&(wi=window,bs=document,Ps=bs.documentElement,Va=bs.body,M1=[wi,bs,Ps,Va],yn.utils.clamp,E1=yn.core.context||function(){},fo="onpointerenter"in Va?"pointer":"mouse",S1=$t.isTouch=wi.matchMedia&&wi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in wi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,rr=$t.eventTypes=("ontouchstart"in Ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return w1=0},500),A1(),Df=1),Df};$n.op=an;rt.cache=0;var $t=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Df||C1(yn)||console.warn("Please gsap.registerPlugin(Observer)"),fu||A1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,h=i.onStopDelay,d=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,A=i.onRight,w=i.onLeft,E=i.onUp,b=i.onDown,M=i.onChangeX,S=i.onChangeY,D=i.onChange,F=i.onToggleX,z=i.onToggleY,q=i.onHover,j=i.onHoverEnd,G=i.onMove,X=i.ignoreCheck,U=i.isNormalizer,$=i.onGestureStart,P=i.onGestureEnd,te=i.onWheel,_e=i.onEnable,Ye=i.onDisable,Y=i.onClick,ne=i.scrollSpeed,ae=i.capture,re=i.allowClicks,Ae=i.lockAxis,Oe=i.onLockAxis;this.target=a=ni(a)||Ps,this.vars=i,d&&(d=yn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,ne=ne||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(wi.getComputedStyle(Va).lineHeight)||22);var Le,Ze,qe,ye,L,mt,ke,V=this,Ee=0,lt=0,Se=i.passive||!c&&i.passive!==!1,R=qs(a,$n),T=qs(a,an),B=R(),Q=T(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&rr[0]==="pointerdown",Z=du(a),fe=a.ownerDocument||bs,le=[0,0,0],de=[0,0,0],Ge=0,se=function(){return Ge=hu()},ue=function(be,je){return(V.event=be)&&d&&~d.indexOf(be.target)||je&&J&&be.pointerType!=="touch"||X&&X(be,je)},Fe=function(){V._vx.reset(),V._vy.reset(),Ze.pause(),f&&f(V)},Ne=function(){var be=V.deltaX=kv(le),je=V.deltaY=kv(de),me=Math.abs(be)>=r,Xe=Math.abs(je)>=r;D&&(me||Xe)&&D(V,be,je,le,de),me&&(A&&V.deltaX>0&&A(V),w&&V.deltaX<0&&w(V),M&&M(V),F&&V.deltaX<0!=Ee<0&&F(V),Ee=V.deltaX,le[0]=le[1]=le[2]=0),Xe&&(b&&V.deltaY>0&&b(V),E&&V.deltaY<0&&E(V),S&&S(V),z&&V.deltaY<0!=lt<0&&z(V),lt=V.deltaY,de[0]=de[1]=de[2]=0),(ye||qe)&&(G&&G(V),qe&&(m&&qe===1&&m(V),v&&v(V),qe=0),ye=!1),mt&&!(mt=!1)&&Oe&&Oe(V),L&&(te(V),L=!1),Le=0},Me=function(be,je,me){le[me]+=be,de[me]+=je,V._vx.update(be),V._vy.update(je),u?Le||(Le=requestAnimationFrame(Ne)):Ne()},$e=function(be,je){Ae&&!ke&&(V.axis=ke=Math.abs(be)>Math.abs(je)?"x":"y",mt=!0),ke!=="y"&&(le[2]+=be,V._vx.update(be,!0)),ke!=="x"&&(de[2]+=je,V._vy.update(je,!0)),u?Le||(Le=requestAnimationFrame(Ne)):Ne()},Ve=function(be){if(!ue(be,1)){be=Pl(be,c);var je=be.clientX,me=be.clientY,Xe=je-V.x,Pe=me-V.y,We=V.isDragging;V.x=je,V.y=me,(We||(Xe||Pe)&&(Math.abs(V.startX-je)>=s||Math.abs(V.startY-me)>=s))&&(qe=We?2:1,We||(V.isDragging=!0),$e(Xe,Pe))}},ct=V.onPress=function(xe){ue(xe,1)||xe&&xe.button||(V.axis=ke=null,Ze.pause(),V.isPressed=!0,xe=Pl(xe),Ee=lt=0,V.startX=V.x=xe.clientX,V.startY=V.y=xe.clientY,V._vx.reset(),V._vy.reset(),Vn(U?a:fe,rr[1],Ve,Se,!0),V.deltaX=V.deltaY=0,x&&x(V))},I=V.onRelease=function(xe){if(!ue(xe,1)){Bn(U?a:fe,rr[1],Ve,!0);var be=!isNaN(V.y-V.startY),je=V.isDragging,me=je&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Xe=Pl(xe);!me&&be&&(V._vx.reset(),V._vy.reset(),c&&re&&yn.delayedCall(.08,function(){if(hu()-Ge>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(fe.createEvent){var Pe=fe.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,wi,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(Pe)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&je&&!U&&Ze.restart(!0),qe&&Ne(),p&&je&&p(V),y&&y(V,me)}},he=function(be){return be.touches&&be.touches.length>1&&(V.isGesturing=!0)&&$(be,V.isDragging)},K=function(){return(V.isGesturing=!1)||P(V)},ee=function(be){if(!ue(be)){var je=R(),me=T();Me((je-B)*ne,(me-Q)*ne,1),B=je,Q=me,f&&Ze.restart(!0)}},ce=function(be){if(!ue(be)){be=Pl(be,c),te&&(L=!0);var je=(be.deltaMode===1?l:be.deltaMode===2?wi.innerHeight:1)*g;Me(be.deltaX*je,be.deltaY*je,0),f&&!U&&Ze.restart(!0)}},pe=function(be){if(!ue(be)){var je=be.clientX,me=be.clientY,Xe=je-V.x,Pe=me-V.y;V.x=je,V.y=me,ye=!0,f&&Ze.restart(!0),(Xe||Pe)&&$e(Xe,Pe)}},He=function(be){V.event=be,q(V)},ht=function(be){V.event=be,j(V)},Vt=function(be){return ue(be)||Pl(be,c)&&Y(V)};Ze=V._dc=yn.delayedCall(h||.25,Fe).pause(),V.deltaX=V.deltaY=0,V._vx=Fm(0,50,!0),V._vy=Fm(0,50,!0),V.scrollX=R,V.scrollY=T,V.isDragging=V.isGesturing=V.isPressed=!1,E1(this),V.enable=function(xe){return V.isEnabled||(Vn(Z?fe:a,"scroll",Nm),o.indexOf("scroll")>=0&&Vn(Z?fe:a,"scroll",ee,Se,ae),o.indexOf("wheel")>=0&&Vn(a,"wheel",ce,Se,ae),(o.indexOf("touch")>=0&&S1||o.indexOf("pointer")>=0)&&(Vn(a,rr[0],ct,Se,ae),Vn(fe,rr[2],I),Vn(fe,rr[3],I),re&&Vn(a,"click",se,!0,!0),Y&&Vn(a,"click",Vt),$&&Vn(fe,"gesturestart",he),P&&Vn(fe,"gestureend",K),q&&Vn(a,fo+"enter",He),j&&Vn(a,fo+"leave",ht),G&&Vn(a,fo+"move",pe)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=ye=qe=!1,V._vx.reset(),V._vy.reset(),B=R(),Q=T(),xe&&xe.type&&ct(xe),_e&&_e(V)),V},V.disable=function(){V.isEnabled&&(Pa.filter(function(xe){return xe!==V&&du(xe.target)}).length||Bn(Z?fe:a,"scroll",Nm),V.isPressed&&(V._vx.reset(),V._vy.reset(),Bn(U?a:fe,rr[1],Ve,!0)),Bn(Z?fe:a,"scroll",ee,ae),Bn(a,"wheel",ce,ae),Bn(a,rr[0],ct,ae),Bn(fe,rr[2],I),Bn(fe,rr[3],I),Bn(a,"click",se,!0),Bn(a,"click",Vt),Bn(fe,"gesturestart",he),Bn(fe,"gestureend",K),Bn(a,fo+"enter",He),Bn(a,fo+"leave",ht),Bn(a,fo+"move",pe),V.isEnabled=V.isPressed=V.isDragging=!1,Ye&&Ye(V))},V.kill=V.revert=function(){V.disable();var xe=Pa.indexOf(V);xe>=0&&Pa.splice(xe,1),qr===V&&(qr=0)},Pa.push(V),U&&du(a)&&(qr=V),V.enable(_)},xC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();$t.version="3.12.7";$t.create=function(n){return new $t(n)};$t.register=C1;$t.getAll=function(){return Pa.slice()};$t.getById=function(n){return Pa.filter(function(e){return e.vars.id===n})[0]};T1()&&yn.registerPlugin($t);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Re,pa,it,Ct,Mi,xt,H_,Mh,Yu,pu,Xl,Pc,Rn,Qh,Om,Xn,zv,Bv,ma,R1,Od,b1,Gn,km,P1,D1,_s,zm,G_,Ha,W_,Eh,Bm,kd,Dc=1,bn=Date.now,zd=bn(),Ki=0,Yl=0,Vv=function(e,t,i){var r=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Hv=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},SC=function n(){return Yl&&requestAnimationFrame(n)},Gv=function(){return Qh=1},Wv=function(){return Qh=0},_r=function(e){return e},ql=function(e){return Math.round(e*1e5)/1e5||0},L1=function(){return typeof window<"u"},U1=function(){return Re||L1()&&(Re=window.gsap)&&Re.registerPlugin&&Re},Vo=function(e){return!!~H_.indexOf(e)},I1=function(e){return(e==="Height"?W_:it["inner"+e])||Mi["client"+e]||xt["client"+e]},N1=function(e){return Vs(e,"getBoundingClientRect")||(Vo(e)?function(){return Ff.width=it.innerWidth,Ff.height=W_,Ff}:function(){return Wr(e)})},MC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Vs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?I1(s):e["client"+s])||0}},EC=function(e,t){return!t||~br.indexOf(e)?N1(e):function(){return Ff}},Er=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Vs(e,i))?o()-N1(e)()[s]:Vo(e)?(Mi[i]||xt[i])-I1(r):e[i]-e["offset"+r])},Lc=function(e,t){for(var i=0;i<ma.length;i+=3)(!t||~t.indexOf(ma[i+1]))&&e(ma[i],ma[i+1],ma[i+2])},yi=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},$l=function(e){return typeof e=="number"},ho=function(e){return typeof e=="object"},Dl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Bd=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Qo=Math.abs,F1="left",O1="top",X_="right",Y_="bottom",Lo="width",Uo="height",mu="Right",gu="Left",_u="Top",vu="Bottom",Zt="padding",Gi="margin",ol="Width",q_="Height",sn="px",Wi=function(e){return it.getComputedStyle(e)},TC=function(e){var t=Wi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Xv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Wr=function(e,t){var i=t&&Wi(e)[Om]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Th=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},k1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},wC=function(e){return function(t){return Re.utils.snap(k1(e),t)}},$_=function(e){var t=Re.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},AC=function(e){return function(t,i){return $_(k1(e))(t,i.direction)}},Uc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},hn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ic=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Yv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nc={toggleActions:"play",anticipatePin:0},wh={top:0,left:0,center:.5,bottom:1,right:1},Lf=function(e,t){if(yi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in wh?wh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Fc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Ct.createElement("div"),_=Vo(i)||Vs(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?xt:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===an?X_:Y_)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Uf(g,0,r,v),g},Uf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+ol]=1,s["border"+a+ol]=0,s[i.p]=t+"px",Re.set(e,s)},et=[],Vm={},qu,qv=function(){return bn()-Ki>34&&(qu||(qu=requestAnimationFrame(Zr)))},Jo=function(){(!Gn||!Gn.isPressed||Gn.startX>xt.clientWidth)&&(rt.cache++,Gn?qu||(qu=requestAnimationFrame(Zr)):Zr(),Ki||Go("scrollStart"),Ki=bn())},Vd=function(){D1=it.innerWidth,P1=it.innerHeight},jl=function(e){rt.cache++,(e===!0||!Rn&&!b1&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!km||D1!==it.innerWidth||Math.abs(it.innerHeight-P1)>it.innerHeight*.25))&&Mh.restart(!0)},Ho={},CC=[],z1=function n(){return hn(st,"scrollEnd",n)||Eo(!0)},Go=function(e){return Ho[e]&&Ho[e].map(function(t){return t()})||CC},vi=[],B1=function(e){for(var t=0;t<vi.length;t+=5)(!e||vi[t+4]&&vi[t+4].query===e)&&(vi[t].style.cssText=vi[t+1],vi[t].getBBox&&vi[t].setAttribute("transform",vi[t+2]||""),vi[t+3].uncache=1)},j_=function(e,t){var i;for(Xn=0;Xn<et.length;Xn++)i=et[Xn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Eh=!0,t&&B1(t),t||Go("revert")},V1=function(e,t){rt.cache++,(t||!Yn)&&rt.forEach(function(i){return Ln(i)&&i.cacheID++&&(i.rec=0)}),yi(e)&&(it.history.scrollRestoration=G_=e)},Yn,Io=0,$v,RC=function(){if($v!==Io){var e=$v=Io;requestAnimationFrame(function(){return e===Io&&Eo(!0)})}},H1=function(){xt.appendChild(Ha),W_=!Gn&&Ha.offsetHeight||it.innerHeight,xt.removeChild(Ha)},jv=function(e){return Yu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Eo=function(e,t){if(Mi=Ct.documentElement,xt=Ct.body,H_=[it,Ct,Mi,xt],Ki&&!e&&!Eh){dn(st,"scrollEnd",z1);return}H1(),Yn=st.isRefreshing=!0,rt.forEach(function(r){return Ln(r)&&++r.cacheID&&(r.rec=r())});var i=Go("refreshInit");R1&&st.sort(),t||j_(),rt.forEach(function(r){Ln(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),Eh=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Bm=1,jv(!0),et.forEach(function(r){var s=Er(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),jv(!1),Bm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Ln(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),V1(G_,1),Mh.pause(),Io++,Yn=2,Zr(2),et.forEach(function(r){return Ln(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Yn=st.isRefreshing=!1,Go("refresh")},Hm=0,If=1,xu,Zr=function(e){if(e===2||!Yn&&!Eh){st.isUpdating=!0,xu&&xu.update(0);var t=et.length,i=bn(),r=i-zd>=50,s=t&&et[0].scroll();if(If=Hm>s?-1:1,Yn||(Hm=s),r&&(Ki&&!Qh&&i-Ki>200&&(Ki=0,Go("scrollEnd")),Xl=zd,zd=i),If<0){for(Xn=t;Xn-- >0;)et[Xn]&&et[Xn].update(0,r);If=1}else for(Xn=0;Xn<t;Xn++)et[Xn]&&et[Xn].update(0,r);st.isUpdating=!1}qu=0},Gm=[F1,O1,Y_,X_,Gi+vu,Gi+mu,Gi+_u,Gi+gu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Nf=Gm.concat([Lo,Uo,"boxSizing","max"+ol,"max"+q_,"position",Gi,Zt,Zt+_u,Zt+mu,Zt+vu,Zt+gu]),bC=function(e,t,i){Ga(i);var r=e._gsap;if(r.spacerIsNative)Ga(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Hd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Gm.length,o=t.style,a=e.style,l;s--;)l=Gm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Y_]=a[X_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Lo]=Th(e,$n)+sn,o[Uo]=Th(e,an)+sn,o[Zt]=a[Gi]=a[O1]=a[F1]="0",Ga(r),a[Lo]=a["max"+ol]=i[Lo],a[Uo]=a["max"+q_]=i[Uo],a[Zt]=i[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},PC=/([A-Z])/g,Ga=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(PC,"-$1").toLowerCase())}},Oc=function(e){for(var t=Nf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Nf[s],i[Nf[s]]);return r.t=e,r},DC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Ff={left:0,top:0},Kv=function(e,t,i,r,s,o,a,l,u,c,f,h,d,g){Ln(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Lf("0"+e.substr(3),i):0));var _=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),$l(e))d&&(e=Re.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Uf(a,i,r,!0);else{Ln(t)&&(t=t(l));var x=(e||"0").split(" "),y,A,w,E;v=ni(t,l)||xt,y=Wr(v)||{},(!y||!y.left&&!y.top)&&Wi(v).display==="none"&&(E=v.style.display,v.style.display="block",y=Wr(v),E?v.style.display=E:v.style.removeProperty("display")),A=Lf(x[0],y[r.d]),w=Lf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+A+s-w,a&&Uf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var b=e+i,M=o._isStart;m="scroll"+r.d2,Uf(o,b,r,M&&b>20||!M&&(f?Math.max(xt[m],Mi[m]):o.parentNode[m])<=b+1),f&&(u=Wr(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+sn))}return d&&v&&(m=Wr(v),d.seek(h),p=Wr(v),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},LC=/(webkit|moz|length|cssText|inset)/i,Zv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=Wi(e);for(o in a)!+o&&!LC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},G1=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},kc=function(e,t,i){var r={};r[t.p]="+="+i,Re.set(e,r)},Qv=function(e,t){var i=qs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var h=o.tween,d=l.onComplete,g={};u=u||i();var _=G1(i,u,function(){h.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&Zr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Re.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",i.wheelHandler),st.isTouch&&dn(e,"touchmove",i.wheelHandler),s},st=function(){function n(t,i){pa||n.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Yl){this.update=this.refresh=this.kill=_r;return}i=Xv(yi(i)||$l(i)||i.nodeType?{trigger:i}:i,Nc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,A=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,b=s.fastScrollEnd,M=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?$n:an,D=!f&&f!==0,F=ni(i.scroller||it),z=Re.core.getCache(F),q=Vo(F),j=("pinType"in i?i.pinType:Vs(F,"pinType")||q&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=D&&i.toggleActions.split(" "),U="markers"in i?i.markers:Nc.markers,$=q?0:parseFloat(Wi(F)["border"+S.p2+ol])||0,P=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(P)},_e=MC(F,q,S),Ye=EC(F,q),Y=0,ne=0,ae=0,re=qs(F,S),Ae,Oe,Le,Ze,qe,ye,L,mt,ke,V,Ee,lt,Se,R,T,B,Q,J,Z,fe,le,de,Ge,se,ue,Fe,Ne,Me,$e,Ve,ct,I,he,K,ee,ce,pe,He,ht;if(P._startClamp=P._endClamp=!1,P._dir=S,m*=45,P.scroller=F,P.scroll=E?E.time.bind(E):re,Ze=re(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(R1=1,i.refreshPriority===-9999&&(xu=P)),z.tweenScroll=z.tweenScroll||{top:Qv(F,an),left:Qv(F,$n)},P.tweenTo=Ae=z.tweenScroll[S.p],P.scrubDuration=function(me){he=$l(me)&&me,he?I?I.duration(me):I=Re.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return p&&p(P)}}):(I&&I.progress(1).kill(),I=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(f),Ve=0,l||(l=r.vars.id)),y&&((!ho(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&Re.set(q?[xt,Mi]:F,{scrollBehavior:"auto"}),rt.forEach(function(me){return Ln(me)&&me.target===(q?Ct.scrollingElement||Mi:F)&&(me.smooth=!1)}),Le=Ln(y.snapTo)?y.snapTo:y.snapTo==="labels"?wC(r):y.snapTo==="labelsDirectional"?AC(r):y.directional!==!1?function(me,Xe){return $_(y.snapTo)(me,bn()-ne<500?0:Xe.direction)}:Re.utils.snap(y.snapTo),K=y.duration||{min:.1,max:2},K=ho(K)?pu(K.min,K.max):pu(K,K),ee=Re.delayedCall(y.delay||he/2||.1,function(){var me=re(),Xe=bn()-ne<500,Pe=Ae.tween;if((Xe||Math.abs(P.getVelocity())<10)&&!Pe&&!Qh&&Y!==me){var We=(me-ye)/R,Xt=r&&!D?r.totalProgress():We,nt=Xe?0:(Xt-ct)/(bn()-Xl)*1e3||0,At=Re.utils.clamp(-We,1-We,Qo(nt/2)*nt/.185),tn=We+(y.inertia===!1?0:At),Et,Tt,gt=y,pi=gt.onStart,Pt=gt.onInterrupt,kn=gt.onComplete;if(Et=Le(tn,P),$l(Et)||(Et=tn),Tt=Math.max(0,Math.round(ye+Et*R)),me<=L&&me>=ye&&Tt!==me){if(Pe&&!Pe._initted&&Pe.data<=Qo(Tt-me))return;y.inertia===!1&&(At=Et-We),Ae(Tt,{duration:K(Qo(Math.max(Qo(tn-Xt),Qo(Et-Xt))*.185/nt/.05||0)),ease:y.ease||"power3",data:Qo(Tt-me),onInterrupt:function(){return ee.restart(!0)&&Pt&&Pt(P)},onComplete:function(){P.update(),Y=re(),r&&!D&&(I?I.resetTo("totalProgress",Et,r._tTime/r._tDur):r.progress(Et)),Ve=ct=r&&!D?r.totalProgress():P.progress,v&&v(P),kn&&kn(P)}},me,At*R,Tt-me-At*R),pi&&pi(P,Ae.tween)}}else P.isActive&&Y!==me&&ee.restart(!0)}).pause()),l&&(Vm[l]=P),h=P.trigger=ni(h||d!==!0&&d),ht=h&&h._gsap&&h._gsap.stRevert,ht&&(ht=ht(P)),d=d===!0?h:ni(d),yi(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Gi||(g=!g&&d.parentNode&&d.parentNode.style&&Wi(d.parentNode).display==="flex"?!1:Zt),P.pin=d,Oe=Re.core.getCache(d),Oe.spacer?T=Oe.pinState:(w&&(w=ni(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Oe.spacerIsNative=!!w,w&&(Oe.spacerState=Oc(w))),Oe.spacer=J=w||Ct.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Oe.pinState=T=Oc(d)),i.force3D!==!1&&Re.set(d,{force3D:!0}),P.spacer=J=Oe.spacer,$e=Wi(d),se=$e[g+S.os2],fe=Re.getProperty(d),le=Re.quickSetter(d,S.a,sn),Hd(d,J,$e),Q=Oc(d)),U){lt=ho(U)?Xv(U,Yv):Yv,V=Fc("scroller-start",l,F,S,lt,0),Ee=Fc("scroller-end",l,F,S,lt,0,V),Z=V["offset"+S.op.d2];var Vt=ni(Vs(F,"content")||F);mt=this.markerStart=Fc("start",l,Vt,S,lt,Z,0,E),ke=this.markerEnd=Fc("end",l,Vt,S,lt,Z,0,E),E&&(He=Re.quickSetter([mt,ke],S.a,sn)),!j&&!(br.length&&Vs(F,"fixedMarkers")===!0)&&(TC(q?xt:F),Re.set([V,Ee],{force3D:!0}),Fe=Re.quickSetter(V,S.a,sn),Me=Re.quickSetter(Ee,S.a,sn))}if(E){var xe=E.vars.onUpdate,be=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),xe&&xe.apply(E,be||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(me,Xe){if(!Xe)return P.kill(!0);var Pe=me!==!1||!P.enabled,We=Rn;Pe!==P.isReverted&&(Pe&&(ce=Math.max(re(),P.scroll.rec||0),ae=P.progress,pe=r&&r.progress()),mt&&[mt,ke,V,Ee].forEach(function(Xt){return Xt.style.display=Pe?"none":"block"}),Pe&&(Rn=P,P.update(Pe)),d&&(!A||!P.isActive)&&(Pe?bC(d,J,T):Hd(d,J,Wi(d),ue)),Pe||P.update(Pe),Rn=We,P.isReverted=Pe)},P.refresh=function(me,Xe,Pe,We){if(!((Rn||!P.enabled)&&!Xe)){if(d&&me&&Ki){dn(n,"scrollEnd",z1);return}!Yn&&te&&te(P),Rn=P,Ae.tween&&!Pe&&(Ae.tween.kill(),Ae.tween=0),I&&I.pause(),_&&r&&r.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Xt=_e(),nt=Ye(),At=E?E.duration():Er(F,S),tn=R<=.01,Et=0,Tt=We||0,gt=ho(Pe)?Pe.end:i.end,pi=i.endTrigger||h,Pt=ho(Pe)?Pe.start:i.start||(i.start===0||!h?0:d?"0 0":"0 100%"),kn=P.pinnedContainer=i.pinnedContainer&&ni(i.pinnedContainer,P),Ni=h&&Math.max(0,et.indexOf(P))||0,nn=Ni,rn,C,k,W,H,O,ie,ge,we,Te,Ie,Be,Ue;for(U&&ho(Pe)&&(Be=Re.getProperty(V,S.p),Ue=Re.getProperty(Ee,S.p));nn-- >0;)O=et[nn],O.end||O.refresh(0,1)||(Rn=P),ie=O.pin,ie&&(ie===h||ie===d||ie===kn)&&!O.isReverted&&(Te||(Te=[]),Te.unshift(O),O.revert(!0,!0)),O!==et[nn]&&(Ni--,nn--);for(Ln(Pt)&&(Pt=Pt(P)),Pt=Vv(Pt,"start",P),ye=Kv(Pt,h,Xt,S,re(),mt,V,P,nt,$,j,At,E,P._startClamp&&"_startClamp")||(d?-.001:0),Ln(gt)&&(gt=gt(P)),yi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(yi(Pt)?Pt.split(" ")[0]:"")+gt:(Et=Lf(gt.substr(2),Xt),gt=yi(Pt)?Pt:(E?Re.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,ye):ye)+Et,pi=h)),gt=Vv(gt,"end",P),L=Math.max(ye,Kv(gt||(pi?"100% 0":At),pi,Xt,S,re()+Et,ke,Ee,P,nt,$,j,At,E,P._endClamp&&"_endClamp"))||-.001,Et=0,nn=Ni;nn--;)O=et[nn],ie=O.pin,ie&&O.start-O._pinPush<=ye&&!E&&O.end>0&&(rn=O.end-(P._startClamp?Math.max(0,O.start):O.start),(ie===h&&O.start-O._pinPush<ye||ie===kn)&&isNaN(Pt)&&(Et+=rn*(1-O.progress)),ie===d&&(Tt+=rn));if(ye+=Et,L+=Et,P._startClamp&&(P._startClamp+=Et),P._endClamp&&!Yn&&(P._endClamp=L||-.001,L=Math.min(L,Er(F,S))),R=L-ye||(ye-=.01)&&.001,tn&&(ae=Re.utils.clamp(0,1,Re.utils.normalize(ye,L,ce))),P._pinPush=Tt,mt&&Et&&(rn={},rn[S.a]="+="+Et,kn&&(rn[S.p]="-="+re()),Re.set([mt,ke],rn)),d&&!(Bm&&P.end>=Er(F,S)))rn=Wi(d),W=S===an,k=re(),de=parseFloat(fe(S.a))+Tt,!At&&L>1&&(Ie=(q?Ct.scrollingElement||Mi:F).style,Ie={style:Ie,value:Ie["overflow"+S.a.toUpperCase()]},q&&Wi(xt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ie.style["overflow"+S.a.toUpperCase()]="scroll")),Hd(d,J,rn),Q=Oc(d),C=Wr(d,!0),ge=j&&qs(F,W?$n:an)(),g?(ue=[g+S.os2,R+Tt+sn],ue.t=J,nn=g===Zt?Th(d,S)+R+Tt:0,nn&&(ue.push(S.d,nn+sn),J.style.flexBasis!=="auto"&&(J.style.flexBasis=nn+sn)),Ga(ue),kn&&et.forEach(function(Je){Je.pin===kn&&Je.vars.pinSpacing!==!1&&(Je._subPinOffset=!0)}),j&&re(ce)):(nn=Th(d,S),nn&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=nn+sn)),j&&(H={top:C.top+(W?k-ye:ge)+sn,left:C.left+(W?ge:k-ye)+sn,boxSizing:"border-box",position:"fixed"},H[Lo]=H["max"+ol]=Math.ceil(C.width)+sn,H[Uo]=H["max"+q_]=Math.ceil(C.height)+sn,H[Gi]=H[Gi+_u]=H[Gi+mu]=H[Gi+vu]=H[Gi+gu]="0",H[Zt]=rn[Zt],H[Zt+_u]=rn[Zt+_u],H[Zt+mu]=rn[Zt+mu],H[Zt+vu]=rn[Zt+vu],H[Zt+gu]=rn[Zt+gu],B=DC(T,H,A),Yn&&re(0)),r?(we=r._initted,Od(1),r.render(r.duration(),!0,!0),Ge=fe(S.a)-de+R+Tt,Ne=Math.abs(R-Ge)>1,j&&Ne&&B.splice(B.length-2,2),r.render(0,!0,!0),we||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Od(0)):Ge=R,Ie&&(Ie.value?Ie.style["overflow"+S.a.toUpperCase()]=Ie.value:Ie.style.removeProperty("overflow-"+S.a));else if(h&&re()&&!E)for(C=h.parentNode;C&&C!==xt;)C._pinOffset&&(ye-=C._pinOffset,L-=C._pinOffset),C=C.parentNode;Te&&Te.forEach(function(Je){return Je.revert(!1,!0)}),P.start=ye,P.end=L,Ze=qe=Yn?ce:re(),!E&&!Yn&&(Ze<ce&&re(ce),P.scroll.rec=0),P.revert(!1,!0),ne=bn(),ee&&(Y=-1,ee.restart(!0)),Rn=0,r&&D&&(r._initted||pe)&&r.progress()!==pe&&r.progress(pe||0,!0).render(r.time(),!0,!0),(tn||ae!==P.progress||E||_||r&&!r._initted)&&(r&&!D&&r.totalProgress(E&&ye<-.001&&!ae?Re.utils.normalize(ye,L,0):ae,!0),P.progress=tn||(Ze-ye)/R===ae?0:ae),d&&g&&(J._pinOffset=Math.round(P.progress*Ge)),I&&I.invalidate(),isNaN(Be)||(Be-=Re.getProperty(V,S.p),Ue-=Re.getProperty(Ee,S.p),kc(V,S,Be),kc(mt,S,Be-(We||0)),kc(Ee,S,Ue),kc(ke,S,Ue-(We||0))),tn&&!Yn&&P.update(),c&&!Yn&&!Se&&(Se=!0,c(P),Se=!1)}},P.getVelocity=function(){return(re()-qe)/(bn()-Xl)*1e3||0},P.endAnimation=function(){Dl(P.callbackAnimation),r&&(I?I.progress(1):r.paused()?D||Dl(r,P.direction<0,1):Dl(r,r.reversed()))},P.labelToScroll=function(me){return r&&r.labels&&(ye||P.refresh()||ye)+r.labels[me]/r.duration()*R||0},P.getTrailing=function(me){var Xe=et.indexOf(P),Pe=P.direction>0?et.slice(0,Xe).reverse():et.slice(Xe+1);return(yi(me)?Pe.filter(function(We){return We.vars.preventOverlaps===me}):Pe).filter(function(We){return P.direction>0?We.end<=ye:We.start>=L})},P.update=function(me,Xe,Pe){if(!(E&&!Pe&&!me)){var We=Yn===!0?ce:P.scroll(),Xt=me?0:(We-ye)/R,nt=Xt<0?0:Xt>1?1:Xt||0,At=P.progress,tn,Et,Tt,gt,pi,Pt,kn,Ni;if(Xe&&(qe=Ze,Ze=E?re():We,y&&(ct=Ve,Ve=r&&!D?r.totalProgress():nt)),m&&d&&!Rn&&!Dc&&Ki&&(!nt&&ye<We+(We-qe)/(bn()-Xl)*m?nt=1e-4:nt===1&&L>We+(We-qe)/(bn()-Xl)*m&&(nt=.9999)),nt!==At&&P.enabled){if(tn=P.isActive=!!nt&&nt<1,Et=!!At&&At<1,Pt=tn!==Et,pi=Pt||!!nt!=!!At,P.direction=nt>At?1:-1,P.progress=nt,pi&&!Rn&&(Tt=nt&&!At?0:nt===1?1:At===1?2:3,D&&(gt=!Pt&&X[Tt+1]!=="none"&&X[Tt+1]||X[Tt],Ni=r&&(gt==="complete"||gt==="reset"||gt in r))),M&&(Pt||Ni)&&(Ni||f||!r)&&(Ln(M)?M(P):P.getTrailing(M).forEach(function(k){return k.endAnimation()})),D||(I&&!Rn&&!Dc?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",nt,r._tTime/r._tDur):(I.vars.totalProgress=nt,I.invalidate().restart())):r&&r.totalProgress(nt,!!(Rn&&(ne||me)))),d){if(me&&g&&(J.style[g+S.os2]=se),!j)le(ql(de+Ge*nt));else if(pi){if(kn=!me&&nt>At&&L+1>We&&We+1>=Er(F,S),A)if(!me&&(tn||kn)){var nn=Wr(d,!0),rn=We-ye;Zv(d,xt,nn.top+(S===an?rn:0)+sn,nn.left+(S===an?0:rn)+sn)}else Zv(d,J);Ga(tn||kn?B:Q),Ne&&nt<1&&tn||le(de+(nt===1&&!kn?Ge:0))}}y&&!Ae.tween&&!Rn&&!Dc&&ee.restart(!0),a&&(Pt||x&&nt&&(nt<1||!kd))&&Yu(a.targets).forEach(function(k){return k.classList[tn||x?"add":"remove"](a.className)}),o&&!D&&!me&&o(P),pi&&!Rn?(D&&(Ni&&(gt==="complete"?r.pause().totalProgress(1):gt==="reset"?r.restart(!0).pause():gt==="restart"?r.restart(!0):r[gt]()),o&&o(P)),(Pt||!kd)&&(u&&Pt&&Bd(P,u),G[Tt]&&Bd(P,G[Tt]),x&&(nt===1?P.kill(!1,1):G[Tt]=0),Pt||(Tt=nt===1?1:3,G[Tt]&&Bd(P,G[Tt]))),b&&!tn&&Math.abs(P.getVelocity())>($l(b)?b:2500)&&(Dl(P.callbackAnimation),I?I.progress(1):Dl(r,gt==="reverse"?1:!nt,1))):D&&o&&!Rn&&o(P)}if(Me){var C=E?We/E.duration()*(E._caScrollDist||0):We;Fe(C+(V._isFlipped?1:0)),Me(C)}He&&He(-We/E.duration()*(E._caScrollDist||0))}},P.enable=function(me,Xe){P.enabled||(P.enabled=!0,dn(F,"resize",jl),q||dn(F,"scroll",Jo),te&&dn(n,"refreshInit",te),me!==!1&&(P.progress=ae=0,Ze=qe=Y=re()),Xe!==!1&&P.refresh())},P.getTween=function(me){return me&&Ae?Ae.tween:I},P.setPositions=function(me,Xe,Pe,We){if(E){var Xt=E.scrollTrigger,nt=E.duration(),At=Xt.end-Xt.start;me=Xt.start+At*me/nt,Xe=Xt.start+At*Xe/nt}P.refresh(!1,!1,{start:Hv(me,Pe&&!!P._startClamp),end:Hv(Xe,Pe&&!!P._endClamp)},We),P.update()},P.adjustPinSpacing=function(me){if(ue&&me){var Xe=ue.indexOf(S.d)+1;ue[Xe]=parseFloat(ue[Xe])+me+sn,ue[1]=parseFloat(ue[1])+me+sn,Ga(ue)}},P.disable=function(me,Xe){if(P.enabled&&(me!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Xe||I&&I.pause(),ce=0,Oe&&(Oe.uncache=1),te&&hn(n,"refreshInit",te),ee&&(ee.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!q)){for(var Pe=et.length;Pe--;)if(et[Pe].scroller===F&&et[Pe]!==P)return;hn(F,"resize",jl),q||hn(F,"scroll",Jo)}},P.kill=function(me,Xe){P.disable(me,Xe),I&&!Xe&&I.kill(),l&&delete Vm[l];var Pe=et.indexOf(P);Pe>=0&&et.splice(Pe,1),Pe===Xn&&If>0&&Xn--,Pe=0,et.forEach(function(We){return We.scroller===P.scroller&&(Pe=1)}),Pe||Yn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,me&&r.revert({kill:!1}),Xe||r.kill()),mt&&[mt,ke,V,Ee].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),xu===P&&(xu=0),d&&(Oe&&(Oe.uncache=1),Pe=0,et.forEach(function(We){return We.pin===d&&Pe++}),Pe||(Oe.spacer=0)),i.onKill&&i.onKill(P)},et.push(P),P.enable(!1,!1),ht&&ht(P),r&&r.add&&!R){var je=P.update;P.update=function(){P.update=je,rt.cache++,ye||L||P.refresh()},Re.delayedCall(.01,P.update),R=.01,ye=L=0}else P.refresh();d&&RC()},n.register=function(i){return pa||(Re=i||U1(),L1()&&window.document&&n.enable(),pa=Yl),pa},n.defaults=function(i){if(i)for(var r in i)Nc[r]=i[r];return Nc},n.disable=function(i,r){Yl=0,et.forEach(function(o){return o[r?"kill":"disable"](i)}),hn(it,"wheel",Jo),hn(Ct,"scroll",Jo),clearInterval(Pc),hn(Ct,"touchcancel",_r),hn(xt,"touchstart",_r),Uc(hn,Ct,"pointerdown,touchstart,mousedown",Gv),Uc(hn,Ct,"pointerup,touchend,mouseup",Wv),Mh.kill(),Lc(hn);for(var s=0;s<rt.length;s+=3)Ic(hn,rt[s],rt[s+1]),Ic(hn,rt[s],rt[s+2])},n.enable=function(){if(it=window,Ct=document,Mi=Ct.documentElement,xt=Ct.body,Re&&(Yu=Re.utils.toArray,pu=Re.utils.clamp,zm=Re.core.context||_r,Od=Re.core.suppressOverwrites||_r,G_=it.history.scrollRestoration||"auto",Hm=it.pageYOffset||0,Re.core.globals("ScrollTrigger",n),xt)){Yl=1,Ha=document.createElement("div"),Ha.style.height="100vh",Ha.style.position="absolute",H1(),SC(),$t.register(Re),n.isTouch=$t.isTouch,_s=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),km=$t.isTouch===1,dn(it,"wheel",Jo),H_=[it,Ct,Mi,xt],Re.matchMedia?(n.matchMedia=function(u){var c=Re.matchMedia(),f;for(f in u)c.add(f,u[f]);return c},Re.addEventListener("matchMediaInit",function(){return j_()}),Re.addEventListener("matchMediaRevert",function(){return B1()}),Re.addEventListener("matchMedia",function(){Eo(0,1),Go("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return Vd(),Vd})):console.warn("Requires GSAP 3.11.0 or later"),Vd(),dn(Ct,"scroll",Jo);var i=xt.hasAttribute("style"),r=xt.style,s=r.borderTopStyle,o=Re.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Wr(xt),an.m=Math.round(a.top+an.sc())||0,$n.m=Math.round(a.left+$n.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(xt.setAttribute("style",""),xt.removeAttribute("style")),Pc=setInterval(qv,250),Re.delayedCall(.5,function(){return Dc=0}),dn(Ct,"touchcancel",_r),dn(xt,"touchstart",_r),Uc(dn,Ct,"pointerdown,touchstart,mousedown",Gv),Uc(dn,Ct,"pointerup,touchend,mouseup",Wv),Om=Re.utils.checkPrefix("transform"),Nf.push(Om),pa=bn(),Mh=Re.delayedCall(.2,Eo).pause(),ma=[Ct,"visibilitychange",function(){var u=it.innerWidth,c=it.innerHeight;Ct.hidden?(zv=u,Bv=c):(zv!==u||Bv!==c)&&jl()},Ct,"DOMContentLoaded",Eo,it,"load",Eo,it,"resize",jl],Lc(dn),et.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)Ic(hn,rt[l],rt[l+1]),Ic(hn,rt[l],rt[l+2])}},n.config=function(i){"limitCallbacks"in i&&(kd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Pc)||(Pc=r)&&setInterval(qv,r),"ignoreMobileResize"in i&&(km=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Lc(hn)||Lc(dn,i.autoRefreshEvents||"none"),b1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ni(i),o=rt.indexOf(s),a=Vo(s);~o&&rt.splice(o,a?6:2),r&&(a?br.unshift(it,r,xt,r,Mi,r):br.unshift(s,r))},n.clearMatchMedia=function(i){et.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(yi(i)?ni(i):i).getBoundingClientRect(),a=o[s?Lo:Uo]*r||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},n.positionInViewport=function(i,r,s){yi(i)&&(i=ni(i));var o=i.getBoundingClientRect(),a=o[s?Lo:Uo],l=r==null?a/2:r in wh?wh[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},n.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Ho.killAll||[];Ho={},r.forEach(function(s){return s()})}},n}();st.version="3.12.7";st.saveStyles=function(n){return n?Yu(n).forEach(function(e){if(e&&e.style){var t=vi.indexOf(e);t>=0&&vi.splice(t,5),vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),zm())}}):vi};st.revert=function(n,e){return j_(!n,e)};st.create=function(n,e){return new st(n,e)};st.refresh=function(n){return n?jl(!0):(pa||st.register())&&Eo(!0)};st.update=function(n){return++rt.cache&&Zr(n===!0?2:0)};st.clearScrollMemory=V1;st.maxScroll=function(n,e){return Er(n,e?$n:an)};st.getScrollFunc=function(n,e){return qs(ni(n),e?$n:an)};st.getById=function(n){return Vm[n]};st.getAll=function(){return et.filter(function(n){return n.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!Ki};st.snapDirectional=$_;st.addEventListener=function(n,e){var t=Ho[n]||(Ho[n]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(n,e){var t=Ho[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};st.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],h=[],d=Re.delayedCall(r,function(){c(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),dn(st,"refresh",function(){return s=e.batchMax()})),Yu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(st.create(u))}),t};var Jv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Gd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===Mi&&n(xt,t)},zc={auto:1,scroll:1},UC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Re.core.getCache(s),a=bn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(zc[(l=Wi(s)).overflowY]||zc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Vo(s)&&(zc[(l=Wi(s)).overflowY]||zc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},W1=function(e,t,i,r){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&UC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&dn(Ct,$t.eventTypes[0],tx,!1,!0)},onDisable:function(){return hn(Ct,$t.eventTypes[0],tx,!0)}})},IC=/(input|label|select|textarea)/i,ex,tx=function(e){var t=IC.test(e.target.tagName);(t||ex)&&(e._gsapAllow=!0,ex=t)},NC=function(e){ho(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=ni(e.target)||Mi,c=Re.core.globals().ScrollSmoother,f=c&&c.get(),h=_s&&(e.content&&ni(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=qs(u,an),g=qs(u,$n),_=1,m=($t.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,v=Ln(r)?function(){return r(a)}:function(){return r||2.8},x,y,A=W1(u,e.type,!0,s),w=function(){return y=!1},E=_r,b=_r,M=function(){l=Er(u,an),b=pu(_s?1:0,l),i&&(E=pu(0,Er(u,$n))),x=Io},S=function(){h._gsap.y=ql(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var U=ql(a.deltaY/2),$=b(d.v-U);if(h&&$!==d.v+d.offset){d.offset=$-d.v;var P=ql((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=rt.cache,Zr()}return!0}d.offset&&S(),y=!0},F,z,q,j,G=function(){M(),F.isActive()&&F.vars.scrollY>l&&(d()>l?F.progress(1)&&d(l):F.resetTo("scrollY",l))};return h&&Re.set(h,{y:"+=0"}),e.ignoreCheck=function(X){return _s&&X.type==="touchmove"&&D()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){y=!1;var X=_;_=ql((it.visualViewport&&it.visualViewport.scale||1)/m),F.pause(),X!==_&&Gd(u,_>1.01?!0:i?!1:"x"),z=g(),q=d(),M(),x=Io},e.onRelease=e.onGestureStart=function(X,U){if(d.offset&&S(),!U)j.restart(!0);else{rt.cache++;var $=v(),P,te;i&&(P=g(),te=P+$*.05*-X.velocityX/.227,$*=Jv(g,P,te,Er(u,$n)),F.vars.scrollX=E(te)),P=d(),te=P+$*.05*-X.velocityY/.227,$*=Jv(d,P,te,Er(u,an)),F.vars.scrollY=b(te),F.invalidate().duration($).play(.01),(_s&&F.vars.scrollY>=l||P>=l-1)&&Re.to({},{onUpdate:G,duration:$})}o&&o(X)},e.onWheel=function(){F._ts&&F.pause(),bn()-p>1e3&&(x=0,p=bn())},e.onChange=function(X,U,$,P,te){if(Io!==x&&M(),U&&i&&g(E(P[2]===U?z+(X.startX-X.x):g()+U-P[1])),$){d.offset&&S();var _e=te[2]===$,Ye=_e?q+X.startY-X.y:d()+$-te[1],Y=b(Ye);_e&&Ye!==Y&&(q+=Y-Ye),d(Y)}($||U)&&Zr()},e.onEnable=function(){Gd(u,i?!1:"x"),st.addEventListener("refresh",G),dn(it,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){Gd(u,!0),hn(it,"resize",G),st.removeEventListener("refresh",G),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=_s,_s&&!d()&&d(1),_s&&Re.ticker.add(_r),j=a._dc,F=Re.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:G1(d,d(),function(){return F.pause()})},onUpdate:Zr,onComplete:j.vars.onComplete}),a};st.sort=function(n){if(Ln(n))return et.sort(n);var e=it.pageYOffset||0;return st.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),et.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};st.observe=function(n){return new $t(n)};st.normalizeScroll=function(n){if(typeof n>"u")return Gn;if(n===!0&&Gn)return Gn.enable();if(n===!1){Gn&&Gn.kill(),Gn=n;return}var e=n instanceof $t?n:NC(n);return Gn&&Gn.target===e.target&&Gn.kill(),Vo(e.target)&&(Gn=e),e};st.core={_getVelocityProp:Fm,_inputObserver:W1,_scrollers:rt,_proxies:br,bridge:{ss:function(){Ki||Go("scrollStart"),Ki=bn()},ref:function(){return Rn}}};U1()&&Re.registerPlugin(st);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const K_="174",FC=0,nx=1,OC=2,X1=1,Y1=2,kr=3,$s=0,Kn=1,Sr=2,Qr=0,Wa=1,Ah=2,ix=3,rx=4,kC=5,_o=100,zC=101,BC=102,VC=103,HC=104,GC=200,WC=201,XC=202,YC=203,Wm=204,Xm=205,qC=206,$C=207,jC=208,KC=209,ZC=210,QC=211,JC=212,eR=213,tR=214,Ym=0,qm=1,$m=2,al=3,jm=4,Km=5,Zm=6,Qm=7,Z_=0,nR=1,iR=2,Hs=0,rR=1,sR=2,oR=3,q1=4,aR=5,lR=6,uR=7,$1=300,ll=301,ul=302,Jm=303,eg=304,Jh=306,$u=1e3,To=1001,tg=1002,fr=1003,cR=1004,Bc=1005,Tr=1006,Wd=1007,wo=1008,as=1009,j1=1010,K1=1011,ju=1012,Q_=1013,Wo=1014,$r=1015,Jr=1016,J_=1017,e0=1018,cl=1020,Z1=35902,Q1=1021,J1=1022,lr=1023,eE=1024,tE=1025,Xa=1026,fl=1027,nE=1028,t0=1029,iE=1030,n0=1031,i0=1033,Of=33776,kf=33777,zf=33778,Bf=33779,ng=35840,ig=35841,rg=35842,sg=35843,og=36196,ag=37492,lg=37496,ug=37808,cg=37809,fg=37810,hg=37811,dg=37812,pg=37813,mg=37814,gg=37815,_g=37816,vg=37817,xg=37818,yg=37819,Sg=37820,Mg=37821,Vf=36492,Eg=36494,Tg=36495,rE=36283,wg=36284,Ag=36285,Cg=36286,fR=3200,hR=3201,sE=0,dR=1,Es="",Bi="srgb",hl="srgb-linear",Ch="linear",St="srgb",ea=7680,sx=519,pR=512,mR=513,gR=514,oE=515,_R=516,vR=517,xR=518,yR=519,ox=35044,ax="300 es",jr=2e3,Rh=2001;class vl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,Rg=180/Math.PI;function ic(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function SR(n,e){return(n%e+e)%e}function Xd(n,e,t){return(1-t)*n+t*e}function Ll(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,r,s,o,a,l,u){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],v=r[1],x=r[4],y=r[7],A=r[2],w=r[5],E=r[8];return s[0]=o*_+a*v+l*A,s[3]=o*m+a*x+l*w,s[6]=o*p+a*y+l*E,s[1]=u*_+c*v+f*A,s[4]=u*m+c*x+f*w,s[7]=u*p+c*y+f*E,s[2]=h*_+d*v+g*A,s[5]=h*m+d*x+g*w,s[8]=h*p+d*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yd.makeScale(e,t)),this}rotate(e){return this.premultiply(Yd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yd=new Ke;function aE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ku(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function MR(){const n=Ku("canvas");return n.style.display="block",n}const lx={};function po(n){n in lx||(lx[n]=!0,console.warn(n))}function ER(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function TR(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wR(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ux=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cx=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AR(){const n={enabled:!0,workingColorSpace:hl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=Ya(r.r),r.g=Ya(r.g),r.b=Ya(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Es?Ch:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hl]:{primaries:e,whitePoint:i,transfer:Ch,toXYZ:ux,fromXYZ:cx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:e,whitePoint:i,transfer:St,toXYZ:ux,fromXYZ:cx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),n}const pt=AR();function es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ya(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ta;class CR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ta===void 0&&(ta=Ku("canvas")),ta.width=e.width,ta.height=e.height;const i=ta.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ta}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ku("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=es(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(es(t[i]/255)*255):t[i]=es(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RR=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RR++}),this.uuid=ic(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qd(r[o].image)):s.push(qd(r[o]))}else s=qd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?CR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bR=0;class Nn extends vl{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,i=To,r=To,s=Tr,o=wo,a=lr,l=as,u=Nn.DEFAULT_ANISOTROPY,c=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bR++}),this.uuid=ic(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $u:e.x=e.x-Math.floor(e.x);break;case To:e.x=e.x<0?0:1;break;case tg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $u:e.y=e.y-Math.floor(e.y);break;case To:e.y=e.y<0?0:1;break;case tg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=$1;Nn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(d+1)/2,A=(p+1)/2,w=(c+h)/4,E=(f+_)/4,b=(g+m)/4;return x>y&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=E/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=E/s,r=b/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-c)/v,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PR extends vl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new r0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends PR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lE extends Nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fr,this.minFilter=fr,this.wrapR=To,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DR extends Nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fr,this.minFilter=fr,this.wrapR=To,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==d||c!==g){let m=1-a;const p=l*h+u*d+c*g+f*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,p*v);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const y=a*v;if(l=l*m+h*y,u=u*m+d*y,c=c*m+g*y,f=f*m+_*y,m===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=A,u*=A,c*=A,f*=A}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*d-u*h,e[t+1]=l*g+c*h+u*f-a*d,e[t+2]=u*g+c*d+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"YXZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"ZXY":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"ZYX":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"YZX":this._x=h*c*f+u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f-h*d*g;break;case"XZY":this._x=h*c*f-u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $d.copy(this).projectOnVector(e),this.sub($d)}reflect(e){return this.sub($d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $d=new N,fx=new rc;class sc{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tr):tr.fromBufferAttribute(s,o),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vc.copy(i.boundingBox)),Vc.applyMatrix4(e.matrixWorld),this.union(Vc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ul),Hc.subVectors(this.max,Ul),na.subVectors(e.a,Ul),ia.subVectors(e.b,Ul),ra.subVectors(e.c,Ul),fs.subVectors(ia,na),hs.subVectors(ra,ia),no.subVectors(na,ra);let t=[0,-fs.z,fs.y,0,-hs.z,hs.y,0,-no.z,no.y,fs.z,0,-fs.x,hs.z,0,-hs.x,no.z,0,-no.x,-fs.y,fs.x,0,-hs.y,hs.x,0,-no.y,no.x,0];return!jd(t,na,ia,ra,Hc)||(t=[1,0,0,0,1,0,0,0,1],!jd(t,na,ia,ra,Hc))?!1:(Gc.crossVectors(fs,hs),t=[Gc.x,Gc.y,Gc.z],jd(t,na,ia,ra,Hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ur=[new N,new N,new N,new N,new N,new N,new N,new N],tr=new N,Vc=new sc,na=new N,ia=new N,ra=new N,fs=new N,hs=new N,no=new N,Ul=new N,Hc=new N,Gc=new N,io=new N;function jd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){io.fromArray(n,s);const a=r.x*Math.abs(io.x)+r.y*Math.abs(io.y)+r.z*Math.abs(io.z),l=e.dot(io),u=t.dot(io),c=i.dot(io);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const LR=new sc,Il=new N,Kd=new N;class oc{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):LR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Il.subVectors(e,this.center);const t=Il.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Il,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Il.copy(e.center).add(Kd)),this.expandByPoint(Il.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ir=new N,Zd=new N,Wc=new N,ds=new N,Qd=new N,Xc=new N,Jd=new N;class s0{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zd.copy(e).add(t).multiplyScalar(.5),Wc.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Zd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wc),a=ds.dot(this.direction),l=-ds.dot(Wc),u=ds.lengthSq(),c=Math.abs(1-o*o);let f,h,d,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zd).addScaledVector(Wc,h),d}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);const i=Ir.dot(this.direction),r=Ir.dot(Ir)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,i,r,s){Qd.subVectors(t,e),Xc.subVectors(i,e),Jd.crossVectors(Qd,Xc);let o=this.direction.dot(Jd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ds.subVectors(this.origin,e);const l=a*this.direction.dot(Xc.crossVectors(ds,Xc));if(l<0)return null;const u=a*this.direction.dot(Qd.cross(ds));if(u<0||l+u>o)return null;const c=-a*ds.dot(Jd);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,o,a,l,u,c,f,h,d,g,_,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/sa.setFromMatrixColumn(e,0).length(),s=1/sa.setFromMatrixColumn(e,1).length(),o=1/sa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,d=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=d+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+d*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,d=l*f,g=u*c,_=u*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,d=l*f,g=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,d=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-d,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=d*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UR,e,IR)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ps.crossVectors(i,gi),ps.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ps.crossVectors(i,gi)),ps.normalize(),Yc.crossVectors(gi,ps),r[0]=ps.x,r[4]=Yc.x,r[8]=gi.x,r[1]=ps.y,r[5]=Yc.y,r[9]=gi.y,r[2]=ps.z,r[6]=Yc.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],x=i[7],y=i[11],A=i[15],w=r[0],E=r[4],b=r[8],M=r[12],S=r[1],D=r[5],F=r[9],z=r[13],q=r[2],j=r[6],G=r[10],X=r[14],U=r[3],$=r[7],P=r[11],te=r[15];return s[0]=o*w+a*S+l*q+u*U,s[4]=o*E+a*D+l*j+u*$,s[8]=o*b+a*F+l*G+u*P,s[12]=o*M+a*z+l*X+u*te,s[1]=c*w+f*S+h*q+d*U,s[5]=c*E+f*D+h*j+d*$,s[9]=c*b+f*F+h*G+d*P,s[13]=c*M+f*z+h*X+d*te,s[2]=g*w+_*S+m*q+p*U,s[6]=g*E+_*D+m*j+p*$,s[10]=g*b+_*F+m*G+p*P,s[14]=g*M+_*z+m*X+p*te,s[3]=v*w+x*S+y*q+A*U,s[7]=v*E+x*D+y*j+A*$,s[11]=v*b+x*F+y*G+A*P,s[15]=v*M+x*z+y*X+A*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+_*(+t*l*d-t*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+m*(+t*u*f-t*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=f*m*u-_*h*u+_*l*d-a*m*d-f*l*p+a*h*p,x=g*h*u-c*m*u-g*l*d+o*m*d+c*l*p-o*h*p,y=c*_*u-g*f*u+g*a*d-o*_*d-c*a*p+o*f*p,A=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,w=t*v+i*x+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*E,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*E,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*E,e[4]=x*E,e[5]=(c*m*s-g*h*s+g*r*d-t*m*d-c*r*p+t*h*p)*E,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*p-t*l*p)*E,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*d+t*l*d)*E,e[8]=y*E,e[9]=(g*f*s-c*_*s-g*i*d+t*_*d+c*i*p-t*f*p)*E,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*p+t*a*p)*E,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*d-t*a*d)*E,e[12]=A*E,e[13]=(c*_*r-g*f*r+g*i*h-t*_*h-c*i*m+t*f*m)*E,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*E,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,g=s*f,_=o*c,m=o*f,p=a*f,v=l*u,x=l*c,y=l*f,A=i.x,w=i.y,E=i.z;return r[0]=(1-(_+p))*A,r[1]=(d+y)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(h+p))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*E,r[9]=(m-v)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=sa.set(r[0],r[1],r[2]).length();const o=sa.set(r[4],r[5],r[6]).length(),a=sa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nr.copy(this);const u=1/s,c=1/o,f=1/a;return nr.elements[0]*=u,nr.elements[1]*=u,nr.elements[2]*=u,nr.elements[4]*=c,nr.elements[5]*=c,nr.elements[6]*=c,nr.elements[8]*=f,nr.elements[9]*=f,nr.elements[10]*=f,t.setFromRotationMatrix(nr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=jr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===jr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Rh)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=jr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,d=(i+r)*c;let g,_;if(a===jr)g=(o+s)*f,_=-2*f;else if(a===Rh)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const sa=new N,nr=new bt,UR=new N(0,0,0),IR=new N(1,1,1),ps=new N,Yc=new N,gi=new N,hx=new bt,dx=new rc;class Lr{constructor(e=0,t=0,i=0,r=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dx.setFromEuler(this),this.setFromQuaternion(dx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class uE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NR=0;const px=new N,oa=new rc,Nr=new bt,qc=new N,Nl=new N,FR=new N,OR=new rc,mx=new N(1,0,0),gx=new N(0,1,0),_x=new N(0,0,1),vx={type:"added"},kR={type:"removed"},aa={type:"childadded",child:null},ep={type:"childremoved",child:null};class Fn extends vl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NR++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new N,t=new Lr,i=new rc,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ke}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.multiply(oa),this}rotateOnWorldAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.premultiply(oa),this}rotateX(e){return this.rotateOnAxis(mx,e)}rotateY(e){return this.rotateOnAxis(gx,e)}rotateZ(e){return this.rotateOnAxis(_x,e)}translateOnAxis(e,t){return px.copy(e).applyQuaternion(this.quaternion),this.position.add(px.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mx,e)}translateY(e){return this.translateOnAxis(gx,e)}translateZ(e){return this.translateOnAxis(_x,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qc.copy(e):qc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nr.lookAt(Nl,qc,this.up):Nr.lookAt(qc,Nl,this.up),this.quaternion.setFromRotationMatrix(Nr),r&&(Nr.extractRotation(r.matrixWorld),oa.setFromRotationMatrix(Nr),this.quaternion.premultiply(oa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vx),aa.child=e,this.dispatchEvent(aa),aa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kR),ep.child=e,this.dispatchEvent(ep),ep.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vx),aa.child=e,this.dispatchEvent(aa),aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,e,FR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,OR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Fn.DEFAULT_UP=new N(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new N,Fr=new N,tp=new N,Or=new N,la=new N,ua=new N,xx=new N,np=new N,ip=new N,rp=new N,sp=new Mt,op=new Mt,ap=new Mt;class Xi{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ir.subVectors(e,t),r.cross(ir);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ir.subVectors(r,t),Fr.subVectors(i,t),tp.subVectors(e,t);const o=ir.dot(ir),a=ir.dot(Fr),l=ir.dot(tp),u=Fr.dot(Fr),c=Fr.dot(tp),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Or)===null?!1:Or.x>=0&&Or.y>=0&&Or.x+Or.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Or.x),l.addScaledVector(o,Or.y),l.addScaledVector(a,Or.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return sp.setScalar(0),op.setScalar(0),ap.setScalar(0),sp.fromBufferAttribute(e,t),op.fromBufferAttribute(e,i),ap.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sp,s.x),o.addScaledVector(op,s.y),o.addScaledVector(ap,s.z),o}static isFrontFacing(e,t,i,r){return ir.subVectors(i,t),Fr.subVectors(e,t),ir.cross(Fr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),ir.cross(Fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Xi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;la.subVectors(r,i),ua.subVectors(s,i),np.subVectors(e,i);const l=la.dot(np),u=ua.dot(np);if(l<=0&&u<=0)return t.copy(i);ip.subVectors(e,r);const c=la.dot(ip),f=ua.dot(ip);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(la,o);rp.subVectors(e,s);const d=la.dot(rp),g=ua.dot(rp);if(g>=0&&d<=g)return t.copy(s);const _=d*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(ua,a);const m=c*g-d*f;if(m<=0&&f-c>=0&&d-g>=0)return xx.subVectors(s,r),a=(f-c)/(f-c+(d-g)),t.copy(r).addScaledVector(xx,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(la,o).addScaledVector(ua,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},$c={h:0,s:0,l:0};function lp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=SR(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=lp(o,s,e+1/3),this.g=lp(o,s,e),this.b=lp(o,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=Bi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bi){const i=cE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return pt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(ot(Cn.r*255,0,255))*65536+Math.round(ot(Cn.g*255,0,255))*256+Math.round(ot(Cn.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,s=Cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Bi){pt.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,r=Cn.b;return e!==Bi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL($c);const i=Xd(ms.h,$c.h,t),r=Xd(ms.s,$c.s,t),s=Xd(ms.l,$c.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new tt;tt.NAMES=cE;let zR=0;class $o extends vl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zR++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=Wa,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wm,this.blendDst=Xm,this.blendEquation=_o,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wa&&(i.blending=this.blending),this.side!==$s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wm&&(i.blendSrc=this.blendSrc),this.blendDst!==Xm&&(i.blendDst=this.blendDst),this.blendEquation!==_o&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ea&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ea&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ea&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ed extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=Z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new N,jc=new De;let BR=0;class Pr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ox,this.updateRanges=[],this.gpuType=$r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jc.fromBufferAttribute(this,t),jc.applyMatrix3(e),this.setXY(t,jc.x,jc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ll(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ll(t,this.array)),t}setX(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ll(t,this.array)),t}setY(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ll(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ll(t,this.array)),t}setW(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),r=ti(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),r=ti(r,this.array),s=ti(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ox&&(e.usage=this.usage),e}}class fE extends Pr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hE extends Pr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gn extends Pr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let VR=0;const ki=new bt,up=new Fn,ca=new N,_i=new sc,Fl=new sc,fn=new N;class Zn extends vl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aE(e)?hE:fE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,i){return ki.makeTranslation(e,t,i),this.applyMatrix4(ki),this}scale(e,t,i){return ki.makeScale(e,t,i),this.applyMatrix4(ki),this}lookAt(e){return up.lookAt(e),up.updateMatrix(),this.applyMatrix4(up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fl.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(_i.min,Fl.min),_i.expandByPoint(fn),fn.addVectors(_i.max,Fl.max),_i.expandByPoint(fn)):(_i.expandByPoint(Fl.min),_i.expandByPoint(Fl.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)fn.fromBufferAttribute(a,u),l&&(ca.fromBufferAttribute(e,u),fn.add(ca)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new N,l[b]=new N;const u=new N,c=new N,f=new N,h=new De,d=new De,g=new De,_=new N,m=new N;function p(b,M,S){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),c.sub(u),f.sub(u),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(D),a[b].add(_),a[M].add(_),a[S].add(_),l[b].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,M=v.length;b<M;++b){const S=v[b],D=S.start,F=S.count;for(let z=D,q=D+F;z<q;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new N,y=new N,A=new N,w=new N;function E(b){A.fromBufferAttribute(r,b),w.copy(A);const M=a[b];x.copy(M),x.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(w,M);const D=y.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,D)}for(let b=0,M=v.length;b<M;++b){const S=v[b],D=S.start,F=S.count;for(let z=D,q=D+F;z<q;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)h[g++]=u[d++]}return new Pr(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yx=new bt,ro=new s0,Kc=new oc,Sx=new N,Zc=new N,Qc=new N,Jc=new N,cp=new N,ef=new N,Mx=new N,tf=new N;class $i extends Fn{constructor(e=new Zn,t=new ed){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ef.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(cp.fromBufferAttribute(f,e),o?ef.addScaledVector(cp,c):ef.addScaledVector(cp.sub(t),c))}t.add(ef)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kc.copy(i.boundingSphere),Kc.applyMatrix4(s),ro.copy(e.ray).recast(e.near),!(Kc.containsPoint(ro.origin)===!1&&(ro.intersectSphere(Kc,Sx)===null||ro.origin.distanceToSquared(Sx)>(e.far-e.near)**2))&&(yx.copy(s).invert(),ro.copy(e.ray).applyMatrix4(yx),!(i.boundingBox!==null&&ro.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ro)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,A=x;y<A;y+=3){const w=a.getX(y),E=a.getX(y+1),b=a.getX(y+2);r=nf(this,p,e,i,u,c,f,w,E,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=nf(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,A=x;y<A;y+=3){const w=y,E=y+1,b=y+2;r=nf(this,p,e,i,u,c,f,w,E,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;r=nf(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function HR(n,e,t,i,r,s,o,a){let l;if(e.side===Kn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$s,a),l===null)return null;tf.copy(a),tf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(tf);return u<t.near||u>t.far?null:{distance:u,point:tf.clone(),object:n}}function nf(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Zc),n.getVertexPosition(l,Qc),n.getVertexPosition(u,Jc);const c=HR(n,e,t,i,Zc,Qc,Jc,Mx);if(c){const f=new N;Xi.getBarycoord(Mx,Zc,Qc,Jc,f),r&&(c.uv=Xi.getInterpolatedAttribute(r,a,l,u,f,new De)),s&&(c.uv1=Xi.getInterpolatedAttribute(s,a,l,u,f,new De)),o&&(c.normal=Xi.getInterpolatedAttribute(o,a,l,u,f,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new N,materialIndex:0};Xi.getNormal(Zc,Qc,Jc,h.normal),c.face=h,c.barycoord=f}return c}class ac extends Zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(c,3)),this.setAttribute("uv",new gn(f,2));function g(_,m,p,v,x,y,A,w,E,b,M){const S=y/E,D=A/b,F=y/2,z=A/2,q=w/2,j=E+1,G=b+1;let X=0,U=0;const $=new N;for(let P=0;P<G;P++){const te=P*D-z;for(let _e=0;_e<j;_e++){const Ye=_e*S-F;$[_]=Ye*v,$[m]=te*x,$[p]=q,u.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=w>0?1:-1,c.push($.x,$.y,$.z),f.push(_e/E),f.push(1-P/b),X+=1}}for(let P=0;P<b;P++)for(let te=0;te<E;te++){const _e=h+te+j*P,Ye=h+te+j*(P+1),Y=h+(te+1)+j*(P+1),ne=h+(te+1)+j*P;l.push(_e,Ye,ne),l.push(Ye,Y,ne),U+=6}a.addGroup(d,U,M),d+=U,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Hn(n){const e={};for(let t=0;t<n.length;t++){const i=dl(n[t]);for(const r in i)e[r]=i[r]}return e}function GR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dE(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const bh={clone:dl,merge:Hn};var WR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WR,this.fragmentShader=XR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dl(e.uniforms),this.uniformsGroups=GR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pE extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=jr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new N,Ex=new De,Tx=new De;class Ei extends pE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rg*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,Ex,Tx),t.subVectors(Tx,Ex)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fa=-90,ha=1;class YR extends Fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ei(fa,ha,e,t);r.layers=this.layers,this.add(r);const s=new Ei(fa,ha,e,t);s.layers=this.layers,this.add(s);const o=new Ei(fa,ha,e,t);o.layers=this.layers,this.add(o);const a=new Ei(fa,ha,e,t);a.layers=this.layers,this.add(a);const l=new Ei(fa,ha,e,t);l.layers=this.layers,this.add(l);const u=new Ei(fa,ha,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===jr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class mE extends Nn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ll,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qR extends hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ac(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:dl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kn,blending:Qr});s.uniforms.tEquirect.value=t;const o=new $i(r,s),a=t.minFilter;return t.minFilter===wo&&(t.minFilter=Tr),new YR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Kl extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $R={type:"move"};class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($R)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class o0{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new o0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jR extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hp=new N,KR=new N,ZR=new Ke;class mo{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=hp.subVectors(i,t).cross(KR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(hp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ZR.getNormalMatrix(e),r=this.coplanarPoint(hp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const so=new oc,rf=new N;class a0{constructor(e=new mo,t=new mo,i=new mo,r=new mo,s=new mo,o=new mo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-d,y-p).normalize(),i[1].setComponents(l+s,h+u,m+d,y+p).normalize(),i[2].setComponents(l+o,h+c,m+g,y+v).normalize(),i[3].setComponents(l-o,h-c,m-g,y-v).normalize(),i[4].setComponents(l-a,h-f,m-_,y-x).normalize(),t===jr)i[5].setComponents(l+a,h+f,m+_,y+x).normalize();else if(t===Rh)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),so.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){return so.center.set(0,0,0),so.radius=.7071067811865476,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(rf.x=r.normal.x>0?e.max.x:e.min.x,rf.y=r.normal.y>0?e.max.y:e.min.y,rf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gE extends $o{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ph=new N,Dh=new N,wx=new bt,Ol=new s0,sf=new oc,dp=new N,Ax=new N;class QR extends Fn{constructor(e=new Zn,t=new gE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ph.fromBufferAttribute(t,r-1),Dh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ph.distanceTo(Dh);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sf.copy(i.boundingSphere),sf.applyMatrix4(r),sf.radius+=s,e.ray.intersectsSphere(sf)===!1)return;wx.copy(r).invert(),Ol.copy(e.ray).applyMatrix4(wx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=u){const p=c.getX(_),v=c.getX(_+1),x=of(this,e,Ol,l,p,v,_);x&&t.push(x)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(d),p=of(this,e,Ol,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=u){const p=of(this,e,Ol,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=of(this,e,Ol,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function of(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Ph.fromBufferAttribute(a,r),Dh.fromBufferAttribute(a,s),t.distanceSqToSegment(Ph,Dh,dp,Ax)>i)return;dp.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(dp);if(!(u<e.near||u>e.far))return{distance:u,point:Ax.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Cx=new N,Rx=new N;class JR extends QR{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Cx.fromBufferAttribute(t,r),Rx.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Cx.distanceTo(Rx);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _E extends $o{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bx=new bt,bg=new s0,af=new oc,lf=new N;class pp extends Fn{constructor(e=new Zn,t=new _E){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),af.copy(i.boundingSphere),af.applyMatrix4(r),af.radius+=s,e.ray.intersectsSphere(af)===!1)return;bx.copy(r).invert(),bg.copy(e.ray).applyMatrix4(bx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=u.getX(g);lf.fromBufferAttribute(f,m),Px(lf,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)lf.fromBufferAttribute(f,g),Px(lf,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Px(n,e,t,i,r,s,o){const a=bg.distanceSqToPoint(n);if(a<t){const l=new N;bg.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class eb extends Nn{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vE extends Nn{constructor(e,t,i,r,s,o,a,l,u,c=Xa){if(c!==Xa&&c!==fl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Xa&&(i=Wo),i===void 0&&c===fl&&(i=cl),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fr,this.minFilter=l!==void 0?l:fr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new r0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class us{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,d=(o-c)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new De:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new N,r=[],s=[],o=[],a=new N,l=new bt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ot(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(ot(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xE extends us{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new De){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=u-this.aY;l=h*c-d*f+this.aX,u=h*f+d*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tb extends xE{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function l0(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,d*=c,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const uf=new N,mp=new l0,gp=new l0,_p=new l0;class yE extends us{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(uf.subVectors(r[0],r[1]).add(r[0]),u=uf);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(uf.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=uf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(c),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),mp.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,g,_,m),gp.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,g,_,m),_p.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(mp.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),gp.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),_p.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(mp.calc(l),gp.calc(l),_p.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dx(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function nb(n,e){const t=1-n;return t*t*e}function ib(n,e){return 2*(1-n)*n*e}function rb(n,e){return n*n*e}function yu(n,e,t,i){return nb(n,e)+ib(n,t)+rb(n,i)}function sb(n,e){const t=1-n;return t*t*t*e}function ob(n,e){const t=1-n;return 3*t*t*n*e}function ab(n,e){return 3*(1-n)*n*n*e}function lb(n,e){return n*n*n*e}function Su(n,e,t,i,r){return sb(n,e)+ob(n,t)+ab(n,i)+lb(n,r)}class ub extends us{constructor(e=new De,t=new De,i=new De,r=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new De){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Su(e,r.x,s.x,o.x,a.x),Su(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cb extends us{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Su(e,r.x,s.x,o.x,a.x),Su(e,r.y,s.y,o.y,a.y),Su(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fb extends us{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hb extends us{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class db extends us{constructor(e=new De,t=new De,i=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new De){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(yu(e,r.x,s.x,o.x),yu(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SE extends us{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(yu(e,r.x,s.x,o.x),yu(e,r.y,s.y,o.y),yu(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pb extends us{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Dx(a,l.x,u.x,c.x,f.x),Dx(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new De().fromArray(r))}return this}}var mb=Object.freeze({__proto__:null,ArcCurve:tb,CatmullRomCurve3:yE,CubicBezierCurve:ub,CubicBezierCurve3:cb,EllipseCurve:xE,LineCurve:fb,LineCurve3:hb,QuadraticBezierCurve:db,QuadraticBezierCurve3:SE,SplineCurve:pb});const cf=new N,ff=new N,vp=new N,hf=new Xi;class gb extends Zn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Hf*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],c=["a","b","c"],f=new Array(3),h={},d=[];for(let g=0;g<l;g+=3){o?(u[0]=o.getX(g),u[1]=o.getX(g+1),u[2]=o.getX(g+2)):(u[0]=g,u[1]=g+1,u[2]=g+2);const{a:_,b:m,c:p}=hf;if(_.fromBufferAttribute(a,u[0]),m.fromBufferAttribute(a,u[1]),p.fromBufferAttribute(a,u[2]),hf.getNormal(vp),f[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=f[v],A=f[x],w=hf[c[v]],E=hf[c[x]],b=`${y}_${A}`,M=`${A}_${y}`;M in h&&h[M]?(vp.dot(h[M].normal)<=s&&(d.push(w.x,w.y,w.z),d.push(E.x,E.y,E.z)),h[M]=null):b in h||(h[b]={index0:u[v],index1:u[x],normal:vp.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];cf.fromBufferAttribute(a,_),ff.fromBufferAttribute(a,m),d.push(cf.x,cf.y,cf.z),d.push(ff.x,ff.y,ff.z)}this.setAttribute("position",new gn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class lc extends Zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const v=p*h-o;for(let x=0;x<u;x++){const y=x*f-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+u*p,y=v+u*(p+1),A=v+1+u*(p+1),w=v+1+u*p;d.push(x,y,w),d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lh extends Zn{constructor(e=new SE(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,u=new De;let c=new N;const f=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new gn(f,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(d,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),v(),p()}function m(x){c=e.getPointAt(x/t,c);const y=o.normals[x],A=o.binormals[x];for(let w=0;w<=r;w++){const E=w/r*Math.PI*2,b=Math.sin(E),M=-Math.cos(E);l.x=M*y.x+b*A.x,l.y=M*y.y+b*A.y,l.z=M*y.z+b*A.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=r;y++){const A=(r+1)*(x-1)+(y-1),w=(r+1)*x+(y-1),E=(r+1)*x+y,b=(r+1)*(x-1)+y;g.push(A,w,b),g.push(w,E,b)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=r;y++)u.x=x/t,u.y=y/r,d.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Lh(new mb[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class _b extends $o{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new tt(16777215),this.specular=new tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sE,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=Z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vb extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xb extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lx={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ME{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const d=u[f],g=u[f+1];if(d.global&&(d.lastIndex=0),d.test(c))return g}return null}}}const yb=new ME;class u0{constructor(e){this.manager=e!==void 0?e:yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}u0.DEFAULT_MATERIAL_NAME="__DEFAULT";class Sb extends u0{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Lx.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ku("img");function l(){c(),Lx.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Mb extends u0{constructor(e){super(e)}load(e,t,i,r){const s=new Nn,o=new Sb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class EE extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xp=new bt,Ux=new N,Ix=new N;class Eb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new a0,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ux.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ux),Ix.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ix),t.updateMatrixWorld(),xp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nx=new bt,kl=new N,yp=new N;class Tb extends Eb{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),kl.setFromMatrixPosition(e.matrixWorld),i.position.copy(kl),yp.copy(i.position),yp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(yp),i.updateMatrixWorld(),r.makeTranslation(-kl.x,-kl.y,-kl.z),Nx.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nx)}}class wb extends EE{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Tb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TE extends pE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ab extends EE{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cb extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Rb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fx(){return performance.now()}function Ox(n,e,t,i){const r=bb(i);switch(t){case Q1:return n*e;case eE:return n*e;case tE:return n*e*2;case nE:return n*e/r.components*r.byteLength;case t0:return n*e/r.components*r.byteLength;case iE:return n*e*2/r.components*r.byteLength;case n0:return n*e*2/r.components*r.byteLength;case J1:return n*e*3/r.components*r.byteLength;case lr:return n*e*4/r.components*r.byteLength;case i0:return n*e*4/r.components*r.byteLength;case Of:case kf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zf:case Bf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ig:case sg:return Math.max(n,16)*Math.max(e,8)/4;case ng:case rg:return Math.max(n,8)*Math.max(e,8)/2;case og:case ag:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ug:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cg:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fg:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hg:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dg:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pg:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mg:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gg:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _g:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xg:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yg:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sg:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mg:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vf:case Eg:case Tg:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rE:case wg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ag:case Cg:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bb(n){switch(n){case as:case j1:return{byteLength:1,components:1};case ju:case K1:case Jr:return{byteLength:2,components:1};case J_:case e0:return{byteLength:2,components:4};case Wo:case Q_:case $r:return{byteLength:4,components:1};case Z1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:K_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=K_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Pb(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ob=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aP="gl_FragColor = linearToOutputTexel( gl_FragColor );",lP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_P=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,EP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$P=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,o2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,k2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,X2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Q2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Db,alphahash_pars_fragment:Lb,alphamap_fragment:Ub,alphamap_pars_fragment:Ib,alphatest_fragment:Nb,alphatest_pars_fragment:Fb,aomap_fragment:Ob,aomap_pars_fragment:kb,batching_pars_vertex:zb,batching_vertex:Bb,begin_vertex:Vb,beginnormal_vertex:Hb,bsdfs:Gb,iridescence_fragment:Wb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:$b,clipping_planes_vertex:jb,color_fragment:Kb,color_pars_fragment:Zb,color_pars_vertex:Qb,color_vertex:Jb,common:eP,cube_uv_reflection_fragment:tP,defaultnormal_vertex:nP,displacementmap_pars_vertex:iP,displacementmap_vertex:rP,emissivemap_fragment:sP,emissivemap_pars_fragment:oP,colorspace_fragment:aP,colorspace_pars_fragment:lP,envmap_fragment:uP,envmap_common_pars_fragment:cP,envmap_pars_fragment:fP,envmap_pars_vertex:hP,envmap_physical_pars_fragment:EP,envmap_vertex:dP,fog_vertex:pP,fog_pars_vertex:mP,fog_fragment:gP,fog_pars_fragment:_P,gradientmap_pars_fragment:vP,lightmap_pars_fragment:xP,lights_lambert_fragment:yP,lights_lambert_pars_fragment:SP,lights_pars_begin:MP,lights_toon_fragment:TP,lights_toon_pars_fragment:wP,lights_phong_fragment:AP,lights_phong_pars_fragment:CP,lights_physical_fragment:RP,lights_physical_pars_fragment:bP,lights_fragment_begin:PP,lights_fragment_maps:DP,lights_fragment_end:LP,logdepthbuf_fragment:UP,logdepthbuf_pars_fragment:IP,logdepthbuf_pars_vertex:NP,logdepthbuf_vertex:FP,map_fragment:OP,map_pars_fragment:kP,map_particle_fragment:zP,map_particle_pars_fragment:BP,metalnessmap_fragment:VP,metalnessmap_pars_fragment:HP,morphinstance_vertex:GP,morphcolor_vertex:WP,morphnormal_vertex:XP,morphtarget_pars_vertex:YP,morphtarget_vertex:qP,normal_fragment_begin:$P,normal_fragment_maps:jP,normal_pars_fragment:KP,normal_pars_vertex:ZP,normal_vertex:QP,normalmap_pars_fragment:JP,clearcoat_normal_fragment_begin:e2,clearcoat_normal_fragment_maps:t2,clearcoat_pars_fragment:n2,iridescence_pars_fragment:i2,opaque_fragment:r2,packing:s2,premultiplied_alpha_fragment:o2,project_vertex:a2,dithering_fragment:l2,dithering_pars_fragment:u2,roughnessmap_fragment:c2,roughnessmap_pars_fragment:f2,shadowmap_pars_fragment:h2,shadowmap_pars_vertex:d2,shadowmap_vertex:p2,shadowmask_pars_fragment:m2,skinbase_vertex:g2,skinning_pars_vertex:_2,skinning_vertex:v2,skinnormal_vertex:x2,specularmap_fragment:y2,specularmap_pars_fragment:S2,tonemapping_fragment:M2,tonemapping_pars_fragment:E2,transmission_fragment:T2,transmission_pars_fragment:w2,uv_pars_fragment:A2,uv_pars_vertex:C2,uv_vertex:R2,worldpos_vertex:b2,background_vert:P2,background_frag:D2,backgroundCube_vert:L2,backgroundCube_frag:U2,cube_vert:I2,cube_frag:N2,depth_vert:F2,depth_frag:O2,distanceRGBA_vert:k2,distanceRGBA_frag:z2,equirect_vert:B2,equirect_frag:V2,linedashed_vert:H2,linedashed_frag:G2,meshbasic_vert:W2,meshbasic_frag:X2,meshlambert_vert:Y2,meshlambert_frag:q2,meshmatcap_vert:$2,meshmatcap_frag:j2,meshnormal_vert:K2,meshnormal_frag:Z2,meshphong_vert:Q2,meshphong_frag:J2,meshphysical_vert:eD,meshphysical_frag:tD,meshtoon_vert:nD,meshtoon_frag:iD,points_vert:rD,points_frag:sD,shadow_vert:oD,shadow_frag:aD,sprite_vert:lD,sprite_frag:uD},ve={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},vr={basic:{uniforms:Hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Hn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Hn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Hn([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Hn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Hn([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Hn([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Hn([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Hn([ve.lights,ve.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};vr.physical={uniforms:Hn([vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const df={r:0,b:0,g:0},oo=new Lr,cD=new bt;function fD(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const A=g(x);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===Jh)?(c===void 0&&(c=new $i(new ac(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:dl(vr.backgroundCube.uniforms),vertexShader:vr.backgroundCube.vertexShader,fragmentShader:vr.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),oo.copy(y.backgroundRotation),oo.x*=-1,oo.y*=-1,oo.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cD.makeRotationFromEuler(oo)),c.material.toneMapped=pt.getTransfer(A.colorSpace)!==St,(f!==A||h!==A.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new $i(new lc(2,2),new si({name:"BackgroundMaterial",uniforms:dl(vr.background.uniforms),vertexShader:vr.background.vertexShader,fragmentShader:vr.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=pt.getTransfer(A.colorSpace)!==St,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function p(x,y){x.getRGB(df,dE(n)),i.buffers.color.setClear(df.r,df.g,df.b,y,o)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:v}}function hD(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,F,z,q){let j=!1;const G=f(z,F,D);s!==G&&(s=G,u(s.object)),j=d(S,z,F,q),j&&g(S,z,F,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(S,D,F,z),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,D,F){const z=F.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let j=q[D.id];j===void 0&&(j={},q[D.id]=j);let G=j[z];return G===void 0&&(G=h(l()),j[z]=G),G}function h(S){const D=[],F=[],z=[];for(let q=0;q<t;q++)D[q]=0,F[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,D,F,z){const q=s.attributes,j=D.attributes;let G=0;const X=F.getAttributes();for(const U in X)if(X[U].location>=0){const P=q[U];let te=j[U];if(te===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),P===void 0||P.attribute!==te||te&&P.data!==te.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(S,D,F,z){const q={},j=D.attributes;let G=0;const X=F.getAttributes();for(const U in X)if(X[U].location>=0){let P=j[U];P===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const te={};te.attribute=P,P&&P.data&&(te.data=P.data),q[U]=te,G++}s.attributes=q,s.attributesNum=G,s.index=z}function _(){const S=s.newAttributes;for(let D=0,F=S.length;D<F;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const F=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;F[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),q[S]!==D&&(n.vertexAttribDivisor(S,D),q[S]=D)}function v(){const S=s.newAttributes,D=s.enabledAttributes;for(let F=0,z=D.length;F<z;F++)D[F]!==S[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function x(S,D,F,z,q,j,G){G===!0?n.vertexAttribIPointer(S,D,F,q,j):n.vertexAttribPointer(S,D,F,z,q,j)}function y(S,D,F,z){_();const q=z.attributes,j=F.getAttributes(),G=D.defaultAttributeValues;for(const X in j){const U=j[X];if(U.location>=0){let $=q[X];if($===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const P=$.normalized,te=$.itemSize,_e=e.get($);if(_e===void 0)continue;const Ye=_e.buffer,Y=_e.type,ne=_e.bytesPerElement,ae=Y===n.INT||Y===n.UNSIGNED_INT||$.gpuType===Q_;if($.isInterleavedBufferAttribute){const re=$.data,Ae=re.stride,Oe=$.offset;if(re.isInstancedInterleavedBuffer){for(let Le=0;Le<U.locationSize;Le++)p(U.location+Le,re.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Le=0;Le<U.locationSize;Le++)m(U.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Le=0;Le<U.locationSize;Le++)x(U.location+Le,te/U.locationSize,Y,P,Ae*ne,(Oe+te/U.locationSize*Le)*ne,ae)}else{if($.isInstancedBufferAttribute){for(let re=0;re<U.locationSize;re++)p(U.location+re,$.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<U.locationSize;re++)m(U.location+re);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let re=0;re<U.locationSize;re++)x(U.location+re,te/U.locationSize,Y,P,te*ne,te/U.locationSize*re*ne,ae)}}else if(G!==void 0){const P=G[X];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(U.location,P);break;case 3:n.vertexAttrib3fv(U.location,P);break;case 4:n.vertexAttrib4fv(U.location,P);break;default:n.vertexAttrib1fv(U.location,P)}}}}v()}function A(){b();for(const S in i){const D=i[S];for(const F in D){const z=D[F];for(const q in z)c(z[q].object),delete z[q];delete D[F]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const F in D){const z=D[F];for(const q in z)c(z[q].object),delete z[q];delete D[F]}delete i[S.id]}function E(S){for(const D in i){const F=i[D];if(F[S.id]===void 0)continue;const z=F[S.id];for(const q in z)c(z[q].object),delete z[q];delete F[S.id]}}function b(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function dD(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];t.update(d,i,1)}function l(u,c,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pD(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==lr&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===Jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==as&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==$r&&!b)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:w}}function mD(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new mo,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=p.clippingState||null;l.value=y,y=c(g,h,x,d);for(let A=0;A!==x;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function gD(n){let e=new WeakMap;function t(o,a){return a===Jm?o.mapping=ll:a===eg&&(o.mapping=ul),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jm||a===eg)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new qR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Da=4,kx=[.125,.215,.35,.446,.526,.582],vo=20,Sp=new TE,zx=new tt;let Mp=null,Ep=0,Tp=0,wp=!1;const go=(1+Math.sqrt(5))/2,da=1/go,Bx=[new N(-go,da,0),new N(go,da,0),new N(-da,0,go),new N(da,0,go),new N(0,go,-da),new N(0,go,da),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],_D=new N;class Vx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=_D}=s;Mp=this._renderer.getRenderTarget(),Ep=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mp,Ep,Tp),this._renderer.xr.enabled=wp,e.scissorTest=!1,pf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ll||e.mapping===ul?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mp=this._renderer.getRenderTarget(),Ep=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tr,minFilter:Tr,generateMipmaps:!1,type:Jr,format:lr,colorSpace:hl,depthBuffer:!1},r=Hx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vD(s)),this._blurMaterial=xD(s,e,t)}return r}_compileMaterial(e){const t=new $i(this._lodPlanes[0],e);this._renderer.compile(t,Sp)}_sceneToCubeUV(e,t,i,r,s){const l=new Ei(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(zx),f.toneMapping=Hs,f.autoClear=!1;const g=new ed({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),_=new $i(new ac,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(zx),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[v],s.y,s.z)):x===1?(l.up.set(0,0,u[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[v],s.z)):(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[v]));const y=this._cubeSize;pf(r,x*y,v>2?y:0,y,y),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ll||e.mapping===ul;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $i(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pf(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Sp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bx[(r-s-1)%Bx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new $i(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*vo-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):vo;m>vo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vo}`);const p=[];let v=0;for(let E=0;E<vo;++E){const b=E/_,M=Math.exp(-b*b/2);p.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const y=this._sizeLods[r],A=3*y*(r>x-Da?r-x+Da:0),w=4*(this._cubeSize-y);pf(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(f,Sp)}}function vD(n){const e=[],t=[],i=[];let r=n;const s=n-Da+1+kx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Da?l=kx[o-n+Da-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,b=w>2?0:-1,M=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];v.set(M,_*g*w),x.set(h,m*g*w);const S=[w,w,w,w,w,w];y.set(S,p*g*w)}const A=new Zn;A.setAttribute("position",new Pr(v,_)),A.setAttribute("uv",new Pr(x,m)),A.setAttribute("faceIndex",new Pr(y,p)),e.push(A),r>Da&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hx(n,e,t){const i=new hr(n,e,t);return i.texture.mapping=Jh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xD(n,e,t){const i=new Float32Array(vo),r=new N(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:vo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:c0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Gx(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:c0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Wx(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:c0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function c0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yD(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Jm||l===eg,c=l===ll||l===ul;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Vx(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(t===null&&(t=new Vx(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function SD(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&po("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MD(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function u(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){const A=v[x+0],w=v[x+1],E=v[x+2];h.push(A,w,w,E,E,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const A=x+0,w=x+1,E=x+2;h.push(A,w,w,E,E,A)}}else return;const m=new(aE(h)?hE:fE)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function ED(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function u(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function c(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function TD(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wD(n,e,t){const i=new WeakMap,r=new Mt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*w*4*f),b=new lE(E,A,w,f);b.type=$r,b.needsUpdate=!0;const M=y*4;for(let D=0;D<f;D++){const F=p[D],z=v[D],q=x[D],j=A*w*4*D;for(let G=0;G<F.count;G++){const X=G*M;g===!0&&(r.fromBufferAttribute(F,G),E[j+X+0]=r.x,E[j+X+1]=r.y,E[j+X+2]=r.z,E[j+X+3]=0),_===!0&&(r.fromBufferAttribute(z,G),E[j+X+4]=r.x,E[j+X+5]=r.y,E[j+X+6]=r.z,E[j+X+7]=0),m===!0&&(r.fromBufferAttribute(q,G),E[j+X+8]=r.x,E[j+X+9]=r.y,E[j+X+10]=r.z,E[j+X+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new De(A,w)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function AD(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const AE=new Nn,Xx=new vE(1,1),CE=new lE,RE=new DR,bE=new mE,Yx=[],qx=[],$x=new Float32Array(16),jx=new Float32Array(9),Kx=new Float32Array(4);function xl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yx[r];if(s===void 0&&(s=new Float32Array(r),Yx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function td(n,e){let t=qx[e];t===void 0&&(t=new Int32Array(e),qx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function CD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function bD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function PD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function DD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;Kx.set(i),n.uniformMatrix2fv(this.addr,!1,Kx),cn(t,i)}}function LD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;jx.set(i),n.uniformMatrix3fv(this.addr,!1,jx),cn(t,i)}}function UD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;$x.set(i),n.uniformMatrix4fv(this.addr,!1,$x),cn(t,i)}}function ID(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ND(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function FD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function OD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function kD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function BD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function VD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function HD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Xx.compareFunction=oE,s=Xx):s=AE,t.setTexture2D(e||s,r)}function GD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||RE,r)}function WD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bE,r)}function XD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||CE,r)}function YD(n){switch(n){case 5126:return CD;case 35664:return RD;case 35665:return bD;case 35666:return PD;case 35674:return DD;case 35675:return LD;case 35676:return UD;case 5124:case 35670:return ID;case 35667:case 35671:return ND;case 35668:case 35672:return FD;case 35669:case 35673:return OD;case 5125:return kD;case 36294:return zD;case 36295:return BD;case 36296:return VD;case 35678:case 36198:case 36298:case 36306:case 35682:return HD;case 35679:case 36299:case 36307:return GD;case 35680:case 36300:case 36308:case 36293:return WD;case 36289:case 36303:case 36311:case 36292:return XD}}function qD(n,e){n.uniform1fv(this.addr,e)}function $D(n,e){const t=xl(e,this.size,2);n.uniform2fv(this.addr,t)}function jD(n,e){const t=xl(e,this.size,3);n.uniform3fv(this.addr,t)}function KD(n,e){const t=xl(e,this.size,4);n.uniform4fv(this.addr,t)}function ZD(n,e){const t=xl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QD(n,e){const t=xl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JD(n,e){const t=xl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eL(n,e){n.uniform1iv(this.addr,e)}function tL(n,e){n.uniform2iv(this.addr,e)}function nL(n,e){n.uniform3iv(this.addr,e)}function iL(n,e){n.uniform4iv(this.addr,e)}function rL(n,e){n.uniform1uiv(this.addr,e)}function sL(n,e){n.uniform2uiv(this.addr,e)}function oL(n,e){n.uniform3uiv(this.addr,e)}function aL(n,e){n.uniform4uiv(this.addr,e)}function lL(n,e,t){const i=this.cache,r=e.length,s=td(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||AE,s[o])}function uL(n,e,t){const i=this.cache,r=e.length,s=td(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||RE,s[o])}function cL(n,e,t){const i=this.cache,r=e.length,s=td(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bE,s[o])}function fL(n,e,t){const i=this.cache,r=e.length,s=td(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||CE,s[o])}function hL(n){switch(n){case 5126:return qD;case 35664:return $D;case 35665:return jD;case 35666:return KD;case 35674:return ZD;case 35675:return QD;case 35676:return JD;case 5124:case 35670:return eL;case 35667:case 35671:return tL;case 35668:case 35672:return nL;case 35669:case 35673:return iL;case 5125:return rL;case 36294:return sL;case 36295:return oL;case 36296:return aL;case 35678:case 36198:case 36298:case 36306:case 35682:return lL;case 35679:case 36299:case 36307:return uL;case 35680:case 36300:case 36308:case 36293:return cL;case 36289:case 36303:case 36311:case 36292:return fL}}class dL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YD(t.type)}}class pL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hL(t.type)}}class mL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ap=/(\w+)(\])?(\[|\.)?/g;function Zx(n,e){n.seq.push(e),n.map[e.id]=e}function gL(n,e,t){const i=n.name,r=i.length;for(Ap.lastIndex=0;;){const s=Ap.exec(i),o=Ap.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Zx(t,u===void 0?new dL(a,n,e):new pL(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new mL(a),Zx(t,f)),t=f}}}class Gf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Qx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _L=37297;let vL=0;function xL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Jx=new Ke;function yL(n){pt._getMatrix(Jx,pt.workingColorSpace,n);const e=`mat3( ${Jx.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case Ch:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ey(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xL(n.getShaderSource(e),o)}else return r}function SL(n,e){const t=yL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ML(n,e){let t;switch(e){case rR:t="Linear";break;case sR:t="Reinhard";break;case oR:t="Cineon";break;case q1:t="ACESFilmic";break;case lR:t="AgX";break;case uR:t="Neutral";break;case aR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mf=new N;function EL(){pt.getLuminanceCoefficients(mf);const n=mf.x.toFixed(4),e=mf.y.toFixed(4),t=mf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zl).join(`
`)}function wL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zl(n){return n!==""}function ty(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ny(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pg(n){return n.replace(CL,bL)}const RL=new Map;function bL(n,e){let t=Qe[e];if(t===void 0){const i=RL.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pg(t)}const PL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iy(n){return n.replace(PL,DL)}function DL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ry(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===X1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Y1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kr&&(e="SHADOWMAP_TYPE_VSM"),e}function UL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ll:case ul:e="ENVMAP_TYPE_CUBE";break;case Jh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ul:e="ENVMAP_MODE_REFRACTION";break}return e}function NL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Z_:e="ENVMAP_BLENDING_MULTIPLY";break;case nR:e="ENVMAP_BLENDING_MIX";break;case iR:e="ENVMAP_BLENDING_ADD";break}return e}function FL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LL(t),u=UL(t),c=IL(t),f=NL(t),h=FL(t),d=TL(t),g=wL(s),_=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zl).join(`
`),p.length>0&&(p+=`
`)):(m=[ry(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zl).join(`
`),p=[ry(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hs?"#define TONE_MAPPING":"",t.toneMapping!==Hs?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Hs?ML("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,SL("linearToOutputTexel",t.outputColorSpace),EL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zl).join(`
`)),o=Pg(o),o=ty(o,t),o=ny(o,t),a=Pg(a),a=ty(a,t),a=ny(a,t),o=iy(o),a=iy(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,y=v+p+a,A=Qx(r,r.VERTEX_SHADER,x),w=Qx(r,r.FRAGMENT_SHADER,y);r.attachShader(_,A),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(w).trim();let j=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,w);else{const X=ey(r,A,"vertex"),U=ey(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+X+`
`+U)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||q==="")&&(G=!1);G&&(D.diagnostics={runnable:j,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(A),r.deleteShader(w),b=new Gf(r,_),M=AL(r,_)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,_L)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let kL=0;class zL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new BL(e),t.set(e,i)),i}}class BL{constructor(e){this.id=kL++,this.code=e,this.usedTimes=0}}function VL(n,e,t,i,r,s,o){const a=new uE,l=new zL,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,F,z){const q=F.fog,j=z.geometry,G=M.isMeshStandardMaterial?F.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),U=X&&X.mapping===Jh?X.image.height:null,$=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const P=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=P!==void 0?P.length:0;let _e=0;j.morphAttributes.position!==void 0&&(_e=1),j.morphAttributes.normal!==void 0&&(_e=2),j.morphAttributes.color!==void 0&&(_e=3);let Ye,Y,ne,ae;if($){const xe=vr[$];Ye=xe.vertexShader,Y=xe.fragmentShader}else Ye=M.vertexShader,Y=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),ae=l.getFragmentShaderID(M);const re=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Oe=z.isInstancedMesh===!0,Le=z.isBatchedMesh===!0,Ze=!!M.map,qe=!!M.matcap,ye=!!X,L=!!M.aoMap,mt=!!M.lightMap,ke=!!M.bumpMap,V=!!M.normalMap,Ee=!!M.displacementMap,lt=!!M.emissiveMap,Se=!!M.metalnessMap,R=!!M.roughnessMap,T=M.anisotropy>0,B=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,Z=M.sheen>0,fe=M.transmission>0,le=T&&!!M.anisotropyMap,de=B&&!!M.clearcoatMap,Ge=B&&!!M.clearcoatNormalMap,se=B&&!!M.clearcoatRoughnessMap,ue=J&&!!M.iridescenceMap,Fe=J&&!!M.iridescenceThicknessMap,Ne=Z&&!!M.sheenColorMap,Me=Z&&!!M.sheenRoughnessMap,$e=!!M.specularMap,Ve=!!M.specularColorMap,ct=!!M.specularIntensityMap,I=fe&&!!M.transmissionMap,he=fe&&!!M.thicknessMap,K=!!M.gradientMap,ee=!!M.alphaMap,ce=M.alphaTest>0,pe=!!M.alphaHash,He=!!M.extensions;let ht=Hs;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ht=n.toneMapping);const Vt={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Ye,fragmentShader:Y,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Le,batchingColor:Le&&z._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&z.instanceColor!==null,instancingMorph:Oe&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:hl,alphaToCoverage:!!M.alphaToCoverage,map:Ze,matcap:qe,envMap:ye,envMapMode:ye&&X.mapping,envMapCubeUVHeight:U,aoMap:L,lightMap:mt,bumpMap:ke,normalMap:V,displacementMap:h&&Ee,emissiveMap:lt,normalMapObjectSpace:V&&M.normalMapType===dR,normalMapTangentSpace:V&&M.normalMapType===sE,metalnessMap:Se,roughnessMap:R,anisotropy:T,anisotropyMap:le,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:Ge,clearcoatRoughnessMap:se,dispersion:Q,iridescence:J,iridescenceMap:ue,iridescenceThicknessMap:Fe,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:Me,specularMap:$e,specularColorMap:Ve,specularIntensityMap:ct,transmission:fe,transmissionMap:I,thicknessMap:he,gradientMap:K,opaque:M.transparent===!1&&M.blending===Wa&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:ce,alphaHash:pe,combine:M.combine,mapUv:Ze&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:mt&&_(M.lightMap.channel),bumpMapUv:ke&&_(M.bumpMap.channel),normalMapUv:V&&_(M.normalMap.channel),displacementMapUv:Ee&&_(M.displacementMap.channel),emissiveMapUv:lt&&_(M.emissiveMap.channel),metalnessMapUv:Se&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:le&&_(M.anisotropyMap.channel),clearcoatMapUv:de&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(M.sheenRoughnessMap.channel),specularMapUv:$e&&_(M.specularMap.channel),specularColorMapUv:Ve&&_(M.specularColorMap.channel),specularIntensityMapUv:ct&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:he&&_(M.thicknessMap.channel),alphaMapUv:ee&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(V||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(Ze||ee),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Sr,flipSided:M.side===Kn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:He&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&M.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=u.has(1),Vt.vertexUv2s=u.has(2),Vt.vertexUv3s=u.has(3),u.clear(),Vt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=g[M.type];let D;if(S){const F=vr[S];D=bh.clone(F.uniforms)}else D=M.uniforms;return D}function A(M,S){let D;for(let F=0,z=c.length;F<z;F++){const q=c[F];if(q.cacheKey===S){D=q,++D.usedTimes;break}}return D===void 0&&(D=new OL(n,S,M,s),c.push(D)),D}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:b}}function HL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function GL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function sy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function oy(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function u(f,h){t.length>1&&t.sort(f||GL),i.length>1&&i.sort(h||sy),r.length>1&&r.sort(h||sy)}function c(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function WL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new oy,n.set(i,[o])):r>=s.length?(o=new oy,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new tt};break;case"SpotLight":t={position:new N,direction:new N,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function YL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qL=0;function $L(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jL(n){const e=new XL,t=YL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new bt,o=new bt;function a(u){let c=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,x=0,y=0,A=0,w=0,E=0;u.sort($L);for(let M=0,S=u.length;M<S;M++){const D=u[M],F=D.color,z=D.intensity,q=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=F.r*z,f+=F.g*z,h+=F.b*z;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],z);E++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,U=t.get(D);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=D.shadow.matrix,v++}i.directional[d]=G,d++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(F).multiplyScalar(z),G.distance=q,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[_]=G;const X=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,X.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=X.matrix,D.castShadow){const U=t.get(D);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=j,y++}_++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(F).multiplyScalar(z),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const X=D.shadow,U=t.get(D);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,U.shadowCameraNear=X.camera.near,U.shadowCameraFar=X.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=G,g++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(z),G.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==v||b.numPointShadows!==x||b.numSpotShadows!==y||b.numSpotMaps!==A||b.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,b.directionalLength=d,b.pointLength=g,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=v,b.numPointShadows=x,b.numSpotShadows=y,b.numSpotMaps=A,b.numLightProbes=E,i.version=qL++)}function l(u,c){let f=0,h=0,d=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const x=u[p];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function ay(n){const e=new jL(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ay(n),e.set(r,[a])):s>=o.length?(a=new ay(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ZL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JL(n,e,t){let i=new a0;const r=new De,s=new De,o=new Mt,a=new vb({depthPacking:hR}),l=new xb,u={},c=t.maxTextureSize,f={[$s]:Kn,[Kn]:$s,[Sr]:Sr},h=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:ZL,fragmentShader:QL}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new Pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $i(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X1;let p=this.type;this.render=function(w,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Qr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==kr&&this.type===kr,q=p===kr&&this.type!==kr;for(let j=0,G=w.length;j<G;j++){const X=w[j],U=X.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const $=U.getFrameExtents();if(r.multiply($),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,U.mapSize.y=s.y)),U.map===null||z===!0||q===!0){const te=this.type!==kr?{minFilter:fr,magFilter:fr}:{};U.map!==null&&U.map.dispose(),U.map=new hr(r.x,r.y,te),U.map.texture.name=X.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const P=U.getViewportCount();for(let te=0;te<P;te++){const _e=U.getViewport(te);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),F.viewport(o),U.updateMatrices(X,te),i=U.getFrustum(),y(E,b,U.camera,X,this.type)}U.isPointLightShadow!==!0&&this.type===kr&&v(U,b),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,D)};function v(w,E){const b=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,b,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,b,d,_,null)}function x(w,E,b,M){let S=null;const D=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=b.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=S.uuid,z=E.uuid;let q=u[F];q===void 0&&(q={},u[F]=q);let j=q[z];j===void 0&&(j=S.clone(),q[z]=j,E.addEventListener("dispose",A)),S=j}if(S.visible=E.visible,S.wireframe=E.wireframe,M===kr?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=b}return S}function y(w,E,b,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===kr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const z=e.update(w),q=w.material;if(Array.isArray(q)){const j=z.groups;for(let G=0,X=j.length;G<X;G++){const U=j[G],$=q[U.materialIndex];if($&&$.visible){const P=x(w,$,M,S);w.onBeforeShadow(n,w,E,b,z,P,U),n.renderBufferDirect(b,null,z,P,w,U),w.onAfterShadow(n,w,E,b,z,P,U)}}}else if(q.visible){const j=x(w,q,M,S);w.onBeforeShadow(n,w,E,b,z,j,null),n.renderBufferDirect(b,null,z,j,w,null),w.onAfterShadow(n,w,E,b,z,j,null)}}const F=w.children;for(let z=0,q=F.length;z<q;z++)y(F[z],E,b,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(const b in u){const M=u[b],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const e3={[Ym]:qm,[$m]:Zm,[jm]:Qm,[al]:Km,[qm]:Ym,[Zm]:$m,[Qm]:jm,[Km]:al};function t3(n,e){function t(){let I=!1;const he=new Mt;let K=null;const ee=new Mt(0,0,0,0);return{setMask:function(ce){K!==ce&&!I&&(n.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){I=ce},setClear:function(ce,pe,He,ht,Vt){Vt===!0&&(ce*=ht,pe*=ht,He*=ht),he.set(ce,pe,He,ht),ee.equals(he)===!1&&(n.clearColor(ce,pe,He,ht),ee.copy(he))},reset:function(){I=!1,K=null,ee.set(-1,0,0,0)}}}function i(){let I=!1,he=!1,K=null,ee=null,ce=null;return{setReversed:function(pe){if(he!==pe){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const ht=ce;ce=null,this.setClear(ht)}he=pe},getReversed:function(){return he},setTest:function(pe){pe?re(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(pe){K!==pe&&!I&&(n.depthMask(pe),K=pe)},setFunc:function(pe){if(he&&(pe=e3[pe]),ee!==pe){switch(pe){case Ym:n.depthFunc(n.NEVER);break;case qm:n.depthFunc(n.ALWAYS);break;case $m:n.depthFunc(n.LESS);break;case al:n.depthFunc(n.LEQUAL);break;case jm:n.depthFunc(n.EQUAL);break;case Km:n.depthFunc(n.GEQUAL);break;case Zm:n.depthFunc(n.GREATER);break;case Qm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=pe}},setLocked:function(pe){I=pe},setClear:function(pe){ce!==pe&&(he&&(pe=1-pe),n.clearDepth(pe),ce=pe)},reset:function(){I=!1,K=null,ee=null,ce=null,he=!1}}}function r(){let I=!1,he=null,K=null,ee=null,ce=null,pe=null,He=null,ht=null,Vt=null;return{setTest:function(xe){I||(xe?re(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(xe){he!==xe&&!I&&(n.stencilMask(xe),he=xe)},setFunc:function(xe,be,je){(K!==xe||ee!==be||ce!==je)&&(n.stencilFunc(xe,be,je),K=xe,ee=be,ce=je)},setOp:function(xe,be,je){(pe!==xe||He!==be||ht!==je)&&(n.stencilOp(xe,be,je),pe=xe,He=be,ht=je)},setLocked:function(xe){I=xe},setClear:function(xe){Vt!==xe&&(n.clearStencil(xe),Vt=xe)},reset:function(){I=!1,he=null,K=null,ee=null,ce=null,pe=null,He=null,ht=null,Vt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,A=null,w=null,E=new tt(0,0,0),b=0,M=!1,S=null,D=null,F=null,z=null,q=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(U)[1]),G=X>=1):U.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),G=X>=2);let $=null,P={};const te=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Ye=new Mt().fromArray(te),Y=new Mt().fromArray(_e);function ne(I,he,K,ee){const ce=new Uint8Array(4),pe=n.createTexture();n.bindTexture(I,pe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<K;He++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(he+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return pe}const ae={};ae[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(al),ke(!1),V(nx),re(n.CULL_FACE),L(Qr);function re(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function Ae(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Oe(I,he){return f[I]!==he?(n.bindFramebuffer(I,he),f[I]=he,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Le(I,he){let K=d,ee=!1;if(I){K=h.get(he),K===void 0&&(K=[],h.set(he,K));const ce=I.textures;if(K.length!==ce.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,He=ce.length;pe<He;pe++)K[pe]=n.COLOR_ATTACHMENT0+pe;K.length=ce.length,ee=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ee=!0);ee&&n.drawBuffers(K)}function Ze(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const qe={[_o]:n.FUNC_ADD,[zC]:n.FUNC_SUBTRACT,[BC]:n.FUNC_REVERSE_SUBTRACT};qe[VC]=n.MIN,qe[HC]=n.MAX;const ye={[GC]:n.ZERO,[WC]:n.ONE,[XC]:n.SRC_COLOR,[Wm]:n.SRC_ALPHA,[ZC]:n.SRC_ALPHA_SATURATE,[jC]:n.DST_COLOR,[qC]:n.DST_ALPHA,[YC]:n.ONE_MINUS_SRC_COLOR,[Xm]:n.ONE_MINUS_SRC_ALPHA,[KC]:n.ONE_MINUS_DST_COLOR,[$C]:n.ONE_MINUS_DST_ALPHA,[QC]:n.CONSTANT_COLOR,[JC]:n.ONE_MINUS_CONSTANT_COLOR,[eR]:n.CONSTANT_ALPHA,[tR]:n.ONE_MINUS_CONSTANT_ALPHA};function L(I,he,K,ee,ce,pe,He,ht,Vt,xe){if(I===Qr){_===!0&&(Ae(n.BLEND),_=!1);return}if(_===!1&&(re(n.BLEND),_=!0),I!==kC){if(I!==m||xe!==M){if((p!==_o||y!==_o)&&(n.blendEquation(n.FUNC_ADD),p=_o,y=_o),xe)switch(I){case Wa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ah:n.blendFunc(n.ONE,n.ONE);break;case ix:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rx:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ah:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ix:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rx:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,x=null,A=null,w=null,E.set(0,0,0),b=0,m=I,M=xe}return}ce=ce||he,pe=pe||K,He=He||ee,(he!==p||ce!==y)&&(n.blendEquationSeparate(qe[he],qe[ce]),p=he,y=ce),(K!==v||ee!==x||pe!==A||He!==w)&&(n.blendFuncSeparate(ye[K],ye[ee],ye[pe],ye[He]),v=K,x=ee,A=pe,w=He),(ht.equals(E)===!1||Vt!==b)&&(n.blendColor(ht.r,ht.g,ht.b,Vt),E.copy(ht),b=Vt),m=I,M=!1}function mt(I,he){I.side===Sr?Ae(n.CULL_FACE):re(n.CULL_FACE);let K=I.side===Kn;he&&(K=!K),ke(K),I.blending===Wa&&I.transparent===!1?L(Qr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ee=I.stencilWrite;a.setTest(ee),ee&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function V(I){I!==FC?(re(n.CULL_FACE),I!==D&&(I===nx?n.cullFace(n.BACK):I===OC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),D=I}function Ee(I){I!==F&&(G&&n.lineWidth(I),F=I)}function lt(I,he,K){I?(re(n.POLYGON_OFFSET_FILL),(z!==he||q!==K)&&(n.polygonOffset(he,K),z=he,q=K)):Ae(n.POLYGON_OFFSET_FILL)}function Se(I){I?re(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function R(I){I===void 0&&(I=n.TEXTURE0+j-1),$!==I&&(n.activeTexture(I),$=I)}function T(I,he,K){K===void 0&&($===null?K=n.TEXTURE0+j-1:K=$);let ee=P[K];ee===void 0&&(ee={type:void 0,texture:void 0},P[K]=ee),(ee.type!==I||ee.texture!==he)&&($!==K&&(n.activeTexture(K),$=K),n.bindTexture(I,he||ae[I]),ee.type=I,ee.texture=he)}function B(){const I=P[$];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){Ye.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function Me(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function $e(I,he){let K=u.get(he);K===void 0&&(K=new WeakMap,u.set(he,K));let ee=K.get(I);ee===void 0&&(ee=n.getUniformBlockIndex(he,I.name),K.set(I,ee))}function Ve(I,he){const ee=u.get(he).get(I);l.get(he)!==ee&&(n.uniformBlockBinding(he,ee,I.__bindingPointIndex),l.set(he,ee))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,P={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,A=null,w=null,E=new tt(0,0,0),b=0,M=!1,S=null,D=null,F=null,z=null,q=null,Ye.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ae,bindFramebuffer:Oe,drawBuffers:Le,useProgram:Ze,setBlending:L,setMaterial:mt,setFlipSided:ke,setCullFace:V,setLineWidth:Ee,setPolygonOffset:lt,setScissorTest:Se,activeTexture:R,bindTexture:T,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ue,texImage3D:Fe,updateUBOMapping:$e,uniformBlockBinding:Ve,texStorage2D:Ge,texStorage3D:se,texSubImage2D:Z,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:de,scissor:Ne,viewport:Me,reset:ct}}function n3(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new De,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return d?new OffscreenCanvas(R,T):Ku("canvas")}function _(R,T,B){let Q=1;const J=Se(R);if((J.width>B||J.height>B)&&(Q=B/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Q*J.width),fe=Math.floor(Q*J.height);f===void 0&&(f=g(Z,fe));const le=T?g(Z,fe):f;return le.width=Z,le.height=fe,le.getContext("2d").drawImage(R,0,0,Z,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+fe+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,T,B,Q,J=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=T;if(T===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),T===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),T===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),T===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),T===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),T===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),T===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),T===n.RGBA){const fe=J?Ch:pt.getTransfer(Q);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=fe===St?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(R,T){let B;return R?T===null||T===Wo||T===cl?B=n.DEPTH24_STENCIL8:T===$r?B=n.DEPTH32F_STENCIL8:T===ju&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wo||T===cl?B=n.DEPTH_COMPONENT24:T===$r?B=n.DEPTH_COMPONENT32F:T===ju&&(B=n.DEPTH_COMPONENT16),B}function A(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==fr&&R.minFilter!==Tr?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){const T=R.target;T.removeEventListener("dispose",w),b(T),T.isVideoTexture&&c.delete(T)}function E(R){const T=R.target;T.removeEventListener("dispose",E),S(T)}function b(R){const T=i.get(R);if(T.__webglInit===void 0)return;const B=R.source,Q=h.get(B);if(Q){const J=Q[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(R),Object.keys(Q).length===0&&h.delete(B)}i.remove(R)}function M(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const B=R.source,Q=h.get(B);delete Q[T.__cacheKey],o.memory.textures--}function S(R){const T=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let J=0;J<T.__webglFramebuffer[Q].length;J++)n.deleteFramebuffer(T.__webglFramebuffer[Q][J]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=R.textures;for(let Q=0,J=B.length;Q<J;Q++){const Z=i.get(B[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(R)}let D=0;function F(){D=0}function z(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function q(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function j(R,T){const B=i.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,R,T);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+T)}function G(R,T){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+T)}function X(R,T){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,T);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+T)}function U(R,T){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ne(B,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+T)}const $={[$u]:n.REPEAT,[To]:n.CLAMP_TO_EDGE,[tg]:n.MIRRORED_REPEAT},P={[fr]:n.NEAREST,[cR]:n.NEAREST_MIPMAP_NEAREST,[Bc]:n.NEAREST_MIPMAP_LINEAR,[Tr]:n.LINEAR,[Wd]:n.LINEAR_MIPMAP_NEAREST,[wo]:n.LINEAR_MIPMAP_LINEAR},te={[pR]:n.NEVER,[yR]:n.ALWAYS,[mR]:n.LESS,[oE]:n.LEQUAL,[gR]:n.EQUAL,[xR]:n.GEQUAL,[_R]:n.GREATER,[vR]:n.NOTEQUAL};function _e(R,T){if(T.type===$r&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Tr||T.magFilter===Wd||T.magFilter===Bc||T.magFilter===wo||T.minFilter===Tr||T.minFilter===Wd||T.minFilter===Bc||T.minFilter===wo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,$[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,$[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,$[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,P[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fr||T.minFilter!==Bc&&T.minFilter!==wo||T.type===$r&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ye(R,T){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",w));const Q=T.source;let J=h.get(Q);J===void 0&&(J={},h.set(Q,J));const Z=q(T);if(Z!==R.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[Z].usedTimes++;const fe=J[R.__cacheKey];fe!==void 0&&(J[R.__cacheKey].usedTimes--,fe.usedTimes===0&&M(T)),R.__cacheKey=Z,R.__webglTexture=J[Z].texture}return B}function Y(R,T,B){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const J=Ye(R,T),Z=T.source;t.bindTexture(Q,R.__webglTexture,n.TEXTURE0+B);const fe=i.get(Z);if(Z.version!==fe.__version||J===!0){t.activeTexture(n.TEXTURE0+B);const le=pt.getPrimaries(pt.workingColorSpace),de=T.colorSpace===Es?null:pt.getPrimaries(T.colorSpace),Ge=T.colorSpace===Es||le===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let se=_(T.image,!1,r.maxTextureSize);se=lt(T,se);const ue=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let Ne=x(T.internalFormat,ue,Fe,T.colorSpace,T.isVideoTexture);_e(Q,T);let Me;const $e=T.mipmaps,Ve=T.isVideoTexture!==!0,ct=fe.__version===void 0||J===!0,I=Z.dataReady,he=A(T,se);if(T.isDepthTexture)Ne=y(T.format===fl,T.type),ct&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ne,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ne,se.width,se.height,0,ue,Fe,null));else if(T.isDataTexture)if($e.length>0){Ve&&ct&&t.texStorage2D(n.TEXTURE_2D,he,Ne,$e[0].width,$e[0].height);for(let K=0,ee=$e.length;K<ee;K++)Me=$e[K],Ve?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ue,Fe,Me.data):t.texImage2D(n.TEXTURE_2D,K,Ne,Me.width,Me.height,0,ue,Fe,Me.data);T.generateMipmaps=!1}else Ve?(ct&&t.texStorage2D(n.TEXTURE_2D,he,Ne,se.width,se.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ue,Fe,se.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,se.width,se.height,0,ue,Fe,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ve&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ne,$e[0].width,$e[0].height,se.depth);for(let K=0,ee=$e.length;K<ee;K++)if(Me=$e[K],T.format!==lr)if(ue!==null)if(Ve){if(I)if(T.layerUpdates.size>0){const ce=Ox(Me.width,Me.height,T.format,T.type);for(const pe of T.layerUpdates){const He=Me.data.subarray(pe*ce/Me.data.BYTES_PER_ELEMENT,(pe+1)*ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,pe,Me.width,Me.height,1,ue,He)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,se.depth,ue,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ne,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,se.depth,ue,Fe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Ne,Me.width,Me.height,se.depth,0,ue,Fe,Me.data)}else{Ve&&ct&&t.texStorage2D(n.TEXTURE_2D,he,Ne,$e[0].width,$e[0].height);for(let K=0,ee=$e.length;K<ee;K++)Me=$e[K],T.format!==lr?ue!==null?Ve?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ue,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,ue,Fe,Me.data):t.texImage2D(n.TEXTURE_2D,K,Ne,Me.width,Me.height,0,ue,Fe,Me.data)}else if(T.isDataArrayTexture)if(Ve){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ne,se.width,se.height,se.depth),I)if(T.layerUpdates.size>0){const K=Ox(se.width,se.height,T.format,T.type);for(const ee of T.layerUpdates){const ce=se.data.subarray(ee*K/se.data.BYTES_PER_ELEMENT,(ee+1)*K/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ue,Fe,ce)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Fe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,ue,Fe,se.data);else if(T.isData3DTexture)Ve?(ct&&t.texStorage3D(n.TEXTURE_3D,he,Ne,se.width,se.height,se.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Fe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,ue,Fe,se.data);else if(T.isFramebufferTexture){if(ct)if(Ve)t.texStorage2D(n.TEXTURE_2D,he,Ne,se.width,se.height);else{let K=se.width,ee=se.height;for(let ce=0;ce<he;ce++)t.texImage2D(n.TEXTURE_2D,ce,Ne,K,ee,0,ue,Fe,null),K>>=1,ee>>=1}}else if($e.length>0){if(Ve&&ct){const K=Se($e[0]);t.texStorage2D(n.TEXTURE_2D,he,Ne,K.width,K.height)}for(let K=0,ee=$e.length;K<ee;K++)Me=$e[K],Ve?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ue,Fe,Me):t.texImage2D(n.TEXTURE_2D,K,Ne,ue,Fe,Me);T.generateMipmaps=!1}else if(Ve){if(ct){const K=Se(se);t.texStorage2D(n.TEXTURE_2D,he,Ne,K.width,K.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Fe,se)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ue,Fe,se);m(T)&&p(Q),fe.__version=Z.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ne(R,T,B){if(T.image.length!==6)return;const Q=Ye(R,T),J=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const Z=i.get(J);if(J.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const fe=pt.getPrimaries(pt.workingColorSpace),le=T.colorSpace===Es?null:pt.getPrimaries(T.colorSpace),de=T.colorSpace===Es||fe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ge=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!Ge&&!se?ue[ee]=_(T.image[ee],!0,r.maxCubemapSize):ue[ee]=se?T.image[ee].image:T.image[ee],ue[ee]=lt(T,ue[ee]);const Fe=ue[0],Ne=s.convert(T.format,T.colorSpace),Me=s.convert(T.type),$e=x(T.internalFormat,Ne,Me,T.colorSpace),Ve=T.isVideoTexture!==!0,ct=Z.__version===void 0||Q===!0,I=J.dataReady;let he=A(T,Fe);_e(n.TEXTURE_CUBE_MAP,T);let K;if(Ge){Ve&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,$e,Fe.width,Fe.height);for(let ee=0;ee<6;ee++){K=ue[ee].mipmaps;for(let ce=0;ce<K.length;ce++){const pe=K[ce];T.format!==lr?Ne!==null?Ve?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,$e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,0,0,pe.width,pe.height,Ne,Me,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,$e,pe.width,pe.height,0,Ne,Me,pe.data)}}}else{if(K=T.mipmaps,Ve&&ct){K.length>0&&he++;const ee=Se(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,Ne,Me,ue[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,ue[ee].width,ue[ee].height,0,Ne,Me,ue[ee].data);for(let ce=0;ce<K.length;ce++){const He=K[ce].image[ee].image;Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,0,0,He.width,He.height,Ne,Me,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,$e,He.width,He.height,0,Ne,Me,He.data)}}else{Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,Me,ue[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Ne,Me,ue[ee]);for(let ce=0;ce<K.length;ce++){const pe=K[ce];Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,0,0,Ne,Me,pe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,$e,Ne,Me,pe.image[ee])}}}m(T)&&p(n.TEXTURE_CUBE_MAP),Z.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ae(R,T,B,Q,J,Z){const fe=s.convert(B.format,B.colorSpace),le=s.convert(B.type),de=x(B.internalFormat,fe,le,B.colorSpace),Ge=i.get(T),se=i.get(B);if(se.__renderTarget=T,!Ge.__hasExternalTextures){const ue=Math.max(1,T.width>>Z),Fe=Math.max(1,T.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,de,ue,Fe,T.depth,0,fe,le,null):t.texImage2D(J,Z,de,ue,Fe,0,fe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),V(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,J,se.__webglTexture,0,ke(T)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,J,se.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(R,T,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){const Q=T.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Z=y(T.stencilBuffer,J),fe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=ke(T);V(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Z,T.width,T.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Z,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Z,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,R)}else{const Q=T.textures;for(let J=0;J<Q.length;J++){const Z=Q[J],fe=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),de=x(Z.internalFormat,fe,le,Z.colorSpace),Ge=ke(T);B&&V(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,de,T.width,T.height):V(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,de,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,de,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const J=Q.__webglTexture,Z=ke(T);if(T.depthTexture.format===Xa)V(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(T.depthTexture.format===fl)V(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const T=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=Q}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,R)}else if(B){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),re(T.__webglDepthbuffer[Q],R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),re(T.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(R,T,B){const Q=i.get(R);T!==void 0&&ae(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Oe(R)}function Ze(R){const T=R.texture,B=i.get(R),Q=i.get(T);R.addEventListener("dispose",E);const J=R.textures,Z=R.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let de=0;de<T.mipmaps.length;de++)B.__webglFramebuffer[le][de]=n.createFramebuffer()}else B.__webglFramebuffer[le]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)B.__webglFramebuffer[le]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(fe)for(let le=0,de=J.length;le<de;le++){const Ge=i.get(J[le]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&V(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const de=J[le];B.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const Ge=s.convert(de.format,de.colorSpace),se=s.convert(de.type),ue=x(de.internalFormat,Ge,se,de.colorSpace,R.isXRRenderTarget===!0),Fe=ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ue,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,B.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),re(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),_e(n.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)ae(B.__webglFramebuffer[le][de],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else ae(B.__webglFramebuffer[le],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(T)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let le=0,de=J.length;le<de;le++){const Ge=J[le],se=i.get(Ge);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),_e(n.TEXTURE_2D,Ge),ae(B.__webglFramebuffer,R,Ge,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(Ge)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),_e(le,T),T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)ae(B.__webglFramebuffer[de],R,T,n.COLOR_ATTACHMENT0,le,de);else ae(B.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,le,0);m(T)&&p(le),t.unbindTexture()}R.depthBuffer&&Oe(R)}function qe(R){const T=R.textures;for(let B=0,Q=T.length;B<Q;B++){const J=T[B];if(m(J)){const Z=v(R),fe=i.get(J).__webglTexture;t.bindTexture(Z,fe),p(Z),t.unbindTexture()}}}const ye=[],L=[];function mt(R){if(R.samples>0){if(V(R)===!1){const T=R.textures,B=R.width,Q=R.height;let J=n.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(R),le=T.length>1;if(le)for(let de=0;de<T.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<T.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ge=i.get(T[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,B,Q,0,0,B,Q,J,n.NEAREST),l===!0&&(ye.length=0,L.length=0,ye.push(n.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ye.push(Z),L.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<T.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ge=i.get(T[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function ke(R){return Math.min(r.maxSamples,R.samples)}function V(R){const T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ee(R){const T=o.render.frame;c.get(R)!==T&&(c.set(R,T),R.update())}function lt(R,T){const B=R.colorSpace,Q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==hl&&B!==Es&&(pt.getTransfer(B)===St?(Q!==lr||J!==as)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=U,this.rebindTextures=Le,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=V}function i3(n,e){function t(i,r=Es){let s;const o=pt.getTransfer(r);if(i===as)return n.UNSIGNED_BYTE;if(i===J_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===e0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Z1)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===j1)return n.BYTE;if(i===K1)return n.SHORT;if(i===ju)return n.UNSIGNED_SHORT;if(i===Q_)return n.INT;if(i===Wo)return n.UNSIGNED_INT;if(i===$r)return n.FLOAT;if(i===Jr)return n.HALF_FLOAT;if(i===Q1)return n.ALPHA;if(i===J1)return n.RGB;if(i===lr)return n.RGBA;if(i===eE)return n.LUMINANCE;if(i===tE)return n.LUMINANCE_ALPHA;if(i===Xa)return n.DEPTH_COMPONENT;if(i===fl)return n.DEPTH_STENCIL;if(i===nE)return n.RED;if(i===t0)return n.RED_INTEGER;if(i===iE)return n.RG;if(i===n0)return n.RG_INTEGER;if(i===i0)return n.RGBA_INTEGER;if(i===Of||i===kf||i===zf||i===Bf)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Of)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Of)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ng||i===ig||i===rg||i===sg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ng)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ig)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===og||i===ag||i===lg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===og||i===ag)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ug||i===cg||i===fg||i===hg||i===dg||i===pg||i===mg||i===gg||i===_g||i===vg||i===xg||i===yg||i===Sg||i===Mg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ug)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_g)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mg)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vf||i===Eg||i===Tg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vf)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rE||i===wg||i===Ag||i===Cg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ag)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const r3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Nn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new si({vertexShader:r3,fragmentShader:s3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $i(new lc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a3 extends vl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,g=null;const _=new o3,m=t.getContextAttributes();let p=null,v=null;const x=[],y=[],A=new De;let w=null;const E=new Ei;E.viewport=new Mt;const b=new Ei;b.viewport=new Mt;const M=[E,b],S=new Cb;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=x[Y];return ne===void 0&&(ne=new fp,x[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=x[Y];return ne===void 0&&(ne=new fp,x[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=x[Y];return ne===void 0&&(ne=new fp,x[Y]=ne),ne.getHandSpace()};function z(Y){const ne=y.indexOf(Y.inputSource);if(ne===-1)return;const ae=x[ne];ae!==void 0&&(ae.update(Y.inputSource,Y.frame,u||o),ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<x.length;Y++){const ne=y[Y];ne!==null&&(y[Y]=null,x[Y].disconnect(ne))}D=null,F=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,v=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,re=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?fl:Xa,re=m.stencil?cl:Wo);const Oe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new hr(h.textureWidth,h.textureHeight,{format:lr,type:as,depthTexture:new vE(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new hr(d.framebufferWidth,d.framebufferHeight,{format:lr,type:as,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(Y){for(let ne=0;ne<Y.removed.length;ne++){const ae=Y.removed[ne],re=y.indexOf(ae);re>=0&&(y[re]=null,x[re].disconnect(ae))}for(let ne=0;ne<Y.added.length;ne++){const ae=Y.added[ne];let re=y.indexOf(ae);if(re===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=y.length){y.push(ae),re=Oe;break}else if(y[Oe]===null){y[Oe]=ae,re=Oe;break}if(re===-1)break}const Ae=x[re];Ae&&Ae.connect(ae)}}const G=new N,X=new N;function U(Y,ne,ae){G.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const re=G.distanceTo(X),Ae=ne.projectionMatrix.elements,Oe=ae.projectionMatrix.elements,Le=Ae[14]/(Ae[10]-1),Ze=Ae[14]/(Ae[10]+1),qe=(Ae[9]+1)/Ae[5],ye=(Ae[9]-1)/Ae[5],L=(Ae[8]-1)/Ae[0],mt=(Oe[8]+1)/Oe[0],ke=Le*L,V=Le*mt,Ee=re/(-L+mt),lt=Ee*-L;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Se=Le+Ee,R=Ze+Ee,T=ke-lt,B=V+(re-lt),Q=qe*Ze/R*Se,J=ye*Ze/R*Se;Y.projectionMatrix.makePerspective(T,B,Q,J,Se,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,ae=Y.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),S.near=b.near=E.near=ne,S.far=b.far=E.far=ae,(D!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,F=S.far),E.layers.mask=Y.layers.mask|2,b.layers.mask=Y.layers.mask|4,S.layers.mask=E.layers.mask|b.layers.mask;const re=Y.parent,Ae=S.cameras;$(S,re);for(let Oe=0;Oe<Ae.length;Oe++)$(Ae[Oe],re);Ae.length===2?U(S,E,b):S.projectionMatrix.copy(E.projectionMatrix),P(Y,S,re)};function P(Y,ne,ae){ae===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Rg*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let te=null;function _e(Y,ne){if(c=ne.getViewerPose(u||o),g=ne,c!==null){const ae=c.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let re=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let Le=0;Le<ae.length;Le++){const Ze=ae[Le];let qe=null;if(d!==null)qe=d.getViewport(Ze);else{const L=f.getViewSubImage(h,Ze);qe=L.viewport,Le===0&&(e.setRenderTargetTextures(v,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let ye=M[Le];ye===void 0&&(ye=new Ei,ye.layers.enable(Le),ye.viewport=new Mt,M[Le]=ye),ye.matrix.fromArray(Ze.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ze.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(qe.x,qe.y,qe.width,qe.height),Le===0&&(S.matrix.copy(ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(ye)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Le=f.getDepthInformation(ae[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,r.renderState)}}for(let ae=0;ae<x.length;ae++){const re=y[ae],Ae=x[ae];re!==null&&Ae!==void 0&&Ae.update(re,ne,u||o)}te&&te(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ye=new wE;Ye.setAnimationLoop(_e),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}}const ao=new Lr,l3=new bt;function u3(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dE(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,ao.copy(y),ao.x*=-1,ao.y*=-1,ao.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),m.envMapRotation.value.setFromMatrix4(l3.makeRotationFromEuler(ao)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function c3(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),A=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,S=b.length;M<S;M++){const D=b[M];if(d(D,w,M,A)===!0){const F=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let j=0;j<z.length;j++){const G=z[j],X=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,F+q,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,q),q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,x,y,A){const w=v.value,E=x+"_"+y;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const b=A[E];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return A[E]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function g(v){const x=v.uniforms;let y=0;const A=16;for(let E=0,b=x.length;E<b;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,D=M.length;S<D;S++){const F=M[S],z=Array.isArray(F.value)?F.value:[F.value];for(let q=0,j=z.length;q<j;q++){const G=z[q],X=_(G),U=y%A,$=U%X.boundary,P=U+$;y+=$,P!==0&&A-P<X.storage&&(y+=A-P),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=X.storage}}}const w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class f3{constructor(e={}){const{canvas:t=MR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bi,this.toneMapping=Hs,this.toneMappingExposure=1;const y=this;let A=!1,w=0,E=0,b=null,M=-1,S=null;const D=new Mt,F=new Mt;let z=null;const q=new tt(0);let j=0,G=t.width,X=t.height,U=1,$=null,P=null;const te=new Mt(0,0,G,X),_e=new Mt(0,0,G,X);let Ye=!1;const Y=new a0;let ne=!1,ae=!1;this.transmissionResolutionScale=1;const re=new bt,Ae=new bt,Oe=new N,Le=new Mt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function ye(){return b===null?U:1}let L=i;function mt(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${K_}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",pe,!1),L===null){const k="webgl2";if(L=mt(k,C),L===null)throw mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ke,V,Ee,lt,Se,R,T,B,Q,J,Z,fe,le,de,Ge,se,ue,Fe,Ne,Me,$e,Ve,ct,I;function he(){ke=new SD(L),ke.init(),Ve=new i3(L,ke),V=new pD(L,ke,e,Ve),Ee=new t3(L,ke),V.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),lt=new TD(L),Se=new HL,R=new n3(L,ke,Ee,Se,V,Ve,lt),T=new gD(y),B=new yD(y),Q=new Pb(L),ct=new hD(L,Q),J=new MD(L,Q,lt,ct),Z=new AD(L,J,Q,lt),Ne=new wD(L,V,R),se=new mD(Se),fe=new VL(y,T,B,ke,V,ct,se),le=new u3(y,Se),de=new WL,Ge=new KL(ke),Fe=new fD(y,T,B,Ee,Z,d,l),ue=new JL(y,Z,V),I=new c3(L,lt,V,Ee),Me=new dD(L,ke,lt),$e=new ED(L,ke,lt),lt.programs=fe.programs,y.capabilities=V,y.extensions=ke,y.properties=Se,y.renderLists=de,y.shadowMap=ue,y.state=Ee,y.info=lt}he();const K=new a3(y,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=ke.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ke.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(G,X,!1))},this.getSize=function(C){return C.set(G,X)},this.setSize=function(C,k,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,X=k,t.width=Math.floor(C*U),t.height=Math.floor(k*U),W===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(G*U,X*U).floor()},this.setDrawingBufferSize=function(C,k,W){G=C,X=k,U=W,t.width=Math.floor(C*W),t.height=Math.floor(k*W),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,k,W,H){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,k,W,H),Ee.viewport(D.copy(te).multiplyScalar(U).round())},this.getScissor=function(C){return C.copy(_e)},this.setScissor=function(C,k,W,H){C.isVector4?_e.set(C.x,C.y,C.z,C.w):_e.set(C,k,W,H),Ee.scissor(F.copy(_e).multiplyScalar(U).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(C){Ee.setScissorTest(Ye=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){P=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,W=!0){let H=0;if(C){let O=!1;if(b!==null){const ie=b.texture.format;O=ie===i0||ie===n0||ie===t0}if(O){const ie=b.texture.type,ge=ie===as||ie===Wo||ie===ju||ie===cl||ie===J_||ie===e0,we=Fe.getClearColor(),Te=Fe.getClearAlpha(),Ie=we.r,Be=we.g,Ue=we.b;ge?(g[0]=Ie,g[1]=Be,g[2]=Ue,g[3]=Te,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ie,_[1]=Be,_[2]=Ue,_[3]=Te,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}k&&(H|=L.DEPTH_BUFFER_BIT),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Fe.dispose(),de.dispose(),Ge.dispose(),Se.dispose(),T.dispose(),B.dispose(),Z.dispose(),ct.dispose(),I.dispose(),fe.dispose(),K.dispose(),K.removeEventListener("sessionstart",me),K.removeEventListener("sessionend",Xe),Pe.stop()};function ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=lt.autoReset,k=ue.enabled,W=ue.autoUpdate,H=ue.needsUpdate,O=ue.type;he(),lt.autoReset=C,ue.enabled=k,ue.autoUpdate=W,ue.needsUpdate=H,ue.type=O}function pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function He(C){const k=C.target;k.removeEventListener("dispose",He),ht(k)}function ht(C){Vt(C),Se.remove(C)}function Vt(C){const k=Se.get(C).programs;k!==void 0&&(k.forEach(function(W){fe.releaseProgram(W)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,W,H,O,ie){k===null&&(k=Ze);const ge=O.isMesh&&O.matrixWorld.determinant()<0,we=pi(C,k,W,H,O);Ee.setMaterial(H,ge);let Te=W.index,Ie=1;if(H.wireframe===!0){if(Te=J.getWireframeAttribute(W),Te===void 0)return;Ie=2}const Be=W.drawRange,Ue=W.attributes.position;let Je=Be.start*Ie,_t=(Be.start+Be.count)*Ie;ie!==null&&(Je=Math.max(Je,ie.start*Ie),_t=Math.min(_t,(ie.start+ie.count)*Ie)),Te!==null?(Je=Math.max(Je,0),_t=Math.min(_t,Te.count)):Ue!=null&&(Je=Math.max(Je,0),_t=Math.min(_t,Ue.count));const jt=_t-Je;if(jt<0||jt===1/0)return;ct.setup(O,H,we,W,Te);let Ht,dt=Me;if(Te!==null&&(Ht=Q.get(Te),dt=$e,dt.setIndex(Ht)),O.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*ye()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(O.isLine){let ze=H.linewidth;ze===void 0&&(ze=1),Ee.setLineWidth(ze*ye()),O.isLineSegments?dt.setMode(L.LINES):O.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else O.isPoints?dt.setMode(L.POINTS):O.isSprite&&dt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)po("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))dt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ze=O._multiDrawStarts,vn=O._multiDrawCounts,vt=O._multiDrawCount,Ji=Te?Q.get(Te).bytesPerElement:1,jo=Se.get(H).currentProgram.getUniforms();for(let mi=0;mi<vt;mi++)jo.setValue(L,"_gl_DrawID",mi),dt.render(ze[mi]/Ji,vn[mi])}else if(O.isInstancedMesh)dt.renderInstances(Je,jt,O.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vn=Math.min(W.instanceCount,ze);dt.renderInstances(Je,jt,vn)}else dt.render(Je,jt)};function xe(C,k,W){C.transparent===!0&&C.side===Sr&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,Et(C,k,W),C.side=$s,C.needsUpdate=!0,Et(C,k,W),C.side=Sr):Et(C,k,W)}this.compile=function(C,k,W=null){W===null&&(W=C),p=Ge.get(W),p.init(k),x.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),C!==W&&C.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return C.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ie=O.material;if(ie)if(Array.isArray(ie))for(let ge=0;ge<ie.length;ge++){const we=ie[ge];xe(we,W,O),H.add(we)}else xe(ie,W,O),H.add(ie)}),p=x.pop(),H},this.compileAsync=function(C,k,W=null){const H=this.compile(C,k,W);return new Promise(O=>{function ie(){if(H.forEach(function(ge){Se.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){O(C);return}setTimeout(ie,10)}ke.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let be=null;function je(C){be&&be(C)}function me(){Pe.stop()}function Xe(){Pe.start()}const Pe=new wE;Pe.setAnimationLoop(je),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(C){be=C,K.setAnimationLoop(C),C===null?Pe.stop():Pe.start()},K.addEventListener("sessionstart",me),K.addEventListener("sessionend",Xe),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,k,b),p=Ge.get(C,x.length),p.init(k),x.push(p),Ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),ae=this.localClippingEnabled,ne=se.init(this.clippingPlanes,ae),m=de.get(C,v.length),m.init(),v.push(m),K.enabled===!0&&K.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&We(ie,k,-1/0,y.sortObjects)}We(C,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,P),qe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,qe&&Fe.addToRenderList(m,C),this.info.render.frame++,ne===!0&&se.beginShadows();const W=p.state.shadowsArray;ue.render(W,C,k),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ie=k.cameras;if(O.length>0)for(let ge=0,we=ie.length;ge<we;ge++){const Te=ie[ge];nt(H,O,C,Te)}qe&&Fe.render(C);for(let ge=0,we=ie.length;ge<we;ge++){const Te=ie[ge];Xt(m,C,Te,Te.viewport)}}else O.length>0&&nt(H,O,C,k),qe&&Fe.render(C),Xt(m,C,k);b!==null&&E===0&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(y,C,k),ct.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],ne===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function We(C,k,W,H){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){H&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const ge=Z.update(C),we=C.material;we.visible&&m.push(C,ge,we,W,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const ge=Z.update(C),we=C.material;if(H&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Le.copy(ge.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(we)){const Te=ge.groups;for(let Ie=0,Be=Te.length;Ie<Be;Ie++){const Ue=Te[Ie],Je=we[Ue.materialIndex];Je&&Je.visible&&m.push(C,ge,Je,W,Le.z,Ue)}}else we.visible&&m.push(C,ge,we,W,Le.z,null)}}const ie=C.children;for(let ge=0,we=ie.length;ge<we;ge++)We(ie[ge],k,W,H)}function Xt(C,k,W,H){const O=C.opaque,ie=C.transmissive,ge=C.transparent;p.setupLightsView(W),ne===!0&&se.setGlobalState(y.clippingPlanes,W),H&&Ee.viewport(D.copy(H)),O.length>0&&At(O,k,W),ie.length>0&&At(ie,k,W),ge.length>0&&At(ge,k,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function nt(C,k,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new hr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Jr:as,minFilter:wo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ie=p.state.transmissionRenderTarget[H.id],ge=H.viewport||D;ie.setSize(ge.z*y.transmissionResolutionScale,ge.w*y.transmissionResolutionScale);const we=y.getRenderTarget();y.setRenderTarget(ie),y.getClearColor(q),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),qe&&Fe.render(W);const Te=y.toneMapping;y.toneMapping=Hs;const Ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ne===!0&&se.setGlobalState(y.clippingPlanes,H),At(C,W,H),R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ue=0,Je=k.length;Ue<Je;Ue++){const _t=k[Ue],jt=_t.object,Ht=_t.geometry,dt=_t.material,ze=_t.group;if(dt.side===Sr&&jt.layers.test(H.layers)){const vn=dt.side;dt.side=Kn,dt.needsUpdate=!0,tn(jt,W,H,Ht,dt,ze),dt.side=vn,dt.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(ie),R.updateRenderTargetMipmap(ie))}y.setRenderTarget(we),y.setClearColor(q,j),Ie!==void 0&&(H.viewport=Ie),y.toneMapping=Te}function At(C,k,W){const H=k.isScene===!0?k.overrideMaterial:null;for(let O=0,ie=C.length;O<ie;O++){const ge=C[O],we=ge.object,Te=ge.geometry,Ie=H===null?ge.material:H,Be=ge.group;we.layers.test(W.layers)&&tn(we,k,W,Te,Ie,Be)}}function tn(C,k,W,H,O,ie){C.onBeforeRender(y,k,W,H,O,ie),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),O.onBeforeRender(y,k,W,H,C,ie),O.transparent===!0&&O.side===Sr&&O.forceSinglePass===!1?(O.side=Kn,O.needsUpdate=!0,y.renderBufferDirect(W,k,H,O,C,ie),O.side=$s,O.needsUpdate=!0,y.renderBufferDirect(W,k,H,O,C,ie),O.side=Sr):y.renderBufferDirect(W,k,H,O,C,ie),C.onAfterRender(y,k,W,H,O,ie)}function Et(C,k,W){k.isScene!==!0&&(k=Ze);const H=Se.get(C),O=p.state.lights,ie=p.state.shadowsArray,ge=O.state.version,we=fe.getParameters(C,O.state,ie,k,W),Te=fe.getProgramCacheKey(we);let Ie=H.programs;H.environment=C.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(C.isMeshStandardMaterial?B:T).get(C.envMap||H.environment),H.envMapRotation=H.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ie===void 0&&(C.addEventListener("dispose",He),Ie=new Map,H.programs=Ie);let Be=Ie.get(Te);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===ge)return gt(C,we),Be}else we.uniforms=fe.getUniforms(C),C.onBeforeCompile(we,y),Be=fe.acquireProgram(we,Te),Ie.set(Te,Be),H.uniforms=we.uniforms;const Ue=H.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ue.clippingPlanes=se.uniform),gt(C,we),H.needsLights=kn(C),H.lightsStateVersion=ge,H.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Be,H.uniformsList=null,Be}function Tt(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Gf.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function gt(C,k){const W=Se.get(C);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function pi(C,k,W,H,O){k.isScene!==!0&&(k=Ze),R.resetTextureUnits();const ie=k.fog,ge=H.isMeshStandardMaterial?k.environment:null,we=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:hl,Te=(H.isMeshStandardMaterial?B:T).get(H.envMap||ge),Ie=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,_t=!!W.morphAttributes.color;let jt=Hs;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(jt=y.toneMapping);const Ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=Ht!==void 0?Ht.length:0,ze=Se.get(H),vn=p.state.lights;if(ne===!0&&(ae===!0||C!==S)){const zn=C===S&&H.id===M;se.setState(H,C,zn)}let vt=!1;H.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==vn.state.version||ze.outputColorSpace!==we||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==Te||H.fog===!0&&ze.fog!==ie||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==se.numPlanes||ze.numIntersection!==se.numIntersection)||ze.vertexAlphas!==Ie||ze.vertexTangents!==Be||ze.morphTargets!==Ue||ze.morphNormals!==Je||ze.morphColors!==_t||ze.toneMapping!==jt||ze.morphTargetsCount!==dt)&&(vt=!0):(vt=!0,ze.__version=H.version);let Ji=ze.currentProgram;vt===!0&&(Ji=Et(H,k,O));let jo=!1,mi=!1,yl=!1;const Ut=Ji.getUniforms(),Fi=ze.uniforms;if(Ee.useProgram(Ji.program)&&(jo=!0,mi=!0,yl=!0),H.id!==M&&(M=H.id,mi=!0),jo||S!==C){Ee.buffers.depth.getReversed()?(re.copy(C.projectionMatrix),TR(re),wR(re),Ut.setValue(L,"projectionMatrix",re)):Ut.setValue(L,"projectionMatrix",C.projectionMatrix),Ut.setValue(L,"viewMatrix",C.matrixWorldInverse);const ei=Ut.map.cameraPosition;ei!==void 0&&ei.setValue(L,Oe.setFromMatrixPosition(C.matrixWorld)),V.logarithmicDepthBuffer&&Ut.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ut.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,mi=!0,yl=!0)}if(O.isSkinnedMesh){Ut.setOptional(L,O,"bindMatrix"),Ut.setOptional(L,O,"bindMatrixInverse");const zn=O.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Ut.setValue(L,"boneTexture",zn.boneTexture,R))}O.isBatchedMesh&&(Ut.setOptional(L,O,"batchingTexture"),Ut.setValue(L,"batchingTexture",O._matricesTexture,R),Ut.setOptional(L,O,"batchingIdTexture"),Ut.setValue(L,"batchingIdTexture",O._indirectTexture,R),Ut.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Ut.setValue(L,"batchingColorTexture",O._colorsTexture,R));const Oi=W.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Ne.update(O,W,Ji),(mi||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,Ut.setValue(L,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Fi.envMap.value=Te,Fi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&k.environment!==null&&(Fi.envMapIntensity.value=k.environmentIntensity),mi&&(Ut.setValue(L,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&Pt(Fi,yl),ie&&H.fog===!0&&le.refreshFogUniforms(Fi,ie),le.refreshMaterialUniforms(Fi,H,U,X,p.state.transmissionRenderTarget[C.id]),Gf.upload(L,Tt(ze),Fi,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Gf.upload(L,Tt(ze),Fi,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ut.setValue(L,"center",O.center),Ut.setValue(L,"modelViewMatrix",O.modelViewMatrix),Ut.setValue(L,"normalMatrix",O.normalMatrix),Ut.setValue(L,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const zn=H.uniformsGroups;for(let ei=0,nd=zn.length;ei<nd;ei++){const Js=zn[ei];I.update(Js,Ji),I.bind(Js,Ji)}}return Ji}function Pt(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function kn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,k,W){Se.get(C.texture).__webglTexture=k,Se.get(C.depthTexture).__webglTexture=W;const H=Se.get(C);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=W===void 0,H.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const W=Se.get(C);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const Ni=L.createFramebuffer();this.setRenderTarget=function(C,k=0,W=0){b=C,w=k,E=W;let H=!0,O=null,ie=!1,ge=!1;if(C){const Te=Se.get(C);if(Te.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Te.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(Te.__hasExternalTextures)R.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ue=C.depthTexture;if(Te.__boundDepthTexture!==Ue){if(Ue!==null&&Se.has(Ue)&&(C.width!==Ue.image.width||C.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ge=!0);const Be=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?O=Be[k][W]:O=Be[k],ie=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?O=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[W]:O=Be,D.copy(C.viewport),F.copy(C.scissor),z=C.scissorTest}else D.copy(te).multiplyScalar(U).floor(),F.copy(_e).multiplyScalar(U).floor(),z=Ye;if(W!==0&&(O=Ni),Ee.bindFramebuffer(L.FRAMEBUFFER,O)&&H&&Ee.drawBuffers(C,O),Ee.viewport(D),Ee.scissor(F),Ee.setScissorTest(z),ie){const Te=Se.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,W)}else if(ge){const Te=Se.get(C.texture),Ie=k;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,W,Ie)}else if(C!==null&&W!==0){const Te=Se.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(C,k,W,H,O,ie,ge){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Ee.bindFramebuffer(L.FRAMEBUFFER,we);try{const Te=C.texture,Ie=Te.format,Be=Te.type;if(!V.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-H&&W>=0&&W<=C.height-O&&L.readPixels(k,W,H,O,Ve.convert(Ie),Ve.convert(Be),ie)}finally{const Te=b!==null?Se.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(C,k,W,H,O,ie,ge){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){const Te=C.texture,Ie=Te.format,Be=Te.type;if(!V.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-H&&W>=0&&W<=C.height-O){Ee.bindFramebuffer(L.FRAMEBUFFER,we);const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(k,W,H,O,Ve.convert(Ie),Ve.convert(Be),0);const Je=b!==null?Se.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Je);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ER(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(Ue),L.deleteSync(_t),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,W=0){C.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const H=Math.pow(2,-W),O=Math.floor(C.image.width*H),ie=Math.floor(C.image.height*H),ge=k!==null?k.x:0,we=k!==null?k.y:0;R.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ge,we,O,ie),Ee.unbindTexture()};const nn=L.createFramebuffer(),rn=L.createFramebuffer();this.copyTextureToTexture=function(C,k,W=null,H=null,O=0,ie=null){C.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1],k=arguments[2],ie=arguments[3]||0,W=null),ie===null&&(O!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let ge,we,Te,Ie,Be,Ue,Je,_t,jt;const Ht=C.isCompressedTexture?C.mipmaps[ie]:C.image;if(W!==null)ge=W.max.x-W.min.x,we=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,Be=W.min.y,Ue=W.isBox3?W.min.z:0;else{const Oi=Math.pow(2,-O);ge=Math.floor(Ht.width*Oi),we=Math.floor(Ht.height*Oi),C.isDataArrayTexture?Te=Ht.depth:C.isData3DTexture?Te=Math.floor(Ht.depth*Oi):Te=1,Ie=0,Be=0,Ue=0}H!==null?(Je=H.x,_t=H.y,jt=H.z):(Je=0,_t=0,jt=0);const dt=Ve.convert(k.format),ze=Ve.convert(k.type);let vn;k.isData3DTexture?(R.setTexture3D(k,0),vn=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),vn=L.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),vn=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const vt=L.getParameter(L.UNPACK_ROW_LENGTH),Ji=L.getParameter(L.UNPACK_IMAGE_HEIGHT),jo=L.getParameter(L.UNPACK_SKIP_PIXELS),mi=L.getParameter(L.UNPACK_SKIP_ROWS),yl=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);const Ut=C.isDataArrayTexture||C.isData3DTexture,Fi=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const Oi=Se.get(C),zn=Se.get(k),ei=Se.get(Oi.__renderTarget),nd=Se.get(zn.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,ei.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,nd.__webglFramebuffer);for(let Js=0;Js<Te;Js++)Ut&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(C).__webglTexture,O,Ue+Js),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(k).__webglTexture,ie,jt+Js)),L.blitFramebuffer(Ie,Be,ge,we,Je,_t,ge,we,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||C.isRenderTargetTexture||Se.has(C)){const Oi=Se.get(C),zn=Se.get(k);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,nn),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,rn);for(let ei=0;ei<Te;ei++)Ut?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oi.__webglTexture,O,Ue+ei):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Oi.__webglTexture,O),Fi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zn.__webglTexture,ie,jt+ei):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zn.__webglTexture,ie),O!==0?L.blitFramebuffer(Ie,Be,ge,we,Je,_t,ge,we,L.COLOR_BUFFER_BIT,L.NEAREST):Fi?L.copyTexSubImage3D(vn,ie,Je,_t,jt+ei,Ie,Be,ge,we):L.copyTexSubImage2D(vn,ie,Je,_t,Ie,Be,ge,we);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Fi?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(vn,ie,Je,_t,jt,ge,we,Te,dt,ze,Ht.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(vn,ie,Je,_t,jt,ge,we,Te,dt,Ht.data):L.texSubImage3D(vn,ie,Je,_t,jt,ge,we,Te,dt,ze,Ht):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,Je,_t,ge,we,dt,ze,Ht.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,Je,_t,Ht.width,Ht.height,dt,Ht.data):L.texSubImage2D(L.TEXTURE_2D,ie,Je,_t,ge,we,dt,ze,Ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ji),L.pixelStorei(L.UNPACK_SKIP_PIXELS,jo),L.pixelStorei(L.UNPACK_SKIP_ROWS,mi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yl),ie===0&&k.generateMipmaps&&L.generateMipmap(vn),Ee.unbindTexture()},this.copyTextureToTexture3D=function(C,k,W=null,H=null,O=0){return C.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,H=arguments[1]||null,C=arguments[2],k=arguments[3],O=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,W,H,O)},this.initRenderTarget=function(C){Se.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Ee.unbindTexture()},this.resetState=function(){w=0,E=0,b=null,Ee.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}class uc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const h3=new TE(-1,1,1,-1,0,1);class d3 extends Zn{constructor(){super(),this.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gn([0,2,0,0,2,0],2))}}const p3=new d3;class PE{constructor(e){this._mesh=new $i(p3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,h3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class m3 extends uc{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const DE={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},g3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class pl extends uc{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hr(s,o,{type:Jr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new hr(s,o,{type:Jr});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new hr(s,o,{type:Jr});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=g3;this.highPassUniforms=bh.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new si({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new De(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=DE;this.copyUniforms=bh.clone(c.uniforms),this.blendMaterial=new si({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Ah,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new tt,this.oldClearAlpha=1,this.basic=new ed,this.fsQuad=new PE(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new De(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=pl.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=pl.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new si({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new si({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}pl.BlurDirectionX=new De(1,0);pl.BlurDirectionY=new De(0,1);class _3 extends uc{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof si?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bh.clone(e.uniforms),this.material=new si({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new PE(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ly extends uc{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class v3 extends uc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class x3{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new De);this._width=i.width,this._height=i.height,t=new hr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _3(DE),this.copyPass.material.blending=Qr,this.clock=new Rb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ly!==void 0&&(o instanceof ly?i=!0:o instanceof v3&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}cu.registerPlugin(st);function y3(){const[n,e]=Vr.useState(!1),[t,i]=Vr.useState(!1),r=Vr.useRef(new Audio("assets/audio/诺言_陈洁丽.mp3")),s=()=>{t||i(!0);const a=r.current;n?a.pause():a.play(),e(!n)};Vr.useEffect(()=>{const a=r.current,l=()=>e(!1);return a.addEventListener("ended",l),()=>{a.removeEventListener("ended",l)}},[]),Vr.useEffect(()=>{const a=r.current,l=()=>e(!1),u=()=>{document.hidden&&n?(a.pause(),e(!1)):t&&!n&&(a.play(),e(!0))};return a.addEventListener("ended",l),document.addEventListener("visibilitychange",u),()=>{a.removeEventListener("ended",l),document.removeEventListener("visibilitychange",u)}},[n]);function o(){const a={normalize:function(R,T,B){return(R-T)/(B-T)},interpolate:function(R,T,B){return T+(B-T)*R},map:function(R,T,B,Q,J){return R<T&&(R=T),R>B&&(R=B),this.interpolate(this.normalize(R,T,B),Q,J)}},l=window.innerWidth,u=window.innerHeight;let c,f={bloomStrength:.9,bloomThreshold:0,bloomRadius:0},h=new f3({canvas:document.querySelector("canvas"),antialias:!0,shadowMapEnabled:!0,shadowMapType:Y1});h.setSize(l,u);let d=new jR;d.fog=new o0(1656724,0,100);let g=3.14159,_=0,m=new Ei(45,l/u,.001,200);m.rotation.y=g,m.rotation.z=_;let p=new Kl;p.position.z=400,p.add(m),d.add(p);let v=new m3(d,m),x=new pl(new De(window.innerWidth,window.innerHeight),1.5,.4,.85);x.renderToScreen=!0,x.threshold=f.bloomThreshold,x.strength=f.bloomStrength,x.radius=f.bloomRadius,c=new x3(h),c.setSize(window.innerWidth,window.innerHeight),c.addPass(v),c.addPass(x);const y=[[10,89,0],[50,88,10],[76,139,20],[126,141,12],[150,112,8],[157,73,0],[180,44,5],[207,35,10],[232,36,0],[260,50,-10],[290,70,0],[320,100,15],[350,120,5],[380,90,-5],[410,60,0],[440,40,10],[470,30,0]];let A,w;for(let R=0;R<y.length;R++){let T=y[R][0],B=y[R][2],Q=y[R][1];y[R]=new N(T,B,Q)}let E=new yE(y);E.tension=.5;const b=new Lh(E,300,4,32,!1),M=new ME;M.onLoad=()=>{console.log("所有资源加载完成")},M.onProgress=(R,T,B)=>{console.log(`正在加载: ${R}, 进度: ${T/B*100}%`)},M.onError=R=>{console.error("加载出错:",R)};const S=new Mb(M),D=new Ab(16777215,.5);d.add(D);const F=new _b({side:Kn,map:S.load("assets/textures/3d_space_5.jpg",R=>{R.wrapS=R.wrapT=$u,R.repeat.set(15,2),F.needsUpdate=!0}),bumpMap:S.load("assets/textures/waveform-bump3.jpg",R=>{R.wrapS=R.wrapT=$u,R.repeat.set(15,2),F.needsUpdate=!0}),shininess:20,bumpScale:-.03,specular:729929});h.outputEncoding=void 0,h.toneMapping=q1,h.toneMappingExposure=1;const z=new $i(b,F);d.add(z);var q=new Lh(E,150,3.4,32,!1);let j=new gb(q),G=new gE({linewidth:2,opacity:.2,transparent:1}),X=new JR(j,G);d.add(X);let U=new wb(16777215,.35,4,0);U.castShadow=!0,d.add(U);function $(R){A=E.getPointAt(R),w=E.getPointAt(R+.03),p.position.set(A.x,A.y,A.z),p.lookAt(w),U.position.set(w.x,w.y,w.z)}let P=0,te=0;cu.defaultEase=Cv.easeNone;let _e={percent:0};cu.registerPlugin(st),cu.timeline({scrollTrigger:{trigger:".scrollTarget",start:"top top",end:"bottom 100%",scrub:5}}).to(_e,{percent:.96,ease:Cv.easeNone,duration:10,onUpdate:function(){P=_e.percent}});function Y(){te=P,m.rotation.y+=(g-m.rotation.y)/15,m.rotation.x+=(_-m.rotation.x)/15,$(te),Ee(),L.rotation.y+=2e-5,mt.rotation.x+=5e-5,ke.rotation.z+=1e-5,c.render(),requestAnimationFrame(Y)}requestAnimationFrame(Y),window.addEventListener("resize",function(){let R=window.innerWidth,T=window.innerHeight;m.aspect=R/T,m.updateProjectionMatrix(),h.setSize(R,T),c.setSize(R,T)},!1);let ne=S.load("assets/textures/spikey.png"),ae=6800,re=new Zn,Ae=new Zn,Oe=new Zn,Le=new _E({color:16777215,size:.5,map:ne,transparent:!0,blending:Ah});const Ze=[],qe=[],ye=[];for(let R=0;R<ae;R++)Ze.push(Math.random()*500-250,Math.random()*50-25,Math.random()*500-250),qe.push(Math.random()*500,Math.random()*10-5,Math.random()*500),ye.push(Math.random()*500,Math.random()*10-5,Math.random()*500);re.setAttribute("position",new gn(Ze,3)),Ae.setAttribute("position",new gn(qe,3)),Oe.setAttribute("position",new gn(ye,3));let L=new pp(re,Le),mt=new pp(Ae,Le),ke=new pp(Oe,Le);d.add(L),d.add(mt),d.add(ke),document.addEventListener("mousemove",function(R){g=a.map(R.clientX,0,window.innerWidth,3.24,3.04),_=a.map(R.clientY,0,window.innerHeight,-.1,.1)});const V=R=>{const{text:T="test",position:B=1}=R||{},Q=document.createElement("canvas"),J=1;Q.width=512/J,Q.height=256/J;const Z=Q.getContext("2d");Z.fillStyle="rgba(0, 0, 0, 0.7)",Z.fillRect(0,0,Q.width,Q.height),Z.font="28px Arial",Z.textAlign="center",Z.fillStyle="white",Z.fillText(T,Q.width/2,Q.height/2);const fe=new eb(Q),le=new lc(20,10),de=new ed({map:fe,transparent:!0,side:Sr}),Ge=new $i(le,de),se=E.getPointAt(B);return Ge.position.set(se.x,se.y,se.z),d.add(Ge),Ge},Ee=()=>{Se.forEach(R=>{R.lookAt(p.position)})};let Se=`晴天，雨天，落幕又在上演，留恋，昨夜，流星划过云烟。
    总在梦里穿越，灿烂星光点点，醒来浮显眼前，是尘封的诺言。
    波浪翻过大海，倾听风的思念，我穿越人世间，才想起你的脸。
    抬头，看见，漫天风花雪月，回眸，发现，你就在我身边。`.split(/，|。|\n/).filter(R=>R);Se=Se.map((R,T)=>({text:R,position:Number(1/Se.length*(T+1)).toFixed(2)*1})),Se=Se.map(R=>V(R))}return Vr.useEffect(()=>{window.scrollTo(0,0),o()},[]),vs.jsxs(vs.Fragment,{children:[vs.jsx("canvas",{className:"experience"}),vs.jsx("div",{className:"scrollTarget"}),vs.jsx("div",{className:"vignette-radial"}),vs.jsx("div",{className:`audio ${n?"play":"pause"}`,onClick:s})]})}SM(document.getElementById("root")).render(vs.jsx(Vr.StrictMode,{children:vs.jsx(y3,{})}));
