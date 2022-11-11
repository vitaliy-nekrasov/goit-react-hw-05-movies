import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form`
  padding-top: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[5]};
  display: flex;
  align-items: baseline;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};
  padding-left: ${p => p.theme.space[3]};
  border-radius: ${p => p.theme.space[2]};
  border-style: solid;
  border-color: ${p => p.theme.colors.hover};
  margin-left: ${p => p.theme.space[3]};
  margin-right: ${p => p.theme.space[3]};
  background-color: inherit;
  width: ${p => p.theme.space[9]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.white};
  }
`;

export const Button = styled.button`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.button};
  padding: ${p => p.theme.space[3]} ${p => p.theme.space[4]}
    ${p => p.theme.space[3]} ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  border-radius: ${p => p.theme.space[3]};
  border-style: none;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
  }
`;
