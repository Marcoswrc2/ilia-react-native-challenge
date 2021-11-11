import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
// import {AntDesign} from '@expo/vector-icons';
import {BoxIcon, ContainerInput} from './styles';

const InputText = ({
  placeHolder = 'Pesquisar',
  value,
  setValue,
  handleClick,
  fakeInput = false,
}) => {
  return (
    <ContainerInput>
      {fakeInput ? (
        <TouchableOpacity
          style={{flex: 1, width: '100%'}}
          onPress={handleClick}>
          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              paddingHorizontal: 5,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={{width: '90%', fontSize: 16, color: 'white'}}>
              Pesquisar filmes
            </Text>
            <AntDesign name="search1" size={22} color={'white'} />
          </View>
        </TouchableOpacity>
      ) : (
        <>
          <TextInput
            style={{
              color: 'white',
              marginRight: 5,
              flex: 1,
              fontSize: 16,
            }}
            placeholderTextColor={'lightgrey'}
            placeholder={placeHolder}
            numberOfLines={1}
            onChangeText={text => setValue(text)}
            value={value}
            editable
            maxLength={100}
          />
        </>
      )}
    </ContainerInput>
  );
};

export default InputText;
