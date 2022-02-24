import { StyledText, TextProps } from './style';
import { FC } from 'react';

const Text: FC<TextProps> = ({ children, size, elementType = 'span' }) => {
  return (
    <StyledText as={elementType} size={size}>
      {children}
    </StyledText>
  );
};

export default Text;
