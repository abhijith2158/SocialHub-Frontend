<<<<<<< HEAD
$(document).ready(function(){
    $("#form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                minlength:10,
                validEmailOrNumber:true
            },
            password:{
                required:true,
                minlength:8,
                maxlength:16
            },
            day:{
                required:true//ithupole month,yr kude cheyanam.
            },
            abc:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Required minimum 4 characters"
            }
        }
    })
    $.validator.addMethod("validEmailOrNumber",function(value,element){
        return this.optional(element) || (/\S+@\S+\.\S+/.test(value) || /^\d+$/.test(value));
    }, "Please enter a valid Mail id or Number");
=======
$(document).ready(function(){
    $("#form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                minlength:10,
                validEmailOrNumber:true
            },
            password:{
                required:true,
                minlength:8,
                maxlength:16
            },
            day:{
                required:true//ithupole month,yr kude cheyanam.
            },
            abc:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Required minimum 4 characters"
            }
        }
    })
    $.validator.addMethod("validEmailOrNumber",function(value,element){
        return this.optional(element) || (/\S+@\S+\.\S+/.test(value) || /^\d+$/.test(value));
    }, "Please enter a valid Mail id or Number");
>>>>>>> origin/main
})