//Part 3
const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')
const auth = {
    auth:{
        api_key:'ec6f8cd0762f141e543959870c93f0f9-9c988ee3-d13a84fa',
        domain:'sandbox3a3d8e251e794e73a288b903c7429843.mailgun.org'
    }
};
const transporter = nodemailer.createTransport(mailGun(auth));

//Part 4
const sendMail = (email , subject , text , cb)=>{
    const mailOptions = {
        from: email,
        to: 'mina.qolizadeh@hotmail.com',
        subject,
        text
    }; 
transporter.sendMail(mailOptions, function (err , data){
    if(err){
        cb(err,null);
    } else{
        cb(null, data);
    }
})
};

module.exports = sendMail; 