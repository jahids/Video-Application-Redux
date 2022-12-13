import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideoList({ tags, currentVideoId }) {
    const dispatch = useDispatch();
    const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos)

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }))
    }, [currentVideoId, dispatch, tags])


    let content;
    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>
    }

    if (!isError && !isLoading && relatedVideos?.length === 0) {
        content = <div className="col-span-12">No  related Videos Found</div>
    }

    if (!isError && !isLoading && relatedVideos?.length > 0) {
        content = relatedVideos.map((video) => (<RelatedVideoListItem key={video.id} video={video} />))
    }
    return (
        <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
