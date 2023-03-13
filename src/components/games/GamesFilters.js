import { useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";

function GamesFilters(props) {
  const { handleRolBack, datas } = props;

  const [isActiveFilterBlock, setActiveFilterBlock] = useState("false");
  
  
  // 進階篩選按鈕功能
  const handleToggleFilterBlock = () => {
    setActiveFilterBlock(!isActiveFilterBlock);
  };

  console.log(datas);

  return (
    <>
      <div className="gamesFilterMain" type="button">
        {/* 進階篩選按鈕 */}
        <button
          className="buttonFilterMore gamesInputStyle"
          onClick={handleToggleFilterBlock}
        >
          進階篩選
        </button>

        {/* 返回遊戲主頁按鈕 */}
        <button
          className="rolBack gamesInputStyle"
          type="button"
          onClick={handleRolBack}
        >
          <div>
            <AiOutlineRollback />
          </div>
        </button>

        {/* 進階篩選區塊 */}
        <section
          className={isActiveFilterBlock ? "filterBlockoff" : "filterBlock"}
        >
          <div className="filterBlockSecond">
            <div className="filterBtnMain">
              <div className="filterBtnFirst">
                <p>難度</p>
              </div>
              <ul>
                <li className="filterBtn">全部難度</li>
                <li className="filterBtn">簡單</li>
                <li className="filterBtn">普通</li>
                <li className="filterBtn">困難</li>
              </ul>
            </div>
            <div className="filterBtnMain">
              <div className="filterBtnFirst">
                <p>類型</p>
              </div>
              <ul>
                <li className="filterBtn">全部類型</li>
                <li className="filterBtn">偵探推理</li>
                <li className="filterBtn">機關重重</li>
                <li className="filterBtn">劇情厲害</li>
                <li className="filterBtn">場景逼真</li>
                <li className="filterBtn">互動操作</li>
                <li className="filterBtn">謎題邏輯</li>
                <li className="filterBtn">輕鬆歡樂</li>
                <li className="filterBtn">恐怖驚悚</li>
                <li className="filterBtn">緊張刺激</li>
                <li className="filterBtn">勾心鬥角</li>
                <li className="filterBtn">團隊合作</li>
                <li className="filterBtn">親子同遊</li>
                <li className="filterBtn">玩法特別</li>
                <li className="filterBtn">角色扮演</li>
              </ul>
            </div>
            <div className="filterBtnMain">
              <div className="filterBtnFirst">
                <p>金額</p>
              </div>
              <ul>
                <li className="filterBtn">300↓</li>
                <li className="filterBtn">400↓</li>
                <li className="filterBtn">500↓</li>
                <li className="filterBtn">600↓</li>
                <li className="filterBtn">700↓</li>
                <li className="filterBtn">800↓</li>
              </ul>
            </div>
            <div className="filterBtnMain">
              <div className="filterBtnFirst">
                <p>時間</p>
              </div>
              <ul>
                <li className="filterBtn">全部時間</li>
                <li className="filterBtn">30分</li>
                <li className="filterBtn">60分</li>
                <li className="filterBtn">90分</li>
                <li className="filterBtn">120分</li>
              </ul>
            </div>
            <div className="filterBtnMain">
              <div className="filterBtnFirst">
                <p>其他</p>
              </div>
              <ul>
                <li className="filterBtn">全部玩法</li>
                <li className="filterBtn">密室逃脫</li>
                <li className="filterBtn">劇本殺</li>
                <li className="filterBtn">時境解謎</li>
              </ul>
            </div>
            <div className="filterBtnMain">
              <div className="filterBtnFirst">
                <p>排序</p>
              </div>
              <ul>
                <li className="filterBtn">評價數量</li>
                <li className="filterBtn">平價分數</li>
                <li className="filterBtn">開幕日期</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="gamesFilterSection">
          {datas.map((v, i) => {
            return (
              <div key={v.gamesSid}>
                <section>
                  <figure>
                    {/* <img
                      src={`/Images/gamesImages/${v.gamesLogo}`}
                      alt="JoinMe"
                    /> */}
                  </figure>
                  <article></article>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GamesFilters;
