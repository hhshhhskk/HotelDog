// 일반 유저 라우터
import Layout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import HotelDetailPage from "../pages/HotelDetailPage/HotelDetailPage";
import ReserveCompletePage from "../pages/ReserveCompletePage/ReserveCompletePage";
import BoardPage from "../pages/Board/BoardPage/BoardPage";
import BoardCreatePage from "../pages/Board/BoardCreatePage/BoardCreatePage";
import BoardDetailPage from "../pages/Board/BoardDetail/BoardDetailPage";
import BoardUpdatePage from "../pages/Board/BoardUpdatePage/BoardUpdatePage";
import EventPage from "../pages/EventPage/EventPage";
import MyPage from "../pages/MyPage/MyPage";

// 관리자 라우터
import AdminLayout from "../layouts/AdminLayout";
import AdminErrorPage from "../pages/admin/Common/ErrorPage/AdminErrorPage";
import AdminLoginPage from "../pages/admin/Common/LoginPage/AdminLoginPage";
import AdminSignUpPage from "../pages/admin/Common/SignUpPage/AdminSignUpPage";
import HotelInfoPage from "../pages/admin/Business/HotelPage/HotelInfoPage";
import RoomPage from "../pages/admin/Business/RoomPage/RoomPage";
import HotelModifyPage from "../pages/admin/Business/HotelPage/HotelModifyPage";
import DeleteIdPage from "../pages/admin/Business/HotelPage/DeleteIdPage";

// 최고관리자 라우터
import SuperAdminLayout from "../layouts/SuperAdminLayout";
import UserPage from "../pages/admin/SuperAdmin/UserPage";
import RoomModifyPage from "../pages/admin/Business/HotelPage/RoomModifyPage";
import BusinessPage from "../pages/admin/SuperAdmin/BusinessPage";
import BusinessReq from "../pages/admin/SuperAdmin/BusinessReq";
import HotelList from "../pages/admin/SuperAdmin/HotelList";
import RoomListPage from "../pages/admin/Business/RoomPage/RoomListPage";

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
      {
        path: "/reservecomplete",
        element: <ReserveCompletePage />,
        label: "hotelDetail",
      },
    ],
  },
  // 사이드바 없는 관리자
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
    errorElement: <AdminErrorPage />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignUpPage />,
    errorElement: <AdminErrorPage />,
  },
  // 사이드바 포함 관리자
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <AdminErrorPage />,
    children: [
      {
        index: true,
        element: <RoomPage />,
        label: "room",
      },
      {
        path: "/admin/roomlist",
        element: <RoomListPage />,
        label: "roomlist",
      },
      {
        path: "/admin/hotelinfo",
        element: <HotelInfoPage />,
        label: "hotelInfo",
      },
      {
        path: "/admin/hotelmodify",
        element: <HotelModifyPage />,
        label: "hotelModify",
      },
      {
        path: "/admin/roommodify",
        element: <RoomModifyPage />,
        label: "roomModify",
      },
      {
        path: "/admin/deleteIdPage",
        element: <DeleteIdPage />,
        label: "deleteId",
      },
    ],
  },
  // 최고 관리자
  {
    path: "/superadmin",
    element: <SuperAdminLayout />,
    errorElement: <AdminErrorPage />,
    children: [
      {
        index: true,
        element: <UserPage />,
        label: "user",
      },
      {
        path: "/superadmin/business",
        element: <BusinessPage />,
        label: "business",
      },
      {
        path: "/superadmin/businessreq",
        element: <BusinessReq />,
        label: "businessreq",
      },
      {
        path: "/superadmin/hotelList",
        element: <HotelList />,
        label: "hotelList",
      },
    ],
  },
];
