import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

export default function CustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={`inline-flex items-center font-bold animated-underline ${className}`}
    >
      {children}
    </UnstyledLink>
  );
}
