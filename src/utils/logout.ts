import Cookies from "js-cookie";

export const handleLogout = async () => {
    Cookies.remove("huesAccessToken");
    Cookies.remove("huesRefreshToken");
    window.location.href = "/login";
  };