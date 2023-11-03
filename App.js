
// !Packages
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, ImageBackground, Image, FlatList } from 'react-native'

// !Styles
import { app } from './styles/app'
import { home } from './styles/home'

export default function App() {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        console.log(res.data.results)
        setPokemonList(res.data.results)
      })
      .catch((err) => console.log("err: ", err))
  }, [])

  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView style={app.screen}>
        <ImageBackground style={app.imageBg} source={require('./assets/poke-bg.png')} resizeMode='cover'>
          <View style={app.header}>
            <Image style={app.imageTitle} source={require('./assets/title.png')} />
            <Text style={app.title}>PC!</Text>
          </View>
          <FlatList
            style={{ width: "90%", paddingBottom: 10 }}
            numColumns={2}
            data={pokemonList}
            keyExtractor={(item) => item.url}
            renderItem={({ item }) => (
              <View style={home.pokeList}>
                <ImageBackground source={require('./assets/base-card.jpg')} resizeMode='cover' style={home.pokeList}>
                  <View style={home.cardDetails}>
                    <Text style={home.pokemonName}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                  </View>
                </ImageBackground>
              </View>
            )} />
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}
