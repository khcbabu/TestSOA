<?php 
 $email = $_REQUEST['mail'] ;
   $subject = $_REQUEST['subject'] ;
   $message = $_REQUEST['message'] ;
   mail("pavanigbvs@gmail.com", $subject,
   $message, "From:" . $email);
   echo "Thank you for using our mail form"; 
 if($sent) 
 {echo "Your mail was sent successfully"; }
 else 
 {echo "We encountered an error sending your mail"; }
 ?> 