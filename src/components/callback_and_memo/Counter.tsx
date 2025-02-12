import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: { counter: { count: number } }) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </section>
    );
}

export default Counter;