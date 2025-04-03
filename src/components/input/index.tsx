// import { Search } from "lucide-react";

import { Iconly } from "react-iconly";

const SearchBox = () => {
  return (
    <div
      className="w-full  h-fit flex flex-row items-center bg-white px-2 py-3 rounded-xl"
      style={{ boxShadow: "0px 12px 24px -4px #919EAB29" }}
    >
      <input
        type="text"
        placeholder="Tìm kiếm bài viết"
        className="w-full h-full body-large-medium outline-none focus:ring-0 focus:outline-none text-body-secondary"
      />
      <button className="flex items-center justify-center bg-[#15AA7A] rounded-xl h-12 w-12 flex-none text-white">
        <Iconly name="Search" size={24} />
      </button>
    </div>
  );
};

export default SearchBox;
