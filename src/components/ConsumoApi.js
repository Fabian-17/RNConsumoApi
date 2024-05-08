import React, { useState, useEffect } from 'react';
import { FlatList, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Button, Card } from 'react-native-paper';

export function ConsumoApi({ agregarPokemon }) {
    const [data, setData] = useState([]);

    const obtenerLista = async () => {
        const api = 'https://pokeapi.co/api/v2/pokemon?limit=200'
        const response = await fetch(api);
        const datos = await response.json();
        setData(datos.results);
    };

    useEffect(() => {
        obtenerLista();
    }, []);

    const handleAgregarPokemon = (pokemon) => {
        agregarPokemon(pokemon);
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.view}
                data={data}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <React.Fragment>
                    <Card style={{marginBottom:30}}>
                    <Card.Title title={item.name} 
                    style={{ color: 'black'}}
                    />
                    <Image
                    style={{ width: 80, height: 80}}
                    source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png` }}
                    />
                    <TouchableOpacity onPress={() => handleAgregarPokemon(item)}>
                        <Button style={{marginBottom: 15}} mode="contained" >
                            Agregar
                        </Button>
                    </TouchableOpacity>
                    </Card>
                    </React.Fragment>
                )}
            />
        </View>
    );


};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: scale(200),
        height: verticalScale(50),
        padding: moderateScale(5)
    },
    view: {
        flex: 1,
        marginTop: 100,
        marginRight: -100,
        marginLeft: 20,
    },
    });