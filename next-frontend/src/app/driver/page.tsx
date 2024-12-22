export const dynamic = "force-dynamic";
import { RouteModel } from "../../utils/models";
import { MapDriver } from "./MapDriver";
import { StartRouteForm } from "./StartRouteForm";
import { getRoutes } from "../../utils/routes";
import Navbar from "../_components/navbar";

async function DriverPage() {
  const routes = await getRoutes();

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 w-full h-full">
        <div className="w-1/3 p-2 h-full">
          <h4 className="text-3xl text-contrast mb-2">Inicie uma rota</h4>
          <div className="flex flex-col">
            <StartRouteForm>
              <select
                id="route_id"
                name="route_id"
                className="mb-2 p-2 border rounded bg-default text-contrast"
              >
                <option key="0" value="">
                  Selecione uma rota
                </option>
                {routes.map((route: RouteModel) => (
                  <option key={route.id} value={route.id}>
                    {route.name}
                  </option>
                ))}
              </select>
              <button
                className="bg-main text-primary p-2 rounded text-xl font-bold"
                style={{ width: "100%" }}
              >
                Iniciar a viagem
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
