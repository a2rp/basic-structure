import { createElement } from "react";
import { FiArrowRight, FiBox, FiGitBranch, FiLayers, FiZap } from "react-icons/fi";
import { Styled } from "./styled";

const features = [
    {
        icon: FiGitBranch,
        title: "Clear routing",
        description: "Home, About, and fallback routes are separated into focused page modules.",
    },
    {
        icon: FiZap,
        title: "Lazy loading",
        description: "Route components load on demand and use one clear Suspense loading state.",
    },
    {
        icon: FiLayers,
        title: "Ready to extend",
        description: "The app shell, pages, and component styles stay organized as the project grows.",
    },
];

const Home = () => (
    <Styled.Wrapper>
        <Styled.Hero>
            <Styled.HeroCopy>
                <Styled.Eyebrow>Vite and React starter</Styled.Eyebrow>
                <Styled.Title>
                    A clear structure for your <span>next idea.</span>
                </Styled.Title>
                <Styled.Description>
                    A practical foundation with client-side routing, lazy pages, reusable styled components,
                    and GitHub Pages deployment already connected.
                </Styled.Description>
                <Styled.Actions>
                    <Styled.PrimaryLink to="/about">
                        Explore the structure <FiArrowRight aria-hidden="true" />
                    </Styled.PrimaryLink>
                    <Styled.SecondaryLink
                        href="https://github.com/a2rp/basic-structure"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View repository
                    </Styled.SecondaryLink>
                </Styled.Actions>
            </Styled.HeroCopy>

            <Styled.StructureCard aria-label="Project structure overview">
                <Styled.StructureTop>
                    <span><FiBox aria-hidden="true" /> Project shell</span>
                    <small>Ready</small>
                </Styled.StructureTop>
                <Styled.StructureList>
                    <li>
                        <span>01</span>
                        <div><strong>App shell</strong><small>Header, routes, footer</small></div>
                    </li>
                    <li>
                        <span>02</span>
                        <div><strong>Lazy routes</strong><small>Home, About, Not Found</small></div>
                    </li>
                    <li>
                        <span>03</span>
                        <div><strong>Page modules</strong><small>Content and scoped styles</small></div>
                    </li>
                </Styled.StructureList>
            </Styled.StructureCard>
        </Styled.Hero>

        <Styled.SectionHeading>
            <Styled.Eyebrow>Foundation pieces</Styled.Eyebrow>
            <h2>Simple parts with clear responsibilities.</h2>
        </Styled.SectionHeading>

        <Styled.FeatureGrid>
            {features.map(({ icon, title, description }) => (
                <Styled.FeatureCard key={title}>
                    <Styled.IconBox>{createElement(icon, { "aria-hidden": true })}</Styled.IconBox>
                    <Styled.FeatureTitle>{title}</Styled.FeatureTitle>
                    <Styled.FeatureDescription>{description}</Styled.FeatureDescription>
                </Styled.FeatureCard>
            ))}
        </Styled.FeatureGrid>
    </Styled.Wrapper>
);

export default Home;
