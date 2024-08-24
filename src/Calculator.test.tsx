import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/store"; // This should be the configured store
import Calculator from "../src/Components/Calculator";

test("renders the calculator", () => {
  render(
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
  expect(screen.getByText("0")).toBeInTheDocument();
});

test("performs addition correctly", () => {
  render(
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
  fireEvent.click(screen.getByText("1"));
  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("2"));
  fireEvent.click(screen.getByText("="));
  expect(screen.getByText("3")).toBeInTheDocument();
});

test("performs multiplication correctly", () => {
   render(
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
  fireEvent.click(screen.getByText("3"));
  fireEvent.click(screen.getByText("*"));
  fireEvent.click(screen.getByText("4"));
  fireEvent.click(screen.getByText("="));
  expect(screen.getByText("12")).toBeInTheDocument();
});

test("clears the display", () => {
  render(
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
  fireEvent.click(screen.getByText("9"));
  fireEvent.click(screen.getByText("C"));
  expect(screen.getByText("0")).toBeInTheDocument();
});
