// ***promises kya hai? ***
/* kuch code socho man mein, jo ki "async" code ho, matlab ki ye "side stack" mein jaayega
aur baad mei chalega "main stack" , ab ye socho ki aapne is code ko likha hai tho iska
answer kabhi aayega aur aisa bhi ho sakta hai ki eska answer naa aye,"promises" kya hai
aisa samjho ki aap promise ke andar koi bhi async code likhdo jo man mein aaye aur promise
aapko ek parchi dedeta hai and wo parchi par by default likha hota hai "waiting",parchi
par do "events" hota hai mainly ek event ka naam hai "then" aur ek event ka naam hai
"catch",aggr aapka data aagaya tho "parachi" pe "resolved"  likh jayega "waiting"
ki jagah and "then" chalega aur aggar data mein problem aayi tho "catch" chalega and
"waiting" ki jagah "rejected" likh jayega
*/

// *** callback function use kaise kare***
/*
callback pahli cheej to ek function hai ,aap es function mein woh sab likhdo jo aapko
chalaana ho jab answer aajaye, aur esse tabh chalao jab  aapka async code chal chuka ho

function doSomeAsyncTask(url,callback){
fetch(url).then(raw->raw.json()).then(result->{
//yaha pe function call ho gya hai
callback(result)
})
}

doSomeAsynctask("some url",function(){
  // yaha pe define kiya gya code
})


*/



/*
//****important****** /
->Event loop => event loop check krta hai 'main stack' empty hai
jai nhi aggr empty hota hai tho 'side stack' se value lekar 'main stack'
mai rakh diya jata hai
*/














