var obj =[
    {
        Name: "Joe doe",
        DOB: 1/06/1998,
        Mobileno: 9876543212,
        Email:"Joe@example.com",
        Gender: "Male",
        Nationality: "Indian",
        Language: "English,Kannada"
    },
    {
        Address:
        {
            Area:"Shati nagar",
            City:"Jamkhandi",
            District:"Bagalkot",
            State:"Karnataka",
            Pincode:587301    
        }
    },
    {
        Education:
        {
            Institution:"Kle Dr.MSSCET Belagavi",
            Degree:"BE",
            Stream:"Mechanical Engineering",
            YearOfPassing:2020,
            Percentage:71
        }
    },
    {
        TechnicalSkills:"Basics of c and java programming",
        Strength:"Fast learner, Flexible, Team worker",
        Hobbies:"Playing sports, Listing to music"
    }

]

obj.forEach((element)=>{
    console.log(element);
});