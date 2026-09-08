import{d as e,L as a,j as r}from"./index-Bb2MAVDN.js";const t={Wrapper:e.div`
        width: min(100%, 1120px);
        margin: 0 auto;
    `,Hero:e.section`
        max-width: 760px;
        padding: 48px 0 64px;
    `,Eyebrow:e.p`
        margin: 0 0 14px;
        color: #79b8ff;
        font-size: 0.82rem;
        font-weight: 800;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,Title:e.h1`
        margin: 0;
        color: #ffffff;
        font-size: clamp(2.6rem, 8vw, 5.6rem);
        line-height: 0.98;
        letter-spacing: -0.07em;
    `,Description:e.p`
        max-width: 650px;
        margin: 26px 0 30px;
        color: #b7c8da;
        font-size: 1.1rem;
        line-height: 1.7;
    `,Actions:e.div`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    `,PrimaryLink:e(a)`
        border-radius: 10px;
        padding: 12px 16px;
        background: #5ba8ff;
        color: #06101e;
        font-weight: 800;
        text-decoration: none;
        &:hover {
            background: #86c2ff;
        }
    `,SecondaryLink:e.a`
        border: 1px solid #345578;
        border-radius: 10px;
        padding: 11px 16px;
        color: #b9dcff;
        font-weight: 800;
        text-decoration: none;
        &:hover {
            background: #142b46;
        }
    `,FeatureGrid:e.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,FeatureCard:e.article`
        min-height: 170px;
        padding: 22px;
        border: 1px solid #263f5c;
        border-radius: 16px;
        background: #0d1d31;
    `,FeatureTitle:e.h2`
        margin: 0 0 10px;
        color: #ffffff;
        font-size: 1.05rem;
    `,FeatureDescription:e.p`
        margin: 0;
        color: #9fb3ca;
        line-height: 1.6;
    `},o=[{title:"Clear routing",description:"Home, About, and fallback routes are separated into focused page modules."},{title:"Lazy loading",description:"Route components load on demand and show a small Suspense loading state."},{title:"GitHub Pages ready",description:"The Vite base path and 404 fallback support static hosting deployments."}],d=()=>r.jsxs(t.Wrapper,{children:[r.jsxs(t.Hero,{children:[r.jsx(t.Eyebrow,{children:"React starter template"}),r.jsx(t.Title,{children:"Build a solid front-end foundation."}),r.jsx(t.Description,{children:"A practical Vite and React structure with client-side routing, reusable styled components, lazy pages, and a responsive layout ready for the next idea."}),r.jsxs(t.Actions,{children:[r.jsx(t.PrimaryLink,{to:"/about",children:"Explore the project"}),r.jsx(t.SecondaryLink,{href:"https://github.com/a2rp",target:"_blank",rel:"noopener noreferrer",children:"View GitHub"})]})]}),r.jsx(t.FeatureGrid,{children:o.map(i=>r.jsxs(t.FeatureCard,{children:[r.jsx(t.FeatureTitle,{children:i.title}),r.jsx(t.FeatureDescription,{children:i.description})]},i.title))})]});export{d as default};
