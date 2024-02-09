-- department database
USE department;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
);

-- role database
USE job;

CREATE TABLE job (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT,
);

-- employee database
USE employee;

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

