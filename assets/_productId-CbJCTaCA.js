import{b as r,j as t,C as o,T as i,L as n,a as c,R as d}from"./index-CSgOJaiD.js";import{P as l,b as x}from"./product-BprXJ0AR.js";import{C as m}from"./contact-us-BGb3Pwrp.js";const h=function(){const{productId:e}=r.useLoaderData(),s=l.find(a=>a.id===e);return s?t.jsxs(o,{maxWidth:"lg",sx:{py:2},children:[t.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-3",children:[t.jsx(i,{variant:"h4",color:"primary.dark",sx:{fontWeight:700},children:s==null?void 0:s.title}),t.jsxs("div",{className:"flex justify-end gap-4 w-full",children:[t.jsx(n,{to:"/products",children:t.jsx(c,{size:"large",color:"secondary",variant:"outlined",children:"Back to Products"})}),t.jsx(m,{})]})]}),t.jsx("div",{className:"mt-4",children:t.jsx(x,{product:s,showLearnMore:!1})}),t.jsx("div",{className:"mt-4",children:s.detail&&d.createElement(s.detail)})]}):t.jsx("div",{children:"Product not found"})};export{h as component};
