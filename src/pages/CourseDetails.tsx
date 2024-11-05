import { useParams } from "react-router-dom";
import {
  Clock,
  Users,
  Award,
  Globe,
  BarChart,
  Subtitles,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

interface CardBodyContent {
  card_h5: string;
}

interface Course {
  course_title: string;
  h5: string;
  img: string;
  udmy_link: string;
  card_body_contents: CardBodyContent[];
  who_is_this_course_for: { li: string }[];
  what_you_will_learn: { li: string }[];
  requirement_contents: { li: string }[];
  description: string;
  // Add other properties that your course may have
}

export function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null); // Ensure you're typing correctly
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url: string | undefined = process.env.REACT_APP_API_URL;

    if (!url) {
      throw new Error("REACT_APP_API_URL_1 is not defined in the .env file");
    }

    const fetchCourse = async () => {
      try {
        const response = await fetch(`${url}/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCourse(data);
      } catch (error: any) {
        setError(error.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-64 sm:h-80 animate-pulse bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <h1 className="text-2xl sm:text-4xl font-bold text-white">Loading...</h1> */}
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 text-gray-600 bg-gray-300 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 bg-gray-200 w-32 h-4 animate-pulse"></span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center animate-pulse"></div>
                <div>
                  <p className="text-sm text-gray-600 bg-gray-200 w-24 h-4 animate-pulse"></p>
                  <p className="font-medium bg-gray-200 w-32 h-4 animate-pulse"></p>
                </div>
              </div>
              <div className="space-y-8">
                {[
                  "What will you learn?",
                  "Requirements",
                  "Who is this course for?",
                  "Description",
                ].map((title, index) => (
                  <section key={index}>
                    <h2 className="text-xl font-semibold mb-4 bg-gray-200 w-48 h-6 animate-pulse"></h2>
                    <ul className="space-y-2">
                      {Array.from({ length: 3 }).map((_, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 animate-pulse"></span>
                          <span className="text-gray-600 bg-gray-200 w-40 h-4 animate-pulse"></span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Error: {error}</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Course not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-64 sm:h-80">
            <img
              src={course.img}
              alt={course.course_title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-2xl sm:text-4xl font-bold text-white text-center px-4">
                {course.course_title}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {course.card_body_contents[0]?.card_h5 || "No data available"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {course.card_body_contents[1]?.card_h5 || "No data available"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {course.card_body_contents[2]?.card_h5 || "No data available"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {course.card_body_contents[3]?.card_h5 || "No data available"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {course.card_body_contents[4]?.card_h5 || "No data available"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Subtitles className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {course.card_body_contents[5]?.card_h5 || "No data available"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Instructor</p>
                <p className="font-medium">
                  {course.card_body_contents[6]?.card_h5 || "No data available"}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  What will you learn?
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.what_you_will_learn.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2"></span>
                      <span className="text-gray-600">{point["li"]}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {course.requirement_contents.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2"></span>
                      <span className="text-gray-600">{req["li"]}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Who is this course for?
                </h2>
                <ul className="space-y-2">
                  {course.who_is_this_course_for.map((who, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2"></span>
                      <span className="text-gray-600">{who["li"]}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600">{course.description}</p>
              </section>
            </div>

            <a
              href={course.udmy_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
