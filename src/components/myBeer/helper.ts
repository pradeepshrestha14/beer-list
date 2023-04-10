export const getAddMyBeerHandler =
  ({ rootStore, setRootStore }: any) =>
  () => {
    setRootStore({ ...rootStore, addBeerPopupOpen: true });
  };
