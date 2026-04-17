import { useState } from "react";
import Button from "./Button";
import Count from "./Count";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleInrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <section className="w-full h-40  flex flex-col  gap-10 justify-center items-center mt-10">
      <Count count={count} />

      <div className="flex gap-10">
        <Button handler={handleInrement}>Increment</Button>
        <Button type="danger" handler={handleDecrement}>
          Decrement
        </Button>
      </div>
    </section>
  );
}
