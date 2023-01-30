// const articlesFromAPI = [
//     {
//         id: 0,
//         title: '7 Practical CSS Tips',
//         summary:'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
//         src: "./1.png",
//     },
//     {
//         id: 1,
//         title: '7 Practical CSS Tips',
//         summary: `Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
//         You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...`,
//         src: "./2.png",
//     },
//     {
//         id: 2,
//         title: '7 Practical CSS Tips',
//         summary: `Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
//         You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...`,
//         src: "./3.png",
//     },
// ];
let article = document.getElementById('main')
// article = `<div class="m-5 d-flex justify-content-between">
// <div class="left_part">
//     <div class="top">
//         <img src="" alt="authors_photo"/>
//         <p id="authors_name"></p>
//         <p id="topic_name"></p>
//         <p id="date"></p>
//     </div>
//     <div class="mid">
//         <h2 id="title"></h2>
//         <p id="body"></p>
//     </div>
// </div>
// <img src="" alt="image"/>
// </div>`;

// const articles = document.getElementById('articles');
// articlesFromAPI.forEach((item) => {
//     let newArticle = article.replace(`id="title">`, `id="title">${item.title}`);
//     newArticle = newArticle.replace(`id="summary">`, `id="summary">${item.summary}`);
//     newArticle = newArticle.replace(`src=""`, `src="${item.src}"`)
//     articles.innerHTML += newArticle;

// })

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response)=>response.json())
// .then(function(data){
//     console.log(data.slice(0,5))
//     data.slice(0,5).forEach(item=>{
//         article.innerHTML +=`<div class="m-5 d-flex justify-content-between">
//         <div class = "me-5">
//             <p>Authors name in Topics name</p>
//             <p id="title">${item.title} </p>
//             <p id="summary"> </p>
//         </div>
//         <img src="" alt="article_img"/>
//     </div>`;
//     })
// })

async function getMostViewed() {
    const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ssilAWb2yTja3slXjrkhR2PpKb0ht40x')
    const articles = await response.json()
    .then(function(data){
        console.log(data.results.splice(0,5))        
        data.results.splice(0,5).forEach(item=>{
            article.innerHTML +=`<div class="m-5 d-flex justify-content-between">
                                    <div class="left_part">
                                        <div class="d-flex flex-row mb-3 justify-content-evenly">
                                            <img src="" alt="authors_photo"/>
                                            <p id="authors_name">${item.byline }</p>
                                            <p id="topic_name">${item.des_facet[0] }</p>
                                            <p id="date">${item.created_date}</p>
                                        </div>
                                        <div class="mid">
                                            <h2 id="title">${item.title}</h2>
                                            <p id="body">${item.abstract}</p>
                                        </div>
                                    </div>
                                    <img src="${item.multimedia[0]}" alt="image"/>
                                </div>`;

        })

    })
    .catch(e=>console.log(e))
}
getMostViewed()





            // `<div class="m-5 d-flex justify-content-between">
            // <div class="left_part">
            //     <div class="top">
            //         <img src="" alt="authors_photo"/>
            //         <p id="authors_name"></p>
            //         <p id="topic_name"></p>
            //         <p id="date"></p>
            //     </div>
            //     <div class="mid">
            //         <h2 id="title"></h2>
            //         <p id="body"></p>
            //     </div>
            // </div>
            // <img src="" alt="image"/>
            // </div>`;
            
            // 