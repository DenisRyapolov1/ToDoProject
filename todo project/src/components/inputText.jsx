import { useState } from "react"

const InputTask = ({ addTask }) => {
    const [input, setInput] = useState('')

    const handleAddTask = () => {
        if (input.trim() !== '') {
            addTask(input)
            setInput('')
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask()
        }
    }

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Введите задачу"
            />
            <button onClick={handleAddTask}>Добавить</button>
        </div>
    )
}

export default InputTask