import PropTypes from "prop-types";


function MyCard({ icon, type, currentValue, dynamicValue }) {
  
  return (
    <div className="d-flex justify-content-between align-items-center gap-5 bg-danger-subtle mx-0 p-3 h-100 w-100 border rounded">
      <div>
        {icon}
      </div>
      <div>
        <div style={{whiteSpace:'nowrap'}}>{type}</div>
        <strong>{currentValue}</strong>
      </div>
      <div style={{fontSize: '10px', whiteSpace:'nowrap'}}>{dynamicValue}</div>
    </div>
  );
}

MyCard.propTypes = {
  icon: PropTypes.node,
  type: PropTypes.string,
  currentValue: PropTypes.string,
  dynamicValue: PropTypes.string,
};

export default MyCard;
