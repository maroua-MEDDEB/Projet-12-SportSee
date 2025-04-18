import styled from "styled-components";

export const ActivityDaysContainer = styled.div`
  position: relative;
  height: 100%;
  background: #fbfbfb;
  margin-bottom: 1rem;
`;

export const ActivityDaysTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    top: 1rem;
    left: 1.5rem;
  }
`;

export const ActivityDaysLegend = styled.div`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: "#74798C";

  @media (max-width: 1340px) {
    top: 1rem;
    right: 1.5rem;
  }
`;

export const LegendDetail = styled.p`
  margin: 0 0 0 2rem;
`;

export const ColorBullet = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.5rem 0 0;
  border-radius: 50%;
  background: ${(props) => props.background};
`;
