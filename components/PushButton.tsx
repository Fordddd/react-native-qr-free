import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface buttonProps {
  title: string;
  onPress: () => void;
  styles?: any;
  textStyles?: any;
  iconName?: string;
  iconStyles?: any;
}

const PushButton = ({
  title,
  onPress,
  styles,
  textStyles,
  iconName,
  iconStyles,
}: buttonProps) => {
  return (
    <TouchableHighlight
      style={{ ...defaultStyles.button, ...styles }}
      onPress={onPress}
    >
      {iconName ? (
        <Icon name="arrow-left" style={iconStyles} size={25} color="white">
          <Text style={{ ...defaultStyles.buttonText, ...textStyles }}>
            {title}
          </Text>
        </Icon>
      ) : (
        <Text style={{ ...defaultStyles.buttonText, ...textStyles }}>
          {title}
        </Text>
      )}
    </TouchableHighlight>
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    width: '40%',
    height: 50,
    backgroundColor: '#333699',
    borderRadius: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default PushButton;
