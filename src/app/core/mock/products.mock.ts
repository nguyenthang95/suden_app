import { Product } from '../models/models';

export const PRODUCTS: Product[] = [
  // =========================
  // DOG FOOD
  // =========================
  {
    id: 'p-001',
    name: 'Thức ăn hạt vị cừu Mr.vet Lamb Formula 1.4kg cho chó ( D1 )',
    slug: 'thuc-an-hat-vi-cuu-mr-vet-lamb-formula-14kg-cho-cho-d1',
    sku: 'MR-0001',
    categoryId: 'dog-food-mr-vet',
    categoryName: 'MR-VET',
    price: 149000,
    salePrice: 149000,
    stock: 6,
    shortDescription: 'Thức ăn cho chó MR.VET D1 túi 1.4kg – Công thức thịt cừu non, chăm sóc hệ tiêu hóa toàn diện',
    description: `\Mô tả
Thức ăn cho chó MR.VET D1 túi 1.4kg – Công thức thịt cừu non, chăm sóc hệ tiêu hóa toàn diện

Hạt MR.VET D1 là dòng thức ăn Holistic cao cấp được thiết kế dành riêng cho chó với công thức thịt cừu chất lượng cao. Sản phẩm bổ sung đến 9 loại rau và trái cây cùng 12 loại vitamin giúp hỗ trợ hệ tiêu hóa toàn diện, mang lại sức khỏe tối ưu cho thú cưng của bạn.

Ưu điểm nổi bật của thức ăn MR.VET D1:
An toàn cho sức khỏe: Sản phẩm ít hoặc không chứa chất phụ gia và chất bảo quản nhân tạo, đảm bảo an toàn tối đa cho thú cưng.
Phù hợp với mọi lứa tuổi: Thích hợp cho chó con, chó trưởng thành và chó mẹ mang thai.
Thành phần dinh dưỡng nổi bật:
Nguồn protein chất lượng cao:
Thịt cừu non:
Giàu sắt, kẽm, vitamin B12, omega-3 và omega-6.
Hỗ trợ phát triển cơ bắp, tăng cường hệ miễn dịch, cải thiện tuần hoàn máu và chức năng thần kinh.
Giúp da và lông bóng mượt, ít gây dị ứng.
Thịt gà:
Cung cấp vitamin B6 và niacin (B3) giúp chuyển hóa năng lượng và hỗ trợ sự phát triển cơ bắp, xương chắc khỏe.
Nguồn chất béo và omega:
Dầu vịt:
Tăng năng lượng, kích thích vị giác, hỗ trợ da và lông khỏe mạnh.
Dầu cá hồi (omega-3):
Phát triển chức năng thần kinh, hỗ trợ sức khỏe tim mạch và cải thiện nhận thức.
Các loại rau củ quả:
Táo gai, súp lơ, bông cải xanh:
Hỗ trợ tiêu hóa, cung cấp chất xơ giúp kiểm soát cân nặng.
Cà chua:
Bổ sung chất chống oxy hóa, vitamin A và C, tốt cho tim mạch và da.
Bí ngô:
Giàu chất xơ và beta-carotene, cải thiện hệ miễn dịch và hỗ trợ tiêu hóa.
Cà rốt:
Bổ sung beta-carotene, giúp mắt sáng, răng chắc và cải thiện tiêu hóa.
Nam việt quất:
Hỗ trợ chức năng thận và đường tiết niệu nhờ hàm lượng vitamin C cao.
Vitamin và dưỡng chất thiết yếu:
L-lysine: Tăng cường hệ miễn dịch, giảm stress và hỗ trợ điều trị herpes virus.
D-biotin (B7) và niacinamide (B3): Chăm sóc da, lông và móng vuốt khỏe mạnh.
Axit folic (B9): Tăng cường tuần hoàn máu, phát triển hệ thần kinh, đặc biệt cần thiết cho chó mẹ mang thai.
12 loại vitamin: Đảm bảo cân bằng dinh dưỡng, tăng cường sức khỏe toàn diện.`,
    images: [
      {
        id: 'p-001-img-1',
        productId: 'p-001',
        url: 'https://product.hstatic.net/200000264739/product/mr.vet_d1_2_5917471c2e7c408e969c29d7917023c6_master.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        sortOrder: 0,
      },
      {
        id: 'p-001-img-1',
        productId: 'p-001',
        url: 'https://product.hstatic.net/200000264739/product/mr.vet_d1_1_5c34b2041c9e414e8e6ca8789ca49e54_master.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        sortOrder: 0,
      },
      {
        id: 'p-001-img-1',
        productId: 'p-001',
        url: 'https://product.hstatic.net/200000264739/product/mr.vet_d1_1ffa958588ac44f99f9b3b1825e4abb6_master.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        sortOrder: 0,
      },
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: '2026-09-01T08:00:00Z',
    updatedAt: '2026-10-02T08:00:00Z',
  },
   {
    id: 'p-002',
    name: 'Thức ăn mèo MrVet T1 1kg - Hỗ trợ Tiêu hóa',
    slug: 'thuc-an-meo-mr-vet-t1-1kg-ho-tro-tieu-hoa',
    sku: 'MR-0002',
    categoryId: 'cat-food-mr-vet',
    categoryName: 'MR-VET',
    price: 124000,
    salePrice: 124000,
    stock: 2,
    shortDescription: 'Thức ăn mèo MrVet T1 1kg - Hỗ trợ Tiêu hóa',
    description: `MÔ TẢ SẢN PHẨM
💕 Hạt Cho Mèo MRVET T1 & T2 Gói 1KG – Tiêu Hóa Khỏe, Dưỡng Da Mượt Lông, Tăng Đề Kháng | Méo Chò Petshop

⭐️ ĐẶC ĐIỂM SẢN PHẨM MRVET T1

🐾 Dinh dưỡng toàn diện cho mọi lứa tuổi

Phù hợp với mèo con, mèo trưởng thành và mèo mang thai.

Dòng hạt Premium Holistic với mức giá hợp lý, đáp ứng nhu cầu dinh dưỡng hằng ngày cho mèo cưng.

🌿 Nguyên liệu tự nhiên an toàn

Được làm từ nguyên liệu cao cấp, ít hoặc không chứa chất phụ gia và chất bảo quản nhân tạo.

An toàn, lành tính và phù hợp sử dụng lâu dài.

🌱 Bổ sung thảo mộc hỗ trợ sức khỏe

Hạt cỏ linh lăng, hạt vỏ mã đề, hạt lanh và chất chống oxy hóa giúp tăng cường sức đề kháng và duy trì sức khỏe toàn diện.

🍗 Topping thịt đông khô hấp dẫn

Kết hợp 3 loại topping gồm gà, gan gà và lòng đỏ trứng.

Tăng độ ngon miệng, kích thích mèo ăn tốt hơn.

💪 Nguồn đạm chất lượng cao

35% thịt gà và 21% thịt bò cung cấp nguồn protein dồi dào.

Protein thô trên 30% giúp phát triển cơ bắp và duy trì năng lượng.

Bổ sung 10–12% gạo giúp cân bằng khẩu phần dinh dưỡng.

⭐️ ĐẶC ĐIỂM SẢN PHẨM MRVET T2

✨ Dưỡng da – mượt lông – giảm rụng lông

Công thức chuyên biệt giúp nuôi dưỡng làn da khỏe mạnh và bộ lông óng mượt.

Phù hợp với mèo ở mọi lứa tuổi.

🛡️ L-Lysine hỗ trợ sức khỏe hô hấp

Chứa L-Lysine giúp hạn chế sự nhân đôi của virus Herpes.

Đặc biệt phù hợp với những bé mèo có vấn đề về hô hấp.

🐟 Đạm động vật chất lượng cao

35% cá hồi và 21% thịt bò cung cấp nguồn protein dễ hấp thu.

Hàm lượng protein trên 30% giúp duy trì thể trạng khỏe mạnh.

🥕 Hỗ trợ tiêu hóa tự nhiên

Bột cà rốt và tảo xoắn giúp cải thiện chức năng tiêu hóa và hấp thu dưỡng chất.

💖 Tăng cường miễn dịch và chăm sóc toàn diện

Taurine cùng các vitamin A, B1, B2, B6, B12 và C giúp:

Tăng cường sức đề kháng.

Hỗ trợ thị lực.

Giảm rụng lông.

Duy trì làn da và bộ lông khỏe đẹp.

🍳 Topping đông khô siêu hấp dẫn

Gà, gan gà và lòng đỏ trứng giúp kích thích vị giác.

Hỗ trợ cải thiện tình trạng mèo biếng ăn, kén ăn.

⭐️ HƯỚNG DẪN KHẨU PHẦN ĂN

🐱 1 tháng (300g – 600g): 25 – 35g/ngày

🐱 2 tháng (800g – 1,2kg): 45 – 55g/ngày

🐱 3 tháng (1,2kg – 2kg): 50 – 70g/ngày

🐱 4 tháng (1,5kg – 3kg): 60 – 80g/ngày

🐱 6 tháng (2,5kg – 4kg): 60 – 90g/ngày

🐱 9 – 12 tháng (3kg – 5kg): 60 – 90g/ngày

🐱 Trên 1 tuổi (3kg – 4kg): 60 – 80g/ngày

🐱 Trên 1 tuổi (4kg – 5kg): 80 – 100g/ngày

🐱 Trên 1 tuổi (trên 5kg): 100 – 110g/ngày

⭐️ THÀNH PHẦN DINH DƯỠNG

💪 Protein thô ≥ 30%

🥑 Chất béo thô ≥ 12%

🦴 Canxi ≥ 1%

⚖️ Phốt pho tổng ≥ 0.8%

💓 Taurine ≥ 0.2%

🧂 Clorua hòa tan trong nước (dưới dạng Cl-) ≥ 0.3%

🌾 Chất xơ thô ≤ 6%

💧 Độ ẩm ≤ 10%

🦴 Tro thô ≤ 10%

⭐️ QUY CÁCH ĐÓNG GÓI

📦 01 gói MRVET T1 hoặc MRVET T2 trọng lượng 1KG.

✅ CAM KẾT TỪ MÉO CHÒ PETSHOP

💯 Cam kết hàng chính hãng, nguồn gốc rõ ràng.

🔄 Hỗ trợ đổi trả – hoàn tiền nếu khách hàng không hài lòng với sản phẩm.

🚚 Giao hàng đúng và đủ theo đơn đặt hàng.

💬 Tư vấn tận tâm 24/7, giải đáp mọi thắc mắc của khách hàng.

⭐️ LƯU Ý

💧 Luôn chuẩn bị đủ nước sạch cho mèo trong suốt quá trình sử dụng thức ăn khô.

🌤️ Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.`,
    images: [
      {
        id: 'p-002-img-1',
        productId: 'p-002',
        url: 'https://nupet.vn/wp-content/uploads/2025/04/hat-mr-vet-t1.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        sortOrder: 0,
      },
      {
        id: 'p-002-img-2',
        productId: 'p-002',
        url: 'https://nuoipet.com/wp-content/uploads/2025/03/cn-11134207-7ras8-m2s0ipbz18mf08.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        sortOrder: 0,
      },
      
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: '2026-09-01T08:00:00Z',
    updatedAt: '2026-10-02T08:00:00Z',
  },
  {
    id: 'p-003',
    name: 'Thức ăn hạt hỗn hợp gà & cá hồi Mr.Vet 1kg cho mèo ( T2 )',
    slug: 'thuc-an-meo-mr-vet-t1-1kg-ho-tro-tieu-hoa',
    sku: 'MR-0002',
    categoryId: 'cat-food-mr-vet',
    categoryName: 'MR-VET',
    price: 129000,
    salePrice: 129000,
    stock: 3,
    shortDescription: 'Thức ăn hạt hỗn hợp gà & cá hồi Mr.Vet 1kg cho mèo ( T2 )',
    description: `\ĐẶC ĐIỂM SẢN PHẨM:

- Hạt cho mèo MR.VET là dòng hạt thuộc phân khúc cao cấp, không chứa ngũ cốc, giúp cải thiện tiêu hóa, phù hợp với mèo ở mọi lứa tuổi.

- Với thành phần chủ yếu từ thịt gà, lành tính và không gây dị ứng. MR.VET cung cấp tới 30% protein, giúp mèo luôn mạnh khỏe và tràn đầy năng lượng.

- Được bổ sung các dưỡng chất như taurine, vitamin A, B1, B2, B6, B12, C,... giúp mèo nâng cao hệ miễn dịch, có bộ lông mượt mà, giảm tình trạng rụng lông và có đôi mắt sáng.

- Đặc biệt dòng hạt cho mèo MR.VET được mix từ các loại thịt sấy cao cấp, kích thích vị giác, giúp giải quyết tình trạng chán ăn ở mèo.

`,
    images: [
      {
        id: 'p-003-img-1',
        productId: 'p-003',
        url: 'https://product.hstatic.net/200000264739/product/mr.vet_5_6c9e483303e64430b7cd55e5bc123905_master.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        sortOrder: 0,
      },
      {
        id: 'p-003-img-2',
        productId: 'p-003',
        url: 'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mj454m5f5n9fc6?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        sortOrder: 0,
      },
      
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: '2026-09-01T08:00:00Z',
    updatedAt: '2026-10-02T08:00:00Z',
  },
   {
    id: 'p-004',
    name: 'Thức Ăn Hạt MRVET T3 Cho Mèo gói 1kg',
    slug: 'thuc-an-meo-mr-vet-t3-1kg',
    sku: 'MR-0002',
    categoryId: 'cat-food-mr-vet',
    categoryName: 'MR-VET',
    price: 139000,
    salePrice: 139000,
    stock: 3,
    shortDescription: 'Thức Ăn Hạt MRVET T3 Cho Mèo gói 1kg',
    description: `\Đặc điểm nổi bật:

Công thức dinh dưỡng tối ưu: Được nghiên cứu kỹ lưỡng để đáp ứng nhu cầu dinh dưỡng đặc thù cho mèo, sản phẩm cung cấp các khoáng chất, vitamin, và các chất dinh dưỡng cần thiết. Công thức cân bằng này giúp mèo phát triển khỏe mạnh, duy trì sức khỏe tốt.

Hỗ trợ sức khỏe đường tiết niệu: Thành phần bao gồm các khoáng chất và dưỡng chất hỗ trợ giảm thiểu nguy cơ mắc các bệnh về đường tiết niệu, rất quan trọng cho sức khỏe tổng thể của mèo. Công thức giúp duy trì độ pH của nước tiểu ở mức cân bằng, từ đó hạn chế hình thành sỏi tiết niệu.

Giúp tăng cường hệ miễn dịch: Bổ sung các vitamin như Vitamin E và C, cũng như chất chống oxy hóa giúp nâng cao khả năng đề kháng, chống lại các bệnh tật và tăng cường hệ miễn dịch tự nhiên.

Hỗ trợ tiêu hóa tốt: Chứa chất xơ từ thiên nhiên và các enzyme giúp tiêu hóa tốt, cải thiện quá trình hấp thụ chất dinh dưỡng và ngăn ngừa táo bón, đặc biệt thích hợp cho các bé mèo nhạy cảm về tiêu hóa.

Lông mềm mượt, da khỏe mạnh: Omega-3 và Omega-6 cùng các axit béo thiết yếu có trong sản phẩm hỗ trợ cải thiện tình trạng lông và da, giúp lông mèo mượt mà và da luôn khỏe mạnh.`,
    images: [
      {
        id: 'p-004-img-1',
        productId: 'p-004',
        url: 'https://product.hstatic.net/200000264739/product/mr.vet_8_b600bbab7cf7499abe5c0d01d6f85bd9_master.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        sortOrder: 0,
      },
      {
        id: 'p-004-img-2',
        productId: 'p-004',
        url: 'https://nuoipet.com/wp-content/uploads/2025/03/cn-11134207-7ras8-m2s0ipbz18mf08-1.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        sortOrder: 0,
      },
      
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: '2026-09-01T08:00:00Z',
    updatedAt: '2026-10-02T08:00:00Z',
  },
  {
    id: 'p-005',
    name: 'Hạt Mr.Vet G1 1kg Cho Mèo ',
    slug: 'hat-mr-vet-g1-1kg-cho-meo',
    sku: 'MR-0002',
    categoryId: 'cat-food-mr-vet',
    categoryName: 'MR-VET',
    price: 139000,
    salePrice: 139000,
    stock: 3,
    shortDescription: 'Hạt Mr.Vet G1 1kg Cho Mèo - Hương Cá Ngừ, Không Độn Ngũ Cốc, Có Topping Thịt Sấy',
    description: `\ Nguồn đạm chất lượng cao với 26% cá ngừ, 16% cá hồi và 14% thịt gà, cung cấp protein động vật cao cấp giúp Mèo phát triển cơ bắp săn chắc và duy trì năng lượng.

- Không chứa ngũ cốc, phù hợp với mèo có hệ tiêu hóa nhạy cảm hoặc dị ứng với ngũ cốc.

- Hỗ trợ tiêu hóa và giảm mùi hôi phân: Công thức giàu đậu hà lan, bột men bia, Fructooligosaccharides (FOS) giúp tăng cường vi khuẩn có lợi, cải thiện hệ tiêu hóa. Chiết xuất Yucca giúp giảm mùi hôi của phân.

- Với thành phần dầu cá hồi (2%) và dầu gà (8%) giàu Omega-3 và Omega-6, giúp bộ lông mèo bóng mượt, khỏe mạnh, giảm rụng lông.

- Việt quất, bí đỏ, táo cùng các vitamin A, C, E giúp tăng cường sức đề kháng và bảo vệ tế bào.

- Topping thịt tươi tổng hợp đông khô, mang đến hương vị hấp dẫn giúp mèo ăn ngon miệng hơn.



CÔNG DỤNG: 

- Bổ sung đầy đủ protein và dưỡng chất thiết yếu, giúp Mèo duy trì thể trạng khỏe mạnh và tràn đầy năng lượng.

- Giúp giảm kích ứng da, hạn chế các bệnh về da, đồng thời hỗ trợ giảm rụng lông và mang lại bộ lông bóng mượt.

- Giúp xương chắc khỏe, đồng thời hỗ trợ chức năng bài tiết, giúp Mèo phát triển toàn diện.

- Hạn chế mùi hôi của phân, giữ vệ sinh cho không gian sống.

- Giúp tiêu hóa dễ dàng hơn và hỗ trợ đào thải búi lông tự nhiên`,
    images: [
      {
        id: 'p-005-img-1',
        productId: 'p-005',
        url: 'https://cdn.hstatic.net/products/1000217401/d316ee8d851d4be48b45535c8b6c9e57_f262ca7fa98745d39fe6e10d9f0303ff.png?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        sortOrder: 0,
      },
      {
        id: 'p-005-img-2',
        productId: 'p-005',
        url: 'https://salt.tikicdn.com/ts/tmp/b3/b1/48/dfbf193854b05b5cd07a8b7ac3f3dadb.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        sortOrder: 0,
      },
      
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: '2026-09-01T08:00:00Z',
    updatedAt: '2026-10-02T08:00:00Z',
  },
  {
    id: 'p-006',
    name: 'MR.VET-Hạt Cho Mèo E1 Shiny Hair',
    slug: 'hat-mr-vet-e1-shiny-hair',
    sku: 'MR-0002',
    categoryId: 'cat-food-mr-vet',
    categoryName: 'MR-VET',
    price: 149000,
    salePrice: 149000,
    stock: 3,
    shortDescription: 'MR.VET-Hạt Cho Mèo E1 Shiny Hair-Dưỡng Da Lông Chuyên Sâu Từ Dầu Cá Tinh Khiết (Gói 1kg)',
    description: `\Công thức Triple-Omega Complex™ – Bí quyết cho lông mượt, da khỏe: Công nghệ dầu cá hồi Na Uy 80% (RTG Salmon Oil) 

Dầu Omega nano-emulsion: dạng phân tử siêu nhỏ, thẩm thấu nhanh, giúp da khỏe mạnh, giúp thẩm thấu nhanh, giảm tình trạng khô da, rụng lông.

Topping sấy khô gà & dầu cá: “skin snack” tự nhiên, thơm ngon và giàu dưỡng chất cho lông mượt mà.

 48% đạm động vật cao cấp từ cá hồi & thịt gà tươi: giúp cơ bắp săn chắc, mèo năng động, khỏe mạnh.

 Rau củ & siêu thực phẩm (bí đỏ, cà rốt, cải bắp, tảo xoắn, sữa dê): hỗ trợ tiêu hóa, tăng miễn dịch, giữ dáng cân đối.

 Taurine & Choline: tốt cho tim mạch và thị lực, giúp mèo tinh anh và vui tươi.

Canxi – Phospho – Magie: củng cố xương và răng chắc khỏe.

 Kẽm – Đồng – Biotin: giúp da khỏe, lông dày, giảm gãy rụng.

 Vitamin A, D3, E, nhóm B & Selenium: tăng đề kháng, chống oxy hóa, giúp mèo dẻo dai và tươi tắn mỗi ngày.

Hạt cho mọi giống mèo và lứa tuổi .`,
    images: [
      {
        id: 'p-006-img-1',
        productId: 'p-006',
        url: 'https://cdn.hstatic.net/products/200001153242/2a13d918-ad5b-43b1-a926-cc2cd35be25e_bb21b7c4cdcc4e92be763b210d6c7481_grande.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        sortOrder: 0,
      },
      {
        id: 'p-006-img-2',
        productId: 'p-006',
        url: 'https://cdn.hstatic.net/products/200001153242/08417220-ce56-44f7-8205-00f6949a9cc4_09c483e79355477aa22fc84d4c9dc5f8_1024x1024.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        sortOrder: 0,
      },
      
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: '2026-09-01T08:00:00Z',
    updatedAt: '2026-10-02T08:00:00Z',
  },
  {
    id: 'p-007',
    name: 'MRVET-Hạt Cho Mèo E2 Urinary',
    slug: 'hat-mr-vet-e2-urinary',
    sku: 'MR-0002',
    categoryId: 'cat-food-mr-vet',
    categoryName: 'MR-VET',
    price: 149000,
    salePrice: 149000,
    stock: 3,
    shortDescription: 'MRVET-Hạt Cho Mèo E2 Urinary (S/O)-Chăm Sóc Tiết Niệu-Thận (Gói 1kg)',
    description: `\MR. VET E2 Urinary S/O – Thức ăn hạt Holistic cao cấp, chăm sóc sức khỏe đường tiết niệu, ngăn ngừa sỏi hình thành và bảo vệ thận dành cho mèo ở mọi lứa tuổi.

- UroGuard™ 5D Matrix Technology – Lá chắn 5 tầng bảo vệ đường tiết niệu:

+ Chiết xuất nam việt quất (Cranberry): ngăn vi khuẩn bám vào đường tiết niệu, duy trì pH nước tiểu cân bằng (6.0–6.5).

+ Bí đỏ & cà rốt: giàu chất xơ, beta-carotene, hỗ trợ tiêu hóa và tăng cường hệ miễn dịch.

+ Probiotic Bacillus subtilis + FOS: cân bằng hệ vi sinh đường ruột, giảm độc tố và lượng amoniac trong nước tiểu.

+ Cám củ cải đường, Psyllium & Yucca: thúc đẩy dòng chảy nước tiểu, giảm hình thành tinh thể, hạn chế sỏi.

+ Việt quất (Blueberry): chống viêm, chống oxy hóa, bảo vệ bàng quang và niêm mạc đường tiết niệu.

+ Topping sấy khô gà & rau chân vịt cùng topping sấy lòng đỏ trứng: tăng hương vị, bổ sung vitamin A, sắt và lutein chống oxy hóa hỗ trợ tiêu hóa và bảo vệ sức khỏe tiết niệu.

- Công thức ít Magie (0.08%): giúp giảm nguy cơ tái phát sỏi struvite từ 38% xuống chỉ còn 11%.

- 50% protein cao cấp từ cá ngừ và thịt gà tươi: cơ bắp săn chắc, hương vị hấp dẫn, mèo ăn ngon miệng.

- Hỗn hợp siêu thực phẩm (bí đỏ, cà rốt, cải bắp, tảo, spirulina): tăng sức đề kháng, hỗ trợ tiêu hóa, duy trì thể trạng khỏe mạnh.

- Vitamin, khoáng chất & Taurine: bảo vệ tim, mắt, hệ thần kinh và tăng cường sức sống toàn diện cho mèo.`,
    images: [
      {
        id: 'p-007-img-1',
        productId: 'p-007',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1G6G5Az0BwtpwQvxhHhMBXPBomXtp5BO-RdFHHpTmlD-Mp0Q2so2Cow&s=10?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        sortOrder: 0,
      },
      {
        id: 'p-007-img-2',
        productId: 'p-007',
        url: 'https://cdn.hstatic.net/products/200001153242/e91800aa-a968-481e-858c-ca5fbf47d0c6_1b2ea264f3154d8191b0a934ead25d21_grande.jpg?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        sortOrder: 0,
      },
      
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: '2026-09-01T08:00:00Z',
    updatedAt: '2026-10-02T08:00:00Z',
  },
   {
    id: 'p-008',
    name: 'Mr. Vet E3 Gastrointestinal Thức Ăn Hạt Cao Cấp Cho Mèo 1kg',
    slug: 'hat-mr-vet-e3-gastrointestinal',
    sku: 'MR-0003',
    categoryId: 'dog-food',
    categoryName: 'Hạt cho chó',
    price: 149000,
    salePrice: 149000,
    stock: 3,
    shortDescription: 'Mr. Vet E3 Gastrointestinal Thức Ăn Hạt Cao Cấp Cho Mèo 1kg',
    description: `\MR. VET E3 Gastrointestinal 1KG – Thức Ăn Hạt Cho Mèo Hỗ Trợ Tiêu Hóa, Dành Cho Hệ Tiêu Hóa Nhạy Cảm Holistic Cao Cấp

MR. VET E3 Gastrointestinal là thức ăn hạt Holistic cao cấp dành cho mèo mọi lứa tuổi, đặc biệt phù hợp với mèo có hệ tiêu hóa nhạy cảm. Công thức Nano-Protein™ với protein thủy phân siêu nhỏ giúp hấp thu nhanh, giảm gánh nặng cho dạ dày và ruột. Kết hợp enzyme tiêu hóa, lợi khuẩn và siêu thực phẩm giúp cải thiện hệ vi sinh đường ruột, hỗ trợ tiêu hóa khỏe mạnh. Hàm lượng đạm cao từ thịt gà tươi mang lại hương vị hấp dẫn, giúp mèo ăn ngon và phục hồi nhanh sau rối loạn tiêu hóa.

ĐẶC ĐIỂM NỔI BẬT:

Nano-Protein™ siêu hấp thu: Protein thủy phân (<5kDa) dễ tiêu hóa, giảm áp lực đường ruột
Enzyme Amylase: Hỗ trợ tiêu hóa tinh bột, giảm gánh nặng cho hệ tiêu hóa
Probiotic Bacillus subtilis (10⁹ CFU/kg): Cân bằng hệ vi sinh, tăng đề kháng
50% đạm chất lượng cao: Từ thịt gà tươi & thủy phân, giúp mèo ăn ngon, khỏe mạnh
Topping sấy gà & khoai mỡ: Tăng hương vị, bổ sung năng lượng tự nhiên
Rau củ & siêu thực phẩm: Bí đỏ, cà rốt, cải bắp, tảo xoắn, sữa dê hỗ trợ tiêu hóa
Taurine & Vitamin nhóm B: Tốt cho tim, mắt và chuyển hóa năng lượng
Khoáng chất cân bằng: Hỗ trợ phục hồi và duy trì thể trạng ổn định
THÔNG TIN SẢN PHẨM:

Thương hiệu: MR. VET
Dòng sản phẩm: E3 Gastrointestinal
Đối tượng: Mèo mọi lứa tuổi, đặc biệt mèo tiêu hóa nhạy cảm
Khối lượng: 1KG
Hạn sử dụng: 24 tháng (xem trên bao bì)
Thành phần: Thịt gà tươi, thịt gà thủy phân enzyme (<5kDa), enzyme amylase, Bacillus subtilis, bí đỏ, cà rốt, cải bắp, tảo xoắn (spirulina), sữa dê, khoai mỡ, topping gà sấy, vitamin nhóm B, khoáng chất, taurine.`,
    images: [
      {
        id: 'p-008-img-1',
        productId: 'p-008',
        url: 'https://tiemspabonchan.com/cdn/shop/files/SP004071.png?v=1776506545?q=tbn:ANd9GcQF1G6G5Az0BwtpwQvxhHhMBXPBomXtp5BO-RdFHHpTmlD-Mp0Q2so2Cow&s=10?auto=format&fit=crop&w=800&q=80',
        isPrimary: true,
        sortOrder: 0,
      },
      {
        id: 'p-008-img-2',
        productId: 'p-008',
        url: 'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mlg3nndgk9ab65.webp?auto=format&fit=crop&w=800&q=80',
        isPrimary: false,
        sortOrder: 0,
      },
      
    ],
    featured: true,
    status: 'ACTIVE',
    createdAt: '2026-09-01T08:00:00Z',
    updatedAt: '2026-10-02T08:00:00Z',
  },
 
];
