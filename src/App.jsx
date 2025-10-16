import { useState } from "react"; // Importing useState from React
import "./App.css"; // Importing CSS file
import calculateMortgage from "./Math.js";

function App() {
  const [balance, setBalance] = useState(""); // State for balance
  const [rate, setRate] = useState(""); // State for rate
  const [term, setTerm] = useState("15"); // State for loan term
  const [output, setOutput] = useState(""); // State for output message

  // Wrapper function inside component
  function HandleCalculate() {
    const result = calculateMortgage(balance, rate, term);
    if (isNaN(result)){
      return setOutput("Please enter valid inputs")
    }
    setOutput(`$${result} is your payment`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-400 to-black p-6">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xl animate-fall"
            style={{
              left: `${Math.random() * 100}%`, // Random horizontal position
              top: `-${Math.random() * 100}px`, // Random start above the screen
              animationDelay: `${Math.random() * 5}s`, // Random delay before falling
              animationDuration: `${5 + Math.random() * 5}s`, // Random fall speed
            }}
          >
            🏠
          </div>
        ))}
      </div>

      <h1 className="font-montserrat text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 via-yellow-500 to-yellow-950 animate-gradient-x text-center mb-8 z-10">
        Mortgage Calculator
      </h1>

      <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg w-full max-w-md">
        <input
          type="number"
          data-testid="balance"
          placeholder="Enter loan balance"
          value={balance}
          onChange={(event) => setBalance(event.target.value)}
          className="w-full bg-white/10 text-white placeholder-black rounded-xl px-4 py-3 mt-4 border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:scale-105 transition-all duration-300"
        />

        <input
          type="number"
          data-testid="rate"
          placeholder="Enter APR (%)"
          step="0.01"
          value={rate}
          onChange={(event) => setRate(event.target.value)}
          className="w-full bg-white/10 text-white placeholder-black rounded-xl px-4 py-3 mt-4 border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-all duration-300"
        />

        <select
          data-testid="term"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          className="w-full bg-white/10 text-white rounded-xl px-4 py-3 mt-4 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
        >
          <option value="15">15 years</option>
          <option value="30">30 years</option>
        </select>

        <button
          onClick={HandleCalculate}
          data-testid="submit"
          className="mt-6 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 animate-pulse"
        >
          📬 Calculate
        </button>

        <div
          id="output"
          data-testid="output"
          key={output} // <- this forces React to remount the div
          className="mt-4 text-xl font-semibold text-center text-white animate-fade-in delay-700"
        >
          {output}
        </div>
      </div>
    </div>
  );
}

export default App;
