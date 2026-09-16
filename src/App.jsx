import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Styled } from "./App.styled";
import ScrollToTop from "./components/ScrollToTop";

// Lazy routes keep the initial bundle small while Suspense displays a clear loading state.
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const NotFound = lazy(() => import("./pages/notFound"));

const App = () => (
    <Styled.Wrapper>
        <Styled.Header>
            <Styled.HeaderMain>
                <Styled.Brand to="/" aria-label="Basic Structure home">
                    Basic Structure
                </Styled.Brand>
                <Styled.Navigation aria-label="Primary navigation">
                    <Styled.NavLink to="/">Home</Styled.NavLink>
                    <Styled.NavLink to="/about">About</Styled.NavLink>
                </Styled.Navigation>
            </Styled.HeaderMain>
        </Styled.Header>

        <Styled.Main>
            <ScrollToTop />
            <Suspense fallback={<Styled.Loading role="status">Loading page...</Styled.Loading>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Styled.Main>

        <Styled.Footer>
            <Styled.FooterMain>
                <span>Copyright &copy; {new Date().getFullYear()} Basic Structure</span>
                <span>
                    By{" "}
                    <a
                        href="https://www.ashishranjan.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </span>
                <nav aria-label="Footer links">
                    <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://codepen.io/ash1198" target="_blank" rel="noopener noreferrer">CodePen</a>
                    <a href="mailto:ash.ranjan09@gmail.com">Email</a>
                    <a href="https://a2rp-donation-page.netlify.app/" target="_blank" rel="noopener noreferrer">Support</a>
                    <a href="https://buymeacoffee.com/a2rp" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a>
                    <a href="https://patreon.com/a2rp" target="_blank" rel="noopener noreferrer">Patreon</a>
                </nav>
            </Styled.FooterMain>
        </Styled.Footer>
    </Styled.Wrapper>
);

export default App;
