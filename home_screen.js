```javascript
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    navigateToItineraryPlanning = () => {
        this.props.navigation.navigate('ItineraryPlanning');
    }

    navigateToLocalRecommendations = () => {
        this.props.navigation.navigate('LocalRecommendations');
    }

    navigateToLanguageAssistance = () => {
        this.props.navigation.navigate('LanguageAssistance');
    }

    navigateToTravelJournal = () => {
        this.props.navigation.navigate('TravelJournal');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Travel Companion AI</Text>
                <Button 
                    title="Plan My Itinerary" 
                    onPress={this.navigateToItineraryPlanning} 
                />
                <Button 
                    title="Local Recommendations" 
                    onPress={this.navigateToLocalRecommendations} 
                />
                <Button 
                    title="Language Assistance" 
                    onPress={this.navigateToLanguageAssistance} 
                />
                <Button 
                    title="My Travel Journal" 
                    onPress={this.navigateToTravelJournal} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    }
});

export default HomeScreen;
```

