import { Button } from "antd";

const AddBeerButton = ({ onClick }: any) => {
  return (
    <Button type="primary" onClick={() => onClick()}>
      Add a new beer
    </Button>
  );
};
export default AddBeerButton;
