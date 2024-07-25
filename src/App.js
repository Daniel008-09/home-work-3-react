import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const change1 = (e) => setNum1(e.target.value);
  const change2 = (e) => setNum2(e.target.value);

  const plus = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    setResult(number1 + number2);
  };

  const minus = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    setResult(number1 - number2);
  };

  const umnogit = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    setResult(number1 * number2);
  };

  const delit = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    setResult(number1 / number2);
  };

  const stepen = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    setResult(Math.pow(number1, number2));
  };

  const koren = () => {
    const number1 = parseFloat(num1);
    setResult(Math.sqrt(number1));
  };

  return (
    <div className="App">
      <h1>Калькулятор</h1>
      <div>
        <input type="number" value={num1} onChange={change1} placeholder="Первое число" />
        <input type="number" value={num2} onChange={change2} placeholder="Второе число" />
      </div>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={umnogit}>*</button>
        <button onClick={delit}>/</button>
        <button onClick={stepen}>^</button>
        <button onClick={koren}>√</button>
      </div>
      {result !== null && <h2>Результат: {result}</h2>}
    </div>
  );
}

export default App;
