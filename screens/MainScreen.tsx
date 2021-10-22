import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

interface Props {
  data: any;
}
interface State {
  hasCameraPermission: any;
  scanned: boolean;
}

export class MainScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false,
    };
  }

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  handleBarCodeScanned = ({ type, data }: { type: any; data: any }) => {
    this.setState({
      scanned: true,
    });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  handlePress = () => {};

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text> Requesting for camera permission </Text>;
    }
    if (hasCameraPermission === false) {
      return <Text> No access to camera </Text>;
    }
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={'Tap to Scan Again'}
            onPress={() =>
              this.setState({
                scanned: false,
              })
            }
          />
        )}

        {/* <View style={styles.advertiseArea}>
          <Text style={styles.advertiseText}>Ads Area</Text>
        </View>
        <View style={styles.logoArea}>
          <Image source={require('../assets/favicon.png')} />
          <Text style={styles.logoText}>Ford Qr App AI</Text>
        </View>
        <View style={styles.verticalButtonArea}>
          <TouchableHighlight style={styles.verticalButton}>
            <Button title="Share app" onPress={this.handlePress} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.verticalButton}>
            <Button title="Rate app" onPress={this.handlePress} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.verticalButton}>
            <Button title="More app" onPress={this.handlePress} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.verticalButton}>
            <Button title="Check update" onPress={this.handlePress} />
          </TouchableHighlight>
        </View>
        <View style={styles.horizontalButtonArea}>
          <TouchableHighlight style={styles.horizontalButton}>
            <Button title="Scan" onPress={this.handlePress} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.horizontalButton}>
            <Button title="Generate" onPress={this.handlePress} />
          </TouchableHighlight>
        </View>
        <View style={styles.verticalButtonArea}>
          <TouchableHighlight style={styles.verticalButton}>
            <Button title="History scan Qr" onPress={this.handlePress} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.verticalButton}>
            <Button title="History of generate Qr" onPress={this.handlePress} />
          </TouchableHighlight>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  advertiseArea: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    width: '90%',
    height: '15%',
    margin: 20,
  },
  advertiseText: {
    fontSize: 70,
    textAlign: 'center',
  },
  logoArea: {
    alignItems: 'center',
    margin: 20,
  },
  logoText: {
    fontSize: 30,
  },
  verticalButtonArea: {
    margin: 20,
    justifyContent: 'space-between',
  },
  verticalButton: {
    height: 50,
  },
  horizontalButtonArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  horizontalButton: {
    width: '40%',
    margin: 20,
  },
});
