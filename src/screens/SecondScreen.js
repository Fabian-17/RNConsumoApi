import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

export const SecondScreen = () => {
    const route = useRoute();
    const { pokemon, imageUrl } = route.params || {};
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {imageUrl ? (
                <TouchableOpacity onPress={toggleDetails}>
                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{ uri: imageUrl }}
                        />
                        <Text style={styles.name}>Pokemon Seleccionado: {pokemon.name}</Text>
                    </View>
                </TouchableOpacity>
            ) : (
                <Text>No se ha seleccionado ningún Pokémon aún.</Text>
            )}
            {showDetails && (
                <View style={styles.detailsContainer}>
                    <Text>Nombre: {pokemon.name}</Text>
                    <Text>Altura: {pokemon.height}</Text>
                    <Text>Peso: {pokemon.weight}</Text>
                    <Text>Experiencia base: {pokemon.base_experience}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
    },
    detailsContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});