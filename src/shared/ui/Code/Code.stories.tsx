import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Code',
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    text:
        "import { classNames } from 'shared/lib/classNames/classNames';\n" +
        "import { memo, ReactNode } from 'react';\n" +
        "import cls from './Code.module.scss';\n" +
        '\n' +
        'interface CodeProps {\n' +
        '    className?: string;\n' +
        '    children: ReactNode;\n' +
        '}\n' +
        '\n' +
        'export const Code = memo((props: CodeProps) => {\n' +
        '    const {\n' +
        '        className,\n' +
        '        children,\n' +
        '    } = props;\n' +
        '\n' +
        '    return (\n' +
        '        <code className={classNames(cls.Code, {}, [className])}>\n' +
        '            {children}\n' +
        '        </code>\n' +
        '    );\n' +
        '});',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    text:
        "import { classNames } from 'shared/lib/classNames/classNames';\n" +
        "import { memo, ReactNode } from 'react';\n" +
        "import cls from './Code.module.scss';\n" +
        '\n' +
        'interface CodeProps {\n' +
        '    className?: string;\n' +
        '    children: ReactNode;\n' +
        '}\n' +
        '\n' +
        'export const Code = memo((props: CodeProps) => {\n' +
        '    const {\n' +
        '        className,\n' +
        '        children,\n' +
        '    } = props;\n' +
        '\n' +
        '    return (\n' +
        '        <code className={classNames(cls.Code, {}, [className])}>\n' +
        '            {children}\n' +
        '        </code>\n' +
        '    );\n' +
        '});',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
