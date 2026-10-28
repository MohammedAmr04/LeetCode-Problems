SELECT 	
	contest_id,
	Round(
	(
	count(Cast(Register.user_id as DECIMAL)) * 100.0 / 
	(SELECT COunt(*) From Users)
	) , 2 )  as percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, Register.contest_id ASC;
