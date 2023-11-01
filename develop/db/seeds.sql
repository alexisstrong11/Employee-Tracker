INSERT INTO department (name)
VALUES  ("Marketing"),
        ("Human Resources"),
        ("Sales"),
        ("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUES  ("Project Manager", 75000, 1),
        ("Project Coordinator", 70000, 1),
        ("HR Manager", 60000, 2),
        ("Receptionist", 50000, 2),
        ("Sales Manager", 120000, 3),
        ("Sales Person", 100000, 3),
        ("Phone Operator", 50000, 4),
        ("IT Director", 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("George", "Michel", 1, null),
        ("Nicolas", "Hummings", 2, null),
        ("Justica", "Fernandez", 3, null),
        ("Mark", "Twain", 4, null),
        ("Nicole", "Smith", 5, null),
        ("Allan", "Ancira", 6, null),
        ("Sophia", "Espinosa", 7, null),
        ("Bob", "Rob", 8, null);