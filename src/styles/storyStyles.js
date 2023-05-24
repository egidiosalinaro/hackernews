import styled from 'styled-components';

export const StoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 0.1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  &:nth-child(11) ~ section {
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
    background-color: none;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  color: grey;
  > span:not(:first-child):before {
    content: '•';
    margin: 0 8px;
  }

  .story_meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  color: ${props => props.color || 'grey'};
`;

export const StoryMetaElementAuthor = styled.span`
  font-weight: bold;
  color: rgb(160, 158, 158);
`;
