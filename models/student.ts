export interface Student {
    id: string;
    name: string;
    age: number;
    department: string;
  }
  
  let students: Student[] = [];
  
  export const getStudents = () => students;
  export const addStudent = (student: Student) => students.push(student);
  export const updateStudent = (id: string, updatedStudent: Student) => {
    students = students.map((s) => (s.id === id ? updatedStudent : s));
  };
  export const deleteStudent = (id: string) => {
    students = students.filter((s) => s.id !== id);
  };
  export const findStudent = (id: string) => students.find((s) => s.id === id);
  