import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700">
      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
      <span>{time.toLocaleTimeString()}</span>
    </div>
  );
}