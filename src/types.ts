export interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  liveLink?: string;
  technologies: string[];
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
