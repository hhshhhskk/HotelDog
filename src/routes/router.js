import Layout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import HotelDetailPage from "../pages/HotelDetailPage/HotelDetailPage";
import HotelReview from "../components/Detail/HotelReview";
import ReserveCompletePage from "../pages/ReserveCompletePage/ReserveCompletePage";
import BoardPage from "../pages/Board/BoardPage/BoardPage";
import BoardCreatePage from "../pages/Board/BoardCreatePage/BoardCreatePage";
import BoardDetailPage from "../pages/Board/BoardDetail/BoardDetailPage";
import BoardUpdatePage from "../pages/Board/BoardUpdatePage/BoardUpdatePage";
import EventPage from "../pages/EventPage/EventPage";
import MyPage from "../pages/MyPage/MyPage";

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
        path: "/boardDetail/:boardPk",
        element: <BoardDetailPage />,
        label: "boardDetail",
      },
      {
        path: "/boardCreate",
        element: <BoardCreatePage />,
        label: "boardCreate",
      },
      {
        path: "/boardUpdate",
        element: <BoardUpdatePage />,
        label: "boardUpdate",
      },
      {
        path: "/hotelDetail/:detailId",
        element: <HotelDetailPage />,
        label: "hotelDetail",
      },
      // {
      //   path: "/review/:hotel_pk",
      //   element: <HotelReview />,
      //   label: "hotelReview",
      // },
      {
        path: "/reservecomplete",
        element: <ReserveCompletePage />,
        label: "hotelDetail",
      },
    ],
  },
];
