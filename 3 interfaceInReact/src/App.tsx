import Todo from "./components/Todo"

function App() {

  return (
    <>
    <div>
      <h1>TODOs</h1>
      <Todo todo={{
        id: 1,
        title: 'Eat Biryani',
        description: 'Eat chicken biryani with boondi ka raita and chaat masala',
        done: true
      }} />
    </div>
    </>
  )
}

export default App
