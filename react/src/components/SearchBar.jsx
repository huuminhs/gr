import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import postService from "../services/postService";

export function SearchBar(props) {
  const [data, setData] = useState("");

  async function searchPost(str) {
    try {
      const res = await postService.searchPost(data)
      props.setPostData(res.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  const onSearch = (e) => {
    e.preventDefault();
    console.log(data)
    searchPost()
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="px-2 w-full sm:w-64 md:w-72 lg:w-96">
      <form onSubmit={onSearch}>
        <Input
          label="Tìm bài đăng"
          variant="standard"
          onChange={handleChange}
          value={data}
          icon={<FaSearch />}
        />
      </form>
    </div>
  );
}
