export async function searchDirections(source: string, destination: string) {
  console.log(source, destination);
  const [sourceResponse, destinationResponse] = await Promise.all([
    fetch(`${process.env.NEST_API_URL}/places?text=${source}`, {
      // cache: "force-cache", //default
      // next: {
      //   revalidate: 1 * 60 * 60 * 24, // 1 dia
      // }
    }),
    fetch(`${process.env.NEST_API_URL}/places?text=${destination}`, {
      // cache: "force-cache", //default
      // next: {
      //   revalidate: 1 * 60 * 60 * 24, // 1 dia
      // }
    }),
  ]);

  if (!sourceResponse.ok) {
    console.error(await sourceResponse.text());
    throw new Error("Failed to fetch source data");
  }

  if (!destinationResponse.ok) {
    console.error(await destinationResponse.text());
    throw new Error("Failed to fetch destination data");
  }

  const [sourceData, destinationData] = await Promise.all([
    sourceResponse.json(),
    destinationResponse.json(),
  ]);

  const placeSourceId = sourceData.candidates[0].place_id;
  const placeDestinationId = destinationData.candidates[0].place_id;

  const directionsResponse = await fetch(
    `${process.env.NEST_API_URL}/directions?originId=${placeSourceId}&destinationId=${placeDestinationId}`,
    {
      // cache: "force-cache", //default
      // next: {
      //   revalidate: 1 * 60 * 60 * 24, // 1 dia
      // },
    }
  );

  if (!directionsResponse.ok) {
    console.error(await directionsResponse.text());
    throw new Error("Failed to fetch directions");
  }

  const directionsData = await directionsResponse.json();

  return {
    directionsData,
    placeSourceId,
    placeDestinationId,
  };
}
