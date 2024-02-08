-- Insert departments
INSERT INTO department (name) VALUES ('Legal');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', 99000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 65000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Representative', 60000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 112000, 4);
