import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>loding text</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>user list</h2>{" "}
      <div>
        { userData.users.map(user => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
