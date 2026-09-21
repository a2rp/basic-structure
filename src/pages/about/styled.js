import styled from "styled-components";

const hoverEffect = `
    border-color: rgba(121, 184, 255, 0.62);
    box-shadow: 0 20px 46px rgba(0, 0, 0, 0.28);
    text-shadow: 0 0 12px rgba(121, 184, 255, 0.34);
`;

export const Styled = {
    Wrapper: styled.div`
        width: min(100%, 1000px);
        margin: 0 auto;
    `,
    IntroSection: styled.section`
        max-width: 780px;
        padding: 28px 0 54px;
    `,
    Eyebrow: styled.p`
        margin: 0 0 13px;
        color: #79b8ff;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-transform: uppercase;
    `,
    Title: styled.h1`
        margin: 0;
        color: #ffffff;
        font-size: clamp(2.7rem, 7vw, 5.4rem);
        line-height: 0.98;
        letter-spacing: -0.07em;
    `,
    Intro: styled.p`
        max-width: 720px;
        margin: 24px 0 0;
        color: #b7c8da;
        font-size: clamp(1rem, 2vw, 1.12rem);
        line-height: 1.75;
    `,
    ContentGrid: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
        align-items: start;
        gap: 16px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,
    SideColumn: styled.div`
        display: grid;
        gap: 16px;
    `,
    Panel: styled.section`
        padding: 24px;
        border: 1px solid #263f5c;
        border-radius: 17px;
        background: rgba(13, 29, 49, 0.86);
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${hoverEffect}
        }
    `,
    PanelHeading: styled.h2`
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0 0 17px;
        color: #ffffff;
        font-size: 1.15rem;

        svg {
            color: #79b8ff;
        }
    `,
    Text: styled.p`
        margin: 0;
        color: #b7c8da;
        line-height: 1.7;
    `,
    List: styled.ul`
        display: grid;
        gap: 12px;
        margin: 0;
        padding-left: 20px;
        color: #b7c8da;
        line-height: 1.65;

        li::marker {
            color: #79b8ff;
        }
    `,
    AuthorLink: styled.a`
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
            ${hoverEffect}
        }
    `,
};
