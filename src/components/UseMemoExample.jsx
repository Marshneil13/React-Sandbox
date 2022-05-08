import {useState, useEffect, useRef, useMemo} from 'react'

function UseMemoExample() {

    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    const sqrt = useMemo(() => getSqrt(number), [number])

    const renders = useRef(1)
    console.log('Render value',renders.current);
    useEffect(() => {
        renders.current = renders.current + 1;
    },[number])

    const onClick = () => {
        setInc((prevState) => {
        console.log(prevState+1);
        return prevState+1
        })
    }

  return (
    <div>
        <input 
        type="number"
        value={number}
        onChange = {(e) => setNumber(e.target.value)} 
        className="form-control w-25" />
        <h2 className='my-2'>
            The square root of {number} is {sqrt}
        </h2>
        <button onClick={onClick} className="btn btn-primary mt-3">Re Render</button>
        <h1>Renders: {renders.current}</h1>
    </div>
  )
}

function getSqrt(n) {
    for(let i=0; i<10000; i++){
        console.log(i);
    }

    console.log('Expensive Function Called!');
    return Math.sqrt(n)
}

export default UseMemoExample