
function  Response(code, msg, data) {
    this.code = code || null;
    this.msg = msg || "";
    this.data = data || null;
}
module.exports = Response;