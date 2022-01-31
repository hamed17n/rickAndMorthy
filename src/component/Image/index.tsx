import React from "react";

export interface ImageProps
  extends Omit<React.HTMLProps<HTMLImageElement>, "crossOrigin"> {
  loading?: "eager" | "lazy";
}

export const Image = ({
  alt = "",
  src,
  loading = "lazy",
  ...props
}: ImageProps): JSX.Element => {
  return <img loading={loading} src={src} alt={alt} {...props} />;
};
