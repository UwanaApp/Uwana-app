import React from "react";
import Post from "../components/Post";

const Home = () => {
    const samplePosts = [
        {
            user: {
                username: 'FashionistaQueen',
                profilePicture: '/profile1.jpeg'
            },
            time: '2 hours ago',
            media: '/content2.jpg',
            mediaType: 'image',
            content: 'Yellow pawpaw (Asimina triloba) is a unique, custard-like fruit native to North America, with a sweet, tropical flavor resembling a mix of banana, mango, and citrus. Rich in vitamins C and A, potassium, magnesium, and fiber, it offers various health benefits, including antioxidant protection, digestive support, and an energy boost. The fruit can be eaten fresh or used in smoothies, baked goods, and savory dishes. Yellow pawpaw trees thrive in shaded, well-drained soil and take a few years to bear fruit, but once established, they produce abundant crops. Its versatility and nutritional value make it a delicious, healthy addition to any diet.',
            likes: 120,
            retweets: 50,
            replies: 30
        },
        {
            user: {
                username: 'StyleGuru',
                profilePicture: '/profile2.avif'
            },
            time: '1 hour ago',
            media: '/video.mp4',
            mediaType: 'video',
            content: 'It’s your wedding day, and as you stand there in your wedding dress, looking absolutely stunning, you’re suddenly struck by an overwhelming craving for fruit. You step outside the venue, distracted by the sight of a colorful fruit cart down the street. Forget the ceremony, forget the guests—those peaches look perfect. You tell yourself you’ll just grab a quick snack before heading back to your bridal duties. But one fruit turns into two, then three, and soon you’re happily munching on grapes, ignoring the mounting pile of missed calls on your phone. Each buzz is drowned out by your deep satisfaction as you bite into a juicy apple, blissfully unaware of the chaos you’ve left behind.As you take another bite, you finally glance at your phone and realize the sheer number of missed calls. It’s your bridesmaids, your mom, the wedding planner—everyone’s calling to check if you’re okay. Panic sets in as you finally remember, with a sudden jolt of realization, that you’re supposed to be walking down the aisle in minutes. You rush back to the venue, half-chewing your fruit, still in disbelief that you managed to forget about the biggest day of your life for a snack. As you walk down the aisle a little late, a little sticky from fruit juice, you can’t help but laugh at how, in the middle of all the wedding chaos, it was a simple fruit craving that almost derailed your big day.',
            likes: 95,
            retweets: 40,
            replies: 25
        },
        {
            user: {
                username: 'TrendSetter',
                profilePicture: '/profile3.avif'
            },
            time: '30 minutes ago',
            media: '/content.jpg',
            mediaType: 'image',

            content: 'If you know me, then you will know that my journey has been one of constant learning, growth, and dedication. From my early days as an intern at Acme Software Lab, where I honed my skills in crafting web solutions, to leading teams as a member of the GAC, I’ve always sought to blend innovation with practicality. Along the way, my research on Fujitsu Palm Secure technology has deepened my understanding of how cutting-edge security systems can transform ecommerce and marketing strategies. Through every challenge and achievement, my passion for technology and leadership has driven me to continuously push boundaries and explore new possibilities.',
            likes: 150,
            retweets: 60,
            replies: 45
        }
    ];

    return (
        <div className="homepage max-w-3xl mx-auto py-8">
            {samplePosts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
};

export default Home;