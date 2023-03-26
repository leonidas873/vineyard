import './App.css';
import Layout from 'Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Pages from 'pages';

function App() {
  console.log('hello');
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/ministries" element={<Pages.Ministries />} />
          <Route path="/sermons" element={<Pages.Sermons />} />
          <Route path="/events" element={<Pages.Events />} />
          <Route path="/blogs" element={<Pages.Blog />} />
          <Route path="/blogs/:id" element={<Pages.SingleBlog />} />
          <Route path="/contact" element={<Pages.Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
