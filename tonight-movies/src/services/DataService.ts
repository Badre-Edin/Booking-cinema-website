import http from "@/http-common";

class DataService {
    create(data: any): Promise<any> {
        return http.post("/signup/user", data);
    }
}
export default new DataService();