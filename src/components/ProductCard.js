import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {product.title}
        </Text>

        <Text style={styles.price}>₹ {product.price}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(addToCart(product))}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 12,
    borderRadius: 12,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    height: 160,
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 6,
    color: '#1e88e5',
  },
  button: {
    backgroundColor: '#1e88e5',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
