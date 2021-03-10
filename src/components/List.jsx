import './List.scss';
import classNames from 'classnames'
import removeSvg from '../assets/img/remove.svg'

import Badge from './Badge'

export const List = ({ items, onClick, isRemoveble, onRemove }) => {
    // console.log(isRemoveble)
    return (
        <ul onClick={onClick} className="todo__list">
            {
                items.map((item, index) =>
                    <li key={index} className={classNames(item.className, {'active': item.active})}>
                        <i>
                            {item.icon ? item.icon : <Badge color={item.color.name} />}
                        </i>
                        <span>{item.name}</span>
                        {isRemoveble ? <img onClick={() => onRemove(item, items)} className="todo__list-remove" src={removeSvg} alt="Remove" /> : ''}
                    </li>
                )
            }
        </ul>
    )
}