import { useState, useEffect } from 'react';

interface Course {
  id: number;
  name: string;
}

function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses([
      { id: 1, name: 'React Basics' },
      { id: 2, name: 'Vite + React' },
      { id: 3, name: 'Git & GitHub' }
    ]);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Available Courses</h2>
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
