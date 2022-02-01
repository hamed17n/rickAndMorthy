import React from "react";
import cx from "classnames";

export interface ErrorWrapperProps {
  className?: string;
  message: string;
}

export const ErrorWrapper = ({ className, message }: ErrorWrapperProps): JSX.Element => {
  const errorClasses = cx(
    "mx-auto text-center border border-red-700 bg-red-100 mt-8 p-4 rounded max-w-2xl w-3/4",
    className,
  );

  return <div className={errorClasses}>{message}</div>;
};
