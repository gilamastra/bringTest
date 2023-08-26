import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import CurrentWeather from "./current-weather";
import { expect, test } from "@jest/globals";

describe("CurrentWeather", () => {
   test("Should render the current weather component properly", async () => {
      render(
         <CurrentWeather
            data={{
               city: "Vienna",
               weather: [
                  {
                     description: "clear sky",
                  },
               ],
               main: {
                  temp: 20,
                  feels_like: 25,
                  humidity: 50,
                  pressure: 1000,
               },
               wind: { speed: 180 },
            }}
         />
      );
      expect(screen.getByText("Details")).toBeVisible();
      expect(screen.getByText("Vienna")).toBeVisible();
      expect(screen.getByText("clear sky")).toBeVisible();

      expect(screen.getByText("Feels like")).toBeVisible();
      expect(screen.getByText("25°C")).toBeVisible();

      expect(screen.getByText("Wind")).toBeVisible();
      expect(screen.getByText("180 m/s")).toBeVisible();

      expect(screen.getByText("Humidity")).toBeVisible();
      expect(screen.getByText("50%")).toBeVisible();

      expect(screen.getByText("Pressure")).toBeVisible();
      expect(screen.getByText("1000 hPa")).toBeVisible();
   });
});
