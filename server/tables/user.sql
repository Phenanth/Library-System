/* 表创建 */

DROP TABLE IF EXISTS `User_Information`;
DROP TABLE IF EXISTS `Identification`
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User_Information` (
  `User_ID` char(13) NOT NULL PRIMARY KEY,
  `User_Password` char(20) NOT NULL,
  `User_Name` char(20) NOT NULL,
  `User_Identity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

CREATE TABLE `Identification` (
  `User_Identity` int NOT NULL PRIMARY KEY,
  `Identify_Name` char(10) NOT NULL,
  `Max_Borrow_Num` int NOT NULL,
  `Max_Borrow_Time` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

/* 创建用户 */

/* 添加数据 */

INSERT INTO `User_Information` VALUES ('2015210405001', '123456', 'Alice', 1);
INSERT INTO `User_Information` VALUES ('2015210405002', '123456', 'Bob', 2);
INSERT INTO `User_Information` VALUES ('2015210405003', '123456', 'Catherine', 3);
INSERT INTO `User_Information` VALUES ('2015210405004', '123456', 'Drake', 4);

INSERT INTO `Identification` VALUES (1, '管理员', 30, 150);
INSERT INTO `Identification` VALUES (2, '教职工', 30, 150);
INSERT INTO `Identification` VALUES (3, '本科生', 10, 30);
INSERT INTO `Identification` VALUES (4, '研究/博士生', 15, 150);

