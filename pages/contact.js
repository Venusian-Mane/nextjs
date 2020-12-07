import Layout from '../components/Layout';

const Contact = () => (
  <div>
    <Layout>
      <h3>Contact</h3>
      <br />
      <p>If you are interested in collaborating, my details are below</p>

      {/*FIELDSET FOR CONTACT DETAILS ONLY CONTAIN EMAIL AND GITHUB*/}
      <fieldset>
        <legend>Contact Details</legend>
        <strong>Email</strong>: manelisi.mm@gmail.com <br />
        <strong>Github</strong>: Venusian-Mane
      </fieldset>
    </Layout>
  </div>
);

export default Contact;
