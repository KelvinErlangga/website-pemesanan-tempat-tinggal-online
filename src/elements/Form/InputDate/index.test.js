import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/jest-dom";
import InputDate from "./index";

class TestInput extends React.Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <InputDate max={30} onChange={this.handleChange} name="value" value={this.state.value} />;
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control[name='value']`);

  return {
    container,
    wrapper,
    input,
  };
};

test("Should have wrapper with classname .form-control", () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

test("Should have <input> tag and has classname .form-control", () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test("Should show date picker when click input field", () => {
  const { container, input } = setup();

  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
  screen.debug();

  expect(datePickerWrapper).toBeInTheDocument();
});
