import mentionData from "./utils/mentionData";
import "./Mention.css";

const Mentions = () => {
  return (
    <div>
      <div className="mentions">
        <h1>{mentionData.title}</h1>
        <div className="paragraphes">
          {mentionData.paragraphs.map((paragraph, index) => (
            <div key={index} className="paragraphes-item">
              {paragraph.lignes.map((ligne, index) => (
                <p key={index}>{ligne}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentions;
