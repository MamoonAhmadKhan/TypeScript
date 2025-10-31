interface TodoType {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

interface TodoInput {
    todo: TodoType;
}

const Todo = ({ todo }: TodoInput) => {
  return (
    <div>
        <p>{todo.id}</p>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <p>{todo.done}</p>
    </div>
  )
}

export default Todo