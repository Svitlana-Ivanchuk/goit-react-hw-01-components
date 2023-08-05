export const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};
