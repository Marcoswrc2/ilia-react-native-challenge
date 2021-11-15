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
import {TextSinopse, TextTitle, CustomChip} from './styles';

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
      <CustomChip>
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
          {item.name}
        </Text>
      </CustomChip>
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
    <View style={{flex: 1, backgroundColor: '#333333'}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{paddingBottom: 20}}>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={{
            padding: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            backgroundColor: '#D90912',
            marginHorizontal: 5,
            position: 'absolute',
            zIndex: 2,
            top: 10,
            right: 5,
          }}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            Ver trailer
          </Text>
        </TouchableOpacity>
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
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                  marginLeft: 20,
                }}>
                <TextTitle numberOfLines={1}>{movieDetails?.title}</TextTitle>
              </View>
            </View>
            <View>{renderGenres(movieDetails.genres)}</View>
            <View style={{padding: 15}}>
              <TextSinopse style={{}}>
                {movieDetails?.overview || 'Não há sinopse deste filme.'}
              </TextSinopse>
            </View>
            <ModalTrailer
              isOpen={open}
              setIsOpen={setOpen}
              videoId={movieDetails?.videos?.results[0]?.key}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default DetailsScreen;
