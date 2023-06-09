import React from "react";
import { Box, Button, Grid, Stack, Card, Typography } from "@mui/material";
import Logo from "../../../../assets/img/logobg512.png";
import settings from "../../../../config/settings";
import { getEllipsisTxtName } from "../../../../components/TitleShort";
import moment from "moment";

const CardComponent = (props: any) => {
  const { classData, HandleClick } = props;
  return (
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
                onClick={(e: any) => HandleClick(e, item.id)}
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
                            : Logo
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
  );
};

export default CardComponent;
