import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      // count2: 0,
      userInfo: {
        name: "dummyname",
        location: "dummy location",
      },
    };
    // console.log("Child constructor called " + this.props.name);
  }
  componentDidUpdate() {
    // console.log("child Component did update called");
  }

  // async componentDidMount() {
  //   console.log("Child Component did mount " + this.props.name);
  //   const data = await fetch("https://api.github.com/users/swapnil");
  //   const json = await data.json();
  //   this.setState({
  //     userInfo: json,
  //   });
  //   console.log(json);
  // }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("print");
    }, 1000);
    // console.log("component did mount");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    //console.log("child Component  unmount called");
  }

  render() {
    // console.log("Child render called " + this.props.name);
    const { count } = this.state;
    return (
      <div>
        <h1>Class based componenet</h1>
        {/* <h2>Name:{this.props.name}</h2> */}
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>location:{this.state.userInfo.location}</h2>
        {/* <h3>count:{this.state.count}</h3> */}
        {/* <h3>count:{count}</h3> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          setcountbypress
        </button> */}
      </div>
    );
  }
}
export default Profile;
