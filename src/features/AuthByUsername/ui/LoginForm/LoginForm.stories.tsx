import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};
PrimaryLight.decorators = [StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: 'admin', password: '123', error: 'ERROR' },
})];

export const withLoading = Template.bind({});
withLoading.args = {};
withLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { isLoading: true },
})];
