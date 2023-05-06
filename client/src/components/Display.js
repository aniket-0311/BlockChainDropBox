import { useState } from "react";
import "./Display.css";
import { Link } from "react-router-dom";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log("dataArray",dataArray);
      } else {
        dataArray = await contract.display(account);
        console.log("dataArray",dataArray);
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
        console.log("item",item)
        console.log("i",i)
        return (
          <a href={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} key={i} target="_blank">
            <div className = "container">
              {/* <article> */}
                <img
                  key={i}
                  src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                  alt="file"
                  // className="image-list"
                ></img>
              {/* </article> */}
            </div>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
      
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
  );
};
export default Display;
