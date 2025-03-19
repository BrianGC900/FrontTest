import { api } from "../../../utils/libs/axios";

const baseUrl = "/two-factor";

export const verifyInitialTwoFactor = async (token, userId) => {
  const response = await api.post(`${baseUrl}/verify2fa/${userId}`, {
    token,
  });
  return response.data;
};
