import React from 'react';
import styled from 'styled-components';

// --- Data ---
const workEvents = [
  { 
    period: "Feb 2019 - Apr 2020", 
    role: "Apprentice Software Developer", 
    company: "Mandon Software",
    technologies: ['.NET MVC', 'Progress OpenEdge', 'Xamarin Forms']
  },
  { 
    // Milestone 1: Apprenticeship Completion
    period: "April 2020", 
    role: "Apprenticeship Completed", 
    company: "Milestone: Promoted to Junior Developer", 
    isMilestone: true 
  },
  { 
    period: "Apr 2020 - Sept 2020", 
    role: "Junior Software Developer", 
    company: "Mandon Software",
    technologies: ['.NET MVC', 'Progress OpenEdge', 'Xamarin Forms']
  },
  { 
    period: "Oct 2020 - Sept 2022", 
    role: "Junior Software Developer", 
    company: "Woodland Group",
    technologies: ['Angular', '.NET Web APIs', 'Native Android (Java)']
  },
  { 
    // Milestone 2: Mid-Level Transition
    period: "Sept 2022", 
    role: "Transition to Mid-Level", 
    company: "Milestone: Promotion to Software Engineer", 
    isMilestone: true 
  },
  { 
    period: "Sept 2022 - June 2025", 
    role: "Software Engineer", 
    company: "Cosworth",
    technologies: ['Xamarin Forms', 'MAUI', 'SkiaSharp']
  },
  { 
    period: "June 2025 - Present", 
    role: "Full Stack Software Engineer", 
    company: "Cencora/PhlexGlobal",
    technologies: ['React', '.NET Web API', 'Postgres'],
    isCurrent: true 
  },
];

// --- Styled Components ---
// (PageContainer, ContentWrapper, and Title remain the same)

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background-color: #111;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: linear-gradient(to right, #ff0099, #8a2be2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const TimelineContainer = styled.div`
  position: relative;
  margin-top: 30px;
  padding-bottom: 20px;
  
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #333;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    z-index: 0;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  
  &:nth-child(odd) {
    left: 0;
    text-align: right;
  }
  &:nth-child(even) {
    left: 50%;
    text-align: left;
    
    @media (max-width: 768px) {
      left: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 60px;
    padding-right: 20px;
  }
`;

// UPDATED DOT STYLING to include milestone color
const Dot = styled.div<{ $isCurrent: boolean; $isMilestone?: boolean }>`
  height: ${props => props.$isMilestone ? '24px' : '20px'};
  width: ${props => props.$isMilestone ? '24px' : '20px'};
  background-color: ${props => 
    props.$isMilestone 
      ? '#FFD700' // Gold/Yellow for Milestone
      : props.$isCurrent ? '#00fff2' : '#ff0099'
  }; 
  border-radius: 50%;
  position: absolute;
  top: 15px;
  z-index: 1;
  
  ${TimelineItem}:nth-child(odd) & {
    right: -10px;
    @media (max-width: 768px) {
      left: 10px;
      right: auto;
    }
  }
  ${TimelineItem}:nth-child(even) & {
    left: -10px;
    @media (max-width: 768px) {
      left: 10px;
    }
  }

  box-shadow: 0 0 10px ${props => 
    props.$isMilestone 
      ? 'rgba(255, 215, 0, 0.8)' // Stronger shadow for milestone
      : props.$isCurrent ? 'rgba(0, 255, 242, 0.6)' : 'rgba(255, 0, 153, 0.6)'
  };
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.3);
  }
`;

// UPDATED CONTENT BOX STYLING for milestone
const ContentBox = styled.div<{ $isMilestone?: boolean }>`
  padding: 20px;
  background-color: ${props => props.$isMilestone ? '#2a2a2a' : '#181818'};
  border-radius: 6px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  
  ${TimelineItem}:nth-child(even) & {
    border-left: 3px solid ${props => props.$isMilestone ? '#FFD700' : '#00fff2'};
  }
  ${TimelineItem}:nth-child(odd) & {
    border-right: 3px solid ${props => props.$isMilestone ? '#FFD700' : '#ff0099'};
  }
`;

// UPDATED COMPANY NAME to use bold for Milestone title
const CompanyName = styled.h4`
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 5px;
  font-weight: 700;
`;

const RoleName = styled.p`
  font-size: 1.1rem;
  color: ${props => props.color === 'gold' ? '#FFD700' : '#00fff2'}; // Color change for milestone text
  margin-bottom: 5px;
  font-weight: ${props => props.color === 'gold' ? 600 : 400};
`;

const PeriodText = styled.p`
  font-style: italic;
  color: #ccc;
`;

const TechTags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const TechTag = styled.span`
  background-color: #2a2a2a;
  color: #00fff2; /* Use Cyan for tech tag text */
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
`;

export const WorkHistory: React.FC = () => {
  const reversedWorkEvents = [...workEvents].reverse(); 

  return (
    <PageContainer>
      <ContentWrapper>
        <Title>Career Timeline</Title>
        <TimelineContainer>
          {reversedWorkEvents.map((event, index) => (
            <TimelineItem key={index}>
              <Dot 
                $isCurrent={!!event.isCurrent} 
                $isMilestone={!!event.isMilestone} 
              />
              <ContentBox $isMilestone={!!event.isMilestone}>
                <CompanyName>{event.company}</CompanyName>
                <RoleName color={event.isMilestone ? 'gold' : 'cyan'}>{event.role}</RoleName>
                <PeriodText>{event.period}</PeriodText>
                
                {/* --- NEW TECHNOLOGY LIST --- */}
                {event.technologies && (
                  <TechTags>
                    {event.technologies.map((tech, i) => (
                      <TechTag key={i}>{tech}</TechTag>
                    ))}
                  </TechTags>
                )}
                {/* --- END NEW TECHNOLOGY LIST --- */}
                
              </ContentBox>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </ContentWrapper>
    </PageContainer>
  );
};