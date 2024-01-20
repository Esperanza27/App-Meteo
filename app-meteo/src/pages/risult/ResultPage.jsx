/* import { useSelector, useDispatch } from "react-redux"; */
import MyNavbar from "../../components/myNavbar/MyNavbar";
import MyCard from "../../components/myCard/MyCard";
import MySidebar from "../../components/mySidebar/MySidebar";

/* import { decrement, increment } from "../../store/meteoSlice"; */
/* import { useEffect } from "react";
import { weatherThunk, forecastThunk } from "../../store/meteoThunks"; */

const ResultPage = () => {
  /*   
  const dispatch = useDispatch(); 

    useEffect(() => {
    dispatch(weatherThunk({ id: "genova" }));
    dispatch(forecastThunk());
  }, []); 

     const weather = useSelector((state) => state.meteo.weather);
  const forecast = useSelector((state) => state.meteo.forecast); 

     console.log("data weather ", weather);
  console.log("data forecast ", forecast); 

   const error = useSelector((state) => state.meteo.error); 
   
*/

  return (
    <div className="container-fluid bg-danger" style={{ height: "90vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-sm-12">
          <div className="row" style={{ height: "100%" }}>
            <div className="col-xs-12 col-md-8 bg-info">
              <div className="row bg-white py-2">
                <MyNavbar />
              </div>
              <div className="row bg-info py-1 " style={{ height: "40%", display: 'flex', justifyContent: 'center', alignItems:"center"}}>

                <div className="col-xs-10 py-0 px-1 d-flex " style={{ width: "49.5%", alignItems:"center", height: "46.5%"}}>
                  <MyCard />
                </div>
                <div className="col-xs-10 py-0 px-1 d-flex rounded" style={{ width: "49.5%", alignItems:"center", height: "46.5%"}}>
                  <MyCard />
                </div>
                <div className="col-xs-10 py-0 px-1 d-flex rounded" style={{ width: "49.5%", alignItems:"center", height: "46.5%"}}>
                  <MyCard />
                </div>
                <div className="col-xs-10 py-0 px-1 d-flex rounded" style={{ width: "49.5%", alignItems:"center", height: "46.5%"}}>
                  <MyCard />
                </div>
              </div>

              <div className="row bg-secondary" style={{ height: "40%" }}>
                c: graph
              </div>
            </div>
            <div
              className="col-xs-12 col-md-4 bg-success"
              style={{ height: "100%" }}
            >
              <MySidebar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultPage;