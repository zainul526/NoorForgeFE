import MemberCard from "../components/MemberCard";
import { members } from "../data/mockData";

export default function Team() {
  return (
    <section className="section page-top">
      <p className="eyebrow">People behind the work</p>
      <h1>Team</h1>
      <p className="lead">
        A small developer community focused on learning by shipping.
      </p>

      <div className="card-grid page-grid">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}