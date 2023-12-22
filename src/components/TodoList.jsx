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

        setInputList("");
    }


    const deleteItems = (id) => {
        console.log(id);
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id

            })
        });
    }
    return (
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder='Add a items ' value={inputList} onChange={itemEvent} />
                <button onClick={listOfItems}>+</button>

                {/* {inputList}; */}

                <ol>
                    {/* <li>{inputList}</li> */}
                    {items.map((itemval, index) => {
                        return <li className='todo_style' key={index}>
                            <i class="fa-solid fa-circle-xmark" onClick={() => deleteItems(index)} /> &nbsp; {itemval} </li>

                    })
                    }
                </ol>
            </div>
        </div>
    )
}

export default TodoList;