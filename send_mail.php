<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// $reciver_Email = "micro@microplacer.com";
$reciver_Email = "kingkiller22122002@gmail.com";
$reciver_Phone = 918160449226;
// $reciver_Phone = 918866188126;

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Process form data
    $formData = array(
        "baseMaterial" => $_POST["baseMaterial"],
        "castellated_holes" => $_POST["castellated_holes"],
        "color" => $_POST["color"],
        "delivery_format" => $_POST["delivery_format"],
        "dimensionX" => $_POST["dimensionX"],
        "dimensionY" => $_POST["dimensionY"],
        "email" => $_POST["email"],
        "gold_finger" => $_POST["gold_finger"],
        "layer" => $_POST["layer"],
        "mobile" => $_POST["mobile"],
        "outer_copper" => $_POST["outer_copper"],
        "panel_column" => $_POST["panel_column"],
        "panel_row" => $_POST["panel_row"],
        "quantity" => $_POST["quantity"],
        "remark" => $_POST["remark"],
        "surface_finish" => $_POST["surface_finish"],
        "thickness" => $_POST["thickness"]
    );

    // File upload handling
    if (isset($_FILES["gerberFile"])) {
        $targetDir = __DIR__ . '/uploads/';
        $randomNumber = rand(1000, 9999); // You can adjust the range as needed
        $timestamp = time();
        $fileName = str_replace(' ', '-', pathinfo($_FILES["gerberFile"]["name"], PATHINFO_FILENAME));
        $fileExtension = pathinfo($_FILES["gerberFile"]["name"], PATHINFO_EXTENSION);
        $fileName = basename($fileName) . '-' . $randomNumber . $timestamp . '.' . $fileExtension;
        $targetFilePath = $targetDir . $fileName;

        // Move the uploaded file to the server
        if (move_uploaded_file($_FILES["gerberFile"]["tmp_name"], $targetFilePath)) {
            // File uploaded successfully
            $fileLink = "https://jlcpcb.in/uploads/" . $fileName;

            // Create PHPMailer instance
            $mail = new PHPMailer(true);

            try {
                // SMTP configuration
                $mail->isSMTP();
                $mail->Host = 'mail.circuitwale.com';
                $mail->SMTPAuth = true;
                $mail->Username = 'info@circuitwale.com';
                $mail->Password = 'rVeximWG59DP';
                $mail->SMTPSecure = 'ssl';
                $mail->Port = 465;

                // Sender and recipient
                $mail->setFrom('info@circuitwale.com', 'Circuitwale');
                $mail->addAddress($reciver_Email, 'Recipient Name');

                // Email content with form data and file link
                $mail->isHTML(true);
                $mail->Subject = 'PCB Quote Request';
                $mail->Body = '<!DOCTYPE html>
                               <html lang="en">
                               <head>
                                   <meta charset="UTF-8">
                                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                   <title>PCB Quote Request</title>
                               </head>
                               <body>
                                   <p>We have received a PCB quote request with the following details:</p>        
                                   <ul>
                                       <li><strong>Base Material:</strong> ' . $formData["baseMaterial"] . '</li>
                                       <li><strong>Castellated Holes:</strong> ' . $formData["castellated_holes"] . '</li>
                                       <li><strong>Color:</strong> ' . $formData["color"] . '</li>
                                       <li><strong>Delivery Format:</strong> ' . $formData["delivery_format"] . '</li>
                                       <li><strong>Dimension X:</strong> ' . $formData["dimensionX"] . '</li>
                                       <li><strong>Dimension Y:</strong> ' . $formData["dimensionY"] . '</li>
                                       <li><strong>Email:</strong> ' . $formData["email"] . '</li>
                                       <li><strong>Gold Finger:</strong> ' . $formData["gold_finger"] . '</li>
                                       <li><strong>Layer:</strong> ' . $formData["layer"] . '</li>
                                       <li><strong>Mobile:</strong> ' . $formData["mobile"] . '</li>
                                       <li><strong>Outer Copper:</strong> ' . $formData["outer_copper"] . '</li>
                                       <li><strong>Panel Column:</strong> ' . $formData["panel_column"] . '</li>
                                       <li><strong>Panel Row:</strong> ' . $formData["panel_row"] . '</li>
                                       <li><strong>Quantity:</strong> ' . $formData["quantity"] . '</li>
                                       <li><strong>Remark:</strong> ' . $formData["remark"] . '</li>
                                       <li><strong>Surface Finish:</strong> ' . $formData["surface_finish"] . '</li>
                                       <li><strong>Thickness:</strong> ' . $formData["thickness"] . '</li>
                                       <li><strong>File :</strong> ' . $fileLink.'</li>
                                   </ul>
                               </body>
                               </html>';

                // Send email
                if ($mail->send()) {
                    // WhatsApp message generation
                    $whatsappMessage = "PCB Price Calculator\n";
                    $whatsappMessage .= "Base Material: " . $formData["baseMaterial"] . "\n";
                    $whatsappMessage .= "Castellated Holes: " . $formData["castellated_holes"] . "\n";
                    $whatsappMessage .= "Color: " . $formData["color"] . "\n";
                    $whatsappMessage .= "Delivery Format: " . $formData["delivery_format"] . "\n";
                    $whatsappMessage .= "Dimension X: " . $formData["dimensionX"] . "\n";
                    $whatsappMessage .= "Dimension Y: " . $formData["dimensionY"] . "\n";
                    $whatsappMessage .= "Email: " . $formData["email"] . "\n";
                    $whatsappMessage .= "Gold Finger: " . $formData["gold_finger"] . "\n";
                    $whatsappMessage .= "Layer: " . $formData["layer"] . "\n";
                    $whatsappMessage .= "Mobile: " . $formData["mobile"] . "\n";
                    $whatsappMessage .= "Outer Copper: " . $formData["outer_copper"] . "\n";
                    $whatsappMessage .= "Panel Column: " . $formData["panel_column"] . "\n";
                    $whatsappMessage .= "Panel Row: " . $formData["panel_row"] . "\n";
                    $whatsappMessage .= "Quantity: " . $formData["quantity"] . "\n";
                    $whatsappMessage .= "Remark: " . $formData["remark"] . "\n";
                    $whatsappMessage .= "Surface Finish: " . $formData["surface_finish"] . "\n";
                    $whatsappMessage .= "Thickness: " . $formData["thickness"] . "\n";
                    $whatsappMessage .= "file: " .$fileLink."\n";
                    // Construct WhatsApp API link
                    $whatsappLink = "https://api.whatsapp.com/send?phone=+" . $reciver_Phone . "&text=" . urlencode($whatsappMessage);
                    // Your data to be sent as JSON
$data = array(
    'status' => 'success',
    'message' => 'Redirect to WhatsApp API link',
    'whatsappLink' => $whatsappLink
);

// Set the content type to JSON
header('Content-Type: application/json');

// Encode the data as JSON and echo it
		    echo json_encode($data);

                    exit; // Exit to prevent further execution after redirection
                } else {
                    echo "Failed to send email. Error: {$mail->ErrorInfo}";
                }
            } catch (Exception $e) {
                echo "Failed to send email. Error: {$mail->ErrorInfo}";
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "No file uploaded.";
    }
}
