const {Request} = require('../models/request');
const createRequest =async()=>{
    try {
    const request = await Request.create({
      patientId: req.body.patientId,
      doctorId: req.body.doctorId,
      appointmentDate: req.body.appointmentDate,
      accepted: false
    });
    res.json(request);
  } catch (err) {
    res.json({ message: err });
  }
}
const deleteRequest =async()=>{
    
}

module.exports={
  createRequest,
  deleteRequest
}