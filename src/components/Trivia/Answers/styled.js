import styled from 'styled-components';

const Row = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Cell = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  align-content: middle;
  justify-content: center;
`;

export { Row, Cell };
