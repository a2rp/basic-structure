import { Link } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: min(100%, 1120px);
        margin: 0 auto;
    `,
    Hero: styled.section`
        max-width: 760px;
        padding: 48px 0 64px;
    `,
    Eyebrow: styled.p`
        margin: 0 0 14px;
        color: #79b8ff;
        font-size: 0.82rem;
        font-weight: 800;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,
    Title: styled.h1`
        margin: 0;
        color: #ffffff;
        font-size: clamp(2.6rem, 8vw, 5.6rem);
        line-height: 0.98;
        letter-spacing: -0.07em;
    `,
    Description: styled.p`
        max-width: 650px;
        margin: 26px 0 30px;
        color: #b7c8da;
        font-size: 1.1rem;
        line-height: 1.7;
    `,
    Actions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    `,
    PrimaryLink: styled(Link)`
        border-radius: 10px;
        padding: 12px 16px;
        background: #5ba8ff;
        color: #06101e;
        font-weight: 800;
        text-decoration: none;
        &:hover {
            background: #86c2ff;
        }
    `,
    SecondaryLink: styled.a`
        border: 1px solid #345578;
        border-radius: 10px;
        padding: 11px 16px;
        color: #b9dcff;
        font-weight: 800;
        text-decoration: none;
        &:hover {
            background: #142b46;
        }
    `,
    FeatureGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,
    FeatureCard: styled.article`
        min-height: 170px;
        padding: 22px;
        border: 1px solid #263f5c;
        border-radius: 16px;
        background: #0d1d31;
    `,
    FeatureTitle: styled.h2`
        margin: 0 0 10px;
        color: #ffffff;
        font-size: 1.05rem;
    `,
    FeatureDescription: styled.p`
        margin: 0;
        color: #9fb3ca;
        line-height: 1.6;
    `,
};
