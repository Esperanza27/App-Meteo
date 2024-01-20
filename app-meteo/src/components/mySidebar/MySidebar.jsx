import PropTypes from "prop-types";
import { useCallback, useMemo } from "react";
import { WindIcon } from "../../assets/icons/WindIcon";
import MyCard from "../myCard/MyCard";

const MySidebar = ({ sys, name, main }) => {
  const getTime = useCallback((time) => {
    return `${new Date(time).getHours()}:${new Date(time).getMinutes()}`;
  }, []);

  const cardData2 = useMemo(() => {
    return [
      {
        icon: <WindIcon />,
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
    ];
  }, [getTime, sys?.sunrise, sys?.sunset]);

  return (
    <div className="my-3 py-2 mx-1 d-flex flex-column gap-5">
      <div className="d-flex justify-content-between">
        <p>{name}</p>
        <p>{getTime(new Date().getTime())}</p>
      </div>
      <div>
        <h5 className="my-0 ">{`${Math.round(main?.temp)}°C`}</h5>
        <p className="mb-2 "> scattered clouds </p>
        <hr className="m-0 " />
      </div>
      <div>
        <p className=" m-0 p-0"> Sunrise & Sunset </p>
      </div>
      <div className=" d-flex flex-column gap-3">
        {cardData2.map((card, i) => (
          <div key={i}>
            <MyCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

MySidebar.propTypes = {
  sys: PropTypes.object,
  name: PropTypes.string,
  main: PropTypes.object,
};

export default MySidebar;
