import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = () => {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => alert('Menu burger') }}
            centerComponent={{ text: 'Aeging Mobile', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff', onPress: () => alert('Home ou back') }}
        />
    );
}

export default AppHeader;