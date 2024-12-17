import React, { useEffect, useState } from "react";

const YouTubeEmbed = ({ videoUrl }) => {

    const [videoId, setVideoId] = useState("");

    const handleInputChange = (url) => {
        const idMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([^&]+)/);
        if (idMatch && idMatch[1]) {
            setVideoId(idMatch[1]); // Extracts the video ID from the URL
        } else {
            setVideoId(""); // Clear if the input is not a valid URL
        }
    };

    useEffect(() => {

        if (videoUrl) {
            handleInputChange(videoUrl)
        }

    }, [videoUrl])

    // Function to handle URL input and extract video ID

    return (
        <div>
            {videoId && (
                <div style={{ marginTop: "20px" }}>
                    <iframe
                        height="375"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        className="w-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default YouTubeEmbed;

