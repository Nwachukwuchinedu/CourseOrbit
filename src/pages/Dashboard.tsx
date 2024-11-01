import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, BookOpen, Crown } from 'lucide-react';
import { courses } from '../data/courses';

const user = {
  name: 'John Doe',
  balance: 500,
  enrolledCourses: ['1', '2']
};

const plans = [
  { name: 'Basic', price: 9.99, features: ['Access to basic courses', 'Community support', 'Monthly webinars'] },
  { name: 'Pro', price: 19.99, features: ['Access to all courses', 'Priority support', 'Weekly live sessions', 'Course certificates'] },
  { name: 'Enterprise', price: 49.99, features: ['Everything in Pro', 'Personal mentor', '1-on-1 coaching', 'Custom learning path'] }
];

export function Dashboard() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg shrink-0">
                <Wallet className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Available Balance</h2>
                <p className="text-2xl sm:text-3xl font-bold text-indigo-600">${user.balance}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg shrink-0">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Enrolled Courses</h2>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">{user.enrolledCourses.length}</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">My Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {courses.filter(course => user.enrolledCourses.includes(course.id)).map((course) => (
            <div 
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="h-48 w-full object-cover transition-transform hover:scale-105 duration-300" 
                />
                <span className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {course.duration}
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-1">{course.title}</h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base line-clamp-2">{course.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg sm:text-xl text-indigo-600 font-bold">${course.price}</span>
                  <span className="text-sm text-gray-500">Enrolled</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Subscription Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`bg-white rounded-xl shadow-md p-4 sm:p-6 ${
                selectedPlan === plan.name ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold">{plan.name}</h3>
                <Crown className={`w-6 h-6 ${
                  plan.name === 'Enterprise' ? 'text-yellow-500' : 'text-gray-400'
                }`} />
              </div>
              <p className="text-2xl sm:text-3xl font-bold mb-4">
                ${plan.price}<span className="text-sm text-gray-500">/month</span>
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full shrink-0"></span>
                    <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPlan(plan.name)}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}