import { Button } from './components/Button';
import './index.css';

function App() {
  return (
    <>
      <h1 className='text-indigo-800'>Hello World</h1>
      <Button>Botão 1</Button>
      <Button variant='secondary'>Botão 2</Button>
      <Button isBold>Botão 3</Button>
      <Button variant='secondary' isBold>Botão 4</Button>
    </>
  )
}

export default App
