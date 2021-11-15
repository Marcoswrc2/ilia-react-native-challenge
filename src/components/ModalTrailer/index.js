import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import Modal from 'react-native-modal';

const ModalTrailer = ({isOpen, setIsOpen, videoId}) => {
  return (
    <Modal
      style={{margin: 10}}
      isVisible={isOpen}
      onBackdropPress={() => setIsOpen(false)}>
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
        <YoutubePlayer height={300} play videoId={videoId} />
      </View>
    </Modal>
  );
};

export default ModalTrailer;
