import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'ea5f231b3emsh3f7f1320e548cfap12bf0fjsn8742e740736d',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    
    
    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers) => {
            headers.set(//'X-RapidAPI-Key','ea5f231b3emsh3f7f1320e548cfap12bf0fjsn8742e740736d'
            
            'X-RapidAPI-Key','10d1dd878dmshcd9af0a830228b0p1151b1jsn96e9439ad796');
        
        

            return headers;
        },

    }),
    endpoints:(builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        getTopChartsCountry: builder.query({ query: (countryid) => `/charts/country?country_code=${countryid}`}),
        getTopChartsGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getTopChartsGenreCountry: builder.query({ query: (genre) => `/charts/genre-country?country_code=IN&genre_code=${genre}`}),
        getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({ query: ({songid}) => `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getSearchSong: builder.query({ query: (searchterm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchterm}`}),
    }),
});
    

export const {
    useGetTopChartsQuery,useGetTopChartsCountryQuery,
    useGetSongDetailsQuery,useGetTopChartsGenreQuery,
    useGetSongRelatedQuery,useGetArtistDetailsQuery,
    useGetSearchSongQuery,useGetTopChartsGenreCountryQuery
} = shazamCoreApi; 