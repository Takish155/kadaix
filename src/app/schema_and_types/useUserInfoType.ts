export type UserInfoDataType = {
  id: string;
  name: string;
  email: string;
  username: string;
  birthday: string;
  gender: string;
  image: string;
  info: string;
  createdAt: string;
};

export type FetchUserInfoDataType = {
  user: UserInfoDataType;
};

export type UserInfoStateType = {
  data: UserInfoDataType | undefined;
  isLoading: boolean;
  isError: boolean;
};
