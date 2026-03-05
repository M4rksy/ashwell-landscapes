export interface Project {
  id: number;
  title: string;
  description: string;
  before: string;
  after: string;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}
