export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    profile_photo: string;
    access_level: number;
    
  }
export interface UserData {
    
    name?: string;
    email?: string;
    access_level?: number;
    
  }