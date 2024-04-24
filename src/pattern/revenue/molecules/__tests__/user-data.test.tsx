import { screen } from "@testing-library/react";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";
import UserData from "../user-data";
import { renderWithProviders } from "@/redux/test-utils";

jest.mock("@/redux/services/get-user.api-slice");

describe("UserData", () => {
  it("displays user data correctly", async () => {
    (useGetUserQuery as jest.Mock).mockReturnValue({
      data: {
        first_name: "Olivier",
        last_name: "Jones",
        email: "olivierjones@gmail.com",
      },
    });

    renderWithProviders(<UserData />);

    expect(await screen.findByText("Olivier Jones")).toBeInTheDocument();
    expect(
      await screen.findByText("olivierjones@gmail.com")
    ).toBeInTheDocument();
  });
});
