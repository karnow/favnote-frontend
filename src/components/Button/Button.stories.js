import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button>Button</Button>;
export const Secondary = () => <Button secondary>Button</Button>;

Primary.storyName = 'I am the primary Button';
