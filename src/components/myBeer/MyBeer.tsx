import { Col, Row, Skeleton } from "antd";
import { useContext, useEffect, useRef, useState } from "react";

import BeerCard from "../beerCard/BeerCard";
import { StoreContext } from "../../StoreContext";
import EmptyPage from "./components/EmptyPage";
import TAB_CONSTANTS from "../../constants/tab.constant";

import React from "react";
import usefetchMyBeers from "./hooks/useFetchMyBeers.hook";
import SkeletonLoader from "../../common/SkeletonLoader";

const { TAB_LIST } = TAB_CONSTANTS;
const { tab_2 } = TAB_LIST;

const MyBeer = () => {
  const listRef: any = useRef();
  const { rootStore, setRootStore }: any = useContext(StoreContext);
  const currentPage = rootStore.tabs[tab_2.key].currentPage;
  const { data: myBeers, loading } = usefetchMyBeers(currentPage, 10);

  useEffect(() => {
    const updatedRootStore = {
      ...rootStore,
    };
    updatedRootStore.tabs[tab_2.key].listRef = listRef;
    // new
    updatedRootStore.tabs[tab_2.key].beers = myBeers;

    setRootStore(updatedRootStore);
  }, [JSON.stringify(myBeers)]);

  if (loading) return <SkeletonLoader />;
  if (!myBeers || !myBeers?.length) return <EmptyPage />;

  return (
    <Row
      ref={listRef}
      gutter={[16, 16]}
      style={{
        height: myBeers?.length > 6 ? "calc(100vh - 180px)" : "",
        overflowY: "scroll",
        padding: 5,
      }}
    >
      {myBeers &&
        myBeers?.map((itm: any) => {
          const {
            image_url: imageUrl,
            name: title,
            description,
            genre: tagline,
            ingredients = "",
            id,
          } = itm;

          return (
            <Col lg={12} md={24} xs={24} key={id}>
              <BeerCard
                tooltip={false}
                imageUrl={imageUrl}
                title={title}
                description={description}
                tagline={tagline}
                ingredients={ingredients}
              />
            </Col>
          );
        })}
    </Row>
  );
};

export default React.memo(MyBeer);
