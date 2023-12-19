import React, { useState } from 'react';
import './TodoList.css';


const TodoList = () => {

    const [inputList, setInputList] = useState("buy apple");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
    }
    return (
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder='Add a items ' onChange={itemEvent} />
                <button onClick={listOfItems}>+</button>
                
                {/* {inputList}; */}

                <ol>
                    {/* <li>{inputList}</li> */}

                    {items.map((itemval) => {
                        return <li> {itemval} </li>

                    })
                    }
                </ol>
            </div>
        </div>
    )
}

export default TodoList;