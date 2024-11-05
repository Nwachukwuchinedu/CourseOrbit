import { useEffect, useState } from "react";
import { CourseCard } from "../components/CourseCard";

interface Course {
  id: string;
  course_title: string;
  img: string;
  rate_text: string;
  link: string;
  hashTag: string;
}

// Placeholder component
const CourseCardPlaceholder = () => (
  <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
    <div className="h-40 bg-gray-300 rounded"></div>
    <div className="mt-4">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);

export function Home() {
  const [courses, setCourses] = useState<Course[]>([]); // Explicitly typed array of courses
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Typing error as string or null

  useEffect(() => {
    const fetchCourses = async () => {
      const url: string | undefined = import.meta.env.VITE_API_URL;

      if (!url) {
        throw new Error("VITE_API_URL is not defined in the .env file");
      }

      try {
        const response = await fetch(url); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCourses(data.courses as Course[]); // Ensure it's casted to Course[]
      } catch (error: any) {
        // Type error as 'any' for now
        setError(error.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Render multiple placeholders */}
            {Array.from({ length: 6 }).map((_, index) => (
              <CourseCardPlaceholder key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching courses: {error}</div>;
  }

  if (courses.length === 0) {
    return <div>No courses available at the moment.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Learn Swift Development
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Master iOS development with our comprehensive courses
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} /> // Explicitly typed course object
          ))}
        </div>
      </div>
    </div>
  );
}
