export const validateField = (name, value) => {
  let error = "";

  switch (name) {
    case "firstName":
      if (!value.trim()) error = "First name required";
      break;

    case "lastName":
      if (!value.trim()) error = "Last name required";
      break;

    case "phone":
      if (!value) error = "Phone number required";
      else if (!/^[0-9]{10}$/.test(value)) error = "Phone must be 10 digits";
      break;

    case "email":
      if (!value) error = "Email required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Invalid email";
      break;

    default:
      break;
  }

  return error;
};
