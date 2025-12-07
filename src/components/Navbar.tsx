import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';

const colorCycle = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const NavContainer = styled.nav<{ $isHome: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column; /* Stacks children vertically */
    padding: 1rem 1.5rem; /* Adjust padding for mobile */
  }

  ${props => props.$isHome ? css`
    background-color: transparent;
    backdrop-filter: none;
  ` : css`
    background-color: rgba(17, 17, 17, 0.9);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  `}
`;

const Logo = styled(Link)`
  font-size: 3.6rem;
  font-weight: 900;
  letter-spacing: -1px;
  background: linear-gradient(
    90deg, 
    #ff0099, /* Pink */
    #00fff2, /* Cyan */
    #8a2be2, /* Violet */
    #ff0099 /* Pink again for seamless loop */
  );
  background-size: 250% 250%; 
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${colorCycle} 6s infinite ease-in-out;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.05) translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-bottom: 0.75rem; /* Add spacing below the logo */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem; /* Reduce space between links */
    flex-wrap: wrap; /* Allows links to wrap to the next line if needed */
    justify-content: center; /* Center the links below the logo */
  }
`;

const StyledLink = styled(Link)`
  font-weight: 650;
  transition: color 0.3s ease;
  &:hover {
    color: #00fff2;
  }
`;

const ExternalLink = styled.a`
  margin: 0.3rem 0 0 0;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: #ff0099;
  }
`;

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <NavContainer $isHome={isHome}>
      <Logo to="/">SK</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink> 
        <StyledLink to="/skills">Skills</StyledLink>
        <StyledLink to="/work">Career</StyledLink>
        <ExternalLink 
          href="https://www.linkedin.com/in/scott-kinchlea/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedinIn />
        </ExternalLink>
      </NavLinks>
    </NavContainer>
  );
};