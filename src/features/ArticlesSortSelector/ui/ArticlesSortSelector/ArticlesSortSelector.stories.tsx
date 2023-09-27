import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticlesSortSelector } from './ArticlesSortSelector';

export default {
    title: 'features/ArticlesSortSelector',
    component: ArticlesSortSelector,
} as ComponentMeta<typeof ArticlesSortSelector>;

const Template: ComponentStory<typeof ArticlesSortSelector> = (args) => (
    <ArticlesSortSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
