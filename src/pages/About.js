import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <h1>this is about page</h1>
          <p>we are building blog website</p>
          {console.log(object)}
          <h1>Welcome user: {object.user.login && object.user.data.name}</h1>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
