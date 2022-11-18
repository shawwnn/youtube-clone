import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import ReactPlayer from "react-player"

import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) =>setVideoDetails(data.items[0]));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: 'sticky', top: '86px' }}>
            <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls />
            <Typography color="#FFF" variant="h5" fontWeight="bold" p={2}>
              {videoDetails.snippet.title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail