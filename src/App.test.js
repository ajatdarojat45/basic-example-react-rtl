import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("sould be render title", () => {
  render(<App />);
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(/my app/i);
});

test("counter data should be changed when button clicked", () => {
  render(<App />);
  const button = screen.getByTestId("counter-btn");
  fireEvent.click(button);
  const counterElem = screen.getByTestId("counter-elem");
  expect(counterElem).toHaveTextContent(1);
});

test("text input should be changed", () => {
  render(<App />);
  const input = screen.getByTestId("input-name");
  fireEvent.change(input, {
    target: {
      value: "udin",
    },
  });
  expect(input).toHaveValue("udin");
});

test("Data from API should be rendered", async () => {
  render(<App />);

  const userContainer = screen.getByTestId("user-container");
  const userItems = await screen.findAllByTestId("user-item");

  expect(userItems).toHaveLength(10);
  expect(userItems[0]).toHaveTextContent(/Leanne Graham/i);
  expect(userContainer).not.toBeEmptyDOMElement();
});

test("should be redirect to abou page when link clicked", () => {
  render(<App />);

  const link = screen.getByTestId("link");
  fireEvent.click(link);
  const aboutTitle = screen.getByTestId("about-title");
  expect(aboutTitle).toHaveTextContent(/about page/i);
});
