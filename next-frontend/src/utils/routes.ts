// export async function getRoutes() {
//   const response = await fetch(`${process.env.NEST_API_URL}/routes`, {
//     cache: "force-cache",
//     next: {
//       tags: ["routes"],
//     },
//   });
//   //revalidate por demanda
//   return response.json();
// }

export async function getRoutes() {
  try {
    const response = await fetch(`${process.env.NEST_API_URL}/routes`, {
      cache: "force-cache",
      next: {
        revalidate: 60, // revalida a cada 60 segundos
        tags: ["routes"],
      },
    });

    if (!response.ok) {
      console.error(`Erro ao buscar rotas: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error; // rethrow para propagar o erro
  }
}
