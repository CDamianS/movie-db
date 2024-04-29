import { Meta, StoryFn } from '@storybook/react';
import { IMovieCard } from './types';
import MovieCard from './MovieCard';
import React from 'react';

const meta = {
  title: 'Component/MovieCard',
  component: MovieCard,
  parameters: {
    layout: "centered",
    docs: {
      story: {
        description: "A MovieCard component",

      }
    }
  },
  argTypes: {
    title: { control: 'text' },
    genreId: { control: 'number' },
    movieId: { control: 'number' },
    voteAvarage: { control: 'number' },
    posterPath: { control: 'text' },
  },
  tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IMovieCard> = (args) => <MovieCard {...args} />;

/**
 * Default story of the MovieCard
 */
export const Default = Template.bind({});
Default.args = {
  posterPath: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  title: "The Super Mario Bros. Movie",
  voteAverage: 7.5,
  genreId: 16,
  movieId: 502356,
}
