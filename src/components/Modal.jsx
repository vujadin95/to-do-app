import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function Modal({ setIsModalOn }) {
  return (
    <div className="modal-container">
      <div onClick={() => setIsModalOn(false)} className="modal-close-btn">
        <AiOutlineCloseCircle />
      </div>
      <p className="modal-text">Enter your note</p>
    </div>
  );
}
