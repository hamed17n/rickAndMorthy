import React from "react";
import cx from "classnames";

import { Loading } from "components/common";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /**
   * Button background color
   */
  color?: "red" | "blue" | "gray" | "none";
  /**
   * Button type
   */
  type?: "submit" | "button" | "reset";
  /**
   * Button need padding or not
   */
  hasPadding?: boolean;
  /**
   * Button loading state
   */
  isLoading?: boolean;
}

export const Button = ({
  type = "button",
  hasPadding = true,
  children,
  color = "none",
  disabled,
  className,
  isLoading = false,
  ...props
}: ButtonProps): JSX.Element => {
  const buttonStyle: string = cx(
    "font-sans font-semibold text-base rounded cursor-pointer",
    {
      "p-2": !!hasPadding,
      "bg-red-600 text-white": color === "red",
      "bg-blue-600 text-white": color === "blue",
      "bg-gray-600 text-white": color === "gray",
      "text-gray-800": color === "none",
      "pointer-events-none": !!disabled || !!isLoading,
    },
    className,
  );

  return (
    <button type={type} disabled={disabled} className={buttonStyle} {...props}>
      {isLoading ? <Loading className="h-6" /> : children}
    </button>
  );
};
