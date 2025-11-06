import { Button } from './components/Button';
import { Heading } from './components/Heading';
import './index.css';

function App() {
  return (
    <>
      <Heading>Hello World of Heading</Heading>
      <Heading type='h2' color='white'>Hello World of Heading 2</Heading>
      <Button>Botão 1</Button>
      <Button variant='secondary'>Botão 2</Button>
      <Button isBold>Botão 3</Button>
      <Button variant='secondary' isBold>Botão 4</Button>
    </>
  )
}

export default App
