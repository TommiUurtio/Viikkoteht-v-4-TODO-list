import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const TaskItem = ({ task, toggleTask, removeTask }) => {
    return (
        <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTask(task.id)}>
                <Text style={task.done ? styles.done : styles.notDone}>{task.text}</Text>
            </TouchableOpacity>
            <Button title="delete" onPress={() => removeTask(task.id)} />
        </View>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    done: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    notDone: {
        textDecorationLine: 'none',
    },
});

export default TaskItem;