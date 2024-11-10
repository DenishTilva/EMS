const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 3,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy new build",
        taskDescription: "Deploy the latest build to production",
        taskDate: "2024-10-09",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription: "Incorporate feedback from client meeting",
        taskDate: "2024-10-15",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "456",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Write test cases",
        taskDescription: "Create unit tests for new features",
        taskDate: "2024-10-11",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database backup",
        taskDescription: "Perform full backup of the database",
        taskDate: "2024-10-13",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update documentation",
        taskDescription: "Add new features to the user manual",
        taskDate: "2024-10-08",
        category: "Documentation",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "789",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize images",
        taskDescription: "Reduce image sizes for faster loading",
        taskDate: "2024-10-14",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Security audit",
        taskDescription: "Conduct a full security audit",
        taskDate: "2024-10-16",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Accessibility review",
        taskDescription: "Ensure site meets accessibility standards",
        taskDate: "2024-10-10",
        category: "Design",
      },
    ],
  },
  {
    id: 4,
    firstName: "Advait",
    email: "employee4@example.com",
    password: "1011",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Data migration",
        taskDescription: "Migrate data to the new database",
        taskDate: "2024-10-18",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "UI testing",
        taskDescription: "Run tests on the new user interface",
        taskDate: "2024-10-17",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prototype design",
        taskDescription: "Design prototype for client review",
        taskDate: "2024-10-19",
        category: "Design",
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () =>{
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))

  return{employees, admin}
}