export interface IUserLogin{
    email: string,
    password: string
}

export interface IUser{
    _id: string
    email: string,
    password: string,
    role: userRoles
}

export enum userRoles {
    StoreManager = "StoreManager",
    SiteStoreManager = "SiteStoreManager"
  }