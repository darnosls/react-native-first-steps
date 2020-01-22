import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    console.log(navigate);
    return (
      <View style={styles.home}>
        <Text>Home Screen</Text>
        <Button title="Ir para detalhes" onPress={() => navigate('Details')} />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.details}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Details: {screen: DetailsScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
