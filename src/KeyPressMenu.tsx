import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {
  // Add any additional props you may need
}

const KeyPressMenu: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

      if (
        (isMac && event.metaKey && event.key === "k") ||
        (!isMac && event.ctrlKey && event.key === "k")
      ) {
        handleClick();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [menuVisible]);

  const getShortcutText = () => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    return isMac ? "Command+K" : "Ctrl+K";
  };

  const handleClick = () => {
    setMenuVisible(!menuVisible);
    navigate("/menu");
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-600 font-semibold  text-white py-2 px-4 rounded-md bg-opacity-90 focus:outline-none focus:ring focus:border-blue-300"
        onClick={handleClick}
      >
        Click to open a menu ({getShortcutText()})
      </button>

      <AnimatePresence>
        {menuVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 bg-white border border-gray-300 p-2 rounded shadow"
          >
            <p className="mb-2">Demo Menu:</p>
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KeyPressMenu;
