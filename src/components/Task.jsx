import './Task.scss'
// import checkSvg from '../assets/img/check.svg'

const Task = () => {
    return (
        <div className="tasks">
            <h2 className="tasks__title">Фильмы</h2>

            <div className="tasks__item">
                
                <div className="task__item-row">
                    <div className="checkbox">
                        <input id="check" type="checkbox" />
                        <label htmlFor="check">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </label>
                    </div>
                    <div className="task-item">Прочитать про ссылки JS.</div>
                </div>
        
            </div>

        </div>
    )
}

export default Task;