import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";
import MOCK_MENU_DATA from "../mocks/mockResMenu.json";
import { act } from "react";
import { Provider } from "react-redux";
import appstore from "../../utils/appStore";
import { MemoryRouter, Routes, Route } from "react-router"; // ✅ web router
import UserContext from "../../utils/UserContext";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU_DATA),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <Provider store={appstore}>
              <UserContext.Provider value={{ loggedInUser: "Muneeb", setUserName: jest.fn() }}>

        <MemoryRouter initialEntries={["/restaurants/123456"]}>
          <Header />
          <Routes>
            <Route path="/restaurants/:id" element={<RestaurantMenu />} />
          </Routes>
          <Cart />
        </MemoryRouter>
              </UserContext.Provider>

      </Provider>
    );
  });

  const accordionHeader = await screen.findByText(/Recommended\s*\(3\)/i);

// fireEvent.click(clickable);
const items = await screen.findAllByTestId("food-item");
  expect(items).toHaveLength(3);

  const addButtons = await screen.findAllByRole("button", { name: "Add +" }); 
  expect(addButtons).toHaveLength(3);
  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart (1 Items)")).toBeInTheDocument();

  expect((await screen.findAllByTestId("food-item")).length).toBe(4);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect((await screen.findAllByTestId("food-item")).length).toBe(3);
  expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  expect(screen.getByText("Cart (0 Items)")).toBeInTheDocument();



  // const cartItems = await screen.findAllByTestId("cart-item");
  // expect(cartItems).toHaveLength(1);

// expect(accordionHeader).toBeInTheDocument();
});