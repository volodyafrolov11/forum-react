import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.args = {};
NavbarLight.decorators = [StoreDecorator({})];

export const NavbarDark = Template.bind({});
NavbarDark.args = {};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const NavbarAuthLight = Template.bind({});
NavbarAuthLight.args = {};
NavbarAuthLight.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];
