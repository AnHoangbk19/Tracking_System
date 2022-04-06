document.getElementById("button_payment").addEventListener("click", function () {
    var arrData = [];
    var container_cart = Array.from(document.getElementsByClassName('container_cart'));
    container_cart.forEach(ele => {
        var obj = {};
        var id = ele.getElementsByClassName('container_cart_item')[0].getAttribute('id');
        var quantity = ele.getElementsByClassName('cart_info_quantity')[0].textContent;
        obj.id = id;
        obj.name = ele.querySelector('.cart_info_name').textContent;
        obj.price = ele.querySelector('.container_cart_info_price > span').textContent
        obj.dongia = parseFloat(obj.price) / parseFloat(quantity)
        obj.quantity = quantity;
        obj.img = ele.querySelector('img').getAttribute('src')
        arrData.push(obj);
    })
    document.querySelector('.app').classList.add('displayNode')
    var totalPrice = 0
    var paymentView = `
    <div class="header payment">
        <div class="header-block row">
            <div class="back-btn col-1">
                <em class="ti-back-left"></em>
            </div>
            <div class="header-term col-10">THANH TOÁN</div>
        </div>
    </div>
    <div class="full-content payment">
        <div class="container">    
            <div class="product-list">
                <div class="list-header row">
                    <div class="product-name col-6">Tên món ăn</div>
                    <div class="product-price col-2">Đơn giá</div>
                    <div class="product-count col-2">Số lượng</div>
                    <div class="product-total col-2">Thành tiền</div>
                </div>
                <div class="show-product">`
    var ArrIDProduct = [];
    var ArrProductQuality = [];
    arrData.forEach(ele => {
        totalPrice += +ele.price
        ArrIDProduct.push(ele.id)
        ArrProductQuality.push(ele.quantity)
        paymentView += `
        <div class="product row">
            <div class="product-img col-sm-1">
                <img class="__box-img" src="${ele.img}">
            </div>
            <div class="product-name col-md-5 col-6">${ele.name}</div>
            <div class="product-price col-2">${ele.dongia}đ</div>
            <div class="product-count col-2">${ele.quantity}</div>
            <div class="product-total col-2">${ele.price}đ</div>
        </div>`
    })
    paymentView += `
                </div>
                <div class="total row">
                    <div class="total-text col-md-2 col-sm-3 col-4">TỔNG TIỀN</div>
                    <div class="total-num col-md-2 col-sm-3 col-4">${totalPrice}đ</div>
                </div>
            </div>
    
            <div class="chooseMethod">
                <div class="chooseMethod--title">
                    Chọn phương thức thanh toán:
                </div>
                <div class="chooseMethod--choose" id="chooseMethod--choose">
                    <div onclick="changemethod('e-banking')" id="e-banking1" class="chooseMethod--method">E-Banking</div>
                    <div onclick="changemethod('e-wallet')" id="e-wallet1" class="chooseMethod--method active--payment">E-Wallet</div>
                </div>
            
                <div class="form" id="form">
                <form id="e-banking" class="form__e-banking hide" action="home/pay" method="post">
                <label for="bank">Chọn ngân hàng:</label>
                <select id="bank" name="bank">
                    <option value="ACB">Ngân hàng Á Châu (ACB)</option>
                    <option value="Agribank">Agribank</option>
                    <option value="SHB">SHB</option>
                </select>
                <label for="seri">Số seri:</label>
                <input type="text" name="seri" id="seri" placeholder="Seri number">
                <p class="price">Tổng tiền : ${totalPrice}đ</p>
                <input type="hidden" name="arr_id" id="arr_id" value="${ArrIDProduct}">
                <input type="hidden" name="user_ID" id="userID" value="<?=$_SESSION['user_ID']?>">
                <input type="hidden" name="price" id="price" value="${totalPrice}">
                <input type="hidden" name="arr_quality" id="arr_quality" value="${ArrProductQuality}">
                <input type="submit" value="Thanh toán">

            </form>
        
            <form id="e-wallet" class="form__e-wallet" action="home/pay" method="post">
            <label for="bank">Chọn Ví điện tử:</label>
            <select id="e-wallet" name="e-wallet">
                <option value="zalo">Zalo Pay</option>
                <option value="momo">Momo</option>
            </select>
            <label for="seri">Số điện thoại:</label>
            <input type="text" name="phone" id="phone" placeholder="Phone number">
            <p class="price">Tổng tiền : ${totalPrice}đ</p>
            <input type="hidden" name="arr_id" id="arr_id" value="${ArrIDProduct}">
            <input type="hidden" name="price" id="price" value="${totalPrice}">
            <input type="hidden" name="user_ID" id="userID" value="<?php echo $_SESSION['user_ID'] ?>">
            <input type="hidden" name="arr_quality" id="arr_quality" value="${ArrProductQuality}">

            <input type="submit" value="Thanh toán">
        </form>
                </div>
                
            </div>
        </div>
    </div>`

    document.querySelector('.__payment-view').innerHTML = paymentView
    document.querySelector('.back-btn').addEventListener("click", function () {
        document.querySelector('.app').classList.remove('displayNode')
        document.querySelector('.__payment-view').innerHTML = ''
    })

});


function changemethod(id) {
    if (id == "e-wallet") {
        current = document.getElementById("e-wallet");
        current.classList.remove("hide")
        document.getElementById("e-banking").className += " hide";

	document.getElementById("e-wallet1").className += " active--payment";
	current1 = document.getElementById("e-banking1");
	current1.classList.remove("active--payment")
    }
    if (id == "e-banking") {
        current = document.getElementById("e-banking");
        current.classList.remove("hide")
        document.getElementById("e-wallet").className += " hide";

	document.getElementById("e-banking1").className += " active--payment";
	current1 = document.getElementById("e-wallet1");
	current1.classList.remove("active--payment")
    }
}


