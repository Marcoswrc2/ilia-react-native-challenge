import {useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RouteNames} from './types';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createNativeStackNavigator();

const App = props => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.HOMESCREEN}
        component={HomeScreen}
        options={{title: 'Início'}}
      />
      <Stack.Screen
        name={RouteNames.DETAILS_SCREEN}
        component={DetailsScreen}
        options={{title: 'Detalhes'}}
      />
    </Stack.Navigator>
  );
};

export default App;
