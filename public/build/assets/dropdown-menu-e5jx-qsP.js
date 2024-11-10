import{c as me}from"./createLucideIcon-BV_g7ymp.js";import{r,j as s}from"./app-DniLaL6E.js";import{u as Se,c as x}from"./index-BBL5h9KX.js";import{u as $,c as De,S as jt}from"./index-b_AFv8_B.js";import{a as ve,c as Pe}from"./index-Bex7iEj9.js";import{P as T,d as Ot}from"./index-CnfCgSTi.js";import{c as Ne,e as Te,b as le,a as Ae,A as Ft,h as kt,u as Lt,F as Gt,D as Kt,C as $t,d as Ut,R as Bt,f as Vt,P as Yt}from"./Combination-BYt9JbRY.js";import{P as oe}from"./index-DQvVdqG1.js";import{c as A}from"./utils-BM_CldAA.js";import{C as zt}from"./check-CJbIJ5UH.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=me("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=me("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=me("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);function Wt(e,n=[]){let t=[];function o(c,i){const d=r.createContext(i),f=t.length;t=[...t,i];function p(u){const{scope:l,children:g,...v}=u,h=(l==null?void 0:l[e][f])||d,b=r.useMemo(()=>v,Object.values(v));return s.jsx(h.Provider,{value:b,children:g})}function m(u,l){const g=(l==null?void 0:l[e][f])||d,v=r.useContext(g);if(v)return v;if(i!==void 0)return i;throw new Error(`\`${u}\` must be used within \`${c}\``)}return p.displayName=c+"Provider",[p,m]}const a=()=>{const c=t.map(i=>r.createContext(i));return function(d){const f=(d==null?void 0:d[e])||c;return r.useMemo(()=>({[`__scope${e}`]:{...d,[e]:f}}),[d,f])}};return a.scopeName=e,[o,qt(a,...n)]}function qt(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(c){const i=o.reduce((d,{useScope:f,scopeName:p})=>{const u=f(c)[`__scope${p}`];return{...d,...u}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return t.scopeName=n.scopeName,t}var de="rovingFocusGroup.onEntryFocus",Zt={bubbles:!1,cancelable:!0},re="RovingFocusGroup",[fe,je,Jt]=Ne(re),[Qt,Oe]=Wt(re,[Jt]),[en,tn]=Qt(re),Fe=r.forwardRef((e,n)=>s.jsx(fe.Provider,{scope:e.__scopeRovingFocusGroup,children:s.jsx(fe.Slot,{scope:e.__scopeRovingFocusGroup,children:s.jsx(nn,{...e,ref:n})})}));Fe.displayName=re;var nn=r.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,orientation:o,loop:a=!1,dir:c,currentTabStopId:i,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:f,onEntryFocus:p,preventScrollOnEntryFocus:m=!1,...u}=e,l=r.useRef(null),g=$(n,l),v=Te(c),[h=null,b]=Se({prop:i,defaultProp:d,onChange:f}),[M,R]=r.useState(!1),P=ve(p),Z=je(t),U=r.useRef(!1),[J,j]=r.useState(0);return r.useEffect(()=>{const C=l.current;if(C)return C.addEventListener(de,P),()=>C.removeEventListener(de,P)},[P]),s.jsx(en,{scope:t,orientation:o,dir:v,loop:a,currentTabStopId:h,onItemFocus:r.useCallback(C=>b(C),[b]),onItemShiftTab:r.useCallback(()=>R(!0),[]),onFocusableItemAdd:r.useCallback(()=>j(C=>C+1),[]),onFocusableItemRemove:r.useCallback(()=>j(C=>C-1),[]),children:s.jsx(T.div,{tabIndex:M||J===0?-1:0,"data-orientation":o,...u,ref:g,style:{outline:"none",...e.style},onMouseDown:x(e.onMouseDown,()=>{U.current=!0}),onFocus:x(e.onFocus,C=>{const L=!U.current;if(C.target===C.currentTarget&&L&&!M){const O=new CustomEvent(de,Zt);if(C.currentTarget.dispatchEvent(O),!O.defaultPrevented){const B=Z().filter(S=>S.focusable),V=B.find(S=>S.active),Q=B.find(S=>S.id===h),ce=[V,Q,...B].filter(Boolean).map(S=>S.ref.current);Ge(ce,m)}}U.current=!1}),onBlur:x(e.onBlur,()=>R(!1))})})}),ke="RovingFocusGroupItem",Le=r.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,focusable:o=!0,active:a=!1,tabStopId:c,...i}=e,d=le(),f=c||d,p=tn(ke,t),m=p.currentTabStopId===f,u=je(t),{onFocusableItemAdd:l,onFocusableItemRemove:g}=p;return r.useEffect(()=>{if(o)return l(),()=>g()},[o,l,g]),s.jsx(fe.ItemSlot,{scope:t,id:f,focusable:o,active:a,children:s.jsx(T.span,{tabIndex:m?0:-1,"data-orientation":p.orientation,...i,ref:n,onMouseDown:x(e.onMouseDown,v=>{o?p.onItemFocus(f):v.preventDefault()}),onFocus:x(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:x(e.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){p.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const h=an(v,p.orientation,p.dir);if(h!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||v.shiftKey)return;v.preventDefault();let M=u().filter(R=>R.focusable).map(R=>R.ref.current);if(h==="last")M.reverse();else if(h==="prev"||h==="next"){h==="prev"&&M.reverse();const R=M.indexOf(v.currentTarget);M=p.loop?sn(M,R+1):M.slice(R+1)}setTimeout(()=>Ge(M))}})})})});Le.displayName=ke;var on={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function rn(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function an(e,n,t){const o=rn(e.key,t);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return on[o]}function Ge(e,n=!1){const t=document.activeElement;for(const o of e)if(o===t||(o.focus({preventScroll:n}),document.activeElement!==t))return}function sn(e,n){return e.map((t,o)=>e[(n+o)%e.length])}var cn=Fe,un=Le,pe=["Enter"," "],dn=["ArrowDown","PageUp","Home"],Ke=["ArrowUp","PageDown","End"],ln=[...dn,...Ke],fn={ltr:[...pe,"ArrowRight"],rtl:[...pe,"ArrowLeft"]},pn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},W="Menu",[X,mn,vn]=Ne(W),[F,$e]=Pe(W,[vn,Ae,Oe]),ae=Ae(),Ue=Oe(),[wn,k]=F(W),[xn,q]=F(W),Be=e=>{const{__scopeMenu:n,open:t=!1,children:o,dir:a,onOpenChange:c,modal:i=!0}=e,d=ae(n),[f,p]=r.useState(null),m=r.useRef(!1),u=ve(c),l=Te(a);return r.useEffect(()=>{const g=()=>{m.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>m.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),s.jsx(Vt,{...d,children:s.jsx(wn,{scope:n,open:t,onOpenChange:u,content:f,onContentChange:p,children:s.jsx(xn,{scope:n,onClose:r.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:m,dir:l,modal:i,children:o})})})};Be.displayName=W;var gn="MenuAnchor",we=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e,a=ae(t);return s.jsx(Ft,{...a,...o,ref:n})});we.displayName=gn;var xe="MenuPortal",[hn,Ve]=F(xe,{forceMount:void 0}),Ye=e=>{const{__scopeMenu:n,forceMount:t,children:o,container:a}=e,c=k(xe,n);return s.jsx(hn,{scope:n,forceMount:t,children:s.jsx(oe,{present:t||c.open,children:s.jsx(Yt,{asChild:!0,container:a,children:o})})})};Ye.displayName=xe;var y="MenuContent",[Mn,ge]=F(y),ze=r.forwardRef((e,n)=>{const t=Ve(y,e.__scopeMenu),{forceMount:o=t.forceMount,...a}=e,c=k(y,e.__scopeMenu),i=q(y,e.__scopeMenu);return s.jsx(X.Provider,{scope:e.__scopeMenu,children:s.jsx(oe,{present:o||c.open,children:s.jsx(X.Slot,{scope:e.__scopeMenu,children:i.modal?s.jsx(Cn,{...a,ref:n}):s.jsx(_n,{...a,ref:n})})})})}),Cn=r.forwardRef((e,n)=>{const t=k(y,e.__scopeMenu),o=r.useRef(null),a=$(n,o);return r.useEffect(()=>{const c=o.current;if(c)return kt(c)},[]),s.jsx(he,{...e,ref:a,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:x(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),_n=r.forwardRef((e,n)=>{const t=k(y,e.__scopeMenu);return s.jsx(he,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),he=r.forwardRef((e,n)=>{const{__scopeMenu:t,loop:o=!1,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:i,disableOutsidePointerEvents:d,onEntryFocus:f,onEscapeKeyDown:p,onPointerDownOutside:m,onFocusOutside:u,onInteractOutside:l,onDismiss:g,disableOutsideScroll:v,...h}=e,b=k(y,t),M=q(y,t),R=ae(t),P=Ue(t),Z=mn(t),[U,J]=r.useState(null),j=r.useRef(null),C=$(n,j,b.onContentChange),L=r.useRef(0),O=r.useRef(""),B=r.useRef(0),V=r.useRef(null),Q=r.useRef("right"),ee=r.useRef(0),ce=v?Bt:r.Fragment,S=v?{as:jt,allowPinchZoom:!0}:void 0,At=w=>{var K,Ie;const I=O.current+w,E=Z().filter(D=>!D.disabled),N=document.activeElement,ue=(K=E.find(D=>D.ref.current===N))==null?void 0:K.textValue,ie=E.map(D=>D.textValue),be=jn(ie,I,ue),Y=(Ie=E.find(D=>D.textValue===be))==null?void 0:Ie.ref.current;(function D(ye){O.current=ye,window.clearTimeout(L.current),ye!==""&&(L.current=window.setTimeout(()=>D(""),1e3))})(I),Y&&setTimeout(()=>Y.focus())};r.useEffect(()=>()=>window.clearTimeout(L.current),[]),Lt();const G=r.useCallback(w=>{var E,N;return Q.current===((E=V.current)==null?void 0:E.side)&&Fn(w,(N=V.current)==null?void 0:N.area)},[]);return s.jsx(Mn,{scope:t,searchRef:O,onItemEnter:r.useCallback(w=>{G(w)&&w.preventDefault()},[G]),onItemLeave:r.useCallback(w=>{var I;G(w)||((I=j.current)==null||I.focus(),J(null))},[G]),onTriggerLeave:r.useCallback(w=>{G(w)&&w.preventDefault()},[G]),pointerGraceTimerRef:B,onPointerGraceIntentChange:r.useCallback(w=>{V.current=w},[]),children:s.jsx(ce,{...S,children:s.jsx(Gt,{asChild:!0,trapped:a,onMountAutoFocus:x(c,w=>{var I;w.preventDefault(),(I=j.current)==null||I.focus({preventScroll:!0})}),onUnmountAutoFocus:i,children:s.jsx(Kt,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:p,onPointerDownOutside:m,onFocusOutside:u,onInteractOutside:l,onDismiss:g,children:s.jsx(cn,{asChild:!0,...P,dir:M.dir,orientation:"vertical",loop:o,currentTabStopId:U,onCurrentTabStopIdChange:J,onEntryFocus:x(f,w=>{M.isUsingKeyboardRef.current||w.preventDefault()}),preventScrollOnEntryFocus:!0,children:s.jsx($t,{role:"menu","aria-orientation":"vertical","data-state":ut(b.open),"data-radix-menu-content":"",dir:M.dir,...R,...h,ref:C,style:{outline:"none",...h.style},onKeyDown:x(h.onKeyDown,w=>{const E=w.target.closest("[data-radix-menu-content]")===w.currentTarget,N=w.ctrlKey||w.altKey||w.metaKey,ue=w.key.length===1;E&&(w.key==="Tab"&&w.preventDefault(),!N&&ue&&At(w.key));const ie=j.current;if(w.target!==ie||!ln.includes(w.key))return;w.preventDefault();const Y=Z().filter(K=>!K.disabled).map(K=>K.ref.current);Ke.includes(w.key)&&Y.reverse(),Tn(Y)}),onBlur:x(e.onBlur,w=>{w.currentTarget.contains(w.target)||(window.clearTimeout(L.current),O.current="")}),onPointerMove:x(e.onPointerMove,H(w=>{const I=w.target,E=ee.current!==w.clientX;if(w.currentTarget.contains(I)&&E){const N=w.clientX>ee.current?"right":"left";Q.current=N,ee.current=w.clientX}}))})})})})})})});ze.displayName=y;var Rn="MenuGroup",Me=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e;return s.jsx(T.div,{role:"group",...o,ref:n})});Me.displayName=Rn;var bn="MenuLabel",Xe=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e;return s.jsx(T.div,{...o,ref:n})});Xe.displayName=bn;var te="MenuItem",Ee="menu.itemSelect",se=r.forwardRef((e,n)=>{const{disabled:t=!1,onSelect:o,...a}=e,c=r.useRef(null),i=q(te,e.__scopeMenu),d=ge(te,e.__scopeMenu),f=$(n,c),p=r.useRef(!1),m=()=>{const u=c.current;if(!t&&u){const l=new CustomEvent(Ee,{bubbles:!0,cancelable:!0});u.addEventListener(Ee,g=>o==null?void 0:o(g),{once:!0}),Ot(u,l),l.defaultPrevented?p.current=!1:i.onClose()}};return s.jsx(He,{...a,ref:f,disabled:t,onClick:x(e.onClick,m),onPointerDown:u=>{var l;(l=e.onPointerDown)==null||l.call(e,u),p.current=!0},onPointerUp:x(e.onPointerUp,u=>{var l;p.current||(l=u.currentTarget)==null||l.click()}),onKeyDown:x(e.onKeyDown,u=>{const l=d.searchRef.current!=="";t||l&&u.key===" "||pe.includes(u.key)&&(u.currentTarget.click(),u.preventDefault())})})});se.displayName=te;var He=r.forwardRef((e,n)=>{const{__scopeMenu:t,disabled:o=!1,textValue:a,...c}=e,i=ge(te,t),d=Ue(t),f=r.useRef(null),p=$(n,f),[m,u]=r.useState(!1),[l,g]=r.useState("");return r.useEffect(()=>{const v=f.current;v&&g((v.textContent??"").trim())},[c.children]),s.jsx(X.ItemSlot,{scope:t,disabled:o,textValue:a??l,children:s.jsx(un,{asChild:!0,...d,focusable:!o,children:s.jsx(T.div,{role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...c,ref:p,onPointerMove:x(e.onPointerMove,H(v=>{o?i.onItemLeave(v):(i.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:x(e.onPointerLeave,H(v=>i.onItemLeave(v))),onFocus:x(e.onFocus,()=>u(!0)),onBlur:x(e.onBlur,()=>u(!1))})})})}),In="MenuCheckboxItem",We=r.forwardRef((e,n)=>{const{checked:t=!1,onCheckedChange:o,...a}=e;return s.jsx(et,{scope:e.__scopeMenu,checked:t,children:s.jsx(se,{role:"menuitemcheckbox","aria-checked":ne(t)?"mixed":t,...a,ref:n,"data-state":_e(t),onSelect:x(a.onSelect,()=>o==null?void 0:o(ne(t)?!0:!t),{checkForDefaultPrevented:!1})})})});We.displayName=In;var qe="MenuRadioGroup",[yn,En]=F(qe,{value:void 0,onValueChange:()=>{}}),Ze=r.forwardRef((e,n)=>{const{value:t,onValueChange:o,...a}=e,c=ve(o);return s.jsx(yn,{scope:e.__scopeMenu,value:t,onValueChange:c,children:s.jsx(Me,{...a,ref:n})})});Ze.displayName=qe;var Je="MenuRadioItem",Qe=r.forwardRef((e,n)=>{const{value:t,...o}=e,a=En(Je,e.__scopeMenu),c=t===a.value;return s.jsx(et,{scope:e.__scopeMenu,checked:c,children:s.jsx(se,{role:"menuitemradio","aria-checked":c,...o,ref:n,"data-state":_e(c),onSelect:x(o.onSelect,()=>{var i;return(i=a.onValueChange)==null?void 0:i.call(a,t)},{checkForDefaultPrevented:!1})})})});Qe.displayName=Je;var Ce="MenuItemIndicator",[et,Sn]=F(Ce,{checked:!1}),tt=r.forwardRef((e,n)=>{const{__scopeMenu:t,forceMount:o,...a}=e,c=Sn(Ce,t);return s.jsx(oe,{present:o||ne(c.checked)||c.checked===!0,children:s.jsx(T.span,{...a,ref:n,"data-state":_e(c.checked)})})});tt.displayName=Ce;var Dn="MenuSeparator",nt=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e;return s.jsx(T.div,{role:"separator","aria-orientation":"horizontal",...o,ref:n})});nt.displayName=Dn;var Pn="MenuArrow",ot=r.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e,a=ae(t);return s.jsx(Ut,{...a,...o,ref:n})});ot.displayName=Pn;var Nn="MenuSub",[Lo,rt]=F(Nn),z="MenuSubTrigger",at=r.forwardRef((e,n)=>{const t=k(z,e.__scopeMenu),o=q(z,e.__scopeMenu),a=rt(z,e.__scopeMenu),c=ge(z,e.__scopeMenu),i=r.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:f}=c,p={__scopeMenu:e.__scopeMenu},m=r.useCallback(()=>{i.current&&window.clearTimeout(i.current),i.current=null},[]);return r.useEffect(()=>m,[m]),r.useEffect(()=>{const u=d.current;return()=>{window.clearTimeout(u),f(null)}},[d,f]),s.jsx(we,{asChild:!0,...p,children:s.jsx(He,{id:a.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":a.contentId,"data-state":ut(t.open),...e,ref:De(n,a.onTriggerChange),onClick:u=>{var l;(l=e.onClick)==null||l.call(e,u),!(e.disabled||u.defaultPrevented)&&(u.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:x(e.onPointerMove,H(u=>{c.onItemEnter(u),!u.defaultPrevented&&!e.disabled&&!t.open&&!i.current&&(c.onPointerGraceIntentChange(null),i.current=window.setTimeout(()=>{t.onOpenChange(!0),m()},100))})),onPointerLeave:x(e.onPointerLeave,H(u=>{var g,v;m();const l=(g=t.content)==null?void 0:g.getBoundingClientRect();if(l){const h=(v=t.content)==null?void 0:v.dataset.side,b=h==="right",M=b?-5:5,R=l[b?"left":"right"],P=l[b?"right":"left"];c.onPointerGraceIntentChange({area:[{x:u.clientX+M,y:u.clientY},{x:R,y:l.top},{x:P,y:l.top},{x:P,y:l.bottom},{x:R,y:l.bottom}],side:h}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(u),u.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:x(e.onKeyDown,u=>{var g;const l=c.searchRef.current!=="";e.disabled||l&&u.key===" "||fn[o.dir].includes(u.key)&&(t.onOpenChange(!0),(g=t.content)==null||g.focus(),u.preventDefault())})})})});at.displayName=z;var st="MenuSubContent",ct=r.forwardRef((e,n)=>{const t=Ve(y,e.__scopeMenu),{forceMount:o=t.forceMount,...a}=e,c=k(y,e.__scopeMenu),i=q(y,e.__scopeMenu),d=rt(st,e.__scopeMenu),f=r.useRef(null),p=$(n,f);return s.jsx(X.Provider,{scope:e.__scopeMenu,children:s.jsx(oe,{present:o||c.open,children:s.jsx(X.Slot,{scope:e.__scopeMenu,children:s.jsx(he,{id:d.contentId,"aria-labelledby":d.triggerId,...a,ref:p,align:"start",side:i.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:m=>{var u;i.isUsingKeyboardRef.current&&((u=f.current)==null||u.focus()),m.preventDefault()},onCloseAutoFocus:m=>m.preventDefault(),onFocusOutside:x(e.onFocusOutside,m=>{m.target!==d.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:x(e.onEscapeKeyDown,m=>{i.onClose(),m.preventDefault()}),onKeyDown:x(e.onKeyDown,m=>{var g;const u=m.currentTarget.contains(m.target),l=pn[i.dir].includes(m.key);u&&l&&(c.onOpenChange(!1),(g=d.trigger)==null||g.focus(),m.preventDefault())})})})})})});ct.displayName=st;function ut(e){return e?"open":"closed"}function ne(e){return e==="indeterminate"}function _e(e){return ne(e)?"indeterminate":e?"checked":"unchecked"}function Tn(e){const n=document.activeElement;for(const t of e)if(t===n||(t.focus(),document.activeElement!==n))return}function An(e,n){return e.map((t,o)=>e[(n+o)%e.length])}function jn(e,n,t){const a=n.length>1&&Array.from(n).every(p=>p===n[0])?n[0]:n,c=t?e.indexOf(t):-1;let i=An(e,Math.max(c,0));a.length===1&&(i=i.filter(p=>p!==t));const f=i.find(p=>p.toLowerCase().startsWith(a.toLowerCase()));return f!==t?f:void 0}function On(e,n){const{x:t,y:o}=e;let a=!1;for(let c=0,i=n.length-1;c<n.length;i=c++){const d=n[c].x,f=n[c].y,p=n[i].x,m=n[i].y;f>o!=m>o&&t<(p-d)*(o-f)/(m-f)+d&&(a=!a)}return a}function Fn(e,n){if(!n)return!1;const t={x:e.clientX,y:e.clientY};return On(t,n)}function H(e){return n=>n.pointerType==="mouse"?e(n):void 0}var kn=Be,Ln=we,Gn=Ye,Kn=ze,$n=Me,Un=Xe,Bn=se,Vn=We,Yn=Ze,zn=Qe,Xn=tt,Hn=nt,Wn=ot,qn=at,Zn=ct,Re="DropdownMenu",[Jn,Go]=Pe(Re,[$e]),_=$e(),[Qn,it]=Jn(Re),dt=e=>{const{__scopeDropdownMenu:n,children:t,dir:o,open:a,defaultOpen:c,onOpenChange:i,modal:d=!0}=e,f=_(n),p=r.useRef(null),[m=!1,u]=Se({prop:a,defaultProp:c,onChange:i});return s.jsx(Qn,{scope:n,triggerId:le(),triggerRef:p,contentId:le(),open:m,onOpenChange:u,onOpenToggle:r.useCallback(()=>u(l=>!l),[u]),modal:d,children:s.jsx(kn,{...f,open:m,onOpenChange:u,dir:o,modal:d,children:t})})};dt.displayName=Re;var lt="DropdownMenuTrigger",ft=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,disabled:o=!1,...a}=e,c=it(lt,t),i=_(t);return s.jsx(Ln,{asChild:!0,...i,children:s.jsx(T.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...a,ref:De(n,c.triggerRef),onPointerDown:x(e.onPointerDown,d=>{!o&&d.button===0&&d.ctrlKey===!1&&(c.onOpenToggle(),c.open||d.preventDefault())}),onKeyDown:x(e.onKeyDown,d=>{o||(["Enter"," "].includes(d.key)&&c.onOpenToggle(),d.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})})});ft.displayName=lt;var eo="DropdownMenuPortal",pt=e=>{const{__scopeDropdownMenu:n,...t}=e,o=_(n);return s.jsx(Gn,{...o,...t})};pt.displayName=eo;var mt="DropdownMenuContent",vt=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=it(mt,t),c=_(t),i=r.useRef(!1);return s.jsx(Kn,{id:a.contentId,"aria-labelledby":a.triggerId,...c,...o,ref:n,onCloseAutoFocus:x(e.onCloseAutoFocus,d=>{var f;i.current||(f=a.triggerRef.current)==null||f.focus(),i.current=!1,d.preventDefault()}),onInteractOutside:x(e.onInteractOutside,d=>{const f=d.detail.originalEvent,p=f.button===0&&f.ctrlKey===!0,m=f.button===2||p;(!a.modal||m)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});vt.displayName=mt;var to="DropdownMenuGroup",no=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx($n,{...a,...o,ref:n})});no.displayName=to;var oo="DropdownMenuLabel",wt=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(Un,{...a,...o,ref:n})});wt.displayName=oo;var ro="DropdownMenuItem",xt=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(Bn,{...a,...o,ref:n})});xt.displayName=ro;var ao="DropdownMenuCheckboxItem",gt=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(Vn,{...a,...o,ref:n})});gt.displayName=ao;var so="DropdownMenuRadioGroup",co=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(Yn,{...a,...o,ref:n})});co.displayName=so;var uo="DropdownMenuRadioItem",ht=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(zn,{...a,...o,ref:n})});ht.displayName=uo;var io="DropdownMenuItemIndicator",Mt=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(Xn,{...a,...o,ref:n})});Mt.displayName=io;var lo="DropdownMenuSeparator",Ct=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(Hn,{...a,...o,ref:n})});Ct.displayName=lo;var fo="DropdownMenuArrow",po=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(Wn,{...a,...o,ref:n})});po.displayName=fo;var mo="DropdownMenuSubTrigger",_t=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(qn,{...a,...o,ref:n})});_t.displayName=mo;var vo="DropdownMenuSubContent",Rt=r.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,a=_(t);return s.jsx(Zn,{...a,...o,ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Rt.displayName=vo;var wo=dt,xo=ft,go=pt,bt=vt,It=wt,yt=xt,Et=gt,St=ht,Dt=Mt,Pt=Ct,Nt=_t,Tt=Rt;const Ko=wo,$o=xo,ho=r.forwardRef(({className:e,inset:n,children:t,...o},a)=>s.jsxs(Nt,{ref:a,className:A("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",e),...o,children:[t,s.jsx(Xt,{className:"ml-auto h-4 w-4"})]}));ho.displayName=Nt.displayName;const Mo=r.forwardRef(({className:e,...n},t)=>s.jsx(Tt,{ref:t,className:A("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Mo.displayName=Tt.displayName;const Co=r.forwardRef(({className:e,sideOffset:n=4,...t},o)=>s.jsx(go,{children:s.jsx(bt,{ref:o,sideOffset:n,className:A("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})}));Co.displayName=bt.displayName;const _o=r.forwardRef(({className:e,inset:n,...t},o)=>s.jsx(yt,{ref:o,className:A("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",e),...t}));_o.displayName=yt.displayName;const Ro=r.forwardRef(({className:e,children:n,checked:t,...o},a)=>s.jsxs(Et,{ref:a,className:A("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:t,...o,children:[s.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(Dt,{children:s.jsx(zt,{className:"h-4 w-4"})})}),n]}));Ro.displayName=Et.displayName;const bo=r.forwardRef(({className:e,children:n,...t},o)=>s.jsxs(St,{ref:o,className:A("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[s.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(Dt,{children:s.jsx(Ht,{className:"h-2 w-2 fill-current"})})}),n]}));bo.displayName=St.displayName;const Io=r.forwardRef(({className:e,inset:n,...t},o)=>s.jsx(It,{ref:o,className:A("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",e),...t}));Io.displayName=It.displayName;const yo=r.forwardRef(({className:e,...n},t)=>s.jsx(Pt,{ref:t,className:A("-mx-1 my-1 h-px bg-muted",e),...n}));yo.displayName=Pt.displayName;export{Ko as D,ko as E,$o as a,Co as b,Io as c,_o as d};
