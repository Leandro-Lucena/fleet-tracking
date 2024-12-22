"use server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function startRouteAction(state: any, formData: FormData) {
  const { route_id } = Object.fromEntries(formData);

  if (!route_id) {
    return { error: "Route ID is required" };
  }

  // const response = await fetch(
  //   `${process.env.NEST_API_URL}/routes/${route_id}/start`,
  //   {
  //     method: "POST",
  //   }
  // );

  // if (!response.ok) {
  //   console.error(await response.text());
  //   return { error: "Failed to start route" };
  // }

  // return { success: true };
  try {
    const response = await fetch(
      `${process.env.NEST_API_URL}/routes/${route_id}/start`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(errorMessage);
      return { error: `Failed to start route: ${errorMessage}` };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Error starting route" };
  }
}