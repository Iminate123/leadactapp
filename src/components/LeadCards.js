import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeadCard = () => {
    const boxes = [
        { color: '#FF5733', label: 'Contact', number: '228268', badge: '6' },
        { color: '#33FF57', label: 'Intrested', number: '74', badge: '8' },
        { color: '#3357FF', label: 'Opportunity', number: '9', badge: '10' },
        { color: '#FF33A1', label: 'Missed', number: '622', badge: '99' },
        { color: '#FFC733', label: 'Callback', number: '1163', badge: '5' },
        { color: '#8D33FF', label: 'Sales', number: '17', badge: '7' },
    ];

    return (
        <View style={styles.card}>
            <View style={styles.row}>
                {boxes.map((box, index) => (
                    <View key={index} style={styles.wrapper}>
                        {/* Label behind the box */}

                        {/* Box Container */}
                        <View style={[styles.box, { borderColor: box.color }]}>
                            {/* Colored start part */}
                            <View style={[styles.startPart, { backgroundColor: box.color }]} />
                            {/* Number in the middle */}
                            <Text style={styles.number}>{box.number}</Text>

                            {/* Badge */}
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{box.badge}</Text>
                            </View>

                        </View>
                        <Text style={[styles.label]}>{box.label}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 12,
        //margin: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    wrapper: {
        width: '30%', // 3 boxes per row
        aspectRatio: 1, // Keep it square
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
    },
    box: {
        width: '100%',
        height: '70%',
        borderRadius: 12,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden',
    },
    startPart: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '5%', // Colored start part width
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    number: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        borderRadius: 18,
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default LeadCard;