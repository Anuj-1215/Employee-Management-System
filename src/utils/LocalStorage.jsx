const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@example.com",
    password: "123",

    activeL1: 3,
    newTaskL1: 2,
    completedL1: 1,
    failedL1: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare monthly report",
        taskDescription: "Prepare and finalize the monthly performance report.",
        taskDate: "2026-08-26",
        category: "Reporting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend the weekly team meeting and discuss project progress.",
        taskDate: "2026-08-27",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update customer records",
        taskDescription: "Review and update customer information in the database.",
        taskDate: "2026-08-24",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix login issue",
        taskDescription: "Investigate and resolve the reported login problem.",
        taskDate: "2026-08-23",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review project requirements",
        taskDescription: "Review the latest project requirements and provide feedback.",
        taskDate: "2026-08-28",
        category: "Planning"
      }
    ]
  },

  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@example.com",
    password: "123",

    activeL1: 2,
    newTaskL1: 1,
    completedL1: 2,
    failedL1: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design dashboard",
        taskDescription: "Create the initial design for the employee dashboard.",
        taskDate: "2026-08-26",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Update the homepage content and improve its layout.",
        taskDate: "2026-08-27",
        category: "Web Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create wireframes",
        taskDescription: "Create wireframes for the new application screens.",
        taskDate: "2026-08-22",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix responsive layout",
        taskDescription: "Resolve responsive layout issues on mobile devices.",
        taskDate: "2026-08-21",
        category: "Frontend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare design presentation",
        taskDescription: "Prepare a presentation explaining the latest UI design.",
        taskDate: "2026-08-29",
        category: "Presentation"
      }
    ]
  },

  {
    id: 3,
    name: "Rohan Gupta",
    email: "employee3@example.com",
    password: "123",

    activeL1: 4,
    newTaskL1: 3,
    completedL1: 1,
    failedL1: 0,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test new feature",
        taskDescription: "Perform functional testing of the newly developed feature.",
        taskDate: "2026-08-26",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write test cases",
        taskDescription: "Create test cases for the authentication module.",
        taskDate: "2026-08-27",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Run regression tests",
        taskDescription: "Run regression tests on the latest application build.",
        taskDate: "2026-08-23",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Verify payment flow",
        taskDescription: "Verify the complete payment process and report any issues.",
        taskDate: "2026-08-20",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare bug report",
        taskDescription: "Document recently discovered bugs with reproduction steps.",
        taskDate: "2026-08-28",
        category: "Bug Tracking"
      }
    ]
  },

  {
    id: 4,
    name: "Sneha Patel",
    email: "employee4@example.com",
    password: "123",

    activeL1: 1,
    newTaskL1: 3,
    completedL1: 2,
    failedL1: 2,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database cleanup",
        taskDescription: "Remove duplicate and outdated records from the database.",
        taskDate: "2026-08-26",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Backup database",
        taskDescription: "Create a complete backup of the production database.",
        taskDate: "2026-08-27",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize queries",
        taskDescription: "Optimize slow database queries to improve application performance.",
        taskDate: "2026-08-24",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Restore test database",
        taskDescription: "Restore the test database from the latest backup.",
        taskDate: "2026-08-22",
        category: "Database"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create database documentation",
        taskDescription: "Document the database structure and important tables.",
        taskDate: "2026-08-30",
        category: "Documentation"
      }
    ]
  },

  {
    id: 5,
    name: "Vikram Singh",
    email: "employee5@example.com",
    password: "123",

    activeL1: 5,
    newTaskL1: 1,
    completedL1: 3,
    failedL1: 2,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client follow-up",
        taskDescription: "Contact the client and follow up regarding the current project.",
        taskDate: "2026-08-26",
        category: "Communication"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare project proposal",
        taskDescription: "Prepare a detailed proposal for the upcoming client project.",
        taskDate: "2026-08-28",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Send project update",
        taskDescription: "Send the latest project status update to the client.",
        taskDate: "2026-08-24",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Schedule client meeting",
        taskDescription: "Schedule a meeting with the client to discuss project requirements.",
        taskDate: "2026-08-23",
        category: "Meeting"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare project presentation",
        taskDescription: "Create slides for the upcoming project presentation.",
        taskDate: "2026-08-29",
        category: "Presentation"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "admin@me.com",
    password: "123"
  }
];
export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))


    return {employees, admin}
}