import React, { CSSProperties, useEffect, useState } from "react";

import Select from "react-select";
import { colourOptions } from "./dataTest";
import * as api from "../../api/request";
export default function SelectSearchWithApi({ apiNameSetData, onChange }) {
  const [ariaFocusMessage, setAriaFocusMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!apiNameSetData) {
      setOptions([]);
    } else {
      let rs = api[apiNameSetData]();
      rs.then((data) => {
        let result = data.data;
        result = result.map((value) => {
          return {
            value: {
              id : value.id,
              name : value.name
            },
            label: value.name,
          };
        });
        setOptions(result);
      });
    }
  }, []);

  const style = {
    blockquote: {
      fontStyle: "italic",
      fontSize: ".75rem",
      margin: "1rem 0",
    },
    label: {
      fontSize: ".75rem",
      fontWeight: "bold",
      lineHeight: 2,
    },
  };

  const onFocus = ({ focused, isDisabled }) => {
    const msg = `You are currently focused on option ${focused.label}${
      isDisabled ? ", disabled" : ""
    }`;
    setAriaFocusMessage(msg);
    return msg;
  };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    <div className="w-[100%]">
      <label style={style.label} id="aria-label" htmlFor="aria-example-input">
        
      </label>

      {!!ariaFocusMessage && !!isMenuOpen && (
        <blockquote style={style.blockquote}>"{ariaFocusMessage}"</blockquote>
      )}

      <Select
        aria-labelledby="aria-label"
        ariaLiveMessages={{
          onFocus,
        }}
        onChange={onChange}
        inputId="aria-example-input"
        name="aria-live-color"
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        options={options}
      />
    </div>
  );
}
