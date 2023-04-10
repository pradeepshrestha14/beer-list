import { Tabs } from "antd";
import React, { useContext } from "react";
import type { TabsProps } from "antd";

import MyBeer from "../myBeer/MyBeer";
import AllBeer from "../allBeer/AllBeer";
import { StoreContext } from "../../StoreContext";
import AddBeerButton from "./components/AddBeerButton";
import AddBeerPopUp from "../addBeerPopUp/AddBeerPopUp";
import TAB_CONSTANTS from "../../constants/tab.constant";
import { toggleAddMyBeerModal } from "../../utils/toggleAddMyBeerModal";
import { getOnChangeHandler, onClickAddBeer } from "./helper";

const { TAB_LIST } = TAB_CONSTANTS;
const { tab_1, tab_2 } = TAB_LIST;

const items: TabsProps["items"] = [
  {
    key: `${tab_1.key}`,
    label: `${tab_1.name}`,
    children: <AllBeer />,
  },
  {
    key: `${tab_2.key}`,
    label: `${tab_2.name}`,
    children: <MyBeer />,
  },
];

const TabLayout: React.FC = () => {
  const { rootStore, setRootStore }: any = useContext(StoreContext);
  const activeTabkey = rootStore.activeTab;
  const showAddBeerButton = activeTabkey === tab_2.key;

  return (
    <>
      {/* register the AddMyBeer Moda */}
      <AddBeerPopUp
        visible={!!rootStore?.addBeerPopupOpen}
        onCancel={() =>
          toggleAddMyBeerModal({ rootStore, setRootStore, open: false })
        }
      ></AddBeerPopUp>

      {/* Tab Layout */}
      <Tabs
        tabBarStyle={{ borderBottom: "none" }}
        items={items}
        defaultActiveKey={activeTabkey}
        onChange={getOnChangeHandler(rootStore, setRootStore)}
        tabBarExtraContent={
          showAddBeerButton ? (
            <AddBeerButton
              onClick={onClickAddBeer({ rootStore, setRootStore })}
            />
          ) : null
        }
      />
    </>
  );
};

export default TabLayout;
