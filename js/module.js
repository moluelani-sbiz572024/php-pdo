'use strict';

/**
 * 非同期通信を行うオブジェクト
 */
const service = {
  // サービスURL
  url: action,

  // 内部メソッド：通信エラー
  // @param res  結果描画オブジェクト
  // @param resp レスポンスオブジェクト
  _invalid(res, resp) {
    result.code = resp.status;
    res.classList.add('text-danger');
    res.textContent = `${resp.statusText}: 通信エラーが発生`;
  },

  // 内部メソッド：非同期処理エラー
  // @param res   結果描画オブジェクト
  // @param error エラーオブジェクト
  _error(res, error) {
    res.classList.add('text-danger');
    res.textContent = error;
  },

  // 内部メソッド：非同期通信正常処理
  // @param res      結果描画オブジェクト
  // @param response レスポンスオブジェクト
  _normal(res, response) {
    if (response.status !== 200) {
      this._invalid(res, response);
      return;
    }

    console.log(response);

    result.code = response.status;
    res.classList.add('text-success');
    result.data = response.data;
  },

  /**
   * 指定のURL（PHPプロセス）を非同期通信で処理し
   * 結果を結果描画オブジェクトに格納する
   * @param {String} act 通信URL
   * @param {Object} res 結果描画オブジェクト
   * @param {URLSearchParams} parm POS通信パラメーター
   */
  execute(act, res, parm = null) {
    // POST通信かどうかを確認する
    if (parm == null) {
      // GET通信
      axios.get(act).then((response) => {
        this._normal(res, response);
      })
      .catch((error) => {
        this._error(res, error);
      });

    } else {
      // POST通信
      axios.post(act, parm).then((response) => {
        this._normal(res, response);
      })
      .catch((error) => {
        this._error(res, error);
      });
    }
  },
};