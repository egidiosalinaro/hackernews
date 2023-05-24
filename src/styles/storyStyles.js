import styled from 'styled-components';

export const StoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 0.5px solid #cccccc;

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
    color: #2e2e2c;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;

  > span:not(:first-child):before {
    content: '•';
    margin: 0 8px;
  }

  .story_meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || 'red'};
`;
