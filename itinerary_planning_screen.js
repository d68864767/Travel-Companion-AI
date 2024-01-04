```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ItineraryPlanningScreen = () => {
    const [location, setLocation] = useState('');
    const [preferences, setPreferences] = useState('');
    const [recommendations, setRecommendations] = useState('');

    const getTravelRecommendations = async () => {
        try {
            const response = await fetch('http://localhost:5000/recommendations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_preferences: preferences,
                    location: location,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setRecommendations(data.recommendations);
            } else {
                Alert.alert('Error', data.error);
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Itinerary Planning</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your location"
                value={location}
                onChangeText={setLocation}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your preferences"
                value={preferences}
                onChangeText={setPreferences}
            />
            <Button title="Get Recommendations" onPress={getTravelRecommendations} />
            {recommendations && (
                <View style={styles.recommendations}>
                    <Text style={styles.recommendationsTitle}>Recommendations:</Text>
                    <Text>{recommendations}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
    recommendations: {
        marginTop: 20,
    },
    recommendationsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ItineraryPlanningScreen;
```

