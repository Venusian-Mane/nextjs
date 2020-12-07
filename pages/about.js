const { default: Layout } = require('../components/Layout');

const About = () => (
  <div>
    <Layout>
      <div>
        <h2>Manelisi, who am I?</h2>
        <hr />
        <br />
        <div className="bio">
          <h3>Biography</h3>
          <br />
          <p>
            I am a student web developer apsiring to be a full-stack web
            developer. I have experience in building web applications and in
            collaborating with team members. I always find the best and
            efficient way to solve a problem. Tackling challenges with simple
            solutions is one of my greatest strengths that i would like to share
            in the work place.
          </p>
          <br />
        </div>
        <div className="container1">
          {/* EDUCATION SECTION */}
          <div>
            <h3>Education</h3>
            <br />
            <ul>
              <li>
                <strong>Hyperion Development:</strong> MICT SETA (2020 -
                Present)
              </li>

              <li>
                <strong>Umuzi Academy:</strong> NCIT (2020 - Present)
              </li>

              <li>
                <strong>Cambridge Academy:</strong> Matric Certificate (2019)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default About;
