import axios from 'axios';
export class Apollo {
    constructor(apiKey) {
        this.taskSearchUrl = 'https://api.apollo.io/v1/tasks/search';
        this.apiKey = apiKey;
    }
    async GetLastask() {
        const payload = {
            api_key: this.apiKey,
            priority: ["medium"],
            per_page: 3,
            open_factor_names: [
                "task_types"
            ]
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await axios.post(this.taskSearchUrl, payload, { headers });
        const priorities = response.data.tasks.filter(task => task.priority === "medium")[0];
        return priorities;
    }
    async TaskPriorityChange(taskid) {
        const payload = {
            api_key: this.apiKey,
            priority: "high"
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        const url = `https://api.apollo.io/v1/tasks/${taskid}`;
        await axios.put(url, payload, { headers });
    }
}
//# sourceMappingURL=getlist.js.map