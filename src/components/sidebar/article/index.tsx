"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const TableOfContents = ({
  headings,
}: {
  headings: { id: string; title: string; index: number }[];
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.3; // Chỉ mục được tính khi nó cách top khoảng 30% viewport
      let currentId = null;

      for (const heading of headings) {
        const section = document.getElementById(heading.id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top >= 0 && top < threshold) {
            currentId = heading.id;
            break;
          }
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Gọi lần đầu khi trang load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <div className="bg-[#F9FBFC] p-4 rounded-lg">
      <ul className="space-y-2">
        {headings.map((heading) => {
          const isSubItem = !Number.isInteger(heading.index);
          const isActive = activeId === heading.id;

          return (
            <li
              key={heading.id}
              className={`text-sm flex items-center transition-all duration-200 ${
                isActive ? "text-[#10805B] font-bold  " : "text-gray-800"
              }`}
              style={{ marginLeft: isSubItem ? "1rem" : "0rem" }}
            >
              <span className={`mr-2 flex flex-row ${isSubItem ? "ml-4" : ""}`}>
                {heading.index} {isSubItem ? "" : "."}
              </span>
              <ScrollLink
                to={heading.id}
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer hover:underline"
                onSetActive={() => setActiveId(heading.id)}
              >
                {heading.title}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
