export type usertype = {
  name: string;
  email: string;
  password: string;
  photourl: string;
  phonenum: number;
  date_of_birth: string;
  country: string;
  created_at: Date;
  refareid: string;
  isadmin: "user" | "modarator" | "admin";
};
