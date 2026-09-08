import { Styled } from "./styled";

const About = () => (
    <Styled.Wrapper>
        <Styled.Eyebrow>About this starter</Styled.Eyebrow>
        <Styled.Title>A small structure built for clarity.</Styled.Title>
        <Styled.Intro>
            This project is a reusable Vite and React starting point. It keeps application shell, routes,
            pages, and visual styles separate so new sections can be added without turning the entry file into a monolith.
        </Styled.Intro>

        <Styled.Section>
            <Styled.Heading>What is included</Styled.Heading>
            <Styled.List>
                <li>React Router routes for home, about, and unknown URLs.</li>
                <li>Lazy loaded pages with a shared Suspense fallback.</li>
                <li>Styled-components for scoped component styles.</li>
                <li>Vite configuration prepared for GitHub Pages hosting.</li>
                <li>Responsive header, content area, and footer layout.</li>
            </Styled.List>
        </Styled.Section>

            <Styled.Section>
                <Styled.Heading>Author</Styled.Heading>
                <Styled.Text>
                    Built by Ashish Ranjan, a Full-Stack Web Developer focused on clear interfaces and dependable web projects.
                </Styled.Text>
                <Styled.Links>
                        <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                        <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://codepen.io/ash1198" target="_blank" rel="noopener noreferrer">CodePen</a>
                        <a href="https://www.linkedin.com/in/aashishranjan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.facebook.com/theash.ashish/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <a href="mailto:ash.ranjan09@gmail.com">Email</a>
                </Styled.Links>
            </Styled.Section>

            <Styled.Section>
                <Styled.Heading>Support</Styled.Heading>
                <Styled.Links>
                    <a href="https://a2rp-donation-page.netlify.app/" target="_blank" rel="noopener noreferrer">Support page</a>
                    <a href="https://buymeacoffee.com/a2rp" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>
                    <a href="https://www.patreon.com/a2rp" target="_blank" rel="noopener noreferrer">Patreon</a>
                </Styled.Links>
            </Styled.Section>
        </Styled.Wrapper>
);

export default About;
