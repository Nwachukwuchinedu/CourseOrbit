import { CourseCard } from '../components/CourseCard';

const courses = [
  {
    id: '1',
    title: 'SwiftUI Fundamentals',
    description: 'Master the basics of SwiftUI and build beautiful iOS apps',
    price: 99,
    image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1000',
    duration: '6 weeks'
  },
  {
    id: '2',
    title: 'Advanced Swift Programming',
    description: 'Deep dive into advanced Swift concepts and patterns',
    price: 149,
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000',
    duration: '8 weeks'
  },
  {
    id: '3',
    title: 'iOS App Development',
    description: 'Build production-ready iOS applications from scratch',
    price: 199,
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=1000',
    duration: '12 weeks'
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Learn Swift Development</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Master iOS development with our comprehensive courses</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}