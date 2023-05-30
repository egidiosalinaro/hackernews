import styled from 'styled-components';

export const HeaderStyle = styled.header`
  color: white;
  background-color: #202123;
  transition: 0.3s;

  span {
    margin: 0 10px;
  }

  h1,
  h2,
  h5 {
    margin: 0;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;

    a:link,
    a:visited,
    a:hover,
    a:active {
      color: white;
      text-decoration: none;
    }
  }

  h2 {
    font-weight: 200;
    font-size: 15px;
  }

  h5 {
    font-weight: 800;
    font-style: italic;

    a:link,
    a:visited,
    a:hover,
    a:active {
      color: white;
      text-decoration: underlined;
    }
  }

  .sub-heading {
    padding-bottom: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &.sticky {
    box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.3);
    position: sticky;
    top: 0px;
    z-index: 1000;
  }
`;
