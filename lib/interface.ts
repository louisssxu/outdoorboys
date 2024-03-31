export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}

export interface Trip {
  id: number;
  attributes: {
    title: string;
    location: string;
    date: string;
    url: string;
    updatedAt: string;
    createdAt: string;
    publishedAt: string;
    equipments?: { data: Equipment[] } | null;
  };
}

export interface Equipment {
  id: number;
  attributes: {
    name: string;
    url: string;
    media: { data: Media };
    publishedAt: string;
    updatedAt: string;
    createdAt: string;
  };
}

export interface Media {
  id: number;
  attributes: {
    name: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  };
}
