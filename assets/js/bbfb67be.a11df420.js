/*! For license information please see bbfb67be.a11df420.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[957762],{953134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var r=n(824246),o=n(511151);const c={id:"plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck",title:"TechInsightJsonRuleCheck",description:"API reference for TechInsightJsonRuleCheck"},s=void 0,u={id:"reference/plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck",title:"TechInsightJsonRuleCheck",description:"API reference for TechInsightJsonRuleCheck",source:"@site/../docs/reference/plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck.md",sourceDirName:"reference",slug:"/reference/plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck",permalink:"/docs/reference/plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck.md",tags:[],version:"current",frontMatter:{id:"plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck",title:"TechInsightJsonRuleCheck",description:"API reference for TechInsightJsonRuleCheck"}},i={},l=[{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend-module-jsonfc",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-tech-insights-backend-module-jsonfc"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck",children:(0,r.jsx)(t.code,{children:"TechInsightJsonRuleCheck"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface TechInsightJsonRuleCheck extends TechInsightCheck \n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Extends:"})," ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.techinsightcheck",children:"TechInsightCheck"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend-module-jsonfc.techinsightjsonrulecheck.rule",children:"rule"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-backend-module-jsonfc.rule",children:"Rule"})}),(0,r.jsx)(t.td,{})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:a,props:c,_owner:u.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),d=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function j(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=m.prototype;var k=b.prototype=new j;k.constructor=b,y(k,m.prototype),k.isPureReactComponent=!0;var _=Array.isArray,v=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,c={},s=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,o)&&!S.hasOwnProperty(o)&&(c[o]=t[o]);var i=arguments.length-2;if(1===i)c.children=r;else if(1<i){for(var l=Array(i),a=0;a<i;a++)l[a]=arguments[a+2];c.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:n,type:e,key:s,ref:u,props:c,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,o,c,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return s=s(i=e),e=""===c?"."+w(i,0):c,_(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),I(s,t,o,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(i=0,c=""===c?".":c+":",_(e))for(var l=0;l<e.length;l++){var a=c+w(u=e[l],l);i+=I(u,t,o,a,s)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(u=e.next()).done;)i+=I(u=u.value,t,o,a=c+w(u,l++),s);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,t,n){if(null==e)return e;var r=[],o=0;return I(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},O={transition:null},A={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:O,ReactCurrentOwner:x};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=s,t.PureComponent=b,t.StrictMode=c,t.Suspense=a,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)v.call(t,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){i=Array(l);for(var a=0;a<l;a++)i[a]=arguments[a+2];o.children=i}return{$$typeof:n,type:e.type,key:c,ref:s,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>s});var r=n(667294);const o={},c=r.createContext(o);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);