<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Set up PHPMailer
  $mail = new PHPMailer(true);
  // Add your PHPMailer configuration here

  // Handle form submission
  $name = $_POST["name"];
  $mobile = $_POST["mobile"];
  $email = $_POST["email"];
  $companyName = $_POST["companyName"];
  $layer = $_POST["layer"];
  $cNos = $_POST["cNos"];
  $bomFile = $_FILES["bomFile"];

  try {
    // Server settings
    $mail->isSMTP();
    // Add your SMTP configuration here

    // Recipients
    $mail->setFrom('from@example.com', 'Your Name');
    $mail->addAddress('to@example.com', 'Recipient Name');

    // Attach BOM file
    $mail->addAttachment($bomFile["tmp_name"], $bomFile["name"]);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'PCB Design Quote Form Submission';
    $mail->Body    = "Name: $name <br> Mobile: $mobile <br> Email: $email <br> Company Name: $companyName <br> Layer: $layer <br> Component Nos: $cNos";
    
    $mail->send();
    echo '<div class="alert alert-success" role="alert">Message has been sent successfully.</div>';
  } catch (Exception $e) {
    echo '<div class="alert alert-danger" role="alert">Message could not be sent. Mailer Error: ' . $mail->ErrorInfo . '</div>';
  }
}
?>
