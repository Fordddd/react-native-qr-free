import React, { Component } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text, StyleSheet } from 'react-native';
import PushButton from '../components/PushButton';

interface Props {
  data?: any;
}
interface State {
  scanned: boolean;
  hasPermission: any;
}

export class ScanQrScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scanned: false,
      hasPermission: null,
    };
  }

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({
      hasPermission: status === 'granted',
    });
  };

  handleBarCodeScanned = ({ type, data }: { type: any; data: any }) => {
    this.setState({
      scanned: true,
    });
    alert(`Type ${type} and data ${data} has been scanned!`);
  };

  render() {
    const { hasPermission, scanned } = this.state;
    if (hasPermission === null) {
      return <Text> Requesting for camera permission </Text>;
    }
    if (hasPermission === false) {
      return <Text> No access to camera </Text>;
    }

    return (
      <View style={styles.scanContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={styles.scanArea}
        >
          
        </BarCodeScanner>
        <PushButton
          title={'Scan in Library'}
          onPress={() => {
            
          }}
          styles={styles.button}
          textStyles={styles.buttonText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scanContainer: {
    width: '100%',
    height: '70%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scanArea: {
    ...StyleSheet.absoluteFillObject,
    height: '80%',
  },
  button: {
    width: '40%',
    height: '10%',
  },
  buttonText: {
    fontSize: 20
  },
});
