export const TransformError = (error) => {
    if (error.response == undefined) return { code: 1000, message: 'Khong co ket noi mang' }
    else {
        if (error.response.status == 500) return { code: 500, message: 'Khong the ket noi den server' }
        else return { code: error.response.status, message: 'Co loi xay ra' }
    }

}