$(document).ready(function () {
    function fetchData() {
        $.ajax({
            url: "./ManagerController/getOrders",
            success: function (data) {
                $('#parent').html(data);
            }
        })
    }
    fetchData()
    setInterval(fetchData, 1000);
    $(document).on('click','.finish_food',function(){
        var id = $(this).data('id')
        $.ajax({
            url: "./ManagerController/finishOrder",
            method: "POST",
            data: {
                id: id,
            },
            success: function(data) {
                fetchData()
            }
        })
    })
})

