import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="pt-32 flex flex-col gap-4 justify-center items-center">
        <SearchBar />
        <div className="flex flex-wrap justify-center items-center gap-8 px-8 ">
          <BlogCard
            h1="Cara Menjadi Kuat"
            para="lorem ipsum adsajsd dasudhas dsauhd duaihsd saduahsd duashdasu"
            img="https://images.unsplash.com/photo-1619361794061-d050a4f1c8a2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <BlogCard
            h1="Cara Menjadi Kuat"
            para="lorem ipsum adsajsd dasudhas dsauhd duaihsd saduahsd duashdasu"
            img="https://images.unsplash.com/photo-1619361794061-d050a4f1c8a2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <BlogCard
            h1="Cara Menjadi Kuat"
            para="lorem ipsum adsajsd dasudhas dsauhd duaihsd saduahsd duashdasu"
            img="https://images.unsplash.com/photo-1619361794061-d050a4f1c8a2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
