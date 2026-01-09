import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>

      <View style={styles.row}>
        <Text style={styles.price}>₹ {item.price}</Text>
        <Text style={styles.qty}>Qty: {item.quantity}</Text>
      </View>

      <TouchableOpacity
        style={styles.remove}
        onPress={() => dispatch(removeFromCart(item.id))}
      >
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontWeight: '600',
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: '#1e88e5',
    fontWeight: 'bold',
  },
  qty: {
    color: '#555',
  },
  remove: {
    marginTop: 8,
  },
  removeText: {
    color: '#d32f2f',
    fontWeight: '600',
  },
});
