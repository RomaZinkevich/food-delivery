import React, { useEffect, useState } from "react";
import Menu from "../Components/Menu";
import CardComp from "../Components/CardComp";
import "../Styles/Home.css";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [displayedWord, setDisplayedWord] = useState<string>("");
  const words = [
    "Lorem ipsum dolor sit",
    "Amet consectetur adipisicing elit",
    "Totam minus dolores voluptatem!",
  ];
  // let element = document.getElementById("word");

  function sleep(ms: number | undefined) {
    return new Promise((res) => {
      setTimeout(res, ms);
    });
  }
  const loop = async () => {
    let currInd = 0;
    while (true) {
      let currWord = words[currInd];
      for (let i = 0; i < currWord.length; i++) {
        setDisplayedWord(currWord.slice(0, i + 1));
        await sleep(100);
      }

      await sleep(1000);

      for (let i = currWord.length; i > 0; i--) {
        setDisplayedWord(currWord.slice(0, i - 1));
        await sleep(100);
      }

      await sleep(1000);

      if (currInd != words.length - 1) {
        currInd++;
      } else {
        currInd = 0;
      }
    }
  };
  useEffect(() => {
    loop();
  }, []);

  return (
    <div>
      <div className="header">
        <div className="content">
          <h2 id="word">
            {displayedWord}
            <span id="cursor">|</span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            labore architecto nobis accusantium commodi cumque modi reiciendis
            amet atque facere, quidem, totam dicta dolorem eos sit similique
            molestias sed! Consequatur dicta eius sed quisquam.
          </p>
        </div>
      </div>
      <Menu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CardComp />
    </div>
  );
};

export default Home;
