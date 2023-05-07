import Link from "next/link";

export const UILink = ({ href, children, ...rest }: any) => {
  return (
    <div className="text text-text-100 text-sm " {...rest}>
      <Link href={href}>{children}</Link>
    </div>
  );
};
