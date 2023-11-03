
// !Packages
import { Text, View, ImageBackground, FlatList, Pressable, SafeAreaView, Image } from 'react-native'

// !Styles
import { home } from '../styles/home'
import { app } from '../styles/app'

export default function AllPokemon({ pokemonList }) {
    return (
        <SafeAreaView style={app.screen}>
            <ImageBackground
                style={app.imageBg}
                source={require('../assets/poke-bg.png')}
                resizeMode='cover'>
                <View style={app.header}>
                    <Image style={app.imageTitle} source={require('../assets/title.png')} />
                    <Text style={app.title}>PC!</Text>
                </View>
                <FlatList
                    style={home.pokeListContainer}
                    numColumns={2}
                    data={pokemonList}
                    keyExtractor={(item) => item.url}
                    renderItem={({ item }) => (
                        <View style={home.pokeList}>
                            <Pressable style={({ pressed }) => [home.screen, pressed ? home.pressEffect : null]}>
                                <ImageBackground
                                    source={require('../assets/base-card.jpg')}
                                    resizeMode='cover'
                                    style={home.pokeList}>
                                    <View style={home.cardDetails}>
                                        <Text style={home.pokemonName}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                                    </View>
                                </ImageBackground>
                            </Pressable>
                        </View>
                    )} />
            </ImageBackground>
        </SafeAreaView>
    )
}
