import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';

const colorCycle = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  backdrop-filter: none;
  background: transparent;
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
  background-size: 300% 300%; 
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${colorCycle} 6s infinite ease-in-out;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.05) translateY(-2px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
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
  return (
    <NavContainer>
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