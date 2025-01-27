import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  return (
    <>
      <form>
        <div>
          <input type="text" value={input} readOnly />
        </div>
        <div>
          <input type="button" value="1" onClick={handleClick} />
          <input type="button" value="2" onClick={handleClick} />
          <input type="button" value="3" onClick={handleClick} />
          <input type="button" value="+" onClick={handleClick} />
        </div>
        <div>
          <input type="button" value="4" onClick={handleClick} />
          <input type="button" value="5" onClick={handleClick} />
          <input type="button" value="6" onClick={handleClick} />
          <input type="button" value="-" onClick={handleClick} />
        </div>
        <div>
          <input type="button" value="7" onClick={handleClick} />
          <input type="button" value="8" onClick={handleClick} />
          <input type="button" value="9" onClick={handleClick} />
          <input type="button" value="*" onClick={handleClick} />
        </div>
        <div>
          <input type="button" value="0" onClick={handleClick} />
          <input type="button" value="C" onClick={() => setInput('')} />
          <input type="button" value="=" onClick={() => setInput(eval(input))} />
          <input type="button" value="/" onClick={handleClick} />
        </div>
      </form>
    </>
  );
}

export default App;
