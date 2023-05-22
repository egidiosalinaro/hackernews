import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hackerNewsApi';
import { Story } from '../components/story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return storyIds.map(storyId => <Story key={storyId} storyId={storyId} />);
};
