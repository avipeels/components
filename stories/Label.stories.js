import React from 'react';

import Label from '../packages/Label/src/Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Label {...args} />;

export const PrimaryLabel = Template.bind({});
PrimaryLabel.args = {
  name: 'Label',
  for: 'Username'
};
