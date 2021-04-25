import React from 'react';
import Button from './Button';
import { withKnobs, select } from '@storybook/addon-knobs';

// export default {
//   title: 'Button',
//   component: Button,
// };

export default {
  title: 'Storybook Knobs',
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    Rainbow: ['red', 'orange', 'etc'],
    None: null,
  };

  const defaultValue = 'red';
  const groupId = 'GROUP-ID1';
  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Button</Button>;
};
export const Secondary = () => <Button secondary>Button</Button>;

Primary.storyName = 'I am the primary Button';
