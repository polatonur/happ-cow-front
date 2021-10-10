import Cookies from "js-cookie";

const useCookie = (id: string, token: string) => {
  Cookies.set("userToken", token, { expires: 360 });
  Cookies.set("userId", id, { expires: 360 });
  return true;
};

export default useCookie;
