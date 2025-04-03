import { redirect } from "next/navigation";

export default function Home() {
  // Redirect tới trang "/news"
  redirect("/resources/news");
}
