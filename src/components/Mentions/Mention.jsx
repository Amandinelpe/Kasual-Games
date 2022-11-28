import { PropTypes } from "prop-types";
import mentionData from "./utils/mentionData";
import "./Mention.css";

const Mentions = () => {
  return (
    <div>
      <div className="mentions">
        <h1>{mentionData.title}</h1>
        <div className="paragraphes">
          {mentionData.paragraphs.map((paragraph) => (
            <div className="paragraphes-item">
              {paragraph.lignes.map((ligne) => (
                <p>{ligne}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Mentions.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Mentions;
