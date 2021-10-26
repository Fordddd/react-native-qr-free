import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { ScanQrScreen } from './ScanQrScreen';
import { Header } from './../components/Header';
import PushButton from '../components/PushButton';

interface Props {
  data?: any;
}
interface State {
  isOpenMainScreen: boolean;
  isOpenScanScreen: boolean;
  isHeaderHidden: boolean;
  isAdBannerHidden: boolean;
}

export class MainScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpenMainScreen: true,
      isOpenScanScreen: false,
      isHeaderHidden: true,
      isAdBannerHidden: false,
    };
  }

  openScanScreen = () => {
    this.setState({
      isOpenScanScreen: true,
      isOpenMainScreen: false,
      isHeaderHidden: false,
    });
  };

  onBack = () => {
    this.setState({
      isHeaderHidden: true,
      isOpenScanScreen: false,
      isOpenMainScreen: true,
    });
  };

  handlePress = () => {};

  render() {
    const {
      isOpenMainScreen,
      isOpenScanScreen,
      isHeaderHidden,
      isAdBannerHidden,
    } = this.state;
    return (
      <View style={styles.container}>
        {!isHeaderHidden && <Header onBack={this.onBack} />}
        {!isAdBannerHidden && (
          <View style={styles.advertiseArea}>
            <Text style={styles.advertiseText}>Ads Area</Text>
          </View>
        )}
        {isOpenMainScreen && (
          <View style={styles.mainContainer}>
            <View style={styles.logoArea}>
              <Image source={require('../assets/favicon.png')} />
              <Text style={styles.logoText}>Qr is Future</Text>
            </View>
            <View style={styles.verticalButtonArea}>
              <PushButton
                title="Share app"
                onPress={this.handlePress}
                styles={styles.verticalButton}
              />
              <PushButton
                title="Rate app"
                onPress={this.handlePress}
                styles={styles.verticalButton}
              />
              <PushButton
                title="More app"
                onPress={this.handlePress}
                styles={styles.verticalButton}
              />
              <PushButton
                title="Check update"
                onPress={this.handlePress}
                styles={styles.verticalButton}
              />
            </View>
            <View style={styles.horizontalButtonArea}>
              <PushButton
                title="Scan"
                onPress={this.openScanScreen}
                styles={styles.horizontalButton}
              />
              <PushButton
                title="Generate"
                onPress={this.handlePress}
                styles={styles.horizontalButton}
              />
            </View>
            <View style={styles.verticalButtonArea}>
              <PushButton
                title="History scan Qr"
                onPress={this.handlePress}
                styles={styles.verticalButton}
              />
              <PushButton
                title="History of generate Qr"
                onPress={this.handlePress}
                styles={styles.verticalButton}
              />
            </View>
          </View>
        )}
        {isOpenScanScreen && <ScanQrScreen />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  mainContainer:{
    height: '100%',
    backgroundColor: '#c8c4f5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
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
    margin: 25,
  },
  logoText: {
    fontSize: 30,
  },
  verticalButtonArea: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verticalButton: {
    width: '80%',
    height: 50,
  },
  horizontalButtonArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  horizontalButton: {
    width: '45%',
  },
});
