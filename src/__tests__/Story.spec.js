import { React } from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { Story } from '../components/story';
import { singularStory } from '../fixtures';
import { getStory } from '../services/hackerNewsApi';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../services/hackerNewsApi.js', () => ({
  getStory: jest.fn(),
}));

test('renders the application', async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory));

  const { getByText, queryByTestId } = render(<Story storyId="1" />);
  await waitFor(() => [
    expect(queryByTestId('story')).toBeTruthy(),
    expect(getByText('ciao sto facendo un test')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual(
      'By: Egidio Salinaro'
    ),
  ]);
});
