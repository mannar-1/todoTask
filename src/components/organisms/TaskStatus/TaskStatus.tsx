import React, { useState } from 'react';
import { View } from 'react-native';
import IconButton from '../../atoms/IconButton/IconButton';
import { styles } from './TaskStatus.styles';

interface TaskStatusProps {
  setFilter: (filter: string) => void;
}

const TaskStatus = ({ setFilter }: TaskStatusProps) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setFilter(filter);
  };

  return (
    <View style={styles.actBtnContainer}>
      <IconButton
        text="All"
        mode="contained"
        color={selectedFilter === 'all' ? 'rgb(104, 113, 238)' : '#fff'}
        textColor={selectedFilter === 'all' ? '#fff' : '#000'}
        handleClick={() => handleFilterChange('all')}
        loading={false}
      />
      <IconButton
        text="Active"
        mode="contained"
        color={selectedFilter === 'todo' ? 'rgb(104, 113, 238)' : '#fff'}
        textColor={selectedFilter === 'todo' ? '#fff' : '#000'}
        handleClick={() => handleFilterChange('todo')}
        loading={false}
      />
      <IconButton
        text="Completed"
        mode="contained"
        color={selectedFilter === 'done' ? 'rgb(104, 113, 238)' : '#fff'}
        textColor={selectedFilter === 'done' ? '#fff' : '#000'}
        handleClick={() => handleFilterChange('done')}
        loading={false}
      />
    </View>
  );
};

export default TaskStatus;
