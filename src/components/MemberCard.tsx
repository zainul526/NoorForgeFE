import type { Member } from "../types";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <article className="card member-card">
      <div className="avatar">{member.name.charAt(0)}</div>
      <h3>{member.name}</h3>
      <p className="muted">{member.role}</p>
      <div className="tag-row centered">
        {member.skills.map((skill) => (
          <span className="tag" key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}