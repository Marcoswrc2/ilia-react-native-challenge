import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGE_BASE_URL, IMAGE_SIZE} from '../../services/api';

function DetailsScreen({navigation, route}) {
  const {itemData} = route.params;

  useEffect(() => {
    console.log(itemData);
    console.log(`${IMAGE_BASE_URL}${IMAGE_SIZE}${itemData.poster_path}`);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{itemData.title}</Text>
      <Text>{itemData.original_title}</Text>
      <Text>{itemData.overview}</Text>
      <Text>{itemData.vote_average}</Text>
      <Text>{itemData.release_date}</Text>
      <Image
        source={{
          uri: `${IMAGE_BASE_URL}${IMAGE_SIZE}${itemData.poster_path}`,
        }}
        resizeMode={'contain'}
        style={{width: 100, height: 200, borderWidth: 1}}
      />
    </View>
  );
}

export default DetailsScreen;
