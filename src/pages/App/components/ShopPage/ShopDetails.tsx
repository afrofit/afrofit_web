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
  audioUrl: string;
};

export default function ShopDetails() {
  const { id } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState(null);

  const getPost = useCallback(async () => {
    try {
      const accessToken: any = sessionStorage.getItem(
        "STORAGE_TOKEN_KEY_standin"
      );
      const response = await API_CLIENT.get(`/shops/${id}`, {
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
              <Typography variant="h6" color="white">
                <a
                  href={post?.paymentLinks}
                  target="_blank"
                  style={{ color: "white" }}
                >
                  {post?.paymentLinks}
                </a>
              </Typography>
            </Box>

            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Audio
              </Typography>
              <audio
                controls
                autoPlay
                src={settings.imageUrl + post?.audioUrl}
                style={{
                  height: "100px",
                  width: "80%",
                  margin: "auto",
                  display: "flex",
                }}
              ></audio>
            </Box>
          </Card>
        </>
      )}

      {error && <Typography variant="h6">404 {error}!</Typography>}
    </Paper>
  );
}
