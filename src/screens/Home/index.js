import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useMovies} from '../../contexts/movies';
import {RouteNames} from '../../routes/types';
import Card from '../../components/Card';

function HomeScreen({navigation, route}) {
  const {getLatestMovies, loadingNP, movies, getNowPlayingMovies} = useMovies();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getNowPlayingMovies(page);
  }, [page]);

  useEffect(() => {
    console.log(movies.length);
  }, [movies]);

  const updatePage = () => {
    setPage(page + 1);
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 60,
          justifyContent: 'center',
        }}>
        {loadingNP ? <ActivityIndicator color={'red'} size={'large'} /> : null}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black', paddingVertical: 15}}>
      <FlatList
        style={{flex: 1}}
        columnWrapperStyle={{
          flexGrow: 1,
          justifyContent: 'space-around',
          paddingHorizontal: 10,
        }}
        data={movies}
        numColumns={2}
        onEndReachedThreshold={0.3}
        onEndReached={updatePage}
        keyExtractor={(item, index) => item.id}
        ListFooterComponent={renderFooter}
        renderItem={({item}) => {
          return (
            <Card
              onPress={() => {
                navigation.navigate(RouteNames.DETAILS_SCREEN, {
                  itemData: item,
                });
              }}
              title={item.title}
              posterPath={item.poster_path}
            />
          );
        }}
      />
    </View>
  );
}

export default HomeScreen;
