import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    decorators: [
        (Story) => <div style={{ padding: 200 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <Button>Open</Button>,
    children: <div>Notification</div>,
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    trigger: <Button>Open</Button>,
    children: <div>Notification</div>,
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    trigger: <Button>Open</Button>,
    children: <div>Notification</div>,
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    trigger: <Button>Open</Button>,
    children: <div>Notification</div>,
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    trigger: <Button>Open</Button>,
    children: <div>Notification</div>,
};
