import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import  appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("should load Header component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );      
      const loginBtn = screen.getByRole("button", { name: "Login" });
    // const loginBtn = screen.getByText("Login");
    expect(loginBtn).toBeInTheDocument();  

  
}); 

it("should load Header component with a Cart 0", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );      
    const cartItems = screen.getByText("Cart (0 Items)");
    expect(cartItems).toBeInTheDocument();    
}); 

it("should load Header component with a Cart", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );      
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();    
}); 

it("Should change Login Button to Logout on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );      
    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
}); 