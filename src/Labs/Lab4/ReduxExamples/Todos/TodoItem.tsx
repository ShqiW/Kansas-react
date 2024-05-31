import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo }) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item d-flex align-items-center">
            <span className="flex-grow-1">{todo.title}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click" className="btn btn-danger ms-2"> Delete </button>
            <button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click" className="btn btn-primary ms-2"> Edit </button>
        </li>
    );
}


