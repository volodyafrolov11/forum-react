import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
