import { Project, Review } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "The Epsom Retreat",
    description: "Transformed an overgrown rear garden into a modern entertaining space with decking and pergola.",
    before: "https://res.cloudinary.com/duiaovgje/image/upload/t_Landscape/Before_Image_wwyny0",
    after: "https://res.cloudinary.com/duiaovgje/image/upload/t_Landscape/After_Image_w0gedw"
  },
  {
    id: 2,
    title: "Surrey Family Garden",
    description: "Created a safe, beautiful environment with a new lawn, planting borders and a stunning water feature.",
    before: "https://res.cloudinary.com/duiaovgje/image/upload/t_Landscape/Before_Image_wwyny0",
    after: "https://res.cloudinary.com/duiaovgje/image/upload/t_Landscape/After_Image_w0gedw"
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Margaret W.",
    location: "Epsom",
    text: "Ashwell Landscapes transformed our tired garden into a stunning outdoor living space. The design was sympathetic to our property and the build quality is superb. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "James T.",
    location: "Leatherhead",
    text: "Professional from start to finish. The team were courteous, tidy and the result exceeded our expectations. Our new patio and planting look gorgeous.",
    rating: 5
  },
  {
    id: 3,
    name: "Helen P.",
    location: "Reigate",
    text: "We've used Ashwell for both a garden redesign and ongoing maintenance. Their attention to detail and horticultural knowledge is unmatched in the area.",
    rating: 5
  },
];
