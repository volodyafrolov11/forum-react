import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'some comment 1',
        user: {
            id: '1',
            username: 'username',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
