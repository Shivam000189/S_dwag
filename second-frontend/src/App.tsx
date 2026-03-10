
import './App.css'
import { PlusIcon } from './components/icons/PlusButton'
import { Button } from './components/ui/Button'

function App() {
  

  return (
    <>
        <Button startIcon={<PlusIcon size='lg'/>} variant='primary' text="Share" size='md'></Button>
        <Button variant='secondary' text="Content me" size='md'></Button>
    </>
  )
}

export default App
