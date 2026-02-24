function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <h2>{user.name}</h2>
      <p>Role: <strong>{user.role}</strong></p>
      <p>
        Status:{' '}
        <span className={`status ${user.status.toLowerCase()}`}>
          {user.status}
        </span>
      </p>
    </div>
  );
}

export default ProfileCard;