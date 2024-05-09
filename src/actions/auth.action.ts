import { authPayloadType } from './auth.types';
import request from './request';

export const loginAction = async (payload: authPayloadType) => {
  try {
    const response = await request({
      route: 'api/v1/auth/login',
      method: 'post',
      payload,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
