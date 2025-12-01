import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  padding: 0 20px;
`;

const NameTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: white;
  text-shadow: 0 10px 30px rgba(0,0,0,0.2);
`;

const ScrollContainer = styled.div`
  height: 50px;
  overflow: hidden;
  position: relative;
`;

const ScrollWrapper = styled.div<{ $currentIndex: number }>`
  transform: translateY(${props => props.$currentIndex * -50}px);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

const RoleText = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  padding: 0 20px;
  border-radius: 8px;
`;

const roles = [
  "Full Stack Developer",
  "UI Development with React",
  "Mobile Development with MAUI",
  "Backend Development with .NET",
  "Database Development with Postgres & MSSQL"
];

export const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HomeContainer>
      <NameTitle>SCOTT KINCHLEA</NameTitle>
      
      <ScrollContainer>
        <ScrollWrapper $currentIndex={index}>
          {roles.map((role, i) => (
            <RoleText key={i}>{role}</RoleText>
          ))}
        </ScrollWrapper>
      </ScrollContainer>
    </HomeContainer>
  );
};