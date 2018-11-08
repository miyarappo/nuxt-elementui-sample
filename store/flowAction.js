export const state = () => ({
  showingList: [],
  list: {
    browser: [
      {
        title: 'ブラウザを開く',
        description: 'URLを入力してブラウザを開きます',
        task: '+open_browzer_1'
      },
      {
        title: 'URLへ遷移',
        description: 'ページを移動します',
        task: '+go_to_1'
      },
      {
        title: 'クリック',
        description: '対象の要素を選択してクリックします',
        task: '+click_1'
      },
      {
        title: 'マウスオーバー',
        description: 'マウスオーバーします',
        task: '+hover_1'
      },
      {
        title: '文字入力',
        description: '文字を入力します',
        task: '+type_text_1'
      },
      {
        title: 'テキストを取得',
        description: '対象の要素を選択して取得します',
        task: '+get_text_1'
      },
      {
        title: 'パスワードを入力',
        description: 'パスワードを入力します',
        task: '+type_password_1'
      },
      {
        title: 'キーを送信',
        description: 'キーを送信します',
        task: '+send_keys_1'
      }
    ],
    gmail: [
      {
        title: 'Gmailを取得する',
        description: 'Gmail受信データを取得しメール内容を確認できます',
        task: '+gamil_get_1'
      },
      {
        title: 'Gmailを送信する',
        description: 'Gmail受信データを取得しメール内容を確認できます',
        task: '+gmail_send_1'
      }
    ],
    spreadsheet: [
      {
        title: 'ワークシートを選択',
        description: 'ワークシートを選択します',
        task: '+select_sheet_1'
      },
      {
        title: 'セルに書き込む',
        description: 'セルに書き込みます',
        task: '+write_cell_1'
      },
      {
        title: '範囲を読み込む',
        description: '範囲を読み込みます',
        task: '+read_range_1'
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
  },
  resetShowingList(state) {
    state.showingList = []
  }
}