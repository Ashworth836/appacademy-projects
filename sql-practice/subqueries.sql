SELECT cats.name, toys.name
FROM cats
JOIN toys ON toys.cat_id = cats.id
WHERE cats.name = 'Garfield';

SELECT name
FROM toys
WHERE cats_id IN (  SELECT id 
                    FROM cats
                    WHERE name = 'Garfield'
                );

INSERT INTO toys(name, cat_id)
VALUES(
    'Pepperoni',
        (SELECT id
        FROM cats
        WHERE name = 'Garfield')
    );

INSERT INTO toys(name, cat_id)
SELECT 'Cat Bed', id FROM cats
WHERE birth_year > 2013;

SELECT * FROM toys
WHERE name = 'Cat Bed';

SELECT * FROM toys
JOIN cats ON cats.id = toys.cat_id
WHERE cats.name = 'Garfield';

INSERT INTO cats_backup
SELECT * FROM cats;

INSERT INTO toys_backup
SELECT * FROM toys;