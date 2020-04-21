import { makeStyles } from "@material-ui/core/styles";

export const commonStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".card": { transition: "all 0.3s ease" },
    ".card:hover": { boxShadow: "var(--elevation-z12)" },
    ".card-title": {
      fontSize: "1rem",
      textTransform: "capitalize",
      fontWeight: "500"
    },
    ".card-subtitle": { fontSize: "0.875rem", color: "var(--text-muted)" },
    ".cursor-pointer": {
      cursor: "pointer"
    },
    ".cursor-move": {
      cursor: "move"
    }
  }
}));
