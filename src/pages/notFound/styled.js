import { Link } from "react-router-dom";
import styled from "styled-components";

const buttonStyles = `
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
`;

export const Styled = {
    Wrapper: styled.section`
        width: min(100%, 760px);
        min-height: 62vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        text-align: center;
    `,
    Code: styled.p`
        margin: 0;
        color: rgba(121, 184, 255, 0.26);
        font-size: clamp(5rem, 18vw, 10rem);
        font-weight: 900;
        letter-spacing: -0.09em;
        line-height: 0.78;
    `,
    Eyebrow: styled.p`
        margin: 26px 0 10px;
        color: #79b8ff;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-transform: uppercase;
    `,
    Title: styled.h1`
        margin: 0;
        color: #ffffff;
        font-size: clamp(2rem, 6vw, 4rem);
        letter-spacing: -0.055em;
        line-height: 1;
    `,
    Subtitle: styled.p`
        max-width: 580px;
        margin: 22px auto 0;
        color: #aebfd3;
        line-height: 1.7;
    `,
    Actions: styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        margin-top: 28px;
    `,
    BackButton: styled.button`
        ${buttonStyles}
        color: #06101e;
        background: #79b8ff;
    `,
    HomeLink: styled(Link)`
        ${buttonStyles}
        color: #d0e7ff;
        background: rgba(13, 29, 49, 0.75);
    `,
};
