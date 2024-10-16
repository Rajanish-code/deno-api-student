import { Application } from "./deps.ts";
import studentRouter from "./routes/studentRoutes.ts";
import courseRouter from "./routes/courseRoutes.ts";
import enrollmentRouter from "./routes/enrollmentRoutes.ts";
import { oakCors } from "./deps.ts"; 

const app = new Application();

// CORS middleware
app.use(
    oakCors({
        origin: "*", // Allow all origins
        methods: ["GET", "POST", "PATCH", "DELETE"],
        allowedHeaders: ["Authorization", "Content-Type"],
        credentials: true, // Allow cookies and credentials
    }),
);

// Register routers
app.use(studentRouter.routes());
app.use(studentRouter.allowedMethods());

app.use(courseRouter.routes());
app.use(courseRouter.allowedMethods());

app.use(enrollmentRouter.routes());
app.use(enrollmentRouter.allowedMethods());

// Get the port from the environment variable or use 8000 as the default
const port = Number(Deno.env.get("PORT")) || 8000;

console.log(`Server is running on http://localhost:${port}`);
await app.listen({ port });
