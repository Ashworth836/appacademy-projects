--Insert new cat named "Red" born this year
-- Your code here
INSERT INTO cats (name, birth_year)
VALUES ('Red', '2023');

--Assign ownership of new cat to George Beatty using subqueries
-- Your code here
INSERT INTO cat_owners (owner_id, cat_id)
VALUES(
    (SELECT id FROM owners
    WHERE first_name = 'George' AND last_name = 'Beatty'),
    (SELECT id FROM cats
    WHERE name = 'Red')
);

--Query to verify INSERTs worked properly
-- Your code here
SELECT owner.first_name, owner.last_name, cats.name FROM cat_owners
JOIN owners ON owners.id = cat_owners.owner_id
JOIN cats ON cats.id = cat_owners.id
WHERE owners.first_name = 'George' AND owners.last_name = 'Beatty';