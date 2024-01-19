import { useSelector, useDispatch } from "react-redux";
import MyNavbar from "../../components/MyNavbar";
import MyCard from "../../components/MyCard";
import Container from "react-bootstrap/esm/Container";
/* import { decrement, increment } from "../../store/meteoSlice"; */
/* import { useEffect } from "react";
import { weatherThunk, forecastThunk } from "../../store/meteoThunks"; */

export function Home() {
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
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12 col-md-6 bg-primary">
          <div className="row ">
            <div className="col-12 px-0 ">
              <MyNavbar />
            </div>

            <div className="col-xs-12 col-md-6 dashboard" >
             <Container fluid >
             <div className="row px-0 gap-2">
                <div className="col-6 ">
                    <MyCard/>
                </div>
                 <div className="col-6 ">
                    <MyCard/>
                </div>
               {/*   <div className="col-12 col-md-5">
                    <MyCard/>
                </div>
                <div className="col-12 col-md-5">
                    <MyCard/>
                </div>
                <div className="col-12 col-md-5">
                    <MyCard/>
                </div>
                <div className="col-12 col-md-5">
                    <MyCard/>
                </div> */}
              </div>
             </Container>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 bg-danger">
          <div
           /*  style={{
              minWidth: "50%",
              height: "90vh",
            }} */
          >
            sono side
          </div>
        </div>
      </div>
    </div>
  );
}
