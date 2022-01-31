import React from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

import { Button } from "components/common";

export interface HeaderProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Title of page (image name)
   */
  title?: string;
}

export const Header = ({ title = "", className, ...props }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();
  const headerStyle: string = cx("bg-white w-full px-4 py-2 relative mb-4", className);

  return (
    <div className={headerStyle} {...props}>
      <h1 className="text-center font-mono text-xl font-bold text-gray-800">{title}</h1>
      <Button
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
        onClick={() => navigate(-1)}
      >
        {"< Back"}
      </Button>
    </div>
  );
};
