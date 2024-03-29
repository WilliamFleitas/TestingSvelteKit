
export const CATEGORIES_OPTIONS = {
    "Trending": "Trending",
    "Top Rated": "Top Rated",
    "Action Movies": "Action Movies",
    "Comedy": "Comedy",
    "Documentary": "Documentary",
    "netflixOriginals": "netflixOriginals"
};


export type CategoryType =  "Trending" |  "Top Rated" | "Action Movies" | "Comedy" | "Documentary" | "netflixOriginals";

export const getCategoryBy = async (category: CategoryType) => {
    try {
        const url = `https://api.themoviedb.org/${category === CATEGORIES_OPTIONS.Trending ? "3/trending/all/week?language=en-US": 
        category === CATEGORIES_OPTIONS["Top Rated"] ? "3/movie/top_rated?language=en-US": 
        category === CATEGORIES_OPTIONS.Comedy ? "3/discover/movie?with_genres=35": 
        category === CATEGORIES_OPTIONS.Documentary ? "3/discover/movie?with_genres=99":
        category === CATEGORIES_OPTIONS.netflixOriginals ? "3/discover/tv?with_networks=213":
         "3/discover/movie?with_genres=28"}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGE3NTFmNmE4ODk1NDVjYzYwNmQ3NTIyZTY3YzI4YSIsInN1YiI6IjY2MDM5NzAxMzUyMGU4MDE2NWQ4NDgwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zPgjrX3zNEu0mHL93Jg5nBDdwV0VujBWTBWN_uP2wcc'
            }
        };

        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('There was an error fetching the data');
        }

        
        const res = await response.json();
        console.log("asdapi", res);
        return res.results;
    } catch (error: any) {
        return {
            status: 500,
            error: error.message,
        };
    }
};