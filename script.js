// サンプルデータ（会社と国）
const rawCompanyData = [
  { companyCode: "01", companyName: "A社", countryCode: "JP" },
  { companyCode: "01", companyName: "A社（米国）", countryCode: "US" },
  { companyCode: "02", companyName: "B社", countryCode: "JP" }
];

// internalKeyを作成して重複するcompanyCodeを一意化（例：01_1, 01_2）
const companyData = [];
const keyCount = {};
rawCompanyData.forEach(c => {
  const base = c.companyCode;
  keyCount[base] = (keyCount[base] || 0) + 1;
  companyData.push({
    ...c,
    internalKey: base + '_' + keyCount[base]
  });
});

// 表示用データ（初期データ）
const bindDataList = [];
const rowCompanyCode = "01";  // DBから取得した値
const rowCountryCode = "JP";

// DBから取得した会社コードと国コードに一致するinternalKeyを見つける
const match = companyData.find(c =>
  c.companyCode === rowCompanyCode && c.countryCode === rowCountryCode
);

// 初期表示用にinternalKeyでcompanyをセット
bindDataList.push({
  country: rowCountryCode,
  company: match ? match.internalKey : null
});

// FlexGridの初期化
const grid = new wijmo.grid.FlexGrid('#gridContainer', {
  autoGenerateColumns: false,
  columns: [
    { 
      binding: 'country', 
      header: '国コード',
      isReadOnly: true // 国コードは編集させない
    },
    {
      binding: 'company',
      header: '会社',
      dataMap: new wijmo.grid.DataMap(companyData, 'internalKey', 'companyName')
      // 'editor' の行を削除
    }
  ],
  itemsSource: bindDataList
});

// 保存処理（internalKey → companyCode に変換）
document.getElementById('saveButton').addEventListener('click', () => {
  const saved = bindDataList.map(row => {
    const c = companyData.find(c => c.internalKey === row.company);
    return {
      countryCode: row.country,
      companyCode: c ? c.companyCode : null
    };
  });
  console.log('保存データ:', saved);
});
