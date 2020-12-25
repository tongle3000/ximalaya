import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

function GroceryShoppingList() {
    const [groceryItem, setGroceryItem] = useState('');
    const [items, setItems] = useState([]);


    const addNewItemToShoppingList = useCallback(() => {
        if( groceryItem==='' || groceryItem===' ') {
            return;
        }
        setItems([groceryItem, ...items]);
        setGroceryItem('');
    }, [groceryItem, items]);

    return (
        <View style={{borderWidth:1, padding:10}}>
            <TextInput
                style={{borderWidth:1}}
                value={groceryItem}
                placeholder="Enter grocery item"
                onChangeText={(text) => setGroceryItem(text)}
            />
            <Button
                title="Add the item to list"
                onPress={addNewItemToShoppingList}
            />
            {items.map((item) => (
                <Text key={item}>{item}</Text>
            ))}
        </View>
    );
}
export default GroceryShoppingList;