import React from 'react';

import plusSvg from '../assets/img/plus.svg';

import './TaskForm.scss';

const TaskForm = () => {

    const [addTask, setAddTask] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const addNewTask = () => {
        setAddTask(!addTask);
        setInputValue('');
    }

    const cancelAddTask = () => {
        setAddTask(!addTask);
        setInputValue('');
    }

    return (
        <div className="tasks__form">
            {
                !addTask &&
                <div onClick={() => setAddTask(!addTask)} className="tasks__form-btn">
                <img src={plusSvg} alt="" />
                <span>Добавить задачу</span>
            </div>
            }
            {
                addTask &&
                <div className="tasks__form-field">
                    <input
                        onChange={event => setInputValue(event.target.value)}
                        value={inputValue}
                        type="text"
                        placeholder="Текст задачи"
                    />
                    <div className="tasks__form-control">
                        <button onClick={() => addNewTask()} className="btn-green">Добавить задачу</button>
                        <button onClick={() => cancelAddTask()} className="btn-grey">Отмена</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default TaskForm;