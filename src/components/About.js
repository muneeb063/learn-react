import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <p>This is the About Us page of our application.</p>

        <UserClass
          name={"Muhammad Muneeb (Class)"}
          location={"Lahore, Pakistan"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>This is the About Us page of our application.</p>

//       <UserClass
//         name={"Muhammad Muneeb (Class)"}
//         location={"Lahore, Pakistan"}
//       />
//     </div>
//   );
// };

export default About;
