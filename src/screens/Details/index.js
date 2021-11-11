import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGE_BASE_URL, IMAGE_SIZE} from '../../services/api';

function DetailsScreen({navigation, route}) {
  const {itemData} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#333333'}}>
      <Image
        style={{width: '100%', height: 235}}
        resizeMode={'contain'}
        source={{
          uri: `${IMAGE_BASE_URL}${IMAGE_SIZE}${itemData.backdrop_path}`,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          padding: 15,
          justifyContent: 'space-between',
        }}>
        <Image
          source={{
            uri: `${IMAGE_BASE_URL}${IMAGE_SIZE}${itemData.poster_path}`,
          }}
          resizeMode={'contain'}
          style={{width: 120, height: 200}}
        />
        <View
          style={{
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 0,
          }}>
          <Text style={{fontSize: 40, color: 'white', fontWeight: '500'}}>
            {itemData.vote_average} / 10
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              color: 'white',
              fontWeight: '500',
            }}>
            {itemData.release_date.slice(0, 4)}
          </Text>
        </View>
      </View>
      <View style={{padding: 15}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: 'white',
            lineHeight: 18,
            textAlign: 'justify',
          }}>
          {itemData.overview}
        </Text>
      </View>
    </View>
  );
}

export default DetailsScreen;
