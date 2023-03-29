import { useEffect, useState, useCallback } from "react";
// @mui
import { Box, Card, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import API_CLIENT from "../../../../api/client";
import BlogPostHero from "../BlogPostHero";
import settings from "../../../../config/settings";

// ----------------------------------------------------------------------
export type Post = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  paymentLinks: string;
  videoUrl: string;
};

export default function EventDetails() {
  const { id } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState(null);

  const getPost = useCallback(async () => {
    try {
      const accessToken: any = sessionStorage.getItem(
        "STORAGE_TOKEN_KEY_standin"
      );
      const response = await API_CLIENT.get(`/events/${id}`, {
        headers: {
          "x-auth-token": accessToken,
          "content-type": "application/json",
        },
      });
      const data = await response.data.data;
      setPost(data);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
  }, [id]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Paper title="Blog: Post Details">
      {post && (
        <>
          <Card sx={{ backgroundColor: "#242534", border: "none" }}>
            <BlogPostHero post={post} />

            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h6" sx={{ mb: 5, color: "white" }}>
                {post?.description}
              </Typography>
            </Box>
            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h6" color="white" sx={{ display: "flex" }}>
                <Typography variant="h6" sx={{ marginRight: "50px" }}>
                  Link :
                </Typography>
                <a
                  href={post?.paymentLinks}
                  target="_blank"
                  style={{ color: "white" }}
                >
                  {post?.paymentLinks}
                </a>
              </Typography>
            </Box>
            {post?.videoUrl ? (
              <Box sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Video
                </Typography>

                <iframe
                  style={{
                    height: "350px",
                    width: "80%",
                    margin: "auto",
                    display: "flex",
                  }}
                  src={settings.imageUrl + post?.videoUrl}
                  title="preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  picture-in-picture full; fullscreen;"
                ></iframe>
              </Box>
            ) : null}
          </Card>
        </>
      )}

      {error && <Typography variant="h6">404 {error}!</Typography>}
    </Paper>
  );
}
