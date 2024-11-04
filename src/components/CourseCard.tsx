import { Link } from "react-router-dom";

interface CourseCardProps {
  course_title: string;
  img: string;
  rate_text: string;
  link: string;
  hashTag: string;
}

// function generateCourseLink(title: string) {
//   // Convert title to lower case and replace spaces with hyphens
//   return title.toLowerCase().replace(/\s+/g, '-');
// }

export function CourseCard({
  course_title,
  img,
  rate_text,
  link,
  hashTag,
}: CourseCardProps) {
  //  const courseLink = generateCourseLink(title); // Generate the course link

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={img}
          alt={course_title}
          className="h-48 w-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <span className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {rate_text}
        </span>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-1">
          {course_title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm sm:text-base line-clamp-2">
          {hashTag}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg sm:text-xl text-indigo-600 font-bold">
            no2
          </span>
          <Link
            to={link}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
