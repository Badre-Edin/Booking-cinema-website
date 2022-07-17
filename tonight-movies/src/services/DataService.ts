import http from "@/http-common";

class DataService {
    create(data: any): Promise<any> {
        return http.post("/signup/user", data);
    }
    async access(credentials: any): Promise<any> {
        return await http.post("/login/user", credentials)
            .then(response => response.data);
    }
}

export default new DataService();