const reply_en = `----------------------
Sure, I studied at Cao Thang Technical college and I graduated in 2019 with a degree in automobile engineering.

Sure, I studied at Cao Thang Technical college and I graduated in 2019 with a degree in automobile engineering.

Sure, I studied at Cao Thang Technical college and I graduated in 2019 with a degree in automobile engineering.

Sure, I studied at Cao Thang Technical college and I graduated in 2019 with a degree in automobile engineering.

Sure, I studied at Cao Thang Technical college and I graduated in 2019 with a degree in automobile engineering.

----------------------

At school, I took part in "mini racing car" competition and some other volunteer activities such as Green Summer Campaign, and blood donation.

At school, I took part in "mini racing car" competition and some other volunteer activities such as Green Summer Campaign, and blood donation.

At school, I took part in "mini racing car" competition and some other volunteer activities such as Green Summer Campaign, and blood donation.

At school, I took part in "mini racing car" competition and some other volunteer activities such as Green Summer Campaign, and blood donation.

At school, I took part in "mini racing car" competition and some other volunteer activities such as Green Summer Campaign, and blood donation.

----------------------

In the five final year, I have had an internship at Toyota factory for 6 months helps me get more experiences in repairing automobiles.

In the five final year, I have had an internship at Toyota factory for 6 months helps me get more experiences in repairing automobiles.

In the five final year, I have had an internship at Toyota factory for 6 months helps me get more experiences in repairing automobiles.

In the five final year, I have had an internship at Toyota factory for 6 months helps me get more experiences in repairing automobiles.

In the five final year, I have had an internship at Toyota factory for 6 months helps me get more experiences in repairing automobiles.

----------------------`;

const reply_vi = `----------------------
Chắc chắn rồi, tôi học trường Cao đẳng Kỹ thuật Cao Thắng và tôi tốt nghiệp năm 2019 với bằng kỹ sư ô tô.

Chắc chắn rồi, tôi học trường Cao đẳng Kỹ thuật Cao Thắng và tôi tốt nghiệp năm 2019 với bằng kỹ sư ô tô.

Chắc chắn rồi, tôi học trường Cao đẳng Kỹ thuật Cao Thắng và tôi tốt nghiệp năm 2019 với bằng kỹ sư ô tô.

Chắc chắn rồi, tôi học trường Cao đẳng Kỹ thuật Cao Thắng và tôi tốt nghiệp năm 2019 với bằng kỹ sư ô tô.

Chắc chắn rồi, tôi học trường Cao đẳng Kỹ thuật Cao Thắng và tôi tốt nghiệp năm 2019 với bằng kỹ sư ô tô.

----------------------

Ở trường, em tham gia cuộc thi "đua xe mini" và một số hoạt động tình nguyện khác như Chiến dịch Mùa hè xanh, hiến máu nhân đạo.

Ở trường, em tham gia cuộc thi "đua xe mini" và một số hoạt động tình nguyện khác như Chiến dịch Mùa hè xanh, hiến máu nhân đạo.

Ở trường, em tham gia cuộc thi "đua xe mini" và một số hoạt động tình nguyện khác như Chiến dịch Mùa hè xanh, hiến máu nhân đạo.

Ở trường, em tham gia cuộc thi "đua xe mini" và một số hoạt động tình nguyện khác như Chiến dịch Mùa hè xanh, hiến máu nhân đạo.

Ở trường, em tham gia cuộc thi "đua xe mini" và một số hoạt động tình nguyện khác như Chiến dịch Mùa hè xanh, hiến máu nhân đạo.

----------------------

Năm năm cuối, tôi đã có 6 tháng thực tập tại nhà máy Toyota giúp tôi có thêm kinh nghiệm sửa chữa ô tô.

Năm năm cuối, tôi đã có 6 tháng thực tập tại nhà máy Toyota giúp tôi có thêm kinh nghiệm sửa chữa ô tô.

Năm năm cuối, tôi đã có 6 tháng thực tập tại nhà máy Toyota giúp tôi có thêm kinh nghiệm sửa chữa ô tô.

Năm năm cuối, tôi có 6 tháng thực tập tại nhà máy Toyota giúp tôi có thêm kinh nghiệm sửa chữa ô tô.

Năm năm cuối, tôi đã có 6 tháng thực tập tại nhà máy Toyota giúp tôi có thêm kinh nghiệm sửa chữa ô tô.

----------------------`;

// Không được trùng nhau.
const obj = [
  {
    en: "",
    vi: "",
  },
];
// B1. split

// ----------------------

// B2. loop qua từng phần tử và push nó vào trong mảng đối tượng.

const dataToList = (data, key) => {
  const result = [];
  const list_rep_en = data
    .split("----------------------")
    .filter((item) => item != "");

  list_rep_en.map((item) => {
    result.push({
      [key]: item,
    });
  });
  return result;
};

const stringToArr = (data) => {
  return data.split("\n").filter((item) => item != "");
};

const vi = dataToList(reply_vi, "vi");

const en = dataToList(reply_en, "en");

const result = en.map((item, key) => {
  return {
    en: stringToArr(en[key].en)[0].toLowerCase(),
    vi: stringToArr(vi[key].vi)[0].toLowerCase(),
  };
});

console.log(result);
