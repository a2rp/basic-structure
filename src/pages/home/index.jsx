import { Styled } from "./styled";

const features = [
    {
        title: "Clear routing",
        description: "Home, About, and fallback routes are separated into focused page modules.",
    },
    {
        title: "Lazy loading",
        description: "Route components load on demand and show a small Suspense loading state.",
    },
    {
        title: "GitHub Pages ready",
        description: "The Vite base path and 404 fallback support static hosting deployments.",
    },
];

const Home = () => (
    <Styled.Wrapper>
        <Styled.Hero>
            <Styled.Eyebrow>React starter template</Styled.Eyebrow>
            <Styled.Title>Build a solid front-end foundation.</Styled.Title>
            <Styled.Description>
                A practical Vite and React structure with client-side routing, reusable styled components,
                lazy pages, and a responsive layout ready for the next idea.
            </Styled.Description>
            <Styled.Actions>
                <Styled.PrimaryLink to="/about">Explore the project</Styled.PrimaryLink>
                <Styled.SecondaryLink href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">
                    View GitHub
                </Styled.SecondaryLink>
            </Styled.Actions>
        </Styled.Hero>

        <Styled.FeatureGrid>
            {features.map((feature) => (
                <Styled.FeatureCard key={feature.title}>
                    <Styled.FeatureTitle>{feature.title}</Styled.FeatureTitle>
                    <Styled.FeatureDescription>{feature.description}</Styled.FeatureDescription>
                </Styled.FeatureCard>
            ))}
        </Styled.FeatureGrid>
    </Styled.Wrapper>
);

export default Home;
