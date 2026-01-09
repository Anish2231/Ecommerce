import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import ProductListScreen from '../screens/ProductListScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

function CartHeaderButton({ navigation }) {
  const cartItems = useSelector(state => state.cart?.items || []);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Text>Cart ({cartItems.length})</Text>
    </TouchableOpacity>
  );
}


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductListScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <CartHeaderButton navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
