export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  duration: string;
}

export interface User {
  name: string;
  email: string;
  balance: number;
  enrolledCourses: string[];
}