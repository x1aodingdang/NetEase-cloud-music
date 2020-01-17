import * as React from "react";
import { iSearchHotDetail } from "../../interface";
import { $APISearchHotDetail } from "../../../../api/apiList";
import { http } from "../../../../api/http";
import "./index.scss";

export interface iSearchHotListProps {}

function SearchHotList(props: iSearchHotListProps) {
  const [hotList, setHotList] = React.useState<iSearchHotDetail[]>([]);

  React.useEffect(() => {
    http($APISearchHotDetail).then((res: any) => {
      setHotList(res.data);
    });
  }, []);

  const items = hotList.map(
    ({ searchWord, content, iconUrl = "", iconType }, i) => {
      return (
        <li key={i} className="hotList-item">
          <div className={`rank ${i < 4 && "top4"}`}>{i + 1}</div>
          <div className="info">
            <div className="info-search-word">
              {searchWord}
              {iconUrl && (
                <img src={iconUrl} className="info-icon" alt="icon" />
              )}
            </div>
            <div className="info-content">{content}</div>
          </div>
        </li>
      );
    }
  );

  return (
    <div className="search-hot-list">
      <h3 className="tit">热搜榜</h3>
      <ul>{items}</ul>
    </div>
  );
}

export default SearchHotList;
