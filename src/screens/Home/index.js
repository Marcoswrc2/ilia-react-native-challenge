import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useMovies} from '../../contexts/movies';
import {RouteNames} from '../../routes/types';

function HomeScreen({navigation, route}) {
  const {getLatestMovies} = useMovies();
  useEffect(() => {
    getLatestMovies();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteNames.DETAILS_SCREEN);
        }}>
        <Text style={{fontSize: 20}}>Go To Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
