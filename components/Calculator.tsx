"use client";

import { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      // Using eval is not safe for production; this is for demonstration only.
      setResult(eval(input)); 
    } catch (error) {
      setResult(null);
    }
  };

  const clearInput = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className={styles.calculator}>
      <input
        className={styles.display}
        type="text"
        value={input}
        readOnly
      />
      {result !== null && <div className={styles.result}>Result: {result}</div>}
      <div>
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', 'C', '/'].map((value) => (
          <button 
            key={value} 
            className={styles.button} 
            onClick={() => value === '=' ? calculateResult() : value === 'C' ? clearInput() : handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;