
// !Packages
import { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import { Text, View, FlatList, Image } from 'react-native'

// !Styles
import { app } from '../styles/app'
import { home } from '../styles/home'

// !Components
import PokemonCard from '../components/PokemonCard'

export default function AllPokemon({ navigation }) {

    const { pokemonList } = useContext(PokeContext)

    return (
        <>
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
                    <PokemonCard item={item} navigation={navigation} />
                )} />
        </>
    )
}
