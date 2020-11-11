import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { mount, ReactWrapper } from "enzyme";
import { TheComponent } from "./component.tsx";

describe("thing", () => {
  const userId = "abc-123";
  const initialUser = { id: userId, purchases: [] };
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(
      <MockedProvider mocks={[]}>
        <TheComponent user={initialUser} />
      </MockedProvider>
    );
  });
  test("should not loop", () => {
    expect(1).toBe(2);
  });
});
