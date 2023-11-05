import React from "react";
// import "./Input.styles.css";
// import { Tooltip } from "antd";
// import { QuestionCircleOutlined } from "@ant-design/icons";
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";

const Free = ({
  placeholder,
  onChange,
  value,
  type,
  name,
  label,
  rightIcon,
  leftIcon,
  touched,
  onLeftClick,
  onRightClick,
  onBlur,
  error,
  noMarginRight,
}) => {
  return (
    <FormControl>
      {label && (
        <FormLabel fontWeight={500} fontSize={"sm"}>
          {label}
        </FormLabel>
      )}
      <Flex alignItems={"center"} justifyContent={"center"} rounded>
        {leftIcon ? <button onClick={onLeftClick}>{leftIcon}</button> : null}
        <ChakraInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          onBlur={onBlur}
          fontSize={"sm"}
        />
        {rightIcon ? (
          <button
            onClick={onRightClick}
            className={`absolute ${noMarginRight ? "" : "mr-4"} right-5`}
          >
            {rightIcon}
          </button>
        ) : null}
      </Flex>
      {error && touched && (
        <FormErrorMessage>{error && touched && error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

// const CheckBox = ({ checked, onChange }) => {
//   return (
//     <label className="checkbox-container">
//       <input type="checkbox" checked={checked} onChange={onChange} />
//       <span className="rounded-lg checkmark"></span>
//     </label>
//   );
// };

// const Select = ({ label, options, placeholder, tooltip, ...rest }) => {
//   return (
//     <div className="input-container">
//       <div className="flex items-center">
//         {label && (
//           <label htmlFor="exampleFormControlInput1" className="input-label">
//             {label}
//           </label>
//         )}
//         {tooltip && (
//           <Tooltip title={tooltip} placement="right">
//             <QuestionCircleOutlined className="ml-2 text-app-blue"></QuestionCircleOutlined>
//           </Tooltip>
//         )}
//       </div>
//       <select
//         name="filter"
//         className="w-full py-3 pl-5 pr-12 my-3 text-sm input text-white-P600 active focus-visible:ring-1 focus-visible:border-black-P600 focus-visible:outline-none focus-visible:bg-primary-P600 focus:ring-0"
//         style={{ border: "1px solid #2e3136" }}
//         placeholder="select"
//         {...rest}
//       >
//         <option value={null} disabled selected hidden>
//           {placeholder}
//         </option>

//         {options?.map((option, i) => {
//           if (!option.used) {
//             return (
//               <option key={i} value={option.id}>
//                 {option.name}
//               </option>
//             );
//           }
//         })}
//       </select>
//     </div>
//   );
// };

// const UpgradeInput = () => {
//   const getKey = {
//     label: "Upgrade to access feature",
//     url: "/dashboard/manage-subscriptions?action=upgrade",
//   };
//   return (
//     <a
//       href={getKey.url}
//       rel="noreferrer"
//       className="ml-auto text-xs font-medium text-app-blue hover:text-app-blue hover:underline"
//     >
//       {getKey.label}
//     </a>
//   );
// };

const Input = {
  Free,
  //   CheckBox,
  //   Select,
  //   UpgradeInput,
};

export default Input;
