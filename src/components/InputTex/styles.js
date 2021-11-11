import styled from 'styled-components/native';
import {colors} from '../../config/const';

export const BoxIcon = styled.View`
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
`;
export const ContainerInput = styled.View`
  height: 40px;
  border-radius: 5px;
  margin-right: 16px;
  border-color: #fff;
  border-width: 1px;
  padding-horizontal: 10px;
  flex-direction: row;
  align-items: center;
`;
export const Label = styled.Text`
  color: ${colors.secondaryColor};
`;
