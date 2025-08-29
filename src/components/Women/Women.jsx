import { useState } from "react";
import Sidebar from "../Men/Menfilter";
import Homeproduct from "../Homeproduct";
import "../../index.css";

function Women() {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    price: 50000,
    rating: null,
  });

  return (
    <>
      <Sidebar onFilterChange={setFilters} />

      <div className="my-sidebar" >
        <Homeproduct  cols={3} filters={filters} />
      </div>
    </>
  );
}

export default Women;
