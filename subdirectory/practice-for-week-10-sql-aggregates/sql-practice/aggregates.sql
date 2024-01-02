SELECT COUNT(*) AS total_cats
FROM cats;

SELECT name, MIN(birth_year) FROM cats;
SELECT name, MAX(birth_year) FROM cats;


SELECT cats.name, toys.name
FROM cats
JOIN toys ON cats.id = toys.cat_id;

SELECT cats.name, COUNT(toys.id) as number_of_toys
FROM cats
JOIN toys ON cats.id = toys.cat_id
GROUP BY cats.name;


SELECT cats.name, COUNT(toys.id) as number_of_toys
FROM cats
JOIN toys ON cats.id = toys.cat_id
GROUP BY cats.name
HAVING COUNT(toys.id) >= 2;
