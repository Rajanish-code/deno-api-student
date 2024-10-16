This project demonstrates how to build a simple Student API using Deno. It includes CRUD (Create, Read, Update, Delete) operations for student data.

Prerequisites


Deno installed (v1.34.0 or later)
Basic knowledge of JavaScript/TypeScript


Getting Started
1. Install Deno
To install Deno, follow the official Deno installation guide.




For example, on Windows, use PowerShell:


bash
Copy code
iwr https://deno.land/install.ps1 -useb | iex
On macOS or Linux, use the following:




bash
Copy code
curl -fsSL https://deno.land/install.sh | sh
Verify the installation:

bash
Copy code
deno --version
2. Clone the Repository
Clone the repository from GitHub:

bash
Copy code
git clone https://github.com/Rajanish-code/deno-api-student.git
Navigate into the project directory:




bash
Copy code
cd deno-api-student
3. Run the Student API
To start the server, use the following command:

bash
Copy code
deno run --allow-net --allow-read app.ts
This will allow Deno to access the network and read files as needed. The server will run on http://localhost:8000.





    
6. Permissions
Deno's permission model ensures that the API doesn't have access to anything it doesn't explicitly request. We use the following permissions:

--allow-net: Allows the API to listen to network requests.
--allow-read: Allows the API to read student data from files.




7. Further Reading
Deno Documentation
Deno APIs
