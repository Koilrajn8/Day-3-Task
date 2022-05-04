//JSON iterate over all for loops(for,for in,for of,forEach)
//for loop
var obj =[ {
    name:"Raja",
    age:24,
    company:"abcd"
}
]

for(var i=0; i<obj.length; i++)
{
    console.log(`
    ${obj[i].name}
    ${obj[i].age}
    ${obj[i].company}
    `);
}

//forIn loop 
for(var key in obj)
{
    console.log(`
    ${obj[key].name}
    ${obj[key].age}
    ${obj[key].company}
    `)
}

//forEach loop
obj.forEach((element)=>{
    console.log(element);
})

//forOf loop
for(var i of obj)
{
    {
        console.log(`
        ${i.name}
        ${i.age}
        ${i.company}
        `);
    }
}