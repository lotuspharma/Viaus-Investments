export interface BlogPost {
  slug: string;
  titleEn: string;
  titleVi: string;
  excerptEn: string;
  excerptVi: string;
  contentEn: string;
  contentVi: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "australia-vietnam-trade-outlook-2026",
    titleEn: "Australia-Vietnam Trade Outlook for 2026",
    titleVi: "Triển vọng thương mại Úc-Việt Nam năm 2026",
    excerptEn:
      "An in-depth analysis of the growing trade relationship between Australia and Vietnam, highlighting key sectors and emerging opportunities.",
    excerptVi:
      "Phân tích chuyên sâu về mối quan hệ thương mại đang phát triển giữa Úc và Việt Nam, nêu bật các lĩnh vực chủ chốt và cơ hội mới nổi.",
    contentEn:
      "The bilateral trade relationship between Australia and Vietnam continues to strengthen. With the AANZFTA and CPTPP trade agreements in effect, both nations have seen significant growth in cross-border commerce. Key sectors including pharmaceuticals, agriculture, and technology show particularly promising trajectories for 2026 and beyond.",
    contentVi:
      "Mối quan hệ thương mại song phương giữa Úc và Việt Nam tiếp tục được củng cố. Với các hiệp định thương mại AANZFTA và CPTPP có hiệu lực, cả hai quốc gia đã chứng kiến sự tăng trưởng đáng kể trong thương mại xuyên biên giới.",
    category: "market",
    date: "2026-09-15",
    readTime: "5 min",
    image: "/images/blog-trade.jpg",
  },
  {
    slug: "pharmaceutical-technology-transfer-guide",
    titleEn: "Guide to Pharmaceutical Technology Transfer: Australia to Vietnam",
    titleVi: "Hướng dẫn chuyển giao công nghệ dược phẩm: Từ Úc sang Việt Nam",
    excerptEn:
      "Understanding the regulatory landscape and best practices for pharmaceutical technology transfer between the two nations.",
    excerptVi:
      "Tìm hiểu về bối cảnh pháp lý và các phương pháp tốt nhất cho việc chuyển giao công nghệ dược phẩm giữa hai quốc gia.",
    contentEn:
      "Pharmaceutical technology transfer from Australia to Vietnam represents a significant opportunity. Australia's robust pharmaceutical research ecosystem, combined with Vietnam's growing manufacturing capabilities, creates ideal conditions for knowledge and technology exchange.",
    contentVi:
      "Chuyển giao công nghệ dược phẩm từ Úc sang Việt Nam đại diện cho một cơ hội đáng kể. Hệ sinh thái nghiên cứu dược phẩm mạnh mẽ của Úc, kết hợp với năng lực sản xuất ngày càng tăng của Việt Nam, tạo điều kiện lý tưởng cho việc trao đổi kiến thức và công nghệ.",
    category: "pharma",
    date: "2026-08-28",
    readTime: "7 min",
    image: "/images/blog-pharma.jpg",
  },
  {
    slug: "cosmeceutical-market-vietnam-growth",
    titleEn: "Vietnam's Cosmeceutical Market: A $2B Opportunity",
    titleVi: "Thị trường dược mỹ phẩm Việt Nam: Cơ hội 2 tỷ USD",
    excerptEn:
      "Vietnam's cosmeceutical market is experiencing rapid growth, driven by rising consumer awareness and demand for premium products.",
    excerptVi:
      "Thị trường dược mỹ phẩm Việt Nam đang trải qua tăng trưởng nhanh chóng, được thúc đẩy bởi nhận thức ngày càng tăng của người tiêu dùng.",
    contentEn:
      "The Vietnamese cosmeceutical market has emerged as one of Southeast Asia's most dynamic sectors. With a young, beauty-conscious population and increasing disposable income, demand for science-backed cosmetic products continues to accelerate.",
    contentVi:
      "Thị trường dược mỹ phẩm Việt Nam đã nổi lên như một trong những lĩnh vực năng động nhất Đông Nam Á. Với dân số trẻ, có ý thức về làm đẹp và thu nhập khả dụng ngày càng tăng.",
    category: "market",
    date: "2026-08-10",
    readTime: "6 min",
    image: "/images/blog-cosmeceutical.jpg",
  },
  {
    slug: "contract-manufacturing-best-practices",
    titleEn: "Contract Manufacturing Best Practices for Cross-Border Projects",
    titleVi: "Các phương pháp tốt nhất trong sản xuất gia công cho dự án xuyên biên giới",
    excerptEn:
      "Key considerations and strategies for successful contract manufacturing partnerships between Australian and Vietnamese companies.",
    excerptVi:
      "Những cân nhắc và chiến lược chính cho quan hệ đối tác sản xuất gia công thành công giữa các công ty Úc và Việt Nam.",
    contentEn:
      "Cross-border contract manufacturing requires careful planning, clear communication, and robust quality frameworks. This guide covers the essential steps for establishing successful manufacturing partnerships.",
    contentVi:
      "Sản xuất gia công xuyên biên giới đòi hỏi lập kế hoạch cẩn thận, giao tiếp rõ ràng và khung chất lượng vững chắc.",
    category: "trade",
    date: "2026-07-22",
    readTime: "8 min",
    image: "/images/blog-manufacturing.jpg",
  },
  {
    slug: "agritech-opportunities-vietnam",
    titleEn: "AgriTech Opportunities: Bringing Australian Innovation to Vietnam",
    titleVi: "Cơ hội AgriTech: Đưa đổi mới của Úc đến Việt Nam",
    excerptEn:
      "Exploring how Australian agricultural technology can transform Vietnamese farming and food production.",
    excerptVi:
      "Khám phá cách công nghệ nông nghiệp Úc có thể chuyển đổi nông nghiệp và sản xuất thực phẩm Việt Nam.",
    contentEn:
      "Australia's world-leading agricultural technology sector presents enormous potential for Vietnam's rapidly modernizing agricultural industry. From precision farming to food processing technology, the opportunities for technology transfer are vast.",
    contentVi:
      "Ngành công nghệ nông nghiệp hàng đầu thế giới của Úc mang lại tiềm năng to lớn cho ngành nông nghiệp đang hiện đại hóa nhanh chóng của Việt Nam.",
    category: "technology",
    date: "2026-07-05",
    readTime: "5 min",
    image: "/images/blog-agritech.jpg",
  },
];
