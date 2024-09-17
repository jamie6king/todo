import styles from "./styles.module.scss"

export default function TodoList({ list, add }) {

    const toggleTodo = (id) => add(list.map(todo => todo.id == id ? { ...todo, checked: !todo.checked } : todo ))
    const deleteTodo = (id) => add(state => state.filter((todo) => todo.id !== id))

    return (
        <div className={styles.todolist}>
            { list.map((todo) => {
                return (
                    <div key={todo.id}>
                        <p>{todo.todo}</p>  // Added missing opening angle bracket
                        <input id={todo.id} type="checkbox" name="checked" checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
                        <button id={todo.id} name="delete" onClick={() => deleteTodo(todo.id)}>🗑️</button> // Added missing opening angle bracket
                    </div>
                )
            })}
        </div>
    )
}