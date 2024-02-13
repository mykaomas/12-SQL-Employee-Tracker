-- Insert departments
INSERT INTO departments (name) 
VALUES  ('Legal'),
        ('Finance'),
        ('Engineering'),
        ('Sales');

-- Insert roles
INSERT INTO jobs (title, salary, department_id) 
VALUES  ('Lawyer', 190000, 1),
        ('Accountant', 125000, 2),
        ('Legal Team Lead', 250000, 3),
        ('Software Engineer', 112000, 4),
        ('Sales Lead', 100000, 5),
        ('Salesperson', 80000, 6),
        ('Lead Engineer', 150000, 7),
        ('Software Engineer', 120000, 8);


-- Insert employees
INSERT INTO employees (first_name, last_name, role_id) 
VALUES  ('Michael', 'Scott', 123),
        ('Dwight', 'Schrute', 256),
        ('Jim', 'Halpert', 345),
        ('Stanley', 'Hudson', 467),
        ('Andy', 'Bernard', 589),
        ('Holly', 'Flax', 678),
        ('Kelly', 'Kapoor', 790),
        ('Pam', 'Beesly', 899);
