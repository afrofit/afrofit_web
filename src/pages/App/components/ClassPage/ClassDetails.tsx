import { useEffect, useState, useCallback, useRef } from "react";
// @mui
import { Box, Card, Paper, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import API_CLIENT from "../../../../api/client";
import BlogPostHero from "../BlogPostHero";

// ----------------------------------------------------------------------
export type Post = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  paymentLinks: string;
  videoUrl: any;
};

export default function ClassDetails() {
  const { id } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState(null);

  const getPost = useCallback(async () => {
    try {
      const accessToken: any = sessionStorage.getItem(
        "STORAGE_TOKEN_KEY_standin"
      );
      const response = await API_CLIENT.get(`/classes/${id}`, {
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

            <Typography variant="h6" color="white">
              <a
                href={post?.paymentLinks}
                target="_blank"
                style={{ color: "white" }}
                rel="noreferrer"
              >
                {post?.paymentLinks}
              </a>
            </Typography>
            <Stack>
              {post?.videoUrl ? (
                <Box sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      marginLeft: "115px",
                      marginBottom: "20px",
                    }}
                  >
                    Video
                  </Typography>
                  <iframe
                    style={{
                      height: "350px",
                      width: "80%",
                      margin: "auto",
                      display: "flex",
                      borderRadius: "15px",
                      border: "none",
                    }}
                    src={`https://www.youtube.com/embed/${post?.videoUrl}`}
                    // src={data.video}
                    title="preview"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope;  picture-in-picture full; fullscreen;"
                  />
                </Box>
              ) : null}
            </Stack>
          </Card>
        </>
      )}

      {error && <Typography variant="h6">404 {error}!</Typography>}
    </Paper>
  );
}
