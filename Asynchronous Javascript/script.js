//Asynch js
// *** ye sabhi use hi tab kiye jaate hai jab aapko kuch aisa karna ho jismain time lagega
//1)settimeout ->settimeout ka code kuch der baat chalta hai

/*console.log("hey 1");
console.log("hey 2")
setTimeout(() => {
  console.log("hey 3")
}, 2000);
console.log("hey 4");
*/

//2)setinterval->setinterval ka code kuch der baad chalta hai baar baar ek particuler interval time mein

/*
var i=1
setInterval(() => {
console.log("hello")
}, 2000);*/

/*
var count=1;
let finalcall=setInterval(() => {
  console.log(`count ${count}`)
  if(count===3){
    clearInterval(finalcall)
  }
  count++;
}, 2000);
*/

//3)Fetch API -> ye kissi aur url par jaa kar kuch data laayega{frontend main ye kaam hota hai}
// let see kyo use krte hai :-kyuki ye internet pe jayega aur data ko lekar ayega to ismein
//time lagta hai  to by default hi js mein fetch ko async banaaya gaya hai kyuki fetch ka kaam hai
// data laana wo bhi kissi url se ab aisa ho sakta hai ki uss website ki url slow ho aur data laane mein time lagega
//tho aggr "synchronious" hota tho uske baad ka code tab tak nhi chlta jab tak data na aw jaye jo ki big problem ho
//skthi thi jisse pura code atak jata aur run nhi hota aur error deti
//  ya {backend main jab use krte hai tab ye hota hai ki ->data humaare paas se uss url par lekar jaayega }

/* fetch->data fetch krta hai aur "".then "" data aya ki nhi ensure krta hai
   ,aggar '.then' mein code direct likhte ho aapk result milta hai 'machine language" mein jha aap code read nhi kr
   skte ho

   fetch(`https://randomuser.me/api/`).then(raw=>console.log(raw))
*/

/*//pehle aapko data convert krna hota hai "human readable form maintain" help of ".json"
aur important baat "fethc().then()" ek saat lagega "ek .then() mein convert kiya human form language mein aur dusri ".then"
mein resutl show kiya aur important baat first ".then" jo value return kiya woh value "second .then" koi bhi naam
ke 'parameter" ne store kr liya


fetch(`https://randomuser.me/api/`).then(raw=>raw.json()).then(readable=>console.log(readable.results[0].gender))



*/

// 4)Axios (or other http libraries) ->ye bhi wahi krega jo fetch krta hai but ye thora zyada developer friendly hai
//esko use krne se pehle "axios" ki libraries set krna hota hai

/*

axios.get(`https://randomuser.me/api/`).then(value=>console.log(value.data.results[0].gender));

*/

// 5)Promise->ye janaab ke andar jo code likhoge wo apna kaam karega aur ye khud side stack mein chale jaayege uss code ko lekar aur jab andar se code 'resolve' kiya jayega tab ye chalega

/*

// promise ko run krne ke baad kissi variable mein store kr dena uske baad call krne ke liye '.then' function mein 'function'
// ka use krna aur 'catch' main bhi 'function' use krna but 'dono ko ek saat use krna hota hai' like '.thne().catch()

const prachi=new Promise((resolve,reject)=>{
  fetch(`https://randomuser.me/api/`).then(raw=>raw.json())
  .then(readable=>{
    if(readable.results[0].gender==="male") resolve();
    else reject();
  })


})

prachi.then(()=>console.log('true')).catch(()=>console.log('false'));

*/


//6) Callbacks:->
//callback bhi ek function hai jisse pass kiya gya ho kissi aur function mein aur jab woh
// function chle to aap uss pass kiye gaye callback function ko chala paayege

/*
function doSomeAsyncTask(url,callback){
  fetch(url).then(raw=>raw.json()).then(result=>{
  //yaha pe function call ho gya hai
  callback(result)
  })
  }

  doSomeAsyncTask("https://randomuser.me/api/",function(result){
    // yaha pe define code
    console.log(result)

  })

*/


//7) Async/Await - koi bhi function bana lo and uske andar jo man mein aaye wo 'async' code likhdo, ab jab aap async
// code likhdo,ab jab aap async likhte ho to baad waali line pahle chal jaati hai kyoki 'async' side stack pe hota hai
// aur baad waali line aggr "async" ke basis par hui tho aapka code fail ho jaayega, wo isliye kyuki aapka code
// depend krta hai async code par jo ki baad mein chalega 'sync'code chalne ke baad

/* //
var a=fetch()  //asynchronous
   console.log(a) //it is synchronous and run 'first' without waiting asynchronously code and give error
*/

//with 'async await' aap async code bhi aise likh skte ho jaise ki aap normal synchronous code likh rahe ho

/*
async function abcd() {
    let a=await fetch(`https://randomuser.me/api/`);
    result=await a.json();
    console.log(result);
}
abcd();
*/

// 8) Generator
// ->jab aap execution krna chahoge tab execution hoga code .genrator bnane ke liye aapko 'function ke aage start lagana hota hia aur jab aap `.next` krte ho tab first `yield` tak chlta hai dobara krne pe `second` yield tk chlta hai'

/*
function* printnum(){
  console.log("first one");
  yield 1;
  console.log("second one");
  yield 2;
}

const ans=printnum();
console.log(ans.next().value);
console.log(ans.next().value);
*/










































