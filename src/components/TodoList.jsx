import { useState } from "react"
import { FaCheck, FaTrashAlt } from "react-icons/fa"

export const TodoList = (props) => {
    const [ todoItems, setTodoItems ] = useState(props.todoItems);
    // console.log(todoItems) 
    // todoItems.map(console.log)
    const removeTodo = (todoItem, index) => {
        props.removeTodo(todoItem, index);
    }
    return( 
    <>
    <div>
        <transition-group name="list" tag="ul">
            {
                todoItems.map(o => {
                    return <div key={o.item}> 
                        <li className="shadow">
                            <i className="checkBtn">
                                <FaCheck />
                            </i>
                            <span className={o.item}> {o.item} </span>
                            <i className="removeBtn">
                                <FaTrashAlt />
                            </i>
                        </li>
                    </div>
                })
            }
        </transition-group>
    </div>

    <style jsx="true">{`
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted {
        color: #b3adad;
    }
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }
    .list-enteractive,
    .list-leave-active {
        transition: all 1s;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    `}
    </style>    
    </>
    );
}