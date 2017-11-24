
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name_last` varchar(255) DEFAULT NULL,
  `name_first` varchar(255) DEFAULT NULL,
  `facebook_name` varchar(255) DEFAULT NULL,
  `twitter_name` varchar(255) DEFAULT NULL,
  `insta_name` varchar(255) DEFAULT NULL,
  `li_name` varchar(255) DEFAULT NULL,
  `interest1` varchar(50) DEFAULT NULL,
  `interest2` varchar(50) DEFAULT NULL,
  `interest3` varchar(50) DEFAULT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;


LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'brian_hafner@yahoo.com','John Hafner','Hafner','John','brian.hafner2','HafnerTest','brianhafner_re','jbhafner','crossfit','travel','reading',NULL,'2017-11-20 04:19:14','2017-11-23 19:46:17'),(7,'gail@gail.com','Gail McFadden',NULL,NULL,'','GailTwitter','',NULL,NULL,NULL,NULL,NULL,'2017-11-21 00:01:31','2017-11-23 18:19:24'),(8,'tim@email.com','Tim Thompsen',NULL,NULL,'TimFB','TimTwitter','TimInsta',NULL,NULL,NULL,NULL,NULL,'2017-11-21 02:02:52','2017-11-23 18:19:24'),(9,'test2@brian.com','Brian Test2',NULL,NULL,'fbTest2','twtTest2','instaTest2',NULL,NULL,NULL,NULL,NULL,'2017-11-21 02:34:04','2017-11-23 18:19:24'),(10,'test3@brian.com','John Hafner3','Hafner3','John3','fb3','twitt3','insta3','li3','Int1','Int2','Int3','http://mypicture','2017-11-21 17:49:42','2017-11-24 20:26:20'),(11,'joe@hotmail.com','JoeSmith',NULL,NULL,'sssf','gllll','tttt',NULL,NULL,NULL,NULL,NULL,'2017-11-24 20:30:12','2017-11-24 20:30:12'),(12,'test4@brian.com','Brian Test4',NULL,NULL,'fbTest4','twtTest4','InstaTest4',NULL,NULL,NULL,NULL,NULL,'2017-11-24 20:51:02','2017-11-24 20:51:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

