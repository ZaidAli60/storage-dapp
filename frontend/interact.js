
const contractAbi = [
    {
      "inputs": [],
      "name": "retrieve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "num",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const web3 = new Web3("http://127.0.0.1:8545");
  const contractAddress = "0xc2c750420a7683a28c393ebb0e3f6d7553751590";
  const storageContract = new web3.eth.Contract(contractAbi,contractAddress);


  async function interactWithContract(value) {
    console.log("Interacting with contract at address" + contractAddress)

    const newValue = value;
    const accounts = await web3.eth.getAccounts();

    if (accounts.length == 0){
        console.log("No accounts found");
        return;
    }

    const fromAddress = accounts[0];
    await storageContract.methods.store(newValue).send(
        {
            from: fromAddress,
            gasPrice: web3.utils.toWei("20","gwei"),
        }
    )

    document.getElementById("msg").innerHTML= `Stored ${newValue} in the contract address ${contractAddress}`
  }


  async function getStoredValue() {
    console.log("Getting stored vaslue from contract at address" + contractAddress)

    const currentValue = await storageContract.methods.retrieve().call();
    document.getElementById("msg").innerHTML= `The stored value in the contract at address ${contractAddress}`
    document.getElementById("output").innerHTML = currentValue;

    
  }



  document.getElementById("set").addEventListener("click", function () {
    interactWithContract(document.getElementById("myInput").value)
  }) 

  document.getElementById("get").addEventListener("click", function () {
    getStoredValue()
  }) 