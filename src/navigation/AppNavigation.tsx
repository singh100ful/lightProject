import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Routekeys} from './Routekeys';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {PostDetailsScreen} from '../screens/home/post/PostDetailsScreen';

export interface GenericNavigation {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

interface AppNavigationProps {}

const Stack = createNativeStackNavigator();

export const AppNavigation: React.FC<AppNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routekeys.LoginScreen}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routekeys.HomeScreen}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routekeys.PostDetailsScreen}
          component={PostDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
