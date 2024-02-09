-- Insert departments
INSERT INTO department (name) 
    VALUES  ('Legal');
            ('Finance');
            ('Engineering');
            ('Sales');

-- INSERT INTO department (name) VALUES ('Finance');
-- INSERT INTO department (name) VALUES ('Sales');
-- INSERT INTO department (name) VALUES ('Engineering');

-- Insert roles
INSERT INTO role (title, salary, department_id) 
VALUES  ('Lawyer', 190000, 1);
        ('Accountant', 125000, 2);
        ('Legal Team Lead', 250000, 3);
        ('Software Engineer', 112000, 4);
        ('Sales Lead', 100000, 5);
        ('Salesperson', 80000, 6);
        ('Lead Engineer', 150000, 7);
        ('Software Engineer', 120000, 8);
-- INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 125000, 2);
-- INSERT INTO role (title, salary, department_id) VALUES ('Legal Team Lead', 250000, 3);
-- INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 112000, 4);
-- INSERT INTO role (title, salary, department_id) VALUES ('Sales Lead', 100000, 5);
-- INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', 80000, 6);
-- INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', 150000, 7);
-- INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 120000, 8);


-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES  ('Michael', 'Scott', 1, 6);
            ('Dwight', 'Schrute', 2, 1);
            ('Jim', 'Halpert', 3, NULL);
            ('Stanley', 'Hudson', 4, NULL);
            ('Andy', 'Bernard', 5, NULL);
            ('Holly', 'Flax', 6, NULL);
            ('Kelly', 'Kapoor', 7, 5);
            ('Pam', 'Beesly', 8, NULL);


-- INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Dwight', 'Schrute', 2, 1);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jim', 'Halpert', 3, NULL);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Stanley', 'Hudson', 4, NULL);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Andy', 'Bernard', 5, NULL);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Holly', 'Flax', 6, NULL);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Kelly', 'Kapoor', 7, 5);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Pam', 'Beesly', 8, NULL);
