import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const pathname = useRouter().pathname;

  return (
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <div className="is-flex">
            <Link href="/">
              <Image
                src="images/RKV_logo.svg"
                alt="RKV Logo"
                width={80}
                height={80}
              />
            </Link>
            <Link href="/">
              <div className="column ml-4">
                <h1 className="title is-size-3">Radioamaterski Tečaj</h1>
                <h6 className="subtitle">&ldquo;Radioklub&rdquo; Vegova</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="container">
          <nav className="navbar">
            <div className="navbar-menu is-active">
              <div className="navbar-start">
                {navItem("Domov", "/", pathname)}
                {navItem("Predstavitev", "/present", pathname)}
                {navItem("Vaja", "/vaja", pathname)}
              </div>
              <div className="navbar-end">
                <Link
                  className="navbar-item is-flex"
                  href="https://rklub.vegova.si/"
                >
                  <span className="icon">
                    <img src="/images/RKV_logo_white.svg" alt="RKV Logo" />
                  </span>
                  <span className="ml-2">Radioklub Vegova</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

function navItem(text: string, href: string, pathname: string) {
  const isActive = pathname == href;

  return (
    <Link className={`navbar-item ${isActive ? "is-active" : ""}`} href={href}>
      {text}
    </Link>
  );
}
