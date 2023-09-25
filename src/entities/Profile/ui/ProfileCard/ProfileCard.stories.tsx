import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
// import Avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    readonly: true,
    data: {
        username: 'admin',
        age: 21,
        country: Country.Russia,
        lastname: 'Frolov',
        firstname: 'Vladimir',
        city: 'Kaluga',
        currency: Currency.RUB,
        avatar: 'http://images.vfl.ru/ii/1537256476/2904dfe8/23384507.jpg',
    },
};

export const Error = Template.bind({});
Error.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
