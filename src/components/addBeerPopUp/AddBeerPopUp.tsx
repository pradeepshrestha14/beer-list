import { Modal, Form, Button, Image } from "antd";

import AddMyBeerForm from "./components/AddMyBeerForm";
import { MY_BEER_IMAGE_POPUP } from "../../constants/common.constant";
import { getOnCancelCallback, handleCancel, handleSubmit } from "./helper";

const AddBeerPopUp = ({ visible, onCancel }: any) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      title="Add a New Beer"
      closable={false}
      onCancel={getOnCancelCallback(form, onCancel)}
      footer={[
        <div
          key="buttons"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            style={{ marginRight: 8, border: "none", color: "grey" }}
            onClick={handleCancel(form, onCancel)}
          >
            Cancel
          </Button>
          <Button type="primary" onClick={handleSubmit({ form, onCancel })}>
            Save
          </Button>
        </div>,
      ]}
    >
      <div style={{ margin: "20px 0px 20px 0px" }}>
        <Image
          src={MY_BEER_IMAGE_POPUP}
          preview={false}
          height={120}
          width={100}
          className="image-with-border"
        />
      </div>
      <AddMyBeerForm form={form} />
    </Modal>
  );
};

export default AddBeerPopUp;
