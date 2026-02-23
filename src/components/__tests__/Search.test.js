import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import axios from "axios";
import UserContext from "../../utils/UserContext";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router";

// If you want to mock the fetch function, you can do it like this:
// import MOCK_DATA from "../mocks/mockResListData.json";
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// it("Should render Body component with search", async () => {
//   await act(async () => {
//     render(<Body />);
//   });
// });

jest.mock("axios");

jest.mock("../../utils/useOnlineStatus", () => ({
  __esModule: true,
  default: () => true,
}));

test("Should render Body component with search", async () => {
  // axios returns { data: ... } and you do response.data
  axios.get.mockResolvedValueOnce({ data: MOCK_DATA });

  render(
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser: "TestUser", setUserName: jest.fn() }}
      >
        <Body />
      </UserContext.Provider>
    </BrowserRouter>,
  );

  const searchButton = await screen.findByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  fireEvent.click(searchButton);

  //Assertion -
  const cards = screen.getAllByTestId("restaurant-card");

  expect(cards.length).toBe(1);
});

