SET NAMES UTF8;
DROP DATABASE IF EXISTS yigema;
CREATE DATABASE yigema CHARSET=UTF8;
USE yigema;
CREATE TABLE ygm_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(8),
  upwd VARCHAR(8)
);
INSERT INTO ygm_user VALUES (NULL,'Tom',md5('abcd'));
INSERT INTO ygm_user VALUES (NULL,"Marry",md5('abcd2345'));
INSERT INTO ygm_user VALUES (NULL,"Jack",md5('abcd3456'));
CREATE TABLE ygm_imagelist(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title VARCHAR(50)
);
INSERT INTO ygm_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner1.png','图片1');
INSERT INTO ygm_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner2.png','图片2');
INSERT INTO ygm_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner3.png','图片3');
INSERT INTO ygm_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner4.png','图片4');
CREATE TABLE ygm_products_details(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  content VARCHAR(2000),
  sales INT,
  img_url VARCHAR(255),
  price DECIMAL(10,2),
  s_time DATETIME
);
INSERT INTO ygm_products_details VALUES
(NULL,'花王(Merries)妙而舒婴儿纸尿裤/尿不湿 大号L 54片（9kg-14kg）（日本原装进口）','日本原装进口，瞬吸干爽，安心舒适','99万+','http://127.0.0.1:3000/img/p_d (1).png',99.00,now()),
(NULL,'Fisher Price 费雪-声光安抚海马-蓝色0-6个月毛绒公仔玩具 20-30cm DGH82','蓝色0-6个月婴幼儿毛绒玩具','2.3万+','http://127.0.0.1:3000/img/p_d (2).png',99.00,now()),
(NULL,'子初 婴儿柠檬洗衣皂150g*10 宝宝新生儿肥皂尿布皂 不伤手','椰油去污 芦荟护手 柠檬清香','3.1万+','http://127.0.0.1:3000/img/p_d (3).png',49.00,now()),
(NULL,'自营雀巢Nestle超启能恩3段幼儿配方奶粉800g罐装（12-36个月适用）适度水解工艺','原超级能恩 新老包装随机发货','9.9万+','http://127.0.0.1:3000/img/p_d (4).png',268.00,now());
