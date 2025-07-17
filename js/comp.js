'use strict';

/**
 * ボタンオブジェクト
 */
const button = {
  connect:   document.querySelector('button.btn-connect'),
  create:    document.querySelector('button.btn-create'),
  select:    document.querySelector('button.btn-select'),
  entry:     document.querySelector('button.btn-entry'),
  search:    document.querySelector('button.btn-search'),
  list:      document.querySelector('button.btn-list'),
  sortable:  document.querySelector('button.btn-sortable'),
  sort_asc:  document.querySelector('button.btn-sort_asc'),
  sort_desc: document.querySelector('button.btn-sort_desc'),
};

/**
 * 画面入力部バインドオブジェクト
 */
const screen = {
  // DOM
  name: document.getElementById('user_name'),
  kana: document.getElementById('user_furigana'),
  mail: document.getElementById('user_email'),
  age:  document.getElementById('user_age'),
  addr: document.getElementById('user_address'),
  kywd: document.getElementById('keyword'),
  // バインド
  username:  null,
  userkana:  null,
  usermail:  null,
  userage:   null,
  useraddr:  null,
  searchkey: null,
};

/**
 * 通信アクション（URL）オブジェクト
 */
const action = {
  connect:   'connect.php',
  create:    'create-table.php',
  select:    'select.php',
  entry:     'insert.php',
  search:    'where-like.php',
  list:      'users.php',
  sort_asc:  'order-by.php?order=asc',
  sort_desc: 'order-by.php?order=desc',
};

/**
 * 結果描画オブジェクト
 */
const result = {
  connect: document.querySelector('div.resp-connect'),
  create: document.querySelector('div.resp-create'),
  select: {
    mesg: document.querySelector('div.resp-select'),
    data: document.querySelector('tbody.resp-select-data'),
  },
  entry: {
    mesg: document.querySelector('div.resp-insert'),
    data: document.querySelector('div.resp-insert-data'),
  },
  search: {
    mesg: document.querySelector('div.resp-where'),
    data: document.querySelector('tbody.resp-where-data'),
  },
  list: {
    mesg: document.querySelector('div.resp-users'),
    data: document.querySelector('tbody.resp-users-data'),
  },
  sortable: {
    mesg: document.querySelector('div.resp-orderby'),
    data: document.querySelector('tbody.resp-orderby-data'),
  },
  code: -1,
  data: null,
};