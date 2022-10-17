import Link from 'next/link';

export const DropDownLink = (props) => {
  let { href, children, ...rest } = props;

  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};
