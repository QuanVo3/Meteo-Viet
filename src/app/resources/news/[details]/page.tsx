"use client";

import "aos/dist/aos.css";

// Components
import Breadcrumbs from "@/src/components/breadcrums";
import SideBanner from "@/src/components/sidebar/banner";

// Assets
import sideBanner1 from "@/public/assets/image/sideBanner1.png";
import sideBanner2 from "@/public/assets/image/sideBanner2.png";
import logoSmall from "@/public/assets/icon/logoSmall.png";
import LazyImage from "@/src/components/lazy/LazyImage";
import Calendar from "@/src/assets/static/icon/Calendar.png";
import Clock from "@/src/assets/static/icon/Clock.png";
import news1 from "@/public/assets/image/news1.png";
import news2 from "@/public/assets/image/news2.png";
import news3 from "@/public/assets/image/news3.png";
import news4 from "@/public/assets/image/news4.png";
import news5 from "@/public/assets/image/news5.png";

import doubleq from "@/src/assets/static/icon/doubleq.png";
import Image from "next/image";
import ResponsiveImage from "@/src/components/news/image";
import TableOfContents from "@/src/components/sidebar/article";
import Review from "@/src/components/review";
import NewsSlider from "@/src/components/slider";

const NewsDetails = () => {
  const headings = [
    { id: "section-1", title: "Quy trình 5S là gì?", index: 1 },
    { id: "section-2", title: "Lợi ích quy trình 5S đem lại", index: 2 },
    {
      id: "section-3",
      title: "Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
      index: 3,
    },
    {
      id: "section-3-1",
      title: "Cải thiện rõ nét môi trường làm việc",
      index: 3.1,
    },
    { id: "section-3-2", title: "Tiết kiệm thời gian đáng kể", index: 3.2 },
    { id: "section-3-3", title: "Tăng năng suất làm việc", index: 3.3 },
    { id: "section-3-4", title: "Tiết kiệm chi phí", index: 3.4 },
    { id: "section-3-5", title: "Tăng chất lượng sản phẩm", index: 3.4 },
    { id: "section-4", title: "Quy trình 5S gồm các bước", index: 4 },
    { id: "section-4-1", title: "Seiri (Ngăn nắp)", index: 4.1 },
    { id: "section-4-2", title: "Seiton (Sắp xếp)", index: 4.2 },
    { id: "section-4-3", title: "Seiso (Vệ sinh)", index: 4.3 },
    { id: "section-4-4", title: "Seiketsu (Tiêu chuẩn hóa)", index: 4.4 },
    { id: "section-4-5", title: "Shitsuke (Kỷ luật)", index: 4.5 },
    { id: "section-5", title: "Quy trình được thực hiện như sau", index: 5 },
    { id: "section-5-1", title: "Giai đoạn chuẩn bị", index: 5.1 },
    { id: "section-5-2", title: "Triển khai rộng rãi", index: 5.2 },
    {
      id: "section-5-3",
      title: "Thực hiện vệ sinh toàn bộ doanh nghiệp",
      index: 5.3,
    },
    { id: "section-5-4", title: " Sàng lọc, sắp xếp và đánh giá", index: 5.4 },
    { id: "section-5-5", title: "Đánh giá", index: 5.5 },
    { id: "section-6", title: "Quy trình 5S có giống với Kaizen?", index: 6 },
    { id: "section-7", title: "Đối tượng nào nên áp dụng 5S?", index: 7 },
  ];

  return (
    <div className="relative mt-4 lg:mt-18 px-4 sm:px-6 md:px-12">
      {/* Background decorations */}

      <div className="flex flex-col items-start gap-4 lg:gap-12">
        {/* Main Content Section */}
        <Breadcrumbs className="justify-start items-start" />
        <div className="relative flex flex-col-reverse lg:flex-row w-full gap-8 lg:gap-16">
          {/* Main Blog Content */}
          <div className="flex w-full flex-col gap-6">
            <div className="text-body-primary w-full flex flex-col">
              <div className="flex flex-col gap-4">
                <div className="w-fit px-2 py-1 rounded-lg bg-[#E2F0FE]">
                  <span className="body-small-medium text-[#0F4F9E]">
                    Quản Lý Sản Xuất
                  </span>
                </div>
                <span
                  className="text-body-primary body-xLarge-medium text-lg sm:text-xl md:text-2xl lg:text-4xl leading-none font-extrabold"
                  id="section-1"
                >
                  Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
                </span>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-[#F1F5F7]">
                      <LazyImage src={logoSmall.src} width={33} height={32} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-body-secondary body-medium-medium">
                        Tác giả
                      </span>
                      <span className="body-large-xBold text-body-primary">
                        FOSO Creator
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap gap-4 sm:gap-6 items-center">
                    <div className="text-body-secondary body-medium-medium lg:body-large-medium flex flex-row items-center gap-2">
                      <Image
                        src={Calendar}
                        alt="Foso Icon"
                        width={20}
                        height={20}
                      />
                      <span>Cập nhật vào: 17/11/2022</span>
                    </div>
                    <div className="hidden sm:block h-6 border-l border-gray-300"></div>
                    <div className="text-body-secondary body-medium-medium lg:body-large-medium flex flex-row items-center gap-2">
                      <Image
                        src={Clock}
                        alt="Foso Icon"
                        width={20}
                        height={20}
                      />
                      <span>10 phút đọc</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* passage1 */}
              <ResponsiveImage src={news1.src} title={"Quy trình 5s là gì?"} />
              <div className="flex flex-row w-full gap-2 pe-15 mt-6">
                <div className="w-[44] h-[44] flex-none relative">
                  <LazyImage
                    src={doubleq.src}
                    alt="doubleq"
                    width={"100%"}
                    height={"auto"}
                    className="absolute top-[-30] left-0"
                  />
                </div>
                <div className="text-center  italic">
                  Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì?
                  Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả
                  lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố
                  tạo nên thành công của quy trình bạn nhé.
                </div>
              </div>
              <span className="text-[20px] font-extrabold leading-[150%] text-[#15AA7A] my-6">
                1.Quy trình 5S là gì?
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào
                Nhật Bản.  Quy trình 5S hiện nay đang được rất nhiều nước trên
                thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình
                này bao gồm 5 chữ S đầu trong tiếng Nhật:
              </p>
              <ul className="list-disc list-inside text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                <li>
                  <span className="text-[#15AA7A] font-bold">Seiri</span> (Ngăn
                  nắp)
                </li>
                <li>
                  <span className="text-[#15AA7A] font-bold">Seiso </span>(Sạch
                  sẽ)
                </li>
                <li>
                  <span className="text-[#15AA7A] font-bold">Seiton </span>(Trật
                  tự)
                </li>
                <li>
                  <span className="text-[#15AA7A] font-bold">Shitsuke </span>(Kỷ
                  luật)
                </li>
                <li>
                  <span className="text-[#15AA7A] font-bold">Seiketsu </span>
                  (Tiêu chuẩn hóa)
                </li>
              </ul>
              {/* passage2 */}
              <ResponsiveImage src={news1.src} title={"Quy trình 5s là gì?"} />
              <span
                className="text-[20px] font-extrabold leading-[150%] text-[#15AA7A] my-4"
                id="section-2"
              >
                2.Lợi ích quy trình 5S đem lại 
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                mỗi bước của quy trình với mục đích cải tiến môi trường làm việc
                của doanh nghiệp.{" "}
              </p>{" "}
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                {" "}
                Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng
                sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần
                thiết.{" "}
              </p>{" "}
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói
                quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên
                một văn hóa doanh nghiệp tích cực.
              </p>
              <ResponsiveImage
                src={news2.src}
                title={"Tại sao doanh nghiệp cần quy trình 5S?"}
              />
              {/* passage3 */}
              <span
                className="text-[20px] font-extrabold leading-[150%] text-[#15AA7A] my-4"
                id="section-3"
              >
                3.Tại sao doanh nghiệp nên áp dụng quy trình 5S?
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-3-1"
              >
                3.1 Cải thiện rõ nét môi trường làm việc
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn
                gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm
                việc hiệu quả cho từng cá nhân trong doanh nghiệp.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-3-2"
              >
                3.2 Cải thiện rõ nét môi trường làm việc
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
                thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ
                dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ
                đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. 
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-3-3"
              >
                3.3 Cải thiện rõ nét môi trường làm việc
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết,
                tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm
                và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm
                thời gian và tăng năng suất làm việc.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-3-4"
              >
                3.4 Cải thiện rõ nét môi trường làm việc
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và
                sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu
                chi phí vận hành đáng kể cho doanh nghiệp của mình.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-3-5"
              >
                3.5 Cải thiện rõ nét môi trường làm việc
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ
                đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản
                xuất không mong muốn.
              </p>
              {/* passage4 */}
              <ResponsiveImage
                src={news3.src}
                title={"Quy trình 5s gồm các bước"}
              />
              <span
                className="text-[20px] font-extrabold leading-[150%] text-[#15AA7A] my-4"
                id="section-4"
              >
                4.Quy trình 5S gồm các bước
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao
                gồm năm bước cơ bản sau:
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-4-1"
              >
                4.1 Seiri (Ngăn nắp)
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp,
                nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để
                tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm
                thời gian.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-4-2"
              >
                4.2 Seiton (Sắp xếp)
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết
                bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm
                kiếm và sử dụng chúng một cách dễ dàng.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-4-3"
              >
                4.3 Seiso (Vệ sinh)
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân
                trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ.
                Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây
                nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-4-4"
              >
                4.4 Seiketsu (Tiêu chuẩn hóa)
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước
                này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách
                thức sử dụng các dụng cụ, thiết bị, tài liệu.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-4-5"
              >
                4.5 Shitsuke (Kỷ luật)
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng
                vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S
                trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật
                và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì
                và tuân thủ theo quy trình.
              </p>
              {/* passage5 */}
              <ResponsiveImage
                src={news4.src}
                title={"Các bước thực hiện quy trình 5s"}
              />
              <span
                className="text-[20px] font-extrabold leading-[150%] text-[#15AA7A] my-4"
                id="section-5"
              >
                5. Quy trình được thực hiện như sau:
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-5-1"
              >
                5.1 Giai đoạn chuẩn bị
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng
                ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc
                phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ
                hiệu quả hơn.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-5-2"
              >
                5.2 Triển khai rộng rãi{" "}
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
                trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến
                thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-5-3"
              >
                5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                Đây là bước có thể khiến mọi người không hào hứng trong các bước
                của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo
                không khí hào hứng cho từng cá nhân.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-5-4"
              >
                5.4 Sàng lọc, sắp xếp và đánh giá
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ
                doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc
                thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn
                và dễ dàng tìm kiếm sau này.
              </p>
              <span
                className="text-[16px] font-medium leading-[150%] text-[#15AA7A]"
                id="section-5-5"
              >
                5.5 Đánh giá
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá
                trình cải tiến và xem xét cần cải tiến phương diện nào hay không
                trong quá trình thực hiện quy trình 5S.
              </p>
              {/* passage6 */}
              <span
                className="text-[20px] font-extrabold leading-[150%] text-[#15AA7A] mb-6"
                id="section-6"
              >
                6.Quy trình 5S có giống với Kaizen?
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
                không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng
                giữa chúng có mối quan hệ chặt chẽ với nhau.
              </p>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
                trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích
                cực, mang tính liên tục và bền vững. 
              </p>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải
                tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp
                đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. 
              </p>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy
                tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm
                việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước
                đầu tiên trong quá trình cải tiến liên tục của phương pháp
                Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải
                tiến tiếp theo. 
              </p>
              {/* passage7*/}
              <span
                className="text-[20px] font-extrabold leading-[150%] text-[#15AA7A] mb-6"
                id="section-7"
              >
                7.Đối tượng nào nên áp dụng 5S?
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                doanh nghiệp nhỏ.
              </p>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức
                tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng
                hiệu quả.
              </p>
              <ResponsiveImage
                src={news5.src}
                title={"Các yếu tố tạo nên thành công cho quy trình 5S"}
              />
              <span
                className="text-[20px] font-extrabold leading-[150%] text-[#15AA7A] my-6"
                id="section-7"
              >
                7.Đối tượng nào nên áp dụng 5S?
              </span>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Và những nhân tố quyết định đến quá trình thành công của quy
                trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là
                từ phía:
              </p>
              <ul className="list-disc list-inside text-[16px] font-medium leading-[150%] text-[#231F20] mb-6">
                <li>
                  Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp.
                  Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có
                  áp dụng quy tắc này hay không.
                </li>
                <li>
                  Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh
                  đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch
                  thực hiện triển khai 5S. 
                </li>
                <li>
                    Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp
                  cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì
                  lợi ích chung của tổ chức, của doanh nghiệp.
                </li>
              </ul>
              <p className="text-[16px] font-medium leading-[150%] text-[#231f20] mb-6">
                Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt
                tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và
                với những thông tin bổ ích như trên, FOSO mong rằng phần nào
                giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc
                trong tương lai.
              </p>
              {/* rating*/}
              <Review />
            </div>
          </div>

          {/* Sidebar */}
          <div className="sticky top-10 hidden lg:flex h-fit w-full lg:w-2/5 flex-col  gap-6">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-body-primary">
              Nội dung bài viết
            </h2>
            <TableOfContents headings={headings} />;
            <SideBanner img={sideBanner1.src} title={"Trải nghiệm ngay"} />
            <SideBanner img={sideBanner2.src} title={"Tham gia ngay"} />
          </div>
        </div>
        
        <NewsSlider />
      </div>
    </div>
  );
};

export default NewsDetails;
