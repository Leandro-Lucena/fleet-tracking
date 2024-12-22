//routes

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ routeId: string }> }
) {
  const { routeId } = await params;
  // const response = await fetch(`${process.env.NEST_API_URL}/routes/${routeId}`, {
  //   cache: "force-cache",
  //   next: {
  //     tags: [`routes-${routeId}`, "routes"],
  //   },
  // });
  // const data = await response.json();
  // return NextResponse.json(data);
  try {
    const response = await fetch(
      `${process.env.NEST_API_URL}/routes/${routeId}`,
      {
        cache: "force-cache",
        next: {
          tags: [`routes-${routeId}`, "routes"],
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erro ao buscar rota: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao buscar rota" }, { status: 500 });
  }
}
