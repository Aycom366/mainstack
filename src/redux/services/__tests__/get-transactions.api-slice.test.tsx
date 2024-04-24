import { renderHook } from "@testing-library/react";
import { useGetTransactionsQuery } from "../get-transactions.api-slice";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ReactNode } from "react";

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

describe("get-transactions.api-slice", () => {
  test("transaction api slice", () => {
    renderHook(() => useGetTransactionsQuery(), {
      wrapper: Wrapper,
    });
  });
});
