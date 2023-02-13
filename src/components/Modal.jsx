import { useState } from "react";
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function Modal({ setIsModalOn }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="modal-container">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOn(false)}
        className="modal-close-btn"
      >
        {isHovered ? <AiFillCloseCircle /> : <AiOutlineCloseCircle />}
      </div>
      <p className="modal-text">Enter your note</p>
    </div>
  );
}
