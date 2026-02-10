import { FlatList } from "react-native/types_generated/index";
import React, { useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Screen() {
    const todos = [
        {id: 1, userId: 1, title: "Task 1", completed: true},
        {id: 2, userId: 1, title: "Task 2", completed: false},
        {id: 3, userId: 2, title: "Task 3", completed: true},
        {id: 4, userId: 2, title: "Task 4", completed: false},
        {id: 5, userId: 3, title: "Task 5", completed: true},

    ];
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>todo lista </Text>

            <FlatList
                data={todos.slice(0, 20)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.Text}>ID: {item.id}</Text>
                        <Text style={styles.Text}>User ID: {item.userId}</Text>
                        <Text style={styles.Text}>Task: {item.title}</Text>
                        <Text style={styles.Text}>
                        Status: {item.completed ? "Completed" : "Not Completed"}</Text>
                    </View>
                )}
            />
        </View>
    );
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,

    },
    Text: {
        fontSize: 16,
        marginBottom: 5,
    },
});




      