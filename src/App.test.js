import React from "react";
import App from "./components/App";
import AccountBalance from "./components/accountBalance/AccountBalance";
import Notification from "./components/Notification/Notification";
import { shallow } from "enzyme";
import AccounBalance from "./components/accountBalance/AccountBalance";

const userBalance = {
  balance: 1100,
  savingBalance: 103,
};

describe("rendering components", () => {
  it("render App component without crashing", () => {
    shallow(<App />);
  });
  it("render AccountBalance component header without crashing", () => {
    const wrapper = shallow(<AccountBalance />);
    const header = <h1>Welcome in the personal finance app!</h1>;
    expect(wrapper.contains(header).toEqual(true));
  });
  it("render Notification component without crashing", () => {
    shallow(<Notification />);
  });
  it("render button", () => {
    const wrapper = mount(<AccounBalance accounts={userBalance} />);
    const label = wrapper.find("#balance-button").text();
    expect(label).toEqual("Send 100$");
  });
});

describe("passing props", () => {
  const notificationWrapper = mount(<Notification balance={userBalance} />);
  it("accept balance props", () => {
    expect(notificationWrapper.props().balance).toEqual(userBalance);
  });
});
