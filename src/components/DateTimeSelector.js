import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DateTimePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date'); // 'date' or 'time'
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedValue) => {
    if (selectedValue) {
      setDate(selectedValue);
      if (mode === 'date') {
        // After selecting the date, show time picker
        setMode('time');
        setShowPicker(true);
      } else {
        // After selecting time, close picker
        setShowPicker(false);
        setMode('date'); // Reset mode for next time
      }
    } else {
      setShowPicker(false); // Dismiss picker if canceled
      setMode('date'); // Reset mode
    }
  };

  const openDateTimePicker = () => {
    setMode('date');
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <Icon name="calendar-today" size={24} color="#7a7a7a" style={styles.icon} />
      <TouchableOpacity onPress={openDateTimePicker} style={styles.touchable}>
        <Text style={styles.text}>
          {date.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode={mode}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  icon: {
    marginRight: 10,
  },
  touchable: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default DateTimePickerComponent;
