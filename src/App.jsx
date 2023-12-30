import { lazy } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { setupIonicReact, IonApp, IonContent } from "@ionic/react";
import { Provider } from "react-redux";
import { Notifications } from "./components/Notifications";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import { lazily } from "react-lazily";
import { store } from "./stores/reduxStore";
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from "./pages/splash/SplashScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import RegisterScreen from "./pages/auth/RegisterScreen";
import VerifyScreen from "./pages/auth/VerifyScreen";
import OTPScreen from "./pages/auth/OTPScreen";
import ForgetPasswordScreen from "./pages/auth/ForgetPasswordScreen";
import ResetPasswordScreen from "./pages/auth/ResetPasswordScreen";
import Settings from "./pages/profile/Settings";
import EditProfile from "./pages/profile/EditProfile";
import UserProfileScreen from "./pages/profile/UserProfileScreen";
import Home from "./pages/main/Home";
import AppLayout from "./layout/AppLayout";
import Doctors from "./pages/doctors/Doctors";
import DoctorChat from "./pages/doctors/DoctorChat";
import Schedule from "./pages/schedule/Schedule";
import Consultation from "./pages/doctors/Consultation";
import Loader from "./components/webComponent/Loader";
import CheckAuth from "./layout/CheckAuth";
import { Toaster } from "react-hot-toast";
import { Authenticate } from "./components/Auth";
import { Logout } from "./pages/auth/Logout";
import Subscription from "./pages/settings/Subscription";
import MySubscription from "./pages/settings/MySubscription";

// import { loadable } from 'react-lazily/loadable';
// const { MyComponent } = loadable(() => import('./MyComponent'), { fallback: <div>Loading...</div>, });

//Pages
const { Nav } = lazily(() => import("./components/Nav"));
const { IonicPage } = lazily(() => import("./pages/Ionic"));
const Loadables = lazy(() => import("./components/Loadables"));

setupIonicReact({
  // mode: 'ios'
});

export default function App() {
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate persistor={persistedStore}> */}
        <Toaster />
        <IonApp>
          <IonContent>
            <AuthProvider
              authType="localstorage" //cookie
              authName="auth"
            // cookieDomain={window.location.hostname}
            // cookieSecure={window.location.protocol === "https:"}
            >
              <Router>
                <Loadables>
                  <Notifications />
                  <Routes>
                    <Route path="/" element={<SplashScreen />}></Route>
                    {/* AUTHENTICATION */}
                    <Route path="auth" element={<CheckAuth />}>
                      <Route path="login" element={<LoginScreen />}></Route>
                      <Route
                        path="register"
                        element={<RegisterScreen />}
                      ></Route>
                      <Route path="verify" element={<VerifyScreen />}></Route>
                      <Route path="verify-otp" element={<OTPScreen />}></Route>
                      <Route path="forget-password" element={<ForgetPasswordScreen />} ></Route>
                    </Route>
                    {/* MAIN Pages */}
                    <Route element={<Authenticate />}>
                      <Route element={<AppLayout />}>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/settings/subscription" element={<Subscription />} ></Route>
                        <Route path="/settings/my-subscriptions" element={<MySubscription />} ></Route>
                        {/* PROFILE PAGES */}
                        <Route path="/profile" element={<UserProfileScreen />} ></Route>
                        <Route path="/edit-profile" element={<EditProfile />} ></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                        <Route path="/doctors" element={<Doctors />}></Route>
                        <Route path="/schedule" element={<Schedule />}></Route>
                        <Route path="/doctor/chat/:id" element={<DoctorChat />} ></Route>
                        <Route path="/doctor/consultation/:id" element={<Consultation />} ></Route>
                        <Route path="/fetch-doctor" element={<Loader />} ></Route>
                        <Route path="reset-password" element={<ResetPasswordScreen />} ></Route>
                      </Route>
                    </Route>
                    {/* ERROR PAGES */}
                    <Route path="logout" element={<Logout />}></Route>
                    <Route path="*" element={<>No route found</>}></Route>
                  </Routes>
                </Loadables>
              </Router>
            </AuthProvider>
          </IonContent>
        </IonApp>
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}
