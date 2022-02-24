import styled from 'styled-components';

export const StyledLanguage = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
`;

export const LanguageColor = styled.div<{ color: string }>`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #f0f6fc33;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${(props) => props.color};
`;
