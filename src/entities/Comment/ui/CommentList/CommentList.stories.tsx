import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'some comment 1',
            user: {
                id: '1',
                username: 'username',
            },
        },
        {
            id: '2',
            text: 'some comment 2',
            user: {
                id: '1',
                username: 'username',
            },
        },
        {
            id: '2',
            text: 'some comment 3',
            user: {
                id: '1',
                username: 'username',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
