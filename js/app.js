'use strict';

// テーブル登録：名前入力イベント
screen.name.addEventListener('input', (evt) => {
  screen.username = evt.target.value;
});

// テーブル登録：ふりがな入力イベント
screen.kana.addEventListener('input', (evt) => {
  screen.userkana = evt.target.value;
});

// テーブル登録：メールアドレス入力イベント
screen.mail.addEventListener('input', (evt) => {
  screen.usermail = evt.target.value;
});

// テーブル登録：年齢入力イベント
screen.age.addEventListener('input', (evt) => {
  screen.userage = evt.target.value;
});

// テーブル登録：住所入力イベント
screen.addr.addEventListener('input', (evt) => {
  screen.useraddr = evt.target.value;
});

// 一覧検索：ふりがな検索キーワード入力イベント
screen.kywd.addEventListener('input', (evt) => {
  screen.searchkey = evt.target.value;
});

// 接続：接続ボタンイベント
button.connect.addEventListener('click', () => {
  service.execute(service.url.connect, result.connect);
  setTimeout(() => {
    result.connect.textContent = result.data;
  }, 2000);
});

// テーブル作成：作成ボタンイベント
button.create.addEventListener('click', () => {
  service.execute(service.url.create, result.create);
  setTimeout(() => {
    result.create.textContent = result.data;
  }, 2000);
});

// テーブル参照：参照ボタンイベント
button.select.addEventListener('click', () => {
  result.select.mesg.textContent = 'テーブル users の参照結果（カラムid, nameのみ）';
  service.execute(service.url.select, result.select.mesg);
  setTimeout(() => {
    result.select.data.innerHTML = '';
    result.data.forEach((item) => {
      const cell = {
        col1: `<td>${item.id}</td>`,
        col2: `<td>${item.name}</td>`,
      };
      result.select.data.innerHTML += `<tr>${cell.col1}${cell.col2}</tr>`;
    });
  }, 2000);
});

// テーブル登録：登録ボタンイベント
button.entry.addEventListener('click', () => {
  // cf) https://k-markup.com/blog/cannot-get-post-in-php/
  const req_data = new URLSearchParams();
  req_data.append('user_name', screen.username);
  req_data.append('user_furigana', screen.userkana);
  req_data.append('user_email', screen.usermail);
  req_data.append('user_age', screen.userage);
  req_data.append('user_address', screen.useraddr);

  result.entry.mesg.textContent = 'テーブル users の登録結果';
  service.execute(service.url.entry, result.entry.mesg, req_data);
  setTimeout(() => {
    result.entry.data.textContent = result.data;
  }, 2000);
});

// 一覧検索：検索ボタンイベント
button.search.addEventListener('click', () => {
  const req_data = new URLSearchParams();
  req_data.append('keyword', screen.searchkey);

  result.search.mesg.textContent = 'テーブル users の一覧検索結果（カラムname, furiganaのみ）';
  service.execute(service.url.search, result.search.mesg, req_data);
  setTimeout(() => {
    result.search.data.innerHTML = '';
    result.data.forEach((item) => {
      result.search.data.innerHTML += `<tr><td>${item.name}</td><td>${item.furigana}</td></tr>`;
    });
  }, 2000);
});

// 一覧表示：表示ボタンイベント
button.list.addEventListener('click', () => {
  result.list.mesg.textContent = 'テーブル users の一覧表結果';
  service.execute(service.url.list, result.list.mesg);
  setTimeout(() => {
    result.list.data.innerHTML = '';
    result.data.forEach((item) => {
      const cell = {
        col1: `<td>${item.id}</td>`,
        col2: `<td>${item.name}</td>`,
        col3: `<td>${item.furigana}</td>`,
        col4: `<td>${item.email}</td>`,
        col5: `<td>${item.age}</td>`,
        col6: `<td>${item.address}</td>`,
      };
      result.list.data.innerHTML += `<tr>${cell.col1}${cell.col2}${cell.col3}${cell.col4}${cell.col5}${cell.col6}</tr>`;
    });
  }, 2000);
});

// 並び替え：年齢順（昇順）ボタンイベント
button.sort_asc.addEventListener('click', () => {
  result.sortable.mesg.textContent = 'テーブル users の並び替え結果（昇順）';
  service.execute(service.url.sort_asc, result.sortable.mesg);
  setTimeout(() => {
    result.sortable.data.innerHTML = '';
    result.data.forEach((item) => {
      const cell = {
        col1: `<td>${item.id}</td>`,
        col2: `<td>${item.name}</td>`,
        col3: `<td>${item.age}</td>`,
      };
      result.sortable.data.innerHTML += `<tr>${cell.col1}${cell.col2}${cell.col3}</tr>`;
    });
  }, 2000);
});

// 並び替え：年齢順（降順）ボタンイベント
button.sort_desc.addEventListener('click', () => {
  result.sortable.mesg.textContent = 'テーブル users の並び替え結果（降順）';
  service.execute(service.url.sort_desc,result.sortable.mesg);
  setTimeout(() => {
    result.sortable.data.innerHTML = '';
    result.data.forEach((item) => {
      const cell = {
        col1: `<td>${item.id}</td>`,
        col2: `<td>${item.name}</td>`,
        col3: `<td>${item.age}</td>`,
      };
      result.sortable.data.innerHTML += `<tr>${cell.col1}${cell.col2}${cell.col3}</tr>`;
    });
  }, 2000);
});
