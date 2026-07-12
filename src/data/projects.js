const projects = [
  {
    id: "institution",
    github: "https://github.com/DilshanJagoda/E_Class_Institution_Edition",
    title: "e_class Institution Edition",
    deployed: "Actively deployed and in real-world use at educational institutions — managing students, attendance, payments, and administration.",
    short:
      "A full-stack student management platform for educational institutions with QR-based identification, attendance tracking, and payment management.",
    tech: "Flutter, PHP, MySQL",
    purpose:
      "To provide an all-in-one system for managing students, classes, attendance, payments, and administrative tasks — replacing manual record keeping with a centralized digital platform.",
    problem:
      "Educational institutions often manage large amounts of student data manually, leading to data inconsistencies, difficult record searching, increased workload, and higher risk of human errors.",
    features: [
      "Student registration and management with active/inactive status",
      "Multi-grade and multi-class support",
      "Attendance tracking with history per class and date",
      "Payment management system (PAID, NOT_PAID, FREE, HALF, ABSENT)",
      "QR-code based student identification and ID card generation",
      "Built-in QR scanner for instant student lookup",
      "Class transfer between grades for academic progression",
      "Administrative management system with role-based access (Admin, Editor)",
      "Report generation for attendance and payments",
      "Currently deployed and in active real-world use at educational institutions",
    ],
    designDecision:
      "Instead of deleting inactive students, the system keeps historical records using an active/inactive status system — preserving institutional data while keeping inactive users hidden from normal operations.",
    architecture: [
      {
        layer: "Flutter Application",
        desc: "Cross-platform mobile UI built with Dart. Handles authentication, user interface, QR scanning, and all user interaction.",
      },
      {
        layer: "PHP REST API",
        desc: "Backend API responsible for business logic, request validation, database communication, and response handling.",
      },
      {
        layer: "MySQL Database",
        desc: "Relational database with seven main tables: students, grades, classes, ava_class (student-class relationships), attendance, payments, and passwords.",
      },
    ],
    dataFlow:
      "Admin enters information → Flutter sends request → PHP API validates → DB stores → Response returned",
    databaseTables: [
      "students — student_id, name, phone, ava (active/inactive status)",
      "grades — grade_id, grade_name",
      "classes — class_id, class_name, grade_id (FK → grades)",
      "ava_class — student_id (FK), class_id (FK) — composite PK",
      "attendance — id (FK→students), date, status, class_id — composite PK (id, date, class_id)",
      "payments — student_id, status, date, month, class_id, grade_id — composite PK (student_id, class_id, month)",
      "passwords — id, password — with admin and editor roles",
    ],
    auth: "Role-based access with Admin (full management) and Editor (operational tasks) accounts, password-protected login.",
    security: [
      "User authentication restricts unauthorized access to student data",
      "Backend validates all incoming requests before database operations",
      "Password-protected application access",
      "Database access control measures",
    ],
    deployment:
      "XAMPP-based local deployment with Apache + PHP + MySQL. Configurable backend URL allows migration to remote servers or cloud infrastructure without modifying application logic.",
    futureImprovements: [
      "Cloud deployment for easier accessibility and scalability",
      "Automated backup system for data loss prevention",
      "Notification system for payment reminders and updates",
      "Advanced analytics dashboards for attendance and payment trends",
      "Multi-device synchronization for collaborative access",
      "Parent portal for student progress monitoring",
    ],
    screenshotDirs: {
      general: [
        { file: "login.png", caption: "Login Screen" },
      ],
      admin: [
        { file: "admin/admin_control_panel.png", caption: "Admin Control Panel" },
        { file: "admin/active_stuent_page_admin.png", caption: "Active Students Overview" },
        { file: "admin/show_active_stuents_class_admin.png", caption: "Students by Class" },
        { file: "admin/search.png", caption: "Student Search" },
        { file: "admin/search_result.png", caption: "Search Results" },
        { file: "admin/check_student_admin.png", caption: "Student Details" },
        { file: "admin/ID.png", caption: "Student ID Card" },
        { file: "admin/attendance.png", caption: "Attendance Management" },
        { file: "admin/attendance_class.png", caption: "Class Attendance View" },
        { file: "admin/attendance_reportt.png", caption: "Attendance Report" },
        { file: "admin/payments_admin.png", caption: "Payment Management" },
        { file: "admin/payment_report.png", caption: "Payment Report" },
        { file: "admin/payments_pdf.png", caption: "Payment PDF Export" },
        { file: "admin/report_main.png", caption: "Main Reports Dashboard" },
        { file: "admin/unpaid.png", caption: "Unpaid Students" },
        { file: "admin/security.png", caption: "Security Settings" },
        { file: "admin/edit_classes.png", caption: "Edit Classes" },
        { file: "admin/editgrades.png", caption: "Edit Grades" },
        { file: "admin/editgradesrename.png", caption: "Rename Grade" },
        { file: "admin/class_edit_grade.png", caption: "Class Grade Transfer" },
      ],
      editor: [
        { file: "editor/add_student.png", caption: "Add New Student" },
        { file: "editor/edit.png", caption: "Edit Student Info" },
        { file: "editor/ID.png", caption: "Student ID Card (Editor)" },
        { file: "editor/attendance_student.png", caption: "Student Attendance" },
        { file: "editor/qr_scanner.png", caption: "QR Scanner" },
        { file: "editor/student_results.png", caption: "Student Results" },
      ],
    },
    thumbnail: "login.png",
  },
  {
    id: "teacher",
    github: "https://github.com/DilshanJagoda/E_class_Teachers_Edition",
    title: "e_class Teacher Edition",
    deployed: "Actively deployed and in real-world use by teachers — managing student records, attendance, and payments.",
    short:
      "A student management app for individual teachers to manage students across multiple grades and locations without requiring institutional setup.",
    tech: "Flutter, PHP, MySQL",
    purpose:
      "To allow teachers to manage their own classes independently — handling student records, attendance, payments, and reports without a full institutional setup.",
    problem:
      "Individual teachers managing students from different grades and locations often rely on manual paperwork, leading to inaccurate records, difficult tracking, and disorganized reports.",
    features: [
      "Student records management with group organization",
      "Attendance tracking and history",
      "Payment tracking with status management",
      "Class and grade management",
      "Report generation for student data",
      "Secure user authentication",
      "Configurable backend for local or remote deployment",
      "Simple workflows designed for limited technical experience",
      "Currently deployed and in active real-world use by teachers",
    ],
    designDecision: "",
    architecture: [
      {
        layer: "Flutter Application",
        desc: "Mobile UI handling user interaction, data presentation, and API communication.",
      },
      {
        layer: "PHP REST API",
        desc: "Backend processing requests, validating data, and managing database interactions.",
      },
      {
        layer: "MySQL Database",
        desc: "Relational storage for students, classes, grades, payments, and authentication.",
      },
    ],
    dataFlow:
      "Teacher enters student details → Flutter sends insert_student request → PHP validates (studentID→INT, name→Varchar, PhoneNum→INT) → Database stores → Response returned",
    databaseTables: [
      "students — student_id (PK), name, phone, class_id",
      "grades — grade_id (PK), grade_name",
      "classes — class_id (PK), class_name, grade_id",
      "student_payments — month_id, student_id, status, class_id, week (composite PK)",
      "passwords — id (PK), password — admin and editor roles",
    ],
    auth: "Password-based authentication with admin and editor roles for controlled access.",
    security: [
      "User login and credential verification",
      "Protected application access",
      "Backend data validation before processing",
    ],
    deployment:
      "Supports XAMPP local deployment and remote servers (e.g., awardspace.net free hosting). Configurable API endpoint allows easy migration between environments.",
    futureImprovements: [
      "Automated backup systems",
      "Notification system for payment and attendance updates",
      "Advanced analytics and reporting",
    ],
    screenshotDirs: {
      app: [
        { file: "img.png", caption: "App Home Screen" },
        { file: "img_1.png", caption: "Student List" },
        { file: "img_2.png", caption: "Student Details" },
        { file: "img_3.png", caption: "Add Student" },
        { file: "img_4.png", caption: "Attendance View" },
        { file: "img_5.png", caption: "Payment Status" },
        { file: "img_6.png", caption: "Reports" },
        { file: "img_7.png", caption: "Class Selection" },
        { file: "img_8.png", caption: "Student Search" },
        { file: "img_9.png", caption: "Grade Management" },
        { file: "img_10.png", caption: "Editor Dashboard" },
        { file: "img_11.png", caption: "Payment History" },
        { file: "img_12.png", caption: "Attendance Report" },
        { file: "img_13.png", caption: "Student Profile" },
        { file: "img_14.png", caption: "Class Roster" },
        { file: "img_15.png", caption: "Admin Panel" },
        { file: "img_16.png", caption: "Settings" },
      ],
      web: [
        { file: "web_img.png", caption: "Web Interface" },
      ],
    },
    thumbnail: "img.png",
  },
  {
    id: "os",
    github: "https://github.com/DilshanJagoda/JagodaOS",
    title: "JagodaOS",
    short:
      "A custom 32-bit x86 hobby operating system built from scratch — boots to a text terminal with a shell and PS/2 keyboard support.",
    tech: "Assembly, C, QEMU",
    purpose:
      "To understand how operating systems work internally — from the boot process and protected mode to hardware interaction and memory management.",
    problem:
      "Modern software development often abstracts away low-level system details. Building an OS from scratch provides firsthand understanding of computer architecture, memory interaction, and hardware communication.",
    features: [
      "32-bit protected-mode kernel",
      "VGA text-mode output for terminal display",
      "PS/2 keyboard input driver",
      "Shell prompt with editable command line",
      "Commands: help, info, mkdir/create, rmdir/delete, ls, clear",
      "In-memory folder structure (volatile across reboots)",
      "Custom bootloader and boot process",
      "Cross-compiled with i686-elf toolchain",
    ],
    designDecision:
      "Folders are stored in memory rather than on disk, making them volatile across reboots. This simplifies the initial implementation while providing a foundation for future persistent storage support.",
    architecture: [
      {
        layer: "Bootloader",
        desc: "Custom boot code that initializes the system and transitions to protected mode before handing control to the kernel.",
      },
      {
        layer: "Kernel (C + Assembly)",
        desc: "Core kernel handling terminal output, keyboard input, shell command parsing, and memory management. Built with i686-elf-gcc cross-compiler.",
      },
      {
        layer: "Shell",
        desc: "Command-line interface implemented in C within the kernel, supporting file system operations and system information commands.",
      },
    ],
    dataFlow:
      "System powers on → BIOS loads bootloader → Bootloader enters 32-bit protected mode → Kernel initializes VGA and PS/2 → Shell prompt appears → User enters commands → Kernel processes and responds",
    databaseTables: [],
    auth: "No authentication — designed as a single-user hobby OS with direct terminal access.",
    security: [],
    deployment:
      "Built with make, run via QEMU emulator: make && make run. Requires i686-elf-gcc, i686-elf-as, i686-elf-ld, grub-mkrescue, xorriso, and qemu-system-i386.",
    futureImprovements: [
      "Persistent storage support (disk/FAT driver)",
      "Additional shell commands and scripting",
      "Memory management and paging",
      "Multi-tasking and process scheduling",
      "Graphical user interface",
    ],
    screenshotDirs: {
      system: [
        { file: "Screenshot 2026-07-12 214150.png", caption: "JagodaOS Boot Screen" },
        { file: "system details.png", caption: "System Details & Terminal" },
      ],
    },
    thumbnail: "Screenshot 2026-07-12 214150.png",
  },
  {
    id: "recovery",
    github: "https://github.com/DilshanJagoda/Mysql-recovery-tool-for-E-Class",
    title: "InnoDB Recovery Suite",
    short:
      "A Python/Tkinter desktop application for best-effort recovery from corrupted MySQL InnoDB .ibd tablespace files.",
    tech: "Python, MySQL, Tkinter",
    purpose:
      "Created after experiencing real MySQL database corruption during development — designed to automatically restore database functionality by recovering data from .ibd files.",
    problem:
      "Unexpected database shutdowns can corrupt InnoDB tablespace files, making MySQL unable to start. Without proper recovery tools, valuable data can be permanently lost.",
    features: [
      "Scans .ibd files page by page (16KB InnoDB pages) identifying index pages",
      "Gracefully skips damaged or unreadable pages",
      "Reconstructs schema from matching CREATE TABLE .sql files",
      "Uses .frm files as fallback column-name hints",
      "Infers generic columns when no schema file is available",
      "Follows active InnoDB record chains for reliable recovery",
      "Falls back to printable row-like data when chains are unrecoverable",
      "Exports recovered data as SQL or CSV",
      "Database-folder recovery mode for batch recovery",
      "Detailed logging and audit trail for uncertain rows",
      "Desktop GUI with three tabs: Select Source, Preview Data, Export",
    ],
    designDecision:
      "The tool prioritizes active record chains over raw page scanning to avoid mixing deleted/free-list fragments into the export. When chains are unrecoverable, it falls back to parsing printable row data with numeric-biased integer decoding for ID-like columns.",
    architecture: [
      {
        layer: "GUI (Tkinter)",
        desc: "Desktop interface built with Python Tkinter — three-tab layout for source selection, data preview, and export operations.",
      },
      {
        layer: "Recovery Engine (Python)",
        desc: "Core modules for tablespace reading, schema reconstruction, row extraction, and export formatting.",
      },
      {
        layer: "File System",
        desc: "Reads .ibd, .sql, and .frm files from the filesystem. Writes recovered data to recovered/ folder and logs to logs/ folder.",
      },
    ],
    dataFlow:
      "Select source folder/.ibd files → Place matching .sql/.frm alongside → Click Recover → Engine scans pages → Reconstructs schema → Extracts rows → Preview → Export as SQL or CSV → Import via phpMyAdmin",
    databaseTables: [],
    auth: "No authentication — runs as a local desktop tool.",
    security: [],
    deployment:
      "Python 3.10+ with Tkinter. Run: python main.py. Supports command-line database folder recovery: python recover_database.py <folder_path>. Exports to recovered/ and logs/ directories.",
    futureImprovements: [
      "Support for encrypted/compressed tablespaces",
      "Improved schema reconstruction with ML-based column type inference",
      "Parallel processing for faster multi-file recovery",
      "Integration with live MySQL servers for direct restore",
    ],
    screenshotDirs: {
      recovery: [
        { file: "application.png", caption: "Main Application Window" },
        { file: "database with a missing mapping file.png", caption: "Database With Missing Mapping" },
        { file: "importing ibd file from the database.png", caption: "Importing .ibd Files" },
        { file: "export data to the recovered folder.png", caption: "Exporting to Recovered Folder" },
        { file: "sql file.png", caption: "Generated SQL Output" },
        { file: "recovered sql file.png", caption: "Recovered SQL Data" },
        { file: "recovered data.png", caption: "Preview of Recovered Data" },
      ],
    },
    thumbnail: "application.png",
  },
];

export default projects;
