import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [num, setNum] = useState(1);
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);

  const handleClick = () => {
    // Aqui você pode adicionar lógica adicional para manipular o valor do input
    console.log(num);
  };

  const handleClick1 = () => {
    // Aqui você pode adicionar lógica adicional para manipular o valor do input
    console.log(num1);
  };

  const handleClick2 = () => {
    // Aqui você pode adicionar lógica adicional para manipular o valor do input
    console.log(num2);
  };

  return (
    <div className="header">
      <div className="item1">
        <br />
        <img
          src="https://i.seadn.io/gae/3wmHntqiSg6KOpfniQjmLHRRzuX6yqn6gzYCoQDgoJi7oAPb5e7gpuszH8jmuIL1LXEq9dpUOsGRxSrPjEMf9BXAokNjyIcpWpml?auto=format&w=384"
          alt="Descrição da imagem"
        />
        <br />
        <br />
        <input
          type="number"
          min={1}
          max={10}
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <br />
        <br />

        <button onClick={handleClick}>Purchase ID 1</button>
        <br />
      </div>
      <br />

      <div className="item2">
        <img
          src="https://i.seadn.io/gae/cg_pO2RXfu21FowfToYRgiSq-mnjIUAU8j9ACWTBrds5Yfk2W6oCvHDxZoZl4p9_hwtkCBCxKsy5-mWVnG-rwO4K18SjA05Obn-kxw?auto=format&w=384"
          alt="Descrição da imagem"
        />
        <br />
        <br />
        <input
          type="number"
          min={1}
          max={10}
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <br />
        <br />

        <button onClick={handleClick1}>Purchase ID 2</button>
        <br />
      </div>
      <br />
      <div className="item3">
        <img
          src="https://i.seadn.io/gae/vVBsMoqul6ywAgKO-RV6CuaZTmhljboOquflPhc2WYzRomKq2IZAegjmEXOCux6kG7bnhxt7-CpV2hvjOcsfQDecmtDfi3sG_YY2?auto=format&w=384"
          alt="Descrição da imagem"
        />
        <br />
        <br />
        <input
          type="number"
          min={1}
          max={10}
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <br />
        <br />

        <button onClick={handleClick2}>Purchase ID 3</button>
        <br />
        <br />
      </div>
    </div>
  );
}
