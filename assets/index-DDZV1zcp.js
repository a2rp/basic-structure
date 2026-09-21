import{d as i,j as e,f as n,g as o,h as s,i as l}from"./index-zCUlPu-b.js";const t=`
    border-color: rgba(121, 184, 255, 0.62);
    box-shadow: 0 20px 46px rgba(0, 0, 0, 0.28);
    text-shadow: 0 0 12px rgba(121, 184, 255, 0.34);
`,r={Wrapper:i.div`
        width: min(100%, 1000px);
        margin: 0 auto;
    `,IntroSection:i.section`
        max-width: 780px;
        padding: 28px 0 54px;
    `,Eyebrow:i.p`
        margin: 0 0 13px;
        color: #79b8ff;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-transform: uppercase;
    `,Title:i.h1`
        margin: 0;
        color: #ffffff;
        font-size: clamp(2.7rem, 7vw, 5.4rem);
        line-height: 0.98;
        letter-spacing: -0.07em;
    `,Intro:i.p`
        max-width: 720px;
        margin: 24px 0 0;
        color: #b7c8da;
        font-size: clamp(1rem, 2vw, 1.12rem);
        line-height: 1.75;
    `,ContentGrid:i.div`
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
        align-items: start;
        gap: 16px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,SideColumn:i.div`
        display: grid;
        gap: 16px;
    `,Panel:i.section`
        padding: 24px;
        border: 1px solid #263f5c;
        border-radius: 17px;
        background: rgba(13, 29, 49, 0.86);
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${t}
        }
    `,PanelHeading:i.h2`
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0 0 17px;
        color: #ffffff;
        font-size: 1.15rem;

        svg {
            color: #79b8ff;
        }
    `,Text:i.p`
        margin: 0;
        color: #b7c8da;
        line-height: 1.7;
    `,List:i.ul`
        display: grid;
        gap: 12px;
        margin: 0;
        padding-left: 20px;
        color: #b7c8da;
        line-height: 1.65;

        li::marker {
            color: #79b8ff;
        }
    `,AuthorLink:i.a`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-top: 20px;
        padding: 10px 13px;
        border: 1px solid #345578;
        border-radius: 9px;
        color: #d0e7ff;
        font-weight: 800;
        text-decoration: none;
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${t}
        }
    `},d=["React Router pages for home, about, and unknown URLs.","Lazy loaded route modules with a shared Suspense fallback.","Styled-components for focused component-level styles.","Vite configuration prepared for GitHub Pages hosting.","Responsive navigation, content, and footer layouts."],c=()=>e.jsxs(r.Wrapper,{children:[e.jsxs(r.IntroSection,{children:[e.jsx(r.Eyebrow,{children:"About the starter"}),e.jsx(r.Title,{children:"A small structure built for clarity."}),e.jsx(r.Intro,{children:"Basic Structure keeps the application shell, routes, pages, and styles separate so a new project can grow without turning the entry file into a monolith."})]}),e.jsxs(r.ContentGrid,{children:[e.jsxs(r.Panel,{children:[e.jsxs(r.PanelHeading,{children:[e.jsx(n,{"aria-hidden":"true"})," What is included"]}),e.jsx(r.List,{children:d.map(a=>e.jsx("li",{children:a},a))})]}),e.jsxs(r.SideColumn,{children:[e.jsxs(r.Panel,{children:[e.jsxs(r.PanelHeading,{children:[e.jsx(o,{"aria-hidden":"true"})," Project purpose"]}),e.jsx(r.Text,{children:"Use it as a clean starting point for small portfolios, documentation sites, learning projects, or focused multi-page interfaces."})]}),e.jsxs(r.Panel,{children:[e.jsxs(r.PanelHeading,{children:[e.jsx(s,{"aria-hidden":"true"})," Built by"]}),e.jsx(r.Text,{children:"Ashish Ranjan, a full-stack web developer focused on clear interfaces and dependable projects."}),e.jsxs(r.AuthorLink,{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:["Visit portfolio ",e.jsx(l,{"aria-hidden":"true"})]})]})]})]})]});export{c as default};
