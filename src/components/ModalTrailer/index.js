import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import YouTube from 'react-native-youtube';
import Modal from 'react-native-modal';

const ModalTrailer = ({isOpen, setIsOpen, videoId}) => {
  return (
    <Modal style={{margin: 10}} isVisible={isOpen}>
      <View
        style={{
          height: 400,
          backgroundColor: 'transparent',
          width: '100%',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            right: 5,
          }}
          onPress={() => setIsOpen(false)}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Fechar
          </Text>
        </TouchableOpacity>
        <YouTube
          videoId={videoId}
          play
          fullscreen={true}
          style={{alignSelf: 'auto', height: 300}}
        />
      </View>
    </Modal>
  );
};

export default ModalTrailer;
