import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import MyPage from "../pages/MyPage/MyPage";
import EventPage from "../pages/EventPage/EventPage";
import HotelDeatilPage from "../pages/HotelDetailPage/HotelDetailPage";
import BoardPage from "../pages/BoardPage/BoardPage";

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
        element: <HotelDeatilPage />,
        label: "hoteldetail",
      },
    ],
  },
];
