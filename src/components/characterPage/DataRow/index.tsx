import React from "react";

export interface DataRowProps {
  title: string;
  value: string | number;
}

export const DataRow = ({ title, value }: DataRowProps) => (
  <div className="flex items-center mb-1 bg-white">
    <h3 className="text-neutral-900 font-normal text-base">{title}:</h3>
    <p className="text-neutral-600 font-medium text-lg ml-2 overflow-hidden whitespace-nowrap text-ellipsis">
      {value}
    </p>
  </div>
);
