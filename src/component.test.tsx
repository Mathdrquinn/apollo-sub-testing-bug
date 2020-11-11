import React from "react";
import { act } from "react-dom/test-utils";
import { MockedProvider } from "@apollo/client/testing";
import { mount, ReactWrapper } from "enzyme";
import { TheComponent } from "./component";
import { mockUserId, getUserMock, subscribetoUserMock } from "./mocks";

describe("thing", () => {
  const userId = mockUserId;
  const initialUser = { id: userId, purchases: [] };
  const mocks = [subscribetoUserMock.success.mock, getUserMock.success.mock];
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TheComponent user={initialUser} />
      </MockedProvider>
    );
  });
  test("should not loop", () => {
    expect(wrapper.text()).toBe("total: $0");
  });

  describe("after a tick", () => {
    beforeAll(async () => {
      await act(async () => {
        await new Promise((res) => setTimeout(res, 0));
        wrapper.update();
      });
    });

    test("should show the updated purchase total", () => {
      expect(wrapper.text()).toBe("total: $2");
    });
  });
});
