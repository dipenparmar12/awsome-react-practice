import { StatusBar } from 'expo-status-bar'
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

// https://picsum.photos/200

export default function AlertTest() {
  // let a = 123
  // console.log('App. js::[6] a', a)

  const showAlert = () => {
    return Alert.alert('My title', 'My Message', [
      {
        text: 'Canceled',
        style: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed By'),
      },
      {
        cancelable: true,
        text: 'Okay',
        onDismiss: () =>
          Alert.alert('This alert was dismissed by tapping outside of the alert dialog.'),
      },
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={containerStyle}></View> */}
      <Text> Tab bellow. </Text>
      <Button title='clickMe' onPress={showAlert} />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
})

const containerStyle = {
  // flex: 1,
  // alignItems: 'center',
  // justifyContent: 'center',
  // backgroundColor: '#deee',
}
