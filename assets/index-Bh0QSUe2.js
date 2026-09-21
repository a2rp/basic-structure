import{d as t,L as n,u as a,j as e,k as s,l}from"./index-zCUlPu-b.js";const r=`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 15px;
    border: 1px solid #345578;
    border-radius: 10px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

    &:hover {
        border-color: rgba(121, 184, 255, 0.65);
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
        text-shadow: 0 0 12px rgba(121, 184, 255, 0.55);
    }
`,o={Wrapper:t.section`
        width: min(100%, 760px);
        min-height: 62vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        text-align: center;
    `,Code:t.p`
        margin: 0;
        color: rgba(121, 184, 255, 0.26);
        font-size: clamp(5rem, 18vw, 10rem);
        font-weight: 900;
        letter-spacing: -0.09em;
        line-height: 0.78;
    `,Eyebrow:t.p`
        margin: 26px 0 10px;
        color: #79b8ff;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-transform: uppercase;
    `,Title:t.h1`
        margin: 0;
        color: #ffffff;
        font-size: clamp(2rem, 6vw, 4rem);
        letter-spacing: -0.055em;
        line-height: 1;
    `,Subtitle:t.p`
        max-width: 580px;
        margin: 22px auto 0;
        color: #aebfd3;
        line-height: 1.7;
    `,Actions:t.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        margin-top: 28px;
    `,BackButton:t.button`
        ${r}
        color: #06101e;
        background: #79b8ff;
    `,HomeLink:t(n)`
        ${r}
        color: #d0e7ff;
        background: rgba(13, 29, 49, 0.75);
    `},c=()=>{const i=a();return e.jsxs(o.Wrapper,{"aria-labelledby":"not-found-title",children:[e.jsx(o.Code,{children:"404"}),e.jsx(o.Eyebrow,{children:"Route not found"}),e.jsx(o.Title,{id:"not-found-title",children:"This page is outside the structure."}),e.jsx(o.Subtitle,{children:"The requested route does not exist. Return to the previous page or continue from the home page."}),e.jsxs(o.Actions,{children:[e.jsxs(o.BackButton,{type:"button",onClick:()=>i(-1),children:[e.jsx(s,{"aria-hidden":"true"})," Go back"]}),e.jsxs(o.HomeLink,{to:"/",children:[e.jsx(l,{"aria-hidden":"true"})," Go home"]})]})]})};export{c as default};
