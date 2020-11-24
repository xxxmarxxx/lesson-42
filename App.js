const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 17,
      name: "Karol",
      sex: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p className="infoUser">Informacje o uzytkowniku</p>
    <p>
      Wiek uzytkownika: <strong>{user.age}</strong>
    </p>
    <p>Plec uzytkownika: {user.sex}</p>
    {/* <h2>Ma {user.age}</h2> */}
  </div>
);

class ListItems extends React.Component {
  state = {
    select: "all",
  };

  handleUsersFilter(option) {
    this.setState({
      select: option,
    });
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return (users = users.map((user) => (
          <Item user={user} key={user.Id} />
        )));
      case "female":
        users = users.filter((user) => user.sex === "female");
        return (users = users.map((user) => (
          <Item user={user} key={user.Id} />
        )));
      case "male":
        users = users.filter((user) => user.sex === "male");
        return (users = users.map((user) => (
          <Item user={user} key={user.Id} />
        )));
        default:
          return "nic nie ma"
    }
  };

  render() {
    return (
      <>
        <h1>Lesson 42 - work with arrays</h1>
        <div className="btn">
          <button onClick={this.handleUsersFilter.bind(this, "all")}>
            All
          </button>
          <button onClick={this.handleUsersFilter.bind(this, "female")}>
            Female
          </button>
          <button onClick={this.handleUsersFilter.bind(this, "male")}>
            Male
          </button>
          </div>
            <div className="userData">
              {this.usersList()}
            </div>
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
