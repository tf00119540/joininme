import GamesFilters from "./GamesFilters";
import GamesHome from "./GamesHome";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import axios from "axios";



function GamesMainPage() {
  const [showGamesHome, setShowGamesHome] = useState(true);
  const [showGamesFilter, setShowGamesFilter] = useState(false);

  const [inputSearch, setInputSearch] = useState("");
  const [buttonSearch, setButtonSearch] = useState(true);
  const [selectedCityValue, setSlectedCityValue] = useState("請選擇城市");
  const [selectedPeopleValue, setSlectedPeopleValue] = useState(0);

  const [datas, setDatas] = useState([]);

  // 讀取JSON檔值
  const getDatas = async () => {
    const res = await axios.get("/data/games.json");
    setDatas(res.data);
  };

  // didMount 
  useEffect(() => {
    getDatas();
  }, []);

  // 搜尋bar功能
  const handleInputSearch = (e) => {
    setShowGamesHome(false);
    setShowGamesFilter(true);
    setInputSearch(e.target.value);
  };

  // 搜尋bar button功能
  const handleButtonSearch = () => {
    setShowGamesHome(false);
    setShowGamesFilter(true);
    setButtonSearch(!buttonSearch);
  };

  // 下拉式city功能
  const handleSelectedCity = (e) => {
    setShowGamesHome(false);
    setShowGamesFilter(true);
    setSlectedCityValue(e.target.value);
  };

  // 下拉式人數功能
  const handleSelectedPeople = (e) => {
    setShowGamesHome(false);
    setShowGamesFilter(true);
    setSlectedPeopleValue(e.target.value);
  };

  // 返回遊戲主頁按鈕
  const handleRolBack = () => {
    setShowGamesHome(true);
    setShowGamesFilter(false);
  };

  // Database資料庫
  const cities = [
    { label: "台北市", value: "台北市" },
    { label: "新北市", value: "新北市" },
    { label: "桃園市", value: "桃園市" },
    { label: "新竹市", value: "新竹市" },
    { label: "台中市", value: "台中市" },
    { label: "高雄市", value: "高雄市" },
  ];

  const people = [
    { label: "1人", value: 1 },
    { label: "2人", value: 2 },
    { label: "3人", value: 3 },
    { label: "4人", value: 4 },
    { label: "5人", value: 5 },
    { label: "6人", value: 6 },
    { label: "7人", value: 7 },
    { label: "8人", value: 8 },
    { label: "9人", value: 9 },
    { label: "10人", value: 10 },
  ];

  return (
    <div className="gamesMain">
      <div className="gamesNavbar"></div>
      {/* 搜尋欄位 */}
      <div className="gamesSearch gamesInputStyle">
        <input
          className="inputSearch gamesNone"
          type="text"
          placeholder="請輸入關鍵字"
          value={inputSearch}
          onChange={handleInputSearch}
        />

        {/* 搜尋欄位按鈕 */}
        <button
          className="buttonSearch gamesNone"
          type="button"
          onClick={handleButtonSearch}
        >
          <span>|</span>
          <span>
            <AiOutlineSearch />
          </span>
        </button>
      </div>

      {/* 下拉式city功能 */}
      <select
        className="selectedCity gamesInputStyle"
        value={selectedCityValue}
        onChange={handleSelectedCity}
      >
        <option value="請選擇城市">請選擇城市</option>
        {cities.map((v, i) => {
          return (
            <option key={i} value={v.value}>
              {v.label}
            </option>
          );
        })}
      </select>

      {/* 下拉式人數功能 */}
      <select
        className="selectedPeople gamesInputStyle"
        value={selectedPeopleValue}
        onChange={handleSelectedPeople}
      >
        <option value="0">不限</option>
        {people.map((v, i) => {
          return (
            <option key={i} value={v.value}>
              {v.label}
            </option>
          );
        })}
      </select>
      {showGamesHome ? <GamesHome /> : null}
      {showGamesFilter ? (
        <GamesFilters handleRolBack={handleRolBack} datas={datas} />
      ) : null}
    </div>
  );
}

export default GamesMainPage