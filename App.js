import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, Button, Dimensions, View } from 'react-native';

import header from './assets/header.png';
import Carrinho from './src/Components/Cart';
import Sony from './src/Components/Products';


export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Image source={header} style={styles.header} ></Image>
        <Text style={styles.title}>Consoles</Text>
      </View>



      <View style={styles.detailsView}>
        <Text style={styles.productName}>Xbox Series X</Text>
      </View>



      <Sony/>


      <View>
        <Text style={styles.productPrice}>R$ 4.000,00</Text>
      </View>

      <Carrinho/>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 350,
    borderBottomColor: '#007AFF',
    borderBottomWidth: 5,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1a42a7',
    paddingTop: 40,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
  },
  productName: {
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#1a42a7',
    width: '100%',
  },
 
 
  productPrice: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    fontSize: 30,
    color: '#106510',
    fontWeight: 'bold',
  }
});
