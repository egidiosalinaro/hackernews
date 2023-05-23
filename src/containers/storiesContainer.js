import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hackerNewsApi.js';
import { Story } from '../components/story.js';
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/containerStyle.js';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News</h1>
        {storyIds.map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
