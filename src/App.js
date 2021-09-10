import TodoList from "./Components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useEffect, useState } from "react";
import { v4 } from 'uuid';
import CheckIcon from "@atlaskit/icon/glyph/check";
import Todo from "./Components/Todo";


//States : Du lieu noi tai cua Component
// const TODO_APP_STORAGE_KEY = 'TODO_APP';

function App() {
  const [todoList, setTodoList] = useState([]);//tra ve Array
  const [textInput, setTextInput] = useState("");//tra ve Array

// useEffect(() =>{
//   const storage = localStorage.getItem(TODO_APP_STORAGE_KEY);
// if(storage){
// setTodoList(JSON.parse(storage));
// }
// },[]);

//  useEffect(() => {
//  localStorage.setItem(TODO_APP_STORAGE_KEY,JSON.stringify(todoList));
//  },[todoList]);




  const onAddButtonClick = useCallback((e) => {
    //them TextInput vao TodoList
    setTodoList([
      
       { id: v4(), name: textInput, isCompleted: false },
       ...todoList,
      ]);
       setTextInput("");
  },
  [textInput,todoList]
  );

  const onCheckBtnClick = useCallback((id) => {
  setTodoList(prevState =>
     prevState.map((todo) =>
       todo.id === id ? { ...todo , isCompleted : true } : todo
        )
        );

  },[]);


  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value); 
  },[]);

  //todoList: Luu tru States
  //setTodoList :Medthos cap nhat STATES
  return (
    <>
      <h3>Danh sách việc cần làm</h3>
      <Textfield
        name="add-todo"
        placeholder='Thêm việc cần làm?'
        elemAfterInput={
          <Button isDisabled={!textInput} appearance='primary' onClick={onAddButtonClick}>
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;
