import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f0f',
    },

    imageBg: {
        flex: 1,
        height: null, 
        width: null, 
        justifyContent: 'flex-start',
    },

    searchContent: {
        backgroundColor: '#fff', 
        marginTop: 10,
        padding: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        borderRadius: 4,
    },  

    carouselContainer: {
        width: '100%',
        height: 350,
        justifyContent: 'center',
        marginTop: 10
    },

    carousel: {
        flex: 1,
        overflow: 'visible'
    },

    carouselImage: {
        width: 200,
        height: 320,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
    },

    carouselIcon: {
        position: 'absolute',
        top: 10,
        right: 10
    },

    movieInfoContainer: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between'
    },

    movieTitle: {
        paddingLeft: 14,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 6
    },

    movieReleased: {
        paddingLeft: 14,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    },

    playIcon: {
        backgroundColor: '#0f0f0f',
        borderRadius: 50,
        marginRight: 4
    },  

})