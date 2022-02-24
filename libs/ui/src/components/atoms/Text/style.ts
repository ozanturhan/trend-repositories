import styled from 'styled-components';
import { theme } from '@trend-repositories/ui';

export interface TextProps {
  size: keyof typeof theme.sizes;
  elementType?: 'span' | 'p';
}

export const StyledText = styled.p<Pick<TextProps, 'size'>>`
  font-size: ${(props) => props.theme.sizes[props.size]};
  color: ${(props) => props.theme.colors.grey_1};
`;
