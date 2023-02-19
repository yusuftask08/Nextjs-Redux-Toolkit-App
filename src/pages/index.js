import { count, decrement, increment } from '@/store/Slices/CounterSlice';
import styles from '@/styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector(count);
  
  return (
    <>
      <div className={styles.counterContainer}>
        <h2>Counter: {counter} </h2>
        <div>
          <button onClick={() => dispatch(increment(2))}> Counter ++ </button>
          <button onClick={() => dispatch(decrement(2))}> Counter -- </button>
        </div>
      </div>
    </>
  )
}
