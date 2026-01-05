import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { resName, cuisine, img, rating, time, price } = resData; //local Data
  const { title, type, image, rating, titlMC, minCharge } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* <img className="res-logo" src={CDN_URL + img} alt="res-logo" /> */}
      <img className="res-logo" src={image} alt="res-logo" />
      <h3>{title}</h3>
      <h4>{type}</h4>
      <h4>{rating} Stars</h4>
      <h4>{titlMC}</h4>
      <h4>{minCharge}</h4>
    </div>
  );
};

export default RestaurantCard;
