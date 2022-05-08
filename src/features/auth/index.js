import { authSlice } from "./authSlice";

export { Login } from "./components/Login";
export { SignUp } from "./components/SignUp";
export {
  authSlice,
  loginHandler,
  signUpHandler,
  logoutHandler,
} from "./authSlice";
export default authSlice.reducer;
