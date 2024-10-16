import { Application } from "./deps.ts";
import studentRouter from "./routes/studentRoutes.ts";
import courseRouter from "./routes/courseRoutes.ts";
import enrollmentRouter from "./routes/enrollmentRoutes.ts";
import { oakCors } from "./deps.ts"; 
const app = new Application();


app.use(
    oakCors({
      origin: "*", // Allow all origins
      methods: ["GET", "POST", "PATCH", "DELETE"],
      allowedHeaders: ["Authorization", "Content-Type"],
      credentials: true, // Allow cookies and credentials
    }),
  );

app.use(studentRouter.routes());
app.use(studentRouter.allowedMethods());

app.use(courseRouter.routes());
app.use(courseRouter.allowedMethods());

app.use(enrollmentRouter.routes());
app.use(enrollmentRouter.allowedMethods());

console.log("Server is running on http://localhost:8000");
await app.listen({ port: 8000 });
