import{j as e,y as t}from"./app-CWRKpF9D.js";import{B as i}from"./badge-C4i5UsIQ.js";import{B as l}from"./button-yH9ZmRkz.js";import{D as c,a as d,E as p,b as m,c as u,d as n}from"./dropdown-menu-CwUN-c8F.js";import{U as a}from"./UserRoles-BJkDelhi.js";import"./index-Bb4qSo10.js";import"./utils-BM_CldAA.js";import"./index-DV_tEFSJ.js";import"./createLucideIcon-CI-txiaL.js";import"./index-CxIqdrmJ.js";import"./index-xMMBz6p4.js";import"./index-B8OLFZVb.js";import"./Combination-Cbf5zOSJ.js";import"./index-D5sCx--E.js";import"./check-BynwKwKm.js";const k=[{accessorKey:"name",header:"Nama"},{accessorKey:"email",header:"E-Mail"},{accessorKey:"role",header:"Role",cell:({row:o})=>{const r=o.getValue("role");let s="";switch(r){case a.ADMIN:s="border-transparent bg-green-100 text-green-800 hover:bg-green-300";break;case a.SUPERADMIN:s="border-transparent bg-red-100 text-red-800 hover:bg-red-300";break;case a.SUPERVISOR:s="border-transparent bg-blue-100 text-blue-800 hover:bg-blue-300";break}return e.jsx(i,{className:s,children:r.charAt(0).toUpperCase()+r.slice(1)})}},{id:"actions",cell:({row:o})=>{const r=o.original;return e.jsxs(c,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(l,{variant:"ghost",className:"h-8 w-8 p-0",children:[e.jsx("span",{className:"sr-only",children:"Open Menu"}),e.jsx(p,{className:"h-4 w-4"})]})}),e.jsxs(m,{align:"end",children:[e.jsx(u,{children:"Actions"}),e.jsx(n,{onClick:()=>t.get(route("user.edit",{user:r.id})),children:"Ubah"}),e.jsx(n,{onClick:()=>t.delete(route("user.destroy",{user:r.id})),children:"Hapus"})]})]})}}];export{k as userColumns};