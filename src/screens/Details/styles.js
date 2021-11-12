import styled from 'styled-components/native';
import {colors} from '../../config/const';

export const BoxCard = styled.TouchableOpacity`
  width: 40%;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 10px;
  margin-left: 0px;
  overflow: hidden;
  border-radius: 5px;
  border-width: 1px;
  margin-left: 20px;
`;

export const TextTitle = styled.Text`
  font-size: 22px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;
export const TextSinopse = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: white;
  line-height: 20px;
  text-align: justify;
`;
export const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
