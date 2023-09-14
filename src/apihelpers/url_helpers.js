export const baseURL =
  process.env.NEXT_PUBLIC_API_KEY ??
  'http://localhost:4200';

export const POST_LOGIN = `${baseURL}/auth/login`;
export const GET_USERS = `${baseURL}/auth/getuser`;
export const GET_ORG = `${baseURL}/auth/getorg`;
export const GET_INTRA = `${baseURL}/auth/getint`;
export const GET_VIDYCHAT = `${baseURL}/auth/getvidychat`;