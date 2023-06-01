import React from 'react'
import Upload from "../artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

// import FileUpload from './FileUpload';
// import Display from './Display';
import Modal from './Modal';
import "./Modal.css";

function GetData() {
  
  const [data, setData] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log("dataArray", dataArray);
      } else {
        dataArray = await contract.display(account);
        console.log("dataArray", dataArray);
      }
    } catch (e) {
      console.log(e)
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      console.log(str_array);
      const images = str_array.map((item, i) => {
        console.log("item", item)
        console.log("i", i)
        return (
          <a href={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} key={i} target="_blank">
            <div className="container_g">
              {/* <article> */}
              <img
                key={i}
                src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                alt="file"
              // className="image-list"
              ></img>
              <div class="container-content">
                <span className="title">Document-{i + 1}</span>
              </div>
              {/* </article> */}
            </div>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  }

  return (
    <>
    {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}

        <div className='home'>
          <div className='accountHeader'>

            <h1 className = 'gradient__text'>Decentralised Dropbox</h1>
            {/* <div className="bg"></div>
          <div className="bg bg2"></div>
        <div className="bg bg3"></div> */}

            <p className='accountStatus'>
              Account : {account ? account : "Not connected"}
            </p>
          </div>
          
        
        </div>
          <div className="address-fields">

      <input
        type="text"
        placeholder="Enter Address"
        className="address" />

      <button className="center button" onClick={getdata}>
        Get Data
      </button>

      <div className="grid">
        {data}
      </div>

      </div>

    
    </>
  )
}

export default GetData