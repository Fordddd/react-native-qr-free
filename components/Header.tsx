import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PushButton from '../components/PushButton';

interface Props{
  onBack: () => void;
}
interface State{
}

export class Header extends Component<Props,State>{
  constructor(props: Props){
    super(props);
  }

  render(){
    return (
      <View style={styles.headerContainer}>
        <PushButton
          title='Back'
          iconName='back'
          styles={styles.button}
          iconStyles={styles.buttonIcon}
          textStyles={styles.buttonText}
          onPress={this.props.onBack}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: '#333699',
    height:'7%'
  },
  button:{
    width: '25%',
    height: '100%',
  },
  buttonText:{
    fontSize: 20
  },
  buttonIcon:{
    width: '100%',
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
  }
});