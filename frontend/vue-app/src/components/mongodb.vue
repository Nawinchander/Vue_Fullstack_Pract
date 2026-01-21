<script setup>
import api from "../services/api";
let name = "";
const save = async () => {
await api.post("/mongo/user", { name, email: name + "@mail.com" });
};
</script>