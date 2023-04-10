import { Col, Row } from "antd";

import BeerCard from "../beerCard/BeerCard";

import SkeletonLoader from "../../common/SkeletonLoader";
import useAllBeerHook from "./hooks/useAllBeerHook";

const AllBeer = () => {
  const { loading, listRef, beers } = useAllBeerHook();
  if (loading) return <SkeletonLoader />;

  return (
    <Row
      gutter={[16, 16]}
      style={{
        height: "calc(100vh - 180px)",
        overflowY: "scroll",
      }}
      ref={listRef}
    >
      {/* {rootStore?.tabs[tab_1?.key]?.beers &&
        rootStore.tabs[tab_1.key].beers?.map((itm: any, indx: any) => { */}
      {beers &&
        beers.map((itm: any, indx: any) => {
          const {
            image_url: imageUrl,
            name: title,
            description,
            tagline,
            ingredients,
          } = itm;

          return (
            <Col lg={12} md={24} xs={24} key={indx + title}>
              <BeerCard
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

export default AllBeer;
