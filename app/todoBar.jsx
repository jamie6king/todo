import { useState } from "react"
import shortUUID from "short-uuid"
import styles from "./styles.module.scss"

export default function TodoBar({ list, add }) {

    const [ todo, setTodo ] = useState("")

    const newTodo = (e) => {
        e.preventDefault()

        const todoObj = { id: shortUUID.generate(), todo, checked: false }

        add([ ...list, todoObj ])
        setTodo("")
    }

    return (
        <div className={styles.todobar}>
            <form onSubmit={newTodo}>
                <input id="todo" type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)} required placeholder="Enter your todo..." />
                <input id="submit" type="submit" name="submit" value="Add" />
            </form>
        </div>
    )
}