import { useState } from "react"
import shortUUID from "short-uuid"
import styles from "./styles.module.scss"

export default function TodoBar({ list, add }) {

    const [ todo, setTodo ] = useState("")

    function newTodo(e) {
        e.preventDefault()

        const todoObj = { id: shortUUID.generate(), todo: todo, checked: false }

        // alert(JSON.stringify(todoObj))

        add([ ...list, todoObj ])
        setTodo("")
    }

    return (
        <div className={styles.todobar}>
            <form onSubmit={newTodo}>
                <input id="todo" type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <input id="submit" type="submit" name="submit" value="Add" />
            </form>
        </div>
    )
}