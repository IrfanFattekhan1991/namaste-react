import { useState, useMemo } from "react";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering...");

  //Function to check the number is prime
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  //Function to find the nth prime number
  function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  }

  const primeNum = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "w-96 h-96 m-4 p-2 border border-black " +
        (isDarkTheme && "bg-gray-800 text-white")
      }
    >
      <div>
        <button
          className="border border-black m-4 p-4 text-black rounded-lg bg-gray-400"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black m-4 text-green-700"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="m-4">Prime Num: {primeNum}</div>
      </div>
    </div>
  );
};

export default Demo;
