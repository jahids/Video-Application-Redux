import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import Footer from "../components/Footer";
import RelatedVideoList from "../components/list/RelatedVideoList";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/ui/Loading";
import { fetchVideo } from "../features/Video/VideoSlice";

export default function Video() {
    const { video, isLoading, isError, error } = useSelector((state) => state.video)
    const { videoId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId])

    const { link, title, tags, id } = video || {};

    // decide what to render
    let content = null;
    if (isLoading) content = <Loading />
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && !video?.id) {
        content = <div className="col-span-12">No Videos Found</div>
    }


    if (!isError && !isLoading && video?.id) {
        content = <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
                <VideoPlayer link={link} title={title} />
                <VideoDescription video={video} />
            </div>
            <RelatedVideoList currentVideoId={id} tags={tags} />
        </div>
    }
    return (
        <>
            <Navbar />

            <section class="pt-6 pb-20">
                <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    {content}
                </div>
            </section>

            <Footer />
        </>
    );
}
