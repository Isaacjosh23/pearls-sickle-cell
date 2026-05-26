export interface IconProps {
  className?: string;
}

export const Icons = {
  Announce: "announce",
  Calender: "calender",
  Call: "call",
  Care: "care",
  Check: "check",
  Clock: "clock",
  Close: "close",
  CopyRight: "copyright",
  Email: "email",
  Eye: "eye",
  Gavel: "gaval",
  Instagram: "instagram",
  Location: "location",
  Medical: "medical",
  Menu: "menu",
  Target: "target",
  Tube: "tube",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
