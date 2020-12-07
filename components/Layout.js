import Head from 'next/head';
import Header from './Header';

const Layout = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>
    <div>
      <style global jsx>
        {`
          h1 {
            color: #6d5ee2;
          }
          h3 {
            text-decoration: underline;
            color: #1eab2e;
          }
          body {
            background-color: #2d2475;
            color: white;
            text-align: center;
          }
          p {
            width: 60%;
            margin: auto;
          }
          li {
            list-style-type: none;
          }
        `}
      </style>
      <Header />
      {props.children}
    </div>
  </div>
);

export default Layout;
