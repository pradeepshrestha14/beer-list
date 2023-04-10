import { db } from "../../firebase/firebase";
import { MY_BEER_IMAGE } from "../../constants/common.constant";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const handleCancel = (form: any, onCancel: any) => () => {
  form.resetFields();
  onCancel();
};
export const getOnCancelCallback = (form: any, onCancel: any) => () => {
  form.resetFields();
  onCancel();
};

export const handleSubmit =
  ({ form, onCancel }: any) =>
  (e: any) => {
    e.preventDefault();
    form.validateFields().then(async (values: any) => {
      try {
        const { name, genre, description } = values;
        onCancel();
        await addDoc(collection(db, "my_beers"), {
          name,
          genre,
          description,
          image_url: MY_BEER_IMAGE,
          created: Timestamp.now(),
        });
        form.resetFields();
      } catch (err) {
        alert(err);
      }
    });
  };
