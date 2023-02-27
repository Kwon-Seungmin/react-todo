import { useState } from "react";
import { FaPlus } from "react-icons/fa"

export const TodoInput = (props) => {
    let [ newTodoItem, setNewTodoItem ] = useState();
    let [ showModal, setShowModal ] = useState(false);

    const clearInput = () => {
        newTodoItem = '';
    }

    const addTodo = () => {
        console.log(newTodoItem)
        if (newTodoItem !== '') {
            props.onInput(newTodoItem);
            clearInput();
        }else {
            setShowModal(!showModal);
        }
    }

    const handleChange = (e) => {
        setNewTodoItem(e.target.value)
    }

    const onKeyUp = (e) => {
        if(e.key === 'Enter') {
            addTodo();
        }
    }    

    return(
    <>
    <div className="inputBox shadow">
        <input type="text" value={newTodoItem || ""} onChange={handleChange} onKeyUp={onKeyUp} />
        <span className="addContainer" onClick={addTodo}>
            <FaPlus className="addBtn"/>
        </span>

        {/* <alertModal>
            <h3>
                경고 !
                <i className="closeModalBtn fa-solid fa-xmark">
                </i>
            </h3>
        </alertModal> */}
    </div>
    

    <style jsx="true">{`
    input:focus {
            outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478fb, #8763fb);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn 
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn {
        color: #42b983;
    }
    `}</style>
        </>
    );
    
}