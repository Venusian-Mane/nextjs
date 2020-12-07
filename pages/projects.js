import Layout from '../components/Layout';

const Projects = () => (
  <div>
    <Layout>
      <h3>Projects</h3>
      <br />

      <div className="container1">
        <p>
          This is just a few of the projects ive worked on. The links are below
          <br />
        </p>

        <p>
          <li>
            <strong>Online To-do list:</strong>{' '}
            <a href="https://github.com/Venusian-Mane/To-do_web_app">
              To-do List Project
            </a>
          </li>

          <li>
            <strong>iTunes search api</strong>
            <a href="https://github.com/Venusian-Mane/search-api-app">
              iTunes search api Project
            </a>
          </li>
        </p>
      </div>
    </Layout>
  </div>
);

export default Projects;
