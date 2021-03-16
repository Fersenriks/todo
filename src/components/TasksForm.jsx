import React from 'react';
import axios from 'axios'

import plusSvg from '../assets/img/plus.svg';

import './TaskForm.scss';

const TaskForm = ({taskItem, onAddTask}) => {

    const [addTask, setAddTask] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(null)

    const toggleTaskForm = () => {
        setAddTask(!addTask);
        setInputValue('');
    }

    const addNewTask = () => {
        const taskObj = {
            listId: taskItem.id,
            text: inputValue,
            completed: false
        };
        setIsLoading(true)
        axios.post(`http://localhost:3001/tasks/`, taskObj).then(({data}) => {
            onAddTask(taskItem.id, data)
            toggleTaskForm();
        }).catch(() => {
            alert('Ошибка добавления списка!')
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const cancelAddTask = () => {
        toggleTaskForm();
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
                        <button onClick={() => addNewTask()} disabled={isLoading} className="btn-green">{isLoading ? 'Добавление...' : 'Добавить задачу'}</button>
                        <button onClick={() => cancelAddTask()} className="btn-grey">Отмена</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default TaskForm;