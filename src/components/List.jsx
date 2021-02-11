import './List.scss';
import classNames from 'classnames'

import Badge from './Badge'

export const List = ({ items, onClick }) => {
    // console.log(items)
    
    return (
        <ul onClick={onClick} className="todo__list">
            {
                items.map((item, index) =>
                    <li key={index} className={classNames(item.className, {'active': item.active})}>
                        <i>
                            {item.icon ? item.icon : <Badge color={item.color} />}
                        </i>
                        <span>{item.label}</span>
                    </li>
                )
            }
        </ul>
    )
}