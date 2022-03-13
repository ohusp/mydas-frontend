import Swal from 'sweetalert2'

export const Success_Message = (msg) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: msg,
        showConfirmButton: false,
        timer: 500000000
    })
}

export const Error_Message = (msg) => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        text: msg,
        showConfirmButton: false,
        timer: 5000
    })
}

export const Warning_Message = (msg) => {
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        text: msg,
        showConfirmButton: false,
        timer: 5000000
    })
}

export const Toast_Message = (icon, msg) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 50000000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: icon,
        title: msg,
    })
}