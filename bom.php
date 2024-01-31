<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $mobile = $_POST["mobile"];
  $email = $_POST["email"];
  $companyName = $_POST["companyName"];

  $targetDir = "uploads/";
  $targetFile = $targetDir . basename($_FILES["bomFile"]["name"]);

  // Check if file is uploaded successfully
  if (move_uploaded_file($_FILES["bomFile"]["tmp_name"], $targetFile)) {
    $mail = new PHPMailer(true);

    try {
      // Server settings
      $mail->isSMTP();
      $mail->Host = 'smtp.example.com';  // Specify your SMTP server
      $mail->SMTPAuth = true;
      $mail->Username = 'your@example.com';  // SMTP username
      $mail->Password = 'your_password';  // SMTP password
      $mail->SMTPSecure = 'tls';
      $mail->Port = 587;

      // Recipients
      $mail->setFrom('from@example.com', 'Your Name');
      $mail->addAddress('to@example.com', 'Recipient Name');

      // Attach BOM file
      $mail->addAttachment($targetFile);

      // Content
      $mail->isHTML(true);
      $mail->Subject = 'BOM Inquiry Form Submission';
      $mail->Body    = "Name: $name <br> Mobile: $mobile <br> Email: $email <br> Company Name: $companyName";
      
      $mail->send();
      echo 'Message has been sent';
    } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>
