import Counter from "./components/Counter";
import Stats from "./components/Stats";
function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl mt-10">Counter Application</h1>
      <Counter />
      <Counter />
      <Counter />
      <Stats />
    </div>
  );
}

export default App;
