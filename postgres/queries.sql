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
--WHERE LIKE - pattern
SELECT country 
FROM world_food
WHERE country LIKE 'U' || '%';
