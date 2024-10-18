# Task Management System

A full-stack task management system designed to streamline task creation, assignment, and tracking for teams. The system allows users to create tasks, assign them to team members, set deadlines, and track progress. This project is built with a modern tech stack, including **.NET 6** for the backend, **Angular** for the frontend, and **JWT** for authentication.

## Features
- 📝 **Create and Manage Tasks**: Users can create new tasks, assign them to team members, and set deadlines.
- 🔐 **JWT Authentication**: Secure authentication with JSON Web Tokens (JWT).
- 📊 **Task Status Tracking**: Track the status of tasks (e.g., To Do, In Progress, Completed).
- 🗂️ **Project-based Task Grouping**: Group tasks under specific projects.
- 🖼️ **Responsive UI**: Optimized for both desktop and mobile views using Angular Material.
- 🔔 **Notifications**: Alerts for task deadlines and updates.

## Tech Stack
- **Frontend**: Angular 12, Angular Material, TypeScript, HTML5, CSS3
- **Backend**: .NET 6, ASP.NET Core Web API
- **Authentication**: JSON Web Token (JWT)
- **Database**: SQL Server
- **DevOps**: Docker, Kubernetes (optional for deployment)
- **Testing**: Jasmine, NUnit

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed on your system:
- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Installation Steps

#### Backend (API) Setup:
  1. Clone the repository:
     ```bash
     git clone https://github.com/your-username/task-management-system.git
     cd task-management-system/api
  2. Restore .NET dependencies:
     dotnet restore
  3. Update the database connection string in appsettings.json:
     "ConnectionStrings": {
        "DefaultConnection": "Server=your-server;Database=TaskManagementDb;User Id=your-user;Password=your-password;"
      }
  5. Apply database migrations:
     dotnet ef database update
  7. Run the backend:
     dotnet run

#### Frontend (Angular) Setup:
  1. Navigate to the Angular frontend:
     cd ../client

  3. Install npm dependencies:
     npm install

  5. Run the frontend:
     ng serve
     Open http://localhost:4200 in your browser to view the app.

## Usage
1. **Login/Register**: Users can sign up and log in using their credentials.
2. **Create a Task**: Navigate to the "Create Task" section, provide task details (title, description, priority, due date), and assign it to a team member.
3. **Track Progress**: View tasks in different states like "To Do", "In Progress", and "Completed".
4. **Task History**: Track task changes over time, including who updated the task and what changes were made.
5. **Notification System**: Users receive notifications when they are assigned tasks or when deadlines approach.

## Project Structure
```bash
├── api/                # Backend - ASP.NET Core Web API
│   ├── Controllers/     # API Controllers
│   ├── Models/          # Entity models for database
│   ├── Services/        # Business logic
│   ├── Repositories/    # Data access layer
│   └── Program.cs       # Application startup
│
├── client/              # Frontend - Angular
│   ├── src/
│       ├── app/         # Angular components and services
│       ├── assets/      # Images and static resources
│       └── styles.css   # Global styles
└── README.md            # This README file

## API Endpoints
- **POST /api/auth/login**: User login
- **POST /api/auth/register**: User registration
- **GET /api/tasks**: Get all tasks
- **POST /api/tasks**: Create a new task
- **PUT /api/tasks/{id}**: Update a task
- **DELETE /api/tasks/{id}**: Delete a task

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
