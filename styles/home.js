

import { StyleSheet } from 'react-native'


export const home = StyleSheet.create({
    screen: {
        flex: 1
    },
    pokeList: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 100,
        flex: 1/2,
        width: 165,
        height: 225,
        marginBottom: 16
    },
    cardDetails: {
        flex: 0.5
    },
    pokemonName: {
        color: "black",
        fontSize: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "white",
        fontWeight: 700
    }
})
