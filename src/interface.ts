export interface className {
  className: string;
}
export interface badgeInterface {
  icon?: React.ReactElement;
  title: string;
  active: boolean;
  className?: string;
}

export interface experienceCardInterface {
  type: 'education' | 'job';
  title: string;
  location: string;
  place: string;
  duration: string;
  gpa?: string;
  duties: string[];
}

export interface sectionHeadingInterface {
  sectionNumber: string;
  sectionHeading: string;
}

export interface carouselInterface {
  height: string;
  reverse: boolean;
  slider: 'vertical' | 'horizontal';
  width: string;
}

export interface skillSetInterface {
  items: string[];
  title: string;
  reverse: boolean;
  width: string;
}

export interface projectInterface {
  title: string;
  content: string;
  skills: string[];
  featured?: boolean;
  live?: string;
  githubLink: string;
}

export interface projectCardInterface {
  project: projectInterface;
}
