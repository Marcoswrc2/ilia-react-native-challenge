import React from 'react';
import {View, Text, Image} from 'react-native';
import {BoxCard, Title, ContentImage, BoxTitle} from './styles';
import {IMAGE_BASE_URL, IMAGE_SIZE} from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import {RouteNames} from '../../routes/types';

const Card = ({title, posterPath, onPress}) => {
  return (
    <BoxCard onPress={onPress}>
      <ContentImage>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/pt/f/f5/Marvels_avengers_capa.jpg',
          }}
          style={{flex: 1, resizeMode: 'contain'}}
        />
      </ContentImage>
      <BoxTitle>
        <Title numberOfLines={1} maxLength={5}>
          {title}
        </Title>
      </BoxTitle>
    </BoxCard>
  );
};

export default Card;
