-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 24, 2022 at 02:38 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exchanges`
--

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

DROP TABLE IF EXISTS `form`;
CREATE TABLE IF NOT EXISTS `form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender` varchar(20) NOT NULL,
  `receiver` varchar(20) NOT NULL,
  `ammount` int(11) NOT NULL,
  `currency` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `payment` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`id`, `sender`, `receiver`, `ammount`, `currency`, `date`, `payment`) VALUES
(1, 'ahmad', 'wael', 100, 'dollar', '2022-01-19', 'visa card'),
(2, 'ahmad', 'wael', 100, 'dollar', '2022-01-19', 'visa card'),
(3, 'ahmad', 'salam', 100, 'dollar', '2022-01-01', 'visa card'),
(10, 'sami', 'alaa', 5, 'dollar', '2022-01-01', 'visa card'),
(11, 'sami', 'alaa', 5, 'dollar', '2022-01-01', 'visa card'),
(12, 'sami', 'alma', 5, 'dollar', '2022-01-01', 'visa card'),
(13, 'sam', 'alma', 5, 'dollar', '2022-01-01', 'visa card');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
