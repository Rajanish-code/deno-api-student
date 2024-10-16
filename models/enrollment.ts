interface Enrollment {
  studentId: string;
  courseId: string;
}

let enrollments: Enrollment[] = [];

export const enrollStudent = (studentId: string, courseId: string) => {
  enrollments.push({ studentId, courseId });
};

export const getEnrollments = () => enrollments.filter(e => e);
export const findEnrollment = (studentId: string) =>
  enrollments.filter((e) => e.studentId === studentId);
