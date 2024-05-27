import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import Background from "../Biblioteca/assets/imagens/biblioteca.png";

export default function App() {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulando um tempo de carregamento de 2 segundos
  };

  return (
    <ImageBackground source={require('../Biblioteca/assets/imagens/biblioteca.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Biblioteca</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleButtonClick}
          disabled={loading} // Desabilita o botão se o estado de carregamento for verdadeiro
        >
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="white" />
              <Text style={styles.loadingText}>Iniciando...</Text>
            </View>
          ) : (
            <Text style={styles.buttonText}>Iniciar</Text>
          )}
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50, 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#DB8606',
    paddingVertical: 20,
    paddingHorizontal: 114,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
});
