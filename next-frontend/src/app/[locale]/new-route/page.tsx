import { searchDirections } from "@/utils/search-directions";
import { MapNewRoute } from "./MapNewRoute";
import { NewRouteForm } from "./NewRouteForm";
import Navbar from "../_components/navbar";
import { getTranslations } from "next-intl/server";

async function NewRoutePage({
  searchParams,
}: {
  searchParams: Promise<{ source: string; destination: string }>;
}) {
  const t = await getTranslations("CreateRoutePage");
  const { source, destination } = await searchParams;

  const result =
    source && destination ? await searchDirections(source, destination) : null;
  let directionsData = null;
  let placeSourceId = null;
  let placeDestinationId = null;

  if (result) {
    directionsData = result.directionsData;
    placeSourceId = result.placeSourceId;
    placeDestinationId = result.placeDestinationId;
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex w-full h-full flex-col md:flex-row">
        <div className="w-full h-72 overflow-auto md:w-1/3 p-2 md:h-full mt-4 shadow-lg">
          <form className="flex flex-col space-y-4" method="get">
            <div className="relative">
              <input
                id="source"
                name="source"
                type="search"
                placeholder=""
                defaultValue={source}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-contrast autocomplete:disabled bg-default border-0 border-b-2 border-contrast appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              />
              <label
                htmlFor="source"
                className="absolute text-contrast duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {t("origin")}
              </label>
            </div>
            <div className="relative">
              <input
                id="destination"
                name="destination"
                type="search"
                placeholder=""
                defaultValue={destination}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-contrast bg-default border-0 autocomplete:disabled border-b-2 border-contrast appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              />
              <label
                htmlFor="destination"
                className="absolute text-contrast duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {t("destination")}
              </label>
            </div>
            <button
              type="submit"
              className="bg-main text-contrast p-2 rounded text-xl font-bold"
            >
              {t("btn_search")}
            </button>
          </form>
          {directionsData && (
            <div className="mt-4 p-4 border rounded text-contrast">
              <ul>
                <li className="mb-2">
                  <strong>{t("origin")}:</strong>{" "}
                  {directionsData.routes[0].legs[0].start_address}
                </li>
                <li className="mb-2">
                  <strong>{t("destination")}:</strong>{" "}
                  {directionsData.routes[0].legs[0].end_address}
                </li>
                <li className="mb-2">
                  <strong>{t("distance")}:</strong>{" "}
                  {directionsData.routes[0].legs[0].distance.text}
                </li>
                <li className="mb-2">
                  <strong>{t("duration")}:</strong>{" "}
                  {directionsData.routes[0].legs[0].duration.text}
                </li>
              </ul>
              <NewRouteForm>
                {placeSourceId && (
                  <input
                    type="hidden"
                    name="sourceId"
                    defaultValue={placeSourceId}
                  />
                )}
                {placeDestinationId && (
                  <input
                    type="hidden"
                    name="destinationId"
                    defaultValue={placeDestinationId}
                  />
                )}
                <button
                  type="submit"
                  className="bg-main text-contrast font-bold p-2 text-xl rounded mt-4 w-full"
                >
                  {t("btn_create")}
                </button>
              </NewRouteForm>
            </div>
          )}
        </div>
        <MapNewRoute directionsData={directionsData} />
      </div>
    </div>
  );
}

export default NewRoutePage;
