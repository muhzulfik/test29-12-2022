import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const sendFromNetworkCall = (data) => console.log(data);

export default function Home() {
  const numb = [
    83, 1, 78, 26, 67, 54, 49, 7, 36, 99, 26, 19, 15, 7, 21, 39, 7, 2, 8,
  ];

  const lenNumb = numb.length;

  const duplicateNumber = (dataNumb) =>
    numb.filter((item, index) => dataNumb.indexOf(item) !== index);

  const groupNumber = (dataNumb) => {
    let genap = [];
    let ganjil = [];
    for (let i = 0; i < dataNumb.length; i++) {
      if (dataNumb[i] % 2 === 0) {
        genap.push(dataNumb[i]);
      } else if (dataNumb[i] % 2 !== 0) {
        ganjil.push(dataNumb[i]);
      }
    }

    console.log(genap);
    console.log(genap.length);
    console.log(ganjil);
    console.log(ganjil.length);
  };

  const smallNumber = (dataNumb) => {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < dataNumb.length; i += 1) {
        if (dataNumb[i - 1] > dataNumb[i]) {
          done = false;
          let tmp = dataNumb[i - 1];
          dataNumb[i - 1] = dataNumb[i];
          dataNumb[i] = tmp;
        }
      }
    }

    return dataNumb;
  };

  const bigNumber = (dataNumb) => {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < dataNumb.length; i += 1) {
        if (dataNumb[i - 1] < dataNumb[i]) {
          done = false;
          let tmp = dataNumb[i - 1];
          dataNumb[i - 1] = dataNumb[i];
          dataNumb[i] = tmp;
        }
      }
    }

    return dataNumb;
  };

  console.log("ini small number", smallNumber(numb));
  console.log("ini big number", bigNumber(numb));
  console.log("ini ganjil & genap", groupNumber(numb));
  console.log("ini to find duplicate", duplicateNumber(numb));
  console.log("lenNumb", lenNumb);

  const [count, setCount] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    sendFromNetworkCall(count);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="count">Sort Small Number</label>
        <input
          id="count"
          type="text"
          name="count"
          value={count}
          onChange={handleCount}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>{lenNumb}</p>
      <p>{duplicateNumber(numb)}</p>
      <p>{smallNumber(numb)}</p>
      <p>{bigNumber(numb)}</p>
    </>
  );
}
