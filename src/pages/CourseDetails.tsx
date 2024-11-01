import { useParams } from 'react-router-dom';
import { Clock, Users, Award, Globe, BarChart, Subtitles, User } from 'lucide-react';
import { courses } from '../data/courses';

export function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

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
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-2xl sm:text-4xl font-bold text-white text-center px-4">{course.title}</h1>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">{course.lectures} lectures</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">{course.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {course.hasCertificate ? 'Certificate' : 'No certificate'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">{course.language}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">Level: {course.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <Subtitles className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {course.hasClosedCaptions ? 'Closed captions' : 'No closed captions'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Instructor</p>
                <p className="font-medium">{course.instructor}</p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">What will you learn?</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.learningPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2"></span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2"></span>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Who is this course for?</h2>
                <ul className="space-y-2">
                  {course.targetAudience.map((audience, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2"></span>
                      <span className="text-gray-600">{audience}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600">{course.fullDescription}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}