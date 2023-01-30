//without using async await
/*console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('ticket');
    }, 3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
   console.log('wife: i have the tics')
console.log('husband: we should go in');
console.log('wife: no i am hungry');
return new Promise((resolve, reject) => resolve(`${t} popcorn`) );
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    console.log('husband: anything else');
    console.log('wife: yes am thursty');
    return new Promise((resolve, reject) => resolve(`${t} butter`) );
    });
    
    const getColddrinks = getButter.then((t) => {
        console.log(`husband: i bought colddrinks`);
        console.log(`husband: its getting late anything else you want`);
        console.log(`wife: no`);
        console.log(`husband:lets go`);
        return new Promise((resolve, reject) => resolve(`${t} Colddrinks`) );
    });


getButter.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket'); */

/*//using async await
console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async () =>  {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColddrinks = new Promise((resolve, reject) => resolve(`colddrinks`));


    let ticket = await promiseWifeBringingTicks;

   console.log('wife: i have the tics');
   console.log('husband: we should go in');
   console.log('wife: no i am hungry');

   let popcorn = await getPopcorn;

   console.log('husband: i got some popcorn');
   console.log('husband: we should go in');
   console.log('wife: i need butter on my popcorn');

   let butter = await addButter;

   console.log(`husband: i got some ${butter} on popcorn`);
   console.log(`husband: anything else darling?`);
   console.log(`wife: yes baby am thursty`);
   console.log(`husband: thank you for the reminder *grins*`);

   let colddrinks = await getColddrinks;
   console.log(`husband: i bought colddrinks`);
   console.log(`husband: its getting late anything else you want`);
   console.log(`wife: no`);
   console.log(`husband:lets go`);


   return ticket;
};
preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket'); */


//promise.all
console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async () =>  {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColddrinks = new Promise((resolve, reject) => resolve(`colddrinks`));


    let ticket = await promiseWifeBringingTicks;
let [popcorn, butter, colddrinks] = await Promise.all([getPopcorn,getButter,getColddrinks])
console.log(`${popcorn}, ${butter}, ${colddrinks}`)


   return ticket;
};
preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket'); 

