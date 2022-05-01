import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "15vh",
    borderRadius: "10px",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "100%",
  },
  textSection: {
    margin: "4vh",
  },
  subject: {
    marginBottom: "2vh",
  },
  divider: {
    backgroundColor: "#366954",
    margin: "20px 0px",
  },
  plantDetails: {
    marginBottom: "1vh",
    color: "#564434",
  },
  imageSection: {
    display: "flex",
    justifyContent: "center",
  },
  media: {
    objectFit: "scale-down",
    width: "55vw",
    maxHeight: "55vh",
    marginBottom: "3vh",
  },
  postActionButton: {
    size: "small",
    color: "#366954",
  },
  postActions: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
