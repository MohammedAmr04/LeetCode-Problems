
SELECT Employee.name,bonus
FROM Employee
left JOIN Bonus
on Employee.empId =Bonus.empId
Where Bonus.bonus <1000 or Bonus.bonus is null