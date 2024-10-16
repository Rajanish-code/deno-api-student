export interface Course {
    id: string;
    name: string;
    department: string;
  }
  
  let courses: Course[] = [];
  
  export const getCourses = () => courses;
  export const addCourse = (course: Course) => courses.push(course);
  export const updateCourse = (id: string, updatedCourse: Course) => {
    courses = courses.map((c) => (c.id === id ? updatedCourse : c));
  };
  export const deleteCourse = (id: string) => {
    courses = courses.filter((c) => c.id !== id);
  };
  export const findCourse = (id: string) => courses.find((c) => c.id === id);
  