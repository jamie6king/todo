import styles from "./styles.module.scss"

export default function TodoList({ list, add }) {

    function toggleTodo(e, id) {

        add(list.map(todo => {

            return todo.id == id ? { ...todo, checked: !todo.checked } : todo

        }))
    }

    return (
        <div className={styles.todolist}>
            { list[0] != undefined && list.map((todo) => {

                console.log(JSON.stringify(todo))

                return (
                    <div key={todo.id}>
                        <p>{todo.todo}</p>

                        <input id={todo.id} type="checkbox" name="checked" checked={todo.checked} onChange={(e) => toggleTodo(e, todo.id)} />
                    </div>
                )
            })}
        </div>
    )
}