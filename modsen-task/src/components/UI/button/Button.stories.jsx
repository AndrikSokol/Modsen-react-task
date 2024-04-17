import Button from './index';
import 'theme.css';

export default {
  title: 'Button',
  component: Button,
};

const Template = (arg) => <Button {...arg}></Button>;
export const Default = Template.Bind({});

Default.args = {
  children: 'Press me',
};
