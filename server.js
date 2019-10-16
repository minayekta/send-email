//Part 1
const express = require ('express');
const app = express();
const sendMail = require('./mail')
const path = require ('path');
const log = console.log
const PORT = 8080;

app.use(cors());
//Part2
//data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
// email, subject , text

app.post('/email' , (req,res) =>{
    //todo
    //send email here
    const {subject , email , text} = req.body;
    console.log('Data:', req.body);

    sendMail(email, subject, text, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});



app.get('/' , (req , res)=>{
    res.sendFile(path.join(__dirname , 'views' , 'index.html'));
});




app.listen(PORT, ()=>{
    console.log('service is stating on PORT', 8080);
});



