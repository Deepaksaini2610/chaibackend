class ApiResponse {
    constructor(statusCode,data,message= "success"){
        this.statusCode = statusCode
        this.message = message
        this.success = this.statusCode < 400
    }
}
