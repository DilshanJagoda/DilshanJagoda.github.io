# e_class Teacher Edition - Database Design

## Overview

The application uses a relational MySQL database to store and manage student-related information.

The database design focuses on maintaining organized records while allowing efficient retrieval of student data.

---

# Main Entities

## Users

Stores authentication information.

Example fields:

- user_id
- username
- password
- role

---

## Students

Stores student information.

Example fields:

- student_id
- name
- grade
- contact_information
- registration_date

---

## Attendance

Stores student attendance records.

Example fields:

- attendance_id
- student_id
- date
- attendance_status

Relationship:

Student
|
|
Attendance Records


---

## Payments

Stores payment-related information.

Example fields:

- payment_id
- student_id
- amount
- payment_date
- payment_status

Relationship:


Student
|
|
Payment Records


---

# Database Relationships


Users

Students

Students
|
+---- Attendance

Students
|
+---- Payments


---

# Database Design Goals

- Maintain data consistency
- Avoid duplicate records
- Provide efficient data retrieval
- Support future expansion