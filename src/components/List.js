
export const List = ({items}) => {
    // console.log(props)
    return (
        <ul className="todo__list">
            {
                items.map((el) => 
                    <li>
                        <i>
                            <img src={el.icon} alt="menu icon" />
                        </i>
                        <span>{el.label}</span>
                    </li>
                )
            }
        </ul>
    )
}