import { Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { StoreContext } from "../../StoreContext";
import { useContext } from "react";

import TAB_CONSTANTS from "../../constants/tab.constant";

const { TAB_LIST } = TAB_CONSTANTS;
const { tab_2 } = TAB_LIST;

const LoadMoreButton = ({ onClick }: any) => {
  const { rootStore, setRootStore }: any = useContext(StoreContext);

  const { activeTab } = rootStore;

  const myBeers = rootStore.tabs[tab_2.key].beers;
  if (activeTab === tab_2.key && !myBeers.length) return null;
  return (
    <Button
      type="text"
      style={{
        color: "blue",
        position: "absolute",
        bottom: 0,
        marginBottom: "50px",
      }}
      onClick={() => onClick()}
    >
      <strong>
        Load More <DownOutlined />
      </strong>
    </Button>
  );
};

export default LoadMoreButton;
