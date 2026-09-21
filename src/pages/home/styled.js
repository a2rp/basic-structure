import { Link } from "react-router-dom";
import styled from "styled-components";

const hoverEffect = `
    border-color: rgba(121, 184, 255, 0.65);
    box-shadow: 0 20px 46px rgba(0, 0, 0, 0.28);
    text-shadow: 0 0 12px rgba(121, 184, 255, 0.5);
`;

export const Styled = {
    Wrapper: styled.div`
        width: min(100%, 1120px);
        margin: 0 auto;
    `,
    Hero: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(340px, 0.78fr);
        align-items: center;
        gap: clamp(40px, 7vw, 90px);
        padding: 36px 0 104px;

        @media (max-width: 850px) {
            grid-template-columns: 1fr;
            padding-bottom: 82px;
        }
    `,
    HeroCopy: styled.div`
        min-width: 0;
    `,
    Eyebrow: styled.p`
        margin: 0 0 14px;
        color: #79b8ff;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        text-transform: uppercase;
    `,
    Title: styled.h1`
        max-width: 700px;
        margin: 0;
        color: #ffffff;
        font-size: clamp(2.8rem, 7.5vw, 6rem);
        line-height: 0.96;
        letter-spacing: -0.075em;

        span {
            color: #79b8ff;
        }
    `,
    Description: styled.p`
        max-width: 650px;
        margin: 26px 0 30px;
        color: #b7c8da;
        font-size: clamp(1rem, 1.7vw, 1.12rem);
        line-height: 1.75;
    `,
    Actions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    `,
    PrimaryLink: styled(Link)`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        border: 1px solid transparent;
        border-radius: 10px;
        background: #79b8ff;
        color: #06101e;
        font-weight: 800;
        text-decoration: none;
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${hoverEffect}
        }
    `,
    SecondaryLink: styled.a`
        display: inline-flex;
        align-items: center;
        padding: 11px 16px;
        border: 1px solid #345578;
        border-radius: 10px;
        color: #d0e7ff;
        font-weight: 800;
        text-decoration: none;
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${hoverEffect}
        }
    `,
    StructureCard: styled.aside`
        min-width: 0;
        padding: 24px;
        border: 1px solid rgba(121, 184, 255, 0.38);
        border-radius: 22px;
        background: linear-gradient(145deg, rgba(18, 44, 72, 0.95), rgba(9, 25, 43, 0.94));
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.32);
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${hoverEffect}
        }
    `,
    StructureTop: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        padding-bottom: 18px;
        border-bottom: 1px solid rgba(126, 166, 207, 0.22);

        span {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            font-weight: 800;
        }

        svg {
            color: #79b8ff;
        }

        small {
            padding: 6px 9px;
            border: 1px solid rgba(98, 224, 162, 0.28);
            border-radius: 999px;
            color: #8ce5b8;
            font-weight: 700;
        }
    `,
    StructureList: styled.ol`
        display: grid;
        gap: 12px;
        margin: 20px 0 0;
        padding: 0;
        list-style: none;

        li {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            gap: 13px;
            padding: 13px;
            border: 1px solid rgba(126, 166, 207, 0.2);
            border-radius: 13px;
            background: rgba(4, 17, 31, 0.5);
        }

        li > span {
            color: #79b8ff;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size: 0.75rem;
            font-weight: 800;
        }

        strong,
        small {
            display: block;
        }

        strong {
            color: #ffffff;
            font-size: 0.92rem;
        }

        small {
            margin-top: 3px;
            color: #8ea6bf;
            font-size: 0.76rem;
        }
    `,
    SectionHeading: styled.div`
        max-width: 680px;
        margin-bottom: 28px;

        h2 {
            margin: 0;
            color: #ffffff;
            font-size: clamp(2rem, 4.5vw, 3.8rem);
            line-height: 1;
            letter-spacing: -0.055em;
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
        min-height: 210px;
        padding: 24px;
        border: 1px solid #263f5c;
        border-radius: 17px;
        background: rgba(13, 29, 49, 0.86);
        transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &:hover {
            ${hoverEffect}
        }
    `,
    IconBox: styled.span`
        width: 40px;
        height: 40px;
        display: inline-grid;
        place-items: center;
        border: 1px solid rgba(121, 184, 255, 0.36);
        border-radius: 11px;
        color: #79b8ff;
        background: rgba(4, 17, 31, 0.5);

        svg {
            width: 19px;
            height: 19px;
        }
    `,
    FeatureTitle: styled.h3`
        margin: 28px 0 10px;
        color: #ffffff;
        font-size: 1.06rem;
    `,
    FeatureDescription: styled.p`
        margin: 0;
        color: #9fb3ca;
        line-height: 1.65;
    `,
};
