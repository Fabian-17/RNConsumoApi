import { Text, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ConsumoApi } from '../components/ConsumoApi';

export const HomeScreen = ({ navigation, route }) => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);


    useEffect(() => {
        if (route.params?.pokemon) {
            setSelectedPokemon(route.params.pokemon);
        }
    }, [route.params?.pokemon]);



    const agregarPokemon = (pokemon) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`;
        setSelectedPokemon(pokemon);
        Alert.alert(
            'Pokemon Seleccionado',
            `Has seleccionado a ${pokemon.name}`,
            [{ text: 'OK', onPress: () => navigation.navigate('View', { pokemon, imageUrl }) }]
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <ConsumoApi agregarPokemon={agregarPokemon} />
        </View>
    );
  };