


function Cross(type) {
    Title(type);
    RemoveScroll();
}


function WindrawLose(type) {
    Title(type);
    RemoveScroll();
    var parent_node = document.createElement('div');
    parent_node.id = "parent_node";
    document.getElementById('scroll_Field').appendChild(parent_node);

    for (var i = 0; i < 10; ++i) {
        HeaderData("종목","나라","리그");
    }
}

function OpenGameSelection()
{
    document.getElementById('club_name').innerText = "스페셜테스트쿨럽";
}


function HeaderData(sports,county,league)
{
    var div = document.createElement('div');
    var span_sports = document.createElement('span');
    span_sports.innerText = "종목";
    var span_county = document.createElement('span');
    span_county.innerText = "나라";
    var span_league = document.createElement('span');
    span_league.innerText = "리그";
    div.appendChild(span_sports);
    div.appendChild(span_county);
    div.appendChild(span_league);
    parent_node.appendChild(div);
}

function WinDrawLoseBet()
{
    
}



function HandiOverBet()
{

}



function RemoveScroll()
{
    var parent_node = document.getElementById('parent_node');
    if (parent_node != null)
        parent_node.remove();
}

function HandiOver(type) {
    Title(type);
    RemoveScroll();
}


function Special(type) {
    Title(type);
    RemoveScroll();
}

function Live(type) {
    Title(type);
    RemoveScroll();
}

function Title(type) {
    var title;
    switch (type) {
        case "Cross":
            title = "크로스";
            break;
        case "WinDrawLose":
                title = "승무패";
            break;
        case "HandiOver":
                title = "핸디캡/언더오버";
            break;
        case "Special":
                title = "스페셜";
            break;
        case "Live":
                title = "라이브";
            break;

    }

    document.getElementById('Title').innerText = title;

}
