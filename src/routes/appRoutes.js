import {useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RouteNames} from './types';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createNativeStackNavigator();

const App = props => {
  const style = {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      backgroundColor: 'black',
    },
    headerTintColor: 'red',
    headerShown: true,
    headerTransparent: false,
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerTitleStyle: {
      fontSize: 20,
    },
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.HOMESCREEN}
        component={HomeScreen}
        options={{
          title: 'Filmes',
          ...style,
        }}
      />
      <Stack.Screen
        name={RouteNames.DETAILS_SCREEN}
        component={DetailsScreen}
        options={({navigation, route}) => ({
          title: route.params.itemData.title,
          headerBackTitleVisible: false,
          ...style,
          // header: () => null,
        })}
      />
    </Stack.Navigator>
  );
};

export default App;
