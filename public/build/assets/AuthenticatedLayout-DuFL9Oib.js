import{r as L,j as s,a as ce,R as r,c as Ye,q as He}from"./app-CGyVb8Is.js";import{A as Ve}from"./ApplicationLogo-Co_sINlS.js";import{X as Fe}from"./transition-2pjHvSQG.js";import{U as E}from"./UserRoles-BJkDelhi.js";const ye=L.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),O=({children:t})=>{const[a,n]=L.useState(!1),i=()=>{n(m=>!m)};return s.jsx(ye.Provider,{value:{open:a,setOpen:n,toggleOpen:i},children:s.jsx("div",{className:"relative",children:t})})},We=({children:t})=>{const{open:a,setOpen:n,toggleOpen:i}=L.useContext(ye);return s.jsxs(s.Fragment,{children:[s.jsx("div",{onClick:i,children:t}),a&&s.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},Ke=({align:t="right",width:a="48",contentClasses:n="py-1 bg-white",children:i})=>{const{open:m,setOpen:l}=L.useContext(ye);let c="origin-top";t==="left"?c="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(c="ltr:origin-top-right rtl:origin-top-left end-0");let g="";return a==="48"&&(g="w-48"),s.jsx(s.Fragment,{children:s.jsx(Fe,{show:m,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:s.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${c} ${g}`,onClick:()=>l(!1),children:s.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:i})})})})},Xe=({className:t="",children:a,...n})=>s.jsx(ce,{...n,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+t,children:a});O.Trigger=We;O.Content=Ke;O.Link=Xe;function re({active:t=!1,className:a="",children:n,...i}){return s.jsx(ce,{...i,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(t?"border-indigo-400 text-gray-900 focus:border-indigo-700":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700")+a,children:n})}function H({active:t=!1,className:a="",children:n,...i}){return s.jsx(ce,{...i,className:`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${t?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${a}`,children:n})}var Me=["light","dark"],Je="(prefers-color-scheme: dark)",Ge=L.createContext(void 0),qe={setTheme:t=>{},themes:[]},_e=()=>{var t;return(t=L.useContext(Ge))!=null?t:qe};L.memo(({forcedTheme:t,storageKey:a,attribute:n,enableSystem:i,enableColorScheme:m,defaultTheme:l,value:c,attrs:g,nonce:S})=>{let U=l==="system",z=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${g.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,V=m?Me.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",e=(w,y=!1,G=!0)=>{let $=c?c[w]:w,C=y?w+"|| ''":`'${$}'`,I="";return m&&G&&!y&&Me.includes(w)&&(I+=`d.style.colorScheme = '${w}';`),n==="class"?y||$?I+=`c.add(${C})`:I+="null":$&&(I+=`d[s](n,${C})`),I},x=t?`!function(){${z}${e(t)}}()`:i?`!function(){try{${z}var e=localStorage.getItem('${a}');if('system'===e||(!e&&${U})){var t='${Je}',m=window.matchMedia(t);if(m.media!==t||m.matches){${e("dark")}}else{${e("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${e(c?"x[e]":"e",!0)}}${U?"":"else{"+e(l,!1,!1)+"}"}${V}}catch(e){}}()`:`!function(){try{${z}var e=localStorage.getItem('${a}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${e(c?"x[e]":"e",!0)}}else{${e(l,!1,!1)};}${V}}catch(t){}}();`;return L.createElement("script",{nonce:S,dangerouslySetInnerHTML:{__html:x}})});var Qe=t=>{switch(t){case"success":return tt;case"info":return rt;case"warning":return at;case"error":return nt;default:return null}},Ze=Array(12).fill(0),et=({visible:t})=>r.createElement("div",{className:"sonner-loading-wrapper","data-visible":t},r.createElement("div",{className:"sonner-spinner"},Ze.map((a,n)=>r.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),tt=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),at=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),rt=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),nt=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),st=()=>{let[t,a]=r.useState(document.hidden);return r.useEffect(()=>{let n=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},be=1,ot=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let a=this.subscribers.indexOf(t);this.subscribers.splice(a,1)}),this.publish=t=>{this.subscribers.forEach(a=>a(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var a;let{message:n,...i}=t,m=typeof(t==null?void 0:t.id)=="number"||((a=t.id)==null?void 0:a.length)>0?t.id:be++,l=this.toasts.find(g=>g.id===m),c=t.dismissible===void 0?!0:t.dismissible;return l?this.toasts=this.toasts.map(g=>g.id===m?(this.publish({...g,...t,id:m,title:n}),{...g,...t,id:m,dismissible:c,title:n}):g):this.addToast({title:n,...i,dismissible:c,id:m}),m},this.dismiss=t=>(t||this.toasts.forEach(a=>{this.subscribers.forEach(n=>n({id:a.id,dismiss:!0}))}),this.subscribers.forEach(a=>a({id:t,dismiss:!0})),t),this.message=(t,a)=>this.create({...a,message:t}),this.error=(t,a)=>this.create({...a,message:t,type:"error"}),this.success=(t,a)=>this.create({...a,type:"success",message:t}),this.info=(t,a)=>this.create({...a,type:"info",message:t}),this.warning=(t,a)=>this.create({...a,type:"warning",message:t}),this.loading=(t,a)=>this.create({...a,type:"loading",message:t}),this.promise=(t,a)=>{if(!a)return;let n;a.loading!==void 0&&(n=this.create({...a,promise:t,type:"loading",message:a.loading,description:typeof a.description!="function"?a.description:void 0}));let i=t instanceof Promise?t:t(),m=n!==void 0;return i.then(async l=>{if(lt(l)&&!l.ok){m=!1;let c=typeof a.error=="function"?await a.error(`HTTP error! status: ${l.status}`):a.error,g=typeof a.description=="function"?await a.description(`HTTP error! status: ${l.status}`):a.description;this.create({id:n,type:"error",message:c,description:g})}else if(a.success!==void 0){m=!1;let c=typeof a.success=="function"?await a.success(l):a.success,g=typeof a.description=="function"?await a.description(l):a.description;this.create({id:n,type:"success",message:c,description:g})}}).catch(async l=>{if(a.error!==void 0){m=!1;let c=typeof a.error=="function"?await a.error(l):a.error,g=typeof a.description=="function"?await a.description(l):a.description;this.create({id:n,type:"error",message:c,description:g})}}).finally(()=>{var l;m&&(this.dismiss(n),n=void 0),(l=a.finally)==null||l.call(a)}),n},this.custom=(t,a)=>{let n=(a==null?void 0:a.id)||be++;return this.create({jsx:t(n),id:n,...a}),n},this.subscribers=[],this.toasts=[]}},N=new ot,it=(t,a)=>{let n=(a==null?void 0:a.id)||be++;return N.addToast({title:t,...a,id:n}),n},lt=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",dt=it,ct=()=>N.toasts,Ct=Object.assign(dt,{success:N.success,info:N.info,warning:N.warning,error:N.error,custom:N.custom,message:N.message,promise:N.promise,dismiss:N.dismiss,loading:N.loading},{getHistory:ct});function ut(t,{insertAt:a}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",a==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}ut(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function de(t){return t.label!==void 0}var ht=3,mt="32px",pt=4e3,ft=356,gt=14,vt=20,xt=200;function bt(...t){return t.filter(Boolean).join(" ")}var yt=t=>{var a,n,i,m,l,c,g,S,U,z;let{invert:V,toast:e,unstyled:x,interacting:w,setHeights:y,visibleToasts:G,heights:$,index:C,toasts:I,expanded:q,removeToast:j,defaultRichColors:_,closeButton:ne,style:se,cancelButtonStyle:ue,actionButtonStyle:he,className:P="",descriptionClassName:oe="",duration:Q,position:me,gap:F,loadingIcon:D,expandByDefault:Z,classNames:d,icons:M,closeButtonAriaLabel:pe="Close toast",pauseWhenPageIsHidden:u,cn:p}=t,[v,T]=r.useState(!1),[Y,b]=r.useState(!1),[fe,ee]=r.useState(!1),[te,ae]=r.useState(!1),[Te,ge]=r.useState(0),[Re,we]=r.useState(0),Ne=r.useRef(null),W=r.useRef(null),Be=C===0,Ie=C+1<=G,k=e.type,K=e.dismissible!==!1,De=e.className||"",Le=e.descriptionClassName||"",ie=r.useMemo(()=>$.findIndex(o=>o.toastId===e.id)||0,[$,e.id]),ze=r.useMemo(()=>{var o;return(o=e.closeButton)!=null?o:ne},[e.closeButton,ne]),je=r.useMemo(()=>e.duration||Q||pt,[e.duration,Q]),ve=r.useRef(0),X=r.useRef(0),ke=r.useRef(0),J=r.useRef(null),[Ee,Pe]=me.split("-"),Se=r.useMemo(()=>$.reduce((o,f,h)=>h>=ie?o:o+f.height,0),[$,ie]),Ce=st(),Ae=e.invert||V,xe=k==="loading";X.current=r.useMemo(()=>ie*F+Se,[ie,Se]),r.useEffect(()=>{T(!0)},[]),r.useLayoutEffect(()=>{if(!v)return;let o=W.current,f=o.style.height;o.style.height="auto";let h=o.getBoundingClientRect().height;o.style.height=f,we(h),y(R=>R.find(B=>B.toastId===e.id)?R.map(B=>B.toastId===e.id?{...B,height:h}:B):[{toastId:e.id,height:h,position:e.position},...R])},[v,e.title,e.description,y,e.id]);let A=r.useCallback(()=>{b(!0),ge(X.current),y(o=>o.filter(f=>f.toastId!==e.id)),setTimeout(()=>{j(e)},xt)},[e,j,y,X]);r.useEffect(()=>{if(e.promise&&k==="loading"||e.duration===1/0||e.type==="loading")return;let o,f=je;return q||w||u&&Ce?(()=>{if(ke.current<ve.current){let h=new Date().getTime()-ve.current;f=f-h}ke.current=new Date().getTime()})():f!==1/0&&(ve.current=new Date().getTime(),o=setTimeout(()=>{var h;(h=e.onAutoClose)==null||h.call(e,e),A()},f)),()=>clearTimeout(o)},[q,w,Z,e,je,A,e.promise,k,u,Ce]),r.useEffect(()=>{let o=W.current;if(o){let f=o.getBoundingClientRect().height;return we(f),y(h=>[{toastId:e.id,height:f,position:e.position},...h]),()=>y(h=>h.filter(R=>R.toastId!==e.id))}},[y,e.id]),r.useEffect(()=>{e.delete&&A()},[A,e.delete]);function Oe(){return M!=null&&M.loading?r.createElement("div",{className:"sonner-loader","data-visible":k==="loading"},M.loading):D?r.createElement("div",{className:"sonner-loader","data-visible":k==="loading"},D):r.createElement(et,{visible:k==="loading"})}return r.createElement("li",{"aria-live":e.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:W,className:p(P,De,d==null?void 0:d.toast,(a=e==null?void 0:e.classNames)==null?void 0:a.toast,d==null?void 0:d.default,d==null?void 0:d[k],(n=e==null?void 0:e.classNames)==null?void 0:n[k]),"data-sonner-toast":"","data-rich-colors":(i=e.richColors)!=null?i:_,"data-styled":!(e.jsx||e.unstyled||x),"data-mounted":v,"data-promise":!!e.promise,"data-removed":Y,"data-visible":Ie,"data-y-position":Ee,"data-x-position":Pe,"data-index":C,"data-front":Be,"data-swiping":fe,"data-dismissible":K,"data-type":k,"data-invert":Ae,"data-swipe-out":te,"data-expanded":!!(q||Z&&v),style:{"--index":C,"--toasts-before":C,"--z-index":I.length-C,"--offset":`${Y?Te:X.current}px`,"--initial-height":Z?"auto":`${Re}px`,...se,...e.style},onPointerDown:o=>{xe||!K||(Ne.current=new Date,ge(X.current),o.target.setPointerCapture(o.pointerId),o.target.tagName!=="BUTTON"&&(ee(!0),J.current={x:o.clientX,y:o.clientY}))},onPointerUp:()=>{var o,f,h,R;if(te||!K)return;J.current=null;let B=Number(((o=W.current)==null?void 0:o.style.getPropertyValue("--swipe-amount").replace("px",""))||0),le=new Date().getTime()-((f=Ne.current)==null?void 0:f.getTime()),Ue=Math.abs(B)/le;if(Math.abs(B)>=vt||Ue>.11){ge(X.current),(h=e.onDismiss)==null||h.call(e,e),A(),ae(!0);return}(R=W.current)==null||R.style.setProperty("--swipe-amount","0px"),ee(!1)},onPointerMove:o=>{var f;if(!J.current||!K)return;let h=o.clientY-J.current.y,R=o.clientX-J.current.x,B=(Ee==="top"?Math.min:Math.max)(0,h),le=o.pointerType==="touch"?10:2;Math.abs(B)>le?(f=W.current)==null||f.style.setProperty("--swipe-amount",`${h}px`):Math.abs(R)>le&&(J.current=null)}},ze&&!e.jsx?r.createElement("button",{"aria-label":pe,"data-disabled":xe,"data-close-button":!0,onClick:xe||!K?()=>{}:()=>{var o;A(),(o=e.onDismiss)==null||o.call(e,e)},className:p(d==null?void 0:d.closeButton,(m=e==null?void 0:e.classNames)==null?void 0:m.closeButton)},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,e.jsx||r.isValidElement(e.title)?e.jsx||e.title:r.createElement(r.Fragment,null,k||e.icon||e.promise?r.createElement("div",{"data-icon":"",className:p(d==null?void 0:d.icon,(l=e==null?void 0:e.classNames)==null?void 0:l.icon)},e.promise||e.type==="loading"&&!e.icon?e.icon||Oe():null,e.type!=="loading"?e.icon||(M==null?void 0:M[k])||Qe(k):null):null,r.createElement("div",{"data-content":"",className:p(d==null?void 0:d.content,(c=e==null?void 0:e.classNames)==null?void 0:c.content)},r.createElement("div",{"data-title":"",className:p(d==null?void 0:d.title,(g=e==null?void 0:e.classNames)==null?void 0:g.title)},e.title),e.description?r.createElement("div",{"data-description":"",className:p(oe,Le,d==null?void 0:d.description,(S=e==null?void 0:e.classNames)==null?void 0:S.description)},e.description):null),r.isValidElement(e.cancel)?e.cancel:e.cancel&&de(e.cancel)?r.createElement("button",{"data-button":!0,"data-cancel":!0,style:e.cancelButtonStyle||ue,onClick:o=>{var f,h;de(e.cancel)&&K&&((h=(f=e.cancel).onClick)==null||h.call(f,o),A())},className:p(d==null?void 0:d.cancelButton,(U=e==null?void 0:e.classNames)==null?void 0:U.cancelButton)},e.cancel.label):null,r.isValidElement(e.action)?e.action:e.action&&de(e.action)?r.createElement("button",{"data-button":!0,"data-action":!0,style:e.actionButtonStyle||he,onClick:o=>{var f,h;de(e.action)&&(o.defaultPrevented||((h=(f=e.action).onClick)==null||h.call(f,o),A()))},className:p(d==null?void 0:d.actionButton,(z=e==null?void 0:e.classNames)==null?void 0:z.actionButton)},e.action.label):null))};function $e(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var wt=t=>{let{invert:a,position:n="bottom-right",hotkey:i=["altKey","KeyT"],expand:m,closeButton:l,className:c,offset:g,theme:S="light",richColors:U,duration:z,style:V,visibleToasts:e=ht,toastOptions:x,dir:w=$e(),gap:y=gt,loadingIcon:G,icons:$,containerAriaLabel:C="Notifications",pauseWhenPageIsHidden:I,cn:q=bt}=t,[j,_]=r.useState([]),ne=r.useMemo(()=>Array.from(new Set([n].concat(j.filter(u=>u.position).map(u=>u.position)))),[j,n]),[se,ue]=r.useState([]),[he,P]=r.useState(!1),[oe,Q]=r.useState(!1),[me,F]=r.useState(S!=="system"?S:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),D=r.useRef(null),Z=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),d=r.useRef(null),M=r.useRef(!1),pe=r.useCallback(u=>{var p;(p=j.find(v=>v.id===u.id))!=null&&p.delete||N.dismiss(u.id),_(v=>v.filter(({id:T})=>T!==u.id))},[j]);return r.useEffect(()=>N.subscribe(u=>{if(u.dismiss){_(p=>p.map(v=>v.id===u.id?{...v,delete:!0}:v));return}setTimeout(()=>{Ye.flushSync(()=>{_(p=>{let v=p.findIndex(T=>T.id===u.id);return v!==-1?[...p.slice(0,v),{...p[v],...u},...p.slice(v+1)]:[u,...p]})})})}),[]),r.useEffect(()=>{if(S!=="system"){F(S);return}S==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?F("dark"):F("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:u})=>{F(u?"dark":"light")})},[S]),r.useEffect(()=>{j.length<=1&&P(!1)},[j]),r.useEffect(()=>{let u=p=>{var v,T;i.every(Y=>p[Y]||p.code===Y)&&(P(!0),(v=D.current)==null||v.focus()),p.code==="Escape"&&(document.activeElement===D.current||(T=D.current)!=null&&T.contains(document.activeElement))&&P(!1)};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[i]),r.useEffect(()=>{if(D.current)return()=>{d.current&&(d.current.focus({preventScroll:!0}),d.current=null,M.current=!1)}},[D.current]),j.length?r.createElement("section",{"aria-label":`${C} ${Z}`,tabIndex:-1},ne.map((u,p)=>{var v;let[T,Y]=u.split("-");return r.createElement("ol",{key:u,dir:w==="auto"?$e():w,tabIndex:-1,ref:D,className:c,"data-sonner-toaster":!0,"data-theme":me,"data-y-position":T,"data-x-position":Y,style:{"--front-toast-height":`${((v=se[0])==null?void 0:v.height)||0}px`,"--offset":typeof g=="number"?`${g}px`:g||mt,"--width":`${ft}px`,"--gap":`${y}px`,...V},onBlur:b=>{M.current&&!b.currentTarget.contains(b.relatedTarget)&&(M.current=!1,d.current&&(d.current.focus({preventScroll:!0}),d.current=null))},onFocus:b=>{b.target instanceof HTMLElement&&b.target.dataset.dismissible==="false"||M.current||(M.current=!0,d.current=b.relatedTarget)},onMouseEnter:()=>P(!0),onMouseMove:()=>P(!0),onMouseLeave:()=>{oe||P(!1)},onPointerDown:b=>{b.target instanceof HTMLElement&&b.target.dataset.dismissible==="false"||Q(!0)},onPointerUp:()=>Q(!1)},j.filter(b=>!b.position&&p===0||b.position===u).map((b,fe)=>{var ee,te;return r.createElement(yt,{key:b.id,icons:$,index:fe,toast:b,defaultRichColors:U,duration:(ee=x==null?void 0:x.duration)!=null?ee:z,className:x==null?void 0:x.className,descriptionClassName:x==null?void 0:x.descriptionClassName,invert:a,visibleToasts:e,closeButton:(te=x==null?void 0:x.closeButton)!=null?te:l,interacting:oe,position:u,style:x==null?void 0:x.style,unstyled:x==null?void 0:x.unstyled,classNames:x==null?void 0:x.classNames,cancelButtonStyle:x==null?void 0:x.cancelButtonStyle,actionButtonStyle:x==null?void 0:x.actionButtonStyle,removeToast:pe,toasts:j.filter(ae=>ae.position==b.position),heights:se.filter(ae=>ae.position==b.position),setHeights:ue,expandByDefault:m,gap:y,loadingIcon:G,expanded:he,pauseWhenPageIsHidden:I,cn:q})}))})):null};const Nt=({...t})=>{const{theme:a="system"}=_e();return s.jsx(wt,{theme:a,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})};function Mt({header:t,children:a}){const n=He().props.auth.user,[i,m]=L.useState(!1);return s.jsxs("div",{className:"min-h-screen bg-gray-100",children:[s.jsxs("nav",{className:"border-b border-gray-100 bg-white",children:[s.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex h-16 justify-between",children:[s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"flex shrink-0 items-center",children:s.jsx(ce,{href:"/",children:s.jsx(Ve,{className:"block h-9 w-auto fill-current text-gray-800"})})}),s.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[s.jsx(re,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),[E.SUPERADMIN].includes(n.role)&&s.jsx(re,{href:route("user.index"),active:route().current("user.index"),children:"Pengguna"}),[E.ADMIN,E.SUPERADMIN].includes(n.role)&&s.jsx(re,{href:route("teacher.index"),active:route().current("teacher.index"),children:"Data Guru"}),[E.SUPERVISOR,E.SUPERADMIN].includes(n.role)&&s.jsx(re,{href:route("supervision.index"),active:route().current("supervision.index"),children:"Supervisi"}),[E.GURU].includes(n.role)&&s.jsx(re,{href:route("supervision.selfCheck"),active:route().current("supervision.selfCheck"),children:"Cek Hasil Supervisi"})]})]}),s.jsx("div",{className:"hidden sm:ms-6 sm:flex sm:items-center",children:s.jsx("div",{className:"relative ms-3",children:s.jsxs(O,{children:[s.jsx(O.Trigger,{children:s.jsx("span",{className:"inline-flex rounded-md",children:s.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",children:[n.name,s.jsx("svg",{className:"-me-0.5 ms-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s.jsxs(O.Content,{children:[s.jsx(O.Link,{href:route("profile.edit"),children:"Profile"}),s.jsx(O.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),s.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:s.jsx("button",{onClick:()=>m(l=>!l),className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",children:s.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[s.jsx("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),s.jsx("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),s.jsxs("div",{className:(i?"block":"hidden")+" sm:hidden",children:[s.jsxs("div",{className:"space-y-1 pb-3 pt-2",children:[s.jsx(H,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),[E.SUPERADMIN].includes(n.role)&&s.jsx(H,{href:route("user.index"),active:route().current("user.index"),children:"Pengguna"}),[E.SUPERADMIN,E.ADMIN].includes(n.role)&&s.jsx(H,{href:route("teacher.index"),active:route().current("teacher.index"),children:"Data Guru"}),[E.SUPERVISOR,E.SUPERADMIN].includes(n.role)&&s.jsx(H,{href:route("supervision.index"),active:route().current("supervision.index"),children:"Supervisi"}),[E.GURU].includes(n.role)&&s.jsx(H,{href:route("supervision.selfCheck"),active:route().current("supervision.selfCheck"),children:"Cek Hasil Supervisi"})]}),s.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4",children:[s.jsxs("div",{className:"px-4",children:[s.jsx("div",{className:"text-base font-medium text-gray-800",children:n.name}),s.jsx("div",{className:"text-sm font-medium text-gray-500",children:n.email})]}),s.jsxs("div",{className:"mt-3 space-y-1",children:[s.jsx(H,{href:route("profile.edit"),children:"Profile"}),s.jsx(H,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&s.jsx("header",{className:"bg-white shadow",children:s.jsx("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",children:t})}),s.jsx("main",{children:a}),s.jsx(Nt,{richColors:!0})]})}export{Mt as A,Ct as J};