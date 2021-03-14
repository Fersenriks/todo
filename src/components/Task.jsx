import './Task.scss'
import axios from 'axios'
import renameSvg from '../assets/img/rename.svg'
import TaskForm from './TasksForm'

const Task = ({ taskItem, onEditTitle }) => {
    const editTitle = () => {
        const newTitle = window.prompt('Введите название', taskItem.name);

        if (newTitle) {
            onEditTitle(taskItem.id, newTitle)
        }

        axios.patch(`http://localhost:3001/lists/${taskItem.id}`, {
            name: newTitle
        }).catch(() => alert('Не удалось обновить название списка!!!'))
    }
    taskItem && console.log(taskItem)
    return (
        <div className="tasks">
            {
                taskItem &&
                <h2 className="tasks__title">{taskItem.name} <img onClick={() => editTitle()} src={renameSvg} alt="редактировать имя" /></h2>
            }
            {
                taskItem && taskItem.tasks.length > 0 ?
                    <>
                        {
                            taskItem.tasks.map(
                                (task, index) => (
                                    <div key={`task_${index}_${task.id}`} className="tasks__item">
                                        <div className="task__item-row">
                                            <div className="checkbox">
                                                <input id={task.id} type="checkbox" />
                                                <label htmlFor={task.id}>
                                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </label>
                                            </div>
                                            <div className="task-item">{task.text}</div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </>
                    :
                    <h3>Задачи отсутствуют</h3>
            }
            <TaskForm />
        </div>
    )
}

export default Task;