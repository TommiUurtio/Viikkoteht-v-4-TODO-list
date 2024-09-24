import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTask, removeTask }) => {
	return (
		<FlatList
			data={tasks}
			renderItem={({ item }) => (
				<TaskItem task={item} toggleTask={toggleTask} removeTask={removeTask} />
			)}
			keyExtractor={item => item.id}
		/>
	);
};

export default TaskList;