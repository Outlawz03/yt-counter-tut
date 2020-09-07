import styled from 'styled-components';

export const Card = styled.div`
  min-width: 275px;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;