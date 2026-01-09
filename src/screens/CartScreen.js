import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import CartItem from '../components/CartItem';

export default function CartScreen() {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
        ListEmptyComponent={
          <Text style={styles.empty}>Your cart is empty</Text>
        }
      />

      {items.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>
            Total: ₹ {totalAmount.toFixed(2)}
          </Text>

          <TouchableOpacity
            style={styles.clear}
            onPress={() => dispatch(clearCart())}
          >
            <Text style={styles.clearText}>Clear Cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#777',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  clear: {
    backgroundColor: '#d32f2f',
    padding: 12,
    borderRadius: 8,
  },
  clearText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
