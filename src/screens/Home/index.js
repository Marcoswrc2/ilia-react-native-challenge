import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useMovies} from '../../contexts/movies';
import {RouteNames} from '../../routes/types';
import Card from '../../components/Card';
import {BoxFooter, ContainerEmpty} from './styles';
import InputText from '../../components/InputTex';
import {searchByValue} from '../../helpers/utils';

function HomeScreen({navigation, route}) {
  const {loadingNP, movies, getNowPlayingMovies} = useMovies();
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [filteredMovies, setFiltered] = useState([]);

  useEffect(() => {
    getNowPlayingMovies(page);
  }, [page]);

  useEffect(() => {
    if (searchValue) {
      setFiltered(searchByValue(searchValue, movies));
    } else {
      setFiltered(movies);
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchValue) {
      setFiltered(searchByValue(searchValue, movies));
    } else {
      setFiltered(movies);
    }
  }, [movies]);

  const updatePage = () => {
    setPage(page + 1);
  };

  const renderFooter = () => {
    return (
      <BoxFooter>
        {loadingNP ? <ActivityIndicator color={'red'} size={'large'} /> : null}
      </BoxFooter>
    );
  };

  const renderEmptyList = () => {
    return (
      <ContainerEmpty>
        <Text style={{color: 'red', fontSize: 18}}>
          Nenhum resultado encontrado.
        </Text>
      </ContainerEmpty>
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
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 15,
      }}>
      <InputText
        placeHolder={'Pesquisar filme'}
        value={searchValue}
        setValue={setSearchValue}
      />
      <FlatList
        style={{
          flex: 1,
        }}
        contentContainerStyle={{flexGrow: 1}}
        columnWrapperStyle={{
          flexGrow: 1,
          justifyContent: 'space-around',
          paddingHorizontal: 10,
          width: '100%',
          borderWidth: 1,
        }}
        data={filteredMovies}
        numColumns={2}
        onEndReachedThreshold={0.3}
        onEndReached={updatePage}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={renderEmptyList}
        ListFooterComponent={renderFooter}
        renderItem={renderItem}
      />
    </View>
  );
}

export default HomeScreen;
