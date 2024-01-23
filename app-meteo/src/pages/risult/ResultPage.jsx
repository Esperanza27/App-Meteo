import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useCallback, useEffect, useMemo } from "react";
import { WindIcon } from "../../assets/icons/WindIcon";
import MyCard from "../../components/myCard/MyCard";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import CloseButton from "react-bootstrap/esm/CloseButton";
/* import Table from "react-bootstrap/Table"; */
import { useNavigate } from "react-router-dom";
import iconWind from "../../assets/icons/storm.png";
import MyTable from "../../components/myTable/MyTable";
/* import iconTemperature from "../../assets/icons/temperature.png"; */
const ResultPage = () => {
  const weather = useSelector((state) => state.meteo.weather);
  const forecast = useSelector((state) => state.meteo.forecast);
  const navigate = useNavigate();

  const { sys, name, main, wind } = weather;
  const f = { ...forecast };
  const currentDays = f.list.slice(0, 7);
  console.log(currentDays);

  const getTime = useCallback((time) => {
    return `${new Date(time).getHours()}:${new Date(time).getMinutes()}`;
  }, []);
  

  const cardData3 = useMemo(() => {
    return [
      {
        icon: <img src={iconWind} style={{ width: "16px", height: "16px" }} />,
        type: "sunrise",
        currentValue: `${getTime(sys?.sunrise)} `,
        dynamicValue: `2 hours ago`,
      },
      {
        icon: <WindIcon />,
        type: "sunset",
        currentValue: `${getTime(sys?.sunset)}`,
        dynamicValue: `In 8 hours`,
      },
      {
        icon: <WindIcon />,
        type: "Wind Speed",
        currentValue: `${wind?.speed} km/h`,
        dynamicValue: `${wind?.gust} km/h`,
      },
      {
        icon: <WindIcon />,
        type: "Rain Chance",
        currentValue: "0%",
        dynamicValue: "0%",
      },
      {
        icon: <WindIcon />,
        type: "Temperature",
        currentValue: `${Math.round(main?.temp)}°C`,
        dynamicValue: `${main?.temp_min}°C ↑`,
      },
      {
        icon: <WindIcon />,
        type: "Humidity",
        currentValue: `${main?.humidity}%`,
        dynamicValue: `${main?.humidity}%`,
      },
    ];
  }, [getTime, sys?.sunrise, sys?.sunset]);

  console.log("data weather ", weather);
  console.log("data forecast ", forecast, new Date(1705676400).getDay());

  return (
    <div className="container py-3 " style={{ height: "90vh" }}>
      <div className="d-flex justify-content-between">
        <NavbarBrand href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z" />
            <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018" />
          </svg>{" "}
          HOME
        </NavbarBrand>

        <h1>{name}</h1>

        <div className="d-flex gap-2 text-center">
          <p>{getTime(new Date().getTime())}</p>
          <CloseButton onClick={() => navigate("/")} />
        </div>
      </div>
      <div className=" d-flex flex-wrap gap-3 justify-content-center my-3">
        {cardData3.map((card, i) => (
          <div
            key={i}
            className="col-xs-10 py-0 px-1 d-flex"
            style={{
              width: "49.5%",
              alignItems: "center",
              height: "46.5%",
            }}
          >
            <MyCard {...card} />
          </div>
        ))}
      </div>
      <div>
        {currentDays?.map((li, i) => {
        let day= new Date(li?.dt*1000).toDateString().slice(0,3)
         return(
          <div key={i}>
            <MyTable
              day={day} 
              humidity={li?.main.humidity}
              icon1={li?.weather[0].icon}
              tempMax={li?.main.temp_max}
              tempMin={li?.main.temp_min}
            />
          </div>
         )
          
        })}
      </div>
    </div>
  );
};
ResultPage.propTypes = {
  sys: PropTypes.object,
  name: PropTypes.string,
  main: PropTypes.object,
  wind: PropTypes.object,
};

export default ResultPage;
