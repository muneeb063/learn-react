const { render, screen } = require("@testing-library/react");
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

it("Should render restaurant card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const resName = screen.getByText("Spice Kingdom");
  expect(resName).toBeInTheDocument();
});

it("Should render promoted restaurant card component with props data", () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  render(<PromotedRestaurantCard resData={MOCK_DATA} />);
  const promotedLabel = screen.getByText("Promoted");
  expect(promotedLabel).toBeInTheDocument();
});
