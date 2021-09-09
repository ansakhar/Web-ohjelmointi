<?php
session_start();
 
if (isset($_SESSION['laskuri'])) {
   $_SESSION['laskuri']++;
} else {
   $_SESSION['laskuri'] = 1;
}
 
echo("Olet vieraillut täällä <b>{$_SESSION['laskuri']}</b>kertaa!");
?>