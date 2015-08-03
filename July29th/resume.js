var resume ={
  firstname: 'Paul',
  lastname: 'Siskind',
  experiance:{
     work:{
           company: 'Venture Industries',
           'Start Date': '1/3/87',
           'End Date': 3/5/95,},
     references:{
            firstname: 'Chris',
            lastname: 'Smith',
            phoneNumber: '555-555-5555',},
  CompanyAddresses:{
     Venture Industries: {
            address: "333 Venutre Way",
            city: 'San Diego',
            state: 'CA',
            zip: '87321'
     }
  }

     }

  }
}

function name(resume){
  console.log(resume.firstname + ' ' + resume.lastname);
}

function company(resume){
  console.log(resume.experiance.company + ' ' + resume.experiance.references.firstname + ' ' resume.expiance.lastname);
  console.log(resume.experiance.references.phoneNumber);
}

function Print(resume){
  console.log(resume);
}