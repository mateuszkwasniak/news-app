import { useDispatch } from "react-redux";
import { showModal } from "../../../redux/modalSlice";
import "./newscard.scss";

const NewsCard = ({ item, setModalInfo }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="newsCard"
      onClick={() => {
        setModalInfo(item);
        dispatch(showModal(true));
      }}
    >
      <div className="newsImage">
        <img
          src={item?.urlToImage ? item.urlToImage : "/newsbg.jpg"}
          alt="news"
        />
      </div>
      <div className="info">
        <h3>{item.title}</h3>
        <p>{item?.description && item.description.slice(0, 100) + "..."}</p>
        <span className="date">{item.publishedAt.slice(0, 10)}</span>
        <span className="source">
          {item?.source?.name}
          {item?.author && " | " + item.author}
        </span>
      </div>
    </li>
  );
};

export default NewsCard;
