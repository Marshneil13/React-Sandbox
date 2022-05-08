import { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoExample() {

  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(1)

  // const sqrt = useMemo(() => getSqrt(number))

  const renders = useRef(0);
  const firstTime = useRef(true);
  console.log('Render value', renders.current);
  useEffect(() => {
    if (firstTime.current === true) {
      firstTime.current = false;
      return;
    }
    renders.current = renders.current + 1;
    console.log(renders.current, "renders in useEffect");
  }, [renders.current]);

  const onClick = () => {
    console.log(renders.current, "renders.current");
    setInc(inc + 1);
  }
  return (
    <div>
      {/* <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25" />
      <h2 className='my-2'>
        The square root of {number} is {sqrt}
      </h2> */}
      <button onClick={onClick} className="btn btn-primary mt-3">Re Render</button>
      <h1>Renders: {renders.current}</h1>
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }

  console.log('Expensive Function Called!');
  return Math.sqrt(n)
}

export default UseMemoExample