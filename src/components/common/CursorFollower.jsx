import { useEffect, useState } from "react";
import "../../assets/css/Cursor.css";

function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [bigPos, setBigPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });

      setTimeout(() => {
        setBigPos({
          x: e.clientX,
          y: e.clientY,
        });
      }, 80);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="cursor-small"
        style={{
          left: pos.x,
          top: pos.y,
        }}
      ></div>

      <div
        className="cursor-big"
        style={{
          left: bigPos.x,
          top: bigPos.y,
        }}
      ></div>
    </>
  );
}

export default CursorFollower;
