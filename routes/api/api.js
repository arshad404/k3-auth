const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: 'working' });
});

router.post('/get_user_attendance', (req, res) => {
    console.log(req.body);

    let error = {email:null, rollno:null};

    if(req.body.email == '') {
        error.email = 'Email is required';
        res.json({ message:'Some Fields are missing', error: error.email });
    } else if(req.body.rollno == ''){
        error.rollno = 'Rollno is required';
        res.json({ message: 'Some fields are missing', error: error.rollno});
    } else {
        let useratt = {
            email: req.body.email,
            rollno: req.body.rollno,
            location: { lat: req.body.lat, long: req.body.long },
            inTime: req.body.inTime,
            outTime: req.body.outTime
        }
        
        User.findOne({email: useratt.email, rollno: useratt.rollno, inTime: useratt.inTime}, (err, isPresent) => {
            if(err)
                res.json({message: 'Some error occured', error:'Please try again'});
            if(isPresent)
               res.json({message: 'Your attendance has been marked already', error: ''});
            else{
                User.create(useratt, (err, useratt) => {
                    if (err)
                        res.json({ message: 'Some error occured', error: err });
                    res.json({ message: 'Attendance is marked, thank you', error: '' });
                });
            }
        });
    }
});

module.exports = router;