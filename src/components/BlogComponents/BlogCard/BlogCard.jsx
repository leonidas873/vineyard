/* eslint-disable prettier/prettier */
import { useNavigate } from 'react-router-dom';
import './BlogCard.css';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

function BlogCard() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Container" onClick={() => navigate('/blogs/1')}>
        <div className="box">
          <span className="box-Time">AUG 5, 2019 ADMIN 3</span>
          <h2 className="box-Title">Know About Our God Who Created This Universe</h2>
          <img
            className="img"
            src="https://preview.colorlib.com/theme/vineyard/images/image_1.jpg"
          />
          <p className="box-text">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
        </div>
        <div className="box">
          <span className="box-Time">AUG 5, 2019 ADMIN 3</span>
          <h2 className="box-Title">Know About Our God Who Created This Universe</h2>
          <img
            className="img"
            src="https://preview.colorlib.com/theme/vineyard/images/image_2.jpg"
          />
          <p className="box-text">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
        </div>
        <div className="box">
          <span className="box-Time">AUG 5, 2019 ADMIN 3</span>
          <h2 className="box-Title">Know About Our God Who Created This Universe</h2>
          <img
            className="img"
            src="	https://preview.colorlib.com/theme/vineyard/images/image_3.jpg"
          />
          <p className="box-text">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
        </div>
        <div className="box">
          <span className="box-Time">AUG 5, 2019 ADMIN 3</span>
          <h2 className="box-Title">Know About Our God Who Created This Universe</h2>
          <img
            className="img"
            src="		https://preview.colorlib.com/theme/vineyard/images/image_4.jpg"
          />
          <p className="box-text">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
        </div>
        <div className="box">
          <span className="box-Time">AUG 5, 2019 ADMIN 3</span>
          <h2 className="box-Title">Know About Our God Who Created This Universe</h2>
          <img
            className="img"
            src="		https://preview.colorlib.com/theme/vineyard/images/image_5.jpg"
          />
          <p className="box-text">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
        </div>
        <div className="box">
          <span className="box-Time">AUG 5, 2019 ADMIN 3</span>
          <h2 className="box-Title">Know About Our God Who Created This Universe</h2>
          <img
            className="img"
            src="		https://preview.colorlib.com/theme/vineyard/images/image_6.jpg"
          />
          <p className="box-text">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
        </div>
      </div>
      <div className="Numbers-container">
        <ul className="Numbers">
          <li className="Numbers-List">
            {' '}
            <AiOutlineDoubleLeft className="Numbers-link" />{' '}
          </li>
          <li className="Numbers-List">
            {' '}
            <span className="Numbers-link">1</span>{' '}
          </li>
          <li className="Numbers-List">
            {' '}
            <span className="Numbers-link">2</span>
          </li>
          <li className="Numbers-List">
            <span className="Numbers-link">3</span>
          </li>
          <li className="Numbers-List">
            {' '}
            <span className="Numbers-link">4</span>{' '}
          </li>
          <li className="Numbers-List">
            {' '}
            <span className="Numbers-link">5</span>{' '}
          </li>
          <li className="Numbers-List">
            {' '}
            <AiOutlineDoubleRight className="Numbers-link" />{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BlogCard;
