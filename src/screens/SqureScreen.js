import React, { useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number}
    // action === { type: 'red' || 'green' || 'blue', payload: 15 || -15}

    const colorValue = state[action.type]

    return colorValue + action.amount > 255 || colorValue + action.payload < 0 ? state : { ...state, [action.type]: colorValue + action.payload }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'red', payload: -1 * COLOR_INCREMENT })}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'green', payload: -1 * COLOR_INCREMENT })}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'blue', payload: -1 * COLOR_INCREMENT })}
                color="Blue"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    );

};

const styles = StyleSheet.create({});

export default SquareScreen;