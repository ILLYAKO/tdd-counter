//npm run test
import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Counter from "./Counter";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    //wrapper = shallow(<Counter />);
    wrapper = mount(<App />);

  });

  test("render the title of counter", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is counter app");

    // const { getByText } = render(<App />);
    // const linkElement = getByText("This is counter app");
    // expect(linkElement).toBeInTheDocument();
  });

  test("render a button with text of increment", () => {
    //const wrapper = shallow(<App />);
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    //const wrapper = shallow(<App />);
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and deccrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
