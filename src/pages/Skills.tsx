import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background-color: #111;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 12rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  font-weight: 800;
  letter-spacing: -1px;
  background: linear-gradient(to right, #00fff2, #ff0099); 
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 3.5rem;
  padding: 1.5rem;
  border-left: 5px solid #00fff2;
  background: #181818;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #ff0099;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const DetailList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const DetailItem = styled.li`
  line-height: 1.6;
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 0.7rem;

  &::before {
    content: "⚡";
    margin-right: 10px;
    color: #00fff2;
    font-size: 0.9rem;
  }
`;

const Highlight = styled.span`
  font-weight: 700;
  color: white;
  background: #333;
  padding: 2px 5px;
  border-radius: 4px;
  margin: 0 2px;
`;

export const Skills: React.FC = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <Title>Technical Expertise & Experience</Title>

        <Section>
          <SectionTitle>Frontend & Rapid Prototyping</SectionTitle>
          <DetailList>
            <DetailItem>
              Extensive experience delivering high-value pilot applications and <strong>Proof of Concepts (PoC)</strong>, routinely completing work within <strong>1-2 sprint cycles</strong>.
            </DetailItem>
            <DetailItem>
              Adept in the React ecosystem, delivering solutions in <strong>fast-paced, high-pressure environments</strong>.
            </DetailItem>
            <DetailItem>
              Proficient in using design tools like <Highlight>Figma</Highlight> to rapidly create prototypes and designs, streamlining the path from concept to code.
            </DetailItem>
            <DetailItem>
              Skilled in implementing responsive designs using <Highlight>Styled Components</Highlight>.
            </DetailItem>
          </DetailList>
        </Section>

        <Section>
          <SectionTitle>Backend & Data Architecture (.NET, AI, & Databases)</SectionTitle>
          <DetailList>
            <DetailItem>
              Experienced in writing robust and scalable <strong>.NET Web APIs</strong> for backend services, complete with comprehensive documentation via <Highlight>Swagger/OpenAPI</Highlight>.
            </DetailItem>
            <DetailItem>
              Proficiency in modern data access strategies using <strong>Entity Framework (EF Core)</strong> for efficient Object-Relational Mapping (ORM) and data management.
            </DetailItem>
            <DetailItem>
              Integrated <strong>AI capabilities</strong> into applications using <strong>Microsoft Semantic Kernel</strong>, designing solutions for intelligent processing and automated workflows.
            </DetailItem>
            <DetailItem>
              Intermediate proficiency with critical database technologies including <Highlight>PostgreSQL</Highlight> and <Highlight>MSSQL</Highlight>, focused on reliable data retrieval and schema design.
            </DetailItem>
          </DetailList>
        </Section>

        <Section>
          <SectionTitle>MAUI, Xamarin, and Native Android Development</SectionTitle>
          <DetailList>
            <DetailItem>
              Specialized <strong>MAUI development</strong> within the demanding <strong>automotive sector</strong> at <a href="https://www.cosworth.com/" target="_blank" rel="noopener noreferrer">Cosworth</a>, a famous and revered heritage motoring company.
            </DetailItem>
            <DetailItem>
              Developed <strong>high-performance telemetry applications</strong> running directly in vehicle environments.
            </DetailItem>
            <DetailItem>
              Highly proficient in advanced <Highlight>2D graphical rendering</Highlight> using <Highlight>SkiaSharp</Highlight> for real-time data visualization.
            </DetailItem>
            <DetailItem>
              Experience with native mobile development on <Highlight>Android</Highlight>, ensuring optimal performance and user experience. Barcode scanning application using <Highlight>MLKit</Highlight> is still being used in <a href="https://www.woodlandgroup.co.uk/" target="_blank" rel="noopener noreferrer">Woodland Group</a> warehouses across the globe.
            </DetailItem>
          </DetailList>
        </Section>

      </ContentWrapper>
    </PageContainer>
  );
};
