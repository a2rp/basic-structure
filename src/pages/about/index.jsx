import { FiCheckCircle, FiCode, FiCompass, FiExternalLink } from "react-icons/fi";
import { Styled } from "./styled";

const includedItems = [
    "React Router pages for home, about, and unknown URLs.",
    "Lazy loaded route modules with a shared Suspense fallback.",
    "Styled-components for focused component-level styles.",
    "Vite configuration prepared for GitHub Pages hosting.",
    "Responsive navigation, content, and footer layouts.",
];

const About = () => (
    <Styled.Wrapper>
        <Styled.IntroSection>
            <Styled.Eyebrow>About the starter</Styled.Eyebrow>
            <Styled.Title>A small structure built for clarity.</Styled.Title>
            <Styled.Intro>
                Basic Structure keeps the application shell, routes, pages, and styles separate so a new
                project can grow without turning the entry file into a monolith.
            </Styled.Intro>
        </Styled.IntroSection>

        <Styled.ContentGrid>
            <Styled.Panel>
                <Styled.PanelHeading><FiCheckCircle aria-hidden="true" /> What is included</Styled.PanelHeading>
                <Styled.List>
                    {includedItems.map((item) => <li key={item}>{item}</li>)}
                </Styled.List>
            </Styled.Panel>

            <Styled.SideColumn>
                <Styled.Panel>
                    <Styled.PanelHeading><FiCompass aria-hidden="true" /> Project purpose</Styled.PanelHeading>
                    <Styled.Text>
                        Use it as a clean starting point for small portfolios, documentation sites, learning
                        projects, or focused multi-page interfaces.
                    </Styled.Text>
                </Styled.Panel>
                <Styled.Panel>
                    <Styled.PanelHeading><FiCode aria-hidden="true" /> Built by</Styled.PanelHeading>
                    <Styled.Text>
                        Ashish Ranjan, a full-stack web developer focused on clear interfaces and dependable projects.
                    </Styled.Text>
                    <Styled.AuthorLink href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                        Visit portfolio <FiExternalLink aria-hidden="true" />
                    </Styled.AuthorLink>
                </Styled.Panel>
            </Styled.SideColumn>
        </Styled.ContentGrid>
    </Styled.Wrapper>
);

export default About;
