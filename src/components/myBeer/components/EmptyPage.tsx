import { useContext } from "react";
import { Button, Card, Typography } from "antd";

import { getAddMyBeerHandler } from "../helper";
import { StoreContext } from "../../../StoreContext";

const { Text, Paragraph } = Typography;

const EmptyPage = () => {
  const { rootStore, setRootStore }: any = useContext(StoreContext);

  return (
    <Card
      style={{
        backgroundColor: "#f0f2f5",
        textAlign: "center",
        height: "calc(100vh - 180px)",
      }}
    >
      <div style={{ marginTop: 200 }}>
        <Paragraph style={{ color: "#888", margin: 0 }}>
          Nothing to see at.
        </Paragraph>
        <Paragraph style={{ color: "#888", margin: 0 }}>
          <Button
            type="text"
            style={{ color: "blue", padding: 0 }}
            onClick={getAddMyBeerHandler({ rootStore, setRootStore })}
          >
            Click here
          </Button>
          <Text style={{ color: "#888" }}> to add your first beer!</Text>
        </Paragraph>
      </div>
    </Card>
  );
};

export default EmptyPage;
