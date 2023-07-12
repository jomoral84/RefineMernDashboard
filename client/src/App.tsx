// /* eslint-disable */

// import {
//   AuthBindings,
//   Authenticated,
//   Refine,
//   LegacyAuthProvider as AuthProvider,
// } from "@refinedev/core";
// import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

// import {
//   AccountCircleOutlined,
//   ChatBubbleOutline,
//   PeopleAltOutlined,
//   StarOutlineRounded,
//   VillaOutlined,
// } from "@mui/icons-material";

// import {
//   ErrorComponent,
//   notificationProvider,
//   RefineSnackbarProvider,
//   ThemedLayoutV2,
//   ReadyPage,
// } from "@refinedev/mui";

// import CssBaseline from "@mui/material/CssBaseline";
// import GlobalStyles from "@mui/material/GlobalStyles";
// import routerBindings, {
//   CatchAllNavigate,
//   DocumentTitleHandler,
//   NavigateToResource,
//   UnsavedChangesNotifier,
// } from "@refinedev/react-router-v6";

// import dataProvider from "@refinedev/simple-rest";
// import axios, { AxiosRequestConfig } from "axios";
// import { CredentialResponse } from "interfaces/google";

// import { Title, Sider, Layout, Header } from "components/layout";

// import {
//   Login,
//   Home,
//   Agents,
//   MyProfile,
//   PropertyDetails,
//   AllProperties,
//   CreateProperty,
//   AgentProfile,
//   EditProperty,
// } from "pages";

// import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
// import { parseJwt } from "utils/parse-jwt";

// import { ColorModeContextProvider } from "./contexts";
// import { MuiInferencer } from "@refinedev/inferencer/mui";

// const axiosInstance = axios.create();
// axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
//   const token = localStorage.getItem("token");
//   if (request.headers) {
//     request.headers["Authorization"] = `Bearer ${token}`;
//   } else {
//     request.headers = {
//       Authorization: `Bearer ${token}`,
//     };
//   }

//   return request;
// });

// function App() {
//   const authProvider: AuthBindings = {
//     login: async ({ credential }: CredentialResponse) => {
//       const profileObj = credential ? parseJwt(credential) : null;

//       if (profileObj) {
//         localStorage.setItem(
//           "user",
//           JSON.stringify({
//             ...profileObj,
//             avatar: profileObj.picture,
//           })
//         );

//         localStorage.setItem("token", `${credential}`);

//         return {
//           success: true,
//           redirectTo: "/",
//         };
//       }

//       return {
//         success: false,
//       };
//     },
//     logout: async () => {
//       const token = localStorage.getItem("token");

//       if (token && typeof window !== "undefined") {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         axios.defaults.headers.common = {};
//         window.google?.accounts.id.revoke(token, () => {
//           return {};
//         });
//       }

//       return {
//         success: true,
//         redirectTo: "/login",
//       };
//     },
//     onError: async (error) => {
//       console.error(error);
//       return { error };
//     },
//     check: async () => {
//       const token = localStorage.getItem("token");

//       if (token) {
//         return {
//           authenticated: true,
//         };
//       }

//       return {
//         authenticated: false,
//         error: {
//           message: "Check failed",
//           name: "Token not found",
//         },
//         logout: true,
//         redirectTo: "/login",
//       };
//     },
//     getPermissions: async () => null,
//     getIdentity: async () => {
//       const user = localStorage.getItem("user");
//       if (user) {
//         return JSON.parse(user);
//       }

//       return null;
//     },
//   };

//   return (
//     <BrowserRouter>
//       <RefineKbarProvider>
//         <ColorModeContextProvider>
//           <CssBaseline />
//           <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
//           <RefineSnackbarProvider>
//             <Refine
//               dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
//               notificationProvider={notificationProvider}
//               ReadyPage={ReadyPage}
//               routerProvider={routerBindings}
//               authProvider={authProvider}
//               Title={Title}
//               Sider={Sider}
//               Layout={Layout}
//               Header={Header}
//               LoginPage={Login}
//               DashboardPage={Home}
//               resources={[
//                 {
//                   name: "property",
//                   list: MuiInferencer,
//                   icon: <VillaOutlined />,
//                 },
//                 {
//                   name: "agent",
//                   list: MuiInferencer,
//                   icon: <PeopleAltOutlined />,
//                 },
//                 {
//                   name: "review",
//                   list: MuiInferencer,
//                   icon: <StarOutlineRounded />,
//                 },
//                 {
//                   name: "message",
//                   list: MuiInferencer,
//                   icon: <ChatBubbleOutline />,
//                 },
//                 {
//                   name: "my-profile",
//                   options: { label: "My Profile" },
//                   list: MuiInferencer,
//                   icon: <AccountCircleOutlined />,
//                 },
//               ]}
//               options={{
//                 syncWithLocation: true,
//                 warnWhenUnsavedChanges: true,
//               }}
//             >
//               <Routes>
//                 <Route
//                   element={
//                     <Authenticated fallback={<CatchAllNavigate to="/login" />}>
//                       <ThemedLayoutV2 Header={() => <Header />}>
//                         <Outlet />
//                       </ThemedLayoutV2>
//                     </Authenticated>
//                   }
//                 >
//                   <Route path="*" element={<ErrorComponent />} />
//                 </Route>
//                 <Route
//                   element={
//                     <Authenticated fallback={<Outlet />}>
//                       <NavigateToResource />
//                     </Authenticated>
//                   }
//                 >
//                   <Route path="/login" element={<Login />} />
//                 </Route>
//                 <Route path="/" element={<Home />} />
//               </Routes>

//               <RefineKbar />
//               <UnsavedChangesNotifier />
//               <DocumentTitleHandler />
//             </Refine>
//           </RefineSnackbarProvider>
//         </ColorModeContextProvider>
//       </RefineKbarProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";

import {
  GitHubBanner,
  Refine,
  LegacyAuthProvider as AuthProvider,
} from "@refinedev/core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  ReadyPage,
  ErrorComponent,
} from "@refinedev/mui";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import StarOutlineRounded from "@mui/icons-material/StarOutlineRounded";
import VillaOutlined from "@mui/icons-material/VillaOutlined";

import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6/legacy";
import axios, { AxiosRequestConfig } from "axios";
import { Title, Sider, Layout, Header } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";

import {
  Login,
  Home,
  Agents,
  MyProfile,
  PropertyDetails,
  AllProperties,
  CreateProperty,
  AgentProfile,
  EditProperty,
} from "pages";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

function App() {
  const authProvider: AuthProvider = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      if (profileObj) {
        const response = await fetch("http://localhost:8080/api/v1/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: profileObj.name,
            email: profileObj.email,
            avatar: profileObj.picture,
          }),
        });

        const data = await response.json();

        if (response.status === 200) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...profileObj,
              avatar: profileObj.picture,
              userid: data._id,
            })
          );
        } else {
          return Promise.reject();
        }
      }
      localStorage.setItem("token", `${credential}`);

      return Promise.resolve();
    },
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },

    getPermissions: async () => null,
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("http://localhost:8080/api/v1")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "properties",
              list: AllProperties,
              show: PropertyDetails,
              create: CreateProperty,
              edit: EditProperty,
              icon: <VillaOutlined />,
            },
            {
              name: "agents",
              list: Agents,
              show: AgentProfile,
              icon: <PeopleAltOutlined />,
            },
            {
              name: "reviews",
              list: Home,
              icon: <StarOutlineRounded />,
            },
            {
              name: "messages",
              list: Home,
              icon: <ChatBubbleOutline />,
            },
            {
              name: "my-profile",
              options: { label: "My Profile " },
              list: MyProfile,
              icon: <AccountCircleOutlined />,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          legacyRouterProvider={routerProvider}
          legacyAuthProvider={authProvider}
          LoginPage={Login}
          DashboardPage={Home}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
