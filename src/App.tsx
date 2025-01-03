import "./App.css";
import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <div>
      <div>
        <h1>Counter With Redux</h1>
        <h2>{count}</h2>
        <Button onClick={() => handleIncrement(5)}>Increment By 5</Button>
        <br />
        <Button onClick={() => handleIncrement(1)}>Increment</Button>
        <Button onClick={() => handleDecrement(1)}>Decrement</Button>
      </div>
    </div>
  );
}

export default App;
