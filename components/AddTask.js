import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
	if (task.trim()) {
	  addTask(task);
	  setTask('');
	}
  };

  return (
	<View style={styles.addTask}>
	  <TextInput
		style={styles.input}
		placeholder="Add new task"
		value={task}
		onChangeText={setTask}
	  />
	  <Button title="save" onPress={handleAddTask} />
	</View>
  );
};

const styles = StyleSheet.create({
  addTask: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: 15,
  },
  input: {
	flex: 1,
	borderBottomWidth: 1,
	borderBottomColor: '#ccc',
	marginRight: 10,
  },
});

export default AddTask;