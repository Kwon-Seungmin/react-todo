import { TodoHeader } from "./components/TodoHeader"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { TodoFooter } from "./components/TodoFooter"
import { useState } from "react";

export const App = () => {

    let [todoItems, setTodoItems] = useState([]);
    
    const addOneItem = (todoItem) => {
        const obj = {
            completed: false,
            item: todoItem
        }
        localStorage.setItem(todoItem, JSON.stringify(obj));
        todoItems.push(obj);
        console.log(todoItem)
    }
    const removeOneItem = (todoItem, index) => {
        localStorage.removeItem(todoItem.item);
        todoItems.splice(index, 1);
    }
    const toggleOneItem = (todoItem, index) => {
        todoItems[index].completed = !todoItems[index].completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
    const clearAllItems = () => {
        localStorage.clear();
        todoItems = [];
    }

return (
    <>
        <div>
            <TodoHeader />
            <TodoInput onInput={addOneItem}/>
            <TodoList todoItems={todoItems} removeTodo={removeOneItem} />
            <TodoFooter />
        </div>

        <style jsx="true">{`
        body {
            text-align: center;
            background-color: #F6F6F6;
        }
        input {
            border-style: groove;
            width: 200px;
        }
        button {
            border-style: groove;
        }
        .shadow {
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
        }
        `}</style>
    </>
); 
};