# e_class Teacher Edition - Architecture

## Overview

e_class follows a client-server architecture where the Flutter application communicates with a backend API responsible for processing requests and interacting with the database.

---

# High-Level Architecture
+----------------------+

| Flutter Application |

| (Frontend) |

+----------+-----------+

+----------v-----------+

| PHP REST API |

| (Backend) |

+----------+-----------+


+----------v-----------+

| MySQL Database |

+----------------------+


---

# Component Description

## Flutter Application

Responsibilities:

- User interface
- User interaction
- Data presentation
- Sending API requests

---

## PHP REST API

Responsibilities:

- Processing application requests
- Validating data
- Communicating with database
- Returning responses

---

## MySQL Database

Responsibilities:

- Persistent data storage
- Maintaining relationships between records
- Managing application data

---

# Data Flow Example

## Adding a Student

Teacher enters student details

    | studentId | studentName | PhoneNum |

Flutter sends request

    | insert_student |

PHP API validates data

    | studentID => INT | studentName => Varchar | PhoneNum => INT |

Database stores information

    | student_ID | studentName | PhoneNum |

Response returned to application


---

# Design Principles

## Separation of Responsibilities

Each component has a dedicated responsibility:

Frontend:
- User interaction

Backend:
- Business logic

Database:
- Data storage

---

## Configurable Backend Connection

The application uses a centralized API configuration, allowing backend migration without modifying every API request.


___


### Database Structures

#### `students`
| Column | Type        | Constraints                   |
|------|-------------|-------------------------------|
| student_id | INT         | PRIMARY KEY   |
| name | VARCHAR(100)| NOT NULL                      |
| phone | VARCHAR(15) | INT                           |
| class_id | INT         |  |

#### `classes`
| Column     | Type        | Constraints          |
|------------|-------------|----------------------|
| class_id   | INT         | PRIMARY KEY, AUTO_INCREMENT |
| class_name | VARCHAR(100)| NOT NULL             |
| grade_id   | INT         |  |

#### `grades`
| Column     | Type        | Constraints          |
|------------|-------------|----------------------|
| grade_id   | INT         | PRIMARY KEY, AUTO_INCREMENT |
| grade_name | VARCHAR(100)| NOT NULL             |


#### `student_payments`
| Column     | Type    | Constraints                          |
|------------|---------|--------------------------------------|
| month_id   | INT     | composite PRIMARY KEY                |
| student_id | INT     | composite PRIMARY KEY                |
| status     | Varchar | (NOT_PAID, PAID, FREE, HALF, ABSENT) |
| class_id   | INT     | composite PRIMARY KEY                |
| week       | INT     |                                      |

#### `passwords`
| Column   | Type        | Constraints          | these data that must include in the table |
|----------|-------------|----------------------|-------------------------------------------|
| id       | INT         | PRIMARY KEY, AUTO_INCREMENT | admin , editor                            |
| password | VARCHAR(100)| NOT NULL             | "anything you want to set as password"    |


---

