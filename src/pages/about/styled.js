import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: min(100%, 760px);
        margin: 0 auto;
    `,
    Eyebrow: styled.p`
        margin: 0 0 12px;
        color: #79b8ff;
        font-size: 0.82rem;
        font-weight: 800;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    `,
    Title: styled.h1`
        margin: 0;
        color: #ffffff;
        font-size: clamp(2.4rem, 7vw, 4.6rem);
        line-height: 1;
        letter-spacing: -0.06em;
    `,
    Intro: styled.p`
        margin: 24px 0 42px;
        color: #b7c8da;
        font-size: 1.08rem;
        line-height: 1.7;
    `,
    Section: styled.section`
        margin-top: 32px;
        padding-top: 28px;
        border-top: 1px solid #263f5c;
    `,
    Heading: styled.h2`
        margin: 0 0 14px;
        color: #ffffff;
        font-size: 1.25rem;
    `,
    Text: styled.p`
        margin: 0;
        color: #b7c8da;
        line-height: 1.7;
    `,
    List: styled.ul`
        display: grid;
        gap: 10px;
        margin: 0;
        padding-left: 20px;
        color: #b7c8da;
        line-height: 1.6;
    `,
    Links: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 18px;
        a {
            color: #9fc9f3;
            font-weight: 700;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    `,
};
