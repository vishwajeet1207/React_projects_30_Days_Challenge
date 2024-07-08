import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllow, setnumberAllow] = useState(true);
  const [symbolAllow, setsymbolAllow] = useState(true);
  // const [upperAllow, setupperAllow]=useState(true);
  // const [lowerAllow, setlowerAllow]=useState(true);
  const [password, setpassword] = useState("");

  const passref=useRef(null)
  const passwordGerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (symbolAllow) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllow, symbolAllow, setpassword]);

  const copypasswordofcliboard=useCallback(()=>{
   passref.current?.select();
   passref.current?.setSelectionRange(0,999);
   window.navigator.clipboard.writeText(password);
     
  },[password])

  useEffect(()=>{passwordGerator()},[length,numberAllow,symbolAllow,passwordGerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6  text-orange-500 bg-gray-700">
        <h1 className="text-white text-3xl mb-4">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none px-3 py-1 w-full mb-5"
            placeholder="Password"
            readOnly
            ref={passref}
          />
          <button onClick={copypasswordofcliboard}
            className="outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0 mb-5"
          >
            {" "}
            Copy
          </button>
        </div>
        <div className="flex text-5m gap-x-2">
          <div className="flex items-center gap-x-1 mb-3">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setnumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={symbolAllow}
          id="numberInput"
          onChange={() => {
              setsymbolAllow((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Symbol</label>
      </div>
        </div>
      </div>
    </>
  );
}

export default App;
