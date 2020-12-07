import Link from 'next/link';

const Header = () => (
  <div>
    <style jsx>
      {`
        a {
          padding: 10px;
        }
        body {
          color: white;
        }
        .navigation {
          border-style: solid;
        }
      `}
    </style>
    <h1>
      <u>Portfolio</u>
    </h1>

    <p>
      This is a test portfolio to represent who I am and what I do <br />
      Please follow the links below to be navigated to their respective pages
    </p>

    <div className="navigation">
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </nav>
    </div>
  </div>
);

export default Header;
