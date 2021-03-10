import React, { useEffect } from 'react'
import axios from 'axios'
import Badge from './Badge'
import { List } from './List'

import closeBtn from '../assets/img/close.svg'

import './ListAddForm.scss'

const ListAddBtn = ({ colors, setListItem, listItem, onAddList }) => {

    const [visibleForm, setVisibleForm] = React.useState(false);
    const [selectColor, setSelectColor] = React.useState(1);
    const [inputValue, setInputValue] = React.useState('')

    useEffect(() => {
        if(Array.isArray(colors)){
            setSelectColor(colors[0].id)
        }
    }, [colors])

    const addList = () => {

        if(!inputValue) return

        // setListItem([...listItem, {
        //     id: Math.random(),
        //     name: inputValue,
        //     color: colors.filter(c => c.id === selectColor)[0].name,
        // }])
        const color = colors.filter(c => c.id === selectColor)[0].id;
        const colorName = colors.filter(c => c.id === selectColor)[0].name;
        // const color = colors.id;
        axios.post('http://localhost:3001/lists', {
            name: inputValue,
            colorId: color
        }).then(({data}) => {
            onAddList({ ...data, color: {name: colorName}})
        })

        setInputValue('')
        setSelectColor(colors[0].id)
        setVisibleForm(false)
    }

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
                        name: 'Добавить список',
                        className: 'todo__list--add'
                    }
                ]}
            />
            {
                visibleForm &&
                (<div className="todo__add-form">
                    <img onClick={() => {
                        setVisibleForm(!visibleForm)
                        setInputValue('')
                        setSelectColor(colors[0].id)
                    }}
                        src={closeBtn}
                        className="todo__add-form--close" />

                    <input
                        value={inputValue}
                        onChange={event => setInputValue(event.target.value)}
                        type="text"
                        placeholder="Название списка..."
                    />

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
                    <button onClick={addList} className="todo__add-form--btn">Добавить</button>
                </div>)
            }
        </React.Fragment>
    )
}

export default ListAddBtn;