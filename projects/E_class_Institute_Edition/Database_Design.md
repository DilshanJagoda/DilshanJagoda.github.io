# e_class Institution Edition - Database Design

## Overview

The e_class Institution Edition uses a relational MySQL database designed to manage institutional student information, class structures, attendance tracking, payment records, and user authentication.

The database architecture was designed to support:

- Multiple grades
- Multiple classes
- Students enrolled in multiple classes
- Attendance management
- Monthly payment tracking
- Historical student record preservation

The design focuses on data integrity, scalability, and maintaining accurate institutional records.

---

# Database Entity Overview

The system consists of seven main tables:


+-------------+

| grades |

+-------------+

|
|

+-------------+

| classes |

+-------------+

|
|

+-------------+

| ava_class |

+-------------+

|
|

+-------------+

| students |

+-------------+

students
|
|
attendance

students
|
|
payments

passwords


---

# 1. Students Table

## Purpose

The students table stores the core information of every student registered in the institution.

Instead of permanently deleting inactive students, the system preserves their records by using an availability status field.

This allows the institution to maintain historical records while preventing inactive students from appearing in normal application workflows.

---

## Structure


students

student_id
name
phone
ava


---

## Columns

### student_id

- Unique identifier for each student
- Primary key
- Automatically generated

### name

Stores the student's name.

### phone

Stores student contact information.

### ava

Represents the active status of the student.

Values:


1 = Active student

0 = Inactive student


---

## Design Decision

The system uses a soft-delete approach instead of permanently removing student records.

Benefits:

- Preserves historical information
- Prevents accidental data loss
- Allows institutions to maintain previous student records
- Keeps inactive students hidden from normal operations

---

# 2. Grades Table

## Purpose

Stores the grades available within the institution.

Example:


Grade 10
Grade 11
Grade 12


---

## Structure


grades

grade_id
grade_name


---

## Columns

### grade_id

- Unique identifier
- Primary key

### grade_name

Stores the grade name.

---

# 3. Classes Table

## Purpose

Stores classes available inside each grade.

A grade can contain multiple classes.

Example:


Grade 10

|
+-- Class A

|
+-- Class B


---

## Structure


classes

class_id
class_name
grade_id


---

## Relationships


Grade

|

Classes


---

## Columns

### class_id

Unique class identifier.

Primary key.

### class_name

Stores class name.

### grade_id

Links the class to its corresponding grade.

---

# 4. ava_class Table

## Purpose

The ava_class table manages student-class relationships.

Since this is an institutional system, one student can belong to multiple classes.

Example:


Student A

Mathematics Class

Physics Class

ICT Class


---

## Structure


ava_class

student_id
class_id


---

## Primary Key


(student_id, class_id)


This prevents duplicate student-class registrations.

---

## Relationship


Students

|

ava_class

|

Classes


---

# 5. Attendance Table

## Purpose

Stores attendance records for students in each class.

---

## Structure


attendance

id
date
status
class_id


---

## Columns

### id

Student identifier reference.

### date

Date of attendance record.

### status

Attendance status.

### class_id

Identifies the class where attendance was recorded.

---

## Primary Key


(id, date, class_id)


This ensures a student cannot have duplicate attendance records for the same class on the same date.

---

# 6. Payments Table

## Purpose

Stores student payment records.

The system tracks payments based on:

- Student
- Class
- Month
- Date

---

## Structure


payments

student_id
status
date
month
class_id
grade_id


---

## Payment Status

The status field uses predefined values:


PAID

NOT_PAID

FREE

HALF

ABSENT


Default:


NOT_PAID


---

## Primary Key


(student_id, class_id, month)


This ensures each student has only one payment record per class for each month.

---

# 7. Passwords Table

## Purpose

Stores authentication credentials for system access.

The system uses this table to manage administrator and editor access.

---

## Structure


passwords

id
password


---

## User Roles

The system supports:

### Admin

Responsible for institutional management.

### Editor

Responsible for operational tasks such as updating records.

---

# Database Design Principles

## Data Integrity

Primary keys and composite primary keys prevent duplicate records.

---

## Relationship Management

The database separates:

- Academic structure
- Student information
- Attendance
- Payments
- Authentication

This improves maintainability and scalability.

---

## Historical Data Preservation

Inactive students are retained using status-based deactivation instead of permanent deletion.

This allows institutions to preserve historical information.

---

## Scalability

The design supports expansion through:

- Additional grades
- Additional classes
- Large numbers of students
- Multiple student-class relationships