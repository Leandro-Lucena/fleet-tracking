"use client";

import { PropsWithChildren, useActionState } from "react";
import { createRouteAction } from "./create-route.action";
import { useTranslations } from "next-intl";

export function NewRouteForm(props: PropsWithChildren) {
  const t = useTranslations("CreateRoutePage");
  const [state, formAction] = useActionState<
    {
      error?: string;
      success?: boolean;
    } | null,
    FormData
  >(createRouteAction, null);
  return (
    <form action={formAction}>
      {state?.error && (
        <div className="p-4 border rounded text-contrast bg-error">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="p-4 border rounded text-contrast bg-success">
          {t("route_created")}
        </div>
      )}
      {props.children}
    </form>
  );
}
