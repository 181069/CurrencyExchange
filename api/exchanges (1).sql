-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2022 at 12:10 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

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
CREATE DATABASE IF NOT EXISTS `exchanges` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `exchanges`;

-- --------------------------------------------------------

--
-- Table structure for table `alert`
--

DROP TABLE IF EXISTS `alert`;
CREATE TABLE `alert` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
CREATE TABLE `currency` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `currency`
--

INSERT INTO `currency` (`id`, `name`) VALUES
(10, 'Swedish krona'),
(11, 'Albanian lek'),
(12, 'Vanuatu vatu'),
(13, 'Mauritian rupee'),
(14, 'British pound'),
(15, 'Euro'),
(16, 'West African CFA franc'),
(17, 'lari'),
(18, 'Bhutanese ngultrum'),
(19, 'Namibian dollar'),
(20, 'Euro'),
(21, 'Uruguayan peso'),
(22, 'Euro'),
(23, 'British pound'),
(24, 'United States dollar'),
(25, 'Ugandan shilling'),
(26, 'Swiss franc'),
(27, 'West African CFA franc'),
(28, 'South Korean won'),
(29, 'Cuban convertible peso'),
(30, 'Euro'),
(31, 'Norwegian krone'),
(32, 'Eastern Caribbean dollar'),
(33, 'Euro'),
(34, 'Euro'),
(35, 'Paraguayan guaraní'),
(36, 'British pound'),
(37, 'Lao kip'),
(38, 'Qatari riyal'),
(39, 'Dominican peso'),
(40, 'Euro'),
(41, 'Panamanian balboa'),
(42, 'Burmese kyat'),
(43, 'Barbadian dollar'),
(44, 'Cambodian riel'),
(45, 'Eastern Caribbean dollar'),
(46, 'Kenyan shilling'),
(47, 'Indian rupee'),
(48, 'São Tomé and Príncipe dobra'),
(49, 'Danish krone'),
(50, 'Czech koruna'),
(51, 'Eastern Caribbean dollar'),
(52, 'Saint Helena pound'),
(53, 'Ukrainian hryvnia'),
(54, 'Djiboutian franc'),
(55, 'krone'),
(56, 'Tongan paʻanga'),
(57, 'United States dollar'),
(58, 'Australian dollar'),
(59, 'Central African CFA franc'),
(60, 'Lebanese pound'),
(61, 'Uzbekistani soʻm'),
(62, 'United States dollar'),
(63, 'Euro'),
(64, 'Australian dollar'),
(65, 'Bermudian dollar'),
(66, 'South Sudanese pound'),
(67, 'Costa Rican colón'),
(68, 'Euro'),
(69, 'dalasi'),
(70, 'CFP franc'),
(71, 'Belize dollar'),
(72, 'Australian dollar'),
(73, 'Euro'),
(74, 'Euro'),
(75, 'Euro'),
(76, 'Mozambican metical'),
(77, 'United States dollar'),
(78, 'Australian dollar'),
(79, 'Azerbaijani manat'),
(80, 'Central African CFA franc'),
(81, 'Eritrean nakfa'),
(82, 'Malaysian ringgit'),
(83, 'Kuwaiti dinar'),
(84, 'United States dollar'),
(85, 'New Zealand dollar'),
(86, 'Moroccan dirham'),
(87, 'Somali shilling'),
(88, 'Singapore dollar'),
(89, 'United States dollar'),
(90, 'Euro'),
(91, 'Botswana pula'),
(92, 'Indonesian rupiah'),
(93, 'denar'),
(94, 'Tanzanian shilling'),
(95, 'Swazi lilangeni'),
(96, 'Central African CFA franc'),
(97, 'Bolivian boliviano'),
(98, 'Solomon Islands dollar'),
(99, 'Thai baht'),
(100, 'Euro'),
(101, 'Croatian kuna'),
(102, 'Burundian franc'),
(103, 'United Arab Emirates dirham'),
(104, 'United States dollar'),
(105, 'Falkland Islands pound'),
(106, 'Malawian kwacha'),
(107, 'Bangladeshi taka'),
(108, 'Canadian dollar'),
(109, 'Jamaican dollar'),
(110, 'Euro'),
(111, 'Euro'),
(112, 'Tunisian dinar'),
(113, 'Central African CFA franc'),
(114, 'Euro'),
(115, 'Cape Verdean escudo'),
(116, 'Aruban florin'),
(117, 'United States dollar'),
(118, 'Nigerian naira'),
(119, 'Australian dollar'),
(120, 'Euro'),
(121, 'Iraqi dinar'),
(122, 'New Zealand dollar'),
(123, 'Zimbabwean dollar'),
(124, 'Guinean franc'),
(125, 'Ghanaian cedi'),
(126, 'CFP franc'),
(127, 'Kyrgyzstani som'),
(128, 'Macanese pataca'),
(129, 'Bahraini dinar'),
(130, 'Ethiopian birr'),
(131, 'Gibraltar pound'),
(132, 'British pound'),
(133, 'Pakistani rupee'),
(134, 'Euro'),
(135, 'Honduran lempira'),
(136, 'Haitian gourde'),
(137, 'United States dollar'),
(138, 'Australian dollar'),
(139, 'Trinidad and Tobago dollar'),
(140, 'Euro'),
(141, 'Congolese franc'),
(142, 'Danish krone'),
(143, 'Venezuelan bolívar soberano'),
(144, 'Euro'),
(145, 'Eastern Caribbean dollar'),
(146, 'West African CFA franc'),
(147, 'United States dollar'),
(148, 'Mauritanian ouguiya'),
(149, 'South African rand'),
(150, 'Euro'),
(151, 'Euro'),
(152, 'Egyptian pound'),
(153, 'Tajikistani somoni'),
(154, 'United States dollar'),
(155, 'Japanese yen'),
(156, 'New Zealand dollar'),
(157, 'West African CFA franc'),
(158, 'Egyptian pound'),
(159, 'Central African CFA franc'),
(160, 'Eastern Caribbean dollar'),
(161, 'Mexican peso'),
(162, 'Papua New Guinean kina'),
(163, 'Serbian dinar'),
(164, 'Argentine peso'),
(165, 'West African CFA franc'),
(166, 'Omani rial'),
(167, 'Euro'),
(168, 'Maldivian rufiyaa'),
(169, 'Euro'),
(170, 'Algerian dinar'),
(171, 'North Korean won'),
(172, 'United States dollar'),
(173, 'West African CFA franc'),
(174, 'United States dollar'),
(175, 'Euro'),
(176, 'Colombian peso'),
(177, 'Rwandan franc'),
(178, 'Malagasy ariary'),
(179, 'Euro'),
(180, 'Moldovan leu'),
(181, 'Nepalese rupee'),
(182, 'Afghan afghani'),
(183, 'Saudi riyal'),
(184, 'United States dollar'),
(185, 'Euro'),
(186, 'Zambian kwacha'),
(187, 'Euro'),
(188, 'Turkish lira'),
(189, 'Yemeni rial'),
(190, 'Comorian franc'),
(191, 'Netherlands Antillean guilder'),
(192, 'Euro'),
(193, 'Bulgarian lev'),
(194, 'Brazilian real'),
(195, 'United States dollar'),
(196, 'Lesotho loti'),
(197, 'Hungarian forint'),
(198, 'Guatemalan quetzal'),
(199, 'Chilean peso'),
(200, 'Euro'),
(201, 'Eastern Caribbean dollar'),
(202, 'Sierra Leonean leone'),
(203, 'Brunei dollar'),
(204, 'Seychellois rupee'),
(205, 'Pound sterling'),
(206, 'Israeli new shekel'),
(207, 'Peruvian sol'),
(208, 'Romanian leu'),
(209, 'krone'),
(210, 'Euro'),
(211, 'Chinese yuan'),
(212, 'Mongolian tögrög'),
(213, 'Libyan dinar'),
(214, 'Hong Kong dollar'),
(215, 'Algerian dinar'),
(216, 'Guyanese dollar'),
(217, 'Philippine peso'),
(218, 'Polish złoty'),
(219, 'Euro'),
(220, 'Armenian dram'),
(221, 'Jordanian dinar'),
(222, 'West African CFA franc'),
(223, 'Euro'),
(224, 'Angolan kwanza'),
(225, 'Cook Islands dollar'),
(226, 'Russian ruble'),
(227, 'Cayman Islands dollar'),
(228, 'Turkmenistan manat'),
(229, 'Eastern Caribbean dollar'),
(230, 'United States dollar'),
(231, 'Eastern Caribbean dollar'),
(232, 'Syrian pound'),
(233, 'Kazakhstani tenge'),
(234, 'Belarusian ruble'),
(235, 'Sri Lankan rupee'),
(236, 'Euro'),
(237, 'Liberian dollar'),
(238, 'Icelandic króna'),
(239, 'CFP franc'),
(240, 'Bahamian dollar'),
(241, 'United States dollar'),
(242, 'New Zealand dollar'),
(243, 'Samoan tālā'),
(244, 'Vietnamese đồng'),
(245, 'Central African CFA franc'),
(246, 'Fijian dollar'),
(247, 'Netherlands Antillean guilder'),
(248, 'Nicaraguan córdoba'),
(249, 'New Taiwan dollar'),
(250, 'Iranian rial'),
(251, 'Surinamese dollar'),
(252, 'West African CFA franc'),
(253, 'Swiss franc'),
(254, 'Australian dollar');

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

DROP TABLE IF EXISTS `form`;
CREATE TABLE `form` (
  `id` int(11) NOT NULL,
  `sender` varchar(20) NOT NULL,
  `receiver` varchar(20) NOT NULL,
  `amount` int(11) NOT NULL,
  `currencyId` int(11) NOT NULL,
  `paymentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `name`) VALUES
(8, 'Visa Card'),
(9, 'Mastercard credit'),
(10, 'American Express'),
(11, ' Apple Pay'),
(12, 'Google Pay'),
(13, ' Alipay'),
(14, 'PayPal');

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

DROP TABLE IF EXISTS `records`;
CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alert`
--
ALTER TABLE `alert`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `currency`
--
ALTER TABLE `currency`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payment` (`currencyId`),
  ADD KEY `payment-id` (`paymentId`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alert`
--
ALTER TABLE `alert`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `currency`
--
ALTER TABLE `currency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `form`
--
ALTER TABLE `form`
  ADD CONSTRAINT `form_ibfk_1` FOREIGN KEY (`paymentId`) REFERENCES `payment` (`id`),
  ADD CONSTRAINT `payment` FOREIGN KEY (`currencyId`) REFERENCES `currency` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
