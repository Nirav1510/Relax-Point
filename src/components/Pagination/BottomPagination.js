import React from "react";
import { Pagination } from "@material-ui/lab";

const BottomPagination = ({ setPage, numOfPages = 10 }) => {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="flex justify-center w-full mt-3">
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numOfPages}
      />
    </div>
  );
};

export default BottomPagination;
