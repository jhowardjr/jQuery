// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
$(document).ready(function () {
    $("button.filter_button").click(function () {
        $("tbody.addresses_list").remove();
        $("img.address_loader").show()

        $.ajax({
            url: "/addresses",
            type: "get",
            dataType: "json",
            success: function (data) {
                input = $("input.filter_input").val()
                $.each(data, function (index, value) {
                    if (input == value.address || input == value.city || input == value.email || input == value.first_name || input == value.last_name || input == value.state || input == value.zip) {
                        $("table.addresses_table tbody").append("<tr class=\"address\"><td>" + value.first_name + "</td><td>" + value.last_name + "</td><td>" + value.email + "</td><td>" + value.address + "</td><td>" + value.city + "</td><td>" + value.state + "</td><td>" + value.zip + "</td><td><span class=\"icon delete\" attribute_id=\"" + value.id + "\"></span></td></tr>")
                    }

                })
                $("img.address_loader").hide()

            },
            error: function (xhr) {}
        })


    })



    $("table.addresses_table tbody tr td span.icon").live('click', function () {

        $("img.address_loader").show()

        row_id = $(this).attr("attribute_id");
        row = $(this).parent().parent()
        $.ajax({
            url: "/addresses/" + row_id,
            type: "delete",
            dataType: "json",
            success: function (data) {
                console.log(row_id);
                $("img.address_loader").hide()
                row.fadeOut()
            },
            error: function (xhr) {
                console.log(row_id);
            }
        })


    })


    $("button.submit_new_address").click(function () {
        $("img.create_loader").show()
        $("div.error_explanation").hide()
        $("div.error_list").remove()
	
       first_name_field =    $("input#first_name_input").val()
       last_name_field=      $("input#last_name_input").val()
       email_field=          $("input#email_input").val()
       address_field=        $("input#address_input").val()
       city_field=           $("input#city_input").val()
       state_field=       $("input#state_input").val()
       zip_field=         $("input#zip_input").val()
       console.log(address_field)
        $.ajax({
            url: "/addresses",
            type: "post",
            dataType: "json",
            data: {first_name: first_name_field,last_name: last_name_field,email: email_field, address: address_field, city:  city_field, state: state_field, zip: zip_field},
            success: function (data) {
             
                $("img.create_loader").hide()
                $("span.first_name_field").val('')
                $("span.last_name_field").val('')
                $("span.email_field").val('')
                $("span.address_field").val('')
                $("span.city_field").val('')
                $("span.state_field").val('')
                $("span.zip_field").val('')

                $("div.success").fadeIn(1000, function () {
                    $("div.success").fadeOut(3000)
                })

            },
            error: function (xhr) {
                $("div.error_explanation").show()

            }
        })

        $("img.create_loader").hide()

    })


})
