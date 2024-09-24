import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		loadTasks();
	}, []);

	const loadTasks = async () => {
		try {
			const storedTasks = await AsyncStorage.getItem('tasks');
			if (storedTasks) setTasks(JSON.parse(storedTasks));
		} catch (error) {
			console.error(error);
		}
	};

	const saveTasks = async (tasks) => {
		try {
			await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
		} catch (error) {
			console.error(error);
		}
	};

	const addTask = (task) => {
		const newTasks = [...tasks, { id: Date.now().toString(), text: task, done: false }];
		setTasks(newTasks);
		saveTasks(newTasks);
	};

	const toggleTask = (id) => {
		const newTasks = tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
		setTasks(newTasks);
		saveTasks(newTasks);
	};

	const removeTask = (id) => {
		const newTasks = tasks.filter(task => task.id !== id);
		setTasks(newTasks);
		saveTasks(newTasks);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Todo list</Text>
			<AddTask addTask={addTask} />
			<TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20,
	},
});

export default App;