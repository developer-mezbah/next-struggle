const CheckClose = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};
const CheckRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
};

const PasswordValidation = ({ validation }) => {
  return (
    <div className="w-full mt-5">
      <h2 className="text-2xl font-bold mb-5 text-textColor">
        Password Must contain the following:
      </h2>
      <ul>
        <li
          className={`${
            validation.lowercase ? "text-green-500" : "text-red-500"
          } flex items-center gap-4`}
        >
          {validation.lowercase ? <CheckRight /> : <CheckClose />} A Lowercase
          letter
        </li>
        <li
          className={`${
            validation.uppercase ? "text-green-500" : "text-red-500"
          } flex items-center gap-4`}
        >
          {validation.uppercase ? <CheckRight /> : <CheckClose />} A capital
          (uppercase) letter
        </li>
        <li
          className={`${
            validation.number ? "text-green-500" : "text-red-500"
          } flex items-center gap-4`}
        >
          {validation.number ? <CheckRight /> : <CheckClose />} At least one
          digit Number
        </li>
        <li
          className={`${
            validation.specialChar ? "text-green-500" : "text-red-500"
          } flex items-center gap-4`}
        >
          {validation.specialChar ? <CheckRight /> : <CheckClose />} At least
          one special character
        </li>
        <li
          className={`${
            validation.minLength ? "text-green-500" : "text-red-500"
          } flex items-center gap-4`}
        >
          {validation.minLength ? <CheckRight /> : <CheckClose />} Minimum Six
          in length
        </li>
      </ul>
    </div>
  );
};

export default PasswordValidation;
