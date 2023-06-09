import { Backdrop, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { CHAMFER } from "../../constants/globals";
import { DISPLAY_PIC_MAPS } from "../../data/dp-maps";
import useScreenSizes from "../../hook/useScreenSizes";
import { DisplayPictureClicker } from "../../pages/Auth/components/DisplayPictureClicker/DisplayPictureClicker";
import { SmallButton } from "../Buttons/SmallButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface Props {
  open: boolean;
  onClose: () => void;
  onSelectDp: (dpId: any, type: boolean) => void;
  selectedDp: number;
  setImage: any;
  setImage1: any;
}

export const DisplayPicturePicker: React.FC<Props> = ({
  open = false,
  onClose,
  onSelectDp,
  selectedDp,
  setImage1,
}) => {
  const { isMobile, isMobileM, isMobileL } = useScreenSizes();

  const token = sessionStorage.getItem("STORAGE_TOKEN_KEY_standin");

  const handleClick = () => {};

  return (
    <Backdrop sx={{ color: COLORS.white, zIndex: 99999 }} open={open}>
      <Box
        sx={{
          backgroundColor: COLORS.dark_200,
          minHeight: 10,
          height: "60%",
          width: "60%",
          borderRadius: CHAMFER,
          padding: "20px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: COLORS.dark_100,
        }}
      >
        <Stack
          display="flex"
          flexDirection="row"
          columnGap={2}
          width="100%"
          justifyContent={"space-between"}
        >
          <Typography sx={{ fontSize: 20, marginRight: 3 }}>
            Select your favorite avatar!
          </Typography>
          {isMobile || isMobileL || isMobileM ? (
            <>
              <HighlightOffIcon
                onClick={onClose}
                sx={{ cursor: "pointer", height: "30px", width: "30px" }}
              />
            </>
          ) : (
            <SmallButton
              color="dark_400"
              textcolor="whiteblue"
              title="Dismiss"
              onClick={onClose}
            />
          )}
        </Stack>
        <Divider />
        <Grid
          container
          columns={10}
          spacing={4}
          sx={{ width: "100%", marginTop: 2, overflowY: "auto" }}
        >
          <Box
            width={"100%"}
            sx={{
              display: { xs: "flex" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label htmlFor="file-upload">
              <Box
                onClick={handleClick}
                sx={{
                  height: 95,
                  width: 95,
                  backgroundColor: COLORS.whiteblue,
                  borderRadius: CHAMFER,
                  cursor: "pointer",
                  marginRight: 2,
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: COLORS.hilite_purpink,
                  overflow: "hidden",
                }}
              >
                <img
                  src={require(`../../assets/img/add-image.png`)}
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "11px",
                    margin: "auto",
                  }}
                  alt="The current user's display"
                />
                <input
                  hidden
                  accept="image/*"
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  onChange={(e: any) => {
                    onSelectDp(e?.target?.files[0], true);

                    // eslint-disable-next-line no-lone-blocks
                    {
                      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                      token
                        ? null
                        : setImage1(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
              </Box>
            </label>

            <Typography
              sx={{
                color: COLORS.hilite_purpink,
                marginBottom: 1,
                textTransform: "uppercase",
                fontSize: 15,
                letterSpacing: 1,
                textAlign: { xs: "center", md: "left" },
                marginTop: { xs: 2, md: 0 },
              }}
            >
              Uploade your picture
            </Typography>
          </Box>

          {DISPLAY_PIC_MAPS.map((dp: number, index: number) => (
            <Grid item xs={12} sm={3} md={3} lg={2} key={dp}>
              <DisplayPictureClicker
                dpId={dp + 1}
                size={100}
                onClick={() => onSelectDp(dp + 1, false)}
                imageOnly
                selected={selectedDp === dp + 1}
                // setImage1={''}
                image1={""}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Backdrop>
  );
};
