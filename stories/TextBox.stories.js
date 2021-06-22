import React from 'react';

import TextBox from '../packages/TextBox/src/TextBox';

export default {
    title: 'Components/TextBox',
    component: TextBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <TextBox {...args} />;

export const PrimaryTextBox = Template.bind({});
PrimaryTextBox.args = {
    name: 'Username',
    id: 'username',
    required: true,
    placeholder: 'Enter username'
};
