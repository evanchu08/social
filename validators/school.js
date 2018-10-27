const validator = require('validator');
const isEmpty = require('./is-empty');

 const validateSchool = (data) =>{
    let errors = {};
    data.school = isEmpty(data.school) ? '' : data.school;
    data.degree = isEmpty(data.degree) ? '' : data.degree;
    data.from = isEmpty(data.from) ? '' : data.from;
    data.fieldofstudy = isEmpty(data.fieldofstudy) ? '' : data.fieldofstudy;
   
    if (validator.isEmpty(data.school)){
        errors.school = 'school is required'
    }
    
  
    if (validator.isEmpty(data.degree)){
        errors.degree = 'degree is required'
    }
    
    if (validator.isEmpty(data.fieldofstudy)){
        errors.fieldofstudy = 'Field of study is required'
    }
    
    if (validator.isEmpty(data.from)){
        errors.from = 'From date is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateSchool