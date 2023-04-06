-- Your code here
INSERT INTO customers (name, phone)
    VALUES ('Rachel', 1111111111);

UPDATE customers 
    SET points = points + 1
    WHERE name = 'Rachel';

INSERT INTO coffee_orders DEFAULT VALUES;

INSERT INTO customer (name, email, phone)
VALUES 
    ('Monica', 'monica@friends.show', 2222222222),
    ('Phoebe', 'phoebe@friends.show', 3333333333);

UPDATE customers
    SET points = points + 3
    WHERE name = 'Phoebe';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

UPDATE customers
    SET points = points + 4
    WHERE name = 'Monica';

UPDATE customers
    SET points = points + 4
    WHERE name = 'Rachel';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

UPDATE customers
    SET points = points - 10
    WHERE name 'Rachel';

INSERT INTO coffee_orders (is_redeemed)
VALUES (1);  

INSERT INTO customers (name, email)
VALUES
    ('Joey', 'joey@friends.show'),
    ('Candler', 'candler@friends.show'),
    ('Ross', 'ross@friends.show');

UPDATE customers
    SET points = points + 6
    WHERE name = 'Ross';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

UPDATE customers
    SET points = points + 3
    WHERE name = 'Monica';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

UPDATE customers
    SET points = points + 1
    WHERE name = 'Phoebe';

INSERT INTO coffee_orders DEFAULT VALUES;

DELETE FROM coffee_orders WHERE id = 19;

UPDATE customers
    SET points = ponits - 1
    WHERE name = 'Ross';

DELETE FROM coffee_orders WHERE id = 18;

UPDATE customers
    SET points = points - 1
    WHERE name = 'Ross';

UPDATE customers
    SET points = points + 2
    WHERE name = 'Joey';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

UPDATE customers
    SET points = points - 10
    WHERE name = 'Monica';

INSERT INTO coffee_orders (is_redeemed)
VALUES (1);

DELETE FROM customers WHERE id = 5;

UPDATE customers
    SET points = points + 1
    WHERE name = 'Ross';

INSERT INTO  coffee_orders DEFAULT VALUES;

UPDATE customers
    SET points = points + 1
    WHERE name = 'Joey';

INSERT INTO  coffee_orders DEFAULT VALUES;

UPDATE customers
    SET email = 'p_as_in_phoebe@friends.show'
    WHERE id = 3;