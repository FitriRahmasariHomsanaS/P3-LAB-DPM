import React, { Component } from 'react';
import { View, FlatList, Button, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import globalStyles from '../styles/globalStyles';

class ShoppingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedCategory: 'all',
      isLoading: true,
      selectedProduct: null,
    };
    console.log('Constructor: Component initialized');
  }

  componentDidMount() {
    console.log('componentDidMount: Component mounted');
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCategory !== this.state.selectedCategory) {
      console.log(`Category changed to ${this.state.selectedCategory}`);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount');
  }

  fetchProducts = () => {
    this.setState({
      products: [
        {
          id: '1',
          name: 'Sepatu',
          category: 'fashion',
          description: [
            'Sneakers: Sepatu olahraga yang cocok untuk berlari dan beraktivitas ringan, dengan bahan kulit dan mesh. Harga: Rp 300.000',
            'Boots: Sepatu dengan perlindungan ekstra untuk cuaca dingin dan medan berat. Harga: Rp 450.000',
            'Formal: Sepatu kulit premium yang cocok untuk acara formal dan bisnis. Harga: Rp 600.000',
          ],
          image: 'https://i.pinimg.com/236x/73/d1/23/73d1237afb5289c95b1ce608a0c758a1.jpg',
        },
        {
          id: '2',
          name: 'Kaos',
          category: 'fashion',
          description: [
            'Lengan Pendek: Kaos katun premium yang adem dan nyaman untuk cuaca panas. Harga: Rp 100.000',
            'Lengan Panjang: Kaos yang lebih tebal dan cocok untuk cuaca dingin. Harga: Rp 150.000',
          ],
          image: 'https://i.pinimg.com/236x/8d/3e/d7/8d3ed76ad8c17aaaa98f15a9b471a42d.jpg',
        },
        {
          id: '3',
          name: 'Laptop',
          category: 'electronics',
          description: [
            'Gaming: Laptop dengan spesifikasi tinggi untuk gaming, dengan kartu grafis Nvidia dan refresh rate tinggi. Harga: Rp 8.000.000',
            'Office: Laptop ringkas dan ringan untuk produktivitas kerja sehari-hari. Harga: Rp 5.500.000',
            'Ultrabook: Laptop super tipis dan ringan dengan daya tahan baterai lama. Harga: Rp 7.000.000',
          ],
          image: 'https://i.pinimg.com/236x/a3/a6/f0/a3a6f0d9d76c264636ad246e00c62544.jpg',
        },
      ],
      isLoading: false,
    });
  };
  
  filterByCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  selectProduct = (product) => {
    this.setState({ selectedProduct: product });
  };

  render() {
    const { products, selectedCategory, isLoading, selectedProduct } = this.state;

    if (selectedProduct) {
      return (
        <View style={globalStyles.container}>
          <Header title="Detail Produk" />
          <ScrollView style={styles.detailContainer}>
            <Text style={styles.productName}>{selectedProduct.name}</Text>
            {selectedProduct.description.map((desc, index) => (
              <Text key={index} style={styles.productDescription}>
                {desc}
              </Text>
            ))}
            <Button title="Kembali" color="#002D62" onPress={() => this.setState({ selectedProduct: null })} />
          </ScrollView>
          <Footer />
        </View>
      );
    }

    const filteredProducts =
      selectedCategory === 'all'
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return (
      <View style={[globalStyles.container, styles.container]}>
        <Header title="Shopping App" />
        <View style={styles.filterButtons}>
          <Button title="All" onPress={() => this.filterByCategory('all')} color="#002D62" />
          <Button title="Fashion" onPress={() => this.filterByCategory('fashion')} color="#002D62" />
          <Button title="Electronics" onPress={() => this.filterByCategory('electronics')} color="#002D62" />
        </View>
        {isLoading ? (
          <Text style={styles.loadingText}>Loading products...</Text>
        ) : (
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.selectProduct(item)}>
                <ProductCard name={item.name} image={item.image} />
              </TouchableOpacity>
            )}
          />
        )}
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6F2FF', 
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#002D62', 
  },
  detailContainer: {
    flex: 1,
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002D62', 
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#002D62',
    marginBottom: 20,
  },
  productOptionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#002D62', 
  },
  productOption: {
    fontSize: 16,
    color: '#002D62', 
    marginBottom: 5,
  },
});

export default ShoppingScreen;
