import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import ForeCast from "./forecast";
import { expect, test } from "@jest/globals";

describe("ForeCast", () => {
   test("Should render the forecast component properly", async () => {
      render(
         <ForeCast
            data={{
               list: [
                  {
                     main: { temp_min: 10, temp_max: 20 },
                     weather: [{ description: "overcast clouds" }],
                  },
                  {
                     main: { temp_min: 5, temp_max: 6 },
                     weather: [{ description: "few clouds" }],
                  },
                  {
                     main: { temp_min: 7, temp_max: 8 },
                     weather: [{ description: "scattered clouds" }],
                  },
               ],
            }}
         />
      );
      expect(screen.getByText("Daily")).toBeVisible();

      expect(screen.getByText("Sunday")).toBeVisible();
      expect(screen.getByText("20°C /10°C")).toBeVisible();
      expect(screen.getByText("overcast clouds")).toBeVisible();

      expect(screen.getByText("Monday")).toBeVisible();
      expect(screen.getByText("6°C /5°C")).toBeVisible();
      expect(screen.getByText("few clouds")).toBeVisible();

      expect(screen.getByText("Tuesday")).toBeVisible();
      expect(screen.getByText("8°C /7°C")).toBeVisible();
      expect(screen.getByText("scattered clouds")).toBeVisible();
   });
});
