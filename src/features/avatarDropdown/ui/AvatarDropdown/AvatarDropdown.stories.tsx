import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import { AvatarDropdown } from './AvatarDropdown';
import AvatarIcon from '@/shared/assets/tests/storybook.jpg';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
                roles: [UserRole.ADMIN],
                avatar: AvatarIcon,
            },
        },
    }),
];

export const Manager = Template.bind({});
Manager.args = {};
Manager.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'moderator',
                roles: [UserRole.MANAGER],
                avatar: AvatarIcon,
            },
        },
    }),
];

export const User = Template.bind({});
User.args = {};
User.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'user',
                roles: [UserRole.USER],
                avatar: AvatarIcon,
            },
        },
    }),
];
