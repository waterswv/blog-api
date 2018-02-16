let nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'bryans.furniture2017@gmail.com',
        pass: 'Mierke2019'
    }
});

function index(req, res) {
  res.json({
    description: "This API provides data to my blog API",
    gitHub: "https://github.com/waterswv/blog-api",
    endPoints: "Coming Soon"
  });
}

function create(req, res){
  let data = req.body;
  console.log(data);
  const mailOptions = {
    from: data.email, // sender address
    to: 'blog@bryanmierke.com', // list of receivers
    subject: data.name + ' submitted a form on BryanMierke.com', // Subject line
    html: data.message + ' The request came from the following email: ' + data.email // plain text body
    };
  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       console.log(err)
     else
       console.log(info);
       res.json('success');
  });

}

module.exports = {
  index: index,
  create: create
};
