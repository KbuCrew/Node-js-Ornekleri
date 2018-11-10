// foreach exapmle

var tatlilar = ['kek','baklava','tiramisu','trilice','kabak','köstebek','sütlaç','kazandibi','malaga','güllaç'];

tatlilar.forEach(element => {
    console.log(element)
});

//array filter example

const result = tatlilar.filter(word => word.length > 3);
console.log('result',result)
 


