

/* eslint-disable import/no-anonymous-default-export */
export default [

    //image size should be 448cmx335cm ou 443x640
    {
        id: 7,
        slug: 'ai-image-generator',
        image: "/dalle_clone.webp",
        title: "AI Image Generator",
        description: "Another version of Dall-E",
        longerdescription: "The idea here was to build something similar to Dall-E and use OpenAI API. Since this is a full-stack app I've used React, Mongo.db, Node.js and as well Cloudinary to store images. I am more used of Firebase and Firestore to store files so that was another challenge. Also it was the first time for me to implement a download button. Unfortunately due to the expensive cost of OpenAI API, the app is basically useless since all the tokens have been spended already so it is only to see what was possible.",
        tech: "React, Tailwindcss, MongoDB, Node.js, Express.js and OpenAI API",
        link: "https://dalle-clone-mddp.vercel.app/",
    },
    {
        id: 6,
        slug: 'netflix-clone',
        image: "/netflix-clone.webp",
        title: "Netflix Clone",
        description: "Creating the UI of Netflix",
        longerdescription: "The idea here was to recreate the famous homepage of Netflix, which is beautiful AND functionnal. For that I used React, Tailwindcss for faster styling and Firebase for all-in-one solution to store data, deploy, and authentication. To provide data I used The Movie Database API. It add new movies constantly and I link it to Youtube trailers. Just like in the real app, the movies are sorted by genres for better UX.",
        tech: "React, Next.js, Tailwindcss, Firebase, Recoil",
        link: "https://video-ui-th.vercel.app/",
    },
    {
        id: 4,
        slug: 'a-new-airbnb',
        image: "/airbnb.webp",
        title: "A new Airbnb",
        description: "Building another version of Airbnb",
        longerdescription: "The idea here was to recreate the famous homepage of Airbnb. Airbnb has a solid reputation in term of great design. Their website and app are so well designed that it represent a great case study for frontend developers. For that project I use some of the latest stacks such as Next.js and TailwindCss. For the date picker I've found it more useful to use a great one on Github. To show the listings on the map I wish I could use Google Maps API but as they're pricey, I used instead Mapbox which is still a great solution",
        tech: "React, Next.js, Tailwindcss, Mapbox",
        link: "https://tourism-ui-th.vercel.app/",
    },
    {
        id: 2,
        slug: 'realtor',
        image: "/Realtor.webp",
        title: "Realtor",
        description: "A real estate app",
        longerdescription: "The idea here was to create a powerful web-app to display listings from a real real-estate agency. I found an API on RapidAPI and I could connect their API to provide data to the app. This time I used ChakraUI for styling.",
        tech: "React.js, Next.js, ChakraUI, RapidAPI",
        link: "https://thomas-realestate.vercel.app/",
    },
    {
        id: 1,
        slug: 'hoobank',
        image: "/hoobank.webp",
        title: "Hoobank",
        description: "Build the homepage of a modern bank",
        longerdescription: "A simple landing page built with React and Tailwindcss. Even if the page has no Javascript, the idea here was more about to deal with complex styling using Tailwindcss and all the logic involves. The result is something similar as modern Banking app such as Revolut or Wise.",
        tech: "React.js, Tailwindcss",
        link: "https://hoobank-bank-app.netlify.app/",
    },
    {
        id: 5,
        slug: 'osteopath',
        image: "/osteopath.webp",
        title: "Osteopath",
        description: "An osteopath based in Roanne, France",
        longerdescription: "A landing page built for an osteopath based in France. I could have used Webflow or Wordpress for faster development but the idea was to get something lightening fast to rank higher in search results and I know that Next.js and Vercel were the way to go for that. In the result, the page get 100/100 in speed test.",
        tech: "React.js, Next.js, Tailwindcss",
        link: "https://www.osteo-roanne.com/",
    },
    {
        id: 3,
        slug: 'tiktok-clone',
        image: "/tiktokclone.webp",
        title: "TikTok Clone",
        description: "Rebuild the popular app TikTok",
        longerdescription: "The idea here was to recreate the scroll gesture of TikTok to scroll from a video to another. Some CSS has been required to get a similar results, suc as the scroll snap and the play and pause on click all over the video. ",
        tech: "React.js, MaterialUI",
        link: "https://tiktok-th.vercel.app/",
    }
]

