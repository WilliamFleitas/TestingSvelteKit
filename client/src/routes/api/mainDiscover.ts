import type { HeaderOptionsType } from "../+page.server";



export const getDiscover = async (headerOptions: HeaderOptionsType) => {
    try {
        
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

        const response = await fetch(url, headerOptions);

        if (!response.ok) {
            throw new Error('There was an error fetching the data');
        }

        const res = await response.json();
        return {
            status: 200,
            dataDiscover: res.results
        };
    } catch (error: any) {
        return {
            status: 500,
            error: error.message,
        };
    }
};