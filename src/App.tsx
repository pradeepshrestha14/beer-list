import "./App.css";
import { useState } from "react";
import { Row, Col } from "antd";

import { StoreContext } from "./StoreContext";
import TAB_CONSTANTS from "./constants/tab.constant";
import TabLayout from "./components/layout/TabLayout";
import LoadMoreButton from "./common/loadMore/LoadMoreButton";

const { TAB_LIST } = TAB_CONSTANTS;
const { tab_1, tab_2 } = TAB_LIST;

const getOnClickHandler = (rootStore: any, setRootStore: any) => () => {
  const updatedRootStore = {
    ...rootStore,
  };
  const { tabs, activeTab } = updatedRootStore;

  const nextPage = tabs[activeTab].currentPage + 1;
  tabs[activeTab].currentPage = nextPage;
  setRootStore(updatedRootStore);
  setTimeout(() => {
    const containerRef = updatedRootStore.tabs[activeTab]?.listRef;
    if (!containerRef) return;
    // Get the current scrollTop value of the container element
    const { scrollTop } = containerRef.current;

    // Get the clientHeight of the component (in this case, the List component)
    const clientHeight = containerRef.current.clientHeight;
    //  .querySelector(".ant-list-items").clientHeight;

    // Calculate the new scrollTop value to move the scrollbar slightly downward
    const newScrollTop = scrollTop + Math.round(clientHeight * 0.2);

    // Set the new scrollTop value of the container element to move the scrollbar
    containerRef.current.scrollTop = newScrollTop;
  }, 800);
};

const App = () => {
  const tabs = {
    [`${tab_1.key}`]: {
      currentPage: 0,
      beers: [],
    },
    [`${tab_2.key}`]: {
      currentPage: 1,
      beers: [],
    },
  };

  const [rootStore, setRootStore] = useState({
    tabs,
    activeTab: tab_1.key,
  });

  return (
    <StoreContext.Provider value={{ rootStore, setRootStore }}>
      <Row justify="center">
        <Col xs={24} md={16}>
          <TabLayout />
        </Col>
        <LoadMoreButton onClick={getOnClickHandler(rootStore, setRootStore)} />
      </Row>
    </StoreContext.Provider>
  );
};

export default App;
