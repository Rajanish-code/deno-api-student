import { Router } from "../deps.ts";
import { getStudents, addStudent, updateStudent, deleteStudent, findStudent } from "../models/student.ts";

const router = new Router();

router.get("/students", (context) => {
  context.response.body = getStudents();
});

router.post("/students", async (context) => {
  const body = await context.request.body().value;
  const newStudent = { id: crypto.randomUUID(), ...body };
  addStudent(newStudent);
  context.response.body = { message: "Student added", student: newStudent };
});

router.put("/students/:id", async (context) => {
  const id = context.params.id!;
  const existingStudent = findStudent(id);
  if (!existingStudent) {
    context.response.status = 404;
    context.response.body = { error: "Student not found" };
    return;
  }
  const body = await context.request.body().value;
  updateStudent(id, { id, ...body });
  context.response.body = { message: "Student updated", student: { id, ...body } };
});

router.delete("/students/:id", (context) => {
  const id = context.params.id!;
  deleteStudent(id);
  context.response.body = { message: "Student deleted" };
});

export default router;
