import { View, Text, Button } from "react-native";

import styles from "./styles";

export default function cart () {
    return (
        <View style={styles.cartArea}>
        <Button
          title="Adicionar ao carrinho"
          color="#007AFF"
          accessibilityLabel="Adicionar ao carrinho"
        />
        </View>
    );

}

