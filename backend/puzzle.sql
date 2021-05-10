/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.11-MariaDB : Database - puzzlegroup
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`puzzlegroup` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `puzzlegroup`;

/*Table structure for table `drzava` */

DROP TABLE IF EXISTS `drzava`;

CREATE TABLE `drzava` (
  `sifraDrzave` int(11) NOT NULL,
  `naziv` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sifraDrzave`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `drzava` */

insert  into `drzava`(`sifraDrzave`,`naziv`) values 
(1,'BIH'),
(2,'SRBIJA'),
(3,'HRVATSKA');

/*Table structure for table `grad` */

DROP TABLE IF EXISTS `grad`;

CREATE TABLE `grad` (
  `postanskiBroj` int(11) NOT NULL,
  `naziv` varchar(255) DEFAULT NULL,
  `sifraDrzave` int(11) DEFAULT NULL,
  PRIMARY KEY (`postanskiBroj`),
  KEY `FK41917v5lwn4d9c1bs9yyshecq` (`sifraDrzave`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `grad` */

insert  into `grad`(`postanskiBroj`,`naziv`,`sifraDrzave`) values 
(11000,'BEOGRAD',2),
(13000,'NOVI SAD',2),
(15000,'TUTIN',2),
(1000,'VISEGRAD',1),
(1001,'MOSTAR',1),
(1003,'SARAJEVO',1),
(2000,'HVAR',3),
(2001,'ZAGREB',3),
(2002,'ISTRA',3);

/*Table structure for table `hibernate_sequence` */

DROP TABLE IF EXISTS `hibernate_sequence`;

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `hibernate_sequence` */

insert  into `hibernate_sequence`(`next_val`) values 
(30),
(30),
(30);

/*Table structure for table `korisnik` */

DROP TABLE IF EXISTS `korisnik`;

CREATE TABLE `korisnik` (
  `sifraKorisnika` int(11) NOT NULL,
  `imePrezime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sifraKorisnika`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `korisnik` */

insert  into `korisnik`(`sifraKorisnika`,`imePrezime`) values 
(1,'Marko Markovic'),
(2,'Petar Petrovic'),
(3,'Vanja Vanjic');

/*Table structure for table `model` */

DROP TABLE IF EXISTS `model`;

CREATE TABLE `model` (
  `idModela` int(11) NOT NULL,
  `opisModela` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idModela`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `model` */

insert  into `model`(`idModela`,`opisModela`) values 
(1,'a'),
(2,'b'),
(3,'v'),
(4,'d');

/*Table structure for table `nacinplacanja` */

DROP TABLE IF EXISTS `nacinplacanja`;

CREATE TABLE `nacinplacanja` (
  `nacinid` int(11) NOT NULL,
  `opisNacinaPlacanja` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nacinid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `nacinplacanja` */

insert  into `nacinplacanja`(`nacinid`,`opisNacinaPlacanja`) values 
(1,'kes'),
(2,'kartica'),
(3,'cek');

/*Table structure for table `profaktura` */

DROP TABLE IF EXISTS `profaktura`;

CREATE TABLE `profaktura` (
  `brojProfakture` int(11) NOT NULL,
  `datumIzdavanja` date DEFAULT NULL,
  `datumPrometa` date DEFAULT NULL,
  `iznos` double DEFAULT NULL,
  `pozivNaBroj` varchar(255) DEFAULT NULL,
  `sifraRadnika` int(11) DEFAULT NULL,
  PRIMARY KEY (`brojProfakture`),
  KEY `FK8h7nq8w66d4ivw55gpc199gc3` (`sifraRadnika`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `profaktura` */

insert  into `profaktura`(`brojProfakture`,`datumIzdavanja`,`datumPrometa`,`iznos`,`pozivNaBroj`,`sifraRadnika`) values 
(18,'2021-04-21','2021-04-22',14,'12',1),
(20,'2021-04-21','2021-04-22',14,'12',1),
(22,'2021-04-21','2021-04-22',14,'12',1),
(24,'2021-04-21','2021-04-22',14,'12',1),
(26,'2021-04-21','2021-04-22',15,'12',1);

/*Table structure for table `profaktura_nacin` */

DROP TABLE IF EXISTS `profaktura_nacin`;

CREATE TABLE `profaktura_nacin` (
  `brojProfakture` int(11) NOT NULL,
  `nacinid` int(11) NOT NULL,
  KEY `FKg1m1adt6mgytw0q5ey7iaax02` (`nacinid`),
  KEY `FK9vjpac6yod02lm5uc0v3ori9c` (`brojProfakture`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `profaktura_nacin` */

insert  into `profaktura_nacin`(`brojProfakture`,`nacinid`) values 
(18,1),
(18,3),
(20,1),
(20,3),
(24,1),
(24,3),
(26,3),
(26,1);

/*Table structure for table `radnik` */

DROP TABLE IF EXISTS `radnik`;

CREATE TABLE `radnik` (
  `sifraRadnika` int(11) NOT NULL,
  `imePrezime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sifraRadnika`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `radnik` */

insert  into `radnik`(`sifraRadnika`,`imePrezime`) values 
(1,'milica masal'),
(2,'katarina miric');

/*Table structure for table `stavkaprofakture` */

DROP TABLE IF EXISTS `stavkaprofakture`;

CREATE TABLE `stavkaprofakture` (
  `brojProfakture` int(11) NOT NULL,
  `idStavke` int(11) NOT NULL,
  `cena` double DEFAULT NULL,
  `napomena` varchar(255) DEFAULT NULL,
  `opis` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`brojProfakture`,`idStavke`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `stavkaprofakture` */

insert  into `stavkaprofakture`(`brojProfakture`,`idStavke`,`cena`,`napomena`,`opis`) values 
(24,25,100,'bez','bez'),
(26,28,100,'bez','bez'),
(26,29,11200,'beasdz','basdfez');

/*Table structure for table `ugovoroprevozu` */

DROP TABLE IF EXISTS `ugovoroprevozu`;

CREATE TABLE `ugovoroprevozu` (
  `brojUgovora` int(11) NOT NULL,
  `datumIzdavanja` date DEFAULT NULL,
  PRIMARY KEY (`brojUgovora`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `ugovoroprevozu` */

insert  into `ugovoroprevozu`(`brojUgovora`,`datumIzdavanja`) values 
(1,'2021-04-13'),
(2,'2021-04-13');

/*Table structure for table `uplatnica` */

DROP TABLE IF EXISTS `uplatnica`;

CREATE TABLE `uplatnica` (
  `idUplatnice` int(11) NOT NULL,
  `iznos` double DEFAULT NULL,
  `svrhaUplate` varchar(255) DEFAULT NULL,
  `idModela` int(11) DEFAULT NULL,
  `brojProfakture` int(11) DEFAULT NULL,
  `sifraRadnika` int(11) DEFAULT NULL,
  `idValute` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUplatnice`),
  KEY `FKh67yte60j3ntd5skvox6n751j` (`idModela`),
  KEY `FKny14acjgorsld8jr7y8tgqbhr` (`brojProfakture`),
  KEY `FKk3cwa31s84gprpghmkeb1g2cv` (`sifraRadnika`),
  KEY `FKiesahcoeivgkjv5c1hsqdcx87` (`idValute`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `uplatnica` */

/*Table structure for table `valuta` */

DROP TABLE IF EXISTS `valuta`;

CREATE TABLE `valuta` (
  `idValute` int(11) NOT NULL,
  `nazivValute` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idValute`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

/*Data for the table `valuta` */

insert  into `valuta`(`idValute`,`nazivValute`) values 
(1,'usd'),
(2,'euro'),
(3,'dinar');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
