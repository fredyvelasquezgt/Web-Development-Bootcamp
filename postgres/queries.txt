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