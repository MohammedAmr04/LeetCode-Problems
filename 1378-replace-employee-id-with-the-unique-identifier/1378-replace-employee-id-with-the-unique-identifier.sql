/* Write your T-SQL query statement below */
SELECT 
eu.unique_id,
	es.name
From Employees as es
left Join EmployeeUNI as eu
on es.id = eu.id