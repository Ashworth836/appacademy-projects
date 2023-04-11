-- Give "Red" the cat one of every toy the other cats have
-- Your code here
INSERT INTO toys(name, cat_id)
SELECT toys.name, (SELECT cats.id FROM cats WHERE name = 'Red') FROM toys
JOIN cats ON (cats.id = toys.cat_id AND cats.name != 'Red');

-- Query spoiled cats reporting the most spoiled first
-- Your code here
SELECT cats.name, COUNT(toys.name) AS num_toys FROM cats
JOIN toys ON toys.id = toys.cat_id
GROUP BY cats.name
HAVING num_toys > 1
ORDER BY num_toys DESC;