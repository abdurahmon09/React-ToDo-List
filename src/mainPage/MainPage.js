import React, {  useState , useEffect } from "react";
import PostServiceApi from "../API/PostServiceApi";
import PostForm from "../components/PostForm";
import TableList from "../components/TableList";
import MyButton from "../components/UI/Button/MyButton";
import FilterAndSearch from "../components/UI/FilterAndSearch";
import MyLoader from "../components/UI/Loader/MyLoader";
import MyModal from "../components/UI/modal/MyModal";
import MyPagination from "../components/UI/pagination/MyPagination";
import { usePosts } from "../hooks/useCreatePost";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";

function MainPage() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [totalPage, setTotalPage] = useState(0)

  const [fetchPosts, isLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostServiceApi.getAllPosts(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPagesCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <>
    <div className="app w-75 mx-auto">
      <MyButton className="btn btn-primary" onClick={() => setModal(true)}>
        Add post
      </MyButton>
      <MyModal modal={modal} setModal={setModal} >
       <PostForm createPost={createPost}/>
      </MyModal>
      <FilterAndSearch filter={filter} setFilter={setFilter}/>
      {postError && <p>Error</p>}
      {isLoading 
        ? <MyLoader />
        : <TableList remove={removePost} posts={sortedAndSearchPosts} title='Beautiful posts'/>
      }
      <MyPagination page={page} changePage={changePage} totalPage={totalPage}/>
    </div>
    </>
  )
}

export default MainPage;