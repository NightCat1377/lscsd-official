(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const P of document.querySelectorAll('link[rel="modulepreload"]'))w(P);new MutationObserver(P=>{for(const A of P)if(A.type==="childList")for(const I of A.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&w(I)}).observe(document,{childList:!0,subtree:!0});function p(P){const A={};return P.integrity&&(A.integrity=P.integrity),P.referrerPolicy&&(A.referrerPolicy=P.referrerPolicy),P.crossOrigin==="use-credentials"?A.credentials="include":P.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function w(P){if(P.ep)return;P.ep=!0;const A=p(P);fetch(P.href,A)}})();function Od(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var ws={exports:{}},vr={},ks={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Ou(){if(Ld)return V;Ld=1;var x=Symbol.for("react.element"),C=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),I=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),_=Symbol.iterator;function N(u){return u===null||typeof u!="object"?null:(u=_&&u[_]||u["@@iterator"],typeof u=="function"?u:null)}var ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},be=Object.assign,q={};function Z(u,y,H){this.props=u,this.context=y,this.refs=q,this.updater=H||ne}Z.prototype.isReactComponent={},Z.prototype.setState=function(u,y){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,y,"setState")},Z.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Me(){}Me.prototype=Z.prototype;function un(u,y,H){this.props=u,this.context=y,this.refs=q,this.updater=H||ne}var en=un.prototype=new Me;en.constructor=un,be(en,Z.prototype),en.isPureReactComponent=!0;var we=Array.isArray,nn=Object.prototype.hasOwnProperty,Re={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function Ge(u,y,H){var $,G={},K=null,te=null;if(y!=null)for($ in y.ref!==void 0&&(te=y.ref),y.key!==void 0&&(K=""+y.key),y)nn.call(y,$)&&!Ie.hasOwnProperty($)&&(G[$]=y[$]);var J=arguments.length-2;if(J===1)G.children=H;else if(1<J){for(var se=Array(J),Ue=0;Ue<J;Ue++)se[Ue]=arguments[Ue+2];G.children=se}if(u&&u.defaultProps)for($ in J=u.defaultProps,J)G[$]===void 0&&(G[$]=J[$]);return{$$typeof:x,type:u,key:K,ref:te,props:G,_owner:Re.current}}function Rn(u,y){return{$$typeof:x,type:u.type,key:y,ref:u.ref,props:u.props,_owner:u._owner}}function jn(u){return typeof u=="object"&&u!==null&&u.$$typeof===x}function Yn(u){var y={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(H){return y[H]})}var fn=/\/+/g;function We(u,y){return typeof u=="object"&&u!==null&&u.key!=null?Yn(""+u.key):y.toString(36)}function tn(u,y,H,$,G){var K=typeof u;(K==="undefined"||K==="boolean")&&(u=null);var te=!1;if(u===null)te=!0;else switch(K){case"string":case"number":te=!0;break;case"object":switch(u.$$typeof){case x:case C:te=!0}}if(te)return te=u,G=G(te),u=$===""?"."+We(te,0):$,we(G)?(H="",u!=null&&(H=u.replace(fn,"$&/")+"/"),tn(G,y,H,"",function(Ue){return Ue})):G!=null&&(jn(G)&&(G=Rn(G,H+(!G.key||te&&te.key===G.key?"":(""+G.key).replace(fn,"$&/")+"/")+u)),y.push(G)),1;if(te=0,$=$===""?".":$+":",we(u))for(var J=0;J<u.length;J++){K=u[J];var se=$+We(K,J);te+=tn(K,y,H,se,G)}else if(se=N(u),typeof se=="function")for(u=se.call(u),J=0;!(K=u.next()).done;)K=K.value,se=$+We(K,J++),te+=tn(K,y,H,se,G);else if(K==="object")throw y=String(u),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return te}function mn(u,y,H){if(u==null)return u;var $=[],G=0;return tn(u,$,"","",function(K){return y.call(H,K,G++)}),$}function Be(u){if(u._status===-1){var y=u._result;y=y(),y.then(function(H){(u._status===0||u._status===-1)&&(u._status=1,u._result=H)},function(H){(u._status===0||u._status===-1)&&(u._status=2,u._result=H)}),u._status===-1&&(u._status=0,u._result=y)}if(u._status===1)return u._result.default;throw u._result}var ce={current:null},b={transition:null},M={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:b,ReactCurrentOwner:Re};function R(){throw Error("act(...) is not supported in production builds of React.")}return V.Children={map:mn,forEach:function(u,y,H){mn(u,function(){y.apply(this,arguments)},H)},count:function(u){var y=0;return mn(u,function(){y++}),y},toArray:function(u){return mn(u,function(y){return y})||[]},only:function(u){if(!jn(u))throw Error("React.Children.only expected to receive a single React element child.");return u}},V.Component=Z,V.Fragment=p,V.Profiler=P,V.PureComponent=un,V.StrictMode=w,V.Suspense=D,V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,V.act=R,V.cloneElement=function(u,y,H){if(u==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+u+".");var $=be({},u.props),G=u.key,K=u.ref,te=u._owner;if(y!=null){if(y.ref!==void 0&&(K=y.ref,te=Re.current),y.key!==void 0&&(G=""+y.key),u.type&&u.type.defaultProps)var J=u.type.defaultProps;for(se in y)nn.call(y,se)&&!Ie.hasOwnProperty(se)&&($[se]=y[se]===void 0&&J!==void 0?J[se]:y[se])}var se=arguments.length-2;if(se===1)$.children=H;else if(1<se){J=Array(se);for(var Ue=0;Ue<se;Ue++)J[Ue]=arguments[Ue+2];$.children=J}return{$$typeof:x,type:u.type,key:G,ref:K,props:$,_owner:te}},V.createContext=function(u){return u={$$typeof:I,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},u.Provider={$$typeof:A,_context:u},u.Consumer=u},V.createElement=Ge,V.createFactory=function(u){var y=Ge.bind(null,u);return y.type=u,y},V.createRef=function(){return{current:null}},V.forwardRef=function(u){return{$$typeof:U,render:u}},V.isValidElement=jn,V.lazy=function(u){return{$$typeof:X,_payload:{_status:-1,_result:u},_init:Be}},V.memo=function(u,y){return{$$typeof:L,type:u,compare:y===void 0?null:y}},V.startTransition=function(u){var y=b.transition;b.transition={};try{u()}finally{b.transition=y}},V.unstable_act=R,V.useCallback=function(u,y){return ce.current.useCallback(u,y)},V.useContext=function(u){return ce.current.useContext(u)},V.useDebugValue=function(){},V.useDeferredValue=function(u){return ce.current.useDeferredValue(u)},V.useEffect=function(u,y){return ce.current.useEffect(u,y)},V.useId=function(){return ce.current.useId()},V.useImperativeHandle=function(u,y,H){return ce.current.useImperativeHandle(u,y,H)},V.useInsertionEffect=function(u,y){return ce.current.useInsertionEffect(u,y)},V.useLayoutEffect=function(u,y){return ce.current.useLayoutEffect(u,y)},V.useMemo=function(u,y){return ce.current.useMemo(u,y)},V.useReducer=function(u,y,H){return ce.current.useReducer(u,y,H)},V.useRef=function(u){return ce.current.useRef(u)},V.useState=function(u){return ce.current.useState(u)},V.useSyncExternalStore=function(u,y,H){return ce.current.useSyncExternalStore(u,y,H)},V.useTransition=function(){return ce.current.useTransition()},V.version="18.3.1",V}var Ed;function zs(){return Ed||(Ed=1,ks.exports=Ou()),ks.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Fu(){if(Rd)return vr;Rd=1;var x=zs(),C=Symbol.for("react.element"),p=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,P=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function I(U,D,L){var X,_={},N=null,ne=null;L!==void 0&&(N=""+L),D.key!==void 0&&(N=""+D.key),D.ref!==void 0&&(ne=D.ref);for(X in D)w.call(D,X)&&!A.hasOwnProperty(X)&&(_[X]=D[X]);if(U&&U.defaultProps)for(X in D=U.defaultProps,D)_[X]===void 0&&(_[X]=D[X]);return{$$typeof:C,type:U,key:N,ref:ne,props:_,_owner:P.current}}return vr.Fragment=p,vr.jsx=I,vr.jsxs=I,vr}var zd;function Mu(){return zd||(zd=1,ws.exports=Fu()),ws.exports}var t=Mu(),ge=zs();const Wu=Od(ge);var zl={},Cs={exports:{}},Fe={},Ls={exports:{}},Es={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function Uu(){return Pd||(Pd=1,(function(x){function C(b,M){var R=b.length;b.push(M);e:for(;0<R;){var u=R-1>>>1,y=b[u];if(0<P(y,M))b[u]=M,b[R]=y,R=u;else break e}}function p(b){return b.length===0?null:b[0]}function w(b){if(b.length===0)return null;var M=b[0],R=b.pop();if(R!==M){b[0]=R;e:for(var u=0,y=b.length,H=y>>>1;u<H;){var $=2*(u+1)-1,G=b[$],K=$+1,te=b[K];if(0>P(G,R))K<y&&0>P(te,G)?(b[u]=te,b[K]=R,u=K):(b[u]=G,b[$]=R,u=$);else if(K<y&&0>P(te,R))b[u]=te,b[K]=R,u=K;else break e}}return M}function P(b,M){var R=b.sortIndex-M.sortIndex;return R!==0?R:b.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var A=performance;x.unstable_now=function(){return A.now()}}else{var I=Date,U=I.now();x.unstable_now=function(){return I.now()-U}}var D=[],L=[],X=1,_=null,N=3,ne=!1,be=!1,q=!1,Z=typeof setTimeout=="function"?setTimeout:null,Me=typeof clearTimeout=="function"?clearTimeout:null,un=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function en(b){for(var M=p(L);M!==null;){if(M.callback===null)w(L);else if(M.startTime<=b)w(L),M.sortIndex=M.expirationTime,C(D,M);else break;M=p(L)}}function we(b){if(q=!1,en(b),!be)if(p(D)!==null)be=!0,Be(nn);else{var M=p(L);M!==null&&ce(we,M.startTime-b)}}function nn(b,M){be=!1,q&&(q=!1,Me(Ge),Ge=-1),ne=!0;var R=N;try{for(en(M),_=p(D);_!==null&&(!(_.expirationTime>M)||b&&!Yn());){var u=_.callback;if(typeof u=="function"){_.callback=null,N=_.priorityLevel;var y=u(_.expirationTime<=M);M=x.unstable_now(),typeof y=="function"?_.callback=y:_===p(D)&&w(D),en(M)}else w(D);_=p(D)}if(_!==null)var H=!0;else{var $=p(L);$!==null&&ce(we,$.startTime-M),H=!1}return H}finally{_=null,N=R,ne=!1}}var Re=!1,Ie=null,Ge=-1,Rn=5,jn=-1;function Yn(){return!(x.unstable_now()-jn<Rn)}function fn(){if(Ie!==null){var b=x.unstable_now();jn=b;var M=!0;try{M=Ie(!0,b)}finally{M?We():(Re=!1,Ie=null)}}else Re=!1}var We;if(typeof un=="function")We=function(){un(fn)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,mn=tn.port2;tn.port1.onmessage=fn,We=function(){mn.postMessage(null)}}else We=function(){Z(fn,0)};function Be(b){Ie=b,Re||(Re=!0,We())}function ce(b,M){Ge=Z(function(){b(x.unstable_now())},M)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(b){b.callback=null},x.unstable_continueExecution=function(){be||ne||(be=!0,Be(nn))},x.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rn=0<b?Math.floor(1e3/b):5},x.unstable_getCurrentPriorityLevel=function(){return N},x.unstable_getFirstCallbackNode=function(){return p(D)},x.unstable_next=function(b){switch(N){case 1:case 2:case 3:var M=3;break;default:M=N}var R=N;N=M;try{return b()}finally{N=R}},x.unstable_pauseExecution=function(){},x.unstable_requestPaint=function(){},x.unstable_runWithPriority=function(b,M){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var R=N;N=b;try{return M()}finally{N=R}},x.unstable_scheduleCallback=function(b,M,R){var u=x.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?u+R:u):R=u,b){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=R+y,b={id:X++,callback:M,priorityLevel:b,startTime:R,expirationTime:y,sortIndex:-1},R>u?(b.sortIndex=R,C(L,b),p(D)===null&&b===p(L)&&(q?(Me(Ge),Ge=-1):q=!0,ce(we,R-u))):(b.sortIndex=y,C(D,b),be||ne||(be=!0,Be(nn))),b},x.unstable_shouldYield=Yn,x.unstable_wrapCallback=function(b){var M=N;return function(){var R=N;N=M;try{return b.apply(this,arguments)}finally{N=R}}}})(Es)),Es}var Id;function Hu(){return Id||(Id=1,Ls.exports=Uu()),Ls.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Vu(){if(Bd)return Fe;Bd=1;var x=zs(),C=Hu();function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w=new Set,P={};function A(e,n){I(e,n),I(e+"Capture",n)}function I(e,n){for(P[e]=n,e=0;e<n.length;e++)w.add(n[e])}var U=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),D=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,X={},_={};function N(e){return D.call(_,e)?!0:D.call(X,e)?!1:L.test(e)?_[e]=!0:(X[e]=!0,!1)}function ne(e,n,r,l){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function be(e,n,r,l){if(n===null||typeof n>"u"||ne(e,n,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function q(e,n,r,l,i,s,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=o}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Z[n]=new q(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Z[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Z[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Z[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var Me=/[\-:]([a-z])/g;function un(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Me,un);Z[n]=new q(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Me,un);Z[n]=new q(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Me,un);Z[n]=new q(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),Z.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Z[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function en(e,n,r,l){var i=Z.hasOwnProperty(n)?Z[n]:null;(i!==null?i.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(be(n,r,i,l)&&(r=null),l||i===null?N(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,l=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,l?e.setAttributeNS(l,n,r):e.setAttribute(n,r))))}var we=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nn=Symbol.for("react.element"),Re=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Rn=Symbol.for("react.profiler"),jn=Symbol.for("react.provider"),Yn=Symbol.for("react.context"),fn=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),tn=Symbol.for("react.suspense_list"),mn=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),b=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=b&&e[b]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,u;function y(e){if(u===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);u=n&&n[1]||""}return`
`+u+e}var H=!1;function $(e,n){if(!e||H)return"";H=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(h){var l=h}Reflect.construct(e,[],n)}else{try{n.call()}catch(h){l=h}e.call(n.prototype)}else{try{throw Error()}catch(h){l=h}e()}}catch(h){if(h&&l&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=l.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var d=`
`+i[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=a);break}}}finally{H=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?y(e):""}function G(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1),e;case 11:return e=$(e.type.render,!1),e;case 1:return e=$(e.type,!0),e;default:return""}}function K(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case Re:return"Portal";case Rn:return"Profiler";case Ge:return"StrictMode";case We:return"Suspense";case tn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yn:return(e.displayName||"Context")+".Consumer";case jn:return(e._context.displayName||"Context")+".Provider";case fn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mn:return n=e.displayName||null,n!==null?n:K(e.type)||"Memo";case Be:n=e._payload,e=e._init;try{return K(e(n))}catch{}}return null}function te(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(n);case 8:return n===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function J(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ue(e){var n=se(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){l=""+o,s.call(this,o)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function jr(e){e._valueTracker||(e._valueTracker=Ue(e))}function Is(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return e&&(l=se(e)?e.checked?"true":"false":e.value),e=l,e!==r?(n.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,n){var r=n.checked;return R({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Bs(e,n){var r=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;r=J(n.value!=null?n.value:r),e._wrapperState={initialChecked:l,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ts(e,n){n=n.checked,n!=null&&en(e,"checked",n,!1)}function Il(e,n){Ts(e,n);var r=J(n.value),l=n.type;if(r!=null)l==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Bl(e,n.type,r):n.hasOwnProperty("defaultValue")&&Bl(e,n.type,J(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ds(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Bl(e,n,r){(n!=="number"||Sr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Tt=Array.isArray;function dt(e,n,r,l){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&l&&(e[r].defaultSelected=!0)}else{for(r=""+J(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Tl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(p(91));return R({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _s(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(p(92));if(Tt(r)){if(1<r.length)throw Error(p(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:J(r)}}function As(e,n){var r=J(n.value),l=J(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),l!=null&&(e.defaultValue=""+l)}function Os(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Fs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Ms=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,l,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,l,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Dt(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var _t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(_t).forEach(function(e){Ud.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_t[n]=_t[e]})});function Ws(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||_t.hasOwnProperty(e)&&_t[e]?(""+n).trim():n+"px"}function Us(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var l=r.indexOf("--")===0,i=Ws(r,n[r],l);r==="float"&&(r="cssFloat"),l?e.setProperty(r,i):e[r]=i}}var Hd=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,n){if(n){if(Hd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(p(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(p(61))}if(n.style!=null&&typeof n.style!="object")throw Error(p(62))}}function Al(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ol=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,ct=null,ut=null;function Hs(e){if(e=lr(e)){if(typeof Ml!="function")throw Error(p(280));var n=e.stateNode;n&&(n=$r(n),Ml(e.stateNode,e.type,n))}}function Vs(e){ct?ut?ut.push(e):ut=[e]:ct=e}function $s(){if(ct){var e=ct,n=ut;if(ut=ct=null,Hs(e),n)for(e=0;e<n.length;e++)Hs(n[e])}}function Qs(e,n){return e(n)}function Gs(){}var Wl=!1;function Ks(e,n,r){if(Wl)return e(n,r);Wl=!0;try{return Qs(e,n,r)}finally{Wl=!1,(ct!==null||ut!==null)&&(Gs(),$s())}}function At(e,n){var r=e.stateNode;if(r===null)return null;var l=$r(r);if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(p(231,n,typeof r));return r}var Ul=!1;if(U)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch{Ul=!1}function Vd(e,n,r,l,i,s,o,a,d){var h=Array.prototype.slice.call(arguments,3);try{n.apply(r,h)}catch(v){this.onError(v)}}var Ft=!1,br=null,wr=!1,Hl=null,$d={onError:function(e){Ft=!0,br=e}};function Qd(e,n,r,l,i,s,o,a,d){Ft=!1,br=null,Vd.apply($d,arguments)}function Gd(e,n,r,l,i,s,o,a,d){if(Qd.apply(this,arguments),Ft){if(Ft){var h=br;Ft=!1,br=null}else throw Error(p(198));wr||(wr=!0,Hl=h)}}function Xn(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Ys(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Xs(e){if(Xn(e)!==e)throw Error(p(188))}function Kd(e){var n=e.alternate;if(!n){if(n=Xn(e),n===null)throw Error(p(188));return n!==e?null:e}for(var r=e,l=n;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(l=i.return,l!==null){r=l;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Xs(i),e;if(s===l)return Xs(i),n;s=s.sibling}throw Error(p(188))}if(r.return!==l.return)r=i,l=s;else{for(var o=!1,a=i.child;a;){if(a===r){o=!0,r=i,l=s;break}if(a===l){o=!0,l=i,r=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===r){o=!0,r=s,l=i;break}if(a===l){o=!0,l=s,r=i;break}a=a.sibling}if(!o)throw Error(p(189))}}if(r.alternate!==l)throw Error(p(190))}if(r.tag!==3)throw Error(p(188));return r.stateNode.current===r?e:n}function Zs(e){return e=Kd(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=qs(e);if(n!==null)return n;e=e.sibling}return null}var Js=C.unstable_scheduleCallback,eo=C.unstable_cancelCallback,Yd=C.unstable_shouldYield,Xd=C.unstable_requestPaint,fe=C.unstable_now,Zd=C.unstable_getCurrentPriorityLevel,Vl=C.unstable_ImmediatePriority,no=C.unstable_UserBlockingPriority,kr=C.unstable_NormalPriority,qd=C.unstable_LowPriority,to=C.unstable_IdlePriority,Cr=null,pn=null;function Jd(e){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Cr,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:tc,ec=Math.log,nc=Math.LN2;function tc(e){return e>>>=0,e===0?32:31-(ec(e)/nc|0)|0}var Lr=64,Er=4194304;function Mt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rr(e,n){var r=e.pendingLanes;if(r===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var a=o&~i;a!==0?l=Mt(a):(s&=o,s!==0&&(l=Mt(s)))}else o=r&~i,o!==0?l=Mt(o):s!==0&&(l=Mt(s));if(l===0)return 0;if(n!==0&&n!==l&&(n&i)===0&&(i=l&-l,s=n&-n,i>=s||i===16&&(s&4194240)!==0))return n;if((l&4)!==0&&(l|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)r=31-rn(n),i=1<<r,l|=e[r],n&=~i;return l}function rc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(e,n){for(var r=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,d=i[o];d===-1?((a&r)===0||(a&l)!==0)&&(i[o]=rc(a,n)):d<=n&&(e.expiredLanes|=a),s&=~a}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ro(){var e=Lr;return Lr<<=1,(Lr&4194240)===0&&(Lr=64),e}function Ql(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Wt(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-rn(n),e[n]=r}function ic(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-rn(r),s=1<<i;n[i]=0,l[i]=-1,e[i]=-1,r&=~s}}function Gl(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var l=31-rn(r),i=1<<l;i&n|e[l]&n&&(e[l]|=n),r&=~i}}var ee=0;function lo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var io,Kl,so,oo,ao,Yl=!1,zr=[],zn=null,Pn=null,In=null,Ut=new Map,Ht=new Map,Bn=[],sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function co(e,n){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Ut.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(n.pointerId)}}function Vt(e,n,r,l,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:s,targetContainers:[i]},n!==null&&(n=lr(n),n!==null&&Kl(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function oc(e,n,r,l,i){switch(n){case"focusin":return zn=Vt(zn,e,n,r,l,i),!0;case"dragenter":return Pn=Vt(Pn,e,n,r,l,i),!0;case"mouseover":return In=Vt(In,e,n,r,l,i),!0;case"pointerover":var s=i.pointerId;return Ut.set(s,Vt(Ut.get(s)||null,e,n,r,l,i)),!0;case"gotpointercapture":return s=i.pointerId,Ht.set(s,Vt(Ht.get(s)||null,e,n,r,l,i)),!0}return!1}function uo(e){var n=Zn(e.target);if(n!==null){var r=Xn(n);if(r!==null){if(n=r.tag,n===13){if(n=Ys(r),n!==null){e.blockedOn=n,ao(e.priority,function(){so(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Zl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Ol=l,r.target.dispatchEvent(l),Ol=null}else return n=lr(r),n!==null&&Kl(n),e.blockedOn=r,!1;n.shift()}return!0}function fo(e,n,r){Pr(e)&&r.delete(n)}function ac(){Yl=!1,zn!==null&&Pr(zn)&&(zn=null),Pn!==null&&Pr(Pn)&&(Pn=null),In!==null&&Pr(In)&&(In=null),Ut.forEach(fo),Ht.forEach(fo)}function $t(e,n){e.blockedOn===n&&(e.blockedOn=null,Yl||(Yl=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,ac)))}function Qt(e){function n(i){return $t(i,e)}if(0<zr.length){$t(zr[0],e);for(var r=1;r<zr.length;r++){var l=zr[r];l.blockedOn===e&&(l.blockedOn=null)}}for(zn!==null&&$t(zn,e),Pn!==null&&$t(Pn,e),In!==null&&$t(In,e),Ut.forEach(n),Ht.forEach(n),r=0;r<Bn.length;r++)l=Bn[r],l.blockedOn===e&&(l.blockedOn=null);for(;0<Bn.length&&(r=Bn[0],r.blockedOn===null);)uo(r),r.blockedOn===null&&Bn.shift()}var ft=we.ReactCurrentBatchConfig,Ir=!0;function dc(e,n,r,l){var i=ee,s=ft.transition;ft.transition=null;try{ee=1,Xl(e,n,r,l)}finally{ee=i,ft.transition=s}}function cc(e,n,r,l){var i=ee,s=ft.transition;ft.transition=null;try{ee=4,Xl(e,n,r,l)}finally{ee=i,ft.transition=s}}function Xl(e,n,r,l){if(Ir){var i=Zl(e,n,r,l);if(i===null)pi(e,n,l,Br,r),co(e,l);else if(oc(i,e,n,r,l))l.stopPropagation();else if(co(e,l),n&4&&-1<sc.indexOf(e)){for(;i!==null;){var s=lr(i);if(s!==null&&io(s),s=Zl(e,n,r,l),s===null&&pi(e,n,l,Br,r),s===i)break;i=s}i!==null&&l.stopPropagation()}else pi(e,n,l,null,r)}}var Br=null;function Zl(e,n,r,l){if(Br=null,e=Fl(l),e=Zn(e),e!==null)if(n=Xn(e),n===null)e=null;else if(r=n.tag,r===13){if(e=Ys(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Br=e,null}function mo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zd()){case Vl:return 1;case no:return 4;case kr:case qd:return 16;case to:return 536870912;default:return 16}default:return 16}}var Tn=null,ql=null,Tr=null;function po(){if(Tr)return Tr;var e,n=ql,r=n.length,l,i="value"in Tn?Tn.value:Tn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(l=1;l<=o&&n[r-l]===i[s-l];l++);return Tr=i.slice(e,1<l?1-l:void 0)}function Dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function ho(){return!1}function He(e){function n(r,l,i,s,o){this._reactName=r,this._targetInst=i,this.type=l,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_r:ho,this.isPropagationStopped=ho,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),n}var mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=He(mt),Gt=R({},mt,{view:0,detail:0}),uc=He(Gt),ei,ni,Kt,Ar=R({},Gt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kt&&(Kt&&e.type==="mousemove"?(ei=e.screenX-Kt.screenX,ni=e.screenY-Kt.screenY):ni=ei=0,Kt=e),ei)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),xo=He(Ar),fc=R({},Ar,{dataTransfer:0}),mc=He(fc),pc=R({},Gt,{relatedTarget:0}),ti=He(pc),hc=R({},mt,{animationName:0,elapsedTime:0,pseudoElement:0}),xc=He(hc),gc=R({},mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yc=He(gc),vc=R({},mt,{data:0}),go=He(vc),jc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nc[e])?!!n[e]:!1}function ri(){return bc}var wc=R({},Gt,{key:function(e){if(e.key){var n=jc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kc=He(wc),Cc=R({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yo=He(Cc),Lc=R({},Gt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),Ec=He(Lc),Rc=R({},mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),zc=He(Rc),Pc=R({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ic=He(Pc),Bc=[9,13,27,32],li=U&&"CompositionEvent"in window,Yt=null;U&&"documentMode"in document&&(Yt=document.documentMode);var Tc=U&&"TextEvent"in window&&!Yt,vo=U&&(!li||Yt&&8<Yt&&11>=Yt),jo=" ",So=!1;function No(e,n){switch(e){case"keyup":return Bc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pt=!1;function Dc(e,n){switch(e){case"compositionend":return bo(n);case"keypress":return n.which!==32?null:(So=!0,jo);case"textInput":return e=n.data,e===jo&&So?null:e;default:return null}}function _c(e,n){if(pt)return e==="compositionend"||!li&&No(e,n)?(e=po(),Tr=ql=Tn=null,pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vo&&n.locale!=="ko"?null:n.data;default:return null}}var Ac={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ac[e.type]:n==="textarea"}function ko(e,n,r,l){Vs(l),n=Ur(n,"onChange"),0<n.length&&(r=new Jl("onChange","change",null,r,l),e.push({event:r,listeners:n}))}var Xt=null,Zt=null;function Oc(e){Ho(e,0)}function Or(e){var n=vt(e);if(Is(n))return e}function Fc(e,n){if(e==="change")return n}var Co=!1;if(U){var ii;if(U){var si="oninput"in document;if(!si){var Lo=document.createElement("div");Lo.setAttribute("oninput","return;"),si=typeof Lo.oninput=="function"}ii=si}else ii=!1;Co=ii&&(!document.documentMode||9<document.documentMode)}function Eo(){Xt&&(Xt.detachEvent("onpropertychange",Ro),Zt=Xt=null)}function Ro(e){if(e.propertyName==="value"&&Or(Zt)){var n=[];ko(n,Zt,e,Fl(e)),Ks(Oc,n)}}function Mc(e,n,r){e==="focusin"?(Eo(),Xt=n,Zt=r,Xt.attachEvent("onpropertychange",Ro)):e==="focusout"&&Eo()}function Wc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(Zt)}function Uc(e,n){if(e==="click")return Or(n)}function Hc(e,n){if(e==="input"||e==="change")return Or(n)}function Vc(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ln=typeof Object.is=="function"?Object.is:Vc;function qt(e,n){if(ln(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var i=r[l];if(!D.call(n,i)||!ln(e[i],n[i]))return!1}return!0}function zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Po(e,n){var r=zo(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=n&&l>=n)return{node:r,offset:n-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zo(r)}}function Io(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Io(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bo(){for(var e=window,n=Sr();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Sr(e.document)}return n}function oi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function $c(e){var n=Bo(),r=e.focusedElem,l=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Io(r.ownerDocument.documentElement,r)){if(l!==null&&oi(r)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(l.start,i);l=l.end===void 0?s:Math.min(l.end,i),!e.extend&&s>l&&(i=l,l=s,s=i),i=Po(r,s);var o=Po(r,l);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),s>l?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qc=U&&"documentMode"in document&&11>=document.documentMode,ht=null,ai=null,Jt=null,di=!1;function To(e,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;di||ht==null||ht!==Sr(l)||(l=ht,"selectionStart"in l&&oi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Jt&&qt(Jt,l)||(Jt=l,l=Ur(ai,"onSelect"),0<l.length&&(n=new Jl("onSelect","select",null,n,r),e.push({event:n,listeners:l}),n.target=ht)))}function Fr(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var xt={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},ci={},Do={};U&&(Do=document.createElement("div").style,"AnimationEvent"in window||(delete xt.animationend.animation,delete xt.animationiteration.animation,delete xt.animationstart.animation),"TransitionEvent"in window||delete xt.transitionend.transition);function Mr(e){if(ci[e])return ci[e];if(!xt[e])return e;var n=xt[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Do)return ci[e]=n[r];return e}var _o=Mr("animationend"),Ao=Mr("animationiteration"),Oo=Mr("animationstart"),Fo=Mr("transitionend"),Mo=new Map,Wo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,n){Mo.set(e,n),A(n,[e])}for(var ui=0;ui<Wo.length;ui++){var fi=Wo[ui],Gc=fi.toLowerCase(),Kc=fi[0].toUpperCase()+fi.slice(1);Dn(Gc,"on"+Kc)}Dn(_o,"onAnimationEnd"),Dn(Ao,"onAnimationIteration"),Dn(Oo,"onAnimationStart"),Dn("dblclick","onDoubleClick"),Dn("focusin","onFocus"),Dn("focusout","onBlur"),Dn(Fo,"onTransitionEnd"),I("onMouseEnter",["mouseout","mouseover"]),I("onMouseLeave",["mouseout","mouseover"]),I("onPointerEnter",["pointerout","pointerover"]),I("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Uo(e,n,r){var l=e.type||"unknown-event";e.currentTarget=r,Gd(l,n,void 0,e),e.currentTarget=null}function Ho(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],i=l.event;l=l.listeners;e:{var s=void 0;if(n)for(var o=l.length-1;0<=o;o--){var a=l[o],d=a.instance,h=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break e;Uo(i,a,h),s=d}else for(o=0;o<l.length;o++){if(a=l[o],d=a.instance,h=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break e;Uo(i,a,h),s=d}}}if(wr)throw e=Hl,wr=!1,Hl=null,e}function le(e,n){var r=n[ji];r===void 0&&(r=n[ji]=new Set);var l=e+"__bubble";r.has(l)||(Vo(n,e,2,!1),r.add(l))}function mi(e,n,r){var l=0;n&&(l|=4),Vo(r,e,l,n)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Wr]){e[Wr]=!0,w.forEach(function(r){r!=="selectionchange"&&(Yc.has(r)||mi(r,!1,e),mi(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wr]||(n[Wr]=!0,mi("selectionchange",!1,n))}}function Vo(e,n,r,l){switch(mo(n)){case 1:var i=dc;break;case 4:i=cc;break;default:i=Xl}r=i.bind(null,n,r,e),i=void 0,!Ul||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function pi(e,n,r,l,i){var s=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var a=l.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=l.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zn(a),o===null)return;if(d=o.tag,d===5||d===6){l=s=o;continue e}a=a.parentNode}}l=l.return}Ks(function(){var h=s,v=Fl(r),j=[];e:{var g=Mo.get(e);if(g!==void 0){var k=Jl,z=e;switch(e){case"keypress":if(Dr(r)===0)break e;case"keydown":case"keyup":k=kc;break;case"focusin":z="focus",k=ti;break;case"focusout":z="blur",k=ti;break;case"beforeblur":case"afterblur":k=ti;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=mc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Ec;break;case _o:case Ao:case Oo:k=xc;break;case Fo:k=zc;break;case"scroll":k=uc;break;case"wheel":k=Ic;break;case"copy":case"cut":case"paste":k=yc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=yo}var B=(n&4)!==0,me=!B&&e==="scroll",f=B?g!==null?g+"Capture":null:g;B=[];for(var c=h,m;c!==null;){m=c;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,f!==null&&(S=At(c,f),S!=null&&B.push(tr(c,S,m)))),me)break;c=c.return}0<B.length&&(g=new k(g,z,null,r,v),j.push({event:g,listeners:B}))}}if((n&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&r!==Ol&&(z=r.relatedTarget||r.fromElement)&&(Zn(z)||z[Sn]))break e;if((k||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,k?(z=r.relatedTarget||r.toElement,k=h,z=z?Zn(z):null,z!==null&&(me=Xn(z),z!==me||z.tag!==5&&z.tag!==6)&&(z=null)):(k=null,z=h),k!==z)){if(B=xo,S="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(B=yo,S="onPointerLeave",f="onPointerEnter",c="pointer"),me=k==null?g:vt(k),m=z==null?g:vt(z),g=new B(S,c+"leave",k,r,v),g.target=me,g.relatedTarget=m,S=null,Zn(v)===h&&(B=new B(f,c+"enter",z,r,v),B.target=m,B.relatedTarget=me,S=B),me=S,k&&z)n:{for(B=k,f=z,c=0,m=B;m;m=gt(m))c++;for(m=0,S=f;S;S=gt(S))m++;for(;0<c-m;)B=gt(B),c--;for(;0<m-c;)f=gt(f),m--;for(;c--;){if(B===f||f!==null&&B===f.alternate)break n;B=gt(B),f=gt(f)}B=null}else B=null;k!==null&&$o(j,g,k,B,!1),z!==null&&me!==null&&$o(j,me,z,B,!0)}}e:{if(g=h?vt(h):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var T=Fc;else if(wo(g))if(Co)T=Hc;else{T=Wc;var O=Mc}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=Uc);if(T&&(T=T(e,h))){ko(j,T,r,v);break e}O&&O(e,g,h),e==="focusout"&&(O=g._wrapperState)&&O.controlled&&g.type==="number"&&Bl(g,"number",g.value)}switch(O=h?vt(h):window,e){case"focusin":(wo(O)||O.contentEditable==="true")&&(ht=O,ai=h,Jt=null);break;case"focusout":Jt=ai=ht=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,To(j,r,v);break;case"selectionchange":if(Qc)break;case"keydown":case"keyup":To(j,r,v)}var F;if(li)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else pt?No(e,r)&&(W="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(W="onCompositionStart");W&&(vo&&r.locale!=="ko"&&(pt||W!=="onCompositionStart"?W==="onCompositionEnd"&&pt&&(F=po()):(Tn=v,ql="value"in Tn?Tn.value:Tn.textContent,pt=!0)),O=Ur(h,W),0<O.length&&(W=new go(W,e,null,r,v),j.push({event:W,listeners:O}),F?W.data=F:(F=bo(r),F!==null&&(W.data=F)))),(F=Tc?Dc(e,r):_c(e,r))&&(h=Ur(h,"onBeforeInput"),0<h.length&&(v=new go("onBeforeInput","beforeinput",null,r,v),j.push({event:v,listeners:h}),v.data=F))}Ho(j,n)})}function tr(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Ur(e,n){for(var r=n+"Capture",l=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=At(e,r),s!=null&&l.unshift(tr(e,s,i)),s=At(e,n),s!=null&&l.push(tr(e,s,i))),e=e.return}return l}function gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $o(e,n,r,l,i){for(var s=n._reactName,o=[];r!==null&&r!==l;){var a=r,d=a.alternate,h=a.stateNode;if(d!==null&&d===l)break;a.tag===5&&h!==null&&(a=h,i?(d=At(r,s),d!=null&&o.unshift(tr(r,d,a))):i||(d=At(r,s),d!=null&&o.push(tr(r,d,a)))),r=r.return}o.length!==0&&e.push({event:n,listeners:o})}var Xc=/\r\n?/g,Zc=/\u0000|\uFFFD/g;function Qo(e){return(typeof e=="string"?e:""+e).replace(Xc,`
`).replace(Zc,"")}function Hr(e,n,r){if(n=Qo(n),Qo(e)!==n&&r)throw Error(p(425))}function Vr(){}var hi=null,xi=null;function gi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,qc=typeof clearTimeout=="function"?clearTimeout:void 0,Go=typeof Promise=="function"?Promise:void 0,Jc=typeof queueMicrotask=="function"?queueMicrotask:typeof Go<"u"?function(e){return Go.resolve(null).then(e).catch(eu)}:yi;function eu(e){setTimeout(function(){throw e})}function vi(e,n){var r=n,l=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(l===0){e.removeChild(i),Qt(n);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=i}while(r);Qt(n)}function _n(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ko(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var yt=Math.random().toString(36).slice(2),hn="__reactFiber$"+yt,rr="__reactProps$"+yt,Sn="__reactContainer$"+yt,ji="__reactEvents$"+yt,nu="__reactListeners$"+yt,tu="__reactHandles$"+yt;function Zn(e){var n=e[hn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Sn]||r[hn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Ko(e);e!==null;){if(r=e[hn])return r;e=Ko(e)}return n}e=r,r=e.parentNode}return null}function lr(e){return e=e[hn]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function $r(e){return e[rr]||null}var Si=[],jt=-1;function An(e){return{current:e}}function ie(e){0>jt||(e.current=Si[jt],Si[jt]=null,jt--)}function re(e,n){jt++,Si[jt]=e.current,e.current=n}var On={},ke=An(On),Te=An(!1),qn=On;function St(e,n){var r=e.type.contextTypes;if(!r)return On;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=n[s];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function Qr(){ie(Te),ie(ke)}function Yo(e,n,r){if(ke.current!==On)throw Error(p(168));re(ke,n),re(Te,r)}function Xo(e,n,r){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var i in l)if(!(i in n))throw Error(p(108,te(e)||"Unknown",i));return R({},r,l)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,qn=ke.current,re(ke,e),re(Te,Te.current),!0}function Zo(e,n,r){var l=e.stateNode;if(!l)throw Error(p(169));r?(e=Xo(e,n,qn),l.__reactInternalMemoizedMergedChildContext=e,ie(Te),ie(ke),re(ke,e)):ie(Te),re(Te,r)}var Nn=null,Kr=!1,Ni=!1;function qo(e){Nn===null?Nn=[e]:Nn.push(e)}function ru(e){Kr=!0,qo(e)}function Fn(){if(!Ni&&Nn!==null){Ni=!0;var e=0,n=ee;try{var r=Nn;for(ee=1;e<r.length;e++){var l=r[e];do l=l(!0);while(l!==null)}Nn=null,Kr=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),Js(Vl,Fn),i}finally{ee=n,Ni=!1}}return null}var Nt=[],bt=0,Yr=null,Xr=0,Ke=[],Ye=0,Jn=null,bn=1,wn="";function et(e,n){Nt[bt++]=Xr,Nt[bt++]=Yr,Yr=e,Xr=n}function Jo(e,n,r){Ke[Ye++]=bn,Ke[Ye++]=wn,Ke[Ye++]=Jn,Jn=e;var l=bn;e=wn;var i=32-rn(l)-1;l&=~(1<<i),r+=1;var s=32-rn(n)+i;if(30<s){var o=i-i%5;s=(l&(1<<o)-1).toString(32),l>>=o,i-=o,bn=1<<32-rn(n)+i|r<<i|l,wn=s+e}else bn=1<<s|r<<i|l,wn=e}function bi(e){e.return!==null&&(et(e,1),Jo(e,1,0))}function wi(e){for(;e===Yr;)Yr=Nt[--bt],Nt[bt]=null,Xr=Nt[--bt],Nt[bt]=null;for(;e===Jn;)Jn=Ke[--Ye],Ke[Ye]=null,wn=Ke[--Ye],Ke[Ye]=null,bn=Ke[--Ye],Ke[Ye]=null}var Ve=null,$e=null,oe=!1,sn=null;function ea(e,n){var r=Je(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function na(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ve=e,$e=_n(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ve=e,$e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=Jn!==null?{id:bn,overflow:wn}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Je(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Ve=e,$e=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(oe){var n=$e;if(n){var r=n;if(!na(e,n)){if(ki(e))throw Error(p(418));n=_n(r.nextSibling);var l=Ve;n&&na(e,n)?ea(l,r):(e.flags=e.flags&-4097|2,oe=!1,Ve=e)}}else{if(ki(e))throw Error(p(418));e.flags=e.flags&-4097|2,oe=!1,Ve=e}}}function ta(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Zr(e){if(e!==Ve)return!1;if(!oe)return ta(e),oe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gi(e.type,e.memoizedProps)),n&&(n=$e)){if(ki(e))throw ra(),Error(p(418));for(;n;)ea(e,n),n=_n(n.nextSibling)}if(ta(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){$e=_n(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}$e=null}}else $e=Ve?_n(e.stateNode.nextSibling):null;return!0}function ra(){for(var e=$e;e;)e=_n(e.nextSibling)}function wt(){$e=Ve=null,oe=!1}function Li(e){sn===null?sn=[e]:sn.push(e)}var lu=we.ReactCurrentBatchConfig;function ir(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(p(309));var l=r.stateNode}if(!l)throw Error(p(147,e));var i=l,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},n._stringRef=s,n)}if(typeof e!="string")throw Error(p(284));if(!r._owner)throw Error(p(290,e))}return e}function qr(e,n){throw e=Object.prototype.toString.call(n),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function la(e){var n=e._init;return n(e._payload)}function ia(e){function n(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function r(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function l(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Gn(f,c),f.index=0,f.sibling=null,f}function s(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,m,S){return c===null||c.tag!==6?(c=ys(m,f.mode,S),c.return=f,c):(c=i(c,m),c.return=f,c)}function d(f,c,m,S){var T=m.type;return T===Ie?v(f,c,m.props.children,S,m.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Be&&la(T)===c.type)?(S=i(c,m.props),S.ref=ir(f,c,m),S.return=f,S):(S=Nl(m.type,m.key,m.props,null,f.mode,S),S.ref=ir(f,c,m),S.return=f,S)}function h(f,c,m,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=vs(m,f.mode,S),c.return=f,c):(c=i(c,m.children||[]),c.return=f,c)}function v(f,c,m,S,T){return c===null||c.tag!==7?(c=at(m,f.mode,S,T),c.return=f,c):(c=i(c,m),c.return=f,c)}function j(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ys(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case nn:return m=Nl(c.type,c.key,c.props,null,f.mode,m),m.ref=ir(f,null,c),m.return=f,m;case Re:return c=vs(c,f.mode,m),c.return=f,c;case Be:var S=c._init;return j(f,S(c._payload),m)}if(Tt(c)||M(c))return c=at(c,f.mode,m,null),c.return=f,c;qr(f,c)}return null}function g(f,c,m,S){var T=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(f,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case nn:return m.key===T?d(f,c,m,S):null;case Re:return m.key===T?h(f,c,m,S):null;case Be:return T=m._init,g(f,c,T(m._payload),S)}if(Tt(m)||M(m))return T!==null?null:v(f,c,m,S,null);qr(f,m)}return null}function k(f,c,m,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(m)||null,a(c,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nn:return f=f.get(S.key===null?m:S.key)||null,d(c,f,S,T);case Re:return f=f.get(S.key===null?m:S.key)||null,h(c,f,S,T);case Be:var O=S._init;return k(f,c,m,O(S._payload),T)}if(Tt(S)||M(S))return f=f.get(m)||null,v(c,f,S,T,null);qr(c,S)}return null}function z(f,c,m,S){for(var T=null,O=null,F=c,W=c=0,je=null;F!==null&&W<m.length;W++){F.index>W?(je=F,F=null):je=F.sibling;var Y=g(f,F,m[W],S);if(Y===null){F===null&&(F=je);break}e&&F&&Y.alternate===null&&n(f,F),c=s(Y,c,W),O===null?T=Y:O.sibling=Y,O=Y,F=je}if(W===m.length)return r(f,F),oe&&et(f,W),T;if(F===null){for(;W<m.length;W++)F=j(f,m[W],S),F!==null&&(c=s(F,c,W),O===null?T=F:O.sibling=F,O=F);return oe&&et(f,W),T}for(F=l(f,F);W<m.length;W++)je=k(F,f,W,m[W],S),je!==null&&(e&&je.alternate!==null&&F.delete(je.key===null?W:je.key),c=s(je,c,W),O===null?T=je:O.sibling=je,O=je);return e&&F.forEach(function(Kn){return n(f,Kn)}),oe&&et(f,W),T}function B(f,c,m,S){var T=M(m);if(typeof T!="function")throw Error(p(150));if(m=T.call(m),m==null)throw Error(p(151));for(var O=T=null,F=c,W=c=0,je=null,Y=m.next();F!==null&&!Y.done;W++,Y=m.next()){F.index>W?(je=F,F=null):je=F.sibling;var Kn=g(f,F,Y.value,S);if(Kn===null){F===null&&(F=je);break}e&&F&&Kn.alternate===null&&n(f,F),c=s(Kn,c,W),O===null?T=Kn:O.sibling=Kn,O=Kn,F=je}if(Y.done)return r(f,F),oe&&et(f,W),T;if(F===null){for(;!Y.done;W++,Y=m.next())Y=j(f,Y.value,S),Y!==null&&(c=s(Y,c,W),O===null?T=Y:O.sibling=Y,O=Y);return oe&&et(f,W),T}for(F=l(f,F);!Y.done;W++,Y=m.next())Y=k(F,f,W,Y.value,S),Y!==null&&(e&&Y.alternate!==null&&F.delete(Y.key===null?W:Y.key),c=s(Y,c,W),O===null?T=Y:O.sibling=Y,O=Y);return e&&F.forEach(function(Au){return n(f,Au)}),oe&&et(f,W),T}function me(f,c,m,S){if(typeof m=="object"&&m!==null&&m.type===Ie&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case nn:e:{for(var T=m.key,O=c;O!==null;){if(O.key===T){if(T=m.type,T===Ie){if(O.tag===7){r(f,O.sibling),c=i(O,m.props.children),c.return=f,f=c;break e}}else if(O.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Be&&la(T)===O.type){r(f,O.sibling),c=i(O,m.props),c.ref=ir(f,O,m),c.return=f,f=c;break e}r(f,O);break}else n(f,O);O=O.sibling}m.type===Ie?(c=at(m.props.children,f.mode,S,m.key),c.return=f,f=c):(S=Nl(m.type,m.key,m.props,null,f.mode,S),S.ref=ir(f,c,m),S.return=f,f=S)}return o(f);case Re:e:{for(O=m.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){r(f,c.sibling),c=i(c,m.children||[]),c.return=f,f=c;break e}else{r(f,c);break}else n(f,c);c=c.sibling}c=vs(m,f.mode,S),c.return=f,f=c}return o(f);case Be:return O=m._init,me(f,c,O(m._payload),S)}if(Tt(m))return z(f,c,m,S);if(M(m))return B(f,c,m,S);qr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(r(f,c.sibling),c=i(c,m),c.return=f,f=c):(r(f,c),c=ys(m,f.mode,S),c.return=f,f=c),o(f)):r(f,c)}return me}var kt=ia(!0),sa=ia(!1),Jr=An(null),el=null,Ct=null,Ei=null;function Ri(){Ei=Ct=el=null}function zi(e){var n=Jr.current;ie(Jr),e._currentValue=n}function Pi(e,n,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===r)break;e=e.return}}function Lt(e,n){el=e,Ei=Ct=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(_e=!0),e.firstContext=null)}function Xe(e){var n=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:n,next:null},Ct===null){if(el===null)throw Error(p(308));Ct=e,el.dependencies={lanes:0,firstContext:e}}else Ct=Ct.next=e;return n}var nt=null;function Ii(e){nt===null?nt=[e]:nt.push(e)}function oa(e,n,r,l){var i=n.interleaved;return i===null?(r.next=r,Ii(n)):(r.next=i.next,i.next=r),n.interleaved=r,kn(e,l)}function kn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Mn=!1;function Bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Wn(e,n,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Q&2)!==0){var i=l.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n,kn(e,r)}return i=l.interleaved,i===null?(n.next=n,Ii(l)):(n.next=i.next,i.next=n),l.interleaved=n,kn(e,r)}function nl(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,Gl(e,r)}}function da(e,n){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=n:s=s.next=n}else i=s=n;r={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:l.shared,effects:l.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function tl(e,n,r,l){var i=e.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,h=d.next;d.next=null,o===null?s=h:o.next=h,o=d;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==o&&(a===null?v.firstBaseUpdate=h:a.next=h,v.lastBaseUpdate=d))}if(s!==null){var j=i.baseState;o=0,v=h=d=null,a=s;do{var g=a.lane,k=a.eventTime;if((l&g)===g){v!==null&&(v=v.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var z=e,B=a;switch(g=n,k=r,B.tag){case 1:if(z=B.payload,typeof z=="function"){j=z.call(k,j,g);break e}j=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=B.payload,g=typeof z=="function"?z.call(k,j,g):z,g==null)break e;j=R({},j,g);break e;case 2:Mn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(h=v=k,d=j):v=v.next=k,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(v===null&&(d=j),i.baseState=d,i.firstBaseUpdate=h,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else s===null&&(i.shared.lanes=0);lt|=o,e.lanes=o,e.memoizedState=j}}function ca(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],i=l.callback;if(i!==null){if(l.callback=null,l=r,typeof i!="function")throw Error(p(191,i));i.call(l)}}}var sr={},xn=An(sr),or=An(sr),ar=An(sr);function tt(e){if(e===sr)throw Error(p(174));return e}function Ti(e,n){switch(re(ar,n),re(or,e),re(xn,sr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Dl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Dl(n,e)}ie(xn),re(xn,n)}function Et(){ie(xn),ie(or),ie(ar)}function ua(e){tt(ar.current);var n=tt(xn.current),r=Dl(n,e.type);n!==r&&(re(or,e),re(xn,r))}function Di(e){or.current===e&&(ie(xn),ie(or))}var ae=An(0);function rl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _i=[];function Ai(){for(var e=0;e<_i.length;e++)_i[e]._workInProgressVersionPrimary=null;_i.length=0}var ll=we.ReactCurrentDispatcher,Oi=we.ReactCurrentBatchConfig,rt=0,de=null,he=null,ye=null,il=!1,dr=!1,cr=0,iu=0;function Ce(){throw Error(p(321))}function Fi(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!ln(e[r],n[r]))return!1;return!0}function Mi(e,n,r,l,i,s){if(rt=s,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ll.current=e===null||e.memoizedState===null?du:cu,e=r(l,i),dr){s=0;do{if(dr=!1,cr=0,25<=s)throw Error(p(301));s+=1,ye=he=null,n.updateQueue=null,ll.current=uu,e=r(l,i)}while(dr)}if(ll.current=al,n=he!==null&&he.next!==null,rt=0,ye=he=de=null,il=!1,n)throw Error(p(300));return e}function Wi(){var e=cr!==0;return cr=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?de.memoizedState=ye=e:ye=ye.next=e,ye}function Ze(){if(he===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var n=ye===null?de.memoizedState:ye.next;if(n!==null)ye=n,he=e;else{if(e===null)throw Error(p(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ye===null?de.memoizedState=ye=e:ye=ye.next=e}return ye}function ur(e,n){return typeof n=="function"?n(e):n}function Ui(e){var n=Ze(),r=n.queue;if(r===null)throw Error(p(311));r.lastRenderedReducer=e;var l=he,i=l.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}l.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,l=l.baseState;var a=o=null,d=null,h=s;do{var v=h.lane;if((rt&v)===v)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),l=h.hasEagerState?h.eagerState:e(l,h.action);else{var j={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(a=d=j,o=l):d=d.next=j,de.lanes|=v,lt|=v}h=h.next}while(h!==null&&h!==s);d===null?o=l:d.next=a,ln(l,n.memoizedState)||(_e=!0),n.memoizedState=l,n.baseState=o,n.baseQueue=d,r.lastRenderedState=l}if(e=r.interleaved,e!==null){i=e;do s=i.lane,de.lanes|=s,lt|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Hi(e){var n=Ze(),r=n.queue;if(r===null)throw Error(p(311));r.lastRenderedReducer=e;var l=r.dispatch,i=r.pending,s=n.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ln(s,n.memoizedState)||(_e=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),r.lastRenderedState=s}return[s,l]}function fa(){}function ma(e,n){var r=de,l=Ze(),i=n(),s=!ln(l.memoizedState,i);if(s&&(l.memoizedState=i,_e=!0),l=l.queue,Vi(xa.bind(null,r,l,e),[e]),l.getSnapshot!==n||s||ye!==null&&ye.memoizedState.tag&1){if(r.flags|=2048,fr(9,ha.bind(null,r,l,i,n),void 0,null),ve===null)throw Error(p(349));(rt&30)!==0||pa(r,n,i)}return i}function pa(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=de.updateQueue,n===null?(n={lastEffect:null,stores:null},de.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function ha(e,n,r,l){n.value=r,n.getSnapshot=l,ga(n)&&ya(e)}function xa(e,n,r){return r(function(){ga(n)&&ya(e)})}function ga(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!ln(e,r)}catch{return!0}}function ya(e){var n=kn(e,1);n!==null&&cn(n,e,1,-1)}function va(e){var n=gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},n.queue=e,e=e.dispatch=au.bind(null,de,e),[n.memoizedState,e]}function fr(e,n,r,l){return e={tag:e,create:n,destroy:r,deps:l,next:null},n=de.updateQueue,n===null?(n={lastEffect:null,stores:null},de.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,n.lastEffect=e)),e}function ja(){return Ze().memoizedState}function sl(e,n,r,l){var i=gn();de.flags|=e,i.memoizedState=fr(1|n,r,void 0,l===void 0?null:l)}function ol(e,n,r,l){var i=Ze();l=l===void 0?null:l;var s=void 0;if(he!==null){var o=he.memoizedState;if(s=o.destroy,l!==null&&Fi(l,o.deps)){i.memoizedState=fr(n,r,s,l);return}}de.flags|=e,i.memoizedState=fr(1|n,r,s,l)}function Sa(e,n){return sl(8390656,8,e,n)}function Vi(e,n){return ol(2048,8,e,n)}function Na(e,n){return ol(4,2,e,n)}function ba(e,n){return ol(4,4,e,n)}function wa(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ka(e,n,r){return r=r!=null?r.concat([e]):null,ol(4,4,wa.bind(null,n,e),r)}function $i(){}function Ca(e,n){var r=Ze();n=n===void 0?null:n;var l=r.memoizedState;return l!==null&&n!==null&&Fi(n,l[1])?l[0]:(r.memoizedState=[e,n],e)}function La(e,n){var r=Ze();n=n===void 0?null:n;var l=r.memoizedState;return l!==null&&n!==null&&Fi(n,l[1])?l[0]:(e=e(),r.memoizedState=[e,n],e)}function Ea(e,n,r){return(rt&21)===0?(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=r):(ln(r,n)||(r=ro(),de.lanes|=r,lt|=r,e.baseState=!0),n)}function su(e,n){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var l=Oi.transition;Oi.transition={};try{e(!1),n()}finally{ee=r,Oi.transition=l}}function Ra(){return Ze().memoizedState}function ou(e,n,r){var l=$n(e);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},za(e))Pa(n,r);else if(r=oa(e,n,r,l),r!==null){var i=Pe();cn(r,e,l,i),Ia(r,n,l)}}function au(e,n,r){var l=$n(e),i={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(za(e))Pa(n,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var o=n.lastRenderedState,a=s(o,r);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var d=n.interleaved;d===null?(i.next=i,Ii(n)):(i.next=d.next,d.next=i),n.interleaved=i;return}}catch{}finally{}r=oa(e,n,i,l),r!==null&&(i=Pe(),cn(r,e,l,i),Ia(r,n,l))}}function za(e){var n=e.alternate;return e===de||n!==null&&n===de}function Pa(e,n){dr=il=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Ia(e,n,r){if((r&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,Gl(e,r)}}var al={readContext:Xe,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},du={readContext:Xe,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:Xe,useEffect:Sa,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,sl(4194308,4,wa.bind(null,n,e),r)},useLayoutEffect:function(e,n){return sl(4194308,4,e,n)},useInsertionEffect:function(e,n){return sl(4,2,e,n)},useMemo:function(e,n){var r=gn();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var l=gn();return n=r!==void 0?r(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=ou.bind(null,de,e),[l.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:va,useDebugValue:$i,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=va(!1),n=e[0];return e=su.bind(null,e[1]),gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var l=de,i=gn();if(oe){if(r===void 0)throw Error(p(407));r=r()}else{if(r=n(),ve===null)throw Error(p(349));(rt&30)!==0||pa(l,n,r)}i.memoizedState=r;var s={value:r,getSnapshot:n};return i.queue=s,Sa(xa.bind(null,l,s,e),[e]),l.flags|=2048,fr(9,ha.bind(null,l,s,r,n),void 0,null),r},useId:function(){var e=gn(),n=ve.identifierPrefix;if(oe){var r=wn,l=bn;r=(l&~(1<<32-rn(l)-1)).toString(32)+r,n=":"+n+"R"+r,r=cr++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=iu++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},cu={readContext:Xe,useCallback:Ca,useContext:Xe,useEffect:Vi,useImperativeHandle:ka,useInsertionEffect:Na,useLayoutEffect:ba,useMemo:La,useReducer:Ui,useRef:ja,useState:function(){return Ui(ur)},useDebugValue:$i,useDeferredValue:function(e){var n=Ze();return Ea(n,he.memoizedState,e)},useTransition:function(){var e=Ui(ur)[0],n=Ze().memoizedState;return[e,n]},useMutableSource:fa,useSyncExternalStore:ma,useId:Ra,unstable_isNewReconciler:!1},uu={readContext:Xe,useCallback:Ca,useContext:Xe,useEffect:Vi,useImperativeHandle:ka,useInsertionEffect:Na,useLayoutEffect:ba,useMemo:La,useReducer:Hi,useRef:ja,useState:function(){return Hi(ur)},useDebugValue:$i,useDeferredValue:function(e){var n=Ze();return he===null?n.memoizedState=e:Ea(n,he.memoizedState,e)},useTransition:function(){var e=Hi(ur)[0],n=Ze().memoizedState;return[e,n]},useMutableSource:fa,useSyncExternalStore:ma,useId:Ra,unstable_isNewReconciler:!1};function on(e,n){if(e&&e.defaultProps){n=R({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Qi(e,n,r,l){n=e.memoizedState,r=r(l,n),r=r==null?n:R({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var dl={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var l=Pe(),i=$n(e),s=Cn(l,i);s.payload=n,r!=null&&(s.callback=r),n=Wn(e,s,i),n!==null&&(cn(n,e,i,l),nl(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var l=Pe(),i=$n(e),s=Cn(l,i);s.tag=1,s.payload=n,r!=null&&(s.callback=r),n=Wn(e,s,i),n!==null&&(cn(n,e,i,l),nl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Pe(),l=$n(e),i=Cn(r,l);i.tag=2,n!=null&&(i.callback=n),n=Wn(e,i,l),n!==null&&(cn(n,e,l,r),nl(n,e,l))}};function Ba(e,n,r,l,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,o):n.prototype&&n.prototype.isPureReactComponent?!qt(r,l)||!qt(i,s):!0}function Ta(e,n,r){var l=!1,i=On,s=n.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(i=De(n)?qn:ke.current,l=n.contextTypes,s=(l=l!=null)?St(e,i):On),n=new n(r,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=dl,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),n}function Da(e,n,r,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==e&&dl.enqueueReplaceState(n,n.state,null)}function Gi(e,n,r,l){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Bi(e);var s=n.contextType;typeof s=="object"&&s!==null?i.context=Xe(s):(s=De(n)?qn:ke.current,i.context=St(e,s)),i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Qi(e,n,s,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&dl.enqueueReplaceState(i,i.state,null),tl(e,r,i,l),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rt(e,n){try{var r="",l=n;do r+=G(l),l=l.return;while(l);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:i,digest:null}}function Ki(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function Yi(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var fu=typeof WeakMap=="function"?WeakMap:Map;function _a(e,n,r){r=Cn(-1,r),r.tag=3,r.payload={element:null};var l=n.value;return r.callback=function(){xl||(xl=!0,cs=l),Yi(e,n)},r}function Aa(e,n,r){r=Cn(-1,r),r.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;r.payload=function(){return l(i)},r.callback=function(){Yi(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Yi(e,n),typeof l!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),r}function Oa(e,n,r){var l=e.pingCache;if(l===null){l=e.pingCache=new fu;var i=new Set;l.set(n,i)}else i=l.get(n),i===void 0&&(i=new Set,l.set(n,i));i.has(r)||(i.add(r),e=Cu.bind(null,e,n,r),n.then(e,e))}function Fa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ma(e,n,r,l,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=Cn(-1,1),n.tag=2,Wn(r,n,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var mu=we.ReactCurrentOwner,_e=!1;function ze(e,n,r,l){n.child=e===null?sa(n,null,r,l):kt(n,e.child,r,l)}function Wa(e,n,r,l,i){r=r.render;var s=n.ref;return Lt(n,i),l=Mi(e,n,r,l,s,i),r=Wi(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ln(e,n,i)):(oe&&r&&bi(n),n.flags|=1,ze(e,n,l,i),n.child)}function Ua(e,n,r,l,i){if(e===null){var s=r.type;return typeof s=="function"&&!gs(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=s,Ha(e,n,s,l,i)):(e=Nl(r.type,null,l,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:qt,r(o,l)&&e.ref===n.ref)return Ln(e,n,i)}return n.flags|=1,e=Gn(s,l),e.ref=n.ref,e.return=n,n.child=e}function Ha(e,n,r,l,i){if(e!==null){var s=e.memoizedProps;if(qt(s,l)&&e.ref===n.ref)if(_e=!1,n.pendingProps=l=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(_e=!0);else return n.lanes=e.lanes,Ln(e,n,i)}return Xi(e,n,r,l,i)}function Va(e,n,r){var l=n.pendingProps,i=l.children,s=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Pt,Qe),Qe|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,re(Pt,Qe),Qe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=s!==null?s.baseLanes:r,re(Pt,Qe),Qe|=l}else s!==null?(l=s.baseLanes|r,n.memoizedState=null):l=r,re(Pt,Qe),Qe|=l;return ze(e,n,i,r),n.child}function $a(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Xi(e,n,r,l,i){var s=De(r)?qn:ke.current;return s=St(n,s),Lt(n,i),r=Mi(e,n,r,l,s,i),l=Wi(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ln(e,n,i)):(oe&&l&&bi(n),n.flags|=1,ze(e,n,r,i),n.child)}function Qa(e,n,r,l,i){if(De(r)){var s=!0;Gr(n)}else s=!1;if(Lt(n,i),n.stateNode===null)ul(e,n),Ta(n,r,l),Gi(n,r,l,i),l=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var d=o.context,h=r.contextType;typeof h=="object"&&h!==null?h=Xe(h):(h=De(r)?qn:ke.current,h=St(n,h));var v=r.getDerivedStateFromProps,j=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";j||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==l||d!==h)&&Da(n,o,l,h),Mn=!1;var g=n.memoizedState;o.state=g,tl(n,l,o,i),d=n.memoizedState,a!==l||g!==d||Te.current||Mn?(typeof v=="function"&&(Qi(n,r,v,l),d=n.memoizedState),(a=Mn||Ba(n,r,a,l,g,d,h))?(j||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=d),o.props=l,o.state=d,o.context=h,l=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{o=n.stateNode,aa(e,n),a=n.memoizedProps,h=n.type===n.elementType?a:on(n.type,a),o.props=h,j=n.pendingProps,g=o.context,d=r.contextType,typeof d=="object"&&d!==null?d=Xe(d):(d=De(r)?qn:ke.current,d=St(n,d));var k=r.getDerivedStateFromProps;(v=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==j||g!==d)&&Da(n,o,l,d),Mn=!1,g=n.memoizedState,o.state=g,tl(n,l,o,i);var z=n.memoizedState;a!==j||g!==z||Te.current||Mn?(typeof k=="function"&&(Qi(n,r,k,l),z=n.memoizedState),(h=Mn||Ba(n,r,h,l,g,z,d)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,z,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,z,d)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=z),o.props=l,o.state=z,o.context=d,l=h):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),l=!1)}return Zi(e,n,r,l,s,i)}function Zi(e,n,r,l,i,s){$a(e,n);var o=(n.flags&128)!==0;if(!l&&!o)return i&&Zo(n,r,!1),Ln(e,n,s);l=n.stateNode,mu.current=n;var a=o&&typeof r.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&o?(n.child=kt(n,e.child,null,s),n.child=kt(n,null,a,s)):ze(e,n,a,s),n.memoizedState=l.state,i&&Zo(n,r,!0),n.child}function Ga(e){var n=e.stateNode;n.pendingContext?Yo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Yo(e,n.context,!1),Ti(e,n.containerInfo)}function Ka(e,n,r,l,i){return wt(),Li(i),n.flags|=256,ze(e,n,r,l),n.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function Ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ya(e,n,r){var l=n.pendingProps,i=ae.current,s=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ae,i&1),e===null)return Ci(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=l.children,e=l.fallback,s?(l=n.mode,s=n.child,o={mode:"hidden",children:o},(l&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bl(o,l,0,null),e=at(e,l,r,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=Ji(r),n.memoizedState=qi,e):es(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pu(e,n,o,l,a,i,r);if(s){s=l.fallback,o=n.mode,i=e.child,a=i.sibling;var d={mode:"hidden",children:l.children};return(o&1)===0&&n.child!==i?(l=n.child,l.childLanes=0,l.pendingProps=d,n.deletions=null):(l=Gn(i,d),l.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gn(a,s):(s=at(s,o,r,null),s.flags|=2),s.return=n,l.return=n,l.sibling=s,n.child=l,l=s,s=n.child,o=e.child.memoizedState,o=o===null?Ji(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,n.memoizedState=qi,l}return s=e.child,e=s.sibling,l=Gn(s,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=r),l.return=n,l.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=l,n.memoizedState=null,l}function es(e,n){return n=bl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function cl(e,n,r,l){return l!==null&&Li(l),kt(n,e.child,null,r),e=es(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pu(e,n,r,l,i,s,o){if(r)return n.flags&256?(n.flags&=-257,l=Ki(Error(p(422))),cl(e,n,o,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=l.fallback,i=n.mode,l=bl({mode:"visible",children:l.children},i,0,null),s=at(s,i,o,null),s.flags|=2,l.return=n,s.return=n,l.sibling=s,n.child=l,(n.mode&1)!==0&&kt(n,e.child,null,o),n.child.memoizedState=Ji(o),n.memoizedState=qi,s);if((n.mode&1)===0)return cl(e,n,o,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var a=l.dgst;return l=a,s=Error(p(419)),l=Ki(s,l,void 0),cl(e,n,o,l)}if(a=(o&e.childLanes)!==0,_e||a){if(l=ve,l!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(l.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(e,i),cn(l,e,i,-1))}return xs(),l=Ki(Error(p(421))),cl(e,n,o,l)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Lu.bind(null,e),i._reactRetry=n,null):(e=s.treeContext,$e=_n(i.nextSibling),Ve=n,oe=!0,sn=null,e!==null&&(Ke[Ye++]=bn,Ke[Ye++]=wn,Ke[Ye++]=Jn,bn=e.id,wn=e.overflow,Jn=n),n=es(n,l.children),n.flags|=4096,n)}function Xa(e,n,r){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Pi(e.return,n,r)}function ns(e,n,r,l,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=r,s.tailMode=i)}function Za(e,n,r){var l=n.pendingProps,i=l.revealOrder,s=l.tail;if(ze(e,n,l.children,r),l=ae.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,r,n);else if(e.tag===19)Xa(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(re(ae,l),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&rl(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),ns(n,!1,i,r,s);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&rl(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ns(n,!0,r,null,s);break;case"together":ns(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ul(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ln(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),lt|=n.lanes,(r&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(p(153));if(n.child!==null){for(e=n.child,r=Gn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Gn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function hu(e,n,r){switch(n.tag){case 3:Ga(n),wt();break;case 5:ua(n);break;case 1:De(n.type)&&Gr(n);break;case 4:Ti(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,i=n.memoizedProps.value;re(Jr,l._currentValue),l._currentValue=i;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(re(ae,ae.current&1),n.flags|=128,null):(r&n.child.childLanes)!==0?Ya(e,n,r):(re(ae,ae.current&1),e=Ln(e,n,r),e!==null?e.sibling:null);re(ae,ae.current&1);break;case 19:if(l=(r&n.childLanes)!==0,(e.flags&128)!==0){if(l)return Za(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ae,ae.current),l)break;return null;case 22:case 23:return n.lanes=0,Va(e,n,r)}return Ln(e,n,r)}var qa,ts,Ja,ed;qa=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ts=function(){},Ja=function(e,n,r,l){var i=e.memoizedProps;if(i!==l){e=n.stateNode,tt(xn.current);var s=null;switch(r){case"input":i=Pl(e,i),l=Pl(e,l),s=[];break;case"select":i=R({},i,{value:void 0}),l=R({},l,{value:void 0}),s=[];break;case"textarea":i=Tl(e,i),l=Tl(e,l),s=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Vr)}_l(r,l);var o;r=null;for(h in i)if(!l.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(P.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in l){var d=l[h];if(a=i!=null?i[h]:void 0,l.hasOwnProperty(h)&&d!==a&&(d!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in d)d.hasOwnProperty(o)&&a[o]!==d[o]&&(r||(r={}),r[o]=d[o])}else r||(s||(s=[]),s.push(h,r)),r=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(P.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&le("scroll",e),s||a===d||(s=[])):(s=s||[]).push(h,d))}r&&(s=s||[]).push("style",r);var h=s;(n.updateQueue=h)&&(n.flags|=4)}},ed=function(e,n,r,l){r!==l&&(n.flags|=4)};function mr(e,n){if(!oe)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=r,n}function xu(e,n,r){var l=n.pendingProps;switch(wi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return De(n.type)&&Qr(),Le(n),null;case 3:return l=n.stateNode,Et(),ie(Te),ie(ke),Ai(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sn!==null&&(ms(sn),sn=null))),ts(e,n),Le(n),null;case 5:Di(n);var i=tt(ar.current);if(r=n.type,e!==null&&n.stateNode!=null)Ja(e,n,r,l,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(p(166));return Le(n),null}if(e=tt(xn.current),Zr(n)){l=n.stateNode,r=n.type;var s=n.memoizedProps;switch(l[hn]=n,l[rr]=s,e=(n.mode&1)!==0,r){case"dialog":le("cancel",l),le("close",l);break;case"iframe":case"object":case"embed":le("load",l);break;case"video":case"audio":for(i=0;i<er.length;i++)le(er[i],l);break;case"source":le("error",l);break;case"img":case"image":case"link":le("error",l),le("load",l);break;case"details":le("toggle",l);break;case"input":Bs(l,s),le("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!s.multiple},le("invalid",l);break;case"textarea":_s(l,s),le("invalid",l)}_l(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?l.textContent!==a&&(s.suppressHydrationWarning!==!0&&Hr(l.textContent,a,e),i=["children",a]):typeof a=="number"&&l.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Hr(l.textContent,a,e),i=["children",""+a]):P.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",l)}switch(r){case"input":jr(l),Ds(l,s,!0);break;case"textarea":jr(l),Os(l);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(l.onclick=Vr)}l=i,n.updateQueue=l,l!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=o.createElement(r,{is:l.is}):(e=o.createElement(r),r==="select"&&(o=e,l.multiple?o.multiple=!0:l.size&&(o.size=l.size))):e=o.createElementNS(e,r),e[hn]=n,e[rr]=l,qa(e,n,!1,!1),n.stateNode=e;e:{switch(o=Al(r,l),r){case"dialog":le("cancel",e),le("close",e),i=l;break;case"iframe":case"object":case"embed":le("load",e),i=l;break;case"video":case"audio":for(i=0;i<er.length;i++)le(er[i],e);i=l;break;case"source":le("error",e),i=l;break;case"img":case"image":case"link":le("error",e),le("load",e),i=l;break;case"details":le("toggle",e),i=l;break;case"input":Bs(e,l),i=Pl(e,l),le("invalid",e);break;case"option":i=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},i=R({},l,{value:void 0}),le("invalid",e);break;case"textarea":_s(e,l),i=Tl(e,l),le("invalid",e);break;default:i=l}_l(r,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?Us(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Ms(e,d)):s==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Dt(e,d):typeof d=="number"&&Dt(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(P.hasOwnProperty(s)?d!=null&&s==="onScroll"&&le("scroll",e):d!=null&&en(e,s,d,o))}switch(r){case"input":jr(e),Ds(e,l,!1);break;case"textarea":jr(e),Os(e);break;case"option":l.value!=null&&e.setAttribute("value",""+J(l.value));break;case"select":e.multiple=!!l.multiple,s=l.value,s!=null?dt(e,!!l.multiple,s,!1):l.defaultValue!=null&&dt(e,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vr)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)ed(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(p(166));if(r=tt(ar.current),tt(xn.current),Zr(n)){if(l=n.stateNode,r=n.memoizedProps,l[hn]=n,(s=l.nodeValue!==r)&&(e=Ve,e!==null))switch(e.tag){case 3:Hr(l.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(l.nodeValue,r,(e.mode&1)!==0)}s&&(n.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[hn]=n,n.stateNode=l}return Le(n),null;case 13:if(ie(ae),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&$e!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ra(),wt(),n.flags|=98560,s=!1;else if(s=Zr(n),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(p(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(p(317));s[hn]=n}else wt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),s=!1}else sn!==null&&(ms(sn),sn=null),s=!0;if(!s)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=r,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ae.current&1)!==0?xe===0&&(xe=3):xs())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return Et(),ts(e,n),e===null&&nr(n.stateNode.containerInfo),Le(n),null;case 10:return zi(n.type._context),Le(n),null;case 17:return De(n.type)&&Qr(),Le(n),null;case 19:if(ie(ae),s=n.memoizedState,s===null)return Le(n),null;if(l=(n.flags&128)!==0,o=s.rendering,o===null)if(l)mr(s,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=rl(e),o!==null){for(n.flags|=128,mr(s,!1),l=o.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=r,r=n.child;r!==null;)s=r,e=l,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return re(ae,ae.current&1|2),n.child}e=e.sibling}s.tail!==null&&fe()>It&&(n.flags|=128,l=!0,mr(s,!1),n.lanes=4194304)}else{if(!l)if(e=rl(o),e!==null){if(n.flags|=128,l=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),mr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Le(n),null}else 2*fe()-s.renderingStartTime>It&&r!==1073741824&&(n.flags|=128,l=!0,mr(s,!1),n.lanes=4194304);s.isBackwards?(o.sibling=n.child,n.child=o):(r=s.last,r!==null?r.sibling=o:n.child=o,s.last=o)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=fe(),n.sibling=null,r=ae.current,re(ae,l?r&1|2:r&1),n):(Le(n),null);case 22:case 23:return hs(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Qe&1073741824)!==0&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(p(156,n.tag))}function gu(e,n){switch(wi(n),n.tag){case 1:return De(n.type)&&Qr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Et(),ie(Te),ie(ke),Ai(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Di(n),null;case 13:if(ie(ae),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(p(340));wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(ae),null;case 4:return Et(),null;case 10:return zi(n.type._context),null;case 22:case 23:return hs(),null;case 24:return null;default:return null}}var fl=!1,Ee=!1,yu=typeof WeakSet=="function"?WeakSet:Set,E=null;function zt(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){ue(e,n,l)}else r.current=null}function rs(e,n,r){try{r()}catch(l){ue(e,n,l)}}var nd=!1;function vu(e,n){if(hi=Ir,e=Bo(),oi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var i=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,a=-1,d=-1,h=0,v=0,j=e,g=null;n:for(;;){for(var k;j!==r||i!==0&&j.nodeType!==3||(a=o+i),j!==s||l!==0&&j.nodeType!==3||(d=o+l),j.nodeType===3&&(o+=j.nodeValue.length),(k=j.firstChild)!==null;)g=j,j=k;for(;;){if(j===e)break n;if(g===r&&++h===i&&(a=o),g===s&&++v===l&&(d=o),(k=j.nextSibling)!==null)break;j=g,g=j.parentNode}j=k}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(xi={focusedElem:e,selectionRange:r},Ir=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var z=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var B=z.memoizedProps,me=z.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?B:on(n.type,B),me);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(S){ue(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return z=nd,nd=!1,z}function pr(e,n,r){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&rs(n,r,s)}i=i.next}while(i!==l)}}function ml(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var l=r.create;r.destroy=l()}r=r.next}while(r!==n)}}function ls(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function td(e){var n=e.alternate;n!==null&&(e.alternate=null,td(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[hn],delete n[rr],delete n[ji],delete n[nu],delete n[tu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Vr));else if(l!==4&&(e=e.child,e!==null))for(is(e,n,r),e=e.sibling;e!==null;)is(e,n,r),e=e.sibling}function ss(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(ss(e,n,r),e=e.sibling;e!==null;)ss(e,n,r),e=e.sibling}var Se=null,an=!1;function Un(e,n,r){for(r=r.child;r!==null;)id(e,n,r),r=r.sibling}function id(e,n,r){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Cr,r)}catch{}switch(r.tag){case 5:Ee||zt(r,n);case 6:var l=Se,i=an;Se=null,Un(e,n,r),Se=l,an=i,Se!==null&&(an?(e=Se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Se.removeChild(r.stateNode));break;case 18:Se!==null&&(an?(e=Se,r=r.stateNode,e.nodeType===8?vi(e.parentNode,r):e.nodeType===1&&vi(e,r),Qt(e)):vi(Se,r.stateNode));break;case 4:l=Se,i=an,Se=r.stateNode.containerInfo,an=!0,Un(e,n,r),Se=l,an=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&rs(r,n,o),i=i.next}while(i!==l)}Un(e,n,r);break;case 1:if(!Ee&&(zt(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(a){ue(r,n,a)}Un(e,n,r);break;case 21:Un(e,n,r);break;case 22:r.mode&1?(Ee=(l=Ee)||r.memoizedState!==null,Un(e,n,r),Ee=l):Un(e,n,r);break;default:Un(e,n,r)}}function sd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new yu),n.forEach(function(l){var i=Eu.bind(null,e,l);r.has(l)||(r.add(l),l.then(i,i))})}}function dn(e,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var i=r[l];try{var s=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,an=!1;break e;case 3:Se=a.stateNode.containerInfo,an=!0;break e;case 4:Se=a.stateNode.containerInfo,an=!0;break e}a=a.return}if(Se===null)throw Error(p(160));id(s,o,i),Se=null,an=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(h){ue(i,n,h)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)od(n,e),n=n.sibling}function od(e,n){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(n,e),yn(e),l&4){try{pr(3,e,e.return),ml(3,e)}catch(B){ue(e,e.return,B)}try{pr(5,e,e.return)}catch(B){ue(e,e.return,B)}}break;case 1:dn(n,e),yn(e),l&512&&r!==null&&zt(r,r.return);break;case 5:if(dn(n,e),yn(e),l&512&&r!==null&&zt(r,r.return),e.flags&32){var i=e.stateNode;try{Dt(i,"")}catch(B){ue(e,e.return,B)}}if(l&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ts(i,s),Al(a,o);var h=Al(a,s);for(o=0;o<d.length;o+=2){var v=d[o],j=d[o+1];v==="style"?Us(i,j):v==="dangerouslySetInnerHTML"?Ms(i,j):v==="children"?Dt(i,j):en(i,v,j,h)}switch(a){case"input":Il(i,s);break;case"textarea":As(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?dt(i,!!s.multiple,k,!1):g!==!!s.multiple&&(s.defaultValue!=null?dt(i,!!s.multiple,s.defaultValue,!0):dt(i,!!s.multiple,s.multiple?[]:"",!1))}i[rr]=s}catch(B){ue(e,e.return,B)}}break;case 6:if(dn(n,e),yn(e),l&4){if(e.stateNode===null)throw Error(p(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(B){ue(e,e.return,B)}}break;case 3:if(dn(n,e),yn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(B){ue(e,e.return,B)}break;case 4:dn(n,e),yn(e);break;case 13:dn(n,e),yn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ds=fe())),l&4&&sd(e);break;case 22:if(v=r!==null&&r.memoizedState!==null,e.mode&1?(Ee=(h=Ee)||v,dn(n,e),Ee=h):dn(n,e),yn(e),l&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!v&&(e.mode&1)!==0)for(E=e,v=e.child;v!==null;){for(j=E=v;E!==null;){switch(g=E,k=g.child,g.tag){case 0:case 11:case 14:case 15:pr(4,g,g.return);break;case 1:zt(g,g.return);var z=g.stateNode;if(typeof z.componentWillUnmount=="function"){l=g,r=g.return;try{n=l,z.props=n.memoizedProps,z.state=n.memoizedState,z.componentWillUnmount()}catch(B){ue(l,r,B)}}break;case 5:zt(g,g.return);break;case 22:if(g.memoizedState!==null){cd(j);continue}}k!==null?(k.return=g,E=k):cd(j)}v=v.sibling}e:for(v=null,j=e;;){if(j.tag===5){if(v===null){v=j;try{i=j.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=j.stateNode,d=j.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Ws("display",o))}catch(B){ue(e,e.return,B)}}}else if(j.tag===6){if(v===null)try{j.stateNode.nodeValue=h?"":j.memoizedProps}catch(B){ue(e,e.return,B)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;v===j&&(v=null),j=j.return}v===j&&(v=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:dn(n,e),yn(e),l&4&&sd(e);break;case 21:break;default:dn(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(rd(r)){var l=r;break e}r=r.return}throw Error(p(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(Dt(i,""),l.flags&=-33);var s=ld(e);ss(e,s,i);break;case 3:case 4:var o=l.stateNode.containerInfo,a=ld(e);is(e,a,o);break;default:throw Error(p(161))}}catch(d){ue(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ju(e,n,r){E=e,ad(e)}function ad(e,n,r){for(var l=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&l){var o=i.memoizedState!==null||fl;if(!o){var a=i.alternate,d=a!==null&&a.memoizedState!==null||Ee;a=fl;var h=Ee;if(fl=o,(Ee=d)&&!h)for(E=i;E!==null;)o=E,d=o.child,o.tag===22&&o.memoizedState!==null?ud(i):d!==null?(d.return=o,E=d):ud(i);for(;s!==null;)E=s,ad(s),s=s.sibling;E=i,fl=a,Ee=h}dd(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,E=s):dd(e)}}function dd(e){for(;E!==null;){var n=E;if((n.flags&8772)!==0){var r=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ee||ml(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Ee)if(r===null)l.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:on(n.type,r.memoizedProps);l.componentDidUpdate(i,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&ca(n,s,l);break;case 3:var o=n.updateQueue;if(o!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}ca(n,o,r)}break;case 5:var a=n.stateNode;if(r===null&&n.flags&4){r=a;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var h=n.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var j=v.dehydrated;j!==null&&Qt(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}Ee||n.flags&512&&ls(n)}catch(g){ue(n,n.return,g)}}if(n===e){E=null;break}if(r=n.sibling,r!==null){r.return=n.return,E=r;break}E=n.return}}function cd(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var r=n.sibling;if(r!==null){r.return=n.return,E=r;break}E=n.return}}function ud(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{ml(4,n)}catch(d){ue(n,r,d)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var i=n.return;try{l.componentDidMount()}catch(d){ue(n,i,d)}}var s=n.return;try{ls(n)}catch(d){ue(n,s,d)}break;case 5:var o=n.return;try{ls(n)}catch(d){ue(n,o,d)}}}catch(d){ue(n,n.return,d)}if(n===e){E=null;break}var a=n.sibling;if(a!==null){a.return=n.return,E=a;break}E=n.return}}var Su=Math.ceil,pl=we.ReactCurrentDispatcher,os=we.ReactCurrentOwner,qe=we.ReactCurrentBatchConfig,Q=0,ve=null,pe=null,Ne=0,Qe=0,Pt=An(0),xe=0,hr=null,lt=0,hl=0,as=0,xr=null,Ae=null,ds=0,It=1/0,En=null,xl=!1,cs=null,Hn=null,gl=!1,Vn=null,yl=0,gr=0,us=null,vl=-1,jl=0;function Pe(){return(Q&6)!==0?fe():vl!==-1?vl:vl=fe()}function $n(e){return(e.mode&1)===0?1:(Q&2)!==0&&Ne!==0?Ne&-Ne:lu.transition!==null?(jl===0&&(jl=ro()),jl):(e=ee,e!==0||(e=window.event,e=e===void 0?16:mo(e.type)),e)}function cn(e,n,r,l){if(50<gr)throw gr=0,us=null,Error(p(185));Wt(e,r,l),((Q&2)===0||e!==ve)&&(e===ve&&((Q&2)===0&&(hl|=r),xe===4&&Qn(e,Ne)),Oe(e,l),r===1&&Q===0&&(n.mode&1)===0&&(It=fe()+500,Kr&&Fn()))}function Oe(e,n){var r=e.callbackNode;lc(e,n);var l=Rr(e,e===ve?Ne:0);if(l===0)r!==null&&eo(r),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(r!=null&&eo(r),n===1)e.tag===0?ru(md.bind(null,e)):qo(md.bind(null,e)),Jc(function(){(Q&6)===0&&Fn()}),r=null;else{switch(lo(l)){case 1:r=Vl;break;case 4:r=no;break;case 16:r=kr;break;case 536870912:r=to;break;default:r=kr}r=Sd(r,fd.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function fd(e,n){if(vl=-1,jl=0,(Q&6)!==0)throw Error(p(327));var r=e.callbackNode;if(Bt()&&e.callbackNode!==r)return null;var l=Rr(e,e===ve?Ne:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=Sl(e,l);else{n=l;var i=Q;Q|=2;var s=hd();(ve!==e||Ne!==n)&&(En=null,It=fe()+500,st(e,n));do try{wu();break}catch(a){pd(e,a)}while(!0);Ri(),pl.current=s,Q=i,pe!==null?n=0:(ve=null,Ne=0,n=xe)}if(n!==0){if(n===2&&(i=$l(e),i!==0&&(l=i,n=fs(e,i))),n===1)throw r=hr,st(e,0),Qn(e,l),Oe(e,fe()),r;if(n===6)Qn(e,l);else{if(i=e.current.alternate,(l&30)===0&&!Nu(i)&&(n=Sl(e,l),n===2&&(s=$l(e),s!==0&&(l=s,n=fs(e,s))),n===1))throw r=hr,st(e,0),Qn(e,l),Oe(e,fe()),r;switch(e.finishedWork=i,e.finishedLanes=l,n){case 0:case 1:throw Error(p(345));case 2:ot(e,Ae,En);break;case 3:if(Qn(e,l),(l&130023424)===l&&(n=ds+500-fe(),10<n)){if(Rr(e,0)!==0)break;if(i=e.suspendedLanes,(i&l)!==l){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yi(ot.bind(null,e,Ae,En),n);break}ot(e,Ae,En);break;case 4:if(Qn(e,l),(l&4194240)===l)break;for(n=e.eventTimes,i=-1;0<l;){var o=31-rn(l);s=1<<o,o=n[o],o>i&&(i=o),l&=~s}if(l=i,l=fe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Su(l/1960))-l,10<l){e.timeoutHandle=yi(ot.bind(null,e,Ae,En),l);break}ot(e,Ae,En);break;case 5:ot(e,Ae,En);break;default:throw Error(p(329))}}}return Oe(e,fe()),e.callbackNode===r?fd.bind(null,e):null}function fs(e,n){var r=xr;return e.current.memoizedState.isDehydrated&&(st(e,n).flags|=256),e=Sl(e,n),e!==2&&(n=Ae,Ae=r,n!==null&&ms(n)),e}function ms(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Nu(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var i=r[l],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qn(e,n){for(n&=~as,n&=~hl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-rn(n),l=1<<r;e[r]=-1,n&=~l}}function md(e){if((Q&6)!==0)throw Error(p(327));Bt();var n=Rr(e,0);if((n&1)===0)return Oe(e,fe()),null;var r=Sl(e,n);if(e.tag!==0&&r===2){var l=$l(e);l!==0&&(n=l,r=fs(e,l))}if(r===1)throw r=hr,st(e,0),Qn(e,n),Oe(e,fe()),r;if(r===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ot(e,Ae,En),Oe(e,fe()),null}function ps(e,n){var r=Q;Q|=1;try{return e(n)}finally{Q=r,Q===0&&(It=fe()+500,Kr&&Fn())}}function it(e){Vn!==null&&Vn.tag===0&&(Q&6)===0&&Bt();var n=Q;Q|=1;var r=qe.transition,l=ee;try{if(qe.transition=null,ee=1,e)return e()}finally{ee=l,qe.transition=r,Q=n,(Q&6)===0&&Fn()}}function hs(){Qe=Pt.current,ie(Pt)}function st(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,qc(r)),pe!==null)for(r=pe.return;r!==null;){var l=r;switch(wi(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Qr();break;case 3:Et(),ie(Te),ie(ke),Ai();break;case 5:Di(l);break;case 4:Et();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:zi(l.type._context);break;case 22:case 23:hs()}r=r.return}if(ve=e,pe=e=Gn(e.current,null),Ne=Qe=n,xe=0,hr=null,as=hl=lt=0,Ae=xr=null,nt!==null){for(n=0;n<nt.length;n++)if(r=nt[n],l=r.interleaved,l!==null){r.interleaved=null;var i=l.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,l.next=o}r.pending=l}nt=null}return e}function pd(e,n){do{var r=pe;try{if(Ri(),ll.current=al,il){for(var l=de.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}il=!1}if(rt=0,ye=he=de=null,dr=!1,cr=0,os.current=null,r===null||r.return===null){xe=1,hr=n,pe=null;break}e:{var s=e,o=r.return,a=r,d=n;if(n=Ne,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,v=a,j=v.tag;if((v.mode&1)===0&&(j===0||j===11||j===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Fa(o);if(k!==null){k.flags&=-257,Ma(k,o,a,s,n),k.mode&1&&Oa(s,h,n),n=k,d=h;var z=n.updateQueue;if(z===null){var B=new Set;B.add(d),n.updateQueue=B}else z.add(d);break e}else{if((n&1)===0){Oa(s,h,n),xs();break e}d=Error(p(426))}}else if(oe&&a.mode&1){var me=Fa(o);if(me!==null){(me.flags&65536)===0&&(me.flags|=256),Ma(me,o,a,s,n),Li(Rt(d,a));break e}}s=d=Rt(d,a),xe!==4&&(xe=2),xr===null?xr=[s]:xr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var f=_a(s,d,n);da(s,f);break e;case 1:a=d;var c=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hn===null||!Hn.has(m)))){s.flags|=65536,n&=-n,s.lanes|=n;var S=Aa(s,a,n);da(s,S);break e}}s=s.return}while(s!==null)}gd(r)}catch(T){n=T,pe===r&&r!==null&&(pe=r=r.return);continue}break}while(!0)}function hd(){var e=pl.current;return pl.current=al,e===null?al:e}function xs(){(xe===0||xe===3||xe===2)&&(xe=4),ve===null||(lt&268435455)===0&&(hl&268435455)===0||Qn(ve,Ne)}function Sl(e,n){var r=Q;Q|=2;var l=hd();(ve!==e||Ne!==n)&&(En=null,st(e,n));do try{bu();break}catch(i){pd(e,i)}while(!0);if(Ri(),Q=r,pl.current=l,pe!==null)throw Error(p(261));return ve=null,Ne=0,xe}function bu(){for(;pe!==null;)xd(pe)}function wu(){for(;pe!==null&&!Yd();)xd(pe)}function xd(e){var n=jd(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,n===null?gd(e):pe=n,os.current=null}function gd(e){var n=e;do{var r=n.alternate;if(e=n.return,(n.flags&32768)===0){if(r=xu(r,n,Qe),r!==null){pe=r;return}}else{if(r=gu(r,n),r!==null){r.flags&=32767,pe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,pe=null;return}}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);xe===0&&(xe=5)}function ot(e,n,r){var l=ee,i=qe.transition;try{qe.transition=null,ee=1,ku(e,n,r,l)}finally{qe.transition=i,ee=l}return null}function ku(e,n,r,l){do Bt();while(Vn!==null);if((Q&6)!==0)throw Error(p(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(ic(e,s),e===ve&&(pe=ve=null,Ne=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||gl||(gl=!0,Sd(kr,function(){return Bt(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=qe.transition,qe.transition=null;var o=ee;ee=1;var a=Q;Q|=4,os.current=null,vu(e,r),od(r,e),$c(xi),Ir=!!hi,xi=hi=null,e.current=r,ju(r),Xd(),Q=a,ee=o,qe.transition=s}else e.current=r;if(gl&&(gl=!1,Vn=e,yl=i),s=e.pendingLanes,s===0&&(Hn=null),Jd(r.stateNode),Oe(e,fe()),n!==null)for(l=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],l(i.value,{componentStack:i.stack,digest:i.digest});if(xl)throw xl=!1,e=cs,cs=null,e;return(yl&1)!==0&&e.tag!==0&&Bt(),s=e.pendingLanes,(s&1)!==0?e===us?gr++:(gr=0,us=e):gr=0,Fn(),null}function Bt(){if(Vn!==null){var e=lo(yl),n=qe.transition,r=ee;try{if(qe.transition=null,ee=16>e?16:e,Vn===null)var l=!1;else{if(e=Vn,Vn=null,yl=0,(Q&6)!==0)throw Error(p(331));var i=Q;for(Q|=4,E=e.current;E!==null;){var s=E,o=s.child;if((E.flags&16)!==0){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var h=a[d];for(E=h;E!==null;){var v=E;switch(v.tag){case 0:case 11:case 15:pr(8,v,s)}var j=v.child;if(j!==null)j.return=v,E=j;else for(;E!==null;){v=E;var g=v.sibling,k=v.return;if(td(v),v===h){E=null;break}if(g!==null){g.return=k,E=g;break}E=k}}}var z=s.alternate;if(z!==null){var B=z.child;if(B!==null){z.child=null;do{var me=B.sibling;B.sibling=null,B=me}while(B!==null)}}E=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,E=o;else e:for(;E!==null;){if(s=E,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:pr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,E=f;break e}E=s.return}}var c=e.current;for(E=c;E!==null;){o=E;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,E=m;else e:for(o=c;E!==null;){if(a=E,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ml(9,a)}}catch(T){ue(a,a.return,T)}if(a===o){E=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,E=S;break e}E=a.return}}if(Q=i,Fn(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Cr,e)}catch{}l=!0}return l}finally{ee=r,qe.transition=n}}return!1}function yd(e,n,r){n=Rt(r,n),n=_a(e,n,1),e=Wn(e,n,1),n=Pe(),e!==null&&(Wt(e,1,n),Oe(e,n))}function ue(e,n,r){if(e.tag===3)yd(e,e,r);else for(;n!==null;){if(n.tag===3){yd(n,e,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Hn===null||!Hn.has(l))){e=Rt(r,e),e=Aa(n,e,1),n=Wn(n,e,1),e=Pe(),n!==null&&(Wt(n,1,e),Oe(n,e));break}}n=n.return}}function Cu(e,n,r){var l=e.pingCache;l!==null&&l.delete(n),n=Pe(),e.pingedLanes|=e.suspendedLanes&r,ve===e&&(Ne&r)===r&&(xe===4||xe===3&&(Ne&130023424)===Ne&&500>fe()-ds?st(e,0):as|=r),Oe(e,n)}function vd(e,n){n===0&&((e.mode&1)===0?n=1:(n=Er,Er<<=1,(Er&130023424)===0&&(Er=4194304)));var r=Pe();e=kn(e,n),e!==null&&(Wt(e,n,r),Oe(e,r))}function Lu(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),vd(e,r)}function Eu(e,n){var r=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(p(314))}l!==null&&l.delete(n),vd(e,r)}var jd;jd=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Te.current)_e=!0;else{if((e.lanes&r)===0&&(n.flags&128)===0)return _e=!1,hu(e,n,r);_e=(e.flags&131072)!==0}else _e=!1,oe&&(n.flags&1048576)!==0&&Jo(n,Xr,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;ul(e,n),e=n.pendingProps;var i=St(n,ke.current);Lt(n,r),i=Mi(null,n,l,e,i,r);var s=Wi();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,De(l)?(s=!0,Gr(n)):s=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bi(n),i.updater=dl,n.stateNode=i,i._reactInternals=n,Gi(n,l,e,r),n=Zi(null,n,l,!0,s,r)):(n.tag=0,oe&&s&&bi(n),ze(null,n,i,r),n=n.child),n;case 16:l=n.elementType;e:{switch(ul(e,n),e=n.pendingProps,i=l._init,l=i(l._payload),n.type=l,i=n.tag=zu(l),e=on(l,e),i){case 0:n=Xi(null,n,l,e,r);break e;case 1:n=Qa(null,n,l,e,r);break e;case 11:n=Wa(null,n,l,e,r);break e;case 14:n=Ua(null,n,l,on(l.type,e),r);break e}throw Error(p(306,l,""))}return n;case 0:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:on(l,i),Xi(e,n,l,i,r);case 1:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:on(l,i),Qa(e,n,l,i,r);case 3:e:{if(Ga(n),e===null)throw Error(p(387));l=n.pendingProps,s=n.memoizedState,i=s.element,aa(e,n),tl(n,l,null,r);var o=n.memoizedState;if(l=o.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){i=Rt(Error(p(423)),n),n=Ka(e,n,l,r,i);break e}else if(l!==i){i=Rt(Error(p(424)),n),n=Ka(e,n,l,r,i);break e}else for($e=_n(n.stateNode.containerInfo.firstChild),Ve=n,oe=!0,sn=null,r=sa(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(wt(),l===i){n=Ln(e,n,r);break e}ze(e,n,l,r)}n=n.child}return n;case 5:return ua(n),e===null&&Ci(n),l=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,gi(l,i)?o=null:s!==null&&gi(l,s)&&(n.flags|=32),$a(e,n),ze(e,n,o,r),n.child;case 6:return e===null&&Ci(n),null;case 13:return Ya(e,n,r);case 4:return Ti(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=kt(n,null,l,r):ze(e,n,l,r),n.child;case 11:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:on(l,i),Wa(e,n,l,i,r);case 7:return ze(e,n,n.pendingProps,r),n.child;case 8:return ze(e,n,n.pendingProps.children,r),n.child;case 12:return ze(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(l=n.type._context,i=n.pendingProps,s=n.memoizedProps,o=i.value,re(Jr,l._currentValue),l._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!Te.current){n=Ln(e,n,r);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var d=a.firstContext;d!==null;){if(d.context===l){if(s.tag===1){d=Cn(-1,r&-r),d.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?d.next=d:(d.next=v.next,v.next=d),h.pending=d}}s.lanes|=r,d=s.alternate,d!==null&&(d.lanes|=r),Pi(s.return,r,n),a.lanes|=r;break}d=d.next}}else if(s.tag===10)o=s.type===n.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(p(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),Pi(o,r,n),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===n){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ze(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,l=n.pendingProps.children,Lt(n,r),i=Xe(i),l=l(i),n.flags|=1,ze(e,n,l,r),n.child;case 14:return l=n.type,i=on(l,n.pendingProps),i=on(l.type,i),Ua(e,n,l,i,r);case 15:return Ha(e,n,n.type,n.pendingProps,r);case 17:return l=n.type,i=n.pendingProps,i=n.elementType===l?i:on(l,i),ul(e,n),n.tag=1,De(l)?(e=!0,Gr(n)):e=!1,Lt(n,r),Ta(n,l,i),Gi(n,l,i,r),Zi(null,n,l,!0,e,r);case 19:return Za(e,n,r);case 22:return Va(e,n,r)}throw Error(p(156,n.tag))};function Sd(e,n){return Js(e,n)}function Ru(e,n,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,n,r,l){return new Ru(e,n,r,l)}function gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zu(e){if(typeof e=="function")return gs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fn)return 11;if(e===mn)return 14}return 2}function Gn(e,n){var r=e.alternate;return r===null?(r=Je(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Nl(e,n,r,l,i,s){var o=2;if(l=e,typeof e=="function")gs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ie:return at(r.children,i,s,n);case Ge:o=8,i|=8;break;case Rn:return e=Je(12,r,n,i|2),e.elementType=Rn,e.lanes=s,e;case We:return e=Je(13,r,n,i),e.elementType=We,e.lanes=s,e;case tn:return e=Je(19,r,n,i),e.elementType=tn,e.lanes=s,e;case ce:return bl(r,i,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jn:o=10;break e;case Yn:o=9;break e;case fn:o=11;break e;case mn:o=14;break e;case Be:o=16,l=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return n=Je(o,r,n,i),n.elementType=e,n.type=l,n.lanes=s,n}function at(e,n,r,l){return e=Je(7,e,l,n),e.lanes=r,e}function bl(e,n,r,l){return e=Je(22,e,l,n),e.elementType=ce,e.lanes=r,e.stateNode={isHidden:!1},e}function ys(e,n,r){return e=Je(6,e,null,n),e.lanes=r,e}function vs(e,n,r){return n=Je(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pu(e,n,r,l,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function js(e,n,r,l,i,s,o,a,d){return e=new Pu(e,n,r,a,d),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Je(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bi(s),e}function Iu(e,n,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:l==null?null:""+l,children:e,containerInfo:n,implementation:r}}function Nd(e){if(!e)return On;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(p(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(De(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(p(171))}if(e.tag===1){var r=e.type;if(De(r))return Xo(e,r,n)}return n}function bd(e,n,r,l,i,s,o,a,d){return e=js(r,l,!0,e,i,s,o,a,d),e.context=Nd(null),r=e.current,l=Pe(),i=$n(r),s=Cn(l,i),s.callback=n??null,Wn(r,s,i),e.current.lanes=i,Wt(e,i,l),Oe(e,l),e}function wl(e,n,r,l){var i=n.current,s=Pe(),o=$n(i);return r=Nd(r),n.context===null?n.context=r:n.pendingContext=r,n=Cn(s,o),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=Wn(i,n,o),e!==null&&(cn(e,i,o,s),nl(e,i,o)),o}function kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Ss(e,n){wd(e,n),(e=e.alternate)&&wd(e,n)}function Bu(){return null}var kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ns(e){this._internalRoot=e}Cl.prototype.render=Ns.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(p(409));wl(e,n,null,null)},Cl.prototype.unmount=Ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;it(function(){wl(null,e,null,null)}),n[Sn]=null}};function Cl(e){this._internalRoot=e}Cl.prototype.unstable_scheduleHydration=function(e){if(e){var n=oo();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Bn.length&&n!==0&&n<Bn[r].priority;r++);Bn.splice(r,0,e),r===0&&uo(e)}};function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cd(){}function Tu(e,n,r,l,i){if(i){if(typeof l=="function"){var s=l;l=function(){var h=kl(o);s.call(h)}}var o=bd(n,l,e,0,null,!1,!1,"",Cd);return e._reactRootContainer=o,e[Sn]=o.current,nr(e.nodeType===8?e.parentNode:e),it(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof l=="function"){var a=l;l=function(){var h=kl(d);a.call(h)}}var d=js(e,0,!1,null,null,!1,!1,"",Cd);return e._reactRootContainer=d,e[Sn]=d.current,nr(e.nodeType===8?e.parentNode:e),it(function(){wl(n,d,r,l)}),d}function El(e,n,r,l,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var d=kl(o);a.call(d)}}wl(n,o,e,i)}else o=Tu(r,n,e,i,l);return kl(o)}io=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=Mt(n.pendingLanes);r!==0&&(Gl(n,r|1),Oe(n,fe()),(Q&6)===0&&(It=fe()+500,Fn()))}break;case 13:it(function(){var l=kn(e,1);if(l!==null){var i=Pe();cn(l,e,1,i)}}),Ss(e,1)}},Kl=function(e){if(e.tag===13){var n=kn(e,134217728);if(n!==null){var r=Pe();cn(n,e,134217728,r)}Ss(e,134217728)}},so=function(e){if(e.tag===13){var n=$n(e),r=kn(e,n);if(r!==null){var l=Pe();cn(r,e,n,l)}Ss(e,n)}},oo=function(){return ee},ao=function(e,n){var r=ee;try{return ee=e,n()}finally{ee=r}},Ml=function(e,n,r){switch(n){case"input":if(Il(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==e&&l.form===e.form){var i=$r(l);if(!i)throw Error(p(90));Is(l),Il(l,i)}}}break;case"textarea":As(e,r);break;case"select":n=r.value,n!=null&&dt(e,!!r.multiple,n,!1)}},Qs=ps,Gs=it;var Du={usingClientEntryPoint:!1,Events:[lr,vt,$r,Vs,$s,ps]},yr={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_u={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zs(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Bu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{Cr=Rl.inject(_u),pn=Rl}catch{}}return Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Du,Fe.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bs(n))throw Error(p(200));return Iu(e,n,null,r)},Fe.createRoot=function(e,n){if(!bs(e))throw Error(p(299));var r=!1,l="",i=kd;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=js(e,1,!1,null,null,r,!1,l,i),e[Sn]=n.current,nr(e.nodeType===8?e.parentNode:e),new Ns(n)},Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=Zs(n),e=e===null?null:e.stateNode,e},Fe.flushSync=function(e){return it(e)},Fe.hydrate=function(e,n,r){if(!Ll(n))throw Error(p(200));return El(null,e,n,!0,r)},Fe.hydrateRoot=function(e,n,r){if(!bs(e))throw Error(p(405));var l=r!=null&&r.hydratedSources||null,i=!1,s="",o=kd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),n=bd(n,null,e,1,r??null,i,!1,s,o),e[Sn]=n.current,nr(e),l)for(e=0;e<l.length;e++)r=l[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new Cl(n)},Fe.render=function(e,n,r){if(!Ll(n))throw Error(p(200));return El(null,e,n,!1,r)},Fe.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(p(40));return e._reactRootContainer?(it(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1},Fe.unstable_batchedUpdates=ps,Fe.unstable_renderSubtreeIntoContainer=function(e,n,r,l){if(!Ll(r))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return El(e,n,r,!1,l)},Fe.version="18.3.1-next-f1338f8080-20240426",Fe}var Td;function $u(){if(Td)return Cs.exports;Td=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(C){console.error(C)}}return x(),Cs.exports=Vu(),Cs.exports}var Dd;function Qu(){if(Dd)return zl;Dd=1;var x=$u();return zl.createRoot=x.createRoot,zl.hydrateRoot=x.hydrateRoot,zl}var Gu=Qu();const Ku=Od(Gu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=x=>x.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xu=x=>x.replace(/^([A-Z])|[\s-_]+(\w)/g,(C,p,w)=>w?w.toUpperCase():p.toLowerCase()),_d=x=>{const C=Xu(x);return C.charAt(0).toUpperCase()+C.slice(1)},Fd=(...x)=>x.filter((C,p,w)=>!!C&&C.trim()!==""&&w.indexOf(C)===p).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=ge.forwardRef(({color:x="currentColor",size:C=24,strokeWidth:p=2,absoluteStrokeWidth:w,className:P="",children:A,iconNode:I,...U},D)=>ge.createElement("svg",{ref:D,...Zu,width:C,height:C,stroke:x,strokeWidth:w?Number(p)*24/Number(C):p,className:Fd("lucide",P),...U},[...I.map(([L,X])=>ge.createElement(L,X)),...Array.isArray(A)?A:[A]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=(x,C)=>{const p=ge.forwardRef(({className:w,...P},A)=>ge.createElement(qu,{ref:A,iconNode:C,className:Fd(`lucide-${Yu(_d(x))}`,`lucide-${x}`,w),...P}));return p.displayName=_d(x),p};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ef=vn("book-open",Ju);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],tf=vn("chevron-left",nf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Md=vn("chevron-right",rf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],sf=vn("circle-help",lf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],af=vn("clipboard-list",of);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],cf=vn("file-text",df);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],ff=vn("scale",uf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Wd=vn("shield",mf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],hf=vn("triangle-alert",pf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],gf=vn("users",xf),yf=[{id:"about",label:"Про Департамент Шерифів",icon:Wd},{id:"departments",label:"Відділи",icon:gf},{id:"lectures",label:"База даних лекцій",icon:ef},{id:"statute",label:"Внутрішній статут",icon:cf},{id:"faq",label:"F.A.Q",icon:sf},{id:"application",label:"Заявка на вступ",icon:af},{id:"complaint",label:"Подача скарги",icon:hf}];function vf({activeTab:x,onTabChange:C,isCollapsed:p,onToggleCollapse:w}){const[P,A]=ge.useState(!1),I=!p||P;return t.jsxs("div",{className:`bg-[#121212] border-r border-[#2a2a2a] flex flex-col transition-all duration-300 ease-in-out relative ${I?"w-80":"w-20"}`,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),children:[t.jsx("button",{onClick:w,className:"absolute -right-3 top-8 z-10 bg-[#d4af37] hover:bg-[#b8941f] text-black rounded-full p-1.5 shadow-lg transition-colors",title:p?"Розгорнути":"Згорнути",children:p?t.jsx(Md,{className:"size-4"}):t.jsx(tf,{className:"size-4"})}),t.jsx("div",{className:"p-6 border-b border-[#2a2a2a]",children:t.jsxs("div",{className:`flex items-center gap-3 mb-2 ${!I&&"justify-center"}`,children:[t.jsx(Wd,{className:"size-10 text-[#d4af37] flex-shrink-0",strokeWidth:1.5}),I&&t.jsxs("div",{className:"overflow-hidden",children:[t.jsx("h1",{className:"text-xl font-bold text-white tracking-wide whitespace-nowrap",children:"ДЕПАРТАМЕНТ ШЕРИФІВ"}),t.jsx("p",{className:"text-sm text-[#888] mt-0.5 whitespace-nowrap",children:"Округ Лос Сантос"})]})]})}),t.jsx("nav",{className:"flex-1 p-4 overflow-y-auto",children:t.jsxs("div",{className:"space-y-2",children:[yf.map(U=>{const D=U.icon,L=x===U.id;return t.jsxs("button",{onClick:()=>C(U.id),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative group ${L?"bg-[#d4af37] text-black font-medium":"text-[#aaa] hover:bg-[#1a1a1a] hover:text-white"} ${!I&&"justify-center"}`,title:I?"":U.label,children:[t.jsx(D,{className:"size-5 flex-shrink-0",strokeWidth:1.5}),I&&t.jsx("span",{className:"text-sm whitespace-nowrap overflow-hidden text-ellipsis",children:U.label}),!I&&!P&&t.jsx("div",{className:"absolute left-full ml-2 px-3 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-[#2a2a2a]",children:U.label})]},U.id)}),t.jsx("div",{className:"my-4 border-t border-[#2a2a2a]"}),t.jsxs("a",{href:"https://satael.github.io/StakeRP-codex/",target:"_blank",rel:"noopener noreferrer",className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1a1a1a] text-[#aaa] hover:bg-[#222] hover:text-[#d4af37] transition-all border border-[#2a2a2a] relative group ${!I&&"justify-center"}`,title:I?"":"Законодавча база Сан-Андреас",children:[t.jsx(ff,{className:"size-5 flex-shrink-0",strokeWidth:1.5}),I&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"text-sm whitespace-nowrap overflow-hidden text-ellipsis",children:"Законодавча база Сан-Андреас"}),t.jsx("svg",{className:"size-4 ml-auto flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]}),!I&&!P&&t.jsx("div",{className:"absolute left-full ml-2 px-3 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-[#2a2a2a]",children:"Законодавча база Сан-Андреас"})]})]})}),I&&t.jsx("div",{className:"p-4 border-t border-[#2a2a2a]",children:t.jsxs("div",{className:"text-center text-gray-500 text-xs",children:[t.jsx("p",{className:"mb-1",children:"LSCSD Official"}),t.jsx("p",{className:"text-[#d4af37] text-[10px]",children:"Integrity. Service. Protection."})]})})]})}function jf(){const[x,C]=ge.useState({fullName:"",documentNumber:"",phoneNumber:"",discordNickname:"",address:"",education:"",previousWork:"",whyJoinLSCSD:"",firearmsSkill:"",criminalRecord:"",healthIssues:"",driversLicense:"",dataProcessingConsent:!1}),[p,w]=ge.useState(!1),[P,A]=ge.useState("idle"),I="https://script.google.com/macros/s/AKfycbxUTZufqyFi2lyyy58POxcQhqMZOZZ0b-XTML0VCR0qqW57zaQp0jyqQX4N58Q5rq2SoA/exec",U=async L=>{if(L.preventDefault(),!I.includes("script.google.com")){alert(`⚠️ Google Apps Script URL не налаштовано або невірний!

Будь ласка, вставте правильний URL який має містити "script.google.com" в файлі ApplicationForm.tsx (рядок 37)`);return}w(!0),A("idle");try{const X=await fetch(I,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});A("success"),C({fullName:"",documentNumber:"",phoneNumber:"",discordNickname:"",address:"",education:"",previousWork:"",whyJoinLSCSD:"",firearmsSkill:"",criminalRecord:"",healthIssues:"",driversLicense:"",dataProcessingConsent:!1}),setTimeout(()=>A("idle"),5e3)}catch(X){console.error("Помилка відправки:",X),A("error")}finally{w(!1)}},D=(L,X)=>{C(_=>({..._,[L]:X}))};return t.jsxs("div",{className:"max-w-4xl mx-auto p-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsx("div",{className:"h-1 w-24 bg-[#d4af37] mb-4"}),t.jsx("h1",{className:"text-3xl font-bold text-[#d4af37] mb-4",children:"📝 ЗАЯВКА НА ВСТУП"}),t.jsx("p",{className:"text-gray-400",children:"Заповніть всі поля заявки для вступу на службу в Департамент Шерифів Округу Лос Сантос"})]}),P==="success"&&t.jsx("div",{className:"mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400",children:"✅ Заявку успішно надіслано! Ми зв'яжемося з вами найближчим часом."}),P==="error"&&t.jsx("div",{className:"mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400",children:"❌ Помилка відправки заявки. Спробуйте ще раз пізніше."}),t.jsxs("form",{onSubmit:U,className:"space-y-6",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["1. Ваше ім'я прізвище ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("input",{type:"text",required:!0,value:x.fullName,onChange:L=>D("fullName",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors",placeholder:"Введіть ваше ім'я та прізвище"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["2. Номер документів. Приклад: #5461 ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("input",{type:"text",required:!0,value:x.documentNumber,onChange:L=>D("documentNumber",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors",placeholder:"Наприклад: #5461"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["3. Номер телефону ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("input",{type:"tel",required:!0,value:x.phoneNumber,onChange:L=>D("phoneNumber",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors",placeholder:"Введіть номер телефону"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["4. Ваш спец.зв'язок (DISCORD nickname) ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("input",{type:"text",required:!0,value:x.discordNickname,onChange:L=>D("discordNickname",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors",placeholder:"Введіть ваш Discord нікнейм"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("label",{className:"block text-[#d4af37] font-semibold",children:"5. Адреса проживання (Якщо є)"}),t.jsx("input",{type:"text",value:x.address,onChange:L=>D("address",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors",placeholder:"Введіть вашу адресу (необов'язково)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["6. Освіта ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("textarea",{required:!0,rows:3,value:x.education,onChange:L=>D("education",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none",placeholder:"Опишіть вашу освіту..."})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["7. Попередній досвід роботи. (Де, ким та коли ви працювали) ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("textarea",{required:!0,rows:4,value:x.previousWork,onChange:L=>D("previousWork",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none",placeholder:"Де, ким та коли ви працювали..."})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["8. Чому ви хочете приєднатись до Департаменту Шерифів ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("textarea",{required:!0,rows:4,value:x.whyJoinLSCSD,onChange:L=>D("whyJoinLSCSD",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none",placeholder:"Опишіть вашу мотивацію..."})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["9. Як ви оцінюєте володіння вогнепальною зброєю ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("textarea",{required:!0,rows:3,value:x.firearmsSkill,onChange:L=>D("firearmsSkill",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none",placeholder:"Оцініть ваші навички з вогнепальною зброєю..."})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["10. Чи є у вас проблеми з законом. Чи є у вас не погашені судимості? ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("textarea",{required:!0,rows:3,value:x.criminalRecord,onChange:L=>D("criminalRecord",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none",placeholder:"Вкажіть чи є у вас проблеми з законом або не погашені судимості..."})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["11. Чи є у вас проблеми зі здоров'ям ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("textarea",{required:!0,rows:3,value:x.healthIssues,onChange:L=>D("healthIssues",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none",placeholder:"Вкажіть чи є у вас проблеми зі здоров'ям..."})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["12. Чи є у вас водійське посвідчення ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("textarea",{required:!0,rows:2,value:x.driversLicense,onChange:L=>D("driversLicense",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none",placeholder:"Вкажіть чи є у вас водійське посвідчення..."})]}),t.jsx("div",{className:"space-y-2",children:t.jsxs("label",{className:"flex items-center gap-3 text-gray-300 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:x.dataProcessingConsent,onChange:L=>D("dataProcessingConsent",L.target.checked),className:"w-5 h-5 bg-[#121212] border-2 border-gray-700 rounded focus:ring-2 focus:ring-[#d4af37] cursor-pointer"}),t.jsx("span",{className:"text-sm",children:"13. Чи даєте ви згоду на обробку ваших персональних даних в ході розгляду вашої заявки."})]})}),t.jsxs("div",{className:"pt-4",children:[t.jsx("button",{type:"submit",disabled:p,className:"w-full bg-[#d4af37] hover:bg-[#b8941f] disabled:bg-gray-600 text-black font-bold py-4 px-6 rounded transition-colors duration-200 disabled:cursor-not-allowed",children:p?"📤 Відправка...":"✅ Надіслати заявку"}),t.jsx("p",{className:"text-center text-gray-500 text-sm mt-3",children:"Натискаючи кнопку, ви підтверджуєте достовірність наданої інформації"})]})]})]})}function Sf(){const[x,C]=ge.useState({sheriffInfo:"",yourFullName:"",phoneNumber:"",complaintDetails:"",dataProcessingConsent:!1}),[p,w]=ge.useState(!1),[P,A]=ge.useState("idle"),I="https://script.google.com/macros/s/AKfycbw2Ah_GJoE6Zr2GmxWPHyC-Lxw8iGHRF_XK95mUkwL8-rxxKweu0msqV-I-ZkuH2N1CBA/exec",U=async L=>{if(L.preventDefault(),!x.dataProcessingConsent){alert("⚠️ Ви повинні надати згоду на обробку персональних даних");return}if(!I.includes("script.google.com")){alert(`⚠️ Google Apps Script URL не налаштовано або невірний!

Будь ласка, вставте правильний URL який має містити "script.google.com" в файлі ComplaintForm.tsx (рядок 22)`);return}w(!0),A("idle");try{const X=await fetch(I,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});A("success"),C({sheriffInfo:"",yourFullName:"",phoneNumber:"",complaintDetails:"",dataProcessingConsent:!1}),setTimeout(()=>A("idle"),5e3)}catch(X){console.error("Помилка відправки:",X),A("error")}finally{w(!1)}},D=(L,X)=>{C(_=>({..._,[L]:X}))};return t.jsxs("div",{className:"max-w-4xl mx-auto p-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsx("div",{className:"h-1 w-24 bg-[#d4af37] mb-4"}),t.jsx("h1",{className:"text-3xl font-bold text-[#d4af37] mb-4",children:"📢 ФОРМА ПОДАЧІ СКАРГИ"}),t.jsx("p",{className:"text-gray-400",children:"Якщо ви маєте претензії до дій співробітника LSCSD, будь ласка, заповніть форму нижче. Ваша скарга буде розглянута відділом Internal Affairs."}),t.jsx("div",{className:"mt-4 p-4 bg-red-900/20 border border-red-700/50 rounded-lg",children:t.jsxs("p",{className:"text-red-400 text-sm",children:["⚠️ ",t.jsx("strong",{children:"Важлива інформація:"})," Подання завідомо неправдивої скарги може призвести до притягнення до відповідальності. Всі скарги перевіряються та розслідуються відповідно до внутрішнього статуту."]})})]}),P==="success"&&t.jsx("div",{className:"mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400",children:"✅ Скаргу успішно надіслано! Ми розглянемо вашу справу найближчим часом та зв'яжемося з вами."}),P==="error"&&t.jsx("div",{className:"mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400",children:"❌ Помилка відправки скарги. Спробуйте ще раз пізніше або зв'яжіться з нами за телефоном (555) 0-LSCSD."}),t.jsxs("form",{onSubmit:U,className:"space-y-6",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["1. Ім'я, прізвище або номер жетона шерифа ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("input",{type:"text",required:!0,value:x.sheriffInfo,onChange:L=>D("sheriffInfo",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors",placeholder:"Наприклад: John Smith або #3245"}),t.jsx("p",{className:"text-gray-500 text-xs",children:"Вкажіть ім'я, прізвище шерифа або номер його жетона (якщо ви його знаєте)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["2. Ваше ім'я, прізвище та #номер документу ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("input",{type:"text",required:!0,value:x.yourFullName,onChange:L=>D("yourFullName",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors",placeholder:"Наприклад: STATIK #12345"}),t.jsx("p",{className:"text-gray-500 text-xs",children:"Вкажіть ваше ім'я та номер документу для зв'язку"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["3. Ваш номер телефону для контакту ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("input",{type:"tel",required:!0,value:x.phoneNumber,onChange:L=>D("phoneNumber",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors",placeholder:"Наприклад: +1-555-0123"}),t.jsx("p",{className:"text-gray-500 text-xs",children:"За цим номером ми зв'яжемося з вами для уточнення деталей"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-[#d4af37] font-semibold",children:["4. Суть скарги ",t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("textarea",{required:!0,rows:8,value:x.complaintDetails,onChange:L=>D("complaintDetails",L.target.value),className:"w-full bg-[#121212] border border-gray-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none",placeholder:"Детально опишіть інцидент: дата, час, місце події, обставини, дії шерифа, свідки (якщо є)..."}),t.jsx("p",{className:"text-gray-500 text-xs",children:"Будь ласка, надайте якомога більше деталей: що сталося, коли, де, за яких обставин"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-start gap-3 p-4 bg-[#121212] border border-gray-700 rounded",children:[t.jsx("input",{type:"checkbox",id:"consent",required:!0,checked:x.dataProcessingConsent,onChange:L=>D("dataProcessingConsent",L.target.checked),className:"mt-1 size-5 accent-[#d4af37] cursor-pointer"}),t.jsxs("label",{htmlFor:"consent",className:"flex-1 text-gray-300 text-sm cursor-pointer",children:[t.jsxs("span",{className:"text-[#d4af37] font-semibold block mb-2",children:["5. Згода на обробку персональних даних ",t.jsx("span",{className:"text-red-500",children:"*"})]}),"Я підтверджую, що надана мною інформація є правдивою та достовірною. Я даю згоду на обробку моїх персональних даних (ім'я, прізвище, номер документу, номер телефону) відділом Planning & Internal Affairs (PIA) LSCSD для розгляду поданої скарги. Я розумію, що мої дані будуть використані виключно в рамках внутрішнього розслідування та не будуть передані третім особам без моєї згоди або без законних підстав."]})]}),t.jsx("p",{className:"text-gray-500 text-xs pl-4",children:"Без вашої згоди ми не зможемо розглянути скаргу"})]}),t.jsxs("div",{className:"pt-4",children:[t.jsx("button",{type:"submit",disabled:p||!x.dataProcessingConsent,className:"w-full bg-[#d4af37] hover:bg-[#b8941f] disabled:bg-gray-600 text-black font-bold py-4 px-6 rounded transition-colors duration-200 disabled:cursor-not-allowed",children:p?"📤 Відправка скарги...":"✅ Надіслати скаргу"}),t.jsx("p",{className:"text-center text-gray-500 text-sm mt-3",children:"Середній час розгляду скарги: 3-7 робочих днів"})]}),t.jsxs("div",{className:"mt-6 p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg",children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-2",children:"📋 Що буде далі?"}),t.jsxs("ul",{className:"space-y-1 text-gray-400 text-sm",children:[t.jsx("li",{children:"• Ваша скарга буде зареєстрована у системі відділу Internal Affairs"}),t.jsx("li",{children:"• Призначено відповідального офіцера для розслідування"}),t.jsx("li",{children:"• З вами зв'яжуться для уточнення деталей (за необхідності)"}),t.jsx("li",{children:"• Після завершення розслідування ви отримаєте офіційну відповідь"})]})]})]})]})}const Ad=[{id:"section-1",number:"I",title:"Загальні положення",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"1.1 Статут LSCSD"}),t.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Статут Los Santos County Sheriff Department (LSCSD) - це внутрішній нормативно-правовий документ, що регламентує діяльність LSCSD в цілому, та відповідає ієрархії законодавчої бази."}),t.jsx("p",{className:"text-gray-400 text-sm mt-2 italic",children:"Примітка: Ієрархія регулюється лише конституцією, та може бути змінена лише шляхом проведення конгресу, детальний опис в р.11, ст.72. Конституції Штату Сан-Андреас."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"1.2 Призначення та роль Департаменту Шерифів"}),t.jsx("p",{className:"text-gray-300 leading-relaxed mb-3",children:'Los Santos County Sheriff Department (далі - "LSCSD", "Департамент") є правоохоронним органом, що здійснює забезпечення публічної безпеки, підтримання правопорядку, захист життя, честі, гідності, прав та свобод громадян на території округу Los Santos та підконтрольних територій.'}),t.jsx("p",{className:"text-gray-300 leading-relaxed mb-3",children:"Основним завданням Департаменту є ефективне та організоване виконання правоохоронних функцій, протидія злочинності, попередження правопорушень, а також реалізація закону у межах встановлених повноважень."}),t.jsx("p",{className:"text-gray-300 leading-relaxed",children:"LSCSD є структурованою та дисциплінованою судово-поліцейською організацією, діяльність якої базується на підпорядкованості, службовій ієрархії, чітко закріплених повноваженнях та особистій відповідальності кожного співробітника."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"1.3 Юрисдикція та зона відповідальності"}),t.jsx("p",{className:"text-gray-300 leading-relaxed mb-3",children:"Юрисдикція Los Santos County Sheriff Department поширюється на територію округу Блейн, прилеглі пустельні та сільські райони, а також інші території, визначені чинним законодавством."}),t.jsx("p",{className:"text-gray-300 leading-relaxed mb-3",children:"У випадках надзвичайних ситуацій, кризових інцидентів, масштабних злочинів, терористичних загроз або запиту інших державних структур, Департамент має право здійснювати діяльність поза межами основної юрисдикції."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"LSCSD взаємодіє з:"}),t.jsxs("ul",{className:"text-gray-300 space-y-1 text-sm",children:[t.jsx("li",{children:"• Los-Santos Police Department"}),t.jsx("li",{children:"• Федеральні служби та спеціальні агентства"}),t.jsx("li",{children:"• Інші державні та муніципальні формування"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"1.4 Законодавча база та правові повноваження"}),t.jsx("p",{className:"text-gray-300 leading-relaxed mb-3",children:"Діяльність Los Santos County Sheriff Department здійснюється на підставі чінного законодавства штату, та внутрішніх регламентів урядових структур."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Департамент Шерифів володіє правом:"}),t.jsxs("ul",{className:"text-gray-300 space-y-1 text-sm",children:[t.jsx("li",{children:"• забезпечувати громадський порядок та безпеку"}),t.jsx("li",{children:"• здійснювати затримання осіб, підозрюваних у вчиненні злочинів"}),t.jsx("li",{children:"• проводити оперативно-розшукові заходи"}),t.jsx("li",{children:"• здійснювати адміністративне та кримінальне провадження"}),t.jsx("li",{children:"• застосовувати зброю, спеціальні засоби та фізичну силу відповідно до правил"}),t.jsx("li",{children:"• ініціювати розслідування та внутрішні перевірки"}),t.jsx("li",{children:"• встановлювати внутрішні стандарти служби"}),t.jsx("li",{children:"• використовувати транспорт з спецсигналами"}),t.jsx("li",{children:"• забезпечувати охорону державних об'єктів"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"1.5 Терміни та визначення"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"«Департамент»"}),t.jsx("p",{className:"text-gray-300 text-sm",children:"Los Santos County Sheriff Department, офіційна правоохоронна установа штату."})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"«Співробітник Департаменту»"}),t.jsx("p",{className:"text-gray-300 text-sm",children:"будь-яка особа, що перебуває на службі в LSCSD незалежно від звання, посади або підрозділу."})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"«Кадет»"}),t.jsx("p",{className:"text-gray-300 text-sm",children:"особа, що проходить навчання в Sheriff Academy та ще не має повноцінних оперативних повноважень."})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"«Старший за званням/посадою»"}),t.jsx("p",{className:"text-gray-300 text-sm",children:"співробітник, який має вищий ранг або адміністративний статус."})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"«Юрисдикція Департаменту»"}),t.jsx("p",{className:"text-gray-300 text-sm",children:"територія, на якій LSCSD має право застосовувати повноваження."})]})]})]})]})},{id:"section-2",number:"II",title:"Структура департаменту",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"2.1 Організаційна схема"}),t.jsx("p",{className:"text-gray-300 leading-relaxed mb-3",children:"Los Santos County Sheriff Department має багаторівневу структурну організацію, що забезпечує стабільне, ефективне та безперервне функціонування правоохоронної системи округу."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Департамент складається з:"}),t.jsxs("ul",{className:"text-gray-300 space-y-1 text-sm",children:[t.jsx("li",{children:"• Керівного складу"}),t.jsx("li",{children:"• Старшого командного складу"}),t.jsx("li",{children:"• Середнього складу"}),t.jsx("li",{children:"• Молодшого складу (Sheriff Academy)"}),t.jsx("li",{children:"• Функціональних підрозділів (SA, PIA, DPU, SEB)"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"2.2 Розподіл на штатні рівні"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("h4",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"1) Молодший склад"}),t.jsx("p",{className:"text-gray-300 text-sm mb-2",children:"Включає співробітників на початковому етапі служби або виконують базові оперативні функції."}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• SA Cadet I"}),t.jsx("li",{children:"• SA Cadet II"}),t.jsx("li",{children:"• Junior Sergeant"})]})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("h4",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"2) Середній склад"}),t.jsx("p",{className:"text-gray-300 text-sm mb-2",children:"Відповідає за організацію роботи підрозділів, контроль дисципліни та виконання оперативних завдань."}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• Sergeant"}),t.jsx("li",{children:"• Sergeant II"}),t.jsx("li",{children:"• Lieutenant I"}),t.jsx("li",{children:"• Lieutenant II"}),t.jsx("li",{children:"• Captain"}),t.jsx("li",{children:"• Major"}),t.jsx("li",{children:"• Instructor Department"})]})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("h4",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"3) Старший склад"}),t.jsx("p",{className:"text-gray-300 text-sm mb-2",children:"Забезпечує стратегічне управління Департаментом та приймає ключові рішення."}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• Deputy Head of Department"}),t.jsx("li",{children:"• Head of Department"}),t.jsx("li",{children:"• Assistant Sheriff"}),t.jsx("li",{children:"• UnderSheriff"}),t.jsx("li",{children:"• Sheriff"})]})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"2.3 Керівництво департаменту"}),t.jsxs("p",{className:"text-gray-300 leading-relaxed mb-3",children:["Найвищою посадовою особою департаменту є ",t.jsx("span",{className:"text-[#d4af37]",children:"Sheriff"}),", який очолює Департамент, визначає основний курс розвитку служби та несе повну відповідальність за діяльність департаменту."]}),t.jsxs("p",{className:"text-gray-300 leading-relaxed mb-3",children:[t.jsx("span",{className:"text-[#d4af37]",children:"UnderSheriff"})," є першою особою після Шерифа та виконує управлінські функції у разі його відсутності, керує загальною організацією служби."]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"2.4 Підпорядкованість та ієрархія"}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#d4af37] border-l-4 rounded p-4",children:[t.jsx("p",{className:"text-[#d4af37] font-semibold mb-2",children:"Вертикаль управління:"}),t.jsx("p",{className:"text-gray-300 text-sm font-mono",children:"Sheriff → UnderSheriff → Assistant Sheriff → Head/Deputy Head → Середній склад → Молодший склад"})]})]})]})},{id:"section-3",number:"III",title:"Sheriff Academy",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"3.1 Призначення Академії Шерифів"}),t.jsx("p",{className:"text-gray-300 leading-relaxed mb-3",children:"Sheriff Academy (SA) є офіційним навчально-підготовчим центром Los Santos County Sheriff Department, що забезпечує професійну підготовку новобранців, формування необхідних навичок, дисципліни та службової етики."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Sheriff Academy:"}),t.jsxs("ul",{className:"text-gray-300 space-y-1 text-sm",children:[t.jsx("li",{children:"• здійснює первинну підготовку новобранців"}),t.jsx("li",{children:"• організовує теоретичні та практичні навчальні курси"}),t.jsx("li",{children:"• формує базові навички поводження зі зброєю та транспортом"}),t.jsx("li",{children:"• виховує службову дисципліну та дотримання субординації"}),t.jsx("li",{children:"• проводить оцінювання та атестації кадетів"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"3.2 Статус кадетів"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("h4",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"SA Cadet I"}),t.jsx("p",{className:"text-gray-300 text-sm mb-2",children:"Початковий рівень навчання"}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• не має повноцінних оперативних повноважень"}),t.jsx("li",{children:"• виконує навчальні завдання під контролем"}),t.jsx("li",{children:"• вивчає базові дисципліни"})]})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("h4",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"SA Cadet II"}),t.jsx("p",{className:"text-gray-300 text-sm mb-2",children:"Підготовлений кадет"}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• розширені можливості патрулювання"}),t.jsx("li",{children:"• може виконувати окремі завдання"}),t.jsx("li",{children:"• готується до випуску"})]})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"3.3 Навчальні програми"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"Теоретична підготовка"}),t.jsx("p",{className:"text-gray-300 text-sm",children:"Знання законодавства штату, внутрішні регламенти, процедури затримання, службова етика"})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"Практична підготовка"}),t.jsx("p",{className:"text-gray-300 text-sm",children:"Тактична підготовка, робота в патрулі, поводження зі зброєю, дії під час переслідувань"})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"Психологічна стійкість"}),t.jsx("p",{className:"text-gray-300 text-sm",children:"Спілкування з громадянами, робота у стресових ситуаціях, контроль емоцій"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"3.7 Право переходу в інші підрозділи"}),t.jsxs("p",{className:"text-gray-300 leading-relaxed mb-3",children:["Після завершення навчання та отримання звання не нижче ",t.jsx("span",{className:"text-[#d4af37]",children:"4-го рангу (Sergeant)"})," співробітник отримує право обрати спеціалізований підрозділ для подальшої служби (DPU, SEB, PIA)."]})]})]})},{id:"section-4",number:"IV",title:"Структурні підрозділи",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#d4af37] rounded p-4",children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"🎓 Sheriff Academy (SA)"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Навчально-підготовчий підрозділ, відповідальний за відбір, підготовку, навчання та атестацію осіб, що вступають на службу в департамент."}),t.jsxs("div",{className:"text-gray-400 text-sm",children:[t.jsx("p",{className:"font-semibold mb-1",children:"Завдання:"}),t.jsxs("ul",{className:"space-y-1",children:[t.jsx("li",{children:"• проведення відбору кандидатів на службу"}),t.jsx("li",{children:"• базова тактична, юридична та фізична підготовка"}),t.jsx("li",{children:"• навчання дисципліни та стандартів LSCSD"})]})]})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#d4af37] rounded p-4",children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"🏛️ Planning & Internal Affairs (PIA)"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Аналітичний та контрольний підрозділ департаменту, відповідальний за внутрішній нагляд, дисциплінарний контроль та стратегічне планування."}),t.jsxs("div",{className:"text-gray-400 text-sm",children:[t.jsx("p",{className:"font-semibold mb-1",children:"Повноваження PIA:"}),t.jsxs("ul",{className:"space-y-1",children:[t.jsx("li",{children:"• вимагати службову інформацію (у межах компетенції)"}),t.jsx("li",{children:"• проводити опитування"}),t.jsx("li",{children:"• ініціювати дисциплінарні процедури"}),t.jsx("li",{children:"• накладати дисциплінарні санкції"})]})]}),t.jsx("p",{className:"text-red-400 text-xs mt-3 italic",children:"⚠️ Втручання у діяльність PIA без дозволу керівництва забороняється та карається згідно статуту."})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#d4af37] rounded p-4",children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"🚓 District Patrol Unit (DPU)"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Спеціалізований підрозділ, основною діяльністю якого є контроль дорожнього руху, реагування на виклики та оперативна діяльність."}),t.jsxs("div",{className:"text-gray-400 text-sm",children:[t.jsx("p",{className:"font-semibold mb-1",children:"Основні завдання:"}),t.jsxs("ul",{className:"space-y-1",children:[t.jsx("li",{children:"• патрулювання автомобільних доріг"}),t.jsx("li",{children:"• контроль дотримання ПДР"}),t.jsx("li",{children:"• захист особи, суспільства, держави"}),t.jsx("li",{children:"• попередження і припинення злочинів"}),t.jsx("li",{children:"• розшук осіб у розшуку"})]})]})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#d4af37] rounded p-4",children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"⚔️ Special Enforcement Bureau (SEB)"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Елітний тактичний підрозділ, призначений для виконання найбільш небезпечних та високоризикових операцій."}),t.jsxs("div",{className:"text-gray-400 text-sm mb-3",children:[t.jsx("p",{className:"font-semibold mb-1",children:"Основні завдання:"}),t.jsxs("ul",{className:"space-y-1",children:[t.jsx("li",{children:"• проведення спецоперацій проти озброєних злочинців"}),t.jsx("li",{children:"• штурм укріплених об'єктів"}),t.jsx("li",{children:"• звільнення заручників"}),t.jsx("li",{children:"• антитерористичні заходи"}),t.jsx("li",{children:"• знешкодження особливо небезпечних злочинців"})]})]}),t.jsxs("div",{className:"bg-[#121212] border border-[#2a2a2a] rounded p-3",children:[t.jsx("p",{className:"text-[#d4af37] text-xs font-semibold mb-1",children:"Вимоги до особового складу:"}),t.jsxs("ul",{className:"text-gray-400 text-xs space-y-1",children:[t.jsx("li",{children:"• відмінна фізична підготовка"}),t.jsx("li",{children:"• стабільна психіка та стресостійкість"}),t.jsx("li",{children:"• бездоганна дисципліна та репутація"}),t.jsx("li",{children:"• високий рівень стрілецької підготовки"})]})]}),t.jsx("p",{className:"text-yellow-400 text-xs mt-3 italic",children:"⚠️ Носіння масок дозволяється лише під час спецоперацій. В інших випадках це порушення етичного кодексу."})]})]})},{id:"section-5",number:"V",title:"Порядок прийому на службу",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"5.1 Вимоги до кандидатів"}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-300 text-sm mb-2",children:"До проходження відбору допускаються особи, які відповідають таким вимогам:"}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• досягнення встановленого вікового цензу"}),t.jsx("li",{children:"• відсутність серйозних порушень закону"}),t.jsx("li",{children:"• відсутність дисциплінарних покарань"}),t.jsx("li",{children:"• психічна та емоційна стабільність"}),t.jsx("li",{children:"• професійна придатність"}),t.jsx("li",{children:"• готовність дотримуватися статуту департаменту"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"5.2 Процес рекрутингу"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Рекрутинг здійснюється через подання заявки кандидатом до Sheriff Academy."}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:t.jsx("p",{className:"text-gray-300 text-sm",children:"1. Подання заявки з особистими даними"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:t.jsx("p",{className:"text-gray-300 text-sm",children:"2. Розгляд рекрутинговою комісією"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:t.jsx("p",{className:"text-gray-300 text-sm",children:"3. Допуск до тестування або відмова"})})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"5.3 Проходження тестів"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("h4",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"Теоретичний тест"}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• знання законів"}),t.jsx("li",{children:"• базові положення статуту"}),t.jsx("li",{children:"• правила поведінки та субординації"})]})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("h4",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"Практичний тест"}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• базова тактична підготовка"}),t.jsx("li",{children:"• поведінка в конфліктних ситуаціях"}),t.jsx("li",{children:"• навички взаємодії в команді"})]})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"5.4 Прийняття присяги"}),t.jsx("p",{className:"text-gray-300 text-sm mb-2",children:"Кандидат, який успішно пройшов тестування, допускається до церемонії прийняття присяги."}),t.jsx("div",{className:"bg-[#0a0a0a] border border-[#d4af37] border-l-4 rounded p-4",children:t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"З моменту прийняття присяги кандидат набуває статусу співробітника департаменту та присвоюється звання SA Cadet I."})})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"5.5 Реєстрація в департаменті"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Після прийняття присяги новоприйнятий співробітник проходить офіційну реєстрацію."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Під час реєстрації:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• внесення до внутрішніх баз департаменту"}),t.jsx("li",{children:"• створення особової справи"}),t.jsx("li",{children:"• закріплення службового номера"}),t.jsx("li",{children:"• визначення навчальної групи в Sheriff Academy"})]})]})]})]})},{id:"section-6",number:"VI",title:"Положення про підвищення",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"6.1 Загальні принципи кар'єрного зростання"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Кар'єрне зростання базується на системності служби, дисциплінованості, професійних досягненнях та лояльності до департаменту."}),t.jsx("div",{className:"bg-[#0a0a0a] border border-[#d4af37] border-l-4 rounded p-4",children:t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"⚠️ Жодне підвищення не є автоматичним та гарантованим — рішення ухвалює керівництво департаменту."})})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"6.2 Необхідні умови для підвищення"}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Співробітник повинен:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• мати достатній стаж на поточному званні"}),t.jsx("li",{children:"• відповідати службовим стандартам"}),t.jsx("li",{children:"• не мати серйозних дисциплінарних порушень"}),t.jsx("li",{children:"• виконувати обов'язки на високому рівні"}),t.jsx("li",{children:"• проявляти ініціативність та командну роботу"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"6.3 Система балів / заслуг / атестацій"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Департамент використовує комбіновану систему оцінки: систему заслуг, рейтинг довіри командування, атестаційні перевірки та внутрішню статистику."}),t.jsx("p",{className:"text-gray-400 text-sm italic",children:"За особливі заслуги можливі позачергові підвищення."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"6.4 Умови переходу в підрозділи"}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#d4af37] rounded p-4",children:[t.jsxs("p",{className:"text-gray-300 text-sm mb-2",children:["З моменту досягнення ",t.jsx("span",{className:"text-[#d4af37] font-semibold",children:"4-го порядкового звання (Sergeant)"})," співробітник отримує право:"]}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• покинути Sheriff Academy як штатний підготовлений співробітник"}),t.jsx("li",{children:"• подати заявку на вступ до спеціалізованого підрозділу (PIA, DPU, SEB)"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"6.6 Пониження та дисциплінарні заходи"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Пониження у званні можливе у випадках серйозних дисциплінарних порушень, зловживання владою, дискредитації департаменту або систематичної некомпетентності."}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("h4",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"Тимчасове пониження"}),t.jsx("p",{className:"text-gray-400 text-sm",children:"З можливістю повернення до попереднього звання"})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-red-600 rounded p-4",children:[t.jsx("h4",{className:"text-red-400 text-sm font-semibold mb-2",children:"Постійне пониження"}),t.jsx("p",{className:"text-gray-400 text-sm",children:"Без можливості повернення до попереднього звання"})]})]})]})]})},{id:"section-7",number:"VII",title:"Дисципліна та відповідальність",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"7.1 Загальні правила поведінки"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Кожен співробітник зобов'язаний дотримуватись високих стандартів поведінки, професіоналізму, честі та службової етики."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-red-600 rounded p-4",children:[t.jsx("p",{className:"text-red-400 text-sm font-semibold mb-2",children:"ЗАБОРОНЯЄТЬСЯ:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• зловживання службовими повноваженнями"}),t.jsx("li",{children:"• грубість, образи, неповага до громадян та колег"}),t.jsx("li",{children:"• порушення законодавства та статуту"}),t.jsx("li",{children:"• корупційні дії та приватні вигоди зі служби"}),t.jsx("li",{children:"• самовільні дії поза межами повноважень"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"7.2 Дисциплінарні правопорушення"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("h4",{className:"text-yellow-400 text-sm font-semibold mb-2",children:"Стандартні порушення"}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• порушення службової дисципліни"}),t.jsx("li",{children:"• невиконання наказів"}),t.jsx("li",{children:"• халатність під час виконання обов'язків"}),t.jsx("li",{children:"• неповага до співробітників"})]})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-red-600 rounded p-4",children:[t.jsx("h4",{className:"text-red-400 text-sm font-semibold mb-2",children:"Особливо тяжкі"}),t.jsxs("ul",{className:"text-gray-400 text-sm space-y-1",children:[t.jsx("li",{children:"• службове зловживання"}),t.jsx("li",{children:"• фальсифікація доказів"}),t.jsx("li",{children:"• корупція"}),t.jsx("li",{children:"• приховування порушень інших"}),t.jsx("li",{children:"• дискредитація департаменту"})]})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"7.3 Види покарань"}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-yellow-600 pl-4 py-2",children:t.jsx("p",{className:"text-yellow-400 text-sm",children:"Усне зауваження"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-yellow-600 pl-4 py-2",children:t.jsx("p",{className:"text-yellow-400 text-sm",children:"Офіційна догана"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-orange-600 pl-4 py-2",children:t.jsx("p",{className:"text-orange-400 text-sm",children:"Тимчасове обмеження в доступі до діяльності"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-orange-600 pl-4 py-2",children:t.jsx("p",{className:"text-orange-400 text-sm",children:"Позбавлення можливості підвищення"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-red-600 pl-4 py-2",children:t.jsx("p",{className:"text-red-400 text-sm",children:"Пониження у званні"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-red-600 pl-4 py-2",children:t.jsx("p",{className:"text-red-400 text-sm",children:"Відсторонення від служби"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-red-700 pl-4 py-2",children:t.jsx("p",{className:"text-red-500 text-sm font-semibold",children:"Звільнення з департаменту"})})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"7.4 Порядок розгляду справ"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Дисциплінарні справи розглядаються керівництвом департаменту або підрозділом Planning & Internal Affairs (PIA)."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Процедура розгляду:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"1. Збір матеріалів"}),t.jsx("li",{children:"2. Опитування свідків"}),t.jsx("li",{children:"3. Службовий аналіз дій співробітника"}),t.jsx("li",{children:"4. Винесення офіційного висновку"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"7.5 Процедура апеляції"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Співробітник має право оскаржити дисциплінарне рішення, якщо вважає його несправедливим."}),t.jsx("p",{className:"text-gray-400 text-sm italic",children:"Рішення за апеляцією є остаточним та обов'язковим до виконання."})]})]})},{id:"section-8",number:"VIII",title:"Організація служби",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"8.1 Робочі зміни"}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#d4af37] rounded p-4 mb-3",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"Графік робочих змін:"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-gray-300 text-sm",children:"Робоча доба:"}),t.jsx("p",{className:"text-[#d4af37] font-mono",children:"10:00 - 22:00"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-gray-300 text-sm",children:"Вихідна доба:"}),t.jsx("p",{className:"text-[#d4af37] font-mono",children:"11:00 - 22:00"})]})]})]}),t.jsx("p",{className:"text-gray-300 text-sm",children:"Співробітник зобов'язаний з'являтися на зміну вчасно, у повній формі та з необхідним спорядженням. Запізнення або самовільний відхід прирівнюються до дисциплінарного порушення."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"8.2 Патрулювання"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Патрулювання є основним видом діяльності поліційного департаменту. Може бути пішим, автомобільним, спільним з іншими підрозділами або спеціалізованим."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Під час патрулювання:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• підтримувати громадський порядок"}),t.jsx("li",{children:"• реагувати на виклики та події"}),t.jsx("li",{children:"• проводити профілактичні перевірки"}),t.jsx("li",{children:"• забезпечувати безпеку громадян"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"8.3 Затримання, арешт, обшук"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Затримання особи здійснюється у випадку порушення закону, підозри у скоєнні злочину або з метою запобігання небезпеці."}),t.jsx("div",{className:"bg-[#0a0a0a] border border-[#d4af37] border-l-4 rounded p-4",children:t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"Під час затримання співробітник зобов'язаний дотримуватися порядку затримання підозрюваного та діяти виключно в межах чинного законодавства."})})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"8.4 Документообіг"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Всі дії співробітників, що мають правове значення (затримання, арешти, вилучення, спецоперації), повинні бути задокументовані."}),t.jsx("p",{className:"text-red-400 text-sm italic",children:"⚠️ Неведення документів або їх фальсифікація вважаються серйозним порушенням."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"8.5 Взаємодія з іншими фракціями та службами"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Департамент Шерифів зобов'язаний підтримувати взаємодію з іншими державними структурами, медичними службами, армією, спецпідрозділами та адміністрацією міста."}),t.jsx("p",{className:"text-gray-400 text-sm italic",children:"У конфліктах між фракціями співробітники департаменту повинні діяти як нейтральна сила закону та забезпечувати порядок."})]})]})},{id:"section-9",number:"IX",title:"Майно та оснащення",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"9.1 Нерухоме майно"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"До нерухомого майна Департаменту належать головна будівля департаменту, підрозділи, відділення, навчальні центри, стрілецькі полігони та тренувальні бази."}),t.jsx("div",{className:"bg-[#0a0a0a] border border-red-600 rounded p-4",children:t.jsx("p",{className:"text-red-400 text-sm font-semibold",children:"Забороняється псування майна, несанкціонована перебудова приміщень або використання будівель не за призначенням."})})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"9.2 Транспорт департаменту"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Транспорт департаменту є службовим та використовується виключно в інтересах служби."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Правила експлуатації:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• Керувати транспортом мають право лише співробітники з відповідним рангом"}),t.jsx("li",{children:"• Забороняється використання в особистих цілях"}),t.jsx("li",{children:"• Дотримуватися правил дорожнього руху"}),t.jsx("li",{children:"• Пошкодження підлягає службовому розслідуванню"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"9.3 Озброєння"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Озброєння департаменту включає вогнепальну зброю, нелетальні засоби, спеціальні види зброї та боєприпаси."}),t.jsx("div",{className:"bg-[#0a0a0a] border border-[#d4af37] border-l-4 rounded p-4",children:t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"Застосування зброї допускається лише у визначених правилами випадках та має бути виправданим і пропорційним."})})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"9.4 Засоби спеціального призначення"}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"До спецзасобів належать:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• Бронежилети"}),t.jsx("li",{children:"• Наручники"}),t.jsx("li",{children:"• Щити"}),t.jsx("li",{children:"• Електрошокери"}),t.jsx("li",{children:"• Газові та шумові засоби"}),t.jsx("li",{children:"• Засоби масового впливу"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"9.6 Відповідальність за втрату / пошкодження"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-[#0a0a0a] border border-green-600 rounded p-4",children:[t.jsx("h4",{className:"text-green-400 text-sm font-semibold mb-2",children:"Службова необхідність"}),t.jsx("p",{className:"text-gray-400 text-sm",children:"Співробітник не несе покарання, якщо пошкодження сталося внаслідок службової необхідності"})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-red-600 rounded p-4",children:[t.jsx("h4",{className:"text-red-400 text-sm font-semibold mb-2",children:"Недбалість / Умисне"}),t.jsx("p",{className:"text-gray-400 text-sm",children:"Можливе дисциплінарне покарання, штрафні санкції. Умисне псування карається максимально суворо."})]})]})]})]})},{id:"section-10",number:"X",title:"Комунікація та документообіг",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"11.1 Радіоефір"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Радіоефір використовується для оперативної взаємодії між співробітниками департаменту під час патрулювання, спецоперацій та службових дій."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-red-600 rounded p-4",children:[t.jsx("p",{className:"text-red-400 text-sm font-semibold mb-2",children:"ЗАБОРОНЯЄТЬСЯ:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• передавати приватні повідомлення через службовий канал"}),t.jsx("li",{children:"• блокувати ефір"}),t.jsx("li",{children:"• передавати невірну інформацію"}),t.jsx("li",{children:"• вводити в оману інших співробітників"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"11.2 Звіти та рапорти"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Усі дії співробітників, що мають службове або правове значення, підлягають документуванню у вигляді рапортів, звітів та службових записів."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Звіти подаються:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• після патрулювання (щоденні рапорти)"}),t.jsx("li",{children:"• після спецоперацій"}),t.jsx("li",{children:"• після затримань, обшуків та арештів"}),t.jsx("li",{children:"• за вимогою керівництва"})]})]}),t.jsx("p",{className:"text-yellow-400 text-sm mt-3 italic",children:"⚠️ Недотримання правил звітування вважається дисциплінарним порушенням."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"11.3 Ведення бази даних"}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"База даних департаменту включає:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• Інформацію про співробітників та їх звання"}),t.jsx("li",{children:"• Затримання, арешти та правопорушення"}),t.jsx("li",{children:"• Майно та озброєння"}),t.jsx("li",{children:"• Внутрішні дисциплінарні справи"})]})]}),t.jsx("p",{className:"text-gray-400 text-sm mt-3",children:"Доступ до бази мають лише уповноважені співробітники."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"11.4 Конфіденційність та доступ"}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#d4af37] border-l-4 rounded p-4",children:[t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold mb-2",children:"Уся службова інформація департаменту є конфіденційною."}),t.jsx("p",{className:"text-gray-300 text-sm",children:"Забороняється розголошення службової інформації стороннім особам без дозволу керівництва. Порушення конфіденційності тягне дисциплінарну відповідальність."})]})]})]})},{id:"section-11",number:"XI",title:"Заохочення та нагороди",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"12.1 Види нагород"}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:t.jsx("p",{className:"text-gray-300 text-sm",children:"Письмова подяка"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:t.jsx("p",{className:"text-gray-300 text-sm",children:"Грамота або сертифікат департаменту"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:t.jsx("p",{className:"text-gray-300 text-sm",children:"Матеріальна винагорода"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"Підвищення в ранзі позачергово за заслуги"})}),t.jsx("div",{className:"bg-[#0a0a0a] border-l-2 border-[#d4af37] pl-4 py-2",children:t.jsx("p",{className:"text-gray-300 text-sm",children:"Спеціальні відзнаки підрозділу або департаменту"})})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"12.2 Підстави для нагородження"}),t.jsx("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• успішне виконання службових завдань"}),t.jsx("li",{children:"• прояв ініціативи та професіоналізму"}),t.jsx("li",{children:"• участь у спецопераціях та навчаннях"}),t.jsx("li",{children:"• підтримка дисципліни та авторитету департаменту"}),t.jsx("li",{children:"• заслуги у взаємодії з іншими підрозділами"})]})})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"12.3 Почесні відзнаки"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Почесні відзнаки присуджуються співробітникам за особливі досягнення, зразкову службу та виняткову відданість справі."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#d4af37] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Види почесних відзнак:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• Медалі та значки"}),t.jsx("li",{children:"• Спеціальні титули або почесні звання"}),t.jsx("li",{children:"• Публічне визнання в департаменті"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"12.4 Впис у особову справу"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Кожне нагородження та заохочення фіксується в особовій справі співробітника."}),t.jsx("p",{className:"text-gray-400 text-sm italic",children:"Ведення обліку заохочень дозволяє відслідковувати кар'єрне зростання та мотивувати співробітників."})]})]})},{id:"section-12",number:"XII",title:"Внутрішня безпека",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"13.1 Етика поведінки"}),t.jsx("p",{className:"text-gray-300 text-sm",children:"Співробітники департаменту зобов'язані дотримуватися високих етичних стандартів у всіх аспектах життя, як під час служби, так і поза нею."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"13.2 Репутація департаменту"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Кожен співробітник несе відповідальність за репутацію департаменту своїми діями та словами."}),t.jsx("div",{className:"bg-[#0a0a0a] border border-[#d4af37] border-l-4 rounded p-4",children:t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"Дії, що можуть дискредитувати департамент, вважаються порушенням статуту."})})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"13.3 Поведінка в соціальних мережах та спец.зв'язку"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Публічні висловлювання співробітників у соціальних мережах повинні бути етичними та не шкодити авторитету департаменту."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-red-600 rounded p-4",children:[t.jsx("p",{className:"text-red-400 text-sm font-semibold mb-2",children:"ЗАБОРОНЯЄТЬСЯ:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• розголошувати внутрішню або конфіденційну інформацію"}),t.jsx("li",{children:"• публічно критикувати керівництво або колег у неприязній формі"}),t.jsx("li",{children:"• розповсюджувати фейкову інформацію про діяльність департаменту"})]})]}),t.jsx("p",{className:"text-yellow-400 text-sm mt-3 italic",children:"⚠️ Дії у соцмережах, що шкодять репутації департаменту, підлягають дисциплінарній відповідальності."})]})]})},{id:"section-13",number:"XIII",title:"Заключні положення",content:()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"14.1 Дія статуту"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Цей Статут є основним нормативним документом, що регламентує організацію, діяльність, обов'язки та права співробітників Los Santos County Sheriff Department."}),t.jsx("div",{className:"bg-[#0a0a0a] border border-[#d4af37] border-l-4 rounded p-4",children:t.jsx("p",{className:"text-[#d4af37] text-sm font-semibold",children:"Усі співробітники департаменту зобов'язані дотримуватися положень статуту з моменту прийняття на службу."})})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"14.2 Внесення змін"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Зміни та доповнення до статуту можуть вноситися лише керівництвом департаменту (Sheriff, UnderSheriff, Assistant Sheriff)."}),t.jsx("p",{className:"text-gray-400 text-sm",children:"Зміни набирають чинності після офіційного оприлюднення та повідомлення всіх співробітників."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-3",children:"14.3 Контроль виконання"}),t.jsx("p",{className:"text-gray-300 text-sm mb-3",children:"Контроль за дотриманням статуту здійснюється керівництвом департаменту та підрозділом Planning & Internal Affairs (PIA)."}),t.jsxs("div",{className:"bg-[#0a0a0a] border border-[#2a2a2a] rounded p-4",children:[t.jsx("p",{className:"text-gray-400 text-sm font-semibold mb-2",children:"Регулярний контроль включає:"}),t.jsxs("ul",{className:"text-gray-300 text-sm space-y-1",children:[t.jsx("li",{children:"• перевірки діяльності підрозділів"}),t.jsx("li",{children:"• аналіз звітності та документів"}),t.jsx("li",{children:"• оцінку професійної та етичної поведінки співробітників"})]})]}),t.jsx("p",{className:"text-gray-400 text-sm mt-3 italic",children:"Метою контролю є забезпечення ефективності служби, законності дій та підтримання авторитету департаменту."})]}),t.jsxs("div",{className:"bg-[#0a0a0a] border-2 border-[#d4af37] rounded p-6 text-center",children:[t.jsx("p",{className:"text-[#d4af37] text-lg font-bold mb-2",children:"Los Santos County Sheriff Department"}),t.jsx("p",{className:"text-gray-300 text-sm italic",children:'"Integrity. Service. Protection."'})]})]})}];function Nf(){const[x,C]=ge.useState("section-1"),p=Ad.find(w=>w.id===x);return t.jsxs("div",{className:"flex h-full",children:[t.jsx("div",{className:"w-72 border-r border-[#2a2a2a] bg-[#0a0a0a] overflow-y-auto",children:t.jsxs("div",{className:"p-4",children:[t.jsx("h3",{className:"text-[#d4af37] font-semibold mb-4 text-sm uppercase tracking-wide",children:"Розділи статуту"}),t.jsx("nav",{className:"space-y-1",children:Ad.map(w=>t.jsxs("button",{onClick:()=>C(w.id),className:`
                  w-full text-left px-4 py-3 rounded transition-all duration-200
                  flex items-center justify-between group
                  ${x===w.id?"bg-[#d4af37] text-[#0a0a0a] font-semibold":"text-gray-400 hover:bg-[#121212] hover:text-[#d4af37]"}
                `,children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:`
                    text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center
                    ${x===w.id?"bg-[#0a0a0a] text-[#d4af37]":"bg-[#2a2a2a] text-gray-500 group-hover:bg-[#d4af37] group-hover:text-[#0a0a0a]"}
                  `,children:w.number}),t.jsx("span",{className:"text-sm",children:w.title})]}),t.jsx(Md,{className:`
                  w-4 h-4 transition-transform
                  ${x===w.id?"translate-x-1":""}
                `})]},w.id))})]})}),t.jsx("div",{className:"flex-1 overflow-y-auto",children:t.jsxs("div",{className:"p-8 max-w-4xl",children:[t.jsxs("div",{className:"mb-6",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center",children:t.jsx("span",{className:"text-[#0a0a0a] font-bold text-lg",children:p==null?void 0:p.number})}),t.jsx("h2",{className:"text-2xl font-bold text-[#d4af37]",children:p==null?void 0:p.title})]}),t.jsx("div",{className:"h-1 w-24 bg-[#d4af37] rounded"})]}),t.jsx("div",{className:"text-gray-300",children:p&&t.jsx(p.content,{})})]})})]})}const bf="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Ps(x){const[C,p]=ge.useState(!1),w=()=>{p(!0)},{src:P,alt:A,style:I,className:U,...D}=x;return C?t.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${U??""}`,style:I,children:t.jsx("div",{className:"flex items-center justify-center w-full h-full",children:t.jsx("img",{src:bf,alt:"Error loading image",...D,"data-original-url":P})})}):t.jsx("img",{src:P,alt:A,className:U,style:I,...D,onError:w})}function wf({content:x}){var L,X;const C=x.split(`
`),p=[];let w=[],P="",A=0,I=!1,U=[];const D=()=>{if(w.length>0&&P){let _="from-[#d4af37] to-[#8b7355]";P.includes("⚠")||P.includes("ВАЖЛИВО")?_="from-yellow-600 to-orange-600":P.includes("🔫")||P.includes("💣")?_="from-red-600 to-red-800":P.includes("📡")||P.includes("📻")?_="from-green-600 to-green-800":(P.includes("🎓")||P.includes("💡"))&&(_="from-blue-600 to-blue-800"),p.push(t.jsxs("div",{className:"mb-6",children:[t.jsx("div",{className:`bg-gradient-to-r ${_} p-3 rounded-t-lg border-b-2 border-black`,children:t.jsx("h3",{className:"font-bold text-white text-base drop-shadow-lg",children:P})}),t.jsx("div",{className:"bg-[#1a1a1a] border-2 border-[#d4af37] border-opacity-30 border-t-0 rounded-b-lg p-5 shadow-lg",children:w})]},`section-${A}`)),w=[],P=""}else w.length>0&&(p.push(t.jsx("div",{className:"mb-6",children:t.jsx("div",{className:"bg-[#1a1a1a] border-2 border-[#d4af37] border-opacity-20 rounded-lg p-5 shadow-md",children:w})},`intro-${A}`)),w=[])};for(let _=0;_<C.length;_++){const N=C[_].trim();if(A=_,N==="```"){I?(w.push(t.jsx("div",{className:"mb-3 bg-[#0a0a0a] border-2 border-[#333] rounded-lg p-3 overflow-x-auto",children:t.jsx("pre",{className:"text-[#d4af37] text-xs font-mono leading-relaxed",children:U.join(`
`)})},`code-block-${_}`)),U=[],I=!1):I=!0;continue}if(I){U.push(N);continue}if(!N){w.length>0&&w.push(t.jsx("div",{className:"h-3"},`empty-${_}`));continue}if(N.match(/^[🚨💣🔫🩹🏠📊📜⚖️🚗⚠️🎯🚔🏛️铓️📡]/)){D(),p.push(t.jsxs("div",{className:"mb-8 text-center",children:[t.jsx("div",{className:"bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent p-4 rounded-lg mb-4",children:t.jsx("h1",{className:"text-4xl font-bold text-[#d4af37] drop-shadow-lg",children:N})}),t.jsx("div",{className:"h-1 w-48 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto rounded-full"})]},`main-title-${_}`));continue}if(N.startsWith("📍")){D(),p.push(t.jsx("div",{className:"mb-8 text-center",children:t.jsx("div",{className:"inline-block bg-[#1a1a1a] border border-[#d4af37] border-opacity-30 rounded-full px-6 py-2",children:t.jsx("p",{className:"text-[#888] text-sm italic",children:N})})},`dept-${_}`));continue}if(N.match(/^[📌🚔📡⚠🛑🎯⚖💡🚨🔫⚔️🎓🩸💨💓🧠🦴🔥💊🎒📋🗣️🤲🔧]/)){D(),P=N;continue}if(N.match(/^(РІВЕНЬ|ФАЗА|КРОК|ПРАВИЛО)\s+[#\d]+:/i)){w.push(t.jsx("div",{className:"mb-4 mt-4",children:t.jsx("div",{className:"bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] border-l-4 border-[#d4af37] p-3 rounded",children:t.jsx("h4",{className:"font-bold text-[#d4af37] text-base",children:N})})},`sublevel-${_}`));continue}if(N.startsWith("**")&&N.endsWith("**")){const ne=N.replace(/\*\*/g,"");w.push(t.jsx("div",{className:"mb-3 mt-3",children:t.jsx("div",{className:"bg-[#2a2a2a] bg-opacity-50 border-l-4 border-[#d4af37] p-3 rounded-r shadow-md",children:t.jsx("p",{className:"font-bold text-[#d4af37] text-sm tracking-wide",children:ne})})},`bold-${_}`));continue}if(N.match(/^[-✓✗•❌]/)){const ne=N.charAt(0),be=N.substring(1).trim();let q="text-[#d4af37]",Z="bg-[#0f0f0f]",Me="border-[#d4af37]";ne==="✓"?(q="text-green-400",Z="bg-green-950 bg-opacity-20",Me="border-green-600"):(ne==="✗"||ne==="❌")&&(q="text-red-400",Z="bg-red-950 bg-opacity-20",Me="border-red-600"),w.push(t.jsxs("div",{className:`mb-2 ${Z} border-l-2 ${Me} p-3 rounded-r flex items-start gap-3 hover:bg-opacity-30 transition-all`,children:[t.jsx("span",{className:`${q} font-bold flex-shrink-0 text-lg`,children:ne}),t.jsx("span",{className:"text-white text-sm leading-relaxed",children:be})]},`list-${_}`));continue}if(N.startsWith("Приклад:")||N.startsWith("приклад:")){w.push(t.jsx("div",{className:"mb-3 mt-3 bg-blue-950 bg-opacity-20 border-2 border-blue-600 border-opacity-40 rounded-lg p-4",children:t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-blue-400 text-xl flex-shrink-0",children:"💡"}),t.jsx("p",{className:"text-blue-300 text-sm leading-relaxed",children:N})]})},`example-${_}`));continue}if(N.startsWith("Англійською")||N.startsWith("Українською")){const ne=N.startsWith("Англійською");w.push(t.jsx("div",{className:"mb-2 mt-3",children:t.jsx("div",{className:`inline-block ${ne?"bg-blue-900":"bg-yellow-900"} bg-opacity-20 border ${ne?"border-blue-600":"border-yellow-600"} border-opacity-40 rounded px-3 py-1`,children:t.jsx("p",{className:`${ne?"text-blue-400":"text-yellow-400"} text-xs font-semibold uppercase tracking-wider`,children:N})})},`lang-${_}`));continue}if(N.startsWith('"')&&N.endsWith('"')){w.push(t.jsxs("div",{className:"mb-4 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border-l-4 border-[#d4af37] p-4 rounded-r shadow-lg",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx("span",{className:"text-[#d4af37]",children:"💬"}),t.jsx("span",{className:"text-xs text-[#888] uppercase tracking-wider",children:"Цитата"})]}),t.jsx("p",{className:"text-[#d4af37] text-sm font-mono italic leading-relaxed pl-4 border-l-2 border-[#d4af37] border-opacity-30",children:N})]},`quote-${_}`));continue}if(N.match(/^\d+\./)){const ne=N.split(/^(\d+\.)/),be=((L=ne[1])==null?void 0:L.replace(".",""))||"",q=((X=ne[2])==null?void 0:X.trim())||"";w.push(t.jsxs("div",{className:"mb-3 flex items-start gap-3 group",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("span",{className:"text-[#d4af37] font-bold bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border-2 border-[#d4af37] border-opacity-40 w-8 h-8 rounded-full flex items-center justify-center text-xs group-hover:border-opacity-100 transition-all shadow-md",children:be})}),t.jsx("span",{className:"text-white text-sm flex-1 pt-1.5 leading-relaxed",children:q})]},`num-${_}`));continue}if(N.startsWith("/f")){w.push(t.jsxs("div",{className:"mb-4 bg-gradient-to-r from-[#0a1f0a] to-[#0d1f0d] border-2 border-green-600 border-opacity-50 rounded-lg p-4 shadow-lg",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx("span",{className:"text-green-400 text-xl animate-pulse",children:"📻"}),t.jsx("span",{className:"text-green-400 text-xs font-bold uppercase tracking-wider",children:"Доповідь в рацію"})]}),t.jsx("p",{className:"text-green-300 text-sm font-mono bg-black bg-opacity-30 p-3 rounded border border-green-800 border-opacity-30",children:N})]},`radio-${_}`));continue}if(N.includes("ВАЖЛИВО")||N.includes("КРИТИЧНО")||N.includes("⚠")){w.push(t.jsx("div",{className:"mb-4 bg-gradient-to-r from-yellow-950 to-orange-950 bg-opacity-20 border-2 border-yellow-500 rounded-lg p-4 shadow-lg",children:t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx("span",{className:"text-yellow-400 text-2xl flex-shrink-0 animate-pulse",children:"⚠️"}),t.jsx("p",{className:"text-yellow-100 text-sm font-semibold leading-relaxed",children:N})]})},`warning-${_}`));continue}if(N.startsWith("Ознаки:")||N.startsWith("Симптоми:")||N.startsWith("Завдання:")){w.push(t.jsx("div",{className:"mb-2 mt-3",children:t.jsx("p",{className:"text-cyan-400 text-sm font-semibold uppercase tracking-wide",children:N})},`signs-${_}`));continue}if(N.startsWith("Дії:")||N.startsWith("Процедура:")||N.startsWith("Як застосувати:")){w.push(t.jsx("div",{className:"mb-2 mt-3",children:t.jsx("p",{className:"text-purple-400 text-sm font-semibold uppercase tracking-wide",children:N})},`actions-${_}`));continue}if(N.startsWith("Коли застосовувати:")||N.startsWith("Використовується при:")||N.startsWith("Застосування:")||N.startsWith("Застосування при:")){w.push(t.jsx("div",{className:"mb-2 mt-3",children:t.jsx("p",{className:"text-orange-400 text-sm font-semibold uppercase tracking-wide",children:N})},`when-${_}`));continue}if(N.startsWith("Опір підозрюваного:")||N.startsWith("Рівень сили:")){w.push(t.jsx("div",{className:"mb-2 mt-3",children:t.jsx("p",{className:"text-red-400 text-sm font-semibold uppercase tracking-wide",children:N})},`resist-${_}`));continue}w.push(t.jsx("p",{className:"text-gray-300 text-sm mb-2 leading-relaxed",children:N},`text-${_}`))}return D(),t.jsx("div",{className:"max-w-5xl mx-auto",children:p})}const kf=`ЛЕКЦІЯ 01\r
СТРУКТУРА SHERIFF’S DEPARTMENT ТА ЮРИСДИКЦІЯ\r
\r
\r
1. ЩО ТАКЕ SHERIFF’S DEPARTMENT\r
Sheriff’s Department— це правоохоронний орган округу (Blaine County).\r
Він відповідає за дотримання закону на всій території округу.\r
\r
Sheriff’s Office працює у:\r
- сільській місцевості\r
- на трасах та шосе\r
- передмістях\r
- невеликих населених пунктах\r
- об’єктах округу\r
\r
2. ХТО ТАКИЙ SHERIFF\r
Sheriff — це керівник Sheriff’s Department.\r
\r
\r
Sheriff несе відповідальність за:\r
- управління департаментом\r
- політику та правила служби\r
- дисципліну персоналу\r
- стратегічні рішення\r
\r
3. ЩО ТАКЕ ЮРИСДИКЦІЯ\r
Юрисдикція — це законні повноваження діяти на певній території.\r
\r
Простими словами:\r
юрисдикція визначає, де офіцер має право працювати і проводити арешти.\r
\r
Юрисдикція Sheriff’s Office включає:\r
- територію округу\r
- міжміські траси\r
- сільські зони\r
Проведення дій поза юрисдикцією без дозволу заборонене.\r
\r
\r
\r
4. ВІДМІННІСТЬ ВІД МІСЬКОЇ ПОЛІЦІЇ\r
Міська поліція працює виключно в межах міста.\r
\r
Sheriff’s Department:\r
- патрулює траси та шосе\r
- реагує на виклики в сільській місцевості\r
- надає підкріплення іншим підрозділам\r
\r
Підкріплення (Backup) — це допомога іншому офіцеру під час виклику.\r
\r
5. ПІДРОЗДІЛИ SHERIFF’S OFFICE\r
\r
District Patrol Unit\r
Патрульний підрозділ.\r
Основні завдання:\r
- зупинки транспортних засобів\r
- реагування на виклики 911\r
- первинні арешти\r
\r
SEB(SPECIAL ENFORCEMENT BUREAU)\r
Спеціальний підрозділ.\r
Залучається до:\r
- захоплення заручників\r
- штурмів будівель\r
- небезпечних озброєних ситуацій\r
\r
PIA (Planning Intenal Affairs)\r
Підрозділ управління та планування.\r
Відповідає за:\r
- оформленням ліцензій\r
- веденням кадрового аудиту\r
- веденням службових розслідувань та переатестацій\r
- здійснення підготовки нових кадрів в Академії Шерифів\r
\r
6. ЛАНЦЮГ КОМАНДУВАННЯ (CHAIN OF COMMAND)\r
Ланцюг командування — це система підпорядкування в департаменті.\r
Основні принципи:\r
- накази передаються зверху вниз\r
- інформація та проблеми передаються знизу вгору\r
\r
Курсант зобов’язаний виконувати законні накази старших за званням.\r
\r
7. РОЛЬ КУРСАНТА (Academy)\r
Academy — це курсант академії шерифів.\r
Academy НЕ має права:\r
- патрулювати самостійно\r
- віддавати накази\r
- приймати стратегічні рішення\r
\r
Academy ЗОБОВ’ЯЗАНИЙ:\r
- навчатися\r
- слухати інструктора\r
- дотримуватися SOP\r
\r
8. ЩО ТАКЕ SOP\r
SOP (Standard Operating Procedures) — це стандартні операційні процедури.\r
SOP визначають:\r
- порядок арешту\r
- застосування сили\r
- поведінку офіцера\r
- оформлення звітів\r
\r
SOP є обов’язковими до виконання.\r
\r
9. ПОВЕДІНКА ОФІЦЕРА\r
Офіцер Sheriff’s Office повинен:\r
- зберігати спокій\r
- діяти професійно\r
- дотримуватися закону\r
- поважати громадян\r
\r
Кожна дія офіцера впливає на репутацію департаменту.\r
\r
`,Cf=`ЛЕКЦІЯ 02\r
ЛАНЦЮГ КОМАНДУВАННЯ (CHAIN OF COMMAND)\r
\r
1. ВИЗНАЧЕННЯ\r
Ланцюг командування (Chain of Command) — це система службового підпорядкування в департаменті.\r
\r
Це чітка структура, яка визначає:\r
- хто кому підпорядковується\r
- хто має право віддавати накази\r
- як передається інформація\r
\r
2. ОСНОВНИЙ ПРИНЦИП\r
Накази передаються зверху вниз.\r
Звіти та проблеми передаються знизу вгору.\r
\r
Порушення ланцюга командування є дисциплінарним порушенням.\r
\r
3. ПРИКЛАД СТРУКТУРИ\r
Sheriff\r
↓\r
Undersheriff\r
↓\r
Assistant Sheriff\r
↓\r
Head \\ Deputy Head\r
↓\r
Major\r
↓\r
Captain\r
↓\r
Lieutenant\r
↓\r
Sergeant\r
↓\r
Academy\r
\r
Academy підпорядковується Sergeant або безпосередньому інструктору.\r
Sergeant підпорядковується Lieutenant і так далі.\r
\r
4. ПОВНОВАЖЕННЯ\r
Sheriff:\r
- приймає стратегічні рішення\r
- визначає політику департаменту\r
\r
Command Staff (Undersheriff, Assistant, Head, Deputy Head, Major):\r
- керують підрозділами\r
- затверджують операції\r
\r
Supervisors (Captain, Lieutenant):\r
- контролюють зміну\r
- відповідають за дисципліну\r
\r
Sergeants:\r
- виконує патрульні обов’язки\r
- дотримується наказів керівництва\r
\r
Academy:\r
- навчається\r
- виконує вказівки інструктора\r
\r
5. ЩО ЗАБОРОНЕНО\r
Academy або Sergeant не має права:\r
- ігнорувати законний наказ старшого\r
- віддавати накази старшим за рангом\r
- оминати безпосереднього керівника без причини\r
\r
Звернення напряму до Sheriff, минаючи свого сержанта, без вагомої причини — порушення SOP.\r
\r
6. ЯК ДІЯТИ, ЯКЩО НЕ ЗГОДЕН З НАКАЗОМ\r
1) Виконати законний наказ.\r
2) Після завершення ситуації подати рапорт.\r
3) За потреби звернутися до Internal Affairs.\r
\r
Офіцер не має права відмовитися від законного наказу через особисту думку.\r
\r
7. НЕЗАКОННИЙ НАКАЗ\r
\r
Незаконний наказ — це наказ, який:\r
- порушує закон\r
- суперечить SOP\r
- включає зловживання владою\r
\r
\r
У такому випадку офіцер повинен:\r
- відмовитися від виконання\r
- негайно повідомити вищого керівника\r
- скласти письмовий рапорт\r
\r
8. РОЛЬ СУБОРДИНАЦІЇ В RP\r
\r
Субординація — це службова дисципліна та повага до рангу.\r
\r
У RP це означає:\r
- не перебивати старшого в рації\r
- не вступати в конфлікт під час операції\r
- виконувати розподіл ролей\r
\r
Приклад правильного RP:\r
Sergeant: "Unit 12, блокуй північний вихід."\r
Academy: "Прийнято, блокую північний вихід."\r
\r
Приклад неправильного RP:\r
Academy: "Ні, я краще піду на південь."\r
\r
9. ВІДПОВІДАЛЬНІСТЬ\r
\r
Порушення ланцюга командування може призвести до:\r
- усного попередження\r
- письмового попередження\r
- пониження в званні\r
- відсторонення\r
- відрахування з академії\r
\r
`,Lf=`🚔 TRAFFIC STOP що це таке і з чим його їсти\r
📍 Los Santos County Sheriff’s Department\r
\r
Traffic Stop — це законна зупинка транспортного засобу співробітником LSCSD з метою контролю дотримання правил дорожнього руху та забезпечення громадської безпеки.\r
\r
📌 ЩО ТАКЕ TRAFFIC STOP\r
Тимчасова зупинка транспортного засобу\r
Проводиться на підставі порушення ПДР або підозрілої поведінки\r
Є службовою процедурою, а не покаранням\r
Може перерости в затримання або арешт за наявності підстав\r
\r
\r
🎯 МЕТА ТРАФІК СТОПУ\r
Забезпечення безпеки дорожнього руху\r
Попередження та припинення правопорушень\r
Перевірка документів водія і ТЗ\r
Виявлення осіб у розшуку або заборонених предметів\r
Профілактика злочинів\r
\r
\r
🚨 ПІДСТАВИ ДЛЯ ЗУПИНКИ ТРАНСПОРТУ\r
Порушення правил дорожнього руху\r
Несправність транспортного засобу\r
Орієнтування або BOLO\r
Підозріла або небезпечна поведінка водія\r
Перевірка в рамках законної операції\r
\r
\r
🛑 ПРАВИЛА ПРОВЕДЕННЯ TRAFFIC STOP\r
Увімкнути проблискові маячки та сирену  \r
 Обрати безпечне місце для зупинки  \r
 Повідомити диспетчера про місце та опис ТЗ  \r
 Дотримуватись дистанції та тактичного позиціонування  \r
 Підійти до водія лише після повної зупинки ТЗ \r
 \r
\r
⚖ ПОВЕДІНКА ШЕРИФА ПІД ЧАС ЗУПИНКИ\r
Представитись та повідомити причину зупинки\r
Дотримуватись професійного та спокійного тону\r
Чітко формулювати вимоги\r
Діяти в межах закону та SOP\r
Бути готовим до ескалації ситуації\r
\r
 ВАЖЛИВО\r
Traffic Stop — потенційно небезпечна ситуація  при якій безпека офіцера та громадян — пріоритет\r
 Усі дії мають бути RolePlay-обґрунтовані \r
Зображення\r
Sheriff | Ethan Grayline | 5461 [DSPR], \r
ТС\r
 — 22.12.2025 6:38\r
Які Юніти і їх маркування існують в Департаменті Шерифів.\r
ADAM [A] - Маркування юніту, що складається із двох та більше офіцерів.\r
LINCOLN [L] – Маркування юніта, що складається з одного офіцера.\r
AIR [AIR] - Маркування повітряного юніту у складі двох офіцерів.\r
HENRY [H] - Маркування високошвидкісного юніта, що складається з одного або двох офіцерів.\r
CHARLIE [C] - Маркування групи захоплення. (SEB)\r
ROBERT [R] – Маркування відділу детективів.\r
SUPERVISOR [SV] - Маркування керівного складу.\r
\r
Обовязково для загального ознайомлення всіма співробітниками Департаменту Шерифів\r
\r
Проведення TRAFFIC STIOP\r
Початок ситуації\r
Для зупинки транспортного засобу повинні бути використані проблискові маячки, мегафон, сирена, щоб гравець замітив, що за ним йде переслідування.\r
Зупинка транспортного засобу відбувається з дотриманням правил дорожнього руху на узбіччі дороги в рядок, де автомобіль порушника спереді, а авто шерифів позаду (При наявності 2+ автомобілів від шерифів вони встають в колону позаду дотримуючись правил дорожнього руху)\r
Важливо: Початок проведення ситуації TRAFFIC STOP розпочинається з моменту виявлення підозрілої поведінки транспортного засобу або порушення правил дорожнього руху.\r
Це не може бути зупинка бо так захотілось. \r
Зупинили авто, в нього є номерний знак, ситуація спокійна, що далі?\r
На початку TRAFFIC STOP, а саме коли автомобіль зупинено біля узбіччя, офіцер повинен сповістити диспетчера про ситуацію, дані авто порушника і місці проведення ситуації.\r
Якщо TRAFFIC STOP переходить в активну погоню тоді диспетчеру передається інформація про активну погоню. До якої повинні доєднатись ближні юніти\r
Дії стосовно водія:\r
1. Привітатись, представитись, відкинути жетон.\r
2. Вказати водію причину зупинки це не обовязково повинно бути ви порушили "Стаття 35 частина 5 пункт 3" це може бути пояснено зрозумілою для водія причину зупинки. В випадку якщо водій захоче почути конкретно статтю, назвіть йому статтю.\r
3. Ви берете у водія **Водійське посвідчення** для отримання даних про нього після чого просите зачекати в машині. \r
-- Якщо ви знаходите в юніті **ADAM [A]** - при отриманні посвідчення одним офіцером, другий офіцер щоб не тратити час вже пробиває STATIK через **Базу Даних**\`\r
-- Якщо ви знаходитесь в юніті **LINCOLN [L]** - при отриманні документів власноруч дістаєте планшет і перевіряєте водія по базі данних. (Порада робити це біля свого транспортного засобу за дверима авто використовуючи його як щит, також при початку ситуації TRAFFIC STOP в статусі **LINCOLN** краще викликати ближній дружній юніт, якщо він є, на свою ситуацію для підтримки.)\r
4. При успішному проведенні усіх попередніх дій і адекватній поведінці водія, не слід видавати йому штраф, краще обійтись усним попередженням і відпустити його на перший раз віддавши йому документи\r
\r
\r
Порада: Якщо ви також в патрулі і бачите, що LINCOLN відкидує диспетчеру дані про початок TRAFFIC STOP, підїдьте на ситуацію і можете просто побути присутнім, щоб ситуація не стала критична і максимально уникнути CODE 0 та CODE 1 \r
Sheriff | Ethan Grayline | 5461 [DSPR], \r
ТС\r
 — 22.12.2025 6:51\r
Зупинили авто, номерні знаки відсутні, ситуація спокійна, що далі?\r
1. Привітатись, представитись, відкинути жетон.\r
2. Вказати водію причину зупинки це не обовязково повинно бути ви порушили "Стаття 35 частина 5 пункт 3" це може бути пояснено зрозумілою для водія причину зупинки. В випадку якщо водій захоче почути конкретно статтю, назвіть йому статтю.\r
3. Ви берете у водія **Водійське посвідчення** для отримання даних про нього після чого просите зачекати в машині. \r
-- Якщо ви знаходите в юніті **ADAM [A]** - при отриманні посвідчення одним офіцером, другий офіцер щоб не тратити час вже пробиває STATIK через **Базу Даних**\`\r
-- Якщо ви знаходитесь в юніті **LINCOLN [L]** - при отриманні документів власноруч дістаєте планшет і перевіряєте водія по базі данних. (Порада робити це біля свого транспортного засобу за дверима авто використовуючи його як щит, також при початку ситуації TRAFFIC STOP в статусі **LINCOLN** краще викликати ближній дружній юніт, якщо він є, на свою ситуацію для підтримки.)\r
4. Попросити водія відкрити капот авто і **Перевірити авто за VIN** в наслідок перевірки за VIN ви отримаєте дані про авто та власника.\r
5. В випадку якщо авто придбане менше 3 годин тому, відпустити водія без штрафу, зробивши йому зауваження.\r
-- Якщо авто куплене більше як 3 години тому, виписати штраф відповідно до **Дорожнього Кодексу статті 58**.\r
6. При виписуванні штрафа, повідомити водію розмір суми штрафу, якщо водій згоден з штрафом тоді виписуєте штраф, якщо водій відмовляється від штрафу, евакуйовуйте авто на штрафмайданчик.\r
7. При перешкоджанні ваших дій застосовуйте відповідні статті **Кримінального Кодексу 17.10**\r
 \r
Зображення\r
Зупинили авто, номерні знаки є, ситуація не спокійна, що далі?\r
1. Якщо ви замічаєте, що до ситуації доєднуються інші не відомі вам авто, ви зобовязані викликати усі дружні юніти до себе на допомогу.\r
2. Привітатись, представитись, відкинути жетон.\r
3. Вказати водію причину зупинки це не обовязково повинно бути ви порушили "Стаття 35 частина 5 пункт 3" це може бути пояснено зрозумілою для водія причину зупинки. В випадку якщо водій захоче почути конкретно статтю, назвіть йому статтю.\r
4. Ви берете у водія **Водійське посвідчення** для отримання даних про нього після чого просите зачекати в машині. \r
-- Якщо ви знаходите в юніті **ADAM [A]** - при отриманні посвідчення одним офіцером, другий офіцер щоб не тратити час вже пробиває STATIK через **Базу Даних**\`\r
-- Якщо ви знаходитесь в юніті **LINCOLN [L]** - при отриманні документів власноруч дістаєте планшет і перевіряєте водія по базі данних. (Порада робити це біля свого транспортного засобу за дверима авто використовуючи його як щит, також при початку ситуації TRAFFIC STOP в статусі **LINCOLN** краще викликати ближній дружній юніт, якщо він є, на свою ситуацію для підтримки.)\r
5. При успішному проведенні усіх попередніх дій і адекватній поведінці водія, не слід видавати йому штраф, краще обійтись усним попередженням і відпустити його на перший раз віддавши йому документи.\r
6. Підійти до інших учасників які доєднались до ситуації, та запитати чим можна їм допомогти і яка ціль їхньої зупинки під час проведення TRAFFIC STOP, подальші дії залежно від ситуації.\r
Sheriff | Ethan Grayline | 5461 [DSPR], \r
ТС\r
 — 22.12.2025 7:21\r
Правильне відкидування TRAFFIC STOP у рацію\r
Відкидування на прикладі юніту LINCOLN\r
ПОЧАТОК TRAFFIC STOP\r
/f to DISP: LINCOLN, початок TRAFFIC STOP, 10-34, 10-20: Магазин зброї 3 \r
КІНЕЦЬ TRAFFIC STOP\r
/f to DISP: LINCOLN, 10-99 по TRAFFIC STOP, CODE 4\r
\r
Виклик на сцену SUPERVISOR\r
/f to DISP: LINCOLN, Потрібен Супервайзер на сцену, 10-20: Магазин зброї 3`,Ef=`ЛЕКЦІЯ
ЕТИКА ТА ПРОФЕСІЙНА ВІДПОВІДАЛЬНІСТЬ

1. ЩО ТАКЕ ЕТИКА
Етика — це система моральних правил та принципів поведінки офіцера.
Вона визначає:
- як діяти правильно
- як приймати рішення
- як поводитися з громадянами та колегами

2. ОСНОВНІ ПРИНЦИПИ
- Законність — всі дії повинні відповідати закону
- Чесність — не обманювати і не приховувати факти
- Справедливість — всі громадяни рівні перед законом
- Стриманість — контролювати емоції, уникати конфліктів
- Повага — до колег, підлеглих та громадян

3. КОРУПЦІЯ ТА ЗЛОВЖИВАННЯ ВЛАДОЮ
Заборонено:
- брати хабарі
- покривати злочини
- використовувати посаду для особистої вигоди
- переслідувати людей через особисту неприязнь

4. ДИСКРИМІНАЦІЯ
Заборонено:
- расизм та сексизм
- переслідування за національністю, віком, статтю або статусом
- зловживання владою проти окремих осіб

5. ВІДПОВІДАЛЬНІСТЬ ЗА ПОМИЛКИ
Порушення етики призводить до:
- усного попередження
- письмового попередження
- дисциплінарного стягнення
- пониження в званні
- відсторонення або відрахування з академії

6. ПРОФЕСІЙНА ПОВЕДІНКА В ПОЛІ
Професійний офіцер завжди:
- виконує накази старших
- діє спокійно та зважено
- забезпечує безпеку громадян
- документує всі дії через звіти

Приклад:
❌ Офіцер вдарив громадянина без причини.
✅ Офіцер зафіксував порушення, зробив попередження та оформив звіт.

7. ПРАВИЛА ВЗАЄМОДІЇ З КОЛЕГАМИ
- Поважати старших за званням
- Допомагати колегам під час викликів
- Не ображати і не принижувати співробітників
- Виконувати командну роботу навіть у стресових ситуаціях
`,Rf=`ЛЕКЦІЯ
РАДІОЗВ'ЯЗОК ТА БАЗОВІ КОДИ

1. ВАЖЛИВІСТЬ РАДІО
Радіозв'язок — основний засіб комунікації між офіцерами.
Він дозволяє:
- координувати дії
- швидко передавати інформацію
- запобігати небезпеці

2. ОСНОВНІ ПРАВИЛА
- Використовувати короткі та чіткі повідомлення
- Говорити спокійно і розбірливо
- Не перевантажувати канал зайвою інформацією
- Дотримуватися ієрархії та субординації

3. ФОРМАТ ПОВІДОМЛЕННЯ
[UNIT] – [STATUS] – [LOCATION]

Приклад:
"3-Adam-21, traffic stop, 24\\7 №3"

4. БАЗОВІ КОДИ
- Code 0 — офіцер у небезпеці
- Code 3 — підвищена небезпека
- Code 4 — ситуація під контролем (All clear)
- Code 5 — стеження / спостереження (Stakeout)
- Code 6 — допомога потрібна, не терміново
- Code 10 — загроза бомби / небезпечний предмет
- 10-7 — завершення патрулювання / офлайн
- 10-8 — початок патрулювання / в мережі
- 10-20 — уточнення локації
- 10-99 — закінчення ситуації

5. ПРОЦЕДУРА ЗВ'ЯЗКУ
1) Перевірити, що канал працює
2) Назвати свій підрозділ
3) Чітко повідомити статус та локацію
4) Прикінцево підтвердити, що повідомлення прийняте

6. ОФІЦІЙНІ ТЕРМІНИ
- Юніт — підрозділ / група офіцерів
- Статус — стан офіцера (On-duty / Off-duty / Need Assistance)
- Локація — точне місце дії

7. ЗАБОРОНЕНО
- Кричати або лаятися у рації
- Передавати неправдиву інформацію
- Ігнорувати накази по рації від старшого
`,zf=`🔫 ЗУПИНКА ТРАНСПОРТУ ШЛЯХОМ ПРОСТРІЛЮВАННЯ КОЛІС
📍 Los Santos County Sheriff's Department

Прострілювання коліс транспортного засобу — це тактичний метод примусової зупинки, який застосовується у випадках небезпечного переслідування, коли інші способи зупинки є неефективними або неможливими.

⚠ КОЛИ ДОЗВОЛЕНО ЗАСТОСУВАННЯ
Застосування вогнепальної зброї для прострілювання коліс дозволено як самий крайній метод зупинити авто при погоні і великій кількості порушень, зокрема:
1. Водій умисно тікає від правоохоронців
2. Ігнорує багаторазові вимоги зупинитись
3. Створює реальну загрозу життю громадян
4. Переслідування неможливо припинити іншими методами (Traffic Stop, PIT тощо)
5. Є підозра у тяжкому злочині (Felony)

📍 ДЕ ДОЗВОЛЕНО ЗАСТОСУВАННЯ
Прострілювання коліс допускається:
- на відкритих ділянках дороги
- за мінімального або відсутнього трафіку
- поза пішохідними зонами
- у місцях з контрольованою обстановкою
- коли відсутній ризик для сторонніх осіб

❌ ЗАБОРОНЕНО ЗАСТОСОВУВАТИ:
- у щільному міському русі
- поблизу пішоходів
- у напрямку салону транспортного засобу
- при незначних порушеннях ПДР
`,Pf=`🚓 PIT МАНЕВР
📍 Los Santos County Sheriff's Department

PIT Maneuver (Precision Immobilization Technique) — це спеціальний тактичний прийом, під час якого патрульний автомобіль контактно впливає на задню частину транспортного засобу втікача, змушуючи його втратити керування та зупинитися.

🎯 Мета PIT-маневру — швидко та контрольовано припинити переслідування без застосування вогнепальної зброї.

🎯 КОЛИ ЗАСТОСОВУЄТЬСЯ PIT-МАНЕВР
PIT-маневр дозволено застосовувати лише за наявності законних IC-підстав, зокрема:
1. водій умисно тікає від правоохоронців
2. ігнорує проблискові маячки та сирени
3. створює реальну загрозу життю інших учасників руху
4. відмовляється зупинитись після багаторазових вимог
5. переслідування неможливо безпечно завершити іншими методами

⚠ PIT не застосовується при незначних порушеннях ПДР.

📍 ДЕ ДОЗВОЛЕНО ЗАСТОСУВАННЯ
PIT-маневр дозволено виконувати:
- на прямих ділянках дороги
- при помірній швидкості руху
- за відсутності щільного трафіку
- подалі від пішоходів, перехресть і мостів
- у місцях з мінімальним ризиком для сторонніх

❌ ЗАБОРОНЕНО ЗАСТОСОВУВАТИ PIT:
- у щільному міському русі
- поблизу пішоходів
- на мостах, естакадах та в тунелях

PIT — крайній тактичний засіб для зупинки небезпечного переслідування, а не спосіб покарання.
`,If=`🚨 FELONY STOP
📍 Los Santos County Sheriff's Department

Felony Stop — це високоризикова процедура зупинки транспортного засобу, яка застосовується у випадках, коли водій або пасажири підозрюються у скоєнні тяжкого злочину (Felony) та можуть бути озброєні або небезпечні.

⚠ КОЛИ ЗАСТОСОВУЄТЬСЯ FELONY STOP
- підозра у скоєнні тяжкого злочину (R/F, Felony)
- транспортний засіб перебуває в орієнтуванні (BOLO)
- втеча від правоохоронців після злочину
- наявна інформація про озброєння підозрюваних
- висока загроза життю офіцерів та громадян

🚓 ПОЧАТОК FELONY STOP
- Увімкнення проблискових маячків та сирени
- Вибір відкритої та безпечної локації
- Повідомлення диспетчера про початок Felony Stop
- Очікування підкріплення за можливості

🛑 ПОЗИЦІОНУВАННЯ АВТОМОБІЛІВ
- Автомобіль підозрюваних — попереду
- Патрульні авто — позаду з дистанцією і перекриваючи рух полоси дороги
- Колісне позиціонування під кутом для укриття
- Фари та прожектори спрямовані на ТЗ підозрюваних

⚠ ВАЖЛИВО: Felony Stop — це процедура підвищеної небезпеки, будь-яка помилка може призвести до ескалації, заборонено поспішати або діяти без координації
`,Bf=`🚨 VEHICLE PURSUIT PROTOCOL
📍 Los Santos County Sheriff's Department

Vehicle Pursuit (Переслідування транспортного засобу) — це активна погоня за транспортним засобом, водій якого не підкоряється законним вимогам зупинитись та намагається втекти від правоохоронців.

📌 КОЛИ РОЗПОЧИНАЄТЬСЯ ПЕРЕСЛІДУВАННЯ
- Водій ігнорує сигнали зупинитися (сирена, маячки)
- Втеча з місця злочину
- Транспортний засіб у розшуку (орієнтування)
- Підозра у скоєнні тяжкого злочину
- Небезпечна поведінка водія на дорозі

🚔 ПОЧАТОК ПЕРЕСЛІДУВАННЯ
1. Увімкнути проблискові маячки та сирену
2. Повідомити в рацію про початок переслідування:
   - Свій позивний (LINCOLN/ADAM/HENRY)
   - Опис транспортного засобу
   - Напрямок руху та локацію
   - Причину переслідування

Приклад доповіді:
/f LINCOLN-12, початок переслідування, чорний Sultan, номер 4XYZ789, рух на північ по Great Ocean Highway, підозра у скоєнні пограбування, CODE 3

📡 КООРДИНАЦІЯ ЧЕРЕЗ РАЦІЮ
Постійно оновлювати інформацію для інших офіцерів:
- Зміна напрямку руху
- Поточна локація
- Швидкість та стиль водіння
- Небезпечні маневри порушника
- Запит підкріплення

Інші офіцери, що чують доповідь, можуть:
- Доєднатися до переслідування
- Зайняти позиції для перехоплення
- Підготувати шипові стрічки

⚠ ПРАВИЛА БЕЗПЕКИ ПІД ЧАС ПЕРЕСЛІДУВАННЯ
- Не перевищувати швидкість понад 220 км/год без крайньої необхідності
- Дотримуватись дистанції від ТЗ порушника
- Уникати зустрічної смуги у густонаселених районах
- Не таранити без дозволу супервайзера
- Припинити погоню при загрозі життю цивільних

🛑 КРИТЕРІЇ ПРИПИНЕННЯ ПЕРЕСЛІДУВАННЯ
Офіцер зобов'язаний припинити переслідування у випадках:
- Висока загроза життю цивільних
- Втрата візуального контакту з ТЗ
- Пошкодження патрульного авто
- Наказ супервайзера припинити погоню
- Переслідування триває понад 15 хвилин без результату

При припиненні доповісти в рацію:
/f LINCOLN-12, припиняю переслідування, остання локація - Paleto Bay, втрачено візуальний контакт, CODE 4

🎯 ТАКТИКИ ЗУПИНКИ
1. **PIT Maneuver** — контрольований удар у задню частину ТЗ
2. **Шипові стрічки** — проколювання шин
3. **Оточення** — оточення ТЗ кількома патрульними
4. **Блокпост** — блокування дороги попереду

⚖ ПІСЛЯ ЗАВЕРШЕННЯ ПЕРЕСЛІДУВАННЯ
1. Забезпечити безпеку на місці зупинки
2. Провести Felony Stop процедуру
3. Затримати підозрюваних
4. Викликати медичну допомогу при необхідності
5. Скласти детальний звіт про переслідування

💡 ВАЖЛИВО
Переслідування — це не гонка. Пріоритет завжди — безпека громадян.
Непрофесійне переслідування може призвести до:
- Травм та смертей цивільних
- Дисциплінарних стягнень
- Кримінальної відповідальності офіцера

"Безпека перш за все. Підозрюваний — потім."`,Tf=`⚖️ CONSTITUTIONAL LAW & MIRANDA RIGHTS
📍 Los Santos County Sheriff's Department

Miranda Rights — це конституційні права підозрюваного, які офіцер зобов'язаний зачитати перед допитом затриманої особи.

📜 ПОХОДЖЕННЯ MIRANDA RIGHTS
У 1966 році Верховний Суд США встановив, що всі затримані особи мають бути проінформовані про свої конституційні права до початку допиту.

Це правило захищає:
- Право зберігати мовчання (5-та поправка)
- Право на адвоката (6-та поправка)
- Захист від самообвинувачення

🗣️ ТЕКСТ MIRANDA RIGHTS

Англійською (офіційна версія):
"You have the right to remain silent. Anything you say can and will be used against you in a court of law. You have the right to an attorney. If you cannot afford an attorney, one will be provided for you. Do you understand the rights I have just read to you?"

Українською:
"Ви маєте право зберігати мовчання. Все, що ви скажете, може бути використано проти вас у суді. Ви маєте право на адвоката. Якщо ви не можете дозволити собі адвоката, він буде призначений вам державою. Чи розумієте ви права, які я щойно зачитав?"

⚠ КОЛИ ЗАЧИТУВАТИ MIRANDA
Miranda Rights зачитуються:
✓ Перед допитом затриманої особи
✓ Після офіційного затримання (арешту)
✓ Коли особа перебуває під вартою (custody)

Miranda Rights НЕ потрібні:
✗ Під час Traffic Stop
✗ При збиранні базової інформації (ім'я, адреса)
✗ Якщо затриманий сам почав говорити
✗ На місці злочину до офіційного затримання

📌 ЩО ТАКЕ "ПІД ВАРТОЮ"
Особа вважається під вартою, якщо:
- Їй надіто наручники
- Вона фізично обмежена у русі
- Розумна людина не вважала б себе вільною піти

Приклад:
❌ Traffic Stop без затримання — Miranda не потрібна
✅ Затримання з наручниками + допит — Miranda обов'язкова

🔒 НАСЛІДКИ ПОРУШЕННЯ MIRANDA
Якщо офіцер не зачитав Miranda Rights:
- Всі зізнання затриманого будуть визнані недійсними
- Докази отримані в результаті допиту — виключаються
- Справа може бути закрита через процесуальне порушення
- Офіцер отримає дисциплінарне стягнення

🛡️ ПРАВО ЗБЕРІГАТИ МОВЧАННЯ
Якщо затриманий сказав "Я хочу зберігати мовчання":
1. Негайно припинити допит
2. Не намагатися переконати говорити
3. Задокументувати відмову
4. Можна продовжити лише якщо затриманий сам заговорить

📞 ПРАВО НА АДВОКАТА
Якщо затриманий сказав "Я хочу адвоката":
1. Негайно припинити допит
2. Не ставити більше запитань
3. Дочекатися прибуття адвоката
4. Задокументувати запит

⚖ ЗАКОННІ ОБШУКИ ТА ВИЛУЧЕННЯ
4-та поправка захищає від незаконних обшуків.

Обшук ЗАКОННИЙ якщо:
✓ Є ордер на обшук
✓ Згода особи на обшук
✓ При затриманні (обшук одягу та доступної зони)
✓ Предмети на виду
✓ Екстрені обставини (загроза життю, знищення доказів)

Обшук НЕЗАКОННИЙ якщо:
✗ Немає ордера і згоди
✗ Обшук без законних підстав
✗ Перевищення меж дозволу

💼 ПРИКЛАДИ З ПРАКТИКИ

Ситуація 1: Traffic Stop
Офіцер зупинив водія за перевищення швидкості.
Офіцер: "Добрий день, чому ви їхали так швидко?"
Водій: "Вибачте, поспішав на роботу"
❓ Потрібна Miranda? НІ — це не допит під вартою.

Ситуація 2: Затримання за пограбування
Офіцер надів наручники підозрюваному.
Офіцер: "Де ви були годину тому?"
❓ Потрібна Miranda? ТАК — це допит затриманої особи.

Ситуація 3: Добровільна розмова
Детектив розмовляє зі свідком у відділку.
Детектив: "Що ви бачили на місці події?"
❓ Потрібна Miranda? НІ — свідок не затриманий.

🎓 ВИСНОВОК
Miranda Rights — це не просто формальність, а фундаментальний захист прав громадян.

Професійний офіцер:
✓ Завжди зачитує Miranda перед допитом
✓ Чітко формулює питання
✓ Поважає відмову від дачі показань
✓ Документує всі дії

"Захищай права. Зберігай справедливість. Служи з чесністю."`,Df=`📊 USE OF FORCE CONTINUUM
📍 Los Santos County Sheriff's Department

Use of Force Continuum (Градація застосування сили) — це модель рівнів застосування сили офіцером залежно від рівня опору підозрюваного.

🎯 ОСНОВНИЙ ПРИНЦИП
Офіцер повинен використовувати мінімально необхідну силу для:
- Контролю ситуації
- Захисту себе та інших
- Затримання підозрюваного
- Виконання законних обов'язків

⚖ РІВНІ ЗАСТОСУВАННЯ СИЛИ

📢 РІВЕНЬ 1: ПРИСУТНІСТЬ ОФІЦЕРА
Застосування: Офіцер прибуває на місце події
Опір підозрюваного: Відсутній або мінімальний
Дії офіцера:
- Представитись
- Продемонструвати авторитет
- Спокійний та професійний тон

Приклад: Офіцер підходить до групи людей, і вони розходяться без конфлікту.

🗣️ РІВЕНЬ 2: ВЕРБАЛЬНІ КОМАНДИ
Застосування: Підозрюваний не підкоряється
Опір підозрюваного: Пасивний опір
Дії офіцера:
- Чіткі вербальні команди
- Директивний тон
- Пояснення наслідків непослуху

Приклад: "Покладіть руки на капот автомобіля. Зараз. Це наказ."

🤲 РІВЕНЬ 3: ФІЗИЧНИЙ КОНТРОЛЬ БЕЗ ЗБРОЇ
Застосування: Вербальні команди не працюють
Опір підозрюваного: Активний опір без агресії
Дії офіцера:
- Фізичний контроль (захвати, больові прийоми)
- Супровід силою
- Надягання наручників

Приклад: Підозрюваний відмовляється повернутись, офіцер застосовує больовий прийом на руку.

🔧 РІВЕНЬ 4: НЕСМЕРТЕЛЬНІ ЗАСОБИ
Застосування: Фізичний контроль неефективний
Опір підозрюваного: Агресивний опір
Дії офіцера:
- Перцевий балончик
- Електрошокер (Taser)
- Кийок
- Гумові кулі

Приклад: Підозрюваний махає ножем, офіцер застосовує електрошокер.

🔫 РІВЕНЬ 5: СМЕРТЕЛЬНА СИЛА
Застосування: Загроза життю офіцера або громадян
Опір підозрюваного: Смертельна загроза
Дії офіцера:
- Застосування вогнепальної зброї
- Стрільба на ураження

Приклад: Підозрюваний націлює зброю на офіцера або цивільних.

⚠ КОЛИ ЗАСТОСОВУВАТИ СМЕРТЕЛЬНУ СИЛУ

Lethal Force дозволена ТІЛЬКИ якщо:
✓ Пряма загроза життю офіцера
✓ Пряма загроза життю цивільних
✓ Підозрюваний озброєний і небезпечний
✓ Немає альтернативних методів
✓ Ситуація критична і не терпить зволікання

Lethal Force ЗАБОРОНЕНА:
✗ Для припинення втечі неозброєного
✗ Для залякування
✗ У відповідь на образи
✗ При можливості використання менш небезпечних методів

🚨 ФАКТОРИ, ЩО ВПЛИВАЮТЬ НА РІШЕННЯ

Офіцер повинен врахувати:
- Розмір та фізичні дані підозрюваного
- Кількість підозрюваних vs офіцерів
- Наявність зброї
- Рівень загрози
- Оточення (присутність цивільних)
- Можливість відступу

📝 ОБОВ'ЯЗКОВА ЗВІТНІСТЬ

Після застосування сили офіцер ЗОБОВ'ЯЗАНИЙ:
1. Надати медичну допомогу постраждалим
2. Викликати EMS при травмах
3. Повідомити Supervisor негайно
4. Скласти детальний Use of Force Report
5. Пройти внутрішнє розслідування (якщо застосована вогнепальна зброя)

🛡️ ПРАВИЛО РОЗУМНОСТІ (REASONABLENESS)

Застосування сили оцінюється за стандартом "Розумного офіцера":
- Чи діяв офіцер розумно в цій ситуації?
- Чи був рівень сили пропорційним загрозі?
- Чи мав офіцер інші опції?

❌ НЕПРАВИЛЬНЕ застосування сили:
Підозрюваний стоїть з руками вгорі → офіцер б'є його кийком
Результат: Надмірне застосування сили, дисциплінарне стягнення

✅ ПРАВИЛЬНЕ застосування сили:
Підозрюваний атакує офіцера → офіцер застосовує Taser
Результат: Пропорційна відповідь, законне застосування

🎓 ПРАКТИЧНІ СЦЕНАРІЇ

Сценарій 1: П'яний громадянин
Ситуація: П'яна людина кричить на вулиці
Дії: РІВЕНЬ 1-2 (Присутність + вербальні команди)
Результат: Особа заспокоюється або відправляється додому

Сценарій 2: Опір при затриманні
Ситуація: Підозрюваний відмовляється надягати наручники
Дії: РІВЕНЬ 3 (Фізичний контроль)
Результат: Больовий прийом, надягання наручників

Сценарій 3: Озброєний грабіжник
Ситуація: Грабіжник з пістолетом в магазині
Дії: РІВЕНЬ 5 (Смертельна сила за необхідності)
Результат: Якщо загроза життю — стрілянина, якщо здався — затримання

💡 ВАЖЛИВІ ПРАВИЛА

1. **Деескалація завжди пріоритетна**
Спробуйте вирішити ситуацію розмовою перш ніж застосовувати силу.

2. **Пропорційність**
Рівень сили повинен відповідати рівню загрози.

3. **Гнучкість**
Офіцер може переходити між рівнями залежно від ситуації.

4. **Звітність**
Будь-яке застосування сили вище РІВНЯ 2 вимагає звіту.

5. **Перегляд дій**
Внутрішні справи перевіряють всі випадки застосування сили вище РІВНЯ 3.

⚖ ЮРИДИЧНІ НАСЛІДКИ

Неправильне застосування сили може призвести до:
- Дисциплінарного стягнення
- Відсторонення від служби
- Кримінального переслідування
- Цивільних позовів
- Звільнення з департаменту

🎯 ВИСНОВОК
Use of Force Continuum — це не ліцензія на насильство, а керівництво для професійного та законного контролю ситуацій.

Професійний офіцер:
✓ Використовує мінімальну необхідну силу
✓ Намагається деескалувати ситуацію
✓ Діє пропорційно загрозі
✓ Звітує про кожне застосування сили

"Мінімум сили. Максимум професіоналізму."`,_f=`🏠 BUILDING ENTRY & CLEARING
📍 Los Santos County Sheriff's Department — SEB Division

Building Entry & Clearing (Штурм та зачистка будівлі) — це тактична процедура проникнення та зачистки будівлі від потенційних загроз, що використовується під час виконання ордерів, звільнення заручників або нейтралізації озброєних злочинців.

⚠ КОЛИ ЗАСТОСОВУЄТЬСЯ
- Виконання ордеру на обшук
- Виконання ордеру на арешт
- Звільнення заручників
- Активна стрільба в приміщенні
- Баррикадований підозрюваний
- Зачистка будівлі після повідомлення про загрозу

🎯 ТИПИ ВХОДУ

1. **ДИНАМІЧНИЙ ВХІД**
Швидке та агресивне проникнення
Використовується при:
- Високій загрозі знищення доказів
- Озброєних підозрюваних
- Заручниках у небезпеці

2. **ПРИХОВАНИЙ ВХІД**
Тихе проникнення без сповіщення
Використовується при:
- Операціях під прикриттям
- Захопленні зненацька
- Мінімізації ескалації

3. **ОБДУМАНИЙ ВХІД**
Контрольований вхід після підготовки
Використовується при:
- Низькій загрозі
- Достатньому часі на планування
- Складних об'єктах

🚪 МЕТОДИ ПРОНИКНЕННЯ

**Злам входу:**
- Механічний — таран, ломик
- Балістичний — стрілянина по замках/петлях
- Вибуховий — вибухові заряди (рідко)
- Ручний — відкриття ключем/відмичкою

**Точки входу:**
- Головний вхід
- Запасний вхід (відволікання або евакуація)

🎖️ ФОРМАЦІЇ КОМАНДИ

**ПОБУДОВА СТЕКОМ**
Офіцери вишиковуються біля дверей:
- #1 Перший номер — перший входить, зачищає ліву сторону
- #2 Другий номер — зачищає праву сторону
- #3 Третій номер — слідує за #1, прикриває кути
- #4 Замикаючий — прикриває тил, закриває двері

**Ролі:**
- Командир групи — керує операцією, приймає рішення
- Підривник — відкриває двері
- Щитоносець — несе балістичний щит (за необхідності)
- Медик — надає медичну допомогу

📡 ТАКТИЧНА КОМУНІКАЦІЯ

Команди під час входу:
- **"ЗЛАМ!"** — злам входу
- **"СВІТЛОШУМОВА!"** — кидання світлошумової гранати
- **"ВПЕРЕД! ВПЕРЕД! ВПЕРЕД!"** — команда входити
- **"ЧИСТО!"** — приміщення зачищено
- **"КОНТАКТ!"** — виявлено загрозу
- **"РУХАЮСЬ!"** — переміщення до наступної кімнати

Координація через рацію:
/f CHARLIE-1, початок проникнення в будівлю, 10-20: Sandy Shores Warehouse, вхід з північної сторони

🔦 ЗАЧИСТКА ПРИМІЩЕНЬ

**Правило ближнього бою:**
1. **Огляд** — оглянути кімнату
2. **Оцінка** — оцінити загрози
3. **Нейтралізація/Контроль** — нейтралізувати або контролювати
4. **Комунікація** — повідомити команду

**"Нарізка пирога"** — техніка огляду кутів
Поступове відкриття кута зору без повного виходу з укриття.

**Смертельна воронка** — небезпечна зона
Дверний отвір — найнебезпечніше місце, треба швидко пройти.

⚠ ВИКОРИСТАННЯ СВІТЛОШУМОВОЇ ГРАНАТИ

Світлошумова граната застосовується для:
- Дезорієнтації підозрюваних
- Отримання тактичної переваги
- Зниження опору

Процедура:
1. Повідомити команду: "СВІТЛОШУМОВА!"
2. Кинути гранату
3. Відвернутись та закрити очі
4. Після вибуху — негайний вхід

🛡️ ПРАВИЛА БЕЗПЕКИ

1. **Контроль стволу зброї**
Ніколи не цільте у напарників, навіть випадково.

2. **Усвідомлення перехресного вогню**
Знати позиції всіх членів команди.

3. **Укриття**
Використовувати стіни, меблі, двері як укриття.

4. **Постійна комунікація**
Інформувати команду про кожну дію.

5. **Відповідальність за кімнату**
Не залишати незачищені приміщення позаду.

🎯 ПРОЦЕДУРА ЗАЧИСТКИ БУДІВЛІ

**КРОК 1: Підготовка**
- Вивчити план будівлі
- Розподілити ролі
- Перевірити спорядження
- Визначити точки входу

**КРОК 2: Позиціонування**
- Оточити будівлю
- Встановити периметр
- Зайняти позиції біля входів

**КРОК 3: Breach**
- Виконати злам входу
- Застосувати Flashbang (за необхідності)
- Швидко увійти

**КРОК 4: Clearing**
- Зачистити кожну кімнату послідовно
- Позначити зачищені кімнати (закрити двері)
- Рухатись єдиною командою

**КРОК 5: Securing**
- Забезпечити будівлю
- Затримати всіх осіб
- Провести обшук

**КРОК 6: After Action**
- Викликати EMS при травмах
- Скласти звіт
- Задокументувати докази

🚨 ТИПОВІ ПОМИЛКИ

❌ Розділення команди
Команда повинна діяти разом, не розпорошуватись.

❌ Поспішність
Швидкість важлива, але контроль ситуації важливіший.

❌ Відсутність комунікації
Команда повинна постійно обмінюватись інформацією.

❌ Ігнорування кутів
Кути — найнебезпечніші місця, їх треба ретельно перевіряти.

❌ Залишення незачищених кімнат
Всі приміщення мають бути зачищені та забезпечені.

💡 ТАКТИЧНІ ПОРАДИ

1. **"Сильна сторона, слабка сторона"**
Офіцер #1 завжди йде на свою сильну сторону (для праворуких — ліворуч).

2. **"Гачок петлею"**
Техніка входу з різким поворотом вздовж стіни.

3. **"Перехресне прикриття"**
Офіцери перехресно прикривають один одного.

4. **"Вертикальна зачистка"**
При зачистці багатоповерхових будівель — знизу вгору.

5. **"Динамічна переоцінка"**
Постійно переоцінювати ситуацію та адаптуватись.

🎓 ВИСНОВОК

Building Entry & Clearing — це найнебезпечніша тактична операція, що вимагає:
✓ Відмінної координації команди
✓ Чіткої комунікації
✓ Професійної підготовки
✓ Стриманості та контролю

Професійна команда SEB:
✓ Планує кожну операцію
✓ Діє злагоджено
✓ Мінімізує ризики
✓ Завершує місію без жертв

"Тренуйся наполегливо. Бийся легко. Зачищай з точністю."`,Af=`💣 ACTIVE SHOOTER RESPONSE
📍 Los Santos County Sheriff's Department

Active Shooter (Активний стрілець) — це ситуація, в якій озброєна особа активно стріляє або намагається вбити людей у заповненій локації. Це одна з найнебезпечніших та найкритичніших ситуацій для правоохоронних органів.

🚨 ЩО ТАКЕ АКТИВНИЙ СТРІЛЕЦЬ
Ознаки активного стрільця:
- Використання вогнепальної зброї проти цивільних
- Множинні жертви або намір їх створити
- Ситуація триває і загроза активна
- Немає конкретних вимог (на відміну від заручників)
- Мета — максимальні жертви за короткий час

Типові локації:
- Школи та університети
- Торгові центри
- Офісні будівлі
- Громадські заходи

⚡ ШВИДКІСТЬ — ПРІОРИТЕТ

**Золоте правило:**
"Кожна секунда = потенційна жертва"

Традиційна тактика "Оточити та чекати спецназ" більше НЕ застосовується.
Сучасна доктрина: **НЕГАЙНЕ РЕАГУВАННЯ**

🚔 ПОЧАТКОВА ДОПОВІДЬ

При отриманні виклику про активного стрільця:
/f CODE 0! Активний стрілець, 10-20: Del Perro High School, множинні постріли, цивільні в небезпеці, всі вільні юніти — CODE 3!

CODE 0 — найвищий пріоритет, всі юніти реагують.

📡 КООРДИНАЦІЯ ЧЕРЕЗ РАЦІЮ

Перший офіцер на місці:
/f LINCOLN-5, прибув на Del Perro High School, підтверджую активну стрілянину, входжу в будівлю, потрібне підкріплення негайно!

Інші офіцери:
/f ADAM-3, прибуваю на сцену, час прибуття 2 хвилини
/f HENRY-1, прибув, встановлюю зовнішній периметр

Координація SEB:
/f CHARLIE-1, формуємо групу контакту, готові до входу

🎯 ТАКТИКА РЕАГУВАННЯ

**ОДИНОКИЙ ОФІЦЕР**
Якщо ви перший на місці:
1. НЕ ЧЕКАТИ підкріплення
2. Негайно увійти в будівлю
3. Рухатись до джерела стрілянини
4. Нейтралізувати загрозу
5. Постійно доповідати в рацію про свою позицію

**КОМАНДНЕ РЕАГУВАННЯ**
Формувати групу контакту:
- Мінімум 2-4 офіцери
- Формація ромб/клин
- Рухатись до стрільця
- Один офіцер — комунікація по рації

🔫 ПРІОРИТЕТИ ОФІЦЕРА

**Пріоритет #1: Нейтралізувати стрільця**
Все інше — вторинно.

**Пріоритет #2: Евакуація цивільних**
Тільки ПІСЛЯ нейтралізації загрози.

**Пріоритет #3: Допомога пораненим**
Медики не увійдуть поки будівля не забезпечена.

⚠ ПРАВИЛА ЗАСТОСУВАННЯ СИЛИ

Застосування летальної сили ДОЗВОЛЕНО якщо:
✓ Стрілець активно загрожує життю
✓ Стрілець озброєний і не здається
✓ Немає можливості для безпечного затримання

Команди стрільцю:
Англійською: "DROP THE WEAPON! GET ON THE GROUND NOW!"
Українською: "КИНУТИ ЗБРОЮ! НА ЗЕМЛЮ НЕГАЙНО!"

Якщо стрілець не підкоряється:
- Негайне застосування летальної сили
- Стріляти на ураження (центр маси)
- Продовжувати поки загроза не нейтралізована

🏃 ЕВАКУАЦІЯ ЦИВІЛЬНИХ

**Під час пошуку стрільця:**
Команди цивільним:
Англійською: "RUN! GET OUT NOW!"
Українською: "БІГТИ! ВИХОДЬТЕ ЗАРАЗ!"

Не затримуватись для детальних інструкцій.

**Після нейтралізації стрільця:**
1. Встановити безпечні маршрути евакуації
2. Перевірити цивільних на наявність зброї (може бути другий стрілець)
3. Направляти до точки збору
4. Передати до периметральної групи

🚑 РОБОТА З ПОРАНЕНИМИ

**Правило тактичної медицини:**

Офіцер НЕ зупиняється для надання допомоги поки стрілець активний.

Після нейтралізації:
1. Швидка оцінка поранених (сортування)
2. Позначити критичних червоним
3. Викликати медиків в будівлю
4. Базова перша допомога (джгути, грудні пластирі)

Доповідь у рацію:
/f LINCOLN-5, стрілець нейтралізований, будівля CODE 4, потрібні медики, приблизно 10+ поранених

🔍 ПОШУК ВТОРИННИХ ЗАГРОЗ

⚠ МОЖЛИВІ СЦЕНАРІЇ:
- Другий стрілець
- Вибухові пристрої
- Баррикадовані підозрювані
- Заручники

Після нейтралізації першого стрільця:
1. Продовжувати зачистку будівлі
2. Шукати можливі вибухівки
3. Перевіряти всі приміщення
4. Не допускати цивільних назад поки будівля не зачищена

🛡️ ФОРМАЦІЇ ДЛЯ ГРУПИ КОНТАКТУ

**ФОРМАЦІЯ РОМБ** (4 офіцери)
\`\`\`
     #1 (Точковий)
  #2     #3 (Фланги)
     #4 (Тил)
\`\`\`

**ФОРМАЦІЯ КЛИН** (3 офіцери)
\`\`\`
     #1 (Точковий)
   #2   #3
\`\`\`

**КОЛОНА** (вузькі коридори)
\`\`\`
#1 → #2 → #3 → #4
\`\`\`

🚨 ПЕРИМЕТР

**ВНУТРІШНІЙ ПЕРИМЕТР**
Група контакту — всередині будівлі

**ЗОВНІШНІЙ ПЕРИМЕТР**
Патрульні юніти — навколо будівлі
Завдання:
- Не впускати підозрюваних
- Направляти цивільних до безпеки
- Перехоплювати втікаючих стрільців

📋 ПІСЛЯ ІНЦИДЕНТУ

**IMMEDIATE ACTIONS:**
1. Забезпечити місце події як Crime Scene
2. Викликати Detectives та Forensics
3. Зібрати свідків для опитування
4. Зберігати докази (гільзи, зброя, відео)

**OFFICER DEBRIEFING:**
Всі офіцери що застосували зброю:
- Адміністративне відсторонення (стандартна процедура)
- Інтерв'ю з Internal Affairs
- Психологічна оцінка
- Use of Force Report

💡 ВАЖЛИВІ ПРАВИЛА

1. **НЕ ЧЕКАТИ СПЕЦНАЗ**
Одинокий офіцер входить негайно.

2. **ШВИДКІСТЬ > ТАКТИКА**
Краще швидко і менш тактично, ніж повільно і тактично.

3. **ЗВУК = НАПРЯМОК**
Рухатись до джерела пострілів.

4. **КОМУНІКАЦІЯ**
Постійно доповідати позицію по рації.

5. **БЕЗПЕКА ОФІЦЕРА**
Але життя цивільних — пріоритет над особистою безпекою.

🎓 ПСИХОЛОГІЧНА ПІДГОТОВКА

Active Shooter Response — екстремально стресова ситуація.

Офіцер повинен:
✓ Бути готовим приймати швидкі рішення
✓ Контролювати адреналін
✓ Діяти незважаючи на страх
✓ Розуміти можливість власної загибелі

**Ментальна установка:**
"Я увійду. Я знайду стрільця. Я зупиню його. Я врятую життя."

🏆 ВИСНОВОК

Active Shooter Response вимагає:
✓ Миттєвого реагування
✓ Рішучості та хоробрості
✓ Готовності до самопожертви
✓ Професійних навичок ближнього бою

Кожен офіцер LSCSD повинен:
✓ Знати доктрину Active Shooter Response
✓ Регулярно тренуватись
✓ Бути готовим діяти самостійно
✓ Розуміти відповідальність

"Коли інші тікають, ми біжимо назустріч небезпеці."`,Of=`🔫 FIREARMS TRAINING & SAFETY
📍 Los Santos County Sheriff's Department — Sheriff Academy

Firearms Training (Вогнева підготовка) — це базова та обов'язкова підготовка кожного офіцера LSCSD з безпечного та ефективного використання вогнепальної зброї.

🛡️ 4 ЗОЛОТІ ПРАВИЛА БЕЗПЕКИ ЗБРОЇ

**ПРАВИЛО #1: ПОВОДЬСЯ З КОЖНОЮ ЗБРОЄЮ ЯК З ЗАРЯДЖЕНОЮ**
Завжди поводься зі зброєю так, ніби вона заряджена.
Навіть якщо ти перевірив — вважай, що вона заряджена.

**ПРАВИЛО #2: НІКОЛИ НЕ ЦІЛЬСЬ У ТЕ, В ЩО НЕ МАЄШ НАМІРУ СТРІЛЯТИ**
Ніколи не цільтися у те, в що не маєш наміру стріляти.
Дуло завжди направлене в безпечному напрямку.

**ПРАВИЛО #3: ТРИМАЙ ПАЛЕЦЬ ПОЗА СПУСКОМ ДОКИ НЕ ГОТОВИЙ СТРІЛЯТИ**
Тримай палець поза спусковим гачком доки не готовий стріляти.
Палець лежить на рамі або затворі, НЕ на спуску.

**ПРАВИЛО #4: БУДЬ ВПЕВНЕНИЙ У ЦІЛІ ТА ЩО ЗА НЕЮ**
Будь впевнений у цілі та що знаходиться за нею.
Куля не зупиниться на цілі — вона полетить далі.

⚠ ПОРУШЕННЯ БУДЬ-ЯКОГО ПРАВИЛА = НЕГАЙНЕ ВІДРАХУВАННЯ З АКАДЕМІЇ

🔫 СТАНДАРТНЕ ОЗБРОЄННЯ LSCSD

**Service Pistol:**
- Glock 17 (9mm) — стандартний пістолет
- 17 патронів у магазині + 1 в патроннику
- Напівавтоматичний

**Patrol Rifle:**
- AR-15 / M4 Carbine (.223/5.56mm)
- 30 патронів у магазині
- Селективний вогонь (напівавто для LSCSD)

**Shotgun:**
- Remington 870 (12 gauge)
- 5-8 патронів (залежно від моделі)
- Pump-action

**Less-Lethal:**
- Taser X26
- Pepper Spray
- Bean Bag Shotgun

📏 ОСНОВИ СТРІЛЬБИ

**СТІЙКА**

1. **Стійка "Рівнобічний трикутник":**
   - Ноги на ширині плечей
   - Обидві руки витягнуті однаково
   - Тіло фронтально до цілі
   - Найкраща для новачків

2. **Стійка "Вівер":**
   - Провідна нога трохи назад
   - Сильна рука витягнута, слабка зігнута
   - Тіло під кутом до цілі
   - Краща стабільність

**ХВАТ**
- Сильна рука високо на рукояті
- Слабка рука обгортає сильну
- Тиск 60% сильна / 40% слабка рука
- Великі пальці вздовж рами

**ПРИЦІЛ**
- Мушка в центрі цілика
- Фокус на мушці, не на цілі
- Рівна висота мушки і цілика

**КОНТРОЛЬ СПУСКУ**
- Плавний натиск, не ривок
- Подушечка пальця на спуску
- Несподіваний постріл (не передбачати момент)
- Дотримання після пострілу

🎯 ТИПИ СТРІЛЬБИ

**КВАЛІФІКАЦІЯ**
Стандартний тест стрільби для атестації:
- 3 метри (інстинктивна стрільба) — 6 пострілів
- 7 метрів (прицільний вогонь) — 12 пострілів
- 15 метрів (точність) — 12 пострілів
- 25 метрів (дальність) — 6 пострілів
Мінімум: 80% влучень для проходження

**БОЙОВА СТРІЛЬБА**
Реалістичні сценарії:
- Рухомі цілі
- Стрільба з укриття
- Стрільба при русі
- Нічна стрільба
- Стресові умови

**ВПРАВА "MOZAMBIQUE"**
2 постріли в центр маси (груди) + 1 в голову
Застосовується коли підозрюваний у бронежилеті

🚨 СТРІЛЬБА В ЕКСТРЕМАЛЬНИХ УМОВАХ

**СТРІЛЬБА В ТЕМРЯВІ**
- Використання ліхтаря
- Техніки тримання ліхтаря
- Орієнтація на звук
- Підвищений ризик

**СТРІЛЬБА В РУСІ**
- Короткі кроки
- Стрільба між кроками
- Пріоритет — швидкість руху, не точність
- Вогонь для притиснення противника

**СТРІЛЬБА З УКРИТТЯ**
- Використання патрульного авто, стін, дерев
- Мінімальна експозиція тіла
- Не висовуватись одним боком (створює шаблон)
- Стріляти і ховатись

**СТРІЛЬБА ПРИ ПОРАНЕННІ**
- Стрільба однією рукою
- Стрільба лежачи
- Стрільба слабкою рукою
- Перезарядка однією рукою

🔄 ПЕРЕЗАРЯДКА ЗБРОЇ

**ТАКТИЧНА ПЕРЕЗАРЯДКА**
Є час, загрози немає
- Витягнути свіжий магазин
- Вийняти частково спустошений
- Вставити новий
- Зберегти старий магазин

**ЕКСТРЕНА ПЕРЕЗАРЯДКА**
Зброя порожня, загроза активна
- Скинути порожній магазин
- Вставити новий
- Дослати затвор
- Продовжити стрільбу

⚖️ ПРАВИЛА ЗАСТОСУВАННЯ ЗБРОЇ

**КОЛИ ДОЗВОЛЕНО СТРІЛЯТИ:**
✓ Пряма загроза життю офіцера
✓ Пряма загроза життю цивільних
✓ Підозрюваний озброєний і небезпечний
✓ Використано всі інші методи (за винятком екстрених ситуацій)

**КОЛИ ЗАБОРОНЕНО СТРІЛЯТИ:**
✗ Попереджувальні постріли — ЗАБОРОНЕНО
✗ Стрільба по шинах (крім спецситуацій)
✗ Стрільба по транспорту що втікає (якщо немає летальної загрози)
✗ Стрільба в натовп

🎯 ЗОНИ УРАЖЕННЯ

**ЦЕНТР МАСИ (Груди)**
- Найбільша ціль
- Найвища ймовірність влучення
- Основна зона ураження

**ГОЛОВА**
- Тільки для снайперів або критичні ситуації
- Гарантована нейтралізація
- Складна ціль

**ТАЗ**
- Якщо центр маси не працює (бронежилет)
- Зупиняє рух підозрюваного
- Альтернатива головному пострілу

🔧 ТЕХНІЧНЕ ОБСЛУГОВУВАННЯ

**ЩОДЕННЕ:**
- Перевірка на наявність патронів
- Огляд на пошкодження
- Перевірка роботи затвору

**ЩОТИЖНЕВЕ:**
- Чистка зброї
- Змащення рухомих частин
- Перевірка магазинів

**ЩОМІСЯЧНЕ:**
- Повне розбирання та чистка
- Заміна зношених частин
- Тест-стрільба

🚫 ТИПОВІ ПОМИЛКИ

❌ **Передбачення**
Офіцер передбачає віддачу і смикає зброю вниз.
Результат: Постріли нижче цілі.

❌ **Шмагання спуску**
Різкий натиск на спуск.
Результат: Зброя йде вбік.

❌ **Слабкий хват**
Недостатній контроль зброї.
Результат: Затримки, погана точність.

❌ **Тунельний зір**
Фокус тільки на цілі, ігнорування оточення.
Результат: Пропущені загрози, випадкові жертви.

❌ **Ігнорування укриття**
Стрільба на відкритому просторі.
Результат: Ураження офіцера.

📊 СТАНДАРТИ LSCSD

**Sheriff Academy Qualification:**
- Мінімум 80% точність
- Щотижневі тренування
- Місячна перездача кваліфікації

**Annual Requalification:**
- Всі офіцери здають щорічно
- Провал = відсторонення від польових обов'язків
- Додаткові тренування до успішної здачі

**Advanced Courses:**
- Sniper Training (для SEB)
- Carbine Course (AR-15)
- Shotgun Certification
- Low-Light / Night Operations

💡 МЕНТАЛЬНИЙ АСПЕКТ

**РІШЕННЯ "СТРІЛЯТИ/НЕ СТРІЛЯТИ"**
Офіцер має мілісекунди на рішення.

Тренуйте ментально:
- Сценарії з цивільними
- Підозрювані зі зброєю/без зброї
- Складні ситуації (заручники, діти)

**ЩЕПЛЕННЯ СТРЕСУ**
Тренування під стресом:
- Стрільба після фізичного навантаження
- Стрільба з обмеженням часу
- Стрільба під звуки сирен та криків

🎓 ВИСНОВОК

Firearms Training — це не просто вміння стріляти.
Це вміння:
✓ Безпечно поводитись зі зброєю
✓ Приймати правильні рішення під стресом
✓ Нести відповідальність за кожен постріл
✓ Захищати життя, не забираючи його без необхідності

Професійний офіцер:
✓ Тренується регулярно
✓ Поважає зброю
✓ Знає свої межі
✓ Готовий використати зброю, але сподівається ніколи не доведеться

"До кожної кулі прикріплений адвокат."`,Ff=`🩹 FIRST AID & MEDICAL RESPONSE
📍 Los Santos County Sheriff's Department — Sheriff Academy

First Aid & Medical Response (Перша допомога та медичне реагування) — це базові навички надання невідкладної медичної допомоги, які можуть врятувати життя до прибуття медиків.

⚠️ РОЛЬ ОФІЦЕРА VS РОЛЬ МЕДИКІВ

**Офіцер — це НЕ медик, але:**
✓ Може надати базову першу допомогу
✓ Має стабілізувати пацієнта до прибуття медиків
✓ Зобов'язаний викликати медиків при травмах
✓ Може застосовувати тактичну медицину в зоні бою

**Медики:**
- Професійна медична допомога
- Транспортування до лікарні
- Розширені медичні процедури

🚑 КОЛИ ВИКЛИКАТИ МЕДИКІВ

ЗАВЖДИ викликати медиків при:
- Пострілах / ножових пораненнях
- Втраті свідомості
- Зупинці серця / дихання
- Сильній кровотечі
- Переломах кісток
- Травмах голови
- ДТП з травмами
- Підозрі на інфаркт/інсульт

Доповідь у рацію:
/f LINCOLN-5, потрібні медики негайно, 10-20: Sandy Shores Gas Station, постраждалий з пострілом у груди, сильна кровотеча, CODE 3!

🩸 КОНТРОЛЬ КРОВОТЕЧІ

**МАСИВНА КРОВОТЕЧА = НАЙБІЛЬША ЗАГРОЗА ЖИТТЮ**
Людина може померти від крововтрати за 3-5 хвилин.

**ДЖГУТ — Використання:**

Коли застосовувати:
✓ Сильна артеріальна кровотеча з кінцівки
✓ Кровотеча не зупиняється прямим тиском
✓ Множинні поранені (немає часу на тривалий прямий тиск)

Як застосувати:
1. Розмістити джгут на 5-7 см ВИЩЕ рани
2. НЕ на суглоб (коліно, лікоть)
3. Затягнути до ПОВНОЇ зупинки кровотечі
4. Записати час накладення (важливо!)
5. Не знімати джгут самостійно

⏰ Час накладення джгута = КРИТИЧНО
Максимум 2 години без ризику втрати кінцівки.

**ПРЯМИЙ ТИСК:**
Для менш серйозних кровотеч:
1. Використати чисту тканину/бинт
2. Натиснути прямо на рану
3. Тримати тиск 5-10 хвилин
4. НЕ підіймати тканину для перевірки (порушить згортання)

**ТАМПОНУВАННЯ РАНИ:**
Для глибоких ран (живіт, пах):
1. Витягнути гемостатичну марлю
2. Впакувати марлю ГЛИБОКО в рану
3. Застосувати прямий тиск зверху
4. Тримати тиск до прибуття медиків

💨 ДИХАЛЬНІ ШЛЯХИ ТА ДИХАННЯ

**ДИХАЛЬНІ ШЛЯХИ:**

Перевірка:
- Чи дихає постраждалий?
- Чи є перешкоди у роті/горлі?

Дії:
1. Очистити рот від сторонніх предметів
2. Відновлювальна позиція (якщо без свідомості, але дихає)
3. Нахил голови-підняття підборіддя (відкрити дихальні шляхи)

**ГРУДНИЙ ПЛАСТИР:**
При пострілі/колотій рані грудей:

Ознаки:
- Кров з бульбашками повітря
- Свистячий звук при диханні
- Спадіння легені (пневмоторакс)

Дії:
1. Накрити рану грудним пластирем (або пластиком)
2. Загерметизувати з 3 сторін (залишити 1 відкриту для виходу повітря)
3. Посадити постраждалого у напівсидяче положення
4. Викликати медиків негайно

💓 СЕРЦЕВО-ЛЕГЕНЕВА РЕАНІМАЦІЯ (СЛР)

**КОЛИ ЗАСТОСОВУВАТИ:**
- Постраждалий не дихає
- Немає пульсу
- Без свідомості

**ПРОЦЕДУРА СЛР:**

1. **ПЕРЕВІРКА РЕАКЦІЇ:**
   "Пане! Ви мене чуєте? Все гаразд?"
   Потрусити за плечі.

2. **ВИКЛИК ДОПОМОГИ:**
   /f Потрібні медики негайно, зупинка серця, починаю СЛР!

3. **КОМПРЕСІЇ ГРУДЕЙ:**
   - Руки в центрі грудей
   - Пальці в замок
   - Прямі лікті
   - Глибина: 5 см
   - Темп: 100-120 компресій на хвилину
   - Співати "Stayin' Alive" для ритму

4. **ШТУЧНЕ ДИХАННЯ (за можливості):**
   - 30 компресій : 2 вдихи
   - Якщо немає маски — тільки компресії

5. **ПРОДОВЖУВАТИ до:**
   - Прибуття медиків
   - Постраждалий почав дихати
   - Фізичне виснаження офіцера

**АВТОМАТИЧНИЙ ДЕФІБРІЛЯТОР:**
Якщо доступний:
1. Увімкнути дефібрілятор
2. Приклеїти електроди на груди
3. Слідувати голосовим інструкціям
4. Всі відійти при розряді
5. Продовжити СЛР після розряду

🧠 ТРАВМИ ГОЛОВИ

**ОЗНАКИ СЕРЙОЗНОЇ ТРАВМИ:**
- Втрата свідомості
- Кровотеча з вух/носа
- Нерівні зіниці
- Блювання
- Дезорієнтація

**ДІЇ:**
1. НЕ рухати голову/шию (можливий перелом хребта)
2. Стабілізувати шию руками
3. Тримати постраждалого в непорушності
4. Викликати медиків
5. Моніторити свідомість

🦴 ПЕРЕЛОМИ ТА ВИВИХИ

**ОЗНАКИ:**
- Деформація кінцівки
- Сильний біль
- Неможливість руху
- Набряк

**ДІЇ:**
1. НЕ намагатися "вправити" на місце
2. Іммобілізувати (зафіксувати) кінцівку
3. Використати шину (палиця, дошка, картон)
4. Викликати медиків

🔥 ОПІКИ

**ТИПИ:**
- 1st Degree: Почервоніння (сонячний опік)
- 2nd Degree: Пухирі
- 3rd Degree: Обвуглення шкіри

**ДІЇ:**
1. Припинити контакт з джерелом опіку
2. Охолодити прохолодною водою (10-20 хвилин)
3. НЕ використовувати лід
4. Накрити чистою тканиною
5. Викликати медиків (2nd-3rd degree)

💊 ПЕРЕДОЗУВАННЯ НАРКОТИКАМИ

**ПЕРЕДОЗУВАННЯ ОПІОЇДАМИ:**

Ознаки:
- Втрата свідомості
- Повільне/відсутнє дихання
- Сині губи/нігті
- Вузькі зіниці

**НАЛОКСОН (Narcan):**
Офіцери LSCSD мають носити Налоксон.

Застосування:
1. Впорснути Налоксон у ніс
2. Якщо немає ефекту за 2-3 хвилини — друга доза
3. Відновлювальна позиція
4. Викликати медиків

⚠️ Налоксон може викликати агресію у наркомана — будьте готові.

⚔️ ТАКТИЧНА МЕДИЦИНА

**Для ситуацій з активною загрозою (стрілянина, операції SEB):**

**3 ФАЗИ:**

**ФАЗА 1: ДОПОМОГА ПІД ВОГНЕМ**
Активна стрілянина триває
- НЕ зупинятися для допомоги
- Нейтралізувати загрозу першочергово
- Швидкий джгут якщо дуже критично

**ФАЗА 2: ТАКТИЧНА ДОПОМОГА В ПОЛІ**
Загрозу нейтралізовано, але зона небезпечна
- Швидка допомога пораненим
- Джгути, грудні пластирі
- Переміщення до безпечної зони

**ФАЗА 3: ТАКТИЧНА ЕВАКУАЦІЯ**
Безпечна зона, чекаємо медиків
- Повна перша допомога
- Моніторинг життєвих показників
- Підготовка до передачі медикам

🎒 СТАНДАРТНА АПТЕЧКА ОФІЦЕРА

Кожен офіцер має носити:
- ✓ 1-2 джгути
- ✓ Грудний пластир (для пневмотораксу)
- ✓ Гемостатична марля
- ✓ Тиснучий бинт
- ✓ Медичні рукавички
- ✓ Травматичні ножиці
- ✓ Налоксон

📋 ПІСЛЯ НАДАННЯ ДОПОМОГИ

1. **Передача медикам:**
   - Що сталося (механізм травми)
   - Які травми знайдено
   - Яку допомогу надано
   - Час накладення джгутів

2. **Документація:**
   - Скласти звіт про інцидент
   - Зафіксувати час та дії
   - Включити в звіт про застосування сили (якщо застосовувалась сила)

3. **Біобезпека:**
   - Зняти рукавички правильно
   - Утилізувати забруднені матеріали
   - Вимити руки
   - Якщо контакт з кров'ю — тест на інфекції

🎓 ВИСНОВОК

First Aid — це не заміна медиків, але може врятувати життя у критичні хвилини до їх прибуття.

Професійний офіцер:
✓ Знає базові навички First Aid
✓ Носить аптечку завжди
✓ Тренується регулярно
✓ Викликає медиків негайно
✓ Документує всі медичні дії

Пам'ятайте:
- **ABC:** Дихальні шляхи, Дихання, Кровообіг
- **Масивна кровотеча вбиває за хвилини**
- **Ваша безпека перш за все — мертвий коп нікому не допоможе**

"Зупини кровотечу. Підтримуй дихання. Чекай медиків."`,Rs=[{id:"1",title:"Юрисдикція та повноваження Sheriff Department",emoji:"🏛️",category:"Базові навички",content:kf,imageUrl:""},{id:"2",title:"Ланцюг командування LSCSD",emoji:"⛓️",category:"Базові навички",content:Cf,imageUrl:""},{id:"3",title:"Етичні стандарти та професійна відповідальність",emoji:"⚖️",category:"Базові навички",content:Ef,imageUrl:""},{id:"4",title:"Радіозв'язок та 10-коди",emoji:"📡",category:"Базові навички",content:Rf,imageUrl:""},{id:"14",title:"Firearms Training & Safety",emoji:"🔫",category:"Базові навички",content:Of,imageUrl:""},{id:"15",title:"First Aid & Medical Response",emoji:"🩹",category:"Базові навички",content:Ff,imageUrl:""},{id:"11",title:"Constitutional Law & Miranda Rights",emoji:"📜",category:"Правові основи",content:Tf,imageUrl:""},{id:"12",title:"Use of Force Continuum",emoji:"📊",category:"Правові основи",content:Df,imageUrl:""},{id:"5",title:"Процедура Traffic Stop",emoji:"🚗",category:"Патрульні процедури",content:Lf,imageUrl:"https://williamsoncountysherifftn.com/wp-content/uploads/2024/06/HandsFree02.jpg"},{id:"8",title:"Felony Stop (Високоризикова зупинка)",emoji:"⚠️",category:"Патрульні процедури",content:If,imageUrl:"https://williamsoncountysherifftn.com/wp-content/uploads/2025/09/Stops04.jpg"},{id:"10",title:"Vehicle Pursuit Protocol",emoji:"🚨",category:"Патрульні процедури",content:Bf,imageUrl:""},{id:"6",title:"Тактика стрільби по шинах",emoji:"🎯",category:"Тактичні операції",content:zf,imageUrl:""},{id:"7",title:"PIT Maneuver (Precision Immobilization Technique)",emoji:"🚔",category:"Тактичні операції",content:Pf,imageUrl:""},{id:"13",title:"Building Entry & Clearing",emoji:"🏠",category:"Тактичні операції",content:_f,imageUrl:""},{id:"9",title:"Active Shooter Response",emoji:"💣",category:"Тактичні операції",content:Af,imageUrl:""}];function Mf(){const[x,C]=ge.useState(null),[p,w]=ge.useState("Всі"),P=["Всі","Базові навички","Правові основи","Патрульні процедури","Тактичні операції"],A=p==="Всі"?Rs:Rs.filter(I=>I.category===p);return t.jsxs("div",{className:"flex h-full",children:[t.jsxs("div",{className:"w-80 border-r border-[#2a2a2a] bg-[#0a0a0a] overflow-y-auto",children:[t.jsxs("div",{className:"p-4 border-b border-[#2a2a2a]",children:[t.jsx("h3",{className:"text-[#d4af37] font-bold mb-3 text-sm",children:"КАТЕГОРІЇ"}),t.jsx("div",{className:"flex flex-wrap gap-2",children:P.map(I=>t.jsx("button",{onClick:()=>w(I),className:`px-3 py-1 text-xs rounded transition-colors ${p===I?"bg-[#d4af37] text-black font-bold":"bg-[#1a1a1a] text-[#888] hover:bg-[#2a2a2a] hover:text-white"}`,children:I},I))})]}),t.jsx("div",{className:"p-2",children:A.map(I=>t.jsx("button",{onClick:()=>C(I),className:`w-full text-left p-3 mb-2 rounded transition-all ${(x==null?void 0:x.id)===I.id?"bg-[#d4af37] bg-opacity-20 border-l-4 border-[#d4af37]":"bg-[#121212] hover:bg-[#1a1a1a] border-l-4 border-transparent"}`,children:t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx("span",{className:"text-2xl",children:I.emoji}),t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{className:`font-semibold text-sm mb-1 ${(x==null?void 0:x.id)===I.id?"text-[#d4af37]":"text-white"}`,children:I.title}),t.jsx("div",{className:"text-xs text-[#888]",children:I.category})]})]})},I.id))})]}),t.jsx("div",{className:"flex-1 overflow-y-auto bg-[#0a0a0a]",children:x?t.jsxs("div",{className:"p-8",children:[t.jsxs("div",{className:"mb-6",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[t.jsx("span",{className:"text-4xl",children:x.emoji}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl font-bold text-[#d4af37]",children:x.title}),t.jsxs("div",{className:"text-sm text-[#888] mt-1",children:["Категорія: ",x.category]})]})]}),t.jsx("div",{className:"h-1 w-24 bg-[#d4af37] mt-4"})]}),x.imageUrl&&t.jsx("div",{className:"mb-6 rounded-lg overflow-hidden border border-[#2a2a2a]",children:t.jsx(Ps,{src:x.imageUrl,alt:x.title,style:{width:"100%",height:"300px",objectFit:"cover",display:"block"}})}),t.jsx("div",{className:"bg-[#121212] border border-[#2a2a2a] rounded-lg p-6",children:t.jsx(wf,{content:x.content})})]}):t.jsx("div",{className:"flex items-center justify-center h-full",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-6xl mb-4",children:"📚"}),t.jsx("h3",{className:"text-xl font-bold text-[#d4af37] mb-2",children:"База даних лекцій LSCSD"}),t.jsx("p",{className:"text-[#888]",children:"Оберіть лекцію зі списку зліва для перегляду"}),t.jsxs("div",{className:"mt-6 text-sm text-[#666]",children:["Всього лекцій: ",Rs.length]})]})})})]})}function Wf(){return t.jsxs("div",{style:{padding:"1.5rem",color:"#ffffff",fontSize:"0.85rem",lineHeight:"1.6"},children:[t.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",border:"2px solid #d4af37",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem",textAlign:"center"},children:[t.jsx("h3",{style:{color:"#d4af37",fontSize:"1.6rem",marginBottom:"0.5rem",fontWeight:"bold"},children:"🏛️ ОРГАНІЗАЦІЙНА СТРУКТУРА ДЕПАРТАМЕНТУ"}),t.jsx("p",{style:{color:"#888",fontSize:"0.9rem",fontStyle:"italic"},children:"Чотири спеціалізовані підрозділи LSCSD"}),t.jsx("div",{style:{height:"2px",width:"80px",background:"#d4af37",margin:"0.8rem auto"}}),t.jsx("p",{style:{color:"#aaa",fontSize:"0.85rem"},children:"Кожен відділ виконує унікальні функції для забезпечення безпеки округу Блейн"})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.2rem",marginBottom:"1rem",borderLeft:"4px solid #d4af37",paddingLeft:"0.8rem"},children:"📋 Про структуру департаменту"}),t.jsx("p",{style:{marginBottom:"1rem"},children:"Los Santos County Sheriff's Department складається з чотирьох основних підрозділів, кожен з яких має чітко визначені обов'язки та спеціалізацію. Ця структура забезпечує ефективне виконання всього спектру правоохоронних функцій — від базового патрулювання до складних тактичних операцій."}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",marginTop:"1rem"},children:[t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🚓"}),t.jsx("div",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.85rem"},children:"DPU"}),t.jsx("div",{style:{color:"#888",fontSize:"0.75rem"},children:"Патруль"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"⚔️"}),t.jsx("div",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.85rem"},children:"SEB"}),t.jsx("div",{style:{color:"#888",fontSize:"0.75rem"},children:"SWAT"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🏛️"}),t.jsx("div",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.85rem"},children:"PIA"}),t.jsx("div",{style:{color:"#888",fontSize:"0.75rem"},children:"Контроль"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🎓"}),t.jsx("div",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.85rem"},children:"SA"}),t.jsx("div",{style:{color:"#888",fontSize:"0.75rem"},children:"Навчання"})]})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"3rem"},children:"🚓"}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.4rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"DISTRICT PATROL UNIT (DPU)"}),t.jsx("p",{style:{color:"#888",fontSize:"0.85rem"},children:"Основний патрульний підрозділ департаменту"})]})]}),t.jsx("div",{style:{height:"1px",background:"#2a2a2a",margin:"1rem 0"}}),t.jsx("p",{style:{marginBottom:"1rem",color:"#ccc"},children:"District Patrol Unit (DPU) є найчисельнішим і найбільш активним підрозділом LSCSD. Офіцери DPU забезпечують цілодобове патрулювання території округу, реагують на виклики 9-1-1 та здійснюють первинний контроль громадського порядку."}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1.5rem",marginBottom:"1rem"},children:[t.jsxs("div",{children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"📌 Основні завдання"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Патрулювання території округу"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Реагування на виклики 9-1-1"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Контроль дорожнього руху (Traffic Stop)"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Реагування на ДТП та інциденти"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Виписування штрафів та протоколів"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Забезпечення безпеки громадян"]})]})]}),t.jsxs("div",{children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"🚗 Типи патрульних юнітів"}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",marginBottom:"0.5rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.9rem",marginBottom:"0.3rem"},children:"ADAM [A]"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Двомісний патруль (2+ офіцери)"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",marginBottom:"0.5rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.9rem",marginBottom:"0.3rem"},children:"LINCOLN [L]"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Одномісний патруль (1 офіцер)"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.9rem",marginBottom:"0.3rem"},children:"HENRY [H]"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Високошвидкісний патруль (1-2 офіцери)"})]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid #2a2a2a",borderLeft:"3px solid #d4af37",padding:"1rem",borderRadius:"4px",marginTop:"1rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🛡️ Девіз підрозділу"}),t.jsx("p",{style:{color:"#ccc",fontStyle:"italic"},children:'"Safety on the roads — our priority."'})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"3rem"},children:"⚔️"}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.4rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"SPECIAL ENFORCEMENT BUREAU (SEB)"}),t.jsx("p",{style:{color:"#888",fontSize:"0.85rem"},children:"Елітний тактичний підрозділ департаменту"})]})]}),t.jsx("div",{style:{borderRadius:"8px",overflow:"hidden",marginBottom:"1rem",border:"1px solid #2a2a2a"},children:t.jsx(Ps,{src:"https://www.riversidesheriff.org/ImageRepository/Document?documentID=4163",alt:"SEB Tactical Team",style:{width:"100%",height:"200px",objectFit:"cover",display:"block"}})}),t.jsx("div",{style:{height:"1px",background:"#2a2a2a",margin:"1rem 0"}}),t.jsx("p",{style:{marginBottom:"1rem",color:"#ccc"},children:"Special Enforcement Bureau (SEB) — це високоспеціалізований тактичний підрозділ, призначений для реагування на ситуації підвищеної небезпеки. Офіцери SEB проходять інтенсивну підготовку та володіють навичками ведення бою в міських умовах, звільнення заручників та нейтралізації озброєних злочинців."}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1.5rem",marginBottom:"1rem"},children:[t.jsxs("div",{children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"🎯 Спеціалізовані операції"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),"Штурмові операції"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),"Звільнення заручників"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),"Антитерористичні заходи"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),"Виконання ордерів високого ризику"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),"Нейтралізація активних стрільців"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),"Підтримка інших підрозділів"]})]})]}),t.jsxs("div",{children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"🛡️ Вимоги до кандидатів"}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsxs("p",{style:{marginBottom:"0.5rem",fontSize:"0.85rem"},children:[t.jsx("span",{style:{color:"#d4af37"},children:"✓"})," Мінімум 6 місяців досвіду в DPU"]}),t.jsxs("p",{style:{marginBottom:"0.5rem",fontSize:"0.85rem"},children:[t.jsx("span",{style:{color:"#d4af37"},children:"✓"})," Відмінна фізична підготовка"]}),t.jsxs("p",{style:{marginBottom:"0.5rem",fontSize:"0.85rem"},children:[t.jsx("span",{style:{color:"#d4af37"},children:"✓"})," Психологічна стійкість"]}),t.jsxs("p",{style:{marginBottom:"0.5rem",fontSize:"0.85rem"},children:[t.jsx("span",{style:{color:"#d4af37"},children:"✓"})," Бездоганна дисциплінарна репутація"]}),t.jsxs("p",{style:{marginBottom:"0.5rem",fontSize:"0.85rem"},children:[t.jsx("span",{style:{color:"#d4af37"},children:"✓"})," Успішне проходження тактичної підготовки"]}),t.jsxs("p",{style:{fontSize:"0.85rem"},children:[t.jsx("span",{style:{color:"#d4af37"},children:"✓"})," Схвалення Command Staff"]})]})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",marginTop:"1rem"},children:[t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🚁 Транспорт та обладнання"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Бронетранспорт, гелікоптери, спеціалізована зброя, балістичні щити, пристрої нічного бачення"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"📡 Позивний"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"CHARLIE [C] — маркування групи захоплення"})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid #2a2a2a",borderLeft:"3px solid #d4af37",padding:"1rem",borderRadius:"4px",marginTop:"1rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🛡️ Девіз підрозділу"}),t.jsx("p",{style:{color:"#ccc",fontStyle:"italic"},children:'"Ready for the worst. Trained for the extreme."'})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"3rem"},children:"🏛️"}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.4rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"PLANNING & INTERNAL AFFAIRS (PIA)"}),t.jsx("p",{style:{color:"#888",fontSize:"0.85rem"},children:"Підрозділ внутрішнього контролю та стратегічного планування"})]})]}),t.jsx("div",{style:{height:"1px",background:"#2a2a2a",margin:"1rem 0"}}),t.jsx("p",{style:{marginBottom:"1rem",color:"#ccc"},children:"Planning & Internal Affairs (PIA) забезпечує дотримання професійних стандартів, етичних норм та законності в діяльності департаменту. Підрозділ також відповідає за стратегічне планування розвитку LSCSD та управління людськими ресурсами."}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1.5rem",marginBottom:"1rem"},children:[t.jsxs("div",{children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"📋 Функції Internal Affairs"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Розслідування скарг на співробітників"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Контроль дотримання SOP та статуту"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Аналіз критичних інцидентів"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Дисциплінарні процедури"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Забезпечення прозорості діяльності"]})]})]}),t.jsxs("div",{children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"📊 Функції Planning"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Управління людськими ресурсми"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Підбір та атестація кадрів"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Стратегічне планування"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Розробка та оновлення SOP"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Навчання та сертифікація"]})]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",marginTop:"1rem"},children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"👥 Структура відділу"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.8rem"},children:[t.jsxs("div",{style:{background:"#121212",padding:"0.8rem",borderRadius:"4px",borderLeft:"2px solid #d4af37"},children:[t.jsx("p",{style:{fontSize:"0.8rem",color:"#d4af37",fontWeight:"bold"},children:"Head of PIA"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Керівник відділу"})]}),t.jsxs("div",{style:{background:"#121212",padding:"0.8rem",borderRadius:"4px",borderLeft:"2px solid #d4af37"},children:[t.jsx("p",{style:{fontSize:"0.8rem",color:"#d4af37",fontWeight:"bold"},children:"IA Investigators"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Слідчі Internal Affairs"})]}),t.jsxs("div",{style:{background:"#121212",padding:"0.8rem",borderRadius:"4px",borderLeft:"2px solid #d4af37"},children:[t.jsx("p",{style:{fontSize:"0.8rem",color:"#d4af37",fontWeight:"bold"},children:"HR Specialists"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Фахівці з кадрів"})]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid #2a2a2a",borderLeft:"3px solid #d4af37",padding:"1rem",borderRadius:"4px",marginTop:"1rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🛡️ Девіз підрозділу"}),t.jsx("p",{style:{color:"#ccc",fontStyle:"italic"},children:'"Integrity. Accountability. Professionalism."'})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"3rem"},children:"🎓"}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.4rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"SHERIFF ACADEMY (SA)"}),t.jsx("p",{style:{color:"#888",fontSize:"0.85rem"},children:"Навчальний центр департаменту"})]})]}),t.jsx("div",{style:{height:"1px",background:"#2a2a2a",margin:"1rem 0"}}),t.jsx("p",{style:{marginBottom:"1rem",color:"#ccc"},children:"Sheriff Academy (SA) — це серце професійної підготовки LSCSD. Академія забезпечує навчання новобранців, підвищення кваліфікації діючих офіцерів та атестацію персоналу. Тут формуються не тільки професійні навички, але й цінності служби."}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1.5rem",marginBottom:"1rem"},children:[t.jsxs("div",{children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"📚 Навчальна програма"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Базова підготовка курсантів"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Тактична підготовка"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Вогнева підготовка"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Вивчення законодавства"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Етика та професійна відповідальність"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Радіозв'язок та процедури"]})]})]}),t.jsxs("div",{children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"📅 Етапи навчання"}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsxs("div",{style:{marginBottom:"0.8rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.85rem",marginBottom:"0.2rem"},children:"Тиждень 1-2: Теоретична база"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#aaa"},children:"Законодавство, SOP, етика, структура"})]}),t.jsxs("div",{style:{marginBottom:"0.8rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.85rem",marginBottom:"0.2rem"},children:"Тиждень 3-4: Пратичні навички"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#aaa"},children:"Traffic Stop, арешти, радіозв'язок"})]}),t.jsxs("div",{children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.85rem",marginBottom:"0.2rem"},children:"Тиждень 5-6: Польова практика"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#aaa"},children:"Патрулювання з інструктором, іспит"})]})]})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",marginTop:"1rem"},children:[t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",textAlign:"center"},children:[t.jsx("p",{style:{color:"#d4af37",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"6-8"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Тижнів навчання"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",textAlign:"center"},children:[t.jsx("p",{style:{color:"#d4af37",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"12+"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Навчальних лекцій"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px",textAlign:"center"},children:[t.jsx("p",{style:{color:"#d4af37",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"85%"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Мінімальний бал для випуску"})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid #2a2a2a",borderLeft:"3px solid #d4af37",padding:"1rem",borderRadius:"4px",marginTop:"1rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🛡️ Девіз академії"}),t.jsx("p",{style:{color:"#ccc",fontStyle:"italic"},children:'"Training today — protecting tomorrow."'})]})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #121212 100%)",border:"1px solid #d4af37",borderRadius:"8px",padding:"1.5rem",textAlign:"center"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.2rem",marginBottom:"1rem"},children:"💼 Приєднуйтесь до нашої команди"}),t.jsx("p",{style:{color:"#ccc",marginBottom:"1rem"},children:"Кожен підрозділ LSCSD шукає відданих та професійних кандидатів. Розпочніть свою кар'єру в Sheriff Academy та станьте частиною легендарного департаменту!"}),t.jsx("div",{style:{display:"inline-block",padding:"0.8rem 1.5rem",background:"#d4af37",color:"#0a0a0a",borderRadius:"4px",fontWeight:"bold",fontSize:"0.9rem"},children:"→ Подати заявку на вступ"})]})]})}function Uf(){return t.jsxs("div",{style:{padding:"1.5rem",color:"#ffffff",fontSize:"0.85rem",lineHeight:"1.6"},children:[t.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",border:"2px solid #d4af37",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem",textAlign:"center"},children:[t.jsx("h3",{style:{color:"#d4af37",fontSize:"1.6rem",marginBottom:"0.5rem",fontWeight:"bold"},children:"❓ FREQUENTLY ASKED QUESTIONS"}),t.jsx("p",{style:{color:"#888",fontSize:"0.9rem",fontStyle:"italic"},children:"Все, що потрібно знати про roleplay в LSCSD"}),t.jsx("div",{style:{height:"2px",width:"80px",background:"#d4af37",margin:"0.8rem auto"}}),t.jsx("p",{style:{color:"#aaa",fontSize:"0.85rem"},children:"Відповіді на найпопулярніші питання про Sheriff Department"})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"3rem"},children:"⚖️"}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.4rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"В чому різниця між LSCSD та LSPD?"}),t.jsx("p",{style:{color:"#888",fontSize:"0.85rem"},children:"Sheriffs vs Police — дві різні служби"})]})]}),t.jsx("div",{style:{height:"1px",background:"#2a2a2a",margin:"1rem 0"}}),t.jsx("p",{style:{marginBottom:"1rem",color:"#ccc"},children:"Хоча обидві організації є правоохоронними, між ними існують фундаментальні відмінності в юрисдикції, культурі та підході до роботи."}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem",marginBottom:"1rem"},children:[t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid #d4af37",borderRadius:"8px",padding:"1.5rem"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.5rem"},children:"🟤"}),t.jsx("h5",{style:{color:"#d4af37",fontSize:"1.1rem",fontWeight:"bold"},children:"LOS SANTOS COUNTY SHERIFF"})]}),t.jsxs("div",{style:{marginBottom:"0.8rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"📍 Територія"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:"Округ Блейн (Blaine County) — пустелі, гори, невеликі містечка"})]}),t.jsxs("div",{style:{marginBottom:"0.8rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🏜️ Характер роботи"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:"Патрулювання великих територій, рідші виклики, більше автономії"})]}),t.jsxs("div",{children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"👔 Атмосфера"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:'Традиційна, комьюніті-орієнтована, "сімейна" культура'})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid #4a90e2",borderRadius:"8px",padding:"1.5rem"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.5rem"},children:"🔵"}),t.jsx("h5",{style:{color:"#4a90e2",fontSize:"1.1rem",fontWeight:"bold"},children:"LOS SANTOS POLICE DEPARTMENT"})]}),t.jsxs("div",{style:{marginBottom:"0.8rem"},children:[t.jsx("p",{style:{color:"#4a90e2",fontWeight:"bold",marginBottom:"0.3rem"},children:"📍 Територія"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:"Місто Лос Сантос — урбанізована територія, густонаселена"})]}),t.jsxs("div",{style:{marginBottom:"0.8rem"},children:[t.jsx("p",{style:{color:"#4a90e2",fontWeight:"bold",marginBottom:"0.3rem"},children:"🏙️ Характер роботи"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:"Міське патрулювання, часті виклики, командна робота"})]}),t.jsxs("div",{children:[t.jsx("p",{style:{color:"#4a90e2",fontWeight:"bold",marginBottom:"0.3rem"},children:"👔 Атмосфера"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:"Динамічна, міська, швидкий темп роботи"})]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid #2a2a2a",borderLeft:"3px solid #d4af37",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"💡 Ключова відмінність"}),t.jsxs("p",{style:{color:"#ccc",fontSize:"0.9rem"},children:[t.jsx("strong",{children:"Sheriffs"})," обирає населення округу, тому вони більш відповідальні перед громадою.",t.jsx("strong",{children:" Police"})," призначається міською владою і фокусується на міському правопорядку."]})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"3rem"},children:"🏜️"}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.4rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"Територія та клімат Blaine County"}),t.jsx("p",{style:{color:"#888",fontSize:"0.85rem"},children:"Знайомство з округом"})]})]}),t.jsx("div",{style:{height:"1px",background:"#2a2a2a",margin:"1rem 0"}}),t.jsx("p",{style:{marginBottom:"1rem",color:"#ccc"},children:"Blaine County — це величезна сільська територія на півночі від Лос Сантоса, що включає пустелі, гори, ліси та невеликі містечка. Це ваша юрисдикція як співробітника департаменту."}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",marginBottom:"1rem"},children:[t.jsxs("div",{style:{background:"#1a1a1a",padding:"1.2rem",borderRadius:"8px"},children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:"🏘️ Основні локації"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),t.jsx("strong",{style:{color:"#d4af37"},children:"Sandy Shores"})," — містечко в пустелі, головна база LSCSD"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),t.jsx("strong",{style:{color:"#d4af37"},children:"Paleto Bay"})," — рибальське містечко на узбережжі"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),t.jsx("strong",{style:{color:"#d4af37"},children:"Grapeseed"})," — сільськогосподарська зона"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),t.jsx("strong",{style:{color:"#d4af37"},children:"Mount Chiliad"})," — гірський масив"]}),t.jsxs("li",{style:{paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),t.jsx("strong",{style:{color:"#d4af37"},children:"Grand Senora Desert"})," — величезна пустеля"]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1.2rem",borderRadius:"8px"},children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:"☀️ Клімат і погода"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),t.jsx("strong",{style:{color:"#d4af37"},children:"Денна температура:"})," +35°C до +45°C влітку"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),t.jsx("strong",{style:{color:"#d4af37"},children:"Нічна температура:"})," +15°C до +25°C"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),t.jsx("strong",{style:{color:"#d4af37"},children:"Опади:"})," Рідкісні, переважно посушливо"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"►"}),t.jsx("strong",{style:{color:"#d4af37"},children:"Особливості:"})," Пилові бурі, спека, гірські тумани"]})]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1.2rem",borderRadius:"8px",marginBottom:"1rem"},children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"🚨 Типові виклики в Blaine County"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.8rem"},children:[t.jsxs("div",{style:{background:"#121212",padding:"0.8rem",borderRadius:"4px",borderLeft:"2px solid #d4af37"},children:[t.jsx("p",{style:{fontSize:"0.8rem",color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🚗 Traffic Stops"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Перевірка на шосе"})]}),t.jsxs("div",{style:{background:"#121212",padding:"0.8rem",borderRadius:"4px",borderLeft:"2px solid #d4af37"},children:[t.jsx("p",{style:{fontSize:"0.8rem",color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🏠 Domestic Calls"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Сімейні конфлікти"})]}),t.jsxs("div",{style:{background:"#121212",padding:"0.8rem",borderRadius:"4px",borderLeft:"2px solid #d4af37"},children:[t.jsx("p",{style:{fontSize:"0.8rem",color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🔫 Drug Labs"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Лабораторії в пустелі"})]}),t.jsxs("div",{style:{background:"#121212",padding:"0.8rem",borderRadius:"4px",borderLeft:"2px solid #d4af37"},children:[t.jsx("p",{style:{fontSize:"0.8rem",color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🏃 Pursuits"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Погоні по бездоріжжю"})]}),t.jsxs("div",{style:{background:"#121212",padding:"0.8rem",borderRadius:"4px",borderLeft:"2px solid #d4af37"},children:[t.jsx("p",{style:{fontSize:"0.8rem",color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🚁 Search & Rescue"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Пошук в горах"})]}),t.jsxs("div",{style:{background:"#121212",padding:"0.8rem",borderRadius:"4px",borderLeft:"2px solid #d4af37"},children:[t.jsx("p",{style:{fontSize:"0.8rem",color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🌾 Trespassing"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Вторгнення на землі"})]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid #2a2a2a",borderLeft:"3px solid #d4af37",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"🌵 Атмосфера округу"}),t.jsx("p",{style:{color:"#ccc",fontSize:"0.9rem"},children:"Blaine County — це «Wild West» штату San Andreas. Тут менше людей, більше простору, і кожен виклик може бути далеко від підтримки. Співробітник департаменту тут має бути самодостатнім, рішучим та готовим до несподіванок."})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"3rem"},children:"🎭"}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.4rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"Як якісно відігравати Sheriff?"}),t.jsx("p",{style:{color:"#888",fontSize:"0.85rem"},children:"Roleplay поради для реалістичного персонажа"})]})]}),t.jsx("div",{style:{height:"1px",background:"#2a2a2a",margin:"1rem 0"}}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1rem",marginBottom:"1rem"},children:[t.jsxs("div",{style:{background:"#1a1a1a",padding:"1.2rem",borderRadius:"8px"},children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"👤 Характер та бекграунд"}),t.jsx("p",{style:{marginBottom:"0.8rem",color:"#ccc"},children:"Співробітник департаменту — це не просто копія міського поліцейського. Створіть унікальну історію:"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Можливо, ви виросли в Sandy Shores і знаєте кожного місцевого"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Або переїхали з міста, шукаючи спокійнішого життя"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Колишній військовий, який хоче служити громаді"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Син/дочка фермера, який/яка знає сільське життя"]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1.2rem",borderRadius:"8px"},children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"💬 Манера спілкування"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[t.jsxs("div",{children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem",fontSize:"0.9rem"},children:"✅ DO (Роби)"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,fontSize:"0.85rem"},children:[t.jsx("li",{style:{marginBottom:"0.4rem",color:"#90EE90"},children:"✓ Будь ввічливим та професійним"}),t.jsx("li",{style:{marginBottom:"0.4rem",color:"#90EE90"},children:"✓ Використовуй southern accent (по бажанню)"}),t.jsx("li",{style:{marginBottom:"0.4rem",color:"#90EE90"},children:`✓ Звертайся "Sir/Ma'am"`}),t.jsx("li",{style:{marginBottom:"0.4rem",color:"#90EE90"},children:"✓ Будь спокійним та зваженим"}),t.jsx("li",{style:{marginBottom:"0.4rem",color:"#90EE90"},children:"✓ Пояснюй свої дії"})]})]}),t.jsxs("div",{children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem",fontSize:"0.9rem"},children:"❌ DON'T (Не роби)"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,fontSize:"0.85rem"},children:[t.jsx("li",{style:{marginBottom:"0.4rem",color:"#FFB6C1"},children:"✗ Не будь агресивним без причини"}),t.jsx("li",{style:{marginBottom:"0.4rem",color:"#FFB6C1"},children:"✗ Не поспішай з арештами"}),t.jsx("li",{style:{marginBottom:"0.4rem",color:"#FFB6C1"},children:"✗ Не ігноруй RP ситуації"}),t.jsx("li",{style:{marginBottom:"0.4rem",color:"#FFB6C1"},children:'✗ Не грай "супер-копа"'}),t.jsx("li",{style:{marginBottom:"0.4rem",color:"#FFB6C1"},children:"✗ Не забувай про безпеку"})]})]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1.2rem",borderRadius:"8px"},children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"🎬 Цікаві RP сценарії"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0.8rem"},children:[t.jsxs("div",{style:{background:"#121212",padding:"1rem",borderRadius:"4px",border:"1px solid #2a2a2a"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🚗 Traffic Stop на Route 68"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Зупини авто за перевищення швидкості. Будь пильним — можлива контрабанда або розшукувана особа."})]}),t.jsxs("div",{style:{background:"#121212",padding:"1rem",borderRadius:"4px",border:"1px solid #2a2a2a"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🏠 Domestic Dispute"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Сімейна сварка в трейлер-парку. Деескалація ситуації — твоя головна мета."})]}),t.jsxs("div",{style:{background:"#121212",padding:"1rem",borderRadius:"4px",border:"1px solid #2a2a2a"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🔫 Drug Lab Raid"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Виявлено лабораторію в пустелі. Координуй з SEB, забезпеч периметр, чекай підкріплення."})]}),t.jsxs("div",{style:{background:"#121212",padding:"1rem",borderRadius:"4px",border:"1px solid #2a2a2a"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🌙 Night Patrol"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Нічне патрулювання Grapeseed. Перевір місцевий бар, поспілкуйся з жителями, будь на зв'язку."})]})]})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1.2rem",borderRadius:"8px"},children:[t.jsx("h5",{style:{color:"#d4af37",fontSize:"1rem",marginBottom:"0.8rem"},children:"📚 Золоті правила Sheriff RP"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🎯"}),t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.9rem",marginBottom:"0.3rem"},children:"Пріоритет — громада"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Ти служиш людям округу, а не статистиці арештів"})]}),t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"⏱️"}),t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.9rem",marginBottom:"0.3rem"},children:"Дай час на RP"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Не поспішай завершувати сцени — насолоджуйся процесом"})]}),t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🤝"}),t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",fontSize:"0.9rem",marginBottom:"0.3rem"},children:"Командна робота"}),t.jsx("p",{style:{fontSize:"0.75rem",color:"#888"},children:"Координуйся з колегами, будь частиною команди"})]})]})]})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #121212 100%)",border:"1px solid #d4af37",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🌟 Головна порада"}),t.jsx("p",{style:{color:"#ccc",fontSize:"0.9rem"},children:'Співробітник департаменту — це не роль "хорошого чи поганого копа". Це роль людини, яка живе в цьому окрузі, знає його людей, поважає традиції та готова захищати свою землю. Будь унікальним, будь реалістичним, будь собою! 🤠'})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[t.jsx("div",{style:{fontSize:"3rem"},children:"💡"}),t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.4rem",fontWeight:"bold",marginBottom:"0.3rem"},children:"Загальні питання"}),t.jsx("p",{style:{color:"#888",fontSize:"0.85rem"},children:"Швидкі відповіді на типові запитання"})]})]}),t.jsx("div",{style:{height:"1px",background:"#2a2a2a",margin:"1rem 0"}}),t.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"8px",borderLeft:"3px solid #d4af37"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"❓ Чи потрібен досвід RP для вступу в LSCSD?"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:"Ні! Sheriff Academy навчить вас усім базовим процедурам, SOP та roleplay стандартам. Головне — бажання вчитися та відповідальний підхід до гри."})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"8px",borderLeft:"3px solid #d4af37"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"❓ Скільки часу потрібно грати щотижня?"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:"Мінімальна активність залежить від політики департаменту, але зазвичай це 8-12 годин на тиждень. Якість RP важливіша за кількість годин!"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"8px",borderLeft:"3px solid #d4af37"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"❓ Чи можу я грати і в LSCSD, і в LSPD одночасно?"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:"Ні, зазвичай на більшості серверів заборонено мати персонажів в обох LEO фракціях одночасно. Обери одну організацію та розвивайся в ній."})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"8px",borderLeft:"3px solid #d4af37"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"❓ Чи можна пересуватися містом Los Santos?"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc"},children:"Так, але з обмеженнями. LSCSD може реагувати на виклики в місті лише за запитом LSPD або у випадку надзвичайної ситуації (mutual aid). Ваша основна юрисдикція — Blaine County."})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"8px",borderLeft:"3px solid #d4af37"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"❓ Які можливості кар'єрного зростання?"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#ccc",marginBottom:"0.8rem"},children:"Департамент має багаторівневу структуру з можливістю росту від кадета до Sheriff:"}),t.jsxs("div",{style:{fontSize:"0.8rem",color:"#aaa"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginTop:"0.5rem",marginBottom:"0.3rem"},children:"📊 Молодший склад:"}),t.jsx("p",{style:{marginBottom:"0.5rem"},children:"SA Cadet I → SA Cadet II → Junior Sergeant"}),t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginTop:"0.5rem",marginBottom:"0.3rem"},children:"📊 Середній склад:"}),t.jsx("p",{style:{marginBottom:"0.5rem"},children:"Sergeant → Sergeant II → Lieutenant I → Lieutenant II → Captain → Major"}),t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginTop:"0.5rem",marginBottom:"0.3rem"},children:"📊 Старший склад:"}),t.jsx("p",{children:"Deputy Head of Department → Head of Department → Assistant Sheriff → Undersheriff → Sheriff"}),t.jsx("p",{style:{color:"#888",fontSize:"0.75rem",marginTop:"0.8rem",fontStyle:"italic"},children:"+ можливість вступу в спеціалізовані підрозділи (SEB, PIA, SA) та отримання посади Instructor Department"})]})]})]})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",border:"2px solid #d4af37",borderRadius:"8px",padding:"2rem",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🤠"}),t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.3rem",marginBottom:"1rem"},children:"Готовий приєднатися до департаменту?"}),t.jsx("p",{style:{color:"#ccc",marginBottom:"1.5rem",fontSize:"0.95rem"},children:"Приєднуйся до Los Santos County Sheriff's Department та почни свою легендарну кар'єру в найатмосфернішому правоохоронному підрозділі San Andreas!"}),t.jsx("div",{style:{display:"inline-block",padding:"1rem 2rem",background:"#d4af37",color:"#0a0a0a",borderRadius:"4px",fontWeight:"bold",fontSize:"1rem",cursor:"pointer"},children:"📝 Подати заявку на вступ"})]})]})}const Hf={about:{title:"Про Департамент Шерифів",description:"",body:()=>t.jsxs("div",{style:{padding:"1.5rem",color:"#ffffff",fontSize:"0.85rem",lineHeight:"1.6"},children:[t.jsxs("div",{style:{marginBottom:"1.5rem",borderRadius:"8px",overflow:"hidden",border:"2px solid #d4af37",position:"relative"},children:[t.jsx(Ps,{src:"https://forum-cfx-re.akamaized.net/original/4X/9/1/a/91a2be43fcbd5d101e53f727abdd545830d561e8.jpeg",alt:"LSCSD Sandy Shores Station",style:{width:"100%",height:"300px",objectFit:"cover",display:"block"}}),t.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top, rgba(0,0,0,0.9), transparent)",padding:"2rem 1.5rem 1rem",color:"#d4af37"},children:[t.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold"},children:"📍 Los Santos County Sheriff's Department"}),t.jsx("div",{style:{fontSize:"0.75rem",color:"#aaa",marginTop:"0.3rem"},children:"Sandy Shores Station, Blaine County"})]})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",border:"2px solid #d4af37",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem",textAlign:"center"},children:[t.jsx("h3",{style:{color:"#d4af37",fontSize:"1.8rem",marginBottom:"0.5rem",fontWeight:"bold"},children:"🏛️ LOS SANTOS COUNTY SHERIFF'S DEPARTMENT"}),t.jsx("p",{style:{color:"#888",fontSize:"0.9rem",fontStyle:"italic",marginBottom:"0.5rem"},children:"Заснований 1850 | Округ Блейн, Штат Сан-Андреас"}),t.jsx("div",{style:{height:"2px",width:"100px",background:"#d4af37",margin:"1rem auto"}}),t.jsx("p",{style:{color:"#d4af37",fontSize:"1.1rem",fontWeight:"bold"},children:'"Integrity. Service. Protection."'}),t.jsx("p",{style:{color:"#aaa",fontSize:"0.85rem",marginTop:"0.3rem"},children:"Чесність. Служіння. Захист."})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.2rem",marginBottom:"1rem",borderLeft:"4px solid #d4af37",paddingLeft:"0.8rem"},children:"📖 Про Департамент"}),t.jsx("p",{style:{marginBottom:"1rem"},children:"Департамент Шерифів округу Блейн (Los Santos County Sheriff's Department, LSCSD) є основним правоохоронним органом, що забезпечує громадську безпеку на території всього округу Los Santos. З моменту заснування у 1850 році, департамент пройшов довгий шлях від невеликої групи маршалів до сучасної професійної служби з понад 200 співробітниками."}),t.jsx("p",{style:{marginBottom:"1rem"},children:"Наша місія полягає в захисті життя та майна громадян, підтриманні громадського порядку та забезпеченні справедливості на всій території округу. Ми працюємо цілодобово, 365 днів на рік, щоб кожен мешканець округу Блейн почувався у безпеці."}),t.jsxs("div",{style:{background:"#1a1a1a",border:"1px solid #2a2a2a",borderLeft:"3px solid #d4af37",padding:"1rem",borderRadius:"4px",marginTop:"1rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"💡 Наша філософія"}),t.jsx("p",{style:{color:"#ccc"},children:"Ми віримо, що ефективна правоохоронна діяльність будується на довірі громади, професіоналізмі співробітників та неухильному дотриманні закону. Кожен наш офіцер є прикладом чесності, мужності та відданості служінню."})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",marginBottom:"1.5rem"},children:[t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.2rem"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"0.95rem",marginBottom:"0.8rem"},children:"🏢 Офіси та станції"}),t.jsxs("ul",{style:{listStyle:"none",padding:0},children:[t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"★"}),"Sandy Shores — головний офіс"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"★"}),"Paleto Bay — регіональний офіс"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"★"}),"Grapeseed — патрульна база"]})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.2rem"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"0.95rem",marginBottom:"0.8rem"},children:"📌 Основні функції"}),t.jsxs("ul",{style:{listStyle:"none",padding:0},children:[t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Патрулювання території"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Реагування на виклики 9-1-1"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Розслідування злочинів"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Контроль дорожнього руху"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"•"}),"Спецоперації та SWAT"]})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.2rem"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"0.95rem",marginBottom:"0.8rem"},children:"⚖️ Підпорядкованість"}),t.jsxs("p",{style:{marginBottom:"0.5rem"},children:[t.jsx("strong",{style:{color:"#d4af37"},children:"Штат:"}),t.jsx("br",{}),"Сан-Андреас"]}),t.jsxs("p",{style:{marginBottom:"0.5rem"},children:[t.jsx("strong",{style:{color:"#d4af37"},children:"Округ:"}),t.jsx("br",{}),"Blaine County (Los Santos)"]}),t.jsxs("p",{children:[t.jsx("strong",{style:{color:"#d4af37"},children:"Керівництво:"}),t.jsx("br",{}),"Генеральний прокурор штату"]})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.2rem",marginBottom:"1rem",borderLeft:"4px solid #d4af37",paddingLeft:"0.8rem"},children:"🗺️ Територія обслуговування"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1.5rem"},children:[t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:"0.8rem"},children:"LSCSD має юрисдикцію на всій території округу Блейн, включаючи:"}),t.jsxs("ul",{style:{listStyle:"none",padding:0},children:[t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"▸"}),"Сільські райони округу"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"▸"}),"Міжміські автомагістралі"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"▸"}),"Невеликі населені пункти"]}),t.jsxs("li",{style:{marginBottom:"0.4rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"▸"}),"Гірські та пустельні зони"]})]})]}),t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:"0.8rem",color:"#d4af37",fontWeight:"bold"},children:"📊 Статистика покриття:"}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsxs("p",{style:{marginBottom:"0.5rem"},children:[t.jsx("span",{style:{color:"#d4af37"},children:"Площа:"})," ~4,500 км²"]}),t.jsxs("p",{style:{marginBottom:"0.5rem"},children:[t.jsx("span",{style:{color:"#d4af37"},children:"Населення:"})," ~85,000 осіб"]}),t.jsxs("p",{style:{marginBottom:"0.5rem"},children:[t.jsx("span",{style:{color:"#d4af37"},children:"Співробітників:"})," 200+"]}),t.jsxs("p",{children:[t.jsx("span",{style:{color:"#d4af37"},children:"Патрульних одиниць:"})," 45+"]})]})]})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.2rem",marginBottom:"1rem",borderLeft:"4px solid #d4af37",paddingLeft:"0.8rem"},children:"🤝 Співпраця з іншими структурами"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem"},children:[t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🚔 LSPD"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Los Santos Police Department — співпраця у міських межах"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🚨 FIB"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Federal Investigation Bureau — федеральні розслідування"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🏛️ DOJ"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Department of Justice — процесуальна взаємодія"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🚑 EMS"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Emergency Medical Services — медична допомога та координація"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🪖 SANG"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"San Andreas National Guard — Національна Гвардія Сан Андреас"})]}),t.jsxs("div",{style:{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.5rem"},children:"🏢 GOV"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"Government — урядові установи та координація"})]})]})]}),t.jsxs("div",{style:{background:"#121212",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.2rem",marginBottom:"1rem",borderLeft:"4px solid #d4af37",paddingLeft:"0.8rem"},children:"👮 Вимоги до кандидатів"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1.5rem"},children:[t.jsxs("div",{children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.8rem"},children:"Базові вимоги:"}),t.jsxs("ul",{style:{listStyle:"none",padding:0},children:[t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"✓"}),"Вік від 21 року"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"✓"}),"Громадянство Сан-Андреас"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"✓"}),"Відсутність судимості"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"✓"}),"Водійські права категорії B"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.2rem",position:"relative"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37"},children:"✓"}),"Фізична та психологічна придатність"]})]})]}),t.jsxs("div",{children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.8rem"},children:"Процес прйому:"}),t.jsxs("ol",{style:{listStyle:"none",padding:0,counterReset:"item"},children:[t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.5rem",position:"relative",counterIncrement:"item"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37",fontWeight:"bold"},children:"1."}),"Подання заявки онлайн"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.5rem",position:"relative",counterIncrement:"item"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37",fontWeight:"bold"},children:"2."}),"Перевірка даних"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.5rem",position:"relative",counterIncrement:"item"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37",fontWeight:"bold"},children:"3."}),"Співбесіда з HR"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.5rem",position:"relative",counterIncrement:"item"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37",fontWeight:"bold"},children:"4."}),"Психологічне тестування"]}),t.jsxs("li",{style:{marginBottom:"0.5rem",paddingLeft:"1.5rem",position:"relative",counterIncrement:"item"},children:[t.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37",fontWeight:"bold"},children:"5."}),"Навчання в Sheriff Academy"]})]})]})]}),t.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"#1a1a1a",borderRadius:"4px",borderLeft:"3px solid #d4af37"},children:[t.jsx("p",{style:{color:"#d4af37",fontWeight:"bold",marginBottom:"0.3rem"},children:"💼 Готові приєднатися?"}),t.jsx("p",{style:{color:"#ccc",fontSize:"0.85rem"},children:'Подайте заявку через вкладку "Заявка на вступ" та станьте частиною легендарного департаменту!'})]})]}),t.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #121212 100%)",border:"1px solid #d4af37",borderRadius:"8px",padding:"1.5rem",textAlign:"center"},children:[t.jsx("h4",{style:{color:"#d4af37",fontSize:"1.2rem",marginBottom:"1rem"},children:"📞 Контактна інформація"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem",marginBottom:"1rem"},children:[t.jsxs("div",{children:[t.jsx("p",{style:{color:"#888",fontSize:"0.8rem",marginBottom:"0.3rem"},children:"ЕКСТРЕНІ ВИКЛИКИ"}),t.jsx("p",{style:{color:"#d4af37",fontSize:"1.3rem",fontWeight:"bold"},children:"9-1-1"})]}),t.jsxs("div",{children:[t.jsx("p",{style:{color:"#888",fontSize:"0.8rem",marginBottom:"0.3rem"},children:"ЦЕНТРАЛЬНИЙ ОФІС"}),t.jsx("p",{style:{color:"#d4af37",fontSize:"1.3rem",fontWeight:"bold"},children:"(555) 0-LSCSD"})]}),t.jsxs("div",{children:[t.jsx("p",{style:{color:"#888",fontSize:"0.8rem",marginBottom:"0.3rem"},children:"КАДРОВА СЛУЖБА"}),t.jsx("p",{style:{color:"#d4af37",fontSize:"1.3rem",fontWeight:"bold"},children:"(555) 0-JOBS"})]})]}),t.jsx("p",{style:{color:"#888",fontSize:"0.75rem",marginTop:"1rem"},children:"Адреса головного офісу: 1245 Alhambra Drive, Sandy Shores, Blaine County, SA 92345"})]}),t.jsxs("div",{style:{textAlign:"center",marginTop:"2rem",padding:"1rem"},children:[t.jsx("p",{style:{color:"#d4af37",fontSize:"1.2rem",fontWeight:"bold",marginBottom:"0.3rem"},children:'"Integrity. Service. Protection."'}),t.jsx("p",{style:{color:"#666",fontSize:"0.8rem",fontStyle:"italic"},children:"Служимо з честю. Захищаємо з гідністю."})]})]})},departments:{title:"Відділи",description:"",body:()=>t.jsx(Wf,{})},lectures:{title:"База даних лекцій",description:"",body:()=>t.jsx(Mf,{})},deleteme_departments:{title:"Відділи OLD",description:"",body:()=>t.jsxs("div",{className:"departments-grid",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"2rem",margin:"2rem 0"},children:[t.jsxs("div",{className:"department-card",style:{padding:"1rem",border:"1px solid #2a2a2a",borderRadius:"8px",background:"#121212",color:"#ffffff"},children:[t.jsx("h5",{style:{color:"#d4af37"},children:"🏛️ PLANNING & INTERNAL AFFAIRS (PIA)"}),t.jsx("p",{children:"📍 Los Santos County Sheriff’s Department"}),t.jsx("p",{children:"Planning & Internal Affairs (PIA) — це ключовий підрозділ Los Santos County Sheriff’s Department, відповідальний за внутрішній контроль, планування розвитку департаменту та дотримання професійних стандартів служби...."}),t.jsx("hr",{style:{border:"none",height:"1px",backgroundColor:"#2a2a2a",margin:"1rem 0"}}),t.jsx("h5",{style:{color:"#d4af37"},children:"📌 Основні завдання відділу"}),t.jsxs("ul",{children:[t.jsx("li",{children:"• Розслідування внутрішніх порушень та скарг"}),t.jsx("li",{children:"• Контроль дотримання кодексу честі та SOP"}),t.jsx("li",{children:"• Аналіз дій персоналу під час інцидентів"}),t.jsx("li",{children:"• Проведення тренувань, інструктажів для особового складу."}),t.jsx("li",{children:"• Функції відділу кадрів, підбір нових кадрів і контроль діючих шерифів."}),t.jsx("li",{children:"• Планування структурних змін і розвитку департаменту"}),t.jsx("li",{children:"• Прийом та обробка скарг від громадян і співробітників"}),t.jsx("li",{children:"• Забезпечення неупередженості та об’єктивності"}),t.jsx("li",{children:"• Підтримка високих стандартів дисципліни та законності"})]}),t.jsx("hr",{style:{border:"none",height:"1px",backgroundColor:"#2a2a2a",margin:"1rem 0"}}),t.jsx("h5",{style:{color:"#d4af37"},children:"🛡️ Місія відділу"}),t.jsxs("p",{children:["Забезпечити прозорість, законність та довіру суспільства до Los Santos County Sheriff’s Department шляхом професійного онтролю та стратегічного планування.. ",t.jsx("br",{}),t.jsx("strong",{children:'"Integrity. Accountability. Professionalism."'})]})]}),t.jsxs("div",{className:"department-card",style:{padding:"1rem",border:"1px solid #2a2a2a",borderRadius:"8px",background:"#121212",color:"#ffffff"},children:[t.jsx("h3",{style:{color:"#d4af37"},children:"🚓 DISTRICT PATROL UNIT (DPU)"}),t.jsx("p",{children:"📍 Los Santos County Sheriff’s Department"}),t.jsx("p",{children:"District Patrol Unit (DPU) — спеціалізований підрозділ Los Santos County Sheriff’s Department, відповідальний за забезпечення безпеки дорожнього руху, контроль за дотриманням правил та зниження аварійності на території округу Los Santos."}),t.jsx("hr",{style:{border:"none",height:"1px",backgroundColor:"#2a2a2a",margin:"1rem 0"}}),t.jsx("h4",{style:{color:"#d4af37"},children:"📌 Основні завдання"}),t.jsxs("ul",{children:[t.jsx("li",{children:"• Контроль дотримання правил дорожнього руху"}),t.jsx("li",{children:"• Реагування на ДТП та інші інциденти"}),t.jsx("li",{children:"• Реагування на виклики 9-1-1"}),t.jsx("li",{children:"• Проведення процесуальних дій"}),t.jsx("li",{children:"• Забезпечення безпеки цивільного населення"}),t.jsx("li",{children:"• Патрулювання автомагістралей, міських і заміських доріг"}),t.jsx("li",{children:"• Підтримка громадського порядку у сфері дорожнього руху"})]}),t.jsx("hr",{style:{border:"none",height:"1px",backgroundColor:"#2a2a2a",margin:"1rem 0"}}),t.jsx("h4",{style:{color:"#d4af37"},children:"🛡 Місія відділу"}),t.jsxs("p",{children:["Захист життя та здоров’я учасників дорожнього руху шляхом професійного контролю, превентивних заходів і оперативного реагування. ",t.jsx("br",{}),t.jsx("strong",{children:'"Safety on the roads — our priority."'})]})]}),t.jsxs("div",{className:"department-card",style:{padding:"1rem",border:"1px solid #2a2a2a",borderRadius:"8px",background:"#121212",color:"#ffffff"},children:[t.jsx("h3",{style:{color:"#d4af37"},children:"⚔ SPECIAL ENFORCEMENT BUREAU (SEB)"}),t.jsx("p",{children:"📍 Los Santos County Sheriff’s Department"}),t.jsx("p",{children:"Special Enforcement Bureau (SEB) — елітний тактичний підрозділ Los Santos County Sheriff’s Department, призначений для реагування на ситуації підвищеної небезпеки, боротьби з озброєною злочинністю та проведення спеціальних операцій."}),t.jsx("hr",{style:{border:"none",height:"1px",backgroundColor:"#2a2a2a",margin:"1rem 0"}}),t.jsx("h4",{style:{color:"#d4af37"},children:"📌 Основні завдання"}),t.jsxs("ul",{children:[t.jsx("li",{children:"• Нейтралізація озброєних і особливо небезпечних злочинців"}),t.jsx("li",{children:"• Штурмові та антитерористичні операції"}),t.jsx("li",{children:"• Звільнення заручників"}),t.jsx("li",{children:"• Виконання ордерів високого ризику"}),t.jsx("li",{children:"• Підтримка інших підрозділів Департаменту Шерифів"})]}),t.jsx("hr",{style:{border:"none",height:"1px",backgroundColor:"#2a2a2a",margin:"1rem 0"}}),t.jsx("h4",{style:{color:"#d4af37"},children:"🛡 Місія бюро"}),t.jsxs("p",{children:["Забезпечення максимального рівня безпеки громадян шляхом швидкого, рішучого та професійного реагування на загрози найвищого рівня. ",t.jsx("br",{}),t.jsx("strong",{children:'"Ready for the worst. Trained for the extreme."'})]})]}),t.jsxs("div",{className:"department-card",style:{padding:"1rem",border:"1px solid #2a2a2a",borderRadius:"8px",background:"#121212",color:"#ffffff"},children:[t.jsx("h3",{style:{color:"#d4af37"},children:"🎓 SHERIFF ACADEMY (SA)"}),t.jsx("p",{children:"📍 Los Santos County Sheriff’s Department"}),t.jsx("p",{children:"Sheriff Academy (SA) — навчальний підрозділ Los Santos County Sheriff’s Department, відповідальний за підготовку, навчання та атестацію майбутніх і діючих співробітників департаменту."}),t.jsx("hr",{style:{border:"none",height:"1px",backgroundColor:"#2a2a2a",margin:"1rem 0"}}),t.jsx("h4",{style:{color:"#d4af37"},children:"📌 Основні завдання академії"}),t.jsxs("ul",{children:[t.jsx("li",{children:"• Базова підготовка майбутніх шерифів"}),t.jsx("li",{children:"• Перепідготовка та підвищення кваліфікації діючих шерифів"}),t.jsx("li",{children:"• Формування дисципліни та лідерських якостей"}),t.jsx("li",{children:"• Контроль рівня знань і навичок"}),t.jsx("li",{children:"• Проведення атестацій та іспитів"})]}),t.jsx("hr",{style:{border:"none",height:"1px",backgroundColor:"#2a2a2a",margin:"1rem 0"}}),t.jsx("h4",{style:{color:"#d4af37"},children:"🛡 Місія академії"}),t.jsxs("p",{children:["Підготовка професійних, дисциплінованих і відповідальних шерифів, здатних ефективно служити та захищати громадян округу Los Santos. ",t.jsx("br",{}),t.jsx("strong",{children:'"Training today — protecting tomorrow."'})]})]})]})},statute:{title:"Внутрішній статут",description:"",body:()=>t.jsx(Nf,{})},application:{title:"Заявка на вступ",description:"",body:()=>t.jsx(jf,{})},complaint:{title:"Форма скарги",description:"",body:()=>t.jsx(Sf,{})},faq:{title:"Часті запитання",description:"",body:()=>t.jsx(Uf,{})}};function Vf({activeTab:x}){const C=Hf[x];return x==="statute"||x==="lectures"?t.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col",children:[t.jsxs("div",{className:"p-8 pb-4",children:[t.jsx("div",{className:"h-1 w-16 bg-[#d4af37] mb-4"}),t.jsx("h2",{className:"text-2xl font-bold text-[#d4af37] mb-2",children:C.title})]}),t.jsx("div",{className:"flex-1 overflow-hidden",children:C.body&&t.jsx(C.body,{})})]}):t.jsx("div",{className:"flex-1 overflow-y-auto",children:t.jsxs("div",{className:"max-w-4xl mx-auto p-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsx("div",{className:"h-1 w-16 bg-[#d4af37] mb-4"}),t.jsx("h2",{className:"text-2xl font-bold text-[#d4af37] mb-2",children:C.title})]}),t.jsx("div",{className:"prose prose-invert max-w-none",children:t.jsxs("div",{className:"bg-[#121212] border border-[#2a2a2a] rounded-lg p-6 min-h-[400px]",children:[C.description&&t.jsx("p",{className:"text-white italic",children:C.description}),C.body&&t.jsx(C.body,{})]})})]})})}function $f(){const[x,C]=ge.useState("about"),[p,w]=ge.useState(!1);return t.jsxs("div",{className:"min-h-screen w-full flex bg-[#0a0a0a]",children:[t.jsx(vf,{activeTab:x,onTabChange:C,isCollapsed:p,onToggleCollapse:()=>w(!p)}),t.jsx(Vf,{activeTab:x})]})}Ku.createRoot(document.getElementById("root")).render(t.jsx(Wu.StrictMode,{children:t.jsx($f,{})}));
