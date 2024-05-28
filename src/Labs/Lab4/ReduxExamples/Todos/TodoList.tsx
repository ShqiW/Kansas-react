import React, { useState } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node" }]);
    const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    const addTodo = (todo) => {
        const newTodos = [...todos, {
            ...todo,
            id: new Date().getTime().toString()
        }];
        setTodos(newTodos);
        setTodo({ id: "-1", title: "" });
    };
    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    const updateTodo = (todo) => {
        const newTodos = todos.map((item) =>
            (item.id === todo.id ? todo : item));
        setTodos(newTodos);
        setTodo({ id: "-1", title: "" });
    };
    return (
        <div className="container">
            <h2>Todo List</h2>
            <div >
                <div className="row">
                    <div className="col">
                        <input
                            value={todo.title}
                            onChange={(e) =>
                                setTodo({
                                    ...todo,
                                    title: e.target.value
                                })}
                            className="form-control border rounded"
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            onClick={() => updateTodo(todo)}
                            id="wd-update-todo-click"
                            className="btn btn-warning ml-2 me-2">
                            Update
                        </button>
                        <button
                            onClick={() => addTodo(todo)}
                            id="wd-add-todo-click"
                            className="btn btn-success ml-2">
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <ul className="list-group mt-3">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>{todo.title}</div>
                        <div>
                            <button
                                onClick={() => setTodo(todo)}
                                id="wd-set-todo-click"
                                className="btn btn-primary me-2">
                                Edit
                            </button>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                id="wd-delete-todo-click"
                                className="btn btn-danger ml-2">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
