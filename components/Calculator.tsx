import { useState } from 'react';

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
    <div>
      <div>
        <input type="text" value={input} readOnly />
        {result !== null && <div>Result: {result}</div>}
      </div>
      <div>
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', 'C', '/'].map((value) => (
          <button key={value} onClick={() => value === '=' ? calculateResult() : value === 'C' ? clearInput() : handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;