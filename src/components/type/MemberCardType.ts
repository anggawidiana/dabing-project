// types/index.ts

export interface MembershipItem {
  title: string;
  price: string;
  description: string;
}

export type MembershipCategory =
  | "promo"
  | "umum"
  | "couple"
  | "pelajar"
  | "karyawan/organisasi"
  | "paket pt";

export interface MembershipData {
  [key: string]: MembershipItem[];
}

export interface ButtonProps {
  text?: string;
  variant?: "default" | "first" | "second";
  fontWeight?: string;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export interface CardProps {
  title: string;
  price: string;
  description: string;
}

export interface CategoryButton {
  key: MembershipCategory;
  label: string;
}
