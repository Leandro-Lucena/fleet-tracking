export const dynamic = "force-dynamic";
import { RouteModel } from "../../../utils/models";
import { MapDriver } from "./MapDriver";
import { StartRouteForm } from "./StartRouteForm";
import { getRoutes } from "../../../utils/routes";
import Navbar from "../_components/navbar";
import { getTranslations } from "next-intl/server";

async function DriverPage() {
  const t = await getTranslations("DriverPage");
  const routes = await getRoutes();

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex flex-1 w-full h-full flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-2 md:h-full mt-4">
          <div className="flex flex-col">
            <StartRouteForm>
              <select
                id="route_id"
                name="route_id"
                className="mb-2 p-2 border rounded bg-default text-contrast"
              >
                <option key="0" value="">
                  {t("select_a_route")}
                </option>
                {routes.map((route: RouteModel) => (
                  <option key={route.id} value={route.id}>
                    {route.name}
                  </option>
                ))}
              </select>
              <button
                className="bg-main text-contrast p-2 rounded text-xl font-bold"
                style={{ width: "100%" }}
              >
                {t("btn_start")}
              </button>
            </StartRouteForm>
          </div>
        </div>
        <MapDriver routeIdElementId={"route_id"} />
      </div>
    </div>
  );
}

export default DriverPage;
