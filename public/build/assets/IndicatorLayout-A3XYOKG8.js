import{r as o,j as a}from"./app-B3R2srtS.js";import{c as s}from"./utils-BM_CldAA.js";import x from"./IndicatorItemCheckbox-Bumr3ECv.js";import"./index-CGF_roVM.js";import"./index-akNM-wOZ.js";import"./index-BViagnjY.js";import"./index-DSX-uOE2.js";import"./index-BntWvZ7h.js";import"./index-D68yHrVo.js";import"./check--7ww4nwb.js";import"./createLucideIcon-DW4SD-ll.js";import"./form-MNrCy9Wn.js";import"./index.esm-CmS206mc.js";import"./index-Bb4qSo10.js";const i=o.forwardRef(({className:r,...e},t)=>a.jsx("div",{ref:t,className:s("rounded-lg border bg-card text-card-foreground shadow-sm",r),...e}));i.displayName="Card";const m=o.forwardRef(({className:r,...e},t)=>a.jsx("div",{ref:t,className:s("flex flex-col space-y-1.5 p-6",r),...e}));m.displayName="CardHeader";const n=o.forwardRef(({className:r,...e},t)=>a.jsx("h3",{ref:t,className:s("text-2xl font-semibold leading-none tracking-tight",r),...e}));n.displayName="CardTitle";const f=o.forwardRef(({className:r,...e},t)=>a.jsx("p",{ref:t,className:s("text-sm text-muted-foreground",r),...e}));f.displayName="CardDescription";const c=o.forwardRef(({className:r,...e},t)=>a.jsx("div",{ref:t,className:s("p-6 pt-0",r),...e}));c.displayName="CardContent";const C=o.forwardRef(({className:r,...e},t)=>a.jsx("div",{ref:t,className:s("flex items-center p-6 pt-0",r),...e}));C.displayName="CardFooter";function F({indicator:r,name:e}){const t=r.items.map((p,l)=>{const d=`${e}_${l}`;return a.jsx(x,{label:p,name:d},d)});return a.jsxs(i,{children:[a.jsx(m,{children:a.jsx(n,{children:r.name})}),a.jsx(c,{children:t})]})}export{F as default};