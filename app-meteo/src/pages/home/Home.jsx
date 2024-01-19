import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/meteoSlice";
import { useEffect } from "react";
import { weatherThunk, forecastThunk } from "../../store/meteoThunks";

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherThunk({ id: "genova" }));
    dispatch(forecastThunk());
  }, []);



  const weather = useSelector((state) => state.meteo.weather);
  const forecast = useSelector((state) => state.meteo.forecast);
console.log('data weather ', weather);
console.log('data forecast ', forecast);
  const error = useSelector((state) => state.meteo.error);
  const value = useSelector((state) => state.meteo.value);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
