import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";


export default function Logo() {
  return (
    <div style={{ display: "flex" }}>
      
      <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
      
      
    </div>
  );
}
