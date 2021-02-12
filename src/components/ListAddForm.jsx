import React from 'react'
import Badge from './Badge'
import { List } from './List'

import closeBtn from '../assets/img/close.svg'

import './ListAddForm.scss'

const ListAddBtn = ({ colors }) => {

    const [visibleForm, setVisibleForm] = React.useState(false);
    const [selectColor, setSelectColor] = React.useState(colors[0].id);

    return (
        <React.Fragment>
            <List
                onClick={() => setVisibleForm(!visibleForm)}
                items={[
                    {
                        icon:
                            <svg height="12px" viewBox="0 0 426.66667 426.66667" width="12px" xmlns="http://www.w3.org/2000/svg" fill="#868686">
                                <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437
                                0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031
                                0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031
                                21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594
                                21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/>
                            </svg>,
                        label: 'Добавить список',
                        className: 'todo__list--add'
                    }
                ]}
            />
            {
                visibleForm &&
                (<div className="todo__add-form">
                    <img onClick={() => setVisibleForm(!visibleForm)} src={closeBtn} className="todo__add-form--close" />
                    <input type="text" placeholder="Название списка..." />
                    <div className="todo__add-form--colors">

                        {
                            colors.map((itemColor) => <Badge
                                onClick={() => setSelectColor(itemColor.id)}
                                key={itemColor.id}
                                color={itemColor.name}
                                className={selectColor === itemColor.id && 'active'}
                            />)
                        }
                    </div>
                    <button className="todo__add-form--btn">Добавить</button>
                </div>)
            }
        </React.Fragment>
    )
}

export default ListAddBtn;