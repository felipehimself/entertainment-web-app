import styled from 'styled-components';

const Container = styled.main`
  max-width: 116rem;
  margin: 0 auto 0 16rem;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    margin-left: auto;
  }

  @media screen and (min-width: 1400px) {
    max-width: 140rem
  }
  
`;

export default Container;
