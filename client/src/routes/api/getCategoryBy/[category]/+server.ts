import { VITE_API_KEY } from "$env/static/private";
const CATEGORIES_OPTIONS = {
    "Trending": "Trending",
    "Top Rated": "Top Rated",
    "Action Movies": "Action Movies",
    "Comedy": "Comedy",
    "Documentary": "Documentary",
    "netflixOriginals": "netflixOriginals"
};


 type CategoryType =  "Trending" |  "Top Rated" | "Action Movies" | "Comedy" | "Documentary" | "netflixOriginals";
type Params = {
    category: CategoryType;
  };
export const GET= async ({params}: {params: Params}) => {
    const  category  = params.category;
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
            Authorization: `Bearer ${VITE_API_KEY}`
        }
    };
    try {
      
      const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('There was an error fetching the data');
        }
        
        const res = await response.json();
      return new Response(JSON.stringify({message: 'success', data: res.results}));
    } catch (error: any) {
      return new Response(JSON.stringify({
        status: 500,
        error: { error: error.message }
      }));
    }
  }