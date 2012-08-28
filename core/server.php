<?php 

require_once("common.lib.php");

//use status code to respond to server requests

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') :
  /*its an ajax call */

endif;
//Do not respond to calls if they are not ajax

?>