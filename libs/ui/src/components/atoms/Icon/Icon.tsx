import { icons } from './src/icons';
import { FC } from 'react';

interface IconProps {
  name: keyof typeof icons;
  fill?: string;
}

const Icon: FC<IconProps> = ({ name, fill }) => {
  const Icon = icons[name];
  return <Icon fill={fill} />;
};

export default Icon;
