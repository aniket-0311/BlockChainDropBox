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
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <div className="card data-back">

              <img
                key={i}
                src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                alt="new"
                className="image-list"
              ></img>
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
      <div className="image-list">

        {data}
      </div>
      <div className="address-fields">

        <input
          type="text"
          placeholder="Enter Address"
          className="address" />

        {/* <a href="/getData"> */}
        <button className="center button" onClick={getdata}>
          Get Data
        </button>
        {/* <div class="card">
          <div class="imgBx">
            <img src="" alt="images" />
          </div>
        </div> */}
        {/* </a> */}

      </div>
    </>
  );
};
export default Display;
