import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";

export default function AppRouter(){
    return <Suspense fallback={null}>{useRoutes(Routes)}</Suspense>
}