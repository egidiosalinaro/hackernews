import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 180px;
  height: 52px;
  text-transform: uppercase;
  background-color: black;
  color: white;
  margin: auto;
  margin-bottom: 25px;
  border-radius: 30px;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: grey;
    color: inherit;
  }

  .loading {
    display: none;
    height: 32px;
    width: 32px;
    margin: 0 auto;
    animation: loader1 3s linear infinite;
  }

  @keyframes loader1 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .loading span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 32px;
    height: 32px;
    clip: rect(16px, 32px, 32px, 0);
    animation: loader2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }

  @keyframes loader2 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .loading span::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 32px;
    height: 32px;
    border: 3px solid transparent;
    border-top: 3px solid white;
    border-radius: 50%;
    animation: loader3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }

  @keyframes loader3 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .loading span::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 32px;
    height: 32px;
    border: 3px solid grey;
    border-radius: 50%;
  }

  &.show-loader {
    width: 52px;
    background-color: white;
    text-indent: -9999px;

    & .loading {
      display: block;
    }
  }

  &.loaded {
    visibility: hidden;
    opacity: 0;
    height: 0;
    transition: visibility 0.3s 3s, opacity 0.3s 3s, height 0.3s 3s;
  }
`;
