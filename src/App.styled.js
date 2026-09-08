import { NavLink, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    `,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 10;
        border-bottom: 1px solid #26364f;
        background: rgba(7, 17, 31, 0.92);
        backdrop-filter: blur(14px);
    `,
    HeaderMain: styled.div`
        width: min(100%, 1120px);
        min-height: 68px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        margin: 0 auto;
        padding: 0 24px;
        @media (max-width: 560px) {
            min-height: 60px;
            padding: 0 16px;
        }
    `,
    Brand: styled(Link)`
        color: #ffffff;
        font-size: 1.05rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        text-decoration: none;
    `,
    Navigation: styled.nav`
        display: flex;
        align-items: center;
        gap: 8px;
    `,
    NavLink: styled(NavLink)`
        border-radius: 9px;
        padding: 9px 12px;
        color: #aebfd3;
        font-size: 0.92rem;
        font-weight: 700;
        text-decoration: none;
        transition: background 160ms ease, color 160ms ease;
        &:hover,
        &.active {
            background: #173455;
            color: #ffffff;
        }
    `,
    Main: styled.main`
        flex: 1;
        width: 100%;
        padding: 108px 24px 48px;
        @media (max-width: 560px) {
            padding: 92px 16px 36px;
        }
    `,
    Loading: styled.div`
        min-height: 55vh;
        display: grid;
        place-items: center;
        color: #9fc9f3;
        &::before {
            width: 28px;
            height: 28px;
            content: "";
            margin-right: 10px;
            display: inline-block;
            border: 3px solid #29496c;
            border-top-color: #79b8ff;
            border-radius: 50%;
            animation: ${spin} 0.8s linear infinite;
        }
    `,
    Footer: styled.footer`
        border-top: 1px solid #26364f;
        background: #07111f;
    `,
    FooterMain: styled.div`
        width: min(100%, 1120px);
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin: 0 auto;
        padding: 18px 24px;
        color: #8ea6bf;
        font-size: 0.82rem;
        @media (max-width: 560px) {
            flex-direction: column;
            padding: 16px;
        }
        a {
            color: #9fc9f3;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    `,
};
