-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2022 at 07:16 AM
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
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `chart1`
-

-- --------------------------------------------------------

--
-- Table structure for table `humi`
--

CREATE TABLE `humi` (
  `ID` int(11) NOT NULL,
  `humi` int(11) NOT NULL,
  `time` TIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `humi`
--

INSERT INTO `humi` (`ID`, `humi`,`time`) VALUES
(1, 47,CURRENT_TIME);

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

CREATE TABLE `temp` (
  `ID` int(11) NOT NULL,
  `temp` int(11) NOT NULL,
  `time` TIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `temp`
--

INSERT INTO `temp` (`ID`, `temp`,`time`) VALUES
(1, 27,CURRENT_TIME);

-- --------------------------------------------------------

--
-- Table structure for table `transerdata`
--


--
-- Indexes for dumped tables
--

--
-- Indexes for table `chart1`
--

--
-- Indexes for table `humi`
--
ALTER TABLE `humi`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `temp`
--
ALTER TABLE `temp`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chart1`
--
--
-- AUTO_INCREMENT for table `humi`
--
ALTER TABLE `humi`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=631;

--
-- AUTO_INCREMENT for table `temp`
--
ALTER TABLE `temp`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=632;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
DELIMITER $$

CREATE TRIGGER Add_timeHumi
BEFORE INSERT ON humi
FOR EACH ROW
BEGIN
  SET NEW.time = CURRENT_TIME;
END $$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER Add_timeTemp
BEFORE INSERT ON temp
FOR EACH ROW
BEGIN
  SET NEW.time = CURRENT_TIME;
END $$

DELIMITER ;