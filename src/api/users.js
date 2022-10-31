import {API, headers} from "./c4hAPI";

export const _getAllUsers = async () =>
    fetch(`${API}/usuarios/verTodosUsuarios.php`, { headers })
        .then(res => res.json())
        .then(res => res.users)
