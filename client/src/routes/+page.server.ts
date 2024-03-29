// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

/** @type {import('$types').PageLoad} */
export const prerender = true;
export interface MoviesType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: [[]],
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    original_name?: string;
    vote_average?: number;
    first_air_date?: string;
};
export async function load() {
    try {
        
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

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
        return {data: res.results};

    } catch (error: any) {
        return {
            status: 500,
            error: error.message,
        };
    }
};
