import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "Dummy Avatar URL",
      },
    };
    console.log("Props in UserClass Component:", props);
  }

  async componentDidMount() {
    // Best place to make API calls
    console.log("Child: UserClass Component Mounted");

    const data = await fetch("https://api.github.com/users/muneeb063");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("UserClass Component Did Update");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar" />
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
