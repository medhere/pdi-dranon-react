import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export var sleep = (n = 2) => new Promise((r) => setTimeout(r, n * 1000));
// await sleep(2);
// sleep(2).then();

export const formatCurrency = (price) => {
  return (
    "₦" +
    parseFloat(price)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
  );
};

export const formatFigure = (price) => {
  return parseFloat(price).toLocaleString("en-US");
};

export const toastStyle = {
  style: {
    border: "1px solid #f18c53",
    padding: "16px",
    color: "#f18c53",
  },
  iconTheme: {
    primary: "#f18c53",
    secondary: "#FFFAEE",
  },
};

export const avatar = `data:image/jpeg;base64,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`;

export const generateBrightHexColor = () => {
  const minBrightness = 180; // Minimum brightness for each channel
  const maxBrightness = 255; // Maximum brightness for each channel

  // Generate random values for the red, green, and blue channels
  const red =
    Math.floor(Math.random() * (maxBrightness - minBrightness + 1)) +
    minBrightness;
  const green =
    Math.floor(Math.random() * (maxBrightness - minBrightness + 1)) +
    minBrightness;
  const blue =
    Math.floor(Math.random() * (maxBrightness - minBrightness + 1)) +
    minBrightness;

  // Convert the RGB values to a hex color string
  const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`;

  return hexColor;
};

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getUTCDate();
  const month = date.toLocaleString("default", { month: "short" });

  // Add the "st", "nd", "rd", or "th" suffix to the day
  let dayWithSuffix = day + getDaySuffix(day);

  return `${dayWithSuffix} ${month}`;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function formatTime(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Convert hours to 12-hour format and determine AM or PM
  const amOrPm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12; // Ensure 12-hour format

  // Format the minutes with leading zero if necessary
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}${amOrPm}`;
}
