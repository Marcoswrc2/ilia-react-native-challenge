import styled from 'styled-components/native';
import {colors} from '../../config/const';

export const BoxCard = styled.TouchableOpacity`
  width: 40%;
  height: 200px;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 10px;
  margin-left: 0px;
  overflow: hidden;
  border-radius: 5px;
  border-width: 1px;
  margin-left: 20px;
`;

export const ContentImage = styled.View`
  width: 100%;
  height: 170px;
  border-radius: 5px;
  overflow: hidden;
`;
export const BoxTitle = styled.View`
  border-radius: 5px;
  padding: 5px;
  padding-left: 0px;
  padding-horizontal: 6px;
  height: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
