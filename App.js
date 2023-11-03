
// !Packages
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View, ImageBackground, Image, FlatList } from 'react-native'

// !Styles
import { app } from './styles/app'

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={app.screen}>
        <ImageBackground style={app.imageBg} source={require('./assets/poke-bg.png')} resizeMode='cover'>
          <View style={app.header}>
            <Image style={app.imageTitle} source={require('./assets/title.png')}/>
            <Text style={app.title}>PC!</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}
