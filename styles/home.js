

import { StyleSheet } from 'react-native'


export const home = StyleSheet.create({
    screen: {
        flex: 1
    },
    pokeListContainer: {
        width: "90%",
        paddingVertical: 10
    },
    pokeList: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 100,
        flex: 1/2,
        width: 165,
        height: 225,
        marginBottom: 40,
        marginTop: 10
    },
    cardDetails: {
        flex: 0.5,
        width: "100%",
        elevation: 4,
        shadowColor: "black"
    },
    pressEffect: {
        opacity: .95
    },
    pokemonName: {
        color: "white",
        fontSize: 25,
        marginTop: -40,
        paddingHorizontal: 5,
        backgroundColor: "red",
        fontWeight: "900",
        textAlign: "center"
    }
})
