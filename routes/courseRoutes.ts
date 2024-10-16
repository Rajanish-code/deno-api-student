import { Router } from "../deps.ts";
import { getCourses, addCourse, updateCourse, deleteCourse, findCourse } from "../models/course.ts";

const router = new Router();

router.get("/courses", (context) => {
  context.response.body = getCourses();
});

router.post("/courses", async (context) => {
  const body = await context.request.body().value;
  const newCourse = { id: crypto.randomUUID(), ...body };
  addCourse(newCourse);
  context.response.body = { message: "Course added", course: newCourse };
});

router.put("/courses/:id", async (context) => {
  const id = context.params.id!;
  const existingCourse = findCourse(id);
  if (!existingCourse) {
    context.response.status = 404;
    context.response.body = { error: "Course not found" };
    return;
  }
  const body = await context.request.body().value;
  updateCourse(id, { id, ...body });
  context.response.body = { message: "Course updated", course: { id, ...body } };
});

router.delete("/courses/:id", (context) => {
  const id = context.params.id!;
  deleteCourse(id);
  context.response.body = { message: "Course deleted" };
});

export default router;
