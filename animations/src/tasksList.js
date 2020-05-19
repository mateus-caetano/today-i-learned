import React from "react";
import {
    FlatList
} from 'react-native';

import Task from "./task";

const data = []

for (let i = 0; i < 5; i++){
    data.push({
        id: i,
        task: `task ${i}`
    })
}

export default function TaskList() {
    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item: task }) => <Task task={task} />}
        />
    )
}