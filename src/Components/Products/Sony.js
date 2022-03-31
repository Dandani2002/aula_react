import { View, Text } from "react-native";

import styles from "./styles";

export default function sony () {
   return(
   
    <View style={styles.detailsContainer}>
    <Image style={styles.icon} source={{ uri: 'https://arquivosbordados.com/wp-content/uploads/2021/10/embroidery-design-logo_753eeb22-e242-4204-bf27-f3012cc27322-1.jpg' }}></Image>
    <Text style={styles.sonyName}>Sony</Text>
    <Text style={styles.productDescription}>Lorem ipsum dolor sit amet conseqt adiscipli elit. Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.</Text>
    </View>
   );
}