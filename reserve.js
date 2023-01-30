const articlesFromAPI = [
        {
            id: 0,
            author_img: "./img.png",
            authors_name: "Matthew Mpoke Bigg",
            topic: "Russian Invasion of Ukraine (2022)",
            date: "28 January",
            title: "Russia and Ukraine Battle for Control of Villages Near the Key City of Bakhmut",
            summary:"The area is a flash point in an offensive that Moscow views as crucial for its goal of seizing the Donbas region of eastern Ukraine.",
            src: "./Ukraine.jpeg"
        },
        {
            id: 1,
            author_img: "./img.png",
            authors_name: "Raja Abdulrahim",
            topic: "Palestinians",
            date: "28 November",
            title: "Palestinian Man Fatally Shot as Violence Continues With Israeli Forces",
            summary:"Tensions and violence have gripped the Israeli-occupied West Bank and Jerusalem for days after an Israeli military raid on Thursday killed 10 people.",
            src: "./palestine.jpeg"
        },
        {
            id: 2,
            author_img: "./img.png",
            authors_name: "Rick Rojas",
            topic: "Black People",
            date: "28 March",
            title: "Memphis Police Disband Unit Whose Officers Were Charged in Tyre Nichols’s Death",
            summary: "Mr. Nichols’s family and activists had demanded the scuttling of the group, the Scorpion unit, which patrolled high-crime areas of the city.",
            src: "./black_man.jpeg"
        },
    ]
    article = ` <div id="main" class="d-flex flex-row">
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-row justify-content-start gap-4 align-items-center">
                            <img class="authors_photo" src="authors_photo" alt="authors_photo"/>
                            <p id="authors_name"></p>
                            <p id="topic_name"></p>
                            <p id="date"></p>
                        </div>
                        <div class="mid">
                            <h2 id="title"></h2>
                            <p id="body"></p>
                        </div>
                    </div>
                    <img class="images" src="images" alt="images"/>
                </div>`;

const articles = document.getElementById('articles');
articlesFromAPI.forEach((item) => {
    let newArticle = article.replace(`src="authors_photo"`, `src="${item.author_img}"`);
    newArticle = newArticle.replace(`id="authors_name">`, `id="authors_name">${item.authors_name}`);
    newArticle = newArticle.replace(`id="topic_name">`, `id="topic">${item.topic}`);
    newArticle = newArticle.replace(`id="date">`, `id="date">${item.date}`);
    newArticle = newArticle.replace(`id="title">`, `id="title">${item.title}`);
    newArticle = newArticle.replace(`id="body">`, `id="summary">${item.summary}`);
    newArticle = newArticle.replace(`src="images"`, `src="${item.src}"`)

    articles.innerHTML += newArticle;

})