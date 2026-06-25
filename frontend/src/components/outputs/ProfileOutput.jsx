const BASE = "http://backendalisad.vercel.app";

export default function ProfileOutput({ data }) {
  return (
    <div className="output-block">
      <div className="profile-card">
        <div className="avatar-wrap">
          {data.avatar ? (
            <img src={`${BASE}${data.avatar}`}
                 alt={data.name} className="avatar-img" />
          ) : (
            <div className="avatar-placeholder">
              {data.name?.charAt(0) ?? "?"}
            </div>
          )}
        </div>
        <div className="profile-info">
          <p className="profile-name">{data.name}</p>
          <p className="profile-title">{data.title}</p>
          <p className="profile-bio">{data.bio}</p>
          <div className="tag-row">
            <span className="tag">
              {data.city}, {data.country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}