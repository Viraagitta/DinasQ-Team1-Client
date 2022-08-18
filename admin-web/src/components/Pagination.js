import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import SweetPagination from "sweetpagination";
import { fetchAllofficialLetters } from "../store/action";
import { useSelector, useDispatch } from "react-redux";

function Pagination({ officialLetter }) {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const dispatch = useDispatch();
  const officialLetters = useSelector((state) => state.letter.officialLetters);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  console.log(searchParams.get("page"));
  useEffect(() => {
    dispatch(fetchAllofficialLetters(page));
  }, []);
  return (
    <div>
      {/* <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={10}
        getData={officialLetter}
        navigation={true}
      /> */}
    </div>
  );
}

export default Pagination;
