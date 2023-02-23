import { TodoHeader } from "./components/TodoHeader"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { TodoFooter } from "./components/TodoFooter"
import { useState } from "react";

export const App = () => {

    const [todoItems, setTodoItems] = useState([
        { item: "가", completed: "true" },
        { item: "나", completed: "false" },
        { item: "다", completed: "true" },
    ]);
    
    const addOneItem = (todoItem) => {
        const obj = {
            completed: false,
            item: todoItem
        }
        localStorage.setItem(todoItem.item, JSON.stringify(obj));
        todoItems.value.push(obj);
    }
    const removeOneItem = (todoItem, index) => {
        localStorage.removeItem(todoItem.item);
        todoItems.splice(index, 1);
    }
    const toggleOneItme = (todoItem, index) => {
        todoItems[index].completed = !todoItems[index].completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
    const clearAllItems = () => {
        localStorage.clear();
        this.todoItems = [];
    }

return (
    <>
        <div>
            <TodoHeader />
            <TodoInput />
            <TodoList todoItems={todoItems} />
            <TodoFooter />
        </div>

        <style jsx>{`
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