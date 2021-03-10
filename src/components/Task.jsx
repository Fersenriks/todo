import './Task.scss'
// import checkSvg from '../assets/img/check.svg'

const Task = ({taskItem}) => {

    // console.log(taskItem)

    // taskItem.tasks.forEach(task => console.log(task.text))

    return (
        <div className="tasks">
            <h2 className="tasks__title">Фильмы</h2>

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

        </div>
    )
}

export default Task;