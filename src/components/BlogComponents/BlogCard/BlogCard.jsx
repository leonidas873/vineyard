import { useNavigate } from 'react-router-dom';

function BlogCard() {
  const navigate = useNavigate();
  return <div onClick={() => navigate('/blogs/1')}>blog card</div>;
}

export default BlogCard;
