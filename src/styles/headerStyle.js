import styled from 'styled-components';

export const HeaderStyle = styled.header`
  color: white;
  background-color: #0f0f0f;
  position: sticky;
  top: 0px;
  transition: 0.3s;

  img {
    margin: 0 4px -2px 0;
  }

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
    color: rgb(160, 158, 158);
    font-weight: 200;
    font-size: 15px;
  }

  h5 {
    font-weight: 800;

    a:link,
    a:visited,
    a:hover,
    a:active {
      color: rgb(214, 159, 114);
      text-decoration: none;
    }

    a:hover {
      background-color: #1c1c1c;
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
    box-shadow: 0px 5px 15px rgba(214, 159, 114, 0.3);
    z-index: 1000;
  }
`;
