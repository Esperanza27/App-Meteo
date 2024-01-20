import { useSelector, useDispatch } from "react-redux";
import MyNavbar from "../../components/myNavbar/MyNavbar";
import MyCard from "../../components/myCard/MyCard";
import MySidebar from "../../components/mySidebar/MySidebar";
import { months } from "../../store/mocks/weatherMock";
import { useCallback, useMemo, useEffect } from "react";
import { WindIcon } from "../../assets/icons/WindIcon";
import { weatherThunk, forecastThunk } from "../../store/meteoThunks";
import { MyLoader } from "../../components/myLoader/MyLoader";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherThunk({ id: "Roma" }));
  }, [dispatch]);

  const weather = useSelector((state) => state.meteo.weather);

  useEffect(() => {
    if (Object.keys(weather).length) {
      dispatch(forecastThunk());
    }
  }, [dispatch, weather]);

  const forecast = useSelector((state) => state.meteo.forecast);

  console.log("data forecast ", forecast);

  const onChange = useCallback(
    (e) => {
      const city = e.target.value;

      if (city) {
        dispatch(weatherThunk({ id: city }));
      }
    },
    [dispatch]
  );

  const {
    wind: { gust = "", speed = "" } = {},
    main: { temp = "", temp_min = "", humidity = "" } = {},
  } = weather;

  const dateToday = useMemo(() => {
    const date = new Date();

    const monthNum = date.getMonth();
    const yearNum = date.getFullYear();

    const originalString = date.toDateString();
    const charToInsert = ",";
    const indexToInsertAt = 3;

    return {
      current: `${months[monthNum]} ${yearNum}`,
      dateDetails:
        originalString.slice(0, indexToInsertAt) +
        charToInsert +
        originalString.slice(indexToInsertAt),
    };
  }, []);

  const cardData = useMemo(() => {
    return [
      {
        icon: <WindIcon />,
        type: "Wind Speed",
        currentValue: `${speed} km/h`,
        dynamicValue: `${gust} km/h`,
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
        currentValue: `${Math.round(temp)}°C`,
        dynamicValue: `${temp_min}°C ↑`,
      },
      {
        icon: <WindIcon />,
        type: "Humidity",
        currentValue: `${humidity}%`,
        dynamicValue: `${humidity}%`,
      },
    ];
  }, [humidity, temp, temp_min, gust, speed]);

  if (!Object.keys(weather).length) {
    return <MyLoader />;
  }

  return (
    <div className="container-fluid bg-danger" style={{ height: "90vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-sm-12">
          <div className="row" style={{ height: "100%" }}>
            <div className="col-xs-12 col-md-8 bg-info">
              <div className="row bg-white py-2">
                <MyNavbar date={dateToday} onChange={onChange} />
              </div>
              <div
                className="row bg-info py-1 "
                style={{
                  height: "40%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {cardData.map((card, i) => (
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

              <div className="row bg-secondary" style={{ height: "40%" }}>
                c: graph
              </div>
            </div>
            <div
              className="col-xs-12 col-md-4 bg-success"
              style={{ height: "100%" }}
            >
              <MySidebar {...weather} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
