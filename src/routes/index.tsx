import React, { ReactNode, lazy, Suspense, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// components
import LoadingScreen from "../components/loadingscreen";

import NotFound from "../views/page404";

export function renderRoutes(routes: RouteItem[] = []) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route, idx) => {
          const Component = route.component;
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              key={`routes-${idx}`}
              path={route.path}
              element={
                <Guard>
                  <Layout>
                    {route.routes && route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component />
                    )}
                  </Layout>
                </Guard>
              }
            />
          );
        })}
        <Route path="*" element={<NotFound />} />;
      </Routes>
    </Suspense>
  );
}

type RouteItem = {
  exact?: boolean;
  guard?: ({ children }: { children: ReactNode }) => JSX.Element;
  path: string;
  component?: any;
  layout?: ({ children }: { children: ReactNode }) => JSX.Element;
  routes?: {
    component: any;
    path: string;
    exact?: boolean;
  }[];
};

const routes: RouteItem[] = [
  // Others Routes
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("../views/page404")),
  },

  // Routes
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../views/home")),
  },
  {
    exact: true,
    path: "/painel-usuario",
    component: lazy(() => import("../views/userdashboard")),
  },
  {
    exact: true,
    path: "/editar-pedido",
    component: lazy(() => import("../views/userdashboard/editpedido")),
  },
  {
    exact: true,
    path: "/falar-com-vendedor",
    component: lazy(() => import("../views/userdashboard/contactvendor")),
  },
  {
    exact: true,
    path: "/edituser",
    component: lazy(() => import("../views/userdashboard/edituser")),
  },
  {
    exact: true,
    path: "/vendor-dashboard",
    component: lazy(() => import("../views/vendordashboard")),
  },
  {
    exact: true,
    path: "/configurepayment",
    component: lazy(() => import("../views/vendordashboard/configurepayment")),
  },

  {
    exact: true,
    path: "/editaccount",
    component: lazy(() => import("../views/vendordashboard/editaccount")),
  },
  {
    exact: true,
    path: "/purchasedetail",
    component: lazy(() => import("../views/vendordashboard/purchasedetail")),
  },
  {
    exact: true,
    path: "/productcatalog",
    component: lazy(() => import("../views/vendordashboard/productcatalog")),
  },
  {
    exact: true,
    path: "/addproduct",
    component: lazy(
      () => import("../views/vendordashboard/productcatalog/addproduct")
    ),
  },
  {
    exact: true,
    path: "/lives",
    component: lazy(() => import("../views/vendordashboard/lives")),
  },
  {
    exact: true,
    path: "/liveschedule",
    component: lazy(
      () => import("../views/vendordashboard/lives/liveschedule")
    ),
  },
  {
    exact: true,
    path: "/startlive",
    component: lazy(() => import("../views/vendordashboard/lives/startlive")),
  },
];

export default routes;
