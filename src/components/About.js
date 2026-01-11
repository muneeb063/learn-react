import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the About Us page of our application.</p>

      <UserClass name ={"Muhammad Muneeb (Class)"} location = {"Lahore, Pakistan"} />
    </div>
  );
};

export default About;
