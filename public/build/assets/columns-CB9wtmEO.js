import{j as e,y as s}from"./app-CGyVb8Is.js";import{B as t}from"./button-BKa0i_w_.js";import{D as i,a as n,E as c,b as l,c as d,d as a}from"./dropdown-menu-hagaMFvJ.js";import"./index-BI2RUVH-.js";import"./index-Bb4qSo10.js";import"./utils-BM_CldAA.js";import"./createLucideIcon-BQUYwqWN.js";import"./index-CCQwTmIK.js";import"./index-U3H4-tlN.js";import"./index-BvvkK5KK.js";import"./Combination-DO2X4E2-.js";import"./index-DroKjZ_C.js";import"./check-CCoGvReR.js";const C=[{accessorKey:"name",header:"Nama"},{accessorKey:"subject",header:"Mata Pelajaran"},{accessorKey:"class",header:"Kelas"},{accessorKey:"email",header:"E-Mail"},{id:"actions",cell:({row:o})=>{const r=o.original;return e.jsxs(i,{children:[e.jsx(n,{asChild:!0,children:e.jsxs(t,{variant:"ghost",className:"h-8 w-8 p-0",children:[e.jsx("span",{className:"sr-only",children:"Open Menu"}),e.jsx(c,{className:"h-4 w-4"})]})}),e.jsxs(l,{align:"end",children:[e.jsx(d,{children:"Actions"}),e.jsx(a,{onClick:()=>s.get(route("teacher.edit",{teacher:r.id})),children:"Ubah"}),e.jsx(a,{onClick:()=>s.delete(route("teacher.destroy",{teacher:r.id})),children:"Hapus"})]})]})}}];export{C as columns};