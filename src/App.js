import React from 'react';
import { StoriesContainer } from './containers/storiesContainer';
import { loadMoreButton } from './hooks/loadMoreButton';

loadMoreButton();

export const App = () => <StoriesContainer />;
