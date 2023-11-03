
import { StyleSheet } from 'react-native'


export const app = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "black"
    },
    container: {
        flex: 1,
        backgroundColor: '#ef5350',
        opacity: "60%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 4,
        shadowColor: "black",
        borderRadius: 5,
        width: "90%"
    },
    imageBg: {
        flex: 1,
        width: "100%",
        justifyContent: 'flex-start',
        alignItems: "center",
        paddingTop: 50,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    imageTitle: {
        width: 300,
        height: 100
    },
    title: {
        fontSize: 50,
        color: "white",
        fontStyle: "italic",
        fontWeight: "900"
    }
})
