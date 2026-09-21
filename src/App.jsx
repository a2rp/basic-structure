import { createElement, lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
    FiArrowUp,
    FiCoffee,
    FiGlobe,
    FiHeart,
    FiLoader,
    FiMail,
    FiMenu,
    FiX,
} from "react-icons/fi";
import {
    FaCodepen,
    FaFacebook,
    FaGithub,
    FaLinkedinIn,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa6";
import { Styled } from "./App.styled";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const NotFound = lazy(() => import("./pages/notFound"));

const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
];

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedinIn },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const App = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };

        document.addEventListener("keydown", closeOnEscape);
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.removeEventListener("keydown", closeOnEscape);
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowBackToTop(currentScrollY > 320);
            setIsHeaderVisible(currentScrollY <= 0 || currentScrollY < previousScrollY);
            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Styled.Wrapper id="top">
            <Styled.Header className={isHeaderVisible ? "" : "is-hidden"}>
                <Styled.HeaderMain>
                    <Styled.Brand to="/" aria-label="Basic Structure home">
                        <Styled.BrandMark>
                            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                        </Styled.BrandMark>
                        <span>
                            <strong>Basic Structure</strong>
                            <small>React starter</small>
                        </span>
                    </Styled.Brand>

                    <Styled.Navigation aria-label="Primary navigation">
                        {navigationItems.map((item) => (
                            <Styled.NavLink key={item.path} to={item.path} end={item.path === "/"}>
                                {item.label}
                            </Styled.NavLink>
                        ))}
                    </Styled.Navigation>

                    <Styled.MenuButton
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </Styled.MenuButton>

                    {isMenuOpen && (
                        <>
                            <Styled.MenuBackdrop onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
                            <Styled.MobileNavigation id="mobile-navigation" aria-label="Mobile navigation">
                                {navigationItems.map((item) => (
                                    <Styled.NavLink key={item.path} to={item.path} end={item.path === "/"}>
                                        {item.label}
                                    </Styled.NavLink>
                                ))}
                            </Styled.MobileNavigation>
                        </>
                    )}
                </Styled.HeaderMain>
            </Styled.Header>

            <Styled.Main>
                <ScrollToTop />
                <Suspense
                    key={location.pathname}
                    fallback={
                        <Styled.Loading role="status" aria-live="polite">
                            <FiLoader aria-hidden="true" /> Loading page...
                        </Styled.Loading>
                    }
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Styled.Main>

            <Styled.Footer>
                <Styled.FooterMain>
                    <p>
                        Copyright &copy; {new Date().getFullYear()} {" "}
                        <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                            Ashish Ranjan
                        </a>
                    </p>
                    <Styled.FooterLinks aria-label="Social and support links">
                        {footerLinks.map(({ label, href, icon }) => (
                            <Styled.FooterIconLink
                                key={label}
                                href={href}
                                aria-label={label}
                                title={label}
                                target={href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            >
                                {createElement(icon, { "aria-hidden": true })}
                            </Styled.FooterIconLink>
                        ))}
                    </Styled.FooterLinks>
                </Styled.FooterMain>
            </Styled.Footer>

            <Styled.BackToTop
                type="button"
                className={showBackToTop ? "is-visible" : ""}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                title="Back to top"
            >
                <FiArrowUp aria-hidden="true" />
            </Styled.BackToTop>
        </Styled.Wrapper>
    );
};

export default App;
