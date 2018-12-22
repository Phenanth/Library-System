SELECT * FROM User_Information CROSS JOIN Identification WHERE User_Information.User_identity=Identification.User_identity AND User_ID='2015210405001';


SELECT User_ID, User_Name, A.User_identity, Identity_Name, Max_Borrow_Num, Max_Borrow_Time FROM User_Information AS A JOIN (
	SELECT * FROM Identification
	) AS B ON A.User_identity=B.User_identity;