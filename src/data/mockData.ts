import type { Course, Member, Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Space SOS",
    description: "A fast-paced space rescue and survival game built by the NoorForge team.",
    tech: ["JavaScript", "Canvas", "Game Logic"],
    status: "Released",
  },
];

export const members: Member[] = [
  {
    id: 1,
    name: "Zainul Abideen",
    role: "Team Lead / Coordinator",
    skills: ["JavaScript", "Web Development", "Project Leadership"],
  },
];

export const courses: Course[] = [
  { id: 1, title: "HTML Foundations", level: "Beginner", progress: 100 },
  { id: 2, title: "CSS Styling", level: "Beginner", progress: 65 },
  { id: 3, title: "JavaScript Fundamentals", level: "Beginner", progress: 25 },
];