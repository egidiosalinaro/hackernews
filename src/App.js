import React, { useEffect, useState } from 'react';
import { getStoryIds } from './services/hackerNewsApi';

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(bananas => setStoryIds(bananas));
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};
