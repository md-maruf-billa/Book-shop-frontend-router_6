export type TUser = {
  _id: string
  name: string
  email: string
  password?: string
  profileImage?: string
  address?: string
  phone?: string
  role: string;
  isDeleted?: boolean
}
