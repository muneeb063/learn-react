import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  componentDidMount() {
    console.log("Parent: About Class Component Mounted");
  }

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h2 className="font-bold text-lg">{loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
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
