export const data = [
  { name: "山田 太郎", nameKana: "やまだ たろう", age: 25, email: "yamada@example.com", phone: "080-1234-0001", address: "福岡県", course: "ロボット" },
  { name: "佐藤 花子", nameKana: "さとう はなこ", age: 30, email: "sato@example.com", phone: "080-1234-0002", address: "佐賀県", course: "Java" },
  { name: "鈴木 一郎", nameKana: "すずき いちろう", age: 35, email: "suzuki@example.com", phone: "080-1234-0003", address: "熊本県", course: "Unity" },
  { name: "高橋 恵", nameKana: "たかはし めぐみ", age: 28, email: "takahashi@example.com", phone: "080-1234-0004", address: "鹿児島県", course: "Java" },
  { name: "伊藤 真奈美", nameKana: "いとう まなみ", age: 22, email: "ito@example.com", phone: "080-1234-0005", address: "長崎県", course: "ロボット" },
  { name: "渡辺 健", nameKana: "わたなべ けん", age: 40, email: "watanabe@example.com", phone: "080-1234-0006", address: "宮崎県", course: "Unity" },
  { name: "中村 美咲", nameKana: "なかむら みさき", age: 29, email: "nakamura@example.com", phone: "080-1234-0007", address: "大分県", course: "ロボット" },
  { name: "小林 大輔", nameKana: "こばやし だいすけ", age: 33, email: "kobayashi@example.com", phone: "080-1234-0008", address: "佐賀県", course: "Java" },
  { name: "加藤 愛", nameKana: "かとう あい", age: 27, email: "kato@example.com", phone: "080-1234-0009", address: "沖縄県", course: "Unity" },
  { name: "吉田 真", nameKana: "よしだ まこと", age: 31, email: "yoshida@example.com", phone: "080-1234-0010", address: "山口県", course: "ロボット" },
  { name: "山本 佳子", nameKana: "やまもと よしこ", age: 26, email: "yamamoto@example.com", phone: "080-1234-0011", address: "鳥取県", course: "Unity" },
  { name: "松本 亮", nameKana: "まつもと りょう", age: 34, email: "matsumoto@example.com", phone: "080-1234-0012", address: "和歌山県", course: "Java" },
  { name: "井上 理沙", nameKana: "いのうえ りさ", age: 24, email: "inoue@example.com", phone: "080-1234-0013", address: "広島県", course: "Unity" },
  { name: "清水 拓也", nameKana: "しみず たくや", age: 32, email: "shimizu@example.com", phone: "080-1234-0014", address: "京都府", course: "ロボット" },
  { name: "斎藤 奈々", nameKana: "さいとう なな", age: 36, email: "saito@example.com", phone: "080-1234-0015", address: "大阪府", course: "Java" },
  { name: "森本 陽介", nameKana: "もりもと ようすけ", age: 38, email: "morimoto@example.com", phone: "080-1234-0016", address: "兵庫県", course: "Unity" },
  { name: "石川 恵美", nameKana: "いしかわ えみ", age: 39, email: "ishikawa@example.com", phone: "080-1234-0017", address: "奈良県", course: "ロボット" },
  { name: "橋本 健太", nameKana: "はしもと けんた", age: 41, email: "hashimoto@example.com", phone: "080-1234-0018", address: "滋賀県", course: "Unity" },
  { name: "山崎 美咲", nameKana: "やまざき みさき", age: 42, email: "yamazaki@example.com", phone: "080-1234-0019", address: "三重県", course: "Java" },
  { name: "藤田 拓海", nameKana: "ふじた たくみ", age: 38, email: "fujita@example.com", phone: "080-1234-0020", address: "愛知県", course: "ロボット" },
  { name: "西村 美香", nameKana: "にしむら みか", age: 37, email: "nishimura@example.com", phone: "080-1234-0021", address: "静岡県", course: "Java" },
  { name: "青木 大輔", nameKana: "あおき だいすけ", age: 43, email: "aoki@example.com", phone: "080-1234-0022", address: "岐阜県", course: "Unity" },
];

const collator = new Intl.Collator("ja", { sensitivity: "base", numeric: true });

export const kanaSortingFn = (rowA: any, rowB: any, columnId: string) => {
  if (columnId === "name") {
    const a = rowA.original.nameKana || "";
    const b = rowB.original.nameKana || "";
    return collator.compare(a, b);
  }

  const a = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);

  if (typeof a === "number" && typeof b === "number") return a - b;
  if (typeof a === "string" && typeof b === "string") return collator.compare(a, b);

  return 0;
};

export const columns = [
  { accessorKey: "name", header: "Name", sortingFn: kanaSortingFn },
  { accessorKey: "age", header: "Age", sortingFn: kanaSortingFn },
  { accessorKey: "email", header: "Email", sortingFn: kanaSortingFn },
  { accessorKey: "phone", header: "Phone", sortingFn: kanaSortingFn },
  { accessorKey: "address", header: "Address", sortingFn: kanaSortingFn },
  { accessorKey: "course", header: "Course", sortingFn: kanaSortingFn },
];
