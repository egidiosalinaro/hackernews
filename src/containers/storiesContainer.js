import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hackerNewsApi.js';
import { Story } from '../components/story.js';
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/containerStyle.js';
import { Header } from '../components/header.js';
import { Button } from '../components/button.js';
import { loadMoreButton } from '../hooks/loadMoreButton.js';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <StoriesContainerWrapper
        onLoad={loadMoreButton}
        data-test-id="stories-container"
      >
        {storyIds.map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
      <Button />
    </>
  );
};
