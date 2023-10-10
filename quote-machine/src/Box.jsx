import PropTypes from "prop-types";
import { BsTwitter } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { ImQuotesLeft } from 'react-icons/im'

const Box = ({ textContent, author, action }) => {
  const href = `https://twitter.com/intent/tweet?hashtags=untterable&text="${textContent}" ${author}`;

  return (
    <div id="quote-box" className="border p-5 rounded">
      <h2 id="text" className="fw-semibold d-flex gap-2"><ImQuotesLeft className="align-self-start"/>{textContent}</h2>
      <p id="author">- {author}</p>
      <div className="row">
        <div className="col border hstack rounded">
          <a
            id="tweet-quote"
            className="mx-auto hstack gap-2"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
            Tweet
          </a>
        </div>
        <div className="col">
          <button
            id="new-quote"
            className="btn btn-primary w-100"
            onClick={action}
          >
            <FiRefreshCcw /> Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

Box.defaultProps = {
  textContent: "",
  author: "",
};

Box.propTypes = {
  textContent: PropTypes.string,
  author: PropTypes.string,
  action: PropTypes.func.isRequired,
};

export default Box;
