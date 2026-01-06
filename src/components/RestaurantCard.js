import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { resName, cuisine, img, rating, time, price } = resData; //local Data
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData?.info; //API Data

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* <img className="res-logo" src={CDN_URL + img} alt="res-logo" /> */}
      <img
        className="res-logo"
        src="https://www.cafezouk.com/images/Special%20Dishes/Sp9.jpg"
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
