import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './routes/lend/components/Card'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className="card-container">
        <Stack spacing={2} direction="row">
          <Button variant="text">One</Button>
          <Button variant="contained">Two</Button>
          <Button variant="outlined">Three</Button>
        </Stack>
        
        <Card 
          // badge=
          reason = 'Need PS5'
          valuation= '10000'
          duration= '10 months'
          name= "Akhil Gogineni"
          // btn={}
          // image=''
        />

        <Card 
          // badge=
          reason = 'Need Iphone'
          valuation= '50000'
          duration= '1 month'
          name= "Aashu Gogineni"
          // btn={}
          // image=''
        />

        <Card 
          // badge=
          reason = 'Need toys'
          valuation= '100'
          duration= '1 day'
          name= "Diya Gogineni"
          // btn={}
          // image=''
        />
      </section>
      
        
    </div>
  )
}

export default App
