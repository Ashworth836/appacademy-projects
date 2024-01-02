-- Your code here
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS office_positions;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS performance_reviews;
DROP TABLE IF EXISTS office_relationships;
DROP TABLE IF EXISTS parties;

CREATE TABLE departments (
    id INTEGER PRIMARY KEY AUTOINCREMEMT,
    name VARCHAR(300),
    employee_count INTEGER DEFAULT 0
);

CREATE TABLE office_positions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255)
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    employee_role INTEGER,
    department INTEGER,
    FOREIGN KEY (employee_role) REFERENCES office_positions(id),
    FOREIGN KEY (departments) REFERENCES departments(id)
);

CREATE TABLE performance_reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    score NUMERIC(2, 1) NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
)

CREATE TABLE office_relationships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_one INTEGER,
    employee_two INTEGER,
    relationship_type VARCHAR(255) DEFAULT 'Undefined',
    FOREIGN KEY (employee_one) REFERENCES employees(id),
    FOREIGN KEY (employee_two) REFERENCES employees(id)
);

CREATE TABLE parties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    budget numeric(5, 2) NOT NULL,
    onsite BOOLEAN DEFAULT 1
);