import{j as t,Y as s,y as n}from"./app-D0TEZtF_.js";import{A as l}from"./AuthenticatedLayout-CxcCMuTF.js";import{t as p,z as r}from"./index-CFcqtvmI.js";import{u as d}from"./index.esm-CPnvUdU8.js";import{U as m}from"./UserRoles-BJkDelhi.js";import x from"./UserForm-My7GskaI.js";import"./ApplicationLogo-wpWptEP_.js";import"./transition-CSzq7egI.js";import"./button-C8qJ7wwp.js";import"./index-Ba78Vw25.js";import"./index-Bb4qSo10.js";import"./utils-BM_CldAA.js";import"./form-C3kldaOe.js";import"./index-Cv3e3Swi.js";import"./input-DlP-8wz2.js";import"./index-D0WX96VC.js";import"./index-CntxFyhp.js";import"./Combination-DP1OhgK_.js";import"./index-BXmZ7JSj.js";import"./createLucideIcon-DSZJXv8A.js";import"./check-Bk0hvyvr.js";const u=r.object({name:r.string().min(3).max(191),email:r.string().email(),password:r.string().min(6).max(191),role:r.nativeEnum(m)});function O({user:e}){const i=d({resolver:p(u),defaultValues:{name:"",email:"",password:"",role:m.SUPERVISOR},values:{name:e.name,email:e.email,password:"",role:e.role}});function o(a){n.put(route("user.update",{user:e.id}),a)}return t.jsxs(l,{header:t.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Edit Data Pengguna"}),children:[t.jsx(s,{title:"Data Pengguna"}),t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:t.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:t.jsx("div",{className:"p-6 text-gray-900",children:t.jsx(x,{form:i,onSubmit:o})})})})})]})}export{O as default,u as editUserFormSchema};