import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CustomDropdown from '../../components/CustomDropDown';
import { ScrollView } from 'react-native-gesture-handler';
import TextareaWithIcon from '../../components/TextArea';
import CustomButton from '../../components/CustomButton';

const NotIntrested = () => {

    const [isLoading, setIsLoading] = useState(false);
    const dropdownData = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
    ];
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>NOT INTERESTED REASON</Text>
            <CustomDropdown
                data={dropdownData}
                onSelect={(item) => setSelectedItem(item)}
                placeholder="Choose an option"
            />
            <Text style={styles.title}>NOTES</Text>
            <TextareaWithIcon />
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

export default NotIntrested

