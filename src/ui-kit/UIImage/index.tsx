import Image from "next/image";

export const UIImage = ({ src, alt, ...rest }: any) => {
  return <Image src={src} alt={alt} {...rest} />;
};
