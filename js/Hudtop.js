

var list_Page = new Array();

function BackBtn()
{
    if(list_Page.length > 1)
    {
        delete list_Page[list_Page.length - 1];
        OpenPage(list_page[list_Page.length-1]);
    }

    return OpenPage("GameSelection");
}

function AddPage(key)
{
    list_Page[list_Page.length] = key;
}

function OpenPage(key)
{
    AddPage(key);

    switch(key)
    {
        case "GameSelection":
            window.location.href = "http://127.0.0.1:5500/htmls/GameSelection.html";
            break;
        case "MyBank":
                window.location.href = "http://127.0.0.1:5500/htmls/MyBank.html";
                break;
        case "Message":
                window.location.href = "http://127.0.0.1:5500/htmls/MyMessage.html";
        break;
        case "BettingHistory":
                window.location.href = "http://127.0.0.1:5500/htmls/BettingHistory.html";
        break;
        case "ItemShop":
                window.location.href = "http://127.0.0.1:5500/htmls/ItemShop.html";
            break;
    }
}



