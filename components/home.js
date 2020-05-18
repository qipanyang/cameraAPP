import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

const Home = ({pagestate}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Camera"
                onPress={() => pagestate.setpage(2)}
            />
        </View>
    )
};
export default Home;
