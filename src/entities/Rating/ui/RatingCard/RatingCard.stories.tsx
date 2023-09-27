import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RatingCard } from './RatingCard';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Оцените',
};

export const AlreadyRate = Template.bind({});
AlreadyRate.args = {
    rate: 4,
};
