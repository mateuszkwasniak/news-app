import React, { useState } from "react";
import NewsCard from "../newscard/NewsCard";
import ListItem from "../listitem/ListItem";
import Modal from "../../modal/Modal";
import { useSelector } from "react-redux";
import "./newsfeed.scss";

const NewsFeed = ({ items }) => {
  const [modalInfo, setModalInfo] = useState({});
  const show = useSelector((store) => store.modal.show);
  const type = useSelector((store) => store.news.type);

  return (
    <>
      <ul className={`newsFeed ${type}`}>
        {items?.map((item) =>
          type === "list" ? (
            <ListItem
              key={item.title}
              item={item}
              setModalInfo={setModalInfo}
            />
          ) : (
            <NewsCard
              key={item.title}
              item={item}
              setModalInfo={setModalInfo}
            />
          )
        )}
      </ul>
      {show && <Modal modalInfo={modalInfo} />}
    </>
  );
};

export default NewsFeed;
