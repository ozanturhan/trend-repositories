import { Text } from '../../atoms';
import { LanguageColor, StyledLanguage } from './style';
import { FC } from 'react';

interface LanguageProps {
  color?: string;
}

const Language: FC<LanguageProps> = ({ children, color }) => {
  return (
    <StyledLanguage>
      {color && <LanguageColor color={color} />}

      <Text size="small">{children}</Text>
    </StyledLanguage>
  );
};

export default Language;
