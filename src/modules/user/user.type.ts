export type user = {
  name: string;
  email: string;
  password: string;
  photourl: string;
  phonenum: number;
  date_of_birth: string;
  country: string;
  created_at: Date;
  isadmin: "user" | "modarator" | "admin";
};

export type user_setting = {
  bookedmark: [bookedmark];
  points: number;
  transaction: [transation];
  refareid: string;
  points_count: number;
  ads_click: number;
  devices: [devices];
};

export type bookedmark = {
  user_email: string;
  comic_id: string;
};
export type transation = {
  user_email: string;
  withdraw_date: Date;
  amount: number;
};

export type devices = {
  user_email: string;
  user_device: string;
  user_ipaddress: string;
  user_login_date: Date;
};
