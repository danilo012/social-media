import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "features/auth";
import { Home, Bookmarks } from "pages";
import { PrivateRoute } from "routes/PrivateRoute";
import { ResetScroll } from "components";
import { SinglePost } from "features/post";

export const AppRoutes = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col min-h-screen">
      <ResetScroll>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<SinglePost />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Route>

          {!token ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/signup" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </ResetScroll>
    </div>
  );
};
