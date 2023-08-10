import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    placeholder: 'Enter your text',
    value: '1213221',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'Enter your text',
    value: '1213221',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
