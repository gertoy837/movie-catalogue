const CONFIG = {
    KEY: '8e465ff28280979967a70c1462d19f7f',
    BASE_URL: 'https://api.themoviedb.org/3/',
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
    DEFAULT_LANGUAGE: 'en_us',
    CACHE_NAME: new Date().toISOString(),
    DATABASE_NAME: 'movie-catalogue-database',
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: 'movies',
    WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
}

export default CONFIG;