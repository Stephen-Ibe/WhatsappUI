import React from "react";

const Avatar = ({ user, showName }) => {
  return (
    <>
      <div className="avatar-component">
        <img className="avatar" src={user.avatar} alt="" />
        {showName && <h3 className="avatar-title">{user.name}</h3>}
      </div>
    </>
  );
};

export default Avatar;
