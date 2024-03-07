import jwtAxios from "../../../utils/jwtUtil";

// 사업자 회원가입 요청 리스트 API
export const businessSignUpListApi = async (page, setData) => {
  try {
    const response = await jwtAxios({
      method: "get",
      url: `/api/manager/hotelAccountStatus?page=${page}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response.data);
    if (response.status === 200) {
      setData(response.data);
      return response.data;
    }
  } catch (error) {
    alert(error.response.data.message);
    return error.response?.status || 500;
  }
};

// 사업자 회원가입 요청 승인 API
export const approveBusinessSignupApi = async hotelPk => {
  try {
    const response = await jwtAxios({
      method: "patch",
      url: `/api/manager/hotelApproval?hotelPk=${hotelPk}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return response.status;
    }
  } catch (error) {
    alert(error.response.data.message);
    return error.response?.status || 500;
  }
};

// 사업자 회원가입 요청 승인 API
export const superAdminHotelListApi = async (page, setData) => {
  try {
    const response = await jwtAxios({
      method: "get",
      url: `/api/manager/hotelList?page=${page}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      setData(response.data);
      return response.data;
    }
  } catch (error) {
    alert(error.response.data.message);
    return error.response?.status || 500;
  }
};
