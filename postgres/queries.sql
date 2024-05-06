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
--ONE TO ONE RELATIONSHIP
CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);

-- One to One --
CREATE TABLE contact_detail (
  id INTEGER REFERENCES student(id) UNIQUE,
  tel TEXT,
  address TEXT
);

--INNER JOIN--
SELECT * 
FROM student
JOIN contact_detail
ON student.id = contact_detail.id

-- MANY TO ONE --
CREATE TABLE homework_submission (
  id SERIAL PRIMARY KEY,
  mark INTEGER,
  student_id INTEGER REFERENCES student(id) --this is the important part--
);

--MANY TO ONE --
SELECT student.id, first_name, last_name, mark
FROM student
JOIN homework_submission
ON student.id = student_id

--MANY TO ONE BUT PRETTIER --
SELECT student.id, first_name, last_name, mark
FROM student
JOIN homework_submission
ON student.id = student_id

--MANY TO MANY--

CREATE TABLE class (
  id SERIAL PRIMARY KEY,
  title VARCHAR(45)
);

--TABLE THAT HOLDS THE RELATIONSHIP
CREATE TABLE enrollment (
  student_id INTEGER REFERENCES student(id),
  class_id INTEGER REFERENCES class(id),
  PRIMARY KEY (student_id, class_id)
);

-- Join FOR MANY TO MANY --
SELECT *
FROM enrollment 
JOIN student ON student.id = enrollment.student_id
JOIN class ON class.id = enrollment.class_id;

SELECT student.id AS id, first_name, last_name, title
FROM enrollment 
JOIN student ON student.id = enrollment.student_id
JOIN class ON class.id = enrollment.class_id;

-- ALIAS --
SELECT s.id AS id, first_name, last_name, title
FROM enrollment AS e
JOIN student AS s ON s.id = e.student_id
JOIN class AS c ON c.id = e.class_id;


SELECT s.id AS id, first_name, last_name, title
FROM enrollment e
JOIN student s ON s.id = e.student_id
JOIN class c ON c.id = e.class_id;