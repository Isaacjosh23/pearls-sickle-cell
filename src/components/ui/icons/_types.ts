export interface IconProps {
  className?: string;
}

export const Icons = {
  Announce: "announce",
  Care: "care",
  Check: "check",
  Close: "close",
  Gavel: "gaval",
  Medical: "medical",
  Menu: "menu",
  Target: "target",
  Tube: "tube",
} as const;

export type Icons = (typeof Icons)[keyof typeof Icons];
