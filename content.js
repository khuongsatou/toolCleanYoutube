TIME_OUT_COUNT_DOWN_SECONDS = 4;

function createElementPage() {
    const html_page = `<h1>Tool write by Khương</h1>
    <h2>Extension</h2>
    <!-- The Modal -->
    <div id="myModal" class="modal" style="display:block;">
        <!-- Modal content -->
        <div class="modal-content" style="margin:auto;">
            <div class="modal-header">
                <table style="width:100%">
                    <tr>
                        <td colspan="3">
                           

                        </td>
                        <td>
                         <p id="show_message" style="color:white;font-weight:bold;font-size:30px;background-color:red;text-align:center;">INPUT</p>
                         <p id="demo" style="color:white;font-weight:bold;font-size:30px;background-color:red;text-align:center;">COUNT_DOWN</p>
                          <p id="show_message_result" style="color:white;font-weight:bold;font-size:30px;background-color:red;text-align:center;">RESULT</p>
                           
                        </td>

                        <td>
                           
                            </div>

                        </td>
                    </tr>
                </table>
                <div class="fomrgroup" style="display: none;flex-direction: row;justify-content: flex-end;" id="id_limit">
                    <input type="text" name="input_rep" id="input_limit" value="" style="width:100px;" class="input_form">
                </div>
            </div>
            <div class="modal-body" style="clear:bold;">
                <table style="width:100%" id="id_table_sample">
                </table>
                <form action="#" id="myForm" autocomplete="off">
                    <div class="fomrgroup">
                        <input type="text" name="input_rep" id="input_rep" value="" style="width:100%;" class="input_form" autofocus>
                        <input type="hidden" id="input_rep_first" value="1" style="width:100%;">
                    </div>
                    <div class="fomrgroup" style="margin-top:10px;">
                        <button id="check_answer" type="button" class="input_submit">Kiểm tra</button>
                    </div>
                </form>
            </div>
            <div class="modal-footer" style="display:none;background-color:#333;" id="id_footer">
                <table style="width:100%">
                    <tr>
                        <th>
                            <div style="width:100%;display: flex;">
                                <h4 id="question_old" style="text-align: left;color:rgba(255, 255, 255, 0.63)" class="id_h4">
                                </h4>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div style="width:100%;display: flex;">
                                <h4 id="id_qs_old" style="text-align: left;color:rgba(255, 255, 255, 0.63)" class="id_h4">
                                </h4>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <div style="width:100%;display: flex;">
                                <h6 id="reply" style="text-align: left;color:rgba(255, 255, 255, 0.46)" class="id_h6">
                                </h6>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <div style="width:100%;display: flex;">
                                <h6 id="reply_correct" style="text-align: left;color:#4bb543;" class="id_h5"></h6>
                            </div>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            <div style="width:100%;display: flex;">
                                <h6 id="answer" style="text-align: left;color:rgba(255, 255, 255, 0.46);" class="id_h6">
                                </h6>
                               
                            </div>
                        </td>

                    </tr>

                </table>
            </div>
            <div class="modal-footer">
                <table style="width:100%" id="id_footer_frame">
                    <tr>
                        <td>
                          
                        </td>
                        <td>
                         
                        </td>
                         <td>
                          
                        </td>
                    </tr>

                </table>

                <div style="height:500"></div>

            </div>
        </div>
    </div>
  `;

    const node = document.createElement("div");
    node.innerHTML += html_page;
    // Auto in và page facebook không cần chạy extension
    document.body.appendChild(node);
}

function handleCalc() {
    // let showMessage = document.getElementById("show_message");
    let showMessageResult = document.getElementById("show_message_result");

    list_number = [];

    let timerCalc = setInterval(() => {
        // init count down
        count_down_init = TIME_OUT_COUNT_DOWN_SECONDS;
        if (list_number.length >= 3) {
            clearInterval(timerCalc);
            // tính toán kết quả
            result = list_number.reduce(add, 0);
            // tính xong kết quả thì thời gian cho count down sẽ là 6 : 5 4 3 2 1 -> thời gian nhập đáp án
            countDown(6);
            // 5s sau thì mới show kết quả
            let timerResult = setTimeout(() => {
                showMessageResult.innerText = result;
                clearTimeout(timerResult);
            }, 6000);
        } else {
            numberRandom = Math.floor(Math.random() * 101);
            showNumber(numberRandom);
            // Countdown mặc định sẽ là 4 -> 3 2 1 0
            countDown(4);
            list_number.push(numberRandom);
        }
    }, 5000);
}

function add(accumulator, a) {
    return accumulator + a;
}

function showNumber(numberRandom = 0) {
    showMessage = document.getElementById("show_message");
    showMessage.innerText = numberRandom;
}

function countDown(countDownInit = 4) {
    let countDownDateCurrent = new Date();
    countDownDateCurrent.setSeconds(
        countDownDateCurrent.getSeconds() + countDownInit
    );
    countDownDate = countDownDateCurrent.getTime();
    clearInterval(timer);
    var timer = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let minutes = Math.round((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.round((distance % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function closeModel() {
    let myModal = document.getElementById("myModal");
    let timer = setTimeout(() => {
        myModal.style.display = "none";
        clearTimeout(timer);
    }, 3000);
}

function checkAnswer() {
    let result = document.getElementById("show_message_result").innerHTML;
    let inputRep = document.getElementById("input_rep").value;
    console.log(parseInt(inputRep));
    console.log(inputRep == parseInt(result));
    if (inputRep == parseInt(result)) {
        document.getElementById("show_message_result").innerHTML = "SUCCESS";
        closeModel();
    } else {
        document.getElementById("show_message_result").innerHTML = "TRY AGAIN";
        handleCalc();
    }
}

function initEvent() {
    document
        .getElementById("check_answer")
        .addEventListener("click", function() {
            // alert("Hello World!");
            checkAnswer();
        });
}

window.onload = () => {
    console.log("page is fully loaded");
    createElementPage();
    handleCalc();
    initEvent();
    console.log("page is fully loaded OK");
};