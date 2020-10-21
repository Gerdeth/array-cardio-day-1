const inventors =[
    { first: 'Albert', last:'Einstein', year: 1819, passed:1955},
    { first: 'Issac', last:'Newton', year: 1643, passed:1727},
    { first: 'Galileo', last:'Galilei', year: 1564, passed:1642},
    { first: 'Marie', last:'Curie', year: 1867, passed:1934,},
    { first: 'Johannes', last:'Kepler', year: 1571, passed:1630},
    { first: 'Nicolaus', last:'Copernicus', year: 1473, passed:1543},
    { first: 'Max', last:'Planck', year: 1858, passed:1947},
];

  
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const fifteen= inventors.filter(inventor=> (inventor.year >= 1500 && inventor.year<1600))
 console.log(fifteen)

const names = inventors.map(inventor => inventor.first + ' ' + inventor.last)
console.log(names)

const birthDate= inventors.sort((a,b) =>{
    return a.year-b.year
});
console.table(birthDate)

const totalAges= inventors.reduce((total,inventor)=>{
    return total +(inventor.passed - inventor.year)
},0);
console.log(totalAges);

const yearsLived= inventors.sort(function (a, b){
    const guy = a.passed - a.year;
    const guy2= b.passed - b.year;
    return guy > guy2 ? -1 : 1;
});
console.table(yearsLived)

const AlpaLastName= people.sort(function(person, next){
    const [alast,afirst]= person.split(', ')
    const [blast,bfirst]= person.split(', ')
    return alast>blast? -1: 1;
    
});
console.log(AlpaLastName);

const data= ["Banana", "Orange", "Apple", "Mango","Mango", "Pear", "Mango", "Apple","Banana", "Orange", "Apple", "Mango","Mango", "Pear", "Mango", "Apple"];

const sumData=data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item]=0;
    }
    obj[item]++;
    return obj;
},{});
console.log(sumData);


