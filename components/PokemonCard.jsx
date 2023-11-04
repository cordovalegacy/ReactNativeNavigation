
// !Packages
import { View, Pressable, ImageBackground, Text } from "react-native"

import { home } from "../styles/home"

export default function PokemonCard({ item, navigation }) {

    return (
        <View style={home.pokeList}>
            <Pressable
                onPress={() => navigation.navigate("One-Pokemon", {
                    selectedPokemon: item.name
                })}
                style={({ pressed }) => [home.screen, pressed ? home.pressEffect : null]}>
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
    )
}
