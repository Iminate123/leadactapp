import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CustomDropdown from '../../components/CustomDropDown';
import CustomTextInput from '../../components/CustomInput';
import CountryDropdown from '../../components/CountryDropDown';
import TextInputNumber from '../../components/TextIputNumber';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';

const AddContact = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [alternateNumber, setAlternateNumber] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(null);


  const countryData = [
    { name: 'United States', code: '1', flagCode: 'us', flag: '🇺🇸' },
    { name: 'India', code: '91', flagCode: 'in', flag: '🇮🇳' },
    { name: 'United Kingdom', code: '44', flagCode: 'gb', flag: '🇬🇧' },
    { name: 'Canada', code: '1', flagCode: 'ca', flag: '🇨🇦' },
    { name: 'Australia', code: '61', flagCode: 'au', flag: '🇦🇺' },
  ];

  const dropdownData = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>REQUIREMENT TYPE</Text>
      <CustomDropdown
        data={dropdownData}
        onSelect={(item) => setSelectedItem(item)}
        placeholder="Choose an option"
      />
      {/* {selectedItem && (
        <Text style={styles.selectedText}>
          Selected: {selectedItem.label}
        </Text>
      )} */}
      <View>
        <Text style={styles.title}>FIRST NAME*</Text>
        <CustomTextInput
          iconName='person'
          placeholder="First Name"
          value={firstName}
          onChangeText={(value) => setFirstName(value)}
        />
        {/* {text ? <Text style={styles.output}>You entered: {text}</Text> : null} */}
      </View>
      <View>
        <Text style={styles.title}>LAST NAME*</Text>
        <CustomTextInput
          iconName='person'
          placeholder="Last Name"
          value={lastName}
          onChangeText={(value) => setLastName(value)}
        />
        {/* {text ? <Text style={styles.output}>You entered: {text}</Text> : null} */}
      </View>

      <Text style={styles.title}>COUNTRY CODE</Text>
      <CountryDropdown
        data={countryData}
        onSelect={(country) => setSelectedCountry(country)}
        placeholder="Select your country"
      />
      {/* {selectedCountry && (
        <Text style={styles.selectedText}>
          Selected: {selectedCountry.name} (+{selectedCountry.code})
        </Text>
      )} */}
      <Text style={styles.title}>CONTACT NUMBER</Text>

      <CustomTextInput
        iconName='phone'
        placeholder="Enter your mobile number"
        keyboardType='phone-pad'
        value={mobileNumber}
        onChangeText={(value) => setMobileNumber(value)}
      />
      {/* {mobileNumber ? (
        <Text style={styles.output}>You entered: {mobileNumber}</Text>
      ) : null} */}
      <Text style={styles.title}>ALTERNATE NUMBER</Text>

      <CustomTextInput
        iconName='phone'
        placeholder="Alternate mobile number"
        keyboardType='phone-pad'
        value={alternateNumber}
        onChangeText={(value) => setAlternateNumber(value)}
      />
      {/* {mobileNumber ? (
  <Text style={styles.output}>You entered: {mobileNumber}</Text>
) : null} */}

      <Text style={styles.title}>EMAIL</Text>

      <CustomTextInput
        iconName='email'
        placeholder="Enter your email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Text style={styles.title}>CITY</Text>

      <CustomTextInput
        iconName='house'
        placeholder="City"
        value={city}
        onChangeText={(value) => setCity(value)}
      />

      <View style={{ margin: 16 }}><CustomButton
        title="Submit"
        //onPress={handlePress}
        isLoading={isLoading}
        disabled={false}
        style={{ backgroundColor: '#FF5722' }}
        textStyle={{ fontSize: 18 }}
      /></View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  selectedText: {
    marginTop: 16,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
})

export default AddContact

