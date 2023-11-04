
// !Packages
import axios from "axios"
import { useState, useEffect } from "react"
import { Image, ScrollView, Text, View } from "react-native"

// !Styles
import { details } from "../styles/details"

export default function OnePokemon({ route }) {

    const { selectedPokemon: name } = route.params

    const [selectedPokemon, setSelectedPokemon] = useState({
        id: null,
        name: "",
        sprite: null,
        types: [],
        moves: []
    })

    useEffect(() => {
        // console.log(route) <= comes with params, name, path.
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => {
                // console.log("One Pokemon: ", res.data)
                const name = res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1)
                const { front_default, front_shiny } = res.data.sprites.other['official-artwork']
                const types = res.data.types.map((oneType) => oneType.type.name)
                const moves = res.data.moves.map((oneMove) => oneMove.move.name)

                setSelectedPokemon({
                    id: res.data.id,
                    name: name,
                    sprite: front_shiny ? front_shiny : front_default,
                    types: types,
                    moves: moves
                })
            })
            .catch((err) => {
                console.log("Error: ", err)
            })
    }, [])

    return (
        <View style={[details.screen, details.detailsContainer]}>
            <View style={details.titleBackground}>
                <Text style={details.title}>{selectedPokemon.name} - <Text style={details.highlight}>{selectedPokemon.id}</Text></Text>
            </View>
            <View style={[details.screen, {marginTop: 10}]}>
                <Image source={{uri: selectedPokemon?.sprite}} style={details.pokemonImage}/>
            </View>
            <ScrollView style={[details.screen, details.detailsView]}>
                <View>
                    <Text style={details.movesDetails}>Recorded Types:</Text>
                    <View>{selectedPokemon.types.map((type, idx) => <Text style={details.movesDetails} key={idx+1}>{idx+1}: {type}</Text>)}</View>
                </View>
                <View style={details.moves}>
                    <Text style={details.movesDetails}>Recorded Moves:</Text>
                    <View>{selectedPokemon.moves.map((move, idx) => <Text style={details.movesDetails} key={idx+1}>{idx+1}: {move}</Text>)}</View>
                </View>
                <View>
                    <Text style={{fontStyle: "italic"}}>End of List</Text>
                </View>
            </ScrollView>
        </View>
    )
}
