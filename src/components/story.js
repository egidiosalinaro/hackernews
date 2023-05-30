import React, { useState, useEffect, memo } from 'react';
import { getStory } from '../services/hackerNewsApi.js';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
  StoryMetaElementAuthor,
} from '../styles/storyStyles.js';
import { mapTime } from '../mappers/time.js';
import openInNewTab from '../img/newwindow.png';

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <div>
        <StoryTitle>
          <a href={story.url}>{story.title}</a>
        </StoryTitle>
        <StoryMeta>
          <span className="story__by" data-testid="story-by">
            <StoryMetaElementAuthor color="#000">
              {story.by}
            </StoryMetaElementAuthor>
          </span>
          <span className="story__time" data-testid="story-time">
            <StoryMetaElement color="#000"></StoryMetaElement>
            {` `}
            {mapTime(story.time)} {`ago`}
          </span>
        </StoryMeta>
      </div>
      <div>
        <a href={story.url} target="_blank">
          <img src={openInNewTab} alt="open story in a new tab" width={20} />
        </a>
      </div>
    </StoryWrapper>
  ) : null;
});
