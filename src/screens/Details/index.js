import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';
import {IMAGE_BASE_URL, IMAGE_SIZE} from '../../services/api';
import YouTube from 'react-native-youtube';
import Modal from 'react-native-modal';
import {useMovies} from '../../contexts/movies';
import {SafeAreaView} from 'react-native-safe-area-context';
import ModalTrailer from '../../components/ModalTrailer';
import {TextSinopse, TextTitle} from './styles';

function DetailsScreen({navigation, route}) {
  const {itemData} = route.params;
  const [open, setOpen] = useState(false);
  const {getMovieDetails, loadingDetails, movieDetails} = useMovies();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getMovieDetails(itemData.id);
    });
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 18,
          backgroundColor: '#485778',
          marginHorizontal: 5,
        }}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
          {item.name}
        </Text>
      </View>
    );
  };

  const renderGenres = arrayGenres => {
    return (
      <FlatList
        horizontal
        scrollEnabled={false}
        style={{paddingLeft: 10, marginTop: 10}}
        contentContainerStyle={{flexGrow: 1, height: 40}}
        data={arrayGenres}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#333333'}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{paddingBottom: 20}}>
        {loadingDetails ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={'large'} color={'red'} />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <View style={{width: '100%', height: 400, overflow: 'hidden'}}>
              <Image
                style={{width: '100%', height: 500, opacity: 0.6}}
                resizeMode={'cover'}
                source={{
                  uri: `${IMAGE_BASE_URL}${IMAGE_SIZE}${movieDetails?.poster_path}`,
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 10,
                  marginLeft: 20,
                }}
                onPress={() => setOpen(true)}>
                <TextTitle numberOfLines={1}>{movieDetails?.title}</TextTitle>
              </TouchableOpacity>
            </View>
            <View>{renderGenres(movieDetails.genres)}</View>
            <View style={{padding: 15}}>
              <TextSinopse style={{}}>{movieDetails?.overview}</TextSinopse>
            </View>
            <ModalTrailer
              isOpen={open}
              setIsOpen={setOpen}
              videoId={movieDetails?.videos?.results[0]?.key}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsScreen;
