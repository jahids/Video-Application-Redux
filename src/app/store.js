import { configureStore } from '@reduxjs/toolkit';
import tagReducer from '../features/tags/tagsSlice';
import videosReducer from '../features/videos/VideosSlice';
import videoReducer from '../features/Video/VideoSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagReducer,
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
        filter: filterReducer
    },
});
