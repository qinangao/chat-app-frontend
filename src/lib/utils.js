import toast from "react-hot-toast";
import { format, isToday, isYesterday } from "date-fns";

export function validateForm(formData) {
  if (!formData.fullName.trim()) {
    toast.error("Full name is required");
    return false;
  }
  if (!formData.email.trim()) {
    toast.error("Email is required");
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    toast.error("Invalid email format");
    return false;
  }
  if (!formData.password) {
    toast.error("Password is required");
    return false;
  }
  if (formData.password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}

export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function getMessageDateLabel(date) {
  const d = new Date(date);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "MMM dd, yyyy");
}
