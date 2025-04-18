import styled from "styled-components";

export const AverageSessionsContainer = styled.div`
  position: relative;
  background: #ff0101;
`;

export const AverageSessionsTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  color: white;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    top: 1rem;
    left: 1.5rem;
  }
`;

export const TooltipContainer = styled.p`
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background: white;
  margin: 0;
`;
