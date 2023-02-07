import React, { useState } from "react";
import Web3 from "web3";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <div>
      <img
        src="https://i.seadn.io/gae/3wmHntqiSg6KOpfniQjmLHRRzuX6yqn6gzYCoQDgoJi7oAPb5e7gpuszH8jmuIL1LXEq9dpUOsGRxSrPjEMf9BXAokNjyIcpWpml?auto=format&w=384"
        alt="Descrição da imagem"
      />
      <input
        type="number"
        min={1}
        max={10}
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={handleClick}>Purchase</button>
      <br />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default App;
