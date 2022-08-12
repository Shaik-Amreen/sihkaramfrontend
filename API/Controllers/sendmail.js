const nodemailer = require("nodemailer")

let mailTransporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
        user: "arikya.hak@gmail.com",
        pass: "msatbnhnozoxvksu",
    },
    secureConnection: true,
    tls: {
        rejectUnauthorized: false,
        secureProtocol: "TLSv1_method",
    },
})

function sendmail(mailDetails, collectmail) {
    mailTransporter.sendMail(mailDetails, function (err7, data) {
        if (err7) {
            return true
        }
        else {
            return false
        }
    })
}



module.exports = sendmail

