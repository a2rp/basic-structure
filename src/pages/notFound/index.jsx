import { FiArrowLeft, FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Styled } from "./styled";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Styled.Wrapper aria-labelledby="not-found-title">
            <Styled.Code>404</Styled.Code>
            <Styled.Eyebrow>Route not found</Styled.Eyebrow>
            <Styled.Title id="not-found-title">This page is outside the structure.</Styled.Title>
            <Styled.Subtitle>
                The requested route does not exist. Return to the previous page or continue from the home page.
            </Styled.Subtitle>
            <Styled.Actions>
                <Styled.BackButton type="button" onClick={() => navigate(-1)}>
                    <FiArrowLeft aria-hidden="true" /> Go back
                </Styled.BackButton>
                <Styled.HomeLink to="/">
                    <FiHome aria-hidden="true" /> Go home
                </Styled.HomeLink>
            </Styled.Actions>
        </Styled.Wrapper>
    );
};

export default NotFound;
