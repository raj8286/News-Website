import React, { useEffect, useState } from "react";
import Card from "./Card";
const Newsapp = () => {
  const [search, setSearch] = useState("Technology");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "1c34418e8f23429bb949fc7a32214d57";
  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    setNewsData(jsonData.articles);
    // console.log(jsonData.articles);
  };
  useEffect(() => {
    getData();
  }, [search]);
  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const userInput = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <div>
        <p className="head">Stay Updated with Trendy News!</p>
      </div>
        <div className="searchBar">
          <input
            className="searchBox"
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={()=>getData()} className="searchBtn">Search</button>
        </div>
      </nav>
      <div className="categoryBtn">
      <button onClick={userInput} value="technology">
          Technology
        </button>
        <button onClick={userInput} value="sports">
          Sports
        </button>
        <button onClick={userInput} value="politics">
          Politics
        </button>
        <button onClick={userInput} value="entertainment">
          Entertainment
        </button>
        <button onClick={userInput} value="health">
          Health
        </button>
        <button onClick={userInput} value="fitness">
          Fitness
        </button>
      </div>
      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};
export default Newsapp;
