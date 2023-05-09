import { http, IRepoServices } from "@/utils"

const BASE_URL = import.meta.env.VITE_BASE_URL

interface IPara {
  username: string;
  page: number;
  perPage: number;
}

class RepoServices implements IRepoServices {
  getUserInfo(username: string) {
    return http.get(BASE_URL + username);
  }
  getRepo(params: IPara) {
    const { username, page, perPage } = params;
    return http.get(BASE_URL + username + `/repos?type=owner&sort=stars&direction=asc&page=${page}&per_page=${perPage}`)
  }
  getFollowers(username: string) {
    return http.get(BASE_URL + username + "/followers?per_page=3")
  }
}

export default new RepoServices;
