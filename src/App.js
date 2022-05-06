import useRefExample1 from './components/useRefExample1'
import {useRef} from 'react'

function App() {
const inputRef = useRef();
const paraRef = useRef();
const onSubmit = e => {
  e.preventDefault();
  console.log(inputRef.current.value);
  inputRef.current.value = 'Hello';
  inputRef.current.style.backgroundColor = 'purple';
  paraRef.current.innerText = 'Goodbye';
}

  return (
    <div className='container mt-5'>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input 
        type='text' 
        ref = {inputRef}
        id='name' 
        className='form-control mb-2'/>
        <button type='submit' className='btn btn-primary'>Submit</button>
        <p
        onClick={() => inputRef.current.focus()}
        ref={paraRef}>Hello!</p>
      </form>
    </div>
  )
}

export default App