/* Write your T-SQL query statement below */

SELECT Project.project_id,
ROUND(AVG(
CAST(Employee.experience_years AS DECIMAL)
 ),2)as average_years 
FROM Project
LEFT JOIN Employee
ON Project.employee_id = Employee.employee_id
Group by Project.project_id