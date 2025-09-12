import { useEffect , useState} from "react";


export const StarBackground = () => {

    // stars is a list of [id, size, x, y, opacity, animationDuration]
    const [stars, setStars] = useState([]);

    // meteors is a list of [id, size, x, y, delay, animationDuration]
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors(); 

        const handleResize = () => {
            generateStars();
        }

        // Handles resizing of number of stars when viewport size changes
        window.addEventListener("resize", handleResize);

        // Removes the event listener to prevent memory leaks
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    // Generate number of stars dependent on size of window
    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,              // random size stars
                x: Math.random() * 100,                   // x-position of stars in terms of % of viewport width
                y: Math.random() * 100,                   // y-position of stars in terms of % of viewport height
                opacity: Math.random() * 0.5 + 0.5,       // random opacity between [0.5, 1]
                animationDuration: Math.random() * 4 + 2, // random animation duration between 2-6 seconds
            });
        }

        setStars(newStars);
    };

    // Generate number of stars dependent on size of window
    const generateMeteors = () => {
        const numberOfMeteors = 8;
        const newMeteors= [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,              // random size meteors
                x: Math.random() * 50,                   // x-position of stars in terms of % of viewport width
                y: Math.random() * 50,                    // y-position of stars in terms of % of viewport height (starting closer to top)
                delay: Math.random() * 15,                // random delay
                animationDuration: Math.random() * 3 + 3, // random animation duration between 3-6 seconds
            });
        }

        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }} />
            ))}

            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size * 1 + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                }} />
            ))}
        </div>
    );
};