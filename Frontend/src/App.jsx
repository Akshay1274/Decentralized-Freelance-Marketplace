import { useState } from "react";
import { BrowserProvider,formatEther } from "ethers";
import { getContract } from "./services/contractService";

function App() {

  const [account, setAccount] = useState("");
  const [balance,setBalance] = useState("");
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("please install MetaMask");
      return;
    }
    const provider =new BrowserProvider(window.ethereum);
    const accounts = await provider.send(
      "eth_requestAccounts", 
      []);
      const signer = await provider.getSigner();
      
    setAccount(accounts[0]);
    const Walletbalance = await provider.getBalance(accounts[0]);

    setBalance(
      formatEther(Walletbalance)
    )
    const contract = getContract(signer);
console.log(contract);
  };
  return (

    <div>
      <h1>ChainHire</h1>
      <button onClick={connectWallet}>
        Connect Wallet
      </button>
      <h3>
        {account}
      </h3>
      <h3>
       
        Balance :{balance} ETH
      </h3>
    </div>
  );

}

export default App;