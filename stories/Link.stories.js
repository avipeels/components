import React from 'react';

import Link from '../packages/Link/src/Link';

export default {
    title: 'Components/Link',
    component: Link,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Link {...args} />;

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
    name: 'Click',
    href: 'https://www.google.com',
    target: '_blank'
};
