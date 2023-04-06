import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './routes/lend/components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card
        body='Akhil Post'
        title='Need money'
        image='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffood-bank&psig=AOvVaw35jlIf29pQpSZ2xdk8ktVp&ust=1680841282264000&source=images&cd=vfe&ved=0CA8QjhxqFwoTCJCapu6zlP4CFQAAAAAdAAAAABAE'
        badge={{
          text: "New Post",
          filled: false,
        }}
        indicator="Sold"
        btn={{
          text: "Read Post",
          href: '#',
          type: 'primary',
          filled: true,
        }} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
