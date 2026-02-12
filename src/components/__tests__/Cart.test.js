import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import MOCK_MENU_DATA from "../mocks/mockResMenu.json";
import { act } from "react";
import { Provider } from "react-redux";
import appstore from "../../utils/store";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => Promise.resolve(MOCK_MENU_DATA),
//   });
// });

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_MENU_DATA),
    }),
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appstore}>
        <RestaurantMenu />
      </Provider>,
    ),
  );

  const accordionHeader = screen.findByText("Recommended (3)");

  fireEvent.click(accordionHeader);
  //expect(accordionHeader).toBeInTheDocument();
});
