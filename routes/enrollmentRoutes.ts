import { Router } from "../deps.ts";
import { enrollStudent, getEnrollments, findEnrollment } from "../models/enrollment.ts";
import { findStudent } from "../models/student.ts";
import { findCourse } from "../models/course.ts";

const router = new Router();

router.post("/enrollments", async (context) => {
  const body = await context.request.body().value;
  const { studentId, courseId } = body;

  if (!findStudent(studentId) || !findCourse(courseId)) {
    context.response.status = 400;
    context.response.body = { error: "Invalid student or course ID" };
    return;
  }

  enrollStudent(studentId, courseId);
  context.response.body = { message: "Student enrolled in course" };
});

router.get("/enrollments", (context) => {
  context.response.body = getEnrollments();
});

router.get("/enrollments/:studentId", (context) => {
  const studentId = context.params.studentId!;
  context.response.body = findEnrollment(studentId);
});

export default router;
