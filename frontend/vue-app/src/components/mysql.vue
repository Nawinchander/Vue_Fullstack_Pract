<script setup>
import api from "../services/api";
let task = "";
const save = async () => {
await api.post("/mysql/task", { title: task });
};
</script>
