```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const LanguageAssistanceScreen = () => {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [language, setLanguage] = useState('Spanish');

    const translateText = async () => {
        try {
            const response = await fetch('http://localhost:5000/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: text,
                    target_language: language,
                }),
            });

            const data = await response.json();
            setTranslatedText(data.translated_text);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Language Assistance</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter text"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Picker
                selectedValue={language}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
            >
                <Picker.Item label="Spanish" value="Spanish" />
                <Picker.Item label="French" value="French" />
                <Picker.Item label="German" value="German" />
                <Picker.Item label="Italian" value="Italian" />
                <Picker.Item label="Japanese" value="Japanese" />
                <Picker.Item label="Chinese" value="Chinese" />
                <Picker.Item label="Korean" value="Korean" />
                <Picker.Item label="Russian" value="Russian" />
            </Picker>
            <Button
                title="Translate"
                onPress={translateText}
            />
            <Text style={styles.translatedText}>{translatedText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
    picker: {
        height: 50,
        marginBottom: 20,
    },
    translatedText: {
        marginTop: 20,
        fontSize: 18,
    },
});

export default LanguageAssistanceScreen;
```

