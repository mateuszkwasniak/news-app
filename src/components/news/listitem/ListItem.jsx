import "./listitem.scss";
import { useDispatch } from "react-redux";
import { showModal } from "../../../redux/modalSlice";

const ListItem = ({ item, setModalInfo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li
        data-testid="article"
        className="listItem"
        onClick={() => {
          setModalInfo(item);
          dispatch(showModal(true));
        }}
      >
        <img className="bullet" src="/newspaper.png" alt="bullet" />
        <div className="info">
          <h3>{item.title}</h3>
          <span className="date">{item?.publishedAt?.slice(0, 10)}</span>
          <span className="source">
            {item?.source?.name}
            {item?.author && " | " + item.author}
          </span>
        </div>
      </li>
      <hr />
    </>
  );
};

export default ListItem;
