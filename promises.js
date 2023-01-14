const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}<li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            posts.push({...post, createdAt: new Date().getTime()});
            const error = false;
            if(!error) {
                resolve();
            } else {
            }
            }, 2000);
        
    });
}

const user =  {
    username: 'Aishwary',
    lastActivityTime: '2nd of September'
}
function updateLastActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime)
        }, 1000)
    })
}

//createPost({ title:'Post Three', body:'This is post three'})
//.then(getPosts)
//.catch(err => console.log(err));



function deletePost(){
    return new promise ((resolve,reject) => {
        setTimeout( () => {
            if(posts.length >0){
                const lastelement = posts.pop()
                resolve(lastelement);
            } else {
                reject('Array is empty now');
            }
        },1000);
    });
}

createPost({ title:'Post Three', body:'This is post three'})
.then(() => {
    getPost()
    deletePost().then((deletedElement)=> {
        console.log(deletedElement)
getPost();
deletePost().then(()=> {
    getPost();
    deletePost().then(()=> {
        getPost();
        deletePost().then(()=> {})
        .catch((err)=>{
            console.log('Inside catch block', err)
        }) 
            }).catch((err) => {})
    
            }).catch((err) => {})
        
        })
    
})
.catch(err => console.log(err))

