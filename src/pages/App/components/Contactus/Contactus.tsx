import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomInputElement } from "../../../../components/forms/CustomInput/CustomInputElement";
import { StyledInput } from "../../../../components/forms/CustomInput/styled";
import { COLORS } from "../../../../constants/colors";

import { ButtonText } from "../../../../components/elements/StyledLargeButton/styled";
import API_CLIENT from "../../../../api/client";
import { Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../Contactus/Contactus.css";
import { Height } from "@mui/icons-material";
type FormData = {
  name: string;
  phoneNumber: number;
  message: string;
  alreadyregisterd: any;
  needInfo: any;
  RadioBtn: any;
  email: any;
};

interface Props {
  name: string;

  icon?: "person" | "mail" | "lock" | "user";
}
const ContactUs: React.FC<Props> = ({ icon = "user", name }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [checkboxes, setCheckboxes]: any = useState({
    checkbox1: false,
    checkbox2: false,
    textarea: "",
    ErrorTextarea: false,
    Snackbar: false,
  });
  // useEffect(() => {
  //   setCheckboxes({ ...checkboxes, Snackbar: false });
  // }, [checkboxes.Snackbar]);

  // =====================================
  const {
    register,
    handleSubmit,
    control,
    reset,

    formState: { errors },
  } = useForm<FormData>();
  const keys = Object.keys(errors);

  useEffect(() => {
    if (keys.length !== 0)
      setCheckboxes({ ...checkboxes, ErrorTextarea: true });
  }, [keys.length]);
  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    if (!checkboxes?.textarea) {
      setCheckboxes({ ...checkboxes, ErrorTextarea: true });
      return false;
    } else {
      // let formData = new FormData();

      // formData.append("name", data?.name);
      const response = await API_CLIENT.post(`/contact/create`, {
        name: data?.name,
        number: data?.phoneNumber,
        isRegistered: checkboxes?.checkbox1,
        moreInformation: checkboxes?.checkbox2,
        productEnquiry: selectedOption,
        reason: checkboxes?.textarea,
        email: data?.email,
      });

      reset();
      setCheckboxes({
        checkbox1: false,
        checkbox2: false,
        textarea: "",
        ErrorTextarea: false,
        Snackbar: true,
      });
      setSelectedOption("");
    }
  };

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange1 = (event: any) => {
    if (event.target.value) {
      setCheckboxes({
        ...checkboxes,
        textarea: event.target.value,
        ErrorTextarea: false,
      });
    } else {
      setCheckboxes({ ...checkboxes, ErrorTextarea: true });
    }
  };

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes: any) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiSnackbarContent-root": {
        backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`, // Replace with your desired background color
        color: "white", // Replace with your desired text color
      },
    },
  }));

  const classes: any = useStyles();

  return (
    <Container maxWidth="md" className="Topcontainer">
      <Card className="contactcard">
        <Typography
          className="contact-heading"
          sx={{
            color: COLORS.white,
            backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact US
        </Typography>
        <div style={{ marginBottom: "1rem" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{ background: "none" }}>
              <Stack
                display="flex"
                flexDirection="column"
                width="100%"
                spacing={3}
              >
                <CustomInputElement
                  label="name"
                  control={control}
                  placeholder="Your Name.."
                  type="text"
                  icon="user"
                  {...register("name", { required: "Name is required" })}
                />
                <CustomInputElement
                  label="Email"
                  control={control}
                  placeholder="Your Email.."
                  type="email"
                  icon="mail"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <CustomInputElement
                  label="Whatsapp Contact"
                  control={control}
                  placeholder="Your contact..."
                  icon="person"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{1,14}$/,
                      message:
                        "Invalid phone number (must be less than 14 digits)",
                    },
                  })}
                />
              </Stack>

              <div className="checkboxes">
                <p className="checkboxheader">Please tick the relevant box :</p>
                <div className="checkboxdiv">
                  <StyledInput
                    style={{
                      width: "20px",
                      height: "20px",

                      marginLeft: "0",
                    }}
                    className="checkboxsize"
                    name="checkbox1"
                    checked={checkboxes.checkbox1}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                  />
                  <label className="checkboxlabel">
                    I am already registered
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <StyledInput
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "0",
                    }}
                    className="checkboxsize"
                    type="checkbox"
                    name="checkbox2"
                    checked={checkboxes.checkbox2}
                    onChange={handleCheckboxChange}
                  />
                  <label className="checkboxlabel">
                    I need more information
                  </label>
                </div>
              </div>

              <div className="radiobtn_maindiv">
                <p className="radiobtn_header">
                  THE PRODUCT YOU ENQUIRING ABOUT :
                </p>
                <div className="radiobtn_childdiv">
                  <input
                    className="radiobtn"
                    type="radio"
                    value="For Afrofit App"
                    checked={selectedOption === "For Afrofit App"}
                    onChange={handleOptionChange}
                  />
                  <label className="radiobtnlabel">For Afrofit App</label>
                  <br />
                </div>
                {/* 22222222222222222222 */}
                <div className="radiobtn_childdiv">
                  <input
                    className="radiobtn"
                    type="radio"
                    value="For 30 days booth camp"
                    checked={selectedOption === "For 30 days booth camp"}
                    onChange={handleOptionChange}
                  />
                  <label className="radiobtnlabel">30 days Challenge</label>
                  <br />
                </div>

                {/* 333333333333 */}
                <div className="radiobtn_childdiv">
                  <input
                    className="radiobtn"
                    type="radio"
                    value=" For General Enquiries"
                    checked={selectedOption === " For General Enquiries"}
                    onChange={handleOptionChange}
                  />
                  <label className="radiobtnlabel">For General Enquiries</label>
                  <br />
                </div>
              </div>

              <textarea
                onChange={(e) => handleOptionChange1(e)}
                placeholder="Enter your Query"
                value={checkboxes?.textarea}
                rows={8}
                cols={3}
                className="textarea"
              ></textarea>
              {checkboxes.ErrorTextarea && (
                <Typography
                  sx={{
                    color: COLORS.orange_200,
                  }}
                  className="errorMessageTextare"
                >
                  Message field is Empty..
                </Typography>
              )}
              <Snackbar
                sx={{
                  zIndex: 99999,
                  color: COLORS.black,
                }}
                classes={{ root: classes.root }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={checkboxes.Snackbar}
                onClose={() =>
                  setCheckboxes({ ...checkboxes, Snackbar: false })
                }
                color="error"
                message="Message send successfully"
                autoHideDuration={2000}
              />
            </Card>
            <Button type="submit" className="btnsubmit">
              <ButtonText>Submit</ButtonText>
            </Button>
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default ContactUs;
