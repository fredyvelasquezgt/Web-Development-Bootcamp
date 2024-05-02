CREATE TABLE world_food (
	id SERIAL PRIMARY KEY, 
	country VARCHAR(45),
	rice_production FLOAT,
	wheat_production FLOAT
)
--select everything
SELECT * from world_food;
--select columns
SELECT id, country from world_food;
--WHERE 
SELECT rice_production
FROM world_food
WHERE country = 'United States'
--WHERE W COMPARISONS < > =
SELECT country, wheat_production
FROM world_food
WHERE wheat_production > 20;
--WHERE LIKE - pattern - all records that starts with "U"
SELECT country 
FROM world_food
WHERE country LIKE 'U' || '%';
--WHERE LIKE - pattern - finishes with "a"
SELECT country 
FROM world_food
WHERE country LIKE '%' || 'a';
--INSERT INTO 
INSERT INTO world_food (country, rice_production, wheat_production)
VALUES ('Italy',1.46, 7.3);
--CREATE TABLE 
CREATE TABLE countries (
	id SERIAL PRIMARY KEY,
	country_code char(2),
	country_name VARCHAR(100)
)
