import styled from 'styled-components';

export const StoryWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 0.1px solid #cccccc;

  img {
    margin-right: 5px;
  }

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  &:nth-child(10) ~ section {
    display: none;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decorazion: none;

  a {
    color: white;
    text-decoration: none;
    font-weight: 400;
  }
`;

export const StoryMeta = styled.div`
  color: grey;
  font-weight: 100;

  > span:not(:first-child):before {
    content: '•';
    font-weight: 500;

    margin: 0 8px;
  }
`;

export const StoryMetaElement = styled.span`
  color: ${props => props.color || 'grey'};
`;

export const StoryMetaElementAuthor = styled.span`
  font-weight: 500;
  font-size: 14px;

  font-style: italic;
  color: rgb(160, 158, 158);
`;
