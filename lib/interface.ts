/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    trips: Trip;
    equipments: Equipment;
    foods: Food;
    media: Media;
    ingredients: Ingredient;
    "payload-preferences": PayloadPreference;
    "payload-migrations": PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "trips".
 */
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
    equipment?: { data: Equipment[] } | null;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "equipments".
 */
export interface Equipment {
  id: number;
  attributes: {
    name: string;
    url: string;
    timestamp: string;
    media: { data: Media };
    publishedAt: string;
    updatedAt: string;
    createdAt: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  attributes: {
    name: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "foods".
 */
export interface Food {
  id: number;
  name: string;
  description?: string | null;
  videoTimestamp?: string | null;
  ingredients?: (number | Ingredient)[] | null;
  media: Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ingredients".
 */
export interface Ingredient {
  id: number;
  name: string;
  url: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: "users";
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
