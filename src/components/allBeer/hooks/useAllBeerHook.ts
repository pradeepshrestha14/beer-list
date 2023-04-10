import TAB_CONSTANTS from "../../../constants/tab.constant";
import SkeletonLoader from "../../../common/SkeletonLoader";

const { TAB_LIST } = TAB_CONSTANTS;
const { tab_1 } = TAB_LIST;
import { StoreContext } from "../../../StoreContext";
import beerService from "../../../services/beer.service";
import { useContext, useEffect, useRef, useState } from "react";

const useAllBeerHook = () => {
  const listRef: any = useRef();
  const [loading, setLoading] = useState(true);
  const { rootStore, setRootStore }: any = useContext(StoreContext);
  const activeTabBeers = rootStore.tabs[tab_1.key].beers;
  const page = rootStore.tabs[tab_1.key].currentPage + 1;

  useEffect(() => {
    beerService
      ?.getBeerList({ page: page, perPage: 10 })
      .then((data) => {
        setLoading(false);
        const updatedRootStore = {
          ...rootStore,
        };
        updatedRootStore.tabs[tab_1.key].beers = [...activeTabBeers, ...data];
        updatedRootStore.tabs[tab_1.key].listRef = listRef;

        setRootStore(updatedRootStore);
      })

      .catch((err) => setLoading(false));
  }, [page]);

  return { loading, listRef, beers: rootStore.tabs[tab_1.key].beers };
};

export default useAllBeerHook;
