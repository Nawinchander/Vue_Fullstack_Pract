<script setup>
import api from "../services/api";
const register = async () => {
await api.post("/combined/register", { name: "Nawin", email: "n@mail.com" });
};
</script>