import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
    isOpen: true,
    children: 'Lorem njdb vdbjv dnvjndjvnjd jdnvjdnjvnd jndjvndjnvjd jdnvjdnvjd jdnjvndj dasdsad dsadsafa asfsafsafsa fasfsafsaf safsafsa safsafsa safsafsa',
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: 'Lorem njdb vdbjv dnvjndjvnjd jdnvjdnjvnd jndjvndjnvjd jdnvjdnvjd jdnjvndj dasdsad dsadsafa asfsafsafsa fasfsafsaf safsafsa safsafsa safsafsa',
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
