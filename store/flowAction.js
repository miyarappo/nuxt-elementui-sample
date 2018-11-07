export const state = () => ({
  showingList: [],
  list: {
    browser: [
      {
        title: 'ブラウザを開く',
        description: 'URLを入力してブラウザを開きます'
      },
      {
        title: 'URLへ遷移',
        description: 'ページを移動します'
      },
      {
        title: 'クリック',
        description: '対象の要素を選択してクリックします'
      },
      {
        title: 'マウスオーバー',
        description: 'マウスオーバーします'
      },
      {
        title: '文字入力',
        description: '文字を入力します'
      },
      {
        title: 'テキストを取得',
        description: '対象の要素を選択して取得します'
      },
      {
        title: 'パスワードを入力',
        description: 'パスワードを入力します'
      },
      {
        title: 'キーを選択',
        description: 'キーを選択します'
      },
      {
        title: 'ダウンロードファイル一覧',
        description: 'ダウンロードファイル一覧を表示します'
      }
    ],
    gmail: [
      {
        title: 'Gmailを取得する',
        description: 'Gmail受信データを取得しメール内容を確認できます'
      },
      {
        title: 'Gmailを送信する',
        description: 'Gmail受信データを取得しメール内容を確認できます'
      },
      {
        title: 'Gmailのラベルを検索する',
        description: 'Gmail受信データを取得しメール内容を確認できます'
      }
    ],
    spreadsheet: [
      {
        title: 'ワークシートを選択',
        description: 'ワークシートを選択します'
      },
      {
        title: 'セルを保存',
        description: 'セルを保存します'
      },
      {
        title: '範囲を読み込む',
        description: '範囲を読み込みます'
      }
    ]
  }
})

export const getters = {
  getShowingList: state => state.showingList
}

export const mutations = {
  selectApplication(state, application) {
    state.showingList = state.list[application]
  }
}