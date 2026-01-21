import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { resName, cuisine, img, rating, time, price } = resData; //local Data
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData?.info; //API Data

  return (
    <div className=" m-4 p-4 w-[250] bg-gray-100 hover:bg-gray-200 rounded-lg">
      {/* <img className="res-logo" src={CDN_URL + img} alt="res-logo" /> */}
      <img
        className="rounded-lg"
        src="https://www.cafezouk.com/images/Special%20Dishes/Sp9.jpg"
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

// Higher Order Component (HOC)

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
