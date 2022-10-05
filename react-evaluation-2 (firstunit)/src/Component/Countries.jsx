import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
function Countries() {
  const [isloading, setisloading] = useState(false);
  const [page, setpage] = useState(1);
  const [data1, setdata] = useState([]);
  const Getdata = async () => {
    try {
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`
      );
      let data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
    setdata(data1);
  };
  useEffect(() => {
    
    setisloading(false);
    Getdata().then((res) => {
      setdata(res);
      setisloading(true);
      console.log(res);
    
    });
  }, [page]);
  console.log(data1);
  if (!isloading) {
    return <LoadingIndicator />;
  }
else{
  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {data1.data.map((ele) => (
          <CountriesCard
             country={ele.country}population={ele.population}
          />
        ))}
      </div>
      <div>
        <Pagination page={page} setpage={setpage} totalPages={data1.totalPages} />
      </div>
    </div>
  );}

}
export default Countries;
