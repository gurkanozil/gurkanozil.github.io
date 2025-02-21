export interface Project {
  id: number;
  title: string;
  description: string;
  github?: string;
  liveLink?: string;
  technologies: string[];
  image?: string | null;
  resume?: string | null;
}

export interface SocialLink {
  href: string;
  icon: React.ReactElement;
}
