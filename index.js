// foreach exapmle

var tatlilar = ['kek','baklava','tiramisu','trilice','kabak','köstebek','sütlaç','kazandibi','malaga','güllaç'];

tatlilar.forEach(element => {
    console.log(element)
});

//array filter example

const result = tatlilar.filter(word => word.length > 3);
console.log('result',result)

// array find example 

const diller = [
    {
        isim:"ingilizce",
        ülke:"ingiltere"
    },
    {
        isim:"türkçe",
        ülke:"türkiye"
    },
    {
        isim:"almanca",
        ülke:"almanya"
    },
    {
        isim:"fransızca",
        ülke:"fransa"
    },
    {
        isim:"japonca",
        ülke:"japonya"
    }
]

const sonuc = diller.find(x => x.isim == "ingilizce");
console.log(sonuc);