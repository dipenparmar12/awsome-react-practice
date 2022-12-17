import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'

export default function Exercise1() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.brand}>
        <Image source={{ uri: 'https://picsum.photos/200', width: 120, height: 120 }} />
      </View>

      <View>
        <Text style={{ ...styles.button, ...styles.primary }}>Button1</Text>
        <Text style={{ ...styles.button, ...styles.secondary }}> Button2</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'lightgreen',
  },
  brand: {
    alignItems: 'center',
  },
  button: {
    padding: 17,
    color: 'black',
    width: '100%',
    textAlign: 'center',
  },

  primary: {
    backgroundColor: 'red',
  },
  secondary: {
    backgroundColor: 'green',
  },
})
