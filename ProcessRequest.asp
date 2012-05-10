<%@ Language="VBScript"
Dim oSendMailer
Set oSendMailer = Server.CreateObject("SMTPsvg.Mailer")
 
oSendMailer.FromAddress = "pavanigbvs@gmail.com" 
oSendMailer.FromName = "Pavani g" 
oSendMailer.AddRecipient "Pavani V", "pavani.vaka@gmail.com" 
oSendMailer.RemoteHost = "mail.google.com" 
oSendMailer.Subject = "test" 
oSendMailer.ContentType="Text/HTML" 
oSendMailer.BodyText = htmlMess 
oSendMailer.SendMail
%>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        
    </body>
</html>
