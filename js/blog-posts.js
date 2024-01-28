const posts = [
    {
        title: "Samurai",
        date: "2024-01-21",
        content: `
        <p> Samurai were amazing because they were not only elite warriors during the eras in which wars were more common but they were also often tasked with the role of a tactician.</p>
        <p>Many a battle was won by wits rather than strength with the samurai prepared often times to die for their lord or simply for their own honor just because it was customary.</p>
        <p>With the samurai being like this many cases of it were unfortunate romanticizations of the samurai and the roles that they played.</p>
        <p>When thinking of romanticizations of samurai, nothing should come up more than the idea that the katana was a samurai's main weapon.</p>
        <p>Katanas were precious ceremonial weapons for the samurai and were rarely made after the times of the Mongol invasions so that they would be ready for a full scale battle.</p>
        <p>Now of course you know that samurai didn't use katanas in battle but that begs the question, what did samurai actually fight with in battle?</p>
        <p>Samurai used a variety of weapons although the most popular ones consisted of various types of Japanese spears depending on the time period, large bows, and primative firearms gained through trades with European countries.</p>
        <p>It is very clear that katans are not fit for battle but why would samurai use these weapons in particular?</p>
        <p>As it stands today the option of firearms as a weapon is easily the most popular choice as they shoot extremely fast and can do fatal damage to the body.</p>
        <p>A bow could shoot through armor, hit enemies from a distance, and could be used to great effect on horseback, a technique also utilized by the Mongols.</p>
        <p>Spears were used much like the bow for an advantage of the range of the weapon as they could be used to cut down opponents and also could be thrust towards an opponent, which would be harder for a shorter weapon to achieve.</p>
        <p>With this assessment of samurai weapons and skills I hope you either learned something helpful from this blog post or something fascinating.</p>
        `,
        
        
        id: 'latest'
    },
    {
        title: "Japan",
        date: "2024-01-10",
        content: `
        <p> Japan is a very unique country with a culture that has been isolated since the beginning of it's own government due to the island being far from most countries.</p>
        <p>The Japanese have created a number of different things that are now exported to places everywhere.</p>
        <p>A great example of a Japanese export that has become wildly popular would be Anime.</p>
        <p>Anime and Manga themselves are used to refer to any animated media by the Japanese people</p>
        <p>Anime and Manga in Japan can refer to something animated anywhere despite the term generally  referring to an art style of the same names.</p>
        <p>Another great example of a Japanese export is matcha.</p>
        <p>While matcha can be seen in various cafes that you have seen, it has it's roots in Japan.</p>
        <p>The Japanese also take aspects of other cultures such as their heavy influence by the Chinese.</p>
        <p>In Japan, Kanji is an alphabet of characters that are often used as symbols today.</p>
        <p>Kanji itself roots from the Chinese alphabet and is still used by the Japanese today.</p>
        <p>The Japanese have a unique style of architecture but that style is also closely related to historical Chinese architecture with the roofs of old Chinese buildings and old Japanese buildings taking a similar shape.</p>
        <p>With all of that said, I hope you think more about the connections between Japan and other countries as well as other countries and Japan in terms of the many aspects of culture in different places that have been influenced by them.</p>
        `,
        id: 'post2'
    },
    {
        title: "Hollow Knight is Amazing",
        date: "2024-01-20",
        content: `
            <p> I have not played much Hollow Knight for a while, but still love the game.</p>
            <p>Hollow Knight is an extremely impressive game with tons of content and free DLCs as well as a devoted fanbase.</p>
            <p>Hollow Knight's presumed lore is extremely deep and involves many of the characters that you meet ingame.</p>
            <p>The aesthetic of Hollow Knight is achieved through a dark and lonely atmosphere from you being surrounded by nothing but mindless beasts and a soundtrack and art style that enforces this idea with most spots in the game being abandoned with the inhabitants being found dead.</p>
            <p>The characters of Hollow Knight are extremely unique with many falling ill due to the influence of an ancient and forgotten deity entering their minds and plaguing Hollownest, the land of such bugs.</p>
            <p>Hollow Knight's developement process was very impressive with the entire game being made by three developers who each played their part in the code itself, the art style and concept art of the game, and the soundtrack of the game.</p>
            <p>If you have not in fact played hollow knight, you should definitely check the game out as it is available for console and PC and is good fun to play despite the difficulty of the game.</p>
        `,
        id: "croissant-adventure"
    }
    


    // Add more posts here as objects
];

function loadPost(post) {
    document.getElementById("latest-post").innerHTML = `
        <h2>${post.title}</h2>
        <p>Posted on ${post.date}</p>
        <p>${post.content}</p>`;
}

function loadArchive() {
    const archiveList = document.getElementById("archive-list");
    archiveList.innerHTML = ""; // Clear current list

    posts.forEach((post, index) => {
        if (index !== 0) { // Skip the latest post
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = `${post.title} - Posted on ${post.date}`;
            link.onclick = function() { loadPost(post); return false; }; // Load post onclick
            listItem.appendChild(link);
            archiveList.appendChild(listItem);
        }
    });
}

// Load the latest post and the archive on page load
window.onload = function() {
    loadPost(posts[0]); // Load the latest post
    loadArchive(); // Load the archive list
};