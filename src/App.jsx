import { lazy } from "react";
import {
  BrowserRouter as Router,
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
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import OTP from "./pages/auth/OTP";
import ForgetPassword from "./pages/auth/ForgetPassword";
import SplashScreen from "./pages/splash/SplashScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import RegisterScreen from "./pages/auth/RegisterScreen";
import VerifyScreen from "./pages/auth/VerifyScreen";
import OTPScreen from "./pages/auth/OTPScreen";
import ForgetPasswordScreen from "./pages/auth/ForgetPasswordScreen";
import ResetPasswordScreen from "./pages/auth/ResetPasswordScreen";

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
    <Provider store={store}>
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
                  <Route path="auth">
                    <Route path="login" element={<LoginScreen />}></Route>
                    <Route path="register" element={<RegisterScreen />}></Route>
                    <Route path="verify" element={<VerifyScreen />}></Route>
                    <Route path="verify-otp" element={<OTPScreen />}></Route>
                    <Route
                      path="forget-password"
                      element={<ForgetPasswordScreen />}
                    ></Route>
                    <Route
                      path="reset-password"
                      element={<ResetPasswordScreen />}
                    ></Route>
                    <Route path="otp" element={<OTP />}></Route>
                  </Route>

                  <Route path="*" element={<>No route found</>}></Route>
                </Routes>
              </Loadables>
            </Router>
          </AuthProvider>
        </IonContent>
      </IonApp>
    </Provider>
  );
}
