import {
  collection,
  query,
  limit,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../../firebase/firebase";
import { FIRESTORE_COLLECTION_NAME } from "../../../constants/firebase.constant";

const useFetchMyBeers = (page: any, pageSize: any) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const postsRef = collection(db, FIRESTORE_COLLECTION_NAME);
    const pageQuery = query(
      postsRef,
      orderBy("created", "desc"),
      limit(page * pageSize)
    );

    const unsubscribe = onSnapshot(pageQuery, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        ...doc?.data(),
        id: doc?.id,
      }));
      setData(() => [...newData]);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [page, pageSize]);

  return { data, loading };
};

export default useFetchMyBeers;
