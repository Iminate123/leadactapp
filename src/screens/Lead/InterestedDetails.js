import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CustomDropdown from '../../components/CustomDropDown';
import { ScrollView } from 'react-native-gesture-handler';
import CustomTextInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const InterestedDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dropdownData = [
        { label: 'Rental', value: 1 },
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
            <Text style={styles.title}>PROPERTY TYPE</Text>
            <CustomDropdown
                data={dropdownData}
                onSelect={(item) => setSelectedItem(item)}
                placeholder="Choose an option"
            />
            <Text style={styles.title}>PROPERTY SUB TYPE</Text>
            <CustomDropdown
                data={dropdownData}
                onSelect={(item) => setSelectedItem(item)}
                placeholder="Choose an option"
            />
            <Text style={styles.title}>PROPERTY STAGE</Text>
            <CustomDropdown
                data={dropdownData}
                onSelect={(item) => setSelectedItem(item)}
                placeholder="Choose an option"
            />
            <Text style={styles.title}>LOCATION</Text>
            <CustomDropdown
                data={dropdownData}
                onSelect={(item) => setSelectedItem(item)}
                placeholder="Choose an option"
            />
            <Text style={styles.title}>STATE</Text>
            <CustomDropdown
                data={dropdownData}
                onSelect={(item) => setSelectedItem(item)}
                placeholder="Choose an option"
            />
            <Text style={styles.title}>BUDGET</Text>
            <CustomDropdown
                data={dropdownData}
                onSelect={(item) => setSelectedItem(item)}
                placeholder="Choose an option"
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

export default InterestedDetails

