import './List.scss';

export const List = ({ items }) => {
    // console.log(items)
    
    return (
        <ul className="todo__list">
            {
                items.map((item, index) =>
                    <li key={index} className={item.active ? 'active' : ''}>
                        <i>
                            {item.icon ? item.icon : <i className={`badge badge--${item.color}`} />}
                        </i>
                        <span>{item.label}</span>
                    </li>
                )
            }
        </ul>
    )
}