import React from "react";
import cx from "classnames";

interface PageWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export const PageWrapper = ({ className, children }: PageWrapperProps): JSX.Element => {
  return (
    <div className={cx("mx-auto max-w-screen-lg w-full pt-8 px-4", className)}>
      {children}
    </div>
  );
};
