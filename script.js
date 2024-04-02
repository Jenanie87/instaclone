let posts = [
    {
        "userIcon": "./img/profiles/news.jpg",
        "author": "nachrichtenportal",
        "time": 2,
        "location": "Berlin, Deutschland",
        "image": "./img/posts_image/lamas.jpg",
        "likes": 12430,
        "isLiked": false,
        "postPreview": "🎉 Die Lamas sind los! 🦙 ...",
        "post": "🎉 Die Lamas sind los! 🦙 Wer hat die Tür zum Lamas-Stall offen gelassen? 🚪 Jetzt sind sie überall - in der Küche, im Wohnzimmer, sogar auf dem Dach! 🏠🦙 Aber hey, wer braucht schon Langeweile, wenn man Lamas hat? 😂 #LamaAlarm #LamasÜbernehmenDieWelt #GangstaLamas",
        "showAmountComments": 281,
        "comments": [
            ['userxy_89!', 'Da ist aber was los'],
            ['john.doe2023', 'Wie konnte das denn passieren?😄']
        ]
    },
    {
        "userIcon": "./img/profiles/bella_grusel.png",
        "author": "bella.grusel",
        "time": 8,
        "location": "Willow Creek",
        "image": "./img/posts_image/sims.png",
        "likes": 1390,
        "isLiked": false,
        "postPreview": "🌟 Zuzzah booboosh! 😄🎮 Duvoolan zuwip vabadee! 🏡💫 Glimpflab gabado shifoo, tinkwab floo! 🌈💖 Larrabe si...",
        "post": "🌟 Zuzzah booboosh! 😄🎮 Duvoolan zuwip vabadee! 🏡💫 Glimpflab gabado shifoo, tinkwab floo! 🌈💖 Larrabe simbits gar't, momit mibasul noboo. 🎉👾 Bazoongle wibbly wobbly, zeebop zipzorp! 🚀🌌 Trizwop glarsim snubble snargle, zabidee wakoo! 🤖💥 Plumbob jibber jabber, weebly wobble! 🛸👽 Larrimbo crumplehorn, zibdab zobbly zop! 💫🎶 Simbish flabber shabbadoo, zibdab zibdab zibdab! 🎵🎈 Flibber flabber zippity zap, shaboing shaboing! 💥🎤 Wubba lubba dub dub, zazzle zibzab zorp! 🎵🌟 Crumplebottom wobblebottom, flibbity flobbity floop! 🎶🎩 Simlish zibber zobber, gabadoob zib! 🗣️💬 Sims plabbity plibbity, zibzab zop! 💬👄 Zobbity zibbity zibber zob, flibbity flabber! 🤪🗨️ Simmity sammy simsim sim, zibdab zibzab zorp! 🤔💬",
        "showAmountComments": 16,
        "comments": [
            ['jey015_liebt_sims', '💖💖💖'],
            ['k.knautschgesicht', 'Sul Sul 😄 Cummuns nala?']
        ]
    },
    {
        "userIcon": "./img/profiles/travel.jpg",
        "author": "travel&more",
        "time": 10,
        "location": "Färöer",
        "image": "./img/posts_image/traveljournal.jpg",
        "likes": 2694,
        "isLiked": false,
        "postPreview": "Ein Blick auf die unberührte Schönheit der Färöer lässt das Herz höher schlagen! 🏔️💙 Diese winzigen, aber unglaublich faszinierenden...",
        "post": "Ein Blick auf die unberührte Schönheit der Färöer lässt das Herz höher schlagen! 🏔️💙 Diese winzigen, aber unglaublich faszinierenden Inseln im Nordatlantik sind ein wahres Naturparadies. Von majestätischen Bergen über grüne Täler bis hin zu dramatischen Klippen bietet jede Ecke dieses Archipels eine atemberaubende Aussicht. 🌊✨ Tauche ein in die Magie der Färöer und lass dich von ihrer wilden Schönheit verzaubern! #Färöer #Naturwunder #Entdecken",
        "showAmountComments": 126,
        "comments": [
            ['sarah_haymatch9', '💖💖🏔️']
        ]
    },
];
load();


function render() {
    let postsContainer = document.querySelector('#posts');
    postsContainer.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        postsContainer.innerHTML += generatePostsInnerHTML(post, i);
        renderComments(post, i);
        renderLikes(post, i);
        renderRightHeart(i);
    }
}


function renderComments(post, i) {
    let commentsPosts = document.querySelector(`.comments${i}`);
    commentsPosts.innerHTML = '';

    for (let j = 0; j < post['comments'].length; j++) {
        const comment = post['comments'][j];
        commentsPosts.innerHTML += generateCommentsInnerHTML(comment);
    }
}


function renderLikes(post, i) {
    let likes = document.querySelector(`.like_line${i}`);
    let like = post['likes'];
    likes.innerHTML = generateLikesInnerHTML(like);
}


function generatePostsInnerHTML(post, i) {
    return /* HTML */ `
        <div class="post">
            <div class="headline">
                <div class="left_headline cursor_p">
                    <img class="img_headline" src="${post.userIcon}" alt="message icon">
                    <div class="text_headline">
                        <div class="author_location">
                            <p class="author">${post.author}</p>
                            <p class="sub_location">${post.location}</p>
                        </div>
                        <img class="dot" src="img/dot_icon.svg" alt="one dot">
                        <div>
                            <p class="time">${post.time} Std.</p>
                        </div>
                    </div>
                </div>
                <div class="right_headline">
                    <img class="invert_svg more_icon cursor_p" src="img/more_icon.svg" alt="three dots">
                </div>
            </div>
            <img class="img_post" src="${post.image}" alt="image post">
            <div class="main_post flex_c">
                <div class="icon_line">
                    <div class="icons_left">
                        <img onclick="changeHeart(${i})" id="heart_icon${i}" class="img_icon invert_svg cursor_p" src="img/posts_image/heart_icon.svg" alt="heart icon">
                        <img class="img_icon invert_svg cursor_p" src="img/posts_image/chat_icon.svg" alt="chat icon">
                        <img class="img_icon invert_svg cursor_p" src="img/posts_image/send_mail.svg" alt="message icon">
                    </div>
                    <div class="icon_right">
                        <img class="img_icon invert_svg cursor_p" src="img/posts_image/save_icon.svg" alt="save icon">
                    </div>
                </div>
                <div class="like_line${i}">

                </div>
                <div class="content_post">
                    <p class="p_margin content_text short_text${i}"><b>${post.author}</b> ${post.postPreview}<span onclick="changeText(${i})" id="moreText${i}" class="cursor_p color_grey"> mehr</span></p>
                    <p class="d_none p_margin content_text long_text${i}"><b>${post.author}</b> ${post.post}<span onclick="changeText(${i})" id="moreText${i}" class="cursor_p color_grey"> weniger</span></p>
                </div>
                <div class="amount_comments">
                    <p id="amount_comments${i}" class="p_margin color_grey cursor_p">Alle ${post.showAmountComments} Kommentare ansehen</p>
                </div>
                <div class="comments${i}">

                </div>
                <div id="input_comment">
                    <textarea onclick="showPostButton(${i})" id="input_comments${i}" class="input_comments" wrap="hard" type="text" rows="2" placeholder="Kommentieren..."></textarea>
                    <p onclick="addComment(${i})" id="post_comment${i}" class="post_comment cursor_p d_none"><b>Posten</b></p>
                </div>
            </div>
        </div>`;
}


function generateCommentsInnerHTML(comment) {
    return /* HTML */ `
        <p class="p_margin comment"><b>${comment[0]}</b> ${comment[1]}</p>`;
}


function generateLikesInnerHTML(like) {
    return /* HTML */ `
        <p class="p_margin like_text">Gefällt ${like} Mal</p>`;
}


// show post button
let input_comments = document.querySelector('.input_comments');

function showPostButton(i) {
    let post_comment = document.querySelector(`#post_comment${i}`);
    post_comment.classList.toggle('d_none');
}


// add Comment

function addComment(i) {
    let post = posts[i];
    let newComment = document.querySelector(`#input_comments${i}`).value;
    post['comments'].push(['jenanie_art', newComment]);
    document.querySelector(`#input_comments${i}`).value = '';
    renderComments(post, i);
    save();
    showPostButton(i);
}


// change heart to redHeart

function changeHeart(i) {
    let heartIcon = document.querySelector(`#heart_icon${i}`);

    if (heartIcon.src.match("heart_icon")) {
        heartIcon.src = "./img/posts_image/redHeart_icon.svg";
        heartIcon.classList.remove('invert_svg');
        posts[i].isLiked = true;
        addLikes(i);
    } else {
        heartIcon.src = "img/posts_image/heart_icon.svg";
        heartIcon.classList.add('invert_svg');
        posts[i].isLiked = false;
        removeLikes(i);
    }
}


//change text

function addLikes(i) {
    let post = posts[i];
    let number = post.likes;
    number++;
    post.likes = number;
    renderLikes(post, i);
    save();
}


function removeLikes(i) {
    let post = posts[i];
    let number = post.likes;
    number--;
    post.likes = number;
    renderLikes(post, i);
    save();
}


function changeText(i) {
    let shortText = document.querySelector(`.short_text${i}`);
    let longText = document.querySelector(`.long_text${i}`);
    shortText.classList.toggle('d_none');
    longText.classList.toggle('d_none');
}


function renderRightHeart(i) {
    let heartIcon = document.querySelector(`#heart_icon${i}`);

    if (posts[i].isLiked == true) {
        heartIcon.src = "./img/posts_image/redHeart_icon.svg";
        heartIcon.classList.remove('invert_svg');
    } else {
        heartIcon.src = "img/posts_image/heart_icon.svg";
        heartIcon.classList.add('invert_svg');
    }
}


function save() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);
}


function load() {
    let postsAsText = localStorage.getItem('posts');
    if (postsAsText) {
        posts = JSON.parse(postsAsText);
    }
}