import React, { useState } from 'react';
import { Text, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './components/Input';
import Task from './components/Task';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;
// SafeAreaView를 사용하지 않고 설정하면 노치가 있는 아이폰에서 title이 가려지는 문제가 발생한다.
// 따라서 SafeAreaView를 통해서 노치가 있는 아이폰에서도 제대로 문구가 나타나도록 해준다.

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get('window').width;

  const tempData = {
    1: { id: '1', text: 'React Native', completed: false },
    2: { id: '2', text: 'Javscript', completed: true },
    3: { id: '3', text: 'Java', completed: false },
  }

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(tempData);
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);

  const onChangeInput = (e) => {
    setNewTask(e);
  }

  const addTask = () => {
    if(newTask.length === 0) {
      alert('내용을 입력해주세요');
    } else {      
      const ID = Date.now().toString();
      const newTaskObject = {
        [ID] : {id: ID, text: newTask, completed: false },
      };
      setNewTask('');
      setTasks({ ...tasks, ...newTaskObject });
    };
  };

  const deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Title>TODO List</Title>
      <StatusBar barStyle="light-content" backgroundColor={theme.background} />
      <Input 
        placeholder="+ Add a Task" 
        value={newTask} 
        onChangeText={onChangeInput} 
        onSubmitEditing={addTask}
      />
      <List width={width}>
        {Object.values(tasks)
          .reverse()
          .map((item) => (
          <Task 
            key={item.id}
            item={item} 
            deleteTask={deleteTask} 
          />
          ))}
      </List>
    </Container>
    </ThemeProvider>
  );
}