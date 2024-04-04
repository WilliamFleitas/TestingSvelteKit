import { VITE_API_KEY } from '$env/static/private';
import { getDiscover } from './api/mainDiscover';

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
export interface HeaderOptionsType {
    method: string;
    headers: { accept: string; Authorization: string;}
}
export async function load() {
    const getOptions:HeaderOptionsType = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${VITE_API_KEY}`
        }
    };

    let dataDiscover, discoverError;
    try {
      const discoverRes = await getDiscover(getOptions);
      if (discoverRes.status !== 200) {
        discoverError = `Error en la función 1:`;
      } else {
        dataDiscover = await discoverRes.dataDiscover;
      }
    } catch (e: any) {
        discoverError = e.message;
    }

    
  return {
    props: {
        dataDiscover: dataDiscover || null,
        discoverError: discoverError || null,
    }
  };
  
};
