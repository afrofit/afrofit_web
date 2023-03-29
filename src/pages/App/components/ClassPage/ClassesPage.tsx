import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_CLIENT from "../../../../api/client";
import { PageLayout } from "../../../../components/layout/PageLayout/PageLayout";
import { getEllipsisTxtName } from "../../../../components/TitleShort";
import settings from "../../../../config/settings";
import logo from "../../../../assets/img/logobg512.png";

interface Props {}
const ClassesPage: React.FC<Props> = () => {
  const [classData, setClassData] = useState([]);
  const [Data, setData] = useState("");

  const param = useParams();

  const naivage = useNavigate();

  const events = async () => {
    const accessToken: any = sessionStorage.getItem(
      "STORAGE_TOKEN_KEY_standin"
    );

    const response = await API_CLIENT.get("/classes", {
      headers: {
        "x-auth-token": accessToken,
        "content-type": "application/json",
      },
    });

    const data = await response.data.data;
    setClassData(data);
  };

  useEffect(() => {
    events();
  }, []);

  const HandleClick = (e: any, id: any) => {
    e.preventDefault();
    naivage(`/classes/classDetails/${id}`);
  };

  return (
    <PageLayout title="Classes">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {classData.length === 0 ? (
          <h1
            style={{
              color: "white",
              display: "flex",
              margin: "auto",
            }}
          >
            No Data Found
          </h1>
        ) : (
          <Grid container spacing={2}>
            {classData.map((item: any, index: number) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <Stack
                    direction="row"
                    sx={{
                      width: "100%",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginBottom: "30px",
                    }}
                  >
                    <Card
                      onClick={(e) => HandleClick(e, item.id)}
                      key={item.title}
                      sx={{
                        width: "85%",
                        height: "auto",
                        background: "#f26c68",
                        borderRadius: "20px",
                        flexDirection: "row",
                        margin: "auto",
                        cursor: "pointer",
                      }}
                    >
                      <div>
                        <Grid>
                          <Box sx={{ height: "290px", width: "100%" }}>
                            <img
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "fill",
                                backgroundColor: "#191919",
                              }}
                              src={
                                item.imageUrl
                                  ? settings.imageUrl + item.imageUrl
                                  : logo
                              }
                              alt="profile"
                            />
                          </Box>
                          <Box
                            sx={{
                              height: "100%",
                              minHeight: "120px",
                              width: "100%",
                              padding: "20px",
                            }}
                          >
                            <Typography
                              variant="h4"
                              sx={{
                                margin: "0px",
                                fontWeight: "bold",
                                textTransform: "capitalize",
                              }}
                            >
                              {getEllipsisTxtName(item?.title, 10)}
                            </Typography>
                            <Box>
                              <Typography variant="h6">
                                {getEllipsisTxtName(item?.description, 20)}
                              </Typography>
                            </Box>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "15px",
                                  margin: "0",
                                }}
                              >
                                {moment(item.updatedAt).format("MMMM Do YYYY")}
                              </p>
                              <Button
                                size="small"
                                sx={{
                                  color: "black",
                                  lineHeight: "1",
                                }}
                              >
                                Learn More....
                              </Button>
                            </div>
                          </Box>
                        </Grid>
                      </div>
                    </Card>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </PageLayout>
  );
};

export default ClassesPage;
