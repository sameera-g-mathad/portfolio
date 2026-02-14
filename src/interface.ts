export interface className {
  className: string;
}

export interface badgeInterface {
  icon?: React.ReactElement;
  title: string;
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
