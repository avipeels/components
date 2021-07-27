import React from 'react';

import Button from '../packages/Button/src/Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    name: 'Login',
    onClickHandler: () => ({ test = 'abc' }) => console.log(`clicked ${test}`)
};
