import { Form, Input } from "antd";

const AddMyBeerForm = ({ form }: any) => {
  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter the name of the beer",
          },
        ]}
      >
        <Input placeholder="Beer name*" />
      </Form.Item>
      <Form.Item
        name="genre"
        rules={[
          {
            required: true,
            message: "Please enter the genre of the beer",
          },
        ]}
      >
        <Input placeholder="Genre*" />
      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: "Please enter a description of the beer",
          },
        ]}
      >
        <Input.TextArea placeholder="Description*" style={{ height: 100 }} />
      </Form.Item>
    </Form>
  );
};
export default AddMyBeerForm;
