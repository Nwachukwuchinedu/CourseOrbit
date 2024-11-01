interface CourseCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  duration: string;
}

export function CourseCard({ title, description, price, image, duration }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="h-48 w-full object-cover transition-transform hover:scale-105 duration-300" 
        />
        <span className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {duration}
        </span>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-1">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm sm:text-base line-clamp-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg sm:text-xl text-indigo-600 font-bold">${price}</span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}