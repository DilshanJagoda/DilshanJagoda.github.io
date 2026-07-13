# e_class - Institution Edition

## Overview

e_class Institution Edition is a full-stack Student Information Management System designed for educational institutions to manage students, classes, grades, attendance, payments, and administrative workflows through a centralized digital platform.

The system was developed to simplify institutional operations by replacing manual record keeping with an organized software solution that improves efficiency, accuracy, and accessibility of student information.

The application supports multiple grades, multiple classes, and different user access levels, making it suitable for medium-to-large-sized educational institutions.

---

# Problem Statement

Educational institutions often manage large amounts of student-related information including:

- Student registrations
- Class allocations
- Attendance records
- Payment tracking
- Student reports

Managing these processes manually can lead to:

- Data inconsistencies
- Difficult record searching
- Increased administrative workload
- Higher risk of human errors

e_class was developed as a practical solution to centralize and simplify these processes.

---

# Main Features

## Student Management

The system provides centralized student management capabilities.

Features:

- Register students
- Maintain student information
- Assign students to classes
- Preserve historical student records
- Manage active and inactive students

---

## Grade and Class Management

The system supports dynamic management of the institution's academic structure.

Features:

- Create and manage grades
- Create multiple classes under grades
- Assign students to classes
- Transfer classes between grades
- Maintain academic progression without recreating student records

---

## Class Transfer System

The application allows administrators to transfer an entire class from one grade to another.

Example workflow:


Grade 10 - Class A

    |

Class Transfer

    |

Grade 11 - Class A


Benefits:

- Reduces manual data entry
- Simplifies yearly academic transitions
- Preserves existing student information
- Maintains class organization

---

## QR-Based Student Identification

Each student can receive a unique ID card containing a QR code.

The built-in QR scanner allows authorized users to quickly access student information.

Workflow:


Student ID Card

    |

QR Code Scan

    |

Student Identification

    |

Student Profile Displayed


Benefits:

- Faster student lookup
- Reduced manual searching
- Improved identification accuracy

---

## Attendance Management

The system provides class-based attendance management.

Features:

- Record student attendance
- Store attendance history
- Track attendance by class and date

---

## Payment Management

The payment module allows institutions to maintain student payment records.

Supported payment statuses:


PAID
NOT_PAID
FREE
HALF
ABSENT


Features:

- Monthly payment tracking
- Payment status management
- Class and grade based payment records

---

## Role-Based Access

The system supports multiple user access levels.

### Admin

Responsible for:

- Managing institutional data
- Accessing reports
- Managing student information

### Editor

Responsible for operational tasks such as:

- Updating attendance
- Recording payments
- Maintaining daily records

---

# System Architecture

The application follows a client-server architecture.


+----------------------+

| Flutter Application |

| |

| - Authentication |

| - User Interface |

| - QR Scanner |

+----------+-----------+

|
|
|

+----------v-----------+

| PHP API |

| Backend |

| |

| - Business Logic |

| - Data Processing |

+----------+-----------+

|
|
|

+----------v-----------+

| MySQL Database |

| |

| - Students |

| - Classes |

| - Attendance |

| - Payments |

+----------------------+

More details:

See `Architecture.md`

---

# Technologies Used

## Frontend

- Flutter
- Dart

## Backend

- PHP
- REST API

## Database

- MySQL

## Development Environment

- XAMPP
- Local Server Environment

---

# Database Design

The database follows a relational structure designed around:

- Students
- Grades
- Classes
- Attendance
- Payments
- Authentication

Important database concepts implemented:

- Primary keys
- Composite primary keys
- Many-to-many relationships
- Data retention through soft deletion

More details:

See `Database_Design.md`

---

# Deployment

The system was designed with flexible deployment in mind.

The backend connection can be configured, allowing migration between:

- Local environments
- Remote servers
- Future cloud infrastructure

More details:

See `Deployment.md`

---

# Project Highlights

## Real-World Application Design

The system was designed based on practical institutional requirements rather than being only a demonstration project. and it is currently being used in some institutions but not commercially.

---

## Data Management Strategy

The application preserves historical student records by using status-based deactivation instead of permanent deletion.

---

## Scalable Database Architecture

The relational database design allows expansion with additional grades, classes, and students.

---

# Future Improvements

Possible enhancements:

- Cloud deployment
- Automated backups
- Parent portal
- Online payment integration
- Notification system
- Advanced analytics dashboard
- Dedicated teacher accounts

---

# Developer

## Dilshan Jagoda

Independent Developer

Areas of Interest:

- Software Engineering
- Cybersecurity
- Computer Systems
- Artificial Intelligence

___