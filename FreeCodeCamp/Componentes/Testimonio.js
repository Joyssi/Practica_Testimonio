import { Text, View, Image, StyleSheet } from 'react-native'; 
import React from 'react';

const Testimonio = ({ nombre, pais, cargo, empresa, foto, testimonio }) => {
    return (
    <View style={styles.testimonioContainer}>
        <View style={styles.imageContainer}>
            <Image source={foto} style={styles.picture}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{nombre} en {pais}</Text>
            <Text style={styles.post}>{cargo} en {empresa}</Text>
            <Text style={styles.testimony}>{testimonio}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    testimonioContainer: {
        flex: 1,
        flexDirection:'row',
        minHeight:250,
        backgroundColor: '#fff',
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
    },
    imageContainer: {
        flex: 1,
        alignSelf:'center',
    },
    picture: {
        height: 250,
        width: '100%',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center'
    },
    post: {
        fontSize: 16,
        textAlign:'center',
        marginVertical: 5,
    },
    testimony: {
        flex:1,
        fontSize: 14,
        textAlign: 'justify',
        marginLeft:10,
        marginRight:10,
        marginVertical: 10,
    },
    textContainer: {
        flex: 2,
        alignSelf:'center',
    },
});

export default Testimonio;
