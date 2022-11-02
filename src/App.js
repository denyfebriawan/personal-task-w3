import { useState } from "react"
import styled from "styled-components"

const ToDoForm = () => {
  const [toDo, setToDo] = useState('');
  const handleNewToDo = ({target: {value}}) => {
    setToDo(value);
  }

  const createNewToDo = () => {
    if(!toDo) return;
    alert(`new todo is ${toDo}`);
  }

  return (
    <ContainerToDoForm>
      <input
        value={toDo}
        onChange={handleNewToDo}
      />
      <button onClick={createNewToDo}>Add New ToDo</button>
    </ContainerToDoForm>
  )
}

const ToDoList = () => {
  return (
    <ContainerToDoList>
      <ToDoItem task={'Hello'}/>
    </ContainerToDoList>
  )
}

const ToDoItem = ({task}) => {

  return (
    <ContainerToDoItem>
      <task>
        {task}
      </task>
    </ContainerToDoItem>
  )
}

const task = styled.span`
    font-size: 14px;
    font-weight: bold;
  `;

const ContainerToDoItem = styled.div`
  width: 150px;
  height: 150px;
  padding: 12px;
  border: 2px solid crimson;
  background-color: azure;
`;

const ContainerToDoList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

const ContainerToDoForm = styled.div`
  padding: 32px;
  background-color: azure;
`;

const ContainerApp = styled.div`
  width: 100%;
  height: 100%;
  background-color: beige;
`;

const App = () => {
  return (
    <ContainerApp>
      <ToDoForm />
      <ToDoList />
    </ContainerApp>
  )
}

export default App;