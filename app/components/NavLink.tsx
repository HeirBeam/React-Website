// app/components/NavLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
}>;

function isPathActive(pathname: string, href: string, exact: boolean) {
  if (exact) return pathname === href;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function NavLink({
  href,
  exact = false,
  // NOTE: use focus-visible so the ring only shows for keyboard nav
  className = "rounded-md hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  activeClassName = "font-semibold underline underline-offset-4 decoration-2",
  children,
}: Props) {
  const pathname = usePathname();
  const active = isPathActive(pathname, href, exact);
  const finalClass = `${className} ${active ? activeClassName : ""}`;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={finalClass}
      data-active={active ? "true" : "false"}
    >
      {children}
    </Link>
  );
}
