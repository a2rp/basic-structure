import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const hoverEffect = `
    border-color: rgba(114, 182, 255, 0.62);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
    text-shadow: 0 0 12px rgba(121, 184, 255, 0.65);
`;

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    `,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 20;
        border-bottom: 1px solid rgba(126, 166, 207, 0.2);
        background: rgba(7, 17, 31, 0.9);
        backdrop-filter: blur(16px);

        &.is-hidden {
            transform: translateY(-110%);
        }
    `,
    HeaderMain: styled.div`
        position: relative;
        width: min(100% - 40px, 1120px);
        min-height: 74px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin: 0 auto;

        @media (max-width: 640px) {
            width: calc(100% - 28px);
            min-height: 68px;
        }
    `,
    Brand: styled(Link)`
        display: inline-flex;
        align-items: center;
        gap: 11px;
        min-width: 0;
        color: #ffffff;
        text-decoration: none;

        strong,
        small {
            display: block;
        }

        strong {
            font-size: 1rem;
            letter-spacing: -0.02em;
        }

        small {
            margin-top: 3px;
            color: #8ea6bf;
            font-size: 0.7rem;
        }
    `,
    BrandMark: styled.span`
        width: 42px;
        height: 42px;
        display: grid;
        flex: 0 0 auto;
        place-items: center;
        border: 1px solid rgba(121, 184, 255, 0.42);
        border-radius: 12px;
        background: #0b1b2d;

        img {
            width: 30px;
            height: 30px;
            object-fit: contain;
        }
    `,
    Navigation: styled.nav`
        display: flex;
        align-items: center;
        gap: 8px;

        @media (max-width: 640px) {
            display: none;
        }
    `,
    NavLink: styled(NavLink)`
        padding: 9px 12px;
        border: 1px solid transparent;
        border-radius: 9px;
        color: #aebfd3;
        font-size: 0.92rem;
        font-weight: 700;
        text-decoration: none;
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${hoverEffect}
        }

        &.active {
            border-color: #345578;
            color: #ffffff;
            background: #142b46;
        }
    `,
    MenuButton: styled.button`
        width: 42px;
        height: 42px;
        display: none;
        flex: 0 0 auto;
        place-items: center;
        border: 1px solid #345578;
        border-radius: 10px;
        color: #ffffff;
        background: #0b1b2d;
        cursor: pointer;
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${hoverEffect}
        }

        svg {
            width: 20px;
            height: 20px;
        }

        @media (max-width: 640px) {
            display: inline-grid;
        }
    `,
    MenuBackdrop: styled.div`
        position: fixed;
        inset: 68px 0 0;
        z-index: 0;
        background: rgba(2, 8, 16, 0.7);
    `,
    MobileNavigation: styled.nav`
        position: fixed;
        top: 78px;
        right: 14px;
        z-index: 2;
        width: min(260px, calc(100vw - 28px));
        display: grid;
        gap: 4px;
        padding: 10px;
        border: 1px solid #345578;
        border-radius: 15px;
        background: #0b1b2d;
        box-shadow: 0 22px 50px rgba(0, 0, 0, 0.4);
    `,
    Main: styled.main`
        width: 100%;
        flex: 1;
        padding: 120px 24px 72px;

        @media (max-width: 640px) {
            padding: 102px 14px 56px;
        }
    `,
    Loading: styled.div`
        min-height: 55vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #9fc9f3;
        font-weight: 700;

        svg {
            width: 22px;
            height: 22px;
        }
    `,
    Footer: styled.footer`
        border-top: 1px solid rgba(126, 166, 207, 0.2);
        background: rgba(3, 12, 22, 0.76);
    `,
    FooterMain: styled.div`
        width: min(100% - 40px, 1120px);
        min-height: 96px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin: 0 auto;

        p {
            margin: 0;
            color: #8ea6bf;
            font-size: 0.82rem;
        }

        p a {
            color: #f4f7fb;
            font-weight: 800;
            text-underline-offset: 3px;
        }

        @media (max-width: 700px) {
            width: calc(100% - 28px);
            align-items: flex-start;
            flex-direction: column;
            padding: 24px 0;
        }
    `,
    FooterLinks: styled.nav`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;

        @media (max-width: 700px) {
            justify-content: flex-start;
        }
    `,
    FooterIconLink: styled.a`
        width: 34px;
        height: 34px;
        display: inline-grid;
        place-items: center;
        border: 1px solid rgba(126, 166, 207, 0.28);
        border-radius: 10px;
        color: #aebfd3;
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${hoverEffect}
        }

        svg {
            width: 15px;
            height: 15px;
        }
    `,
    BackToTop: styled.button`
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 15;
        width: 44px;
        height: 44px;
        display: inline-grid;
        place-items: center;
        border: 1px solid rgba(121, 184, 255, 0.5);
        border-radius: 12px;
        color: #06101e;
        background: #79b8ff;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &.is-visible {
            opacity: 1;
            pointer-events: auto;
        }

        &:hover {
            border-color: #06101e;
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
            text-shadow: 0 0 12px rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 640px) {
            right: 14px;
            bottom: 14px;
        }
    `,
};
