"use client"

import { useState } from "react";
import TodoBar from "./todoBar";
import TodoList from "./todoList";
import styles from "./styles.module.scss"
import Image from "next/image"
import wallpaper from "./public/wallpaper.jpg"

export default function RootPage() {

    const [ todos, setTodos ] = useState([])

    return (
        <div className={styles.window}>
            <Image src={wallpaper} alt="Wallpaper" priority={true} className={styles.background} />
            <TodoList list={todos} add={setTodos} />
            <TodoBar list={todos} add={setTodos} />
            <p className={styles.caption}>Photo by <a href="https://unsplash.com/@fakurian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Milad Fakurian</a> on <a href="https://unsplash.com/photos/an-abstract-image-of-a-white-object-with-a-gray-background-Hp-KRSsV4H0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
        </div>
    )
}