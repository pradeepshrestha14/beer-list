import { toggleAddMyBeerModal } from "../../utils/toggleAddMyBeerModal";

export const onClickAddBeer =
  ({ rootStore, setRootStore }: any) =>
  () => {
    toggleAddMyBeerModal({ rootStore, setRootStore, open: true });
  };

export const getOnChangeHandler =
  (rootStore: any, setRootStore: any) => (key: string) => {
    setRootStore({ ...rootStore, activeTab: key });
  };
