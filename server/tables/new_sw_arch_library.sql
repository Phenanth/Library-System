create database sw_arch_library
use sw_arch_library

mysql> CREATE TABLE `user` (
    ->   `user_id` char(14) NOT NULL,
    ->   `user_password` char(100) NOT NULL,
    ->   `user_sex` char(1) DEFAULT NULL,
    ->   `user_secret` varchar(40) DEFAULT NULL,
    ->   `user_secret_temp` varchar(40) DEFAULT NULL,
    ->   PRIMARY KEY (`user_id`)
    -> ) ENGINE=InnoDB DEFAULT CHARSET=gbk;
Query OK, 0 rows affected (0.04 sec)

mysql> alter table user add column user_identity int;
Query OK, 0 rows affected (0.07 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> CREATE TABLE `Identification` (
    ->   `User_Identity` int NOT NULL PRIMARY KEY,
    ->   `Identify_Name` char(10) NOT NULL,
    ->   `Max_Borrow_Num` int NOT NULL,
    ->   `Max_Borrow_Time` int NOT NULL
    -> ) ENGINE=InnoDB DEFAULT CHARSET=gbk;
Query OK, 0 rows affected (0.04 sec)

mysql> INSERT INTO `Identification` VALUES (1, '管理员', 30, 150);
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO `Identification` VALUES (2, '教职工', 30, 150);
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO `Identification` VALUES (3, '本科生', 10, 30);
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO `Identification` VALUES (4, '研究/博士生', 15, 150);
Query OK, 1 row affected (0.00 sec)


INSERT INTO `user` VALUES ('2015210405001', '6cc7af7f2fbb06fd1701ebcd0497a2c2', 'M', NULL, NULL, 1);
INSERT INTO `user` VALUES ('2015210405002', '6cc7af7f2fbb06fd1701ebcd0497a2c2', 'F', NULL, NULL, 2);
INSERT INTO `user` VALUES ('2015210405003', '6cc7af7f2fbb06fd1701ebcd0497a2c2', 'M', NULL, NULL, 3);
INSERT INTO `user` VALUES ('2015210405004', '6cc7af7f2fbb06fd1701ebcd0497a2c2', 'F', NULL, NULL, 4);

GRANT ALL ON sw_arch_library.* TO `swLibraryAdmin`@`localhost` IDENTIFIED BY '000000';