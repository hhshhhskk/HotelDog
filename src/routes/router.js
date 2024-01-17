import Layout from "../components/Layout/Layout";
import BoardPage from "../pages/BoardPage/BoardPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EventPage from "../pages/EventPage/EventPage";
import HotelDetailPage from "../pages/HotelDetailPage/HotelDetailPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage/MainPage";
import MyPage from "../pages/MyPage/MyPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const RouterInfo = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
        label: "main",
      },
      {
        path: "/login",
        element: <LoginPage />,
        label: "login",
      },
      {
        path: "/signup/:userType",
        element: <SignUpPage />,
        label: "signup",
      },
      {
        path: "/mypage",
        element: <MyPage />,
        label: "mypage",
      },
      {
        path: "/event",
        element: <EventPage />,
        label: "event",
      },
      {
        path: "/board",
        element: <BoardPage />,
        label: "board",
      },
      {
        path: "/hoteldetail/:detailId",
        element: <HotelDetailPage />,
        label: "hoteldetail",
      },
    ],
  },
];
