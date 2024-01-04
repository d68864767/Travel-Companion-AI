```javascript
import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

class LocalRecommendationsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            recommendations: ''
        };
    }

    handleLocationChange = (text) => {
        this.setState({ location: text });
    }

    getRecommendations = async () => {
        // Here, we would make a request to our back-end server, which would then interact with the OpenAI API
        // For the sake of this example, we'll assume the function is called fetchRecommendations and is imported from a helper file
        const recommendations = await fetchRecommendations(this.state.location);
        this.setState({ recommendations });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Local Recommendations</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter your location" 
                    onChangeText={this.handleLocationChange} 
                />
                <Button 
                    title="Get Recommendations" 
                    onPress={this.getRecommendations} 
                />
                {this.state.recommendations && (
                    <Text style={styles.recommendations}>{this.state.recommendations}</Text>
                )}
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
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '100%'
    },
    recommendations: {
        marginTop: 20,
        fontSize: 18
    }
});

export default LocalRecommendationsScreen;
```
