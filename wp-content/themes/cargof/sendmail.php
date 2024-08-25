<?php

require './src/PHPMailer.php';
require './src/SMTP.php';
require './src/Exception.php';
use PHPMailer\PHPMailer\PHPMailer;
$mail = new PHPMailer();

// $mail->IsSMTP();
$mail->CharSet = 'UTF-8';

// $mail->Host       = "smtp.yandex.ru";
// $mail->SMTPDebug  = 0;
// $mail->SMTPAuth   = true;
// $mail->Port       = 587;
// $mail->Username   = "";
// $mail->Password   = "";

$mail->setFrom('test@testtt.space');   
$mail->addAddress('tps_szfo01@scmgl.ru');

$mail->isHTML(true);
$mail->Subject = 'Новая заявка';
$mail->Body    = print_r($_POST, true);

header('Content-Type: application/json; charset=utf-8');

echo json_encode(array(
    'success' => $mail->send()
));