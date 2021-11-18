import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Alert} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      pressed: false,
    };
  }

  onChangeUserName = e => {
    this.setState({userName: e});
  };

  onChangePassword = e => {
    this.setState({password: e});
  };

  showAlert = () => {
    this.setState({
      pressed: true,
    });
  };

  render() {
    const {userName, password} = this.state;
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={() => this.onChangeUserName()}
          value={userName}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={() => this.onChangePassword()}
          value={password}
          placeholder="password"
        />
        <Button title="Press me" onPress={() => this.showAlert()} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
