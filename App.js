import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./Counter";
import {createStore} from 'redux';
import counterReaducer from './readucers';
import {Provider} from 'react-redux';

const store = createStore(counterReaducer);
export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { counter: 0 };
  // }

  // inc = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  // dec = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // };
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

