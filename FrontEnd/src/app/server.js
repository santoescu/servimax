
require('dotenv').config();
const nodemailer = require ('nodemailer');

var destino = "";

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ceq930127@gmail.com',
        pass: '930127ab'
    }
});

let mailOptions = {
    from: 'ceq930127@gmail.com',
    to: destino,
    subject: 'Prueba',
    text: 'Esto es una prueba'
}

transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log('Ocurrió un error', err);
    } else {
        console.log('Email enviado');
    }
});

function setDestino (destino){
    this.destino = destino;

}