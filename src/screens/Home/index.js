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
import InputText from '../../components/InputTex';

function HomeScreen({navigation, route}) {
  const {
    loadingNP,
    movies,
    getNowPlayingMovies,
    getSearchedMovies,
    searchedMovies,
    loadingSearch,
  } = useMovies();
  const [page, setPage] = useState(1);
  const [pageSec, setPageSec] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getNowPlayingMovies(page);
  }, [page]);

  useEffect(() => {
    if (searchValue) {
      getSearchedMovies(searchValue, pageSec);
    }
  }, [pageSec]);

  // useEffect(() => {
  //   console.log(searchedMovies.length, 'aqui');
  // }, [searchedMovies]);

  // useEffect(() => {
  //   console.log(movies.length, 'aqui22');
  // }, [movies]);

  useEffect(() => {
    console.log(searchValue);
    if (searchValue) {
      getSearchedMovies(searchValue);
    } else {
      getNowPlayingMovies(page);
    }
  }, [searchValue]);

  const updatePage = () => {
    setPage(page + 1);
  };
  const updatePageSec = () => {
    setPageSec(page + 1);
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

  const renderItem = ({item}) => {
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
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black', paddingVertical: 15}}>
      {/* <InputText value={searchValue} setValue={setSearchValue} /> */}
      {false ? (
        <FlatList
          style={{flex: 1}}
          columnWrapperStyle={{
            flexGrow: 1,
            justifyContent: 'space-around',
            paddingHorizontal: 10,
          }}
          data={searchedMovies}
          numColumns={2}
          onEndReachedThreshold={0.3}
          onEndReached={updatePageSec}
          keyExtractor={(item, index) => item.id}
          ListFooterComponent={renderFooter}
          renderItem={renderItem}
        />
      ) : (
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
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

export default HomeScreen;
