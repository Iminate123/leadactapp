import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react'
import Search from '../../components/Search'
import CustomCard from '../../components/CustomCard'
import { IMAGE_PATH } from '../../constants/ImagePath'
import LeadCard from '../../components/LeadCards';
import { ScrollView } from 'react-native-gesture-handler';
import CustomRow from '../../components/CustomRow';


const items = [
  { id: '1', name: 'Alice Johnson', number: '123-456-7890' },
  { id: '2', name: 'Bob Smith', number: '987-654-3210' },
  { id: '3', name: 'Charlie Brown', number: '555-123-4567' },
  { id: '4', name: 'Diana Prince', number: '444-555-6666' },
];


const Home = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);


  // handleLabel = (label) => {
  //   Alert.alert('Label', label);
  //   if (label === 'Contact') {
  //     navigation.navigate('Contact');
  //   }
  // }


  const handleSearch = (text) => {
    setSearchQuery(text);

    if (text.trim() === '') {
      return; // Do nothing for empty search
    }

    const lowerCaseQuery = text.toLowerCase();
    const foundItem = items.find(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.number.includes(lowerCaseQuery)
    );

    if (foundItem) {
      Alert.alert(
        'Item Found',
        `Name: ${foundItem.name}\nNumber: ${foundItem.number}`,
        [{ text: 'OK' }]
      );
    } else {
      Alert.alert('No Results Found', 'No match for the given query.', [
        { text: 'OK' },
      ]);
    }
  };


  return (
    <ScrollView>
      <CustomCard
        leftImage={IMAGE_PATH.AVTAR} // Replace with your image URL
        logoImage={IMAGE_PATH.LOGO} // Replace with your logo URL
        title="John Doe"
        subtitle="Software Engineer"
      />
      <Search value={searchQuery} onChange={handleSearch} />
      <LeadCard />
      <CustomRow title="My Score"
        onPress={() => navigation.navigate('Contact')}
        backgroundColor="#ffffff" />
      <CustomRow title="Analytics"
        onPress={() => alert('Menu Item 1 pressed')}
        backgroundColor="#ffffff" />
      <CustomRow title="MyMagicBox(MMB)"
        onPress={() => alert('Menu Item 1 pressed')}
        backgroundColor="#ffffff" />
      <CustomRow title="Post Property"
        onPress={() => alert('Menu Item 1 pressed')}
        backgroundColor="#ffffff" />
      <CustomRow title="Booking"
        onPress={() => alert('Menu Item 1 pressed')}
        backgroundColor="#ffffff" />
      <CustomRow title="My Request"
        onPress={() => alert('Menu Item 1 pressed')}
        backgroundColor="#ffffff" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemNumber: {
    fontSize: 16,
    color: '#666',
  },
  noResults: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
    fontSize: 16,
  },
});

export default Home