import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/components/Breadcrumb.module.css";
import Link from "next/link";

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
};

const BreadcrumbGlobal = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className={styles.breadcrumb}>
      <li>
        <Link href="/" passHref>
          <span className="a">Home</span>
        </Link>
      </li>
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <li key={breadcrumb.href}>
            <Link href={breadcrumb.href} passHref>
              <span className="a">
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </span>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default BreadcrumbGlobal;
