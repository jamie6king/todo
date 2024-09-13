"use client"

import { useState } from "react";
import TodoBar from "./todoBar";
import TodoList from "./todoList";
import styles from "./styles.module.scss"

export default function RootPage() {

    const [ todos, setTodos ] = useState([])

    return (
        <div className={styles.window}>
            <TodoList list={todos} add={setTodos} />
            <TodoBar list={todos} add={setTodos} />
        </div>
    )
}