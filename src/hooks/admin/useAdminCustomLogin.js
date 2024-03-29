import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AdminLoginPostAsync, logout } from "../../redux/admin/adminLoginSlice";

const useCustomAdminLogin = () => {
  // 패스 이동하기
  const navigate = useNavigate();

  // RTK 상태값 업데이트
  const dispatch = useDispatch();

  // RTK 상태값 읽기
  const adminLoginState = useSelector(state => state.adminLoginSlice); // 수정
  // 로그인 상태값 파악
  const isLogin = !!adminLoginState.accessToken;

  // 로그인 기능
  const doLogin = async ({ loginParam }) => {
    try {
      // 로그인 어느화면에서 실행이 될 소지가 높아요.
      // 로그인 상태 업데이트
      const action = await dispatch(AdminLoginPostAsync({ loginParam }));
      // 결과값
      return action.payload;
    } catch (error) {
      console.error("로그인 실패:", error);
      throw error; // 에러를 호출한 곳으로 전달
    }
  };

  // 로그아웃 기능
  const doLogout = () => {
    dispatch(logout());
  };

  // 패스이동 기능
  const moveToPath = path => {
    // 패스로 이동 후에 replace:ture 를 적용시 뒤로 가기 화면
    // 이전 페이지 기록을 남기지 않는다.
    navigate({ pathname: path }, { replace: true });
  };

  // 로그인 페이지 이동 기능
  const moveToLogin = () => {
    return <Navigate replace to="/login" />;
  };

  return {
    adminLoginState,
    isLogin,
    doLogin,
    doLogout,
    moveToPath,
    moveToLogin,
  };
};

export default useCustomAdminLogin;
