import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as eventServices from "../../../services/event.services";
import { useSelector } from "react-redux";

const useRanking = () => {
  const { token, event, userInfo } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);
  const [rankingList, setRankingList] = useState([]);
  const [position, setPosition] = useState(null);
  const [myPoints, setMyPoints] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const fetchRankingList = useCallback(async () => {
    try {
      const data = await eventServices.fetchRankingList(token, event, 0);
      setPosition(data.myPosition.rank);
      setMyPoints(data.myPosition.points);
      setRankingList(data.items);
      if (data.paginate.pages >= page) setHasMore(true);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, event]);

  useEffect(() => {
    fetchRankingList();
  }, [fetchRankingList]);

  const handleFetchNextPage = async () => {
    try {
      const data = await eventServices.fetchRankingList(token, event, page);
      setRankingList(rankingList.concat(data.items));
      setPage(page + 1);
      if (data.paginate.pages <= page) setHasMore(false);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return { loading, position, myPoints, rankingList, handleFetchNextPage, userInfo, hasMore };
};

export default useRanking;
