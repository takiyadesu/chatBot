const chatux = new ChatUx();

//ChatUXの初期化パラメータ
const initParam =
{
    renderMode: 'auto',
    api: {
        //echo chat server
        endpoint: 'https://script.google.com/macros/s/AKfycbx6JqbsYMIIcJe15IVQQUeNYDtlcLXsJc158EduJul3E92ruPs/exec',
        method: 'GET',
        dataType: 'jsonp'
    },
    bot: {
        botPhoto: 'https://riversun.github.io/chatbot/bot_icon_operator.png',
        humanPhoto: null,
        widget: {
            sendLabel: '送信',
            placeHolder: '何か話しかけてみてください'
        }
    },
    window: {
        title: 'エコーボット',
        // infoUrl: 'https://github.com/riversun/chatux'
    }
};
chatux.init(initParam);
chatux.start(true);