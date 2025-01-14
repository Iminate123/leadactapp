import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TransparentButton from '../../components/TransparentButton'
import NotesCard from "../../components/NotesComponents";
import { ScrollView } from "react-native-gesture-handler";

const ContactDetails = ({ navigation }) => {
  return (

    <ScrollView style={styles.container}>
      <View style={styles.uppersection}>
        <View style={styles.leftSection}>
          <View>
            <Text style={styles.title}>Prashnat</Text>
            <Text style={styles.subtitle}>CALL BACK</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <MaterialIcons name="edit" size={23} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Right Section */}
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="phone" size={24} color="lightgreen" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="message-text" size={24} color="blue" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="whatsapp" size={24} color="green" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        {/* Content Section */}
        <View style={styles.content}>
          {/* Left Section */}
          <View style={styles.column}>
            <Text style={styles.text}>Location:</Text>
            <Text style={styles.valuetext}>-</Text>
            <Text style={styles.text}>Country:</Text>
            <Text style={styles.valuetext}>-</Text>
            <Text style={styles.text}>State:</Text>
            <Text style={styles.valuetext}>-</Text>
            <Text style={styles.text}>City:</Text>
            <Text style={styles.valuetext}>-</Text>
            <Text style={styles.text}>Property Stage:</Text>
            <Text style={styles.valuetext}>-</Text>
            <Text style={styles.text}>Property Sub Type:</Text>
            <Text style={styles.valuetext}></Text>
            <Text style={styles.text}>Project:</Text>
            <Text style={styles.valuetext}>Self emp data</Text>
          </View>

          {/* Vertical Divider */}
          <View style={styles.divider} />

          {/* Right Section */}
          <View style={styles.column}>
            <Text style={styles.textright}>Contact Number:</Text>
            <Text style={styles.valuetext1}>9568549038</Text>
            <Text style={styles.textright}>Budget:</Text>
            <Text style={styles.valuetext1}>-</Text>
            <Text style={styles.textright}>Propety Type:</Text>
            <Text style={styles.valuetext1}>-</Text>
            <Text style={styles.textright}>Lead Source:</Text>
            <Text style={styles.valuetext1}>Mix Data</Text>
          </View>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonRow}>
          <TransparentButton text="Intrested" borderColor="green" textColor="green" onPress={() => navigation.navigate('InterestedDetails')}/>
          <TransparentButton text="Call Back" borderColor="yellow" textColor="yellow" onPress={() => navigation.navigate('CallBackDetails')}/>
          <TransparentButton text="Not Intrested" borderColor="red" textColor="red" onPress={() => navigation.navigate('NotIntrested')}/>
          
        </View>
      </View>
      <Text style={styles.titlenotes}>Notes</Text>
      <NotesCard />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: "row",
    marginBottom: 66,
  },
  column: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    paddingHorizontal: 8,
  },
  divider: {
    width: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 8,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  buttonRow: {
    //flexDirection: "row",
    //justifyContent: "space-between",
    //marginTop: 66,
  },
  button: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  uppersection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
    //marginVertical: 10,
    //padding: 16,
    //borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    //backgroundColor: "#fff",
  },
  leftSection: {
    flexDirection: "row",
    //alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "green"
  },
  titlenotes:{
    fontSize: 17,
    fontWeight: "bold",
    color: "green",
    paddingLeft: 16,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  editButton: {
    marginLeft: 10,
    marginBottom: 20,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 15,
  },
  textright: {
    fontSize: 16,
    color: "#333",
    paddingLeft: 20,
  },
  valuetext: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    //textAlign: "center",
    marginVertical: 2,
    marginBottom: 4,
  },
  valuetext1: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    //textAlign: "center",
    marginVertical: 2,
    marginBottom: 4,
    paddingLeft: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "#333",

    //
  },
})

export default ContactDetails

