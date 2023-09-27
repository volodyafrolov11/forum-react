import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const ProfilePageLight = Template.bind({});
ProfilePageLight.args = {};
ProfilePageLight.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 21,
                country: Country.Russia,
                lastname: 'Frolov',
                firstname: 'Vladimir',
                city: 'Kaluga',
                currency: Currency.RUB,
                avatar: 'http://images.vfl.ru/ii/1537256476/2904dfe8/23384507.jpg',
            },
        },
    }),
];

export const ProfilePageDark = Template.bind({
    profile: {
        form: {
            username: 'admin',
            age: 21,
            country: Country.Russia,
            lastname: 'Frolov',
            firstname: 'Vladimir',
            city: 'Kaluga',
            currency: Currency.RUB,
        },
    },
});
ProfilePageDark.args = {};
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
