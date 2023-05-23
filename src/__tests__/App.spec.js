import { React } from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { App } from '../App';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hackerNewsApi';
import { loadMoreButton } from '../hooks/loadMoreButton';
import { Button } from '../components/button';

beforeEach(cleanup);

jest.mock('../hooks/loadMoreButton.js');

jest.mock('../services/hackerNewsApi.js', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test('renders the application', async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(<App />);
  await waitFor(() => [
    expect(getByText('ciao sto facendo un test')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual(
      'By: Egidio Salinaro'
    ),
  ]);
});
