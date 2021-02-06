import './Todo.scss';
import {List} from './components/List'
import menu from './assets/img/menu.svg'

export function Todo() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List 
          items={[
            {
              label: 'Задачи',
              icon: menu
            },
            {
              label: 'Пример',
              icon: menu
            }
          ]}
        />
      </div>
      <div className="todo__content">
        content
      </div>
    </div>
  );
}


