export const toggleAddMyBeerModal = ({
  rootStore,
  setRootStore,
  open,
}: any) => {
  setRootStore({ ...rootStore, addBeerPopupOpen: open });
};
