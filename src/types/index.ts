import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  styles: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
