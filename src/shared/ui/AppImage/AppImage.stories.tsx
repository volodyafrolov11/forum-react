import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestImage from '../../assets/tests/storybook.jpg';

import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    src: TestImage,
    width: 200,
    height: 200,
};
