export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
};

export type Member = {
  id: number;
  name: string;
  role: string;
  skills: string[];
};

export type Course = {
  id: number;
  title: string;
  level: string;
  progress?: number;
};