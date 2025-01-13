import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomTextInput = ({ placeholder, value, iconName = 'input',keyboardType = 'phone-pad',onChangeText, ...props }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={24} color="#666" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light grey background
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default CustomTextInput;